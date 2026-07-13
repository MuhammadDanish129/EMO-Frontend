import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LiveConsumptionComponent } from '../../live-consumption/live-consumption.component';
import { CrmAnalysisChartType, CrmDashboardChartResponseDTO } from '../crm.type';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { UserService } from '../../../../shared/services/user/user.service';
import { ReportingTimezoneService } from '../../../../shared/services/reporting-timezone/reporting-timezone.service';
import { User } from '../../../../shared/services/user/user.type';
import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';
import { EnergyDeepDiveService } from './energy-deep-dive.service';
import {
  BreadcrumbDto,
  BreakdownView,
  ChildCardDto,
  ConfigurationRequirementStatus,
  DashboardLevel,
  DashboardRange,
  DashboardResponse,
  DeepDiveConfigurationRequirement,
  DeepDiveResponse,
  HierarchyNodeDto,
  MetricView,
  TimeSeriesPointDto,
} from './energy-deep-dive.types';

type DashboardView = 'hierarchy' | 'analysis' | 'live';

type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  fill: ApexFill;
  colors: string[];
};

type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  dataLabels: ApexDataLabels;
  colors: string[];
};

@Component({
  selector: 'app-energy-deep-dive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgApexchartsModule, YxSelectComponent, LiveConsumptionComponent],
  templateUrl: './energy-deep-dive.component.html',
  styleUrls: ['./energy-deep-dive.component.scss', '../crm.component.scss'],
})
export class EnergyDeepDiveComponent implements OnInit {
  isLoading = false;
  isAnalysisLoading = false;
  errorMessage = '';
  analysisError = '';

  level: DashboardLevel = 'business';
  currentId = '';
  range: DashboardRange = '24h';
  readonly rangeOptions: { label: string; value: DashboardRange }[] = [
    { label: 'Last 24 hours', value: '24h' },
    { label: 'Last 7 days', value: '7d' },
    { label: 'Last 30 days', value: '30d' },
    { label: 'Last 90 days', value: '90d' },
    { label: 'Last 1 year', value: '1y' },
  ];
  selectedView: DashboardView = 'hierarchy';
  analysisMetricView: MetricView = 'energy';
  analysisBreakdownView: BreakdownView = 'share';

  data?: DashboardResponse;
  analysisData?: DeepDiveResponse;
  breadcrumbs: BreadcrumbDto[] = [];
  childCards: ChildCardDto[] = [];
  currentUser: User | null = null;
  reportingTimeZone = 'UTC';
  detectedTimeZone = 'UTC';
  timezoneConfirmed = false;
  readonly reportingTimeZones: string[];

  hourlyEnergyChart?: LineChartOptions;
  activePowerChart?: LineChartOptions;
  voltageCurrentChart?: LineChartOptions;
  powerFactorChart?: LineChartOptions;
  frequencyChart?: LineChartOptions;
  pfDonutChart?: DonutChartOptions;
  hourlyDemandChart?: LineChartOptions;

  analysisTrendChart?: LineChartOptions;
  analysisDemandChart?: LineChartOptions;
  analysisPeakChart?: DonutChartOptions;
  analysisShareChart: any;
  analysisRankingChart: any;

  selectedCrmChartType: CrmAnalysisChartType | 'highdemand' = 'peaknonpeak';
  readonly crmChartTypeOptions = [
    { label: 'Peak vs Non-Peak', value: 'peaknonpeak' },
    { label: 'Energy Consumption', value: 'energyconsumption' },
    { label: 'High Demand', value: 'highdemand' },
  ];
  crmAnalysisChart?: CrmDashboardChartResponseDTO;
  crmAnalysisChartOptions: any;
  utilityTrendChartOptions: any;
  utilityMixChartOptions: any;

  private readonly chartPalette = [
    'rgb(132, 90, 223)',
    'rgb(35, 183, 229)',
    'rgb(38, 191, 148)',
    'rgb(245, 184, 73)',
  ];
  private readonly selectedViewStorageKey = 'emo.energy-deep-dive.selected-view';

  constructor(
    private dashboardService: EnergyDeepDiveService,
    private userService: UserService,
    private reportingTimezoneService: ReportingTimezoneService,
  ) {
    this.reportingTimeZones = this.reportingTimezoneService.getSupportedTimezones();
  }

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;
    this.detectedTimeZone = this.reportingTimezoneService.detectedTimezone;
    this.reportingTimeZone = this.reportingTimezoneService.appliedTimezone;
    this.timezoneConfirmed = this.reportingTimezoneService.isConfirmed;
    this.currentId = this.currentUser?.fkBusiness || '';
    this.restoreSelectedView();

    if (!this.currentId) {
      this.errorMessage = 'No business is associated with the current user.';
      return;
    }

    this.loadDashboard();
  }

  loadDashboard(): void {
    if (!this.currentId) return;

    this.isLoading = true;
    this.errorMessage = '';

    this.dashboardService
      .getDashboard(this.level, this.currentId, this.range)
      .subscribe({
        next: (response) => {
          this.data = response;
          this.prepareChildCards(response);
          this.prepareSensorCharts(response);
          this.loadBreadcrumb();
          this.isLoading = false;

          if (this.selectedView === 'analysis') this.loadAnalysis();
        },
        error: () => {
          this.errorMessage =
            'The selected hierarchy level could not be loaded.';
          this.isLoading = false;
        },
      });
  }

  loadAnalysis(): void {
    if (!this.currentId) return;

    this.isAnalysisLoading = true;
    this.analysisError = '';
    this.dashboardService
      .getDeepDive(
        this.level,
        this.currentId,
        this.range,
        this.reportingTimeZone,
        true,
      )
      .subscribe({
        next: (response) => {
          this.analysisData = response;
          if (response.breadcrumbs?.length)
            this.breadcrumbs = response.breadcrumbs;
          this.prepareAnalysisCharts(response);
          this.isAnalysisLoading = false;
        },
        error: () => {
          this.analysisData = undefined;
          this.analysisError =
            'Analysis could not be loaded for this hierarchy level.';
          this.isAnalysisLoading = false;
        },
      });
  }

  loadBreadcrumb(): void {
    if (this.level === 'business') {
      this.breadcrumbs = [
        {
          id: this.currentId,
          name: this.data?.businessName || 'Business',
          level: 'business',
        },
      ];
      return;
    }

    this.dashboardService.getBreadcrumb(this.level, this.currentId).subscribe({
      next: (response) => (this.breadcrumbs = response),
      error: () => (this.breadcrumbs = []),
    });
  }

  setView(view: DashboardView): void {
    if (view === 'live' && !this.canShowLiveTab) return;
    this.selectedView = view;
    this.persistSelectedView();
    if (view === 'analysis' && !this.analysisData) this.loadAnalysis();
  }

  get canShowLiveTab(): boolean {
    return ['floor', 'section', 'office', 'device', 'sensor'].includes(this.level);
  }

  openHierarchyView(): void {
    if (this.level !== 'sensor') {
      this.setView('hierarchy');
      return;
    }

    const parent =
      this.breadcrumbs.length > 1
        ? this.breadcrumbs[this.breadcrumbs.length - 2]
        : undefined;
    if (parent) this.openLevel(parent.level, parent.id, 'hierarchy');
  }

  changeRange(range: DashboardRange): void {
    if (this.range === range) return;
    this.range = range;
    this.resetViewData();
    this.loadDashboard();
  }

  changeAnalysisMetric(metric: MetricView): void {
    if (!this.analysisData || !this.isMetricAvailable(metric)) return;
    this.analysisMetricView = metric;
    this.prepareAnalysisTrendChart(this.analysisData);
  }

  changeAnalysisBreakdown(view: BreakdownView): void {
    this.analysisBreakdownView = view;
  }

  isMetricAvailable(metric: MetricView): boolean {
    if (!this.analysisData) return false;
    if (metric === 'cost') return this.analysisData.features.costAnalysis;
    if (metric === 'demand') return this.analysisData.features.demandAnalysis;
    return this.analysisData.features.energyAnalysis;
  }

  openLevel(level: DashboardLevel, id: string, view?: DashboardView): void {
    let nextView: DashboardView = level === 'sensor' ? 'analysis' : (view || this.selectedView);
    if (nextView === 'live' && !['floor', 'section', 'office', 'device', 'sensor'].includes(level)) {
      nextView = 'hierarchy';
    }

    this.level = level;
    this.currentId = id;
    this.selectedView = nextView;
    this.persistSelectedView();
    this.resetViewData();
    this.loadDashboard();
  }

  openSensorAnalysis(sensorId: string): void {
    this.openLevel('sensor', sensorId, 'analysis');
  }

  private resetViewData(): void {
    this.analysisData = undefined;
    this.analysisTrendChart = undefined;
    this.analysisDemandChart = undefined;
    this.analysisPeakChart = undefined;
    this.analysisShareChart = undefined;
    this.analysisRankingChart = undefined;
    this.crmAnalysisChart = undefined;
    this.crmAnalysisChartOptions = undefined;
    this.utilityTrendChartOptions = undefined;
    this.utilityMixChartOptions = undefined;
  }

  prepareChildCards(response: DashboardResponse): void {
    const levels: Array<{
      items: HierarchyNodeDto[] | undefined;
      level: DashboardLevel;
      idKey: keyof HierarchyNodeDto;
      nameKey: keyof HierarchyNodeDto;
    }> = [
      {
        items: response.facilities,
        level: 'facility',
        idKey: 'facilityId',
        nameKey: 'facilityName',
      },
      {
        items: response.buildings,
        level: 'building',
        idKey: 'buildingId',
        nameKey: 'buildingName',
      },
      {
        items: response.floors,
        level: 'floor',
        idKey: 'floorId',
        nameKey: 'floorName',
      },
      {
        items: response.sections,
        level: 'section',
        idKey: 'sectionId',
        nameKey: 'sectionName',
      },
      {
        items: response.offices,
        level: 'office',
        idKey: 'officeId',
        nameKey: 'officeName',
      },
      {
        items: response.devices,
        level: 'device',
        idKey: 'deviceId',
        nameKey: 'deviceName',
      },
    ];

    const source = levels.find((item) => item.items?.length);
    this.childCards = (source?.items || []).map((item) => ({
      id: String(item[source!.idKey] || ''),
      name: String(item[source!.nameKey] || 'Unnamed'),
      totalActiveEnergyKwh: item.totalActiveEnergyKwh,
      avgPowerFactor: item.avgPowerFactor,
      sensorCount: item.sensorCount,
      alertCount: item.alertCount,
      level: source!.level,
    }));
  }

  prepareSensorCharts(response: DashboardResponse): void {
    this.hourlyEnergyChart = response.hourlyEnergy?.length
      ? this.lineChart([
          { name: 'Energy', data: this.toSeries(response.hourlyEnergy) },
        ])
      : undefined;

    if (!response.sensorId) {
      this.activePowerChart = undefined;
      this.voltageCurrentChart = undefined;
      this.powerFactorChart = undefined;
      this.frequencyChart = undefined;
      this.pfDonutChart = undefined;
      this.hourlyDemandChart = undefined;
      return;
    }

    const hasPowerData = !!(
      response.activePower?.length ||
      response.reactivePower?.length ||
      response.apparentPower?.length
    );
    this.activePowerChart = hasPowerData ? this.lineChart([
      { name: 'Active power', data: this.toSeries(response.activePower || []) },
      {
        name: 'Reactive power',
        data: this.toSeries(response.reactivePower || []),
      },
      {
        name: 'Apparent power',
        data: this.toSeries(response.apparentPower || []),
      },
    ]) : undefined;
    this.voltageCurrentChart = response.voltage?.length || response.current?.length ? this.lineChart([
      { name: 'Voltage', data: this.toSeries(response.voltage || []) },
      { name: 'Current', data: this.toSeries(response.current || []) },
    ]) : undefined;
    this.powerFactorChart = response.powerFactor?.length ? this.lineChart([
      { name: 'Power factor', data: this.toSeries(response.powerFactor || []) },
    ]) : undefined;
    this.frequencyChart = response.frequency?.length ? this.lineChart([
      { name: 'Frequency', data: this.toSeries(response.frequency || []) },
    ]) : undefined;

    const today = new Date();
    this.hourlyDemandChart = response.hourlyDemand?.length ? this.lineChart([
      {
        name: 'Average demand',
        data: (response.hourlyDemand || []).map((item) => [
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            item.hour,
          ).getTime(),
          item.avgActivePowerW,
        ]),
      },
    ]) : undefined;

    const distribution = response.pfDistribution;
    const distributionSeries = distribution
      ? [
            distribution.excellentPct,
            distribution.goodPct,
            distribution.acceptablePct,
            distribution.poorPct,
          ]
      : [];
    this.pfDonutChart = distributionSeries.some((value) => value > 0) ? {
      series: distributionSeries,
      chart: {
        type: 'donut',
        height: 280,
        fontFamily: 'inherit',
        animations: { enabled: false },
      },
      labels: ['Excellent', 'Good', 'Acceptable', 'Poor'],
      colors: [
        'rgb(38, 191, 148)',
        'rgb(35, 183, 229)',
        'rgb(245, 184, 73)',
        'rgb(230, 83, 60)',
      ],
      dataLabels: { enabled: false },
    } : undefined;
  }

  prepareAnalysisCharts(response: DeepDiveResponse): void {
    if (!this.isMetricAvailable(this.analysisMetricView)) {
      this.analysisMetricView = response.features.energyAnalysis ? 'energy' : 'demand';
    }
    this.prepareAnalysisTrendChart(response);
    this.prepareCrmCharts(response);

    this.analysisDemandChart = response.demand.hasData
      ? this.lineChart([
          {
            name: 'Selected period demand',
            data: response.trend.map((point) => [
              new Date(point.bucket).getTime(),
              point.demandKw,
            ]),
          },
          {
            name: 'Previous period demand',
            data: response.trend.map((point) => [
              new Date(point.bucket).getTime(),
              point.previousDemandKw,
            ]),
          },
        ])
      : undefined;

    if (this.analysisDemandChart) {
      this.analysisDemandChart.tooltip = {
        x: { formatter: (value: number) => this.formatChartTooltip(value) },
        y: { formatter: (value: number) => `${value.toFixed(2)} kW` },
      };
    }

    this.analysisPeakChart = response.peakOffPeak.isAvailable
      ? {
          series: [
            response.peakOffPeak.peakEnergyKwh,
            response.peakOffPeak.offPeakEnergyKwh,
          ],
          chart: {
            type: 'donut',
            height: 280,
            fontFamily: 'inherit',
            animations: { enabled: false },
          },
          labels: ['Peak', 'Off-peak'],
          colors: ['rgb(245, 184, 73)', 'rgb(38, 191, 148)'],
          dataLabels: { enabled: true },
        }
      : undefined;

    this.analysisShareChart = response.children.length
      ? {
          series: response.children.map((item) => item.energyKwh),
          chart: {
            type: 'donut',
            height: 360,
            fontFamily: 'inherit',
            animations: { enabled: false },
          },
          labels: response.children.map((item) => item.name),
          colors: response.children.map(
            (_, index) => this.chartPalette[index % this.chartPalette.length],
          ),
          dataLabels: {
            enabled: true,
            formatter: (value: number) => `${value.toFixed(1)}%`,
          },
          legend: { show: true, position: 'bottom' },
          plotOptions: { pie: { donut: { size: '66%' } } },
          tooltip: {
            y: { formatter: (value: number) => `${value.toFixed(2)} kWh` },
          },
        }
      : undefined;

    this.analysisRankingChart = response.children.length
      ? {
          series: [
            {
              name: 'Energy',
              data: response.children.map((item) => item.energyKwh),
            },
          ],
          chart: {
            type: 'bar',
            height: Math.max(340, response.children.length * 48),
            fontFamily: 'inherit',
            toolbar: { show: false },
            animations: { enabled: false },
          },
          plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
          colors: ['rgb(132, 90, 223)'],
          dataLabels: {
            enabled: true,
            formatter: (value: number) => `${value.toFixed(1)} kWh`,
          },
          xaxis: {
            categories: response.children.map((item) => item.name),
          },
          tooltip: {
            y: { formatter: (value: number) => `${value.toFixed(2)} kWh` },
          },
        }
      : undefined;
  }

  confirmReportingTimezone(value = this.reportingTimeZone): void {
    if (!this.reportingTimezoneService.confirm(value)) return;
    this.reportingTimeZone = value;
    this.timezoneConfirmed = true;
    this.analysisData = undefined;
    if (this.selectedView === 'analysis') this.loadAnalysis();
  }

  useDetectedTimezone(): void {
    this.reportingTimeZone = this.detectedTimeZone;
    this.confirmReportingTimezone(this.detectedTimeZone);
  }

  formatReportingTimestamp(
    value: string | number | Date | null | undefined,
    includeTime = true,
  ): string {
    if (!value) return '';
    return this.reportingTimezoneService.formatTimestamp(value, includeTime
      ? undefined
      : { hour: undefined, minute: undefined });
  }

  onCrmChartTypeChange(): void {
    if (!this.analysisData) return;
    if (this.selectedCrmChartType === 'peaknonpeak' && !this.analysisData.features.peakOffPeakAnalysis) {
      this.selectedCrmChartType = 'energyconsumption';
    }
    this.prepareCrmAnalysisChart(this.analysisData);
  }

  private prepareCrmCharts(response: DeepDiveResponse): void {
    if (this.selectedCrmChartType === 'peaknonpeak' && !response.features.peakOffPeakAnalysis) {
      this.selectedCrmChartType = 'energyconsumption';
    }
    this.prepareCrmAnalysisChart(response);

    const utilityTrend = response.crmCharts?.utilityTrend;
    const utilityMonthLabels = utilityTrend
      ? this.buildUtilityMonthLabels(utilityTrend.categories, utilityTrend.points?.map((point) => point.period) || [])
      : [];
    this.utilityTrendChartOptions = utilityTrend?.series?.length ? {
      series: utilityTrend.series,
      chart: {
        type: 'bar',
        height: 360,
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { enabled: false },
      },
      dataLabels: { enabled: false },
      plotOptions: { bar: { columnWidth: '72%', borderRadius: 1 } },
      xaxis: {
        categories: utilityMonthLabels,
        tickPlacement: 'on',
        labels: { rotate: 0, trim: false, hideOverlappingLabels: false },
      },
      yaxis: { labels: { formatter: (value: number) => `${value.toFixed(0)} kWh` } },
      legend: { position: 'top' },
      colors: this.chartPalette,
      grid: { borderColor: '#edf0f5', strokeDashArray: 4 },
      fill: { opacity: 1 },
      tooltip: {
        y: { formatter: (value: number) => `${value.toFixed(2)} kWh` },
      },
    } : undefined;

    const utilityMix = response.crmCharts?.utilityMix;
    const mixValues = utilityMix?.series?.[0]?.data || [];
    this.utilityMixChartOptions = mixValues.length ? {
      series: mixValues,
      chart: { type: 'donut', height: 315, fontFamily: 'inherit', animations: { enabled: false } },
      labels: utilityMix.categories,
      colors: utilityMix.categories.map((_, index) => this.chartPalette[index % this.chartPalette.length]),
      legend: { show: false },
      stroke: { show: false },
      tooltip: { y: { formatter: (value: number) => `${value.toFixed(2)} kWh` } },
      plotOptions: { pie: { expandOnClick: false, donut: { size: '72%' } } },
      dataLabels: { enabled: false }
    } : undefined;

  }

  private prepareCrmAnalysisChart(response: DeepDiveResponse): void {
    const source = this.selectedCrmChartType === 'peaknonpeak'
      ? response.crmCharts?.peakNonPeak
      : this.selectedCrmChartType === 'highdemand'
        ? response.crmCharts?.highDemand
        : response.crmCharts?.energyConsumption;

    this.crmAnalysisChart = source;
    if (!source?.series?.length) {
      this.crmAnalysisChartOptions = undefined;
      return;
    }

    const timestamps = source.points.map((point) => new Date(point.period).getTime());
    const hasDatetimePoints = timestamps.length === source.categories.length && timestamps.every(Number.isFinite);
    const series = hasDatetimePoints
      ? source.series.map((item) => ({
          ...item,
          data: item.data.map((value, index) => [timestamps[index], value]),
        }))
      : source.series;

    this.crmAnalysisChartOptions = {
      series,
      chart: {
        type: 'area',
        width: '100%',
        height: 390,
        toolbar: {
          show: true,
          tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true },
          autoSelected: 'zoom',
        },
        animations: { enabled: false },
        zoom: { enabled: true, type: 'x', autoScaleYaxis: true, allowMouseWheelZoom: true },
      },
      xaxis: hasDatetimePoints
        ? {
            type: 'datetime',
            tickAmount: this.range === '1y' ? 12 : undefined,
            labels: {
              rotate: 0,
              hideOverlappingLabels: true,
              datetimeUTC: true,
              formatter: (_value: string, timestamp?: number) => this.formatChartTimestamp(timestamp),
            },
          }
        : { categories: source.categories, labels: { rotate: -35, trim: false, hideOverlappingLabels: true } },
      yaxis: { labels: { formatter: (value: number) => `${value.toFixed(0)} ${source.unit}` } },
      stroke: { curve: 'smooth', width: 2.5 },
      dataLabels: { enabled: false },
      colors: this.chartPalette,
      grid: { borderColor: '#edf0f5', strokeDashArray: 4 },
      legend: { position: 'top' },
      markers: { size: 0, hover: { size: 5 } },
      tooltip: {
        x: hasDatetimePoints ? { formatter: (value: number) => this.formatChartTooltip(value) } : undefined,
        y: { formatter: (value: number) => `${value.toFixed(2)} ${source.unit}` },
      }
    };
  }

  get selectedCrmAnalysisTitle(): string {
    return this.selectedCrmChartType === 'peaknonpeak'
      ? 'Peak vs Non-Peak'
      : this.selectedCrmChartType === 'highdemand'
        ? 'High Demand'
        : 'Energy Consumption';
  }

  get selectedCrmAnalysisDescription(): string {
    return this.selectedCrmChartType === 'peaknonpeak'
      ? 'Compare energy used during configured tariff periods.'
      : this.selectedCrmChartType === 'highdemand'
        ? 'Identify the highest demand reached in each period.'
        : 'Track energy consumption for the selected hierarchy scope.';
  }

  get crmPrimaryMetricLabel(): string {
    return this.selectedCrmChartType === 'highdemand' ? 'Peak demand' :
      this.selectedCrmChartType === 'peaknonpeak' ? 'Peak usage' : 'Energy used';
  }

  get crmPrimaryMetricValue(): number {
    if (!this.crmAnalysisChart) return 0;
    return this.selectedCrmChartType === 'highdemand'
      ? this.crmAnalysisChart.peakDemandW
      : this.selectedCrmChartType === 'peaknonpeak'
        ? this.crmAnalysisChart.totalPeakKwh
        : this.crmAnalysisChart.totalKwh;
  }

  get crmPrimaryMetricUnit(): string {
    return this.selectedCrmChartType === 'highdemand' ? 'W' : 'kWh';
  }

  get crmSecondaryMetricLabel(): string {
    return this.selectedCrmChartType === 'peaknonpeak' ? 'Non-peak usage' : 'Data points';
  }

  get crmSecondaryMetricValue(): number {
    if (!this.crmAnalysisChart) return 0;
    return this.selectedCrmChartType === 'peaknonpeak'
      ? this.crmAnalysisChart.totalNonPeakKwh
      : this.crmAnalysisChart.points?.length || 0;
  }

  exportCrmAnalysisCsv(): void {
    const chart = this.crmAnalysisChart;
    if (!chart) return;
    const rows = chart.points.map(point => ({
      period: point.period || point.label,
      label: point.label,
      value: point.value,
      peakKwh: point.peakKwh,
      nonPeakKwh: point.nonPeakKwh,
      totalKwh: point.totalKwh,
      demandW: point.demandW
    }));
    this.downloadCsv(`${this.level}-${this.selectedCrmChartType}-${this.range}.csv`, rows);
  }

  exportUtilityTrendCsv(): void {
    const chart = this.analysisData?.crmCharts?.utilityTrend;
    if (!chart) return;
    const rows = chart.categories.map((period, index) => {
      const row: Record<string, string | number> = { period };
      chart.series.forEach(series => row[series.name] = series.data[index] ?? 0);
      return row;
    });
    this.downloadCsv(`${this.level}-utility-consumption-trend.csv`, rows);
  }

  exportUtilityMixCsv(): void {
    const chart = this.analysisData?.crmCharts?.utilityMix;
    if (!chart) return;
    const values = chart.series?.[0]?.data || [];
    const total = values.reduce((sum, value) => sum + value, 0);
    this.downloadCsv(`${this.level}-last-30-days-utility-mix.csv`, chart.categories.map((utility, index) => ({
      utility,
      energyKwh: values[index] ?? 0,
      percentage: total > 0 ? ((values[index] ?? 0) * 100 / total).toFixed(2) : 0
    })));
  }

  exportHierarchyCsv(): void {
    const rows = (this.analysisData?.children || []).map(child => ({
      name: child.name,
      level: child.level,
      energyKwh: child.energyKwh,
      sharePercent: child.sharePercent,
      estimatedCost: child.estimatedCost ?? '',
      changePercent: child.changePercent,
      peakDemandKw: child.peakDemandKw,
      sensorCount: child.sensorCount,
      onlineSensors: child.onlineSensorCount,
      issues: child.issueCount,
      status: child.status
    }));
    this.downloadCsv(`${this.level}-hierarchy-analysis-${this.range}.csv`, rows);
  }

  exportTrendCsv(): void {
    const rows = (this.analysisData?.trend || []).map(point => ({
      bucket: point.bucket,
      energyKwh: point.energyKwh,
      previousEnergyKwh: point.previousEnergyKwh,
      cost: point.cost ?? '',
      previousCost: point.previousCost ?? '',
      demandKw: point.demandKw,
      previousDemandKw: point.previousDemandKw
    }));
    this.downloadCsv(`${this.level}-period-comparison-${this.range}.csv`, rows);
  }

  private downloadCsv(fileName: string, rows: Array<Record<string, unknown>>): void {
    if (!rows.length) return;
    const headers = Array.from(new Set(rows.flatMap(row => Object.keys(row))));
    const escape = (value: unknown) => `"${String(value ?? '').replace(/"/g, '""')}"`;
    const csv = [headers.map(escape).join(','), ...rows.map(row => headers.map(header => escape(row[header])).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  blockChartPageScroll(event: WheelEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private restoreSelectedView(): void {
    const storedView = localStorage.getItem(this.selectedViewStorageKey) as DashboardView | null;
    if (storedView === 'analysis' || storedView === 'hierarchy') {
      this.selectedView = storedView;
      return;
    }

    if (storedView === 'live' && this.canShowLiveTab) {
      this.selectedView = storedView;
    }
  }

  private persistSelectedView(): void {
    localStorage.setItem(this.selectedViewStorageKey, this.selectedView);
  }

  private prepareAnalysisTrendChart(response: DeepDiveResponse): void {
    if (!this.isMetricAvailable(this.analysisMetricView) || !response.trend.length) {
      this.analysisTrendChart = undefined;
      return;
    }

    const current = response.trend.map((point) => [
      new Date(point.bucket).getTime(),
      this.analysisMetricView === 'energy'
        ? point.energyKwh
        : this.analysisMetricView === 'cost'
          ? point.cost ?? 0
          : point.demandKw,
    ]);

    const previous = response.trend.map((point) => [
      new Date(point.bucket).getTime(),
      this.analysisMetricView === 'energy'
        ? point.previousEnergyKwh
        : this.analysisMetricView === 'cost'
          ? point.previousCost ?? 0
          : point.previousDemandKw,
    ]);

    this.analysisTrendChart = this.lineChart([
      { name: 'Selected period', data: current },
      { name: 'Previous period', data: previous },
    ]);

    const suffix = this.analysisMetricView === 'energy'
      ? ' kWh'
      : this.analysisMetricView === 'cost'
        ? ` ${response.currency}`
        : ' kW';

    this.analysisTrendChart.chart = {
      ...this.analysisTrendChart.chart,
      height: 360,
    };
    this.analysisTrendChart.tooltip = {
      x: { formatter: (value: number) => this.formatChartTooltip(value) },
      y: { formatter: (value: number) => `${value.toFixed(2)}${suffix}` },
    };
  }

  sparkChart(data: number[], color: string): any {
    return {
      series: [{ name: 'Power', data }],
      colors: [color],
      chart: {
        type: 'area',
        height: 52,
        sparkline: { enabled: true },
        animations: { enabled: false },
      },
      stroke: { curve: 'smooth', width: 2 },
      fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.3, opacityTo: 0.02 },
      },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
    };
  }

  lineChart(series: ApexAxisChartSeries): LineChartOptions {
    return {
      series,
      colors: this.chartPalette,
      chart: {
        type: 'area',
        height: 300,
        fontFamily: 'inherit',
        animations: { enabled: false },
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      stroke: { curve: 'smooth', width: 2.5 },
      dataLabels: { enabled: false },
      xaxis: {
        type: 'datetime',
        tickAmount: this.range === '1y' ? 12 : undefined,
        labels: {
          datetimeUTC: true,
          hideOverlappingLabels: true,
          style: { fontSize: '10px' },
          formatter: (_value: string, timestamp?: number) => this.formatChartTimestamp(timestamp),
        },
      },
      tooltip: { x: { formatter: (value: number) => this.formatChartTooltip(value) } },
      fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.28, opacityTo: 0.03 },
      },
    };
  }

  toSeries(points: TimeSeriesPointDto[]): Array<[number, number]> {
    return points.map((point) => [
      new Date(point.timestamp).getTime(),
      point.value,
    ]);
  }

  private buildUtilityMonthLabels(categories: string[], periods: string[]): string[] {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let previousYear: number | undefined;

    return categories.map((category, index) => {
      const source = periods[index] || category;
      const isoMatch = source.match(/^(\d{4})-(\d{1,2})/);
      const namedMatch = source.match(/^([A-Za-z]{3,9})[\s-]+(\d{4})/);

      let year: number | undefined;
      let monthIndex: number | undefined;

      if (isoMatch) {
        year = Number(isoMatch[1]);
        monthIndex = Number(isoMatch[2]) - 1;
      } else if (namedMatch) {
        year = Number(namedMatch[2]);
        monthIndex = monthNames.findIndex((month) => namedMatch[1].toLowerCase().startsWith(month.toLowerCase()));
      }

      if (year === undefined || monthIndex === undefined || monthIndex < 0 || monthIndex > 11) {
        return category;
      }

      const yearChanged = previousYear !== undefined && year !== previousYear;
      previousYear = year;
      return yearChanged ? `’${String(year).slice(-2)}` : monthNames[monthIndex];
    });
  }
  private formatChartTimestamp(timestamp?: number): string {
    if (!timestamp || !Number.isFinite(timestamp)) return '';
    const isLongRange = this.range === '90d' || this.range === '1y';
    return this.reportingTimezoneService.formatTimestamp(timestamp, isLongRange
      ? { day: '2-digit', month: 'short', year: this.range === '1y' ? '2-digit' : undefined, hour: undefined, minute: undefined }
      : { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', year: undefined });
  }


  private formatChartTooltip(timestamp: number): string {
    return this.reportingTimezoneService.formatTimestamp(timestamp);
  }

  getPageTitle(): string {
    return (
      this.data?.businessName ||
      this.data?.facilityName ||
      this.data?.buildingName ||
      this.data?.floorName ||
      this.data?.sectionName ||
      this.data?.officeName ||
      this.data?.deviceName ||
      this.data?.sensorName ||
      'Energy Explorer'
    );
  }

  getLevelIcon(level: DashboardLevel): string {
    const icons: Record<DashboardLevel, string> = {
      business: 'las la-briefcase',
      facility: 'las la-building',
      building: 'las la-city',
      floor: 'las la-layer-group',
      section: 'las la-sitemap',
      office: 'las la-door-open',
      device: 'las la-hdd',
      sensor: 'las la-microchip',
    };
    return icons[level];
  }

  getRangeLabel(): string {
    return {
      '24h': 'Last 24 hours',
      '7d': 'Last 7 days',
      '30d': 'Last 30 days',
      '90d': 'Last 90 days',
      '1y': 'Last 1 year',
    }[this.range];
  }

  getMetricTitle(): string {
    return this.analysisMetricView === 'energy'
      ? 'Energy trend'
      : this.analysisMetricView === 'cost'
        ? 'Cost trend'
        : 'Demand trend';
  }

  getMetricUnit(currency = 'PKR'): string {
    return this.analysisMetricView === 'energy'
      ? 'kWh'
      : this.analysisMetricView === 'cost'
        ? currency
        : 'kW';
  }

  getStatusClass(status: string): string {
    const normalized = (status || 'Normal').toLowerCase();
    return normalized === 'high'
      ? 'status-pill status-high'
      : normalized === 'review'
        ? 'status-pill status-review'
        : 'status-pill status-normal';
  }

  getRequirementClass(status: ConfigurationRequirementStatus): string {
    return `config-${status}`;
  }

  getRequirementIcon(status: ConfigurationRequirementStatus): string {
    return status === 'ready'
      ? 'ri-checkbox-circle-line'
      : status === 'partial'
        ? 'ri-error-warning-line'
        : status === 'optional'
          ? 'ri-information-line'
          : 'ri-close-circle-line';
  }

  getIssueClass(severity: string): string {
    return `issue-${(severity || 'advisory').toLowerCase()}`;
  }

  getChangeClass(value: number | null): string {
    if (value === null || Math.abs(value) < 0.01) return 'neutral';
    return value > 0 ? 'negative' : 'positive';
  }

  trackRequirement(_: number, item: DeepDiveConfigurationRequirement): string {
    return item.key;
  }
}