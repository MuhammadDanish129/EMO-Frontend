import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule
} from 'ng-apexcharts';
import { forkJoin, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { SharedModule } from '../../../shared/shared.module';
import { User } from '../../../shared/services/user/user.type';
import { UserService } from '../../../shared/services/user/user.service';
import {
  CrmDashboardLiveOverviewResponseDTO,
  CrmDashboardSuggestionResponseDTO,
  CrmLiveConsumerResponseDTO
} from './crm.type';
import { EnergyDashboardService } from './crm.services';
import { LiveAlertsService } from './live-alerts.service';
import { LiveOptimizationSuggestionsService } from './live-optimization-suggestions.service';
import { SensorCommandService } from './sensor-command.service';
import { LiveOperationAlertDTO } from './energy-deep-dive/optimization-insights/optimization-dashboard.type';

type LiveLoadChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  fill: ApexFill;
};

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, NgApexchartsModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  isDashboardReady = false;
  isLoading = false;
  isLiveRefreshing = false;
  errorMessage = '';

  liveOverview: CrmDashboardLiveOverviewResponseDTO | null = null;
  suggestions: CrmDashboardSuggestionResponseDTO[] = [];
  isSuggestionsPanelOpen = false;
  liveSessionEnergyKwh = 0;
  lastSocketPacketAt = '';

  liveLoadChart: LiveLoadChartOptions = this.createLiveLoadChart([], []);

  private readonly subscriptions = new Subscription();
  private readonly energyBaselines = new Map<string, number>();
  private readonly latestEnergyValues = new Map<string, number>();
  private readonly liveLoadLabels: string[] = [];
  private readonly liveLoadValues: number[] = [];
  private readonly commandingIdleSensors = new Set<string>();
  private refreshTimer?: ReturnType<typeof setInterval>;

  constructor(
    private readonly userService: UserService,
    private readonly energyDashboardService: EnergyDashboardService,
    public readonly liveAlertsService: LiveAlertsService,
    public readonly liveOptimizationSuggestionsService: LiveOptimizationSuggestionsService,
    private readonly sensorCommandService: SensorCommandService,
    private readonly toaster: ToastrService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;
    this.liveAlertsService.start(this.currentUser?.fkBusiness);
    this.liveOptimizationSuggestionsService.start(this.currentUser?.fkBusiness);
    this.subscriptions.add(
      this.liveOptimizationSuggestionsService.suggestions$.subscribe(items => {
        this.suggestions = items;
      })
    );
    this.observeLiveSensorEnergy();
    this.loadDashboardData();

    this.refreshTimer = setInterval(() => {
      this.refreshLiveOverview();
    }, 15000);
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
    this.liveOptimizationSuggestionsService.stop();
    this.subscriptions.unsubscribe();
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.isDashboardReady = false;
    this.errorMessage = '';

    forkJoin({
      liveOverview: this.energyDashboardService.getDashboardLiveOverview(this.currentUser, true),
      suggestions: this.energyDashboardService.getDashboardSuggestions(this.currentUser)
    }).subscribe({
      next: (response) => {
        if (!response.liveOverview.success || !response.suggestions.success) {
          this.errorMessage = 'Dashboard data could not be loaded properly.';
          this.isLoading = false;
          return;
        }

        this.liveOverview = response.liveOverview.data ?? null;
        this.liveOptimizationSuggestionsService.replaceSnapshot(response.suggestions.data ?? []);
        this.recordLiveLoadPoint();
        this.isDashboardReady = true;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Something went wrong while loading dashboard data.';
        this.isDashboardReady = false;
        this.isLoading = false;
      }
    });
  }

  refreshLiveOverview(): void {
    if (!this.currentUser || this.isLiveRefreshing) {
      return;
    }

    this.isLiveRefreshing = true;
    this.energyDashboardService.getDashboardLiveOverview(this.currentUser).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.liveOverview = response.data;
          this.recordLiveLoadPoint();
        }
        this.isLiveRefreshing = false;
      },
      error: () => {
        this.isLiveRefreshing = false;
      }
    });
  }

  canControlIdleAppliance(alert: LiveOperationAlertDTO): boolean {
    return Boolean(String(alert?.sensorId || '').trim());
  }

  isIdleApplianceCommanding(alert: LiveOperationAlertDTO): boolean {
    return this.commandingIdleSensors.has(String(alert?.sensorId || '').trim());
  }

  sendIdleApplianceCommand(alert: LiveOperationAlertDTO, command: 'ON' | 'OFF'): void {
    const sensorId = String(alert?.sensorId || '').trim();
    if (!sensorId || !this.canControlIdleAppliance(alert) || this.commandingIdleSensors.has(sensorId)) {
      return;
    }

    const applianceName = alert.applianceName || alert.sensorName || 'this appliance';
    const action = command === 'ON' ? 'turn on' : 'turn off';
    const confirmed = window.confirm(`Do you want to ${action} ${applianceName}?`);
    if (!confirmed) {
      return;
    }

    this.commandingIdleSensors.add(sensorId);
    this.sensorCommandService.sendRelayCommand({
      sensorId,
      command,
      reason: `crm_idle_manual_${command.toLowerCase()}`
    }).subscribe({
      next: (response) => {
        this.commandingIdleSensors.delete(sensorId);

        if (!response.success) {
          this.toaster.error(response.remarks || `Failed to ${action} appliance`);
          return;
        }

        if (command === 'OFF') {
          this.liveAlertsService.resolveAlert(alert);
        }

        this.toaster.success(`${applianceName} ${command === 'ON' ? 'turned on' : 'turned off'}`);
      },
      error: () => {
        this.commandingIdleSensors.delete(sensorId);
        this.toaster.error(`Failed to ${action} appliance`);
      }
    });
  }

  openSuggestionsPanel(): void {
    this.isSuggestionsPanelOpen = true;
  }

  closeSuggestionsPanel(): void {
    this.isSuggestionsPanelOpen = false;
  }

  getSuggestionSeverityCount(severity: string): number {
    const normalized = (severity || '').toLowerCase();
    return this.suggestions.filter(item => (item.severity || '').toLowerCase() === normalized).length;
  }

  getIdleEvidenceLabel(alert: LiveOperationAlertDTO): string {
    const seconds = Math.round(Number(alert.evidenceWindowSeconds || 0));
    const samples = Math.round(Number(alert.sampleCount || 0));
    const power = Number(alert.averagePowerW ?? alert.currentPowerW ?? 0);

    if (seconds <= 0 && samples <= 0) {
      return `${power.toFixed(1)} W live reading`;
    }

    return `${power.toFixed(1)} W average · ${samples} samples · ${seconds}s confirmed`;
  }

  getSuggestionIcon(suggestion: CrmDashboardSuggestionResponseDTO): string {
    if (suggestion.conflictsWithPeakHour) {
      return 'ri-flashlight-line';
    }

    switch ((suggestion.severity || '').toLowerCase()) {
      case 'critical': return 'ri-error-warning-line';
      case 'warning': return 'ri-alert-line';
      default: return 'ri-information-line';
    }
  }

  getConsumerName(item: CrmLiveConsumerResponseDTO): string {
    return item.applianceName || item.sensorName || 'Live sensor';
  }

  getConsumerLocation(item: CrmLiveConsumerResponseDTO): string {
    return [item.floorName, item.officeName, item.utilityName]
      .filter(Boolean)
      .join(' · ') || 'Location not assigned';
  }

  getPowerValue(powerW?: number | null): number {
    const value = Math.max(0, Number(powerW || 0));
    return value >= 1000 ? value / 1000 : value;
  }

  getPowerUnit(powerW?: number | null): string {
    return Math.max(0, Number(powerW || 0)) >= 1000 ? 'kW' : 'W';
  }

  getSensorHealthPercent(): number {
    const total = this.liveOverview?.totalSensors || 0;
    return total > 0
      ? Math.round(((this.liveOverview?.onlineSensors || 0) / total) * 100)
      : 0;
  }

  getReadinessLabel(): string {
    const readiness = this.liveOverview?.optimizationReadinessPercent || 0;
    if (readiness >= 90) return 'Ready';
    if (readiness >= 60) return 'Partially ready';
    return 'Setup required';
  }

  getReadinessClass(): string {
    const readiness = this.liveOverview?.optimizationReadinessPercent || 0;
    if (readiness >= 90) return 'is-ready';
    if (readiness >= 60) return 'is-partial';
    return 'is-required';
  }

  getLastUpdateLabel(value?: string | null): string {
    if (!value) return 'Waiting for live packet';
    const timestamp = new Date(value).getTime();
    if (!Number.isFinite(timestamp)) return 'Waiting for live packet';

    const seconds = Math.max(0, Math.floor((Date.now() - timestamp) / 1000));
    if (seconds < 10) return 'Updated just now';
    if (seconds < 60) return `Updated ${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `Updated ${minutes}m ago`;
    return `Updated ${Math.floor(minutes / 60)}h ago`;
  }

  trackBySensorId(_: number, item: CrmLiveConsumerResponseDTO): string {
    return item.sensorId;
  }

  private observeLiveSensorEnergy(): void {
    this.subscriptions.add(
      this.liveAlertsService.allSensorCards$.subscribe(cards => {
        let latestPacket = 0;

        for (const card of cards) {
          const sensorId = String(card?.sensorId || '').trim();
          const activeEnergy = Number(card?.activeEnergy || 0);
          if (!sensorId || !Number.isFinite(activeEnergy) || activeEnergy < 0) {
            continue;
          }

          if (!this.energyBaselines.has(sensorId)) {
            this.energyBaselines.set(sensorId, activeEnergy);
          }
          this.latestEnergyValues.set(sensorId, activeEnergy);

          const packetTime = new Date(card?.receivedAt || '').getTime();
          if (Number.isFinite(packetTime)) {
            latestPacket = Math.max(latestPacket, packetTime);
          }
        }

        this.liveSessionEnergyKwh = Array.from(this.latestEnergyValues.entries())
          .reduce((total, [sensorId, current]) => {
            const baseline = this.energyBaselines.get(sensorId) ?? current;
            const difference = current - baseline;
            return difference > 0 && difference < 1000 ? total + difference : total;
          }, 0);

        if (latestPacket > 0) {
          this.lastSocketPacketAt = new Date(latestPacket).toISOString();
        }
      })
    );
  }

  private recordLiveLoadPoint(): void {
    if (!this.liveOverview) {
      return;
    }

    const now = new Date();
    this.liveLoadLabels.push(
      now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    );
    this.liveLoadValues.push(Number((this.liveOverview.currentLoadW / 1000).toFixed(3)));

    if (this.liveLoadLabels.length > 20) {
      this.liveLoadLabels.shift();
      this.liveLoadValues.shift();
    }

    this.liveLoadChart = this.createLiveLoadChart(
      [...this.liveLoadLabels],
      [...this.liveLoadValues]
    );
  }

  private createLiveLoadChart(categories: string[], values: number[]): LiveLoadChartOptions {
    return {
      series: [{ name: 'Live load', data: values }],
      chart: {
        type: 'area',
        height: 260,
        toolbar: { show: false },
        animations: { enabled: true, speed: 350 },
        zoom: { enabled: false }
      },
      xaxis: {
        categories,
        labels: { show: categories.length > 1, rotate: 0 },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: (value: number) => `${value.toFixed(value >= 10 ? 0 : 1)} kW`
        }
      },
      stroke: { curve: 'smooth', width: 3 },
      dataLabels: { enabled: false },
      tooltip: {
        y: { formatter: (value: number) => `${value.toFixed(3)} kW` }
      },
      fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 0.25, opacityFrom: 0.35, opacityTo: 0.04 }
      }
    };
  }
}
