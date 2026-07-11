import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { SharedModule } from '../../../shared/shared.module';
import { User } from '../../../shared/services/user/user.type';
import { UserService } from '../../../shared/services/user/user.service';
import {
  CrmDashboardSummaryResponseDTO,
  CrmDashboardSuggestionResponseDTO
} from './crm.type';
import { EnergyDashboardService } from './crm.services';
import { LiveAlertsService } from './live-alerts.service';
import { SensorCommandService } from './sensor-command.service';
import { LiveOperationAlertDTO } from './energy-deep-dive/optimization-insights/optimization-dashboard.type';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent implements OnInit {
  currentUser: User | null = null;
  isDashboardReady = false;
  isLoading = false;
  errorMessage = '';

  summary: CrmDashboardSummaryResponseDTO | null = null;
  suggestions: CrmDashboardSuggestionResponseDTO[] = [];

  constructor(
    private readonly userService: UserService,
    private readonly energyDashboardService: EnergyDashboardService,
    public readonly liveAlertsService: LiveAlertsService,
    private readonly sensorCommandService: SensorCommandService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;
    this.loadDashboardData();
    this.liveAlertsService.start(this.currentUser?.fkBusiness);
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.isDashboardReady = false;
    this.errorMessage = '';

    forkJoin({
      summary: this.energyDashboardService.getDashboardSummary(this.currentUser),
      suggestions: this.energyDashboardService.getDashboardSuggestions(this.currentUser)
    }).subscribe({
      next: (response) => {
        if (!response.summary.success || !response.suggestions.success) {
          this.errorMessage = 'Dashboard data could not be loaded properly.';
          this.isLoading = false;
          return;
        }

        this.summary = response.summary.data ?? null;
        this.suggestions = response.suggestions.data ?? [];
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

  turnOffIdleAppliance(alert: LiveOperationAlertDTO): void {
    if (!alert?.sensorId || !alert.canTurnOff || alert.commandSent) {
      return;
    }

    const confirmed = window.confirm(`Turn off ${alert.applianceName || alert.sensorName}?`);
    if (!confirmed) {
      return;
    }

    this.sensorCommandService.sendRelayCommand({
      sensorId: alert.sensorId,
      command: 'OFF',
      reason: 'idle_auto_off'
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.liveAlertsService.resolveAlert(alert);
          return;
        }
        console.error(response.remarks || 'Command failed');
      },
      error: (error) => console.error('Command failed', error)
    });
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
}
