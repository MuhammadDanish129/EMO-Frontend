import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
  NgApexchartsModule
} from 'ng-apexcharts';

import { SharedModule } from '../../../shared/shared.module';
import { User } from '../../../shared/services/user/user.type';
import { UserService } from '../../../shared/services/user/user.service';

import {
  CrmAnalysisChartType,
  CrmChartRange,
  CrmDashboardChartResponseDTO,
  CrmDashboardSummaryResponseDTO,
  CrmDashboardSuggestionResponseDTO,
  EnergyConsumptionByDeviceTypeResponseDTO,
  MonthlyDeviceTypeReportResponseDTO
} from './crm.type';

import { EnergyDashboardService } from './crm.services';
import { LiveAlertsService } from './live-alerts.service';
import { SensorCommandService } from './sensor-command.service';
import { LiveOperationAlertDTO } from './energy-deep-dive/optimization-insights/optimization-dashboard.type';

type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  legend: ApexLegend;
  colors: string[];
  grid: ApexGrid;
  tooltip: ApexTooltip;
};

type DonutChartOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};

type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  colors: string[];
  grid: ApexGrid;
  legend: ApexLegend;
  markers: ApexMarkers;
};

interface MonthBucket {
  key: string;
  label: string;
  sortValue: number;
  total: number;
  utilities: Map<string, number>;
}

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgApexchartsModule,
    SharedModule
  ],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;

  currentUser: User | null = null;

  isDashboardReady = false;
  isLoading = false;
  errorMessage = '';

  summary: CrmDashboardSummaryResponseDTO | null = null;
  monthlyDeviceTypeReport: MonthlyDeviceTypeReportResponseDTO[] = [];
  consumptionByDeviceType: EnergyConsumptionByDeviceTypeResponseDTO[] = [];
  analysisChart: CrmDashboardChartResponseDTO | null = null;
  hourlyUsageChart: CrmDashboardChartResponseDTO | null = null;
  utilityWiseUsageChart: CrmDashboardChartResponseDTO | null = null;
  suggestions: CrmDashboardSuggestionResponseDTO[] = [];

  deviceTypeChartOptions: Partial<BarChartOptions> | any;
  monthlyReportChartOptions: Partial<DonutChartOptions> | any;
  analysisChartOptions: Partial<LineChartOptions> | any;
  hourlyUsageChartOptions: Partial<BarChartOptions> | any;
  utilityWiseUsageChartOptions: Partial<BarChartOptions> | any;

  monthlyReportTotalPercentage = 0;
  totalConsumption = 0;
  monthlyAverage = 0;
  highestMonthLabel = 'No data';
  highestMonthValue = 0;
  topUtilityName = 'No data';
  topUtilityShare = 0;

  selectedAnalysisChartType: CrmAnalysisChartType = 'peaknonpeak';
  selectedChartRange: CrmChartRange = '30d';
  private readonly maximumCustomRangeYears = 1;
  chartTypeOptions: { label: string; value: CrmAnalysisChartType }[] = [
    { label: 'Peak vs Non-Peak', value: 'peaknonpeak' },
    { label: 'High Demand', value: 'peakdemand' },
    { label: 'Energy Consumption', value: 'energyconsumption' }
  ];
  rangeOptions: { label: string; value: CrmChartRange }[] = [
    { label: 'Last 24 Hours', value: '24h' },
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'Custom', value: 'custom' }
  ];

  startDate = '';
  endDate = '';
  dateRangeError = '';

  private monthBuckets: MonthBucket[] = [];
  private readonly maxVisibleXAxisLabels = 10;
  private readonly chartColors = [
    'rgb(132, 90, 223)',
    'rgb(35, 183, 229)',
    'rgb(38, 191, 148)',
    'rgb(245, 184, 73)',
    'rgb(230, 83, 60)',
    'rgb(73, 182, 245)',
    'rgb(151, 186, 72)'
  ];

  constructor(
    private userService: UserService,
    private energyDashboardService: EnergyDashboardService,
    public liveAlertsService: LiveAlertsService,
    private sensorCommandService: SensorCommandService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;
    this.setDefaultDates();
    this.loadDashboardData();
    this.liveAlertsService.start(this.currentUser?.fkBusiness);
  }

  setDefaultDates(): void {
    const today = new Date();
    const last30Days = new Date();
    last30Days.setDate(today.getDate() - 30);
    this.endDate = this.formatDate(today);
    this.startDate = this.formatDate(last30Days);
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.isDashboardReady = false;
    this.errorMessage = '';

    forkJoin({
      summary: this.energyDashboardService.getDashboardSummary(this.currentUser),
      monthlyDeviceTypeReport: this.energyDashboardService.getMonthlyDeviceTypeReport(this.currentUser),
      consumptionByDeviceType: this.energyDashboardService.getEnergyConsumptionByDeviceTypeLast12Months(this.currentUser),
      analysisChart: this.energyDashboardService.getDashboardChart(this.currentUser, this.selectedAnalysisChartType, this.selectedChartRange, this.startDate, this.endDate),
      hourlyUsage: this.energyDashboardService.getDashboardChart(this.currentUser, 'hourlyusage', '24h'),
      utilityWiseUsage: this.energyDashboardService.getDashboardChart(this.currentUser, 'utilitywise', '30d'),
      suggestions: this.energyDashboardService.getDashboardSuggestions(this.currentUser)
    }).subscribe({
      next: (res) => {
        if (
          !res.monthlyDeviceTypeReport.success ||
          !res.consumptionByDeviceType.success ||
          !res.analysisChart.success ||
          !res.hourlyUsage.success ||
          !res.utilityWiseUsage.success
        ) {
          this.errorMessage = 'Dashboard data could not be loaded properly.';
          this.isLoading = false;
          return;
        }

        this.summary = res.summary.data ?? null;
        this.monthlyDeviceTypeReport = res.monthlyDeviceTypeReport.data ?? [];
        this.consumptionByDeviceType = res.consumptionByDeviceType.data ?? [];
        this.analysisChart = res.analysisChart.data ?? null;
        this.hourlyUsageChart = res.hourlyUsage.data ?? null;
        this.utilityWiseUsageChart = res.utilityWiseUsage.data ?? null;
        this.suggestions = res.suggestions.data ?? [];

        this.prepareMonthlyDeviceTypeReportChart();
        this.prepareEnergyConsumptionChart();
        this.prepareAnnualKpis();
        this.prepareAnalysisChart();
        this.prepareHourlyUsageChart();
        this.prepareUtilityWiseUsageChart();

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

  onAnalysisChartTypeChange(): void {
    this.applyAnalysisFilter();
  }

  onRangeChange(): void {
    if (this.selectedChartRange !== 'custom') {
      this.applyAnalysisFilter();
    }
  }

  applyAnalysisFilter(): void {
    if (this.selectedChartRange === 'custom' && !this.validateDateRange()) {
      return;
    }

    this.isLoading = true;
    this.energyDashboardService
      .getDashboardChart(
        this.currentUser,
        this.selectedAnalysisChartType,
        this.selectedChartRange,
        this.startDate,
        this.endDate
      )
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.analysisChart = res.data ?? null;
            this.prepareAnalysisChart();
          }
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }

  get selectedAnalysisTitle(): string {
    return this.chartTypeOptions.find(x => x.value === this.selectedAnalysisChartType)?.label || 'Energy Analysis';
  }

  get selectedAnalysisDescription(): string {
    switch (this.selectedAnalysisChartType) {
      case 'peaknonpeak':
        return 'Compare configured peak and non-peak consumption.';
      case 'peakdemand':
        return 'Track high demand by selected period.';
      default:
        return 'Review total energy consumption by selected period.';
    }
  }

  get analysisPrimaryMetricLabel(): string {
    switch (this.selectedAnalysisChartType) {
      case 'peaknonpeak':
        return 'Peak usage';
      case 'peakdemand':
        return 'Peak demand';
      default:
        return 'Total usage';
    }
  }

  get analysisPrimaryMetricValue(): number {
    switch (this.selectedAnalysisChartType) {
      case 'peaknonpeak':
        return this.analysisChart?.totalPeakKwh ?? 0;
      case 'peakdemand':
        return this.analysisChart?.peakDemandW ?? 0;
      default:
        return this.analysisChart?.totalKwh ?? 0;
    }
  }

  get analysisPrimaryMetricUnit(): string {
    return this.selectedAnalysisChartType === 'peakdemand' ? 'W' : 'kWh';
  }

  get analysisSecondaryMetricLabel(): string {
    return this.selectedAnalysisChartType === 'peaknonpeak' ? 'Non-peak usage' : 'Total usage';
  }

  get analysisSecondaryMetricValue(): number {
    return this.selectedAnalysisChartType === 'peaknonpeak'
      ? this.analysisChart?.totalNonPeakKwh ?? 0
      : this.analysisChart?.totalKwh ?? 0;
  }

  get minimumStartDate(): string {
    const endDate = this.parseInputDate(this.endDate);
    if (!endDate) return '';
    endDate.setFullYear(endDate.getFullYear() - this.maximumCustomRangeYears);
    return this.formatDate(endDate);
  }

  get maximumEndDate(): string {
    const startDate = this.parseInputDate(this.startDate);
    if (!startDate) return '';
    startDate.setFullYear(startDate.getFullYear() + this.maximumCustomRangeYears);
    return this.formatDate(startDate);
  }

  validateDateRange(): boolean {
    this.dateRangeError = '';
    const startDate = this.parseInputDate(this.startDate);
    const endDate = this.parseInputDate(this.endDate);

    if (!startDate || !endDate) {
      this.dateRangeError = 'Select both a start date and an end date.';
      return false;
    }

    if (startDate > endDate) {
      this.dateRangeError = 'The start date must be before the end date.';
      return false;
    }

    const maximumEndDate = new Date(startDate);
    maximumEndDate.setFullYear(maximumEndDate.getFullYear() + this.maximumCustomRangeYears);

    if (endDate > maximumEndDate) {
      this.dateRangeError = 'The selected date range cannot exceed one year.';
      return false;
    }

    return true;
  }

  blockChartPageScroll(event: WheelEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  prepareMonthlyDeviceTypeReportChart(): void {
    const labels = this.monthlyDeviceTypeReport.map(x => x.utilityName || 'Unknown');
    const series = this.monthlyDeviceTypeReport.map(x => Number(Number(x.percentage || 0).toFixed(2)));
    this.monthlyReportTotalPercentage = Number(series.reduce((sum, value) => sum + value, 0).toFixed(2));

    this.monthlyReportChartOptions = {
      series,
      labels,
      colors: this.chartColors,
      chart: {
        height: 210,
        width: '100%',
        type: 'donut',
        fontFamily: 'inherit',
        animations: { enabled: false }
      },
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '78%',
            labels: {
              show: true,
              name: { show: true, fontSize: '0.875rem', fontWeight: 500, color: '#8c9097', offsetY: -6 },
              value: { show: true, fontSize: '1.375rem', fontWeight: 700, color: '#1f2937', offsetY: 6, formatter: () => `${this.monthlyReportTotalPercentage.toFixed(0)}%` },
              total: { show: true, showAlways: true, label: 'Total', fontSize: '0.875rem', fontWeight: 500, color: '#8c9097', formatter: () => `${this.monthlyReportTotalPercentage.toFixed(0)}%` }
            }
          }
        }
      },
      legend: { show: false },
      stroke: { show: true, colors: '#fff', width: 0 },
      tooltip: { y: { formatter: (value: number) => `${value.toFixed(2)}%` } }
    };
  }

  prepareEnergyConsumptionChart(): void {
    const monthOrder = this.getLast12MonthLabels();
    const utilities = Array.from(new Set(this.consumptionByDeviceType.map(x => x.utilityName || 'Unknown')));
    const consumptionLookup = new Map<string, number>();

    this.consumptionByDeviceType.forEach(item => {
      const monthKey = this.getMonthYearKey(item.month, item.year);
      if (!monthKey) return;

      const utilityName = item.utilityName || 'Unknown';
      const lookupKey = `${monthKey}::${utilityName}`;
      const totalKwh = Number(item.totalKwh) || 0;
      consumptionLookup.set(lookupKey, (consumptionLookup.get(lookupKey) || 0) + totalKwh);
    });

    const series = utilities.map(utility => ({
      name: utility,
      data: monthOrder.map(monthLabel => {
        const monthKey = this.getMonthYearKeyFromLabel(monthLabel);
        const value = monthKey ? consumptionLookup.get(`${monthKey}::${utility}`) : 0;
        return Number(Number(value || 0).toFixed(2));
      })
    }));

    this.deviceTypeChartOptions = this.buildBarChartOptions(series, monthOrder, 'kWh', true);
  }

  prepareAnalysisChart(): void {
    const data = this.analysisChart;
    const categories = data?.categories ?? [];
    const series = (data?.series ?? []).map(item => ({
      name: item.name,
      data: item.data.map((value, index) => ({
        x: this.getCategoryTimestamp(data?.points?.[index]?.period || data?.points?.[index]?.label || categories[index], index, item.data.length),
        y: Number(Number(value || 0).toFixed(2))
      }))
    }));

    const unit = data?.unit || (this.selectedAnalysisChartType === 'peakdemand' ? 'W' : 'kWh');
    this.analysisChartOptions = this.buildLineChartOptions(series, unit);
  }

  prepareHourlyUsageChart(): void {
    const data = this.hourlyUsageChart;
    const categories = data?.categories ?? [];
    const series = (data?.series ?? []).map(item => ({
      name: item.name,
      data: item.data.map(value => Number(Number(value || 0).toFixed(2)))
    }));
    this.hourlyUsageChartOptions = this.buildBarChartOptions(series, categories, 'kWh', false);
  }

  prepareUtilityWiseUsageChart(): void {
    const data = this.utilityWiseUsageChart;
    const categories = data?.categories ?? [];
    const series = (data?.series ?? []).map(item => ({
      name: item.name,
      data: item.data.map(value => Number(Number(value || 0).toFixed(2)))
    }));
    this.utilityWiseUsageChartOptions = this.buildBarChartOptions(series, categories, 'kWh', false);
  }

  private buildBarChartOptions(series: ApexAxisChartSeries, categories: string[], unit: string, stacked: boolean): Partial<BarChartOptions> | any {
    return {
      series,
      chart: {
        type: 'bar',
        height: 320,
        stacked,
        fontFamily: 'inherit',
        animations: { enabled: false },
        toolbar: { show: false }
      },
      grid: {
        borderColor: '#f5f4f4',
        strokeDashArray: 5,
        yaxis: { lines: { show: true } }
      },
      colors: this.chartColors,
      plotOptions: { bar: { columnWidth: '35%', borderRadius: 4 } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'top' },
      xaxis: { categories, crosshairs: { show: false }, labels: { style: { fontSize: '11px' } } },
      yaxis: { labels: { formatter: (val: number) => `${val.toFixed(0)} ${unit}` } },
      fill: { opacity: 1 },
      tooltip: { shared: true, intersect: false, y: { formatter: (value: number) => `${value.toFixed(2)} ${unit}` } }
    };
  }

  private buildLineChartOptions(series: ApexAxisChartSeries, unit: string): Partial<LineChartOptions> | any {
    return {
      series,
      chart: {
        type: 'line',
        height: 300,
        fontFamily: 'inherit',
        animations: { enabled: false },
        zoom: { enabled: true, type: 'x', autoScaleYaxis: true },
        toolbar: {
          show: true,
          autoSelected: 'zoom',
          tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true }
        }
      },
      colors: this.chartColors,
      stroke: { curve: 'smooth', width: 2 },
      markers: { size: 0, hover: { sizeOffset: 0 } },
      dataLabels: { enabled: false },
      grid: { borderColor: '#f1f1f1', strokeDashArray: 3 },
      xaxis: {
        type: 'datetime',
        crosshairs: { show: false },
        tickAmount: Math.min(series?.[0]?.data?.length || 0, this.maxVisibleXAxisLabels),
        labels: {
          datetimeUTC: false,
          rotate: -35,
          rotateAlways: (series?.[0]?.data?.length || 0) > 8,
          hideOverlappingLabels: true,
          trim: true,
          minHeight: 58,
          maxHeight: 80,
          style: { fontSize: '10px' }
        }
      },
      yaxis: { labels: { formatter: (val: number) => `${val.toFixed(0)} ${unit}` } },
      legend: { show: true, position: 'top' },
      tooltip: {
        shared: true,
        intersect: false,
        x: { formatter: (value: number) => this.formatChartDate(value, true) },
        y: { formatter: (value: number) => `${value.toFixed(2)} ${unit}` }
      }
    };
  }

  prepareAnnualKpis(): void {
    this.monthBuckets = this.buildMonthBuckets();
    this.totalConsumption = this.monthBuckets.reduce((sum, bucket) => sum + bucket.total, 0);
    this.monthlyAverage = this.monthBuckets.length ? this.totalConsumption / this.monthBuckets.length : 0;

    const highestMonth = this.monthBuckets.reduce<MonthBucket | null>((highest, bucket) => !highest || bucket.total > highest.total ? bucket : highest, null);
    this.highestMonthLabel = highestMonth?.label || 'No data';
    this.highestMonthValue = highestMonth?.total || 0;

    const utilities = Array.from(new Set(this.consumptionByDeviceType.map(item => item.utilityName || 'Unknown')));
    const utilityTotals = utilities
      .map(name => ({
        name,
        total: this.monthBuckets.reduce((sum, bucket) => sum + (bucket.utilities.get(name) || 0), 0)
      }))
      .sort((a, b) => b.total - a.total);

    const top = utilityTotals[0];
    this.topUtilityName = top?.name || 'No data';
    this.topUtilityShare = top && this.totalConsumption > 0 ? (top.total / this.totalConsumption) * 100 : 0;
  }

  turnOffIdleAppliance(alert: LiveOperationAlertDTO): void {
    if (!alert?.sensorId || !alert.canTurnOff || alert.commandSent) {
      return;
    }

    const ok = window.confirm(`Turn off ${alert.applianceName || alert.sensorName}?`);
    if (!ok) {
      return;
    }

    this.sensorCommandService.sendRelayCommand({
      sensorId: alert.sensorId,
      command: 'OFF',
      reason: 'idle_auto_off'
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.liveAlertsService.resolveAlert(alert);
          return;
        }
        console.error(res.remarks || 'Command failed');
      },
      error: (err) => console.error('Command failed', err)
    });
  }

  exportPeakNonPeakCsv(): void {
    this.energyDashboardService.exportPeakNonPeakAnalysisCsv(this.startDate, this.endDate, this.currentUser)
      .subscribe(blob => this.downloadFile(blob, 'peak-non-peak-analysis.csv'));
  }

  exportEnergyConsumptionCsv(): void {
    this.energyDashboardService.exportEnergyConsumptionByDeviceTypeCsv(this.currentUser)
      .subscribe(blob => this.downloadFile(blob, 'energy-consumption-by-device-type.csv'));
  }

  getSuggestionIcon(suggestion: CrmDashboardSuggestionResponseDTO): string {
    if (suggestion.conflictsWithPeakHour) return 'ri-flashlight-line';
    switch ((suggestion.severity || '').toLowerCase()) {
      case 'critical': return 'ri-error-warning-line';
      case 'warning': return 'ri-alert-line';
      default: return 'ri-information-line';
    }
  }

  private buildMonthBuckets(): MonthBucket[] {
    const buckets = new Map<string, MonthBucket>();

    this.consumptionByDeviceType.forEach(item => {
      const monthIndex = this.getMonthIndex(item.month);
      const safeMonthIndex = monthIndex >= 0 ? monthIndex : 0;
      const key = `${item.year}-${safeMonthIndex}-${item.month}`;
      const label = monthIndex >= 0
        ? new Date(item.year, monthIndex, 1).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
        : `${item.month} ${item.year}`;

      if (!buckets.has(key)) {
        buckets.set(key, { key, label, sortValue: new Date(item.year, safeMonthIndex, 1).getTime(), total: 0, utilities: new Map<string, number>() });
      }

      const bucket = buckets.get(key);
      if (!bucket) return;

      const utilityName = item.utilityName || 'Unknown';
      const value = Number(item.totalKwh) || 0;
      bucket.total += value;
      bucket.utilities.set(utilityName, (bucket.utilities.get(utilityName) || 0) + value);
    });

    return Array.from(buckets.values()).sort((first, second) => first.sortValue - second.sortValue);
  }

  downloadFile(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  getLast12MonthLabels(): string[] {
    const labels: string[] = [];
    const today = new Date();

    for (let i = 11; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      labels.push(`${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear()}`);
    }

    return labels;
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private getCategoryTimestamp(label: string | undefined, index: number, totalPoints = 0): number {
    const normalizedLabel = String(label || '').trim();
    const parsed = this.parseChartDateLabel(normalizedLabel);
    if (parsed) return parsed.getTime();

    const monthDayDate = this.parseMonthDayLabel(normalizedLabel, index, totalPoints);
    if (monthDayDate) return monthDayDate.getTime();

    const timeDate = this.parseTimeLabel(normalizedLabel, index, totalPoints);
    if (timeDate) return timeDate.getTime();

    return this.getIndexedFallbackDate(index, totalPoints).getTime();
  }

  private parseChartDateLabel(label: string): Date | null {
    if (!label) return null;

    const monthYearMatch = label.match(/^([A-Za-z]{3,9})[\s-]+(\d{4})$/);
    if (monthYearMatch) {
      const monthIndex = this.getMonthIndex(monthYearMatch[1]);
      const year = Number(monthYearMatch[2]);
      if (monthIndex >= 0 && !Number.isNaN(year)) {
        return new Date(year, monthIndex, 1);
      }
    }

    const yearMonthMatch = label.match(/^(\d{4})[-/](\d{1,2})$/);
    if (yearMonthMatch) {
      const year = Number(yearMonthMatch[1]);
      const monthIndex = Number(yearMonthMatch[2]) - 1;
      if (!Number.isNaN(year) && monthIndex >= 0 && monthIndex <= 11) {
        return new Date(year, monthIndex, 1);
      }
    }

    const hasExplicitYear = /\b\d{4}\b/.test(label);
    const looksDateLike = /^\d{4}[-/]\d{1,2}[-/]\d{1,2}/.test(label)
      || /^\d{1,2}[-/]\d{1,2}[-/]\d{4}/.test(label)
      || /^[A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4}/.test(label);

    if (!hasExplicitYear || !looksDateLike) return null;

    const parsed = new Date(label);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  private parseMonthDayLabel(label: string, index: number, totalPoints: number): Date | null {
    const match = label.match(/^([A-Za-z]{3,9})\s+(\d{1,2})$/);
    if (!match) return null;

    const monthIndex = this.getMonthIndex(match[1]);
    const day = Number(match[2]);
    if (monthIndex < 0 || Number.isNaN(day)) return null;

    const anchorDate = this.getIndexedFallbackDate(index, totalPoints);
    const startDate = this.parseInputDate(this.startDate);
    const endDate = this.parseInputDate(this.endDate);
    let year = anchorDate.getFullYear();

    if (startDate && endDate && startDate.getFullYear() !== endDate.getFullYear()) {
      const startCandidate = new Date(startDate.getFullYear(), monthIndex, day);
      const endCandidate = new Date(endDate.getFullYear(), monthIndex, day);
      year = Math.abs(startCandidate.getTime() - anchorDate.getTime()) <= Math.abs(endCandidate.getTime() - anchorDate.getTime())
        ? startDate.getFullYear()
        : endDate.getFullYear();
    }

    return new Date(year, monthIndex, day);
  }

  private parseTimeLabel(label: string, index: number, totalPoints: number): Date | null {
    if (this.selectedChartRange !== '24h') return null;

    const match = label.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);
    if (!match) return null;

    let hours = Number(match[1]);
    const minutes = Number(match[2] || 0);
    const meridiem = match[3]?.toLowerCase();

    if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
    if (meridiem === 'pm' && hours < 12) hours += 12;
    if (meridiem === 'am' && hours === 12) hours = 0;
    if (hours > 23 || minutes > 59) return null;

    const date = this.getIndexedFallbackDate(index, totalPoints);
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  private getIndexedFallbackDate(index: number, totalPoints: number): Date {
    const startDate = this.parseInputDate(this.startDate);
    const endDate = this.parseInputDate(this.endDate) || new Date();

    if (this.selectedChartRange === '24h') {
      const date = new Date(endDate);
      date.setHours(date.getHours() - Math.max(totalPoints - index - 1, 0), 0, 0, 0);
      return date;
    }

    const fallbackDate = startDate ? new Date(startDate) : new Date(endDate);
    fallbackDate.setDate(fallbackDate.getDate() + index);
    return fallbackDate;
  }

  private parseInputDate(value: string): Date | null {
    if (!value) return null;
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  private formatChartDate(value: number, includeYear: boolean): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', ...(includeYear ? { year: 'numeric' } : {}) });
  }

  private getMonthIndex(month: string): number {
    const normalizedMonth = String(month || '').trim().slice(0, 3).toLowerCase();
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    return months.indexOf(normalizedMonth);
  }

  private getMonthYearKey(month: string, year: number | string): string | null {
    const monthIndex = this.getMonthIndex(month);
    const numericYear = Number(year);
    if (monthIndex < 0 || Number.isNaN(numericYear)) return null;
    return `${numericYear}-${String(monthIndex + 1).padStart(2, '0')}`;
  }

  private getMonthYearKeyFromLabel(label: string): string | null {
    const match = String(label || '').trim().match(/^([A-Za-z]{3,9})\s+(\d{4})$/);
    if (!match) return null;
    return this.getMonthYearKey(match[1], match[2]);
  }
}
