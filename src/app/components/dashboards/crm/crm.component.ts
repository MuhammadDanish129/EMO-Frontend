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

  startDate = '';
  endDate = '';

  private readonly peakNonPeakMaxVisibleXAxisLabels = 10;

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
    if (!this.startDate || !this.endDate) return;

    this.isLoading = true;

    this.energyDashboardService.getPeakNonPeakAnalysis(this.startDate, this.endDate).subscribe({
      next: (res) => {
        if (res.success) {
          this.peakNonPeak = res.data ?? null;
          this.preparePeakNonPeakChart();
        }

        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
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
        height: 220,
        width: '100%',
        type: 'donut'
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
        height: 345,
        stacked: true,
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
        },
        title: {
          text: 'Total Energy Consumption (kWh)'
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
        height: 320,
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
    return date.toISOString().split('T')[0];
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

}
