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
  EnergyConsumptionByDeviceTypeResponseDTO,
  MonthlyDeviceTypeReportResponseDTO,
  PeakNonPeakSummaryResponseDTO
} from './crm.type';

import { EnergyDashboardService } from './crm.services';

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

type HeatmapViewMode = 'kwh' | 'share';

type HeatmapChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  colors: string[];
};

interface MonthBucket {
  key: string;
  label: string;
  sortValue: number;
  total: number;
  utilities: Map<string, number>;
}

interface UtilityRanking {
  name: string;
  total: number;
  average: number;
  share: number;
  trend: number | null;
  color: string;
}

interface DeepDiveInsight {
  icon: string;
  title: string;
  description: string;
  tone: 'primary' | 'info' | 'warning';
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

  monthlyDeviceTypeReport: MonthlyDeviceTypeReportResponseDTO[] = [];
  consumptionByDeviceType: EnergyConsumptionByDeviceTypeResponseDTO[] = [];
  peakNonPeak: PeakNonPeakSummaryResponseDTO | null = null;
  monthlyReportTotalPercentage = 0;

  deviceTypeChartOptions: Partial<BarChartOptions> | any;
  monthlyReportChartOptions: Partial<DonutChartOptions> | any;
  peakNonPeakChartOptions: Partial<LineChartOptions> | any;
  heatmapChartOptions: Partial<HeatmapChartOptions> | null = null;

  viewMode: HeatmapViewMode = 'kwh';
  utilityRanking: UtilityRanking[] = [];
  insights: DeepDiveInsight[] = [];
  totalConsumption = 0;
  monthlyAverage = 0;
  highestMonthLabel = 'No data';
  highestMonthValue = 0;
  topUtilityName = 'No data';
  topUtilityShare = 0;
  periodTrend: number | null = null;

  startDate = '';
  endDate = '';
  dateRangeError = '';

  private monthBuckets: MonthBucket[] = [];
  private readonly peakNonPeakMaxVisibleXAxisLabels = 10;
  private readonly deepDiveChartColors = [
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
    private energyDashboardService: EnergyDashboardService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;
    this.setDefaultDates();
    this.loadDashboardData();
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
      monthlyDeviceTypeReport: this.energyDashboardService.getMonthlyDeviceTypeReport(),
      consumptionByDeviceType: this.energyDashboardService.getEnergyConsumptionByDeviceTypeLast12Months(),
      peakNonPeak: this.energyDashboardService.getPeakNonPeakAnalysis(this.startDate, this.endDate)
    }).subscribe({
      next: (res) => {
        if (
          !res.monthlyDeviceTypeReport.success ||
          !res.consumptionByDeviceType.success ||
          !res.peakNonPeak.success
        ) {
          this.errorMessage = 'Dashboard data could not be loaded properly.';
          this.isLoading = false;
          return;
        }

        this.monthlyDeviceTypeReport = res.monthlyDeviceTypeReport.data ?? [];
        this.consumptionByDeviceType = res.consumptionByDeviceType.data ?? [];
        this.peakNonPeak = res.peakNonPeak.data ?? null;

        this.prepareMonthlyDeviceTypeReportChart();
        this.prepareEnergyConsumptionChart();
        this.preparePeakNonPeakChart();
        this.prepareDeepDive();

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

  applyPeakNonPeakFilter(): void {
    if (!this.validateDateRange()) {
      return;
    }

    this.isLoading = true;

    this.energyDashboardService.getPeakNonPeakAnalysis(this.startDate, this.endDate).subscribe({
      next: (res) => {
        if (res.success) {
          this.peakNonPeak = res.data ?? null;
          this.preparePeakNonPeakChart();
          this.prepareInsights();
        }

        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  get minimumStartDate(): string {
    const endDate = this.parseInputDate(this.endDate);

    if (!endDate) {
      return '';
    }

    endDate.setFullYear(endDate.getFullYear() - 1);
    return this.formatDate(endDate);
  }

  get maximumEndDate(): string {
    const startDate = this.parseInputDate(this.startDate);

    if (!startDate) {
      return '';
    }

    startDate.setFullYear(startDate.getFullYear() + 1);
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
    maximumEndDate.setFullYear(maximumEndDate.getFullYear() + 1);

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
      colors: [
        'rgb(132, 90, 223)',
        'rgb(35, 183, 229)',
        'rgb(245, 184, 73)',
        'rgb(38, 191, 148)',
        'rgb(230, 83, 60)'
      ],
      chart: {
        height: 210,
        width: '100%',
        type: 'donut',
        fontFamily: 'inherit',
        animations: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '78%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#8c9097',
                offsetY: -6
              },
              value: {
                show: true,
                fontSize: '1.375rem',
                fontWeight: 700,
                color: '#1f2937',
                offsetY: 6,
                formatter: () => `${this.monthlyReportTotalPercentage.toFixed(0)}%`
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#8c9097',
                formatter: () => `${this.monthlyReportTotalPercentage.toFixed(0)}%`
              }
            }
          }
        }
      },
      legend: {
        show: false
      },
      stroke: {
        show: true,
        colors: '#fff',
        width: 0
      },
      tooltip: {
        y: {
          formatter: (value: number) => `${value.toFixed(2)}%`
        }
      }
    };
  }

  prepareEnergyConsumptionChart(): void {
    const monthOrder = this.getLast12MonthLabels();

    const utilities = Array.from(
      new Set(this.consumptionByDeviceType.map(x => x.utilityName))
    );

    const series = utilities.map(utility => {
      return {
        name: utility,
        data: monthOrder.map(monthLabel => {
          const item = this.consumptionByDeviceType.find(x =>
            `${x.month} ${x.year}` === monthLabel && x.utilityName === utility
          );

          return item ? Number(item.totalKwh.toFixed(2)) : 0;
        })
      };
    });

    this.deviceTypeChartOptions = {
      series,
      chart: {
        type: 'bar',
        height: 320,
        stacked: true,
        fontFamily: 'inherit',
        animations: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: '#f5f4f4',
        strokeDashArray: 5,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      colors: [
        'rgb(132, 90, 223)',
        'rgba(132, 90, 223, 0.7)',
        'rgba(132, 90, 223, 0.4)',
        '#ebeff5',
        'rgb(35, 183, 229)'
      ],
      plotOptions: {
        bar: {
          columnWidth: '35%',
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'top'
      },
      xaxis: {
        categories: monthOrder,
        labels: {
          style: {
            fontSize: '11px'
          }
        }
      },
      yaxis: {
        labels: {
          formatter: (val: number) => `${val.toFixed(0)} kWh`
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (value: number) => `${value.toFixed(2)} kWh`
        }
      }
    };
  }

  preparePeakNonPeakChart(): void {
    const dailyData = this.peakNonPeak?.dailyData || [];
    const chartPoints = dailyData.map((item, index) => {
      const timestamp = this.getPeriodTimestamp(item.period, index);

      return {
        timestamp,
        period: item.period,
        peakKwh: Number(item.peakKwh.toFixed(2)),
        nonPeakKwh: Number(item.nonPeakKwh.toFixed(2))
      };
    });

    this.peakNonPeakChartOptions = {
      series: [
        {
          name: 'Peak kWh',
          data: chartPoints.map(x => ({
            x: x.timestamp,
            y: x.peakKwh
          }))
        },
        {
          name: 'Non-Peak kWh',
          data: chartPoints.map(x => ({
            x: x.timestamp,
            y: x.nonPeakKwh
          }))
        }
      ],
      chart: {
        type: 'line',
        height: 300,
        fontFamily: 'inherit',
        animations: {
          enabled: false
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: true
        },
        toolbar: {
          show: true,
          autoSelected: 'zoom',
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        }
      },
      colors: [
        'rgb(132, 90, 223)',
        'rgb(35, 183, 229)'
      ],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
      },
      xaxis: {
        type: 'datetime',
        tickAmount: Math.min(chartPoints.length, this.peakNonPeakMaxVisibleXAxisLabels),
        labels: {
          rotate: -35,
          rotateAlways: chartPoints.length > 8,
          hideOverlappingLabels: true,
          trim: true,
          minHeight: 58,
          maxHeight: 80,
          style: {
            fontSize: '10px'
          }
        }
      },
      yaxis: {
        labels: {
          formatter: (val: number) => `${val.toFixed(0)} kWh`
        }
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        shared: true,
        intersect: false,
        x: {
          formatter: (value: number) => this.formatChartDate(value, true)
        },
        y: {
          formatter: (value: number) => `${value.toFixed(2)} kWh`
        }
      }
    };
  }

  setViewMode(mode: HeatmapViewMode): void {
    if (this.viewMode === mode) {
      return;
    }

    this.viewMode = mode;
    this.prepareHeatmap();
  }

  private prepareDeepDive(): void {
    this.monthBuckets = this.buildMonthBuckets();
    this.prepareDeepDiveSummary();
    this.prepareUtilityRanking();
    this.prepareHeatmap();
    this.prepareInsights();
  }

  private buildMonthBuckets(): MonthBucket[] {
    const buckets = new Map<string, MonthBucket>();

    this.consumptionByDeviceType.forEach(item => {
      const monthIndex = this.getMonthIndex(item.month);
      const safeMonthIndex = monthIndex >= 0 ? monthIndex : 0;
      const key = `${item.year}-${safeMonthIndex}-${item.month}`;
      const label = monthIndex >= 0
        ? new Date(item.year, monthIndex, 1).toLocaleDateString('en-US', {
            month: 'short',
            year: '2-digit'
          })
        : `${item.month} ${item.year}`;

      if (!buckets.has(key)) {
        buckets.set(key, {
          key,
          label,
          sortValue: new Date(item.year, safeMonthIndex, 1).getTime(),
          total: 0,
          utilities: new Map<string, number>()
        });
      }

      const bucket = buckets.get(key);
      if (!bucket) {
        return;
      }

      const utilityName = item.utilityName || 'Unknown';
      const value = Number(item.totalKwh) || 0;

      bucket.total += value;
      bucket.utilities.set(
        utilityName,
        (bucket.utilities.get(utilityName) || 0) + value
      );
    });

    return Array.from(buckets.values())
      .sort((first, second) => first.sortValue - second.sortValue);
  }

  private prepareDeepDiveSummary(): void {
    this.totalConsumption = this.monthBuckets.reduce(
      (sum, bucket) => sum + bucket.total,
      0
    );
    this.monthlyAverage = this.monthBuckets.length
      ? this.totalConsumption / this.monthBuckets.length
      : 0;

    const highestMonth = this.monthBuckets.reduce<MonthBucket | null>(
      (highest, bucket) => !highest || bucket.total > highest.total ? bucket : highest,
      null
    );

    this.highestMonthLabel = highestMonth?.label || 'No data';
    this.highestMonthValue = highestMonth?.total || 0;

    const latestMonth = this.monthBuckets.at(-1);
    const previousMonth = this.monthBuckets.at(-2);
    this.periodTrend = latestMonth && previousMonth && previousMonth.total > 0
      ? ((latestMonth.total - previousMonth.total) / previousMonth.total) * 100
      : null;
  }

  private prepareUtilityRanking(): void {
    const utilities = Array.from(
      new Set(this.consumptionByDeviceType.map(item => item.utilityName || 'Unknown'))
    );

    this.utilityRanking = utilities
      .map((utilityName, index) => {
        const monthlyValues = this.monthBuckets.map(
          bucket => bucket.utilities.get(utilityName) || 0
        );
        const total = monthlyValues.reduce((sum, value) => sum + value, 0);
        const latest = monthlyValues.at(-1) || 0;
        const previous = monthlyValues.at(-2) || 0;

        return {
          name: utilityName,
          total,
          average: this.monthBuckets.length ? total / this.monthBuckets.length : 0,
          share: this.totalConsumption > 0 ? (total / this.totalConsumption) * 100 : 0,
          trend: previous > 0 ? ((latest - previous) / previous) * 100 : null,
          color: this.deepDiveChartColors[index % this.deepDiveChartColors.length]
        };
      })
      .sort((first, second) => second.total - first.total);

    const topUtility = this.utilityRanking[0];
    this.topUtilityName = topUtility?.name || 'No data';
    this.topUtilityShare = topUtility?.share || 0;
  }

  private prepareHeatmap(): void {
    if (!this.monthBuckets.length || !this.utilityRanking.length) {
      this.heatmapChartOptions = null;
      return;
    }

    const series = [...this.utilityRanking]
      .reverse()
      .map(utility => ({
        name: utility.name,
        data: this.monthBuckets.map(bucket => {
          const consumption = bucket.utilities.get(utility.name) || 0;
          const value = this.viewMode === 'share' && bucket.total > 0
            ? (consumption / bucket.total) * 100
            : consumption;

          return {
            x: bucket.label,
            y: Number(value.toFixed(2))
          };
        })
      }));

    const maxValue = Math.max(
      ...series.flatMap(item => item.data.map(point => point.y)),
      1
    );
    const unit = this.viewMode === 'share' ? '%' : ' kWh';

    this.heatmapChartOptions = {
      series,
      chart: {
        type: 'heatmap',
        height: Math.max(300, this.utilityRanking.length * 48 + 130),
        fontFamily: 'inherit',
        animations: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['rgb(132, 90, 223)'],
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        heatmap: {
          radius: 4,
          shadeIntensity: 0.25,
          useFillColorAsStroke: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: maxValue * 0.25,
                color: '#e9e3fa',
                name: 'Low'
              },
              {
                from: maxValue * 0.25,
                to: maxValue * 0.5,
                color: '#c6b6ef',
                name: 'Moderate'
              },
              {
                from: maxValue * 0.5,
                to: maxValue * 0.75,
                color: '#9e82e3',
                name: 'High'
              },
              {
                from: maxValue * 0.75,
                to: maxValue,
                color: '#7047cf',
                name: 'Very high'
              }
            ]
          }
        }
      },
      grid: {
        show: false,
        padding: {
          left: 8,
          right: 8
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '11px'
      },
      xaxis: {
        type: 'category',
        labels: {
          rotate: -35,
          rotateAlways: this.monthBuckets.length > 7,
          trim: true,
          style: {
            fontSize: '10px'
          }
        }
      },
      tooltip: {
        y: {
          formatter: (value: number) => `${value.toFixed(2)}${unit}`
        }
      }
    };
  }

  private prepareInsights(): void {
    const peakShare = Number(this.peakNonPeak?.peakPercentage || 0);
    const trendDirection = this.periodTrend === null
      ? 'There is not enough month-over-month data to calculate momentum.'
      : `Consumption ${this.periodTrend >= 0 ? 'increased' : 'decreased'} by ${Math.abs(this.periodTrend).toFixed(1)}% in the latest month.`;
    const concentration = this.topUtilityShare >= 50
      ? `${this.topUtilityName} is highly concentrated at ${this.topUtilityShare.toFixed(1)}% of measured consumption.`
      : `${this.topUtilityName} is the largest category at ${this.topUtilityShare.toFixed(1)}%, with consumption spread across other types.`;
    const peakPattern = peakShare >= 60
      ? `${peakShare.toFixed(1)}% of selected-period energy occurs during peak hours, indicating strong peak dependence.`
      : `${peakShare.toFixed(1)}% of selected-period energy occurs during peak hours, leaving room to compare load-shifting opportunities.`;

    this.insights = [
      {
        icon: 'ri-line-chart-line',
        title: 'Consumption momentum',
        description: trendDirection,
        tone: 'primary'
      },
      {
        icon: 'ri-pie-chart-2-line',
        title: 'Device concentration',
        description: concentration,
        tone: 'info'
      },
      {
        icon: 'ri-flashlight-line',
        title: 'Peak-hour exposure',
        description: peakPattern,
        tone: 'warning'
      }
    ];
  }

  exportPeakNonPeakCsv(): void {
    this.energyDashboardService.exportPeakNonPeakAnalysisCsv(this.startDate, this.endDate)
      .subscribe(blob => {
        this.downloadFile(blob, 'peak-non-peak-analysis.csv');
      });
  }

  exportEnergyConsumptionCsv(): void {
    this.energyDashboardService.exportEnergyConsumptionByDeviceTypeCsv()
      .subscribe(blob => {
        this.downloadFile(blob, 'energy-consumption-by-device-type.csv');
      });
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

  private getPeriodTimestamp(period: string, index: number): number {
    const parsedDate = /^\d{4}-\d{2}-\d{2}/.test(period)
      ? new Date(`${period.slice(0, 10)}T00:00:00`)
      : new Date(period);

    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.getTime();
    }

    const fallbackDate = new Date(this.startDate);
    fallbackDate.setDate(fallbackDate.getDate() + index);

    return fallbackDate.getTime();
  }

  private parseInputDate(value: string): Date | null {
    if (!value) {
      return null;
    }

    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return Number.isNaN(date.getTime()) ? null : date;
  }

  private formatChartDate(value: number, includeYear: boolean): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return '';
    }

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      ...(includeYear ? { year: 'numeric' } : {})
    });
  }

  private getMonthIndex(month: string): number {
    const normalizedMonth = String(month || '').trim().slice(0, 3).toLowerCase();
    const months = [
      'jan', 'feb', 'mar', 'apr', 'may', 'jun',
      'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ];

    return months.indexOf(normalizedMonth);
  }

}
