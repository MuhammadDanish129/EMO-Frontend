import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  NgApexchartsModule
} from 'ng-apexcharts';

import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../shared/services/user/user.type';
import { EnergyDeepDiveService } from './energy-deep-dive.service';
import {
  BreadcrumbDto,
  ChildCardDto,
  DashboardLevel,
  DashboardResponse,
  EnergyOverviewDashboardDto,
  HierarchyNodeDto,
  TimeSeriesPointDto
} from './energy-deep-dive.types';

type DashboardView = 'overview' | 'hierarchy' | 'analysis';
type DashboardRange = '24h' | '7d' | '30d';

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
  imports: [CommonModule, RouterModule, NgApexchartsModule],
  templateUrl: './energy-deep-dive.component.html',
  styleUrl: './energy-deep-dive.component.scss'
})
export class EnergyDeepDiveComponent implements OnInit {
  isLoading = false;
  isOverviewLoading = false;
  errorMessage = '';

  level: DashboardLevel = 'business';
  currentId = '';
  range: DashboardRange = '24h';
  selectedView: DashboardView = 'hierarchy';

  data?: DashboardResponse;
  overviewData?: EnergyOverviewDashboardDto;
  breadcrumbs: BreadcrumbDto[] = [];
  childCards: ChildCardDto[] = [];
  currentUser: User | null = null;

  hourlyEnergyChart?: LineChartOptions;
  activePowerChart?: LineChartOptions;
  voltageCurrentChart?: LineChartOptions;
  powerFactorChart?: LineChartOptions;
  frequencyChart?: LineChartOptions;
  pfDonutChart?: DonutChartOptions;
  hourlyDemandChart?: LineChartOptions;

  overviewMainChart: any;
  overviewDonutChart: any;
  overviewTargetChart: any;
  deviceSparkCharts: any[] = [];

  private readonly chartPalette = [
    'rgb(132, 90, 223)',
    'rgb(35, 183, 229)',
    'rgb(38, 191, 148)',
    'rgb(245, 184, 73)'
  ];

  constructor(
    private dashboardService: EnergyDeepDiveService,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;
    this.currentId = this.currentUser?.fkBusiness || '';

    if (!this.currentId) {
      this.errorMessage = 'No business is associated with the current user.';
      return;
    }

    this.loadDashboard();
  }

  loadDashboard(): void {
    if (!this.currentId) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.dashboardService
      .getDashboard(this.level, this.currentId, this.range)
      .subscribe({
        next: response => {
          this.data = response;
          this.prepareChildCards(response);
          this.prepareCharts(response);
          this.loadBreadcrumb();
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'The detailed dashboard could not be loaded.';
          this.isLoading = false;
        }
      });
  }

  loadOverviewDashboard(): void {
    if (!this.currentId || this.level === 'sensor') {
      return;
    }

    this.isOverviewLoading = true;

    this.dashboardService
      .getOverviewDashboard(this.level, this.currentId, this.range)
      .subscribe({
        next: response => {
          this.overviewData = response;
          this.prepareOverviewCharts(response);
          this.isOverviewLoading = false;
        },
        error: () => {
          this.isOverviewLoading = false;
        }
      });
  }

  loadBreadcrumb(): void {
    if (this.level === 'business') {
      this.breadcrumbs = [
        {
          id: this.currentId,
          name: this.data?.businessName || 'Business',
          level: 'business'
        }
      ];
      return;
    }

    this.dashboardService
      .getBreadcrumb(this.level, this.currentId)
      .subscribe({
        next: response => {
          this.breadcrumbs = response;
        },
        error: () => {
          this.breadcrumbs = [];
        }
      });
  }

  setView(view: DashboardView): void {
    if (view === 'overview' && this.level === 'sensor') {
      this.openHierarchyView();
      return;
    }

    this.selectedView = view;

    if (view === 'overview') {
      this.loadOverviewDashboard();
    }
  }

  openHierarchyView(): void {
    if (this.level !== 'sensor') {
      this.selectedView = 'hierarchy';
      return;
    }

    const parent = this.breadcrumbs.at(-2);

    if (parent) {
      this.openLevel(parent.level, parent.id);
      return;
    }

    const businessId = this.currentUser?.fkBusiness;
    if (businessId) {
      this.openLevel('business', businessId);
    }
  }

  changeRange(range: DashboardRange): void {
    if (this.range === range) {
      return;
    }

    this.range = range;
    this.loadDashboard();

    if (this.selectedView === 'overview') {
      this.overviewData = undefined;
      this.loadOverviewDashboard();
    }
  }

  openLevel(level: DashboardLevel, id: string): void {
    const keepOverviewOpen = this.selectedView === 'overview' && level !== 'sensor';

    this.level = level;
    this.currentId = id;
    this.selectedView = level === 'sensor'
      ? 'analysis'
      : keepOverviewOpen
        ? 'overview'
        : 'hierarchy';

    this.overviewData = undefined;
    this.overviewMainChart = undefined;
    this.overviewDonutChart = undefined;
    this.overviewTargetChart = undefined;
    this.deviceSparkCharts = [];

    this.loadDashboard();

    if (this.selectedView === 'overview') {
      this.loadOverviewDashboard();
    }
  }

  openSensorAnalysis(sensorId: string): void {
    this.openLevel('sensor', sensorId);
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
        nameKey: 'facilityName'
      },
      {
        items: response.buildings,
        level: 'building',
        idKey: 'buildingId',
        nameKey: 'buildingName'
      },
      {
        items: response.floors,
        level: 'floor',
        idKey: 'floorId',
        nameKey: 'floorName'
      },
      {
        items: response.sections,
        level: 'section',
        idKey: 'sectionId',
        nameKey: 'sectionName'
      },
      {
        items: response.offices,
        level: 'office',
        idKey: 'officeId',
        nameKey: 'officeName'
      }
    ];

    const activeLevel = levels.find(entry => entry.items?.length);

    if (!activeLevel?.items) {
      this.childCards = [];
      return;
    }

    this.childCards = activeLevel.items.map(item => ({
      id: String(item[activeLevel.idKey] || ''),
      name: String(item[activeLevel.nameKey] || 'Unnamed'),
      totalActiveEnergyKwh: item.totalActiveEnergyKwh,
      avgPowerFactor: item.avgPowerFactor,
      sensorCount: item.sensorCount,
      alertCount: item.alertCount,
      level: activeLevel.level
    }));
  }

  prepareCharts(response: DashboardResponse): void {
    this.hourlyEnergyChart = this.lineChart([
      {
        name: 'Energy',
        data: this.toSeries(response.hourlyEnergy || [])
      }
    ]);

    this.activePowerChart = undefined;
    this.voltageCurrentChart = undefined;
    this.powerFactorChart = undefined;
    this.frequencyChart = undefined;
    this.pfDonutChart = undefined;
    this.hourlyDemandChart = undefined;

    if (this.level !== 'sensor') {
      return;
    }

    this.activePowerChart = this.lineChart([
      {
        name: 'Active Power',
        data: this.toSeries(response.activePower || [])
      },
      {
        name: 'Reactive Power',
        data: this.toSeries(response.reactivePower || [])
      },
      {
        name: 'Apparent Power',
        data: this.toSeries(response.apparentPower || [])
      }
    ]);

    this.voltageCurrentChart = this.lineChart([
      {
        name: 'Voltage',
        data: this.toSeries(response.voltage || [])
      },
      {
        name: 'Current',
        data: this.toSeries(response.current || [])
      }
    ]);

    this.powerFactorChart = this.lineChart([
      {
        name: 'Power Factor',
        data: this.toSeries(response.powerFactor || [])
      }
    ]);

    this.frequencyChart = this.lineChart([
      {
        name: 'Frequency',
        data: this.toSeries(response.frequency || [])
      }
    ]);

    const today = new Date();
    this.hourlyDemandChart = this.lineChart([
      {
        name: 'Average demand',
        data: (response.hourlyDemand || []).map(item => [
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            item.hour
          ).getTime(),
          item.avgActivePowerW
        ])
      }
    ]);

    const distribution = response.pfDistribution;
    this.pfDonutChart = {
      series: distribution
        ? [
            distribution.excellentPct,
            distribution.goodPct,
            distribution.acceptablePct,
            distribution.poorPct
          ]
        : [0, 0, 0, 0],
      chart: {
        type: 'donut',
        height: 280,
        fontFamily: 'inherit',
        animations: {
          enabled: false
        }
      },
      labels: ['Excellent', 'Good', 'Acceptable', 'Poor'],
      colors: [
        'rgb(38, 191, 148)',
        'rgb(35, 183, 229)',
        'rgb(245, 184, 73)',
        'rgb(230, 83, 60)'
      ],
      dataLabels: {
        enabled: false
      }
    };
  }

  prepareOverviewCharts(response: EnergyOverviewDashboardDto): void {
    this.overviewTargetChart = {
      chart: {
        height: 145,
        type: 'radialBar',
        fontFamily: 'inherit',
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        }
      },
      series: [response.usagePercent],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '62%'
          },
          track: {
            background: 'rgba(132, 90, 223, 0.12)'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 5,
              color: 'rgb(132, 90, 223)',
              fontSize: '1rem',
              fontWeight: 700
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Usage'],
      colors: ['rgb(132, 90, 223)']
    };

    this.deviceSparkCharts = response.deviceTypeSummaries.map((item, index) =>
      this.sparkChart(
        item.sparkline,
        this.chartPalette[index % this.chartPalette.length]
      )
    );

    this.overviewMainChart = {
      series: [
        {
          name: 'HVAC',
          data: response.monthlyDeviceTypeConsumption.map(item => item.hvac)
        },
        {
          name: 'Lighting',
          data: response.monthlyDeviceTypeConsumption.map(item => item.lighting)
        },
        {
          name: 'Miscellaneous',
          data: response.monthlyDeviceTypeConsumption.map(item => item.miscellaneous)
        },
        {
          name: 'Computation',
          data: response.monthlyDeviceTypeConsumption.map(item => item.computation)
        }
      ],
      chart: {
        type: 'bar',
        height: 330,
        stacked: true,
        fontFamily: 'inherit',
        animations: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: [
        'rgb(132, 90, 223)',
        'rgba(132, 90, 223, 0.7)',
        'rgba(132, 90, 223, 0.4)',
        '#dfe4ed'
      ],
      plotOptions: {
        bar: {
          columnWidth: '36%',
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
        categories: response.monthlyDeviceTypeConsumption.map(item => item.month)
      },
      yaxis: {
        labels: {
          formatter: (value: number) => `${value.toFixed(0)} kWh`
        }
      },
      fill: {
        opacity: 1
      },
      grid: {
        borderColor: '#edf0f5',
        strokeDashArray: 4
      },
      tooltip: {
        y: {
          formatter: (value: number) => `${value.toFixed(2)} kWh`
        }
      }
    };

    this.overviewDonutChart = {
      series: [
        response.deviceTypeDistribution.lightingPct,
        response.deviceTypeDistribution.hvacPct,
        response.deviceTypeDistribution.miscellaneousPct,
        response.deviceTypeDistribution.computationPct
      ],
      colors: this.chartPalette,
      chart: {
        height: 245,
        type: 'donut',
        fontFamily: 'inherit',
        animations: {
          enabled: false
        }
      },
      labels: ['Lighting', 'HVAC', 'Miscellaneous', 'Computation'],
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '76%'
          }
        }
      },
      legend: {
        show: false
      },
      stroke: {
        show: false
      }
    };
  }

  sparkChart(data: number[], color: string): any {
    return {
      series: [
        {
          name: 'Power',
          data
        }
      ],
      colors: [color],
      chart: {
        type: 'area',
        height: 52,
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.3,
          opacityTo: 0.02
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: false
      }
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
        animations: {
          enabled: false
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
          style: {
            fontSize: '10px'
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd MMM HH:mm'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.28,
          opacityTo: 0.03
        }
      }
    };
  }

  toSeries(points: TimeSeriesPointDto[]): Array<[number, number]> {
    return points.map(point => [
      new Date(point.timestamp).getTime(),
      point.value
    ]);
  }

  getPageTitle(): string {
    return (
      this.data?.businessName ||
      this.data?.facilityName ||
      this.data?.buildingName ||
      this.data?.floorName ||
      this.data?.sectionName ||
      this.data?.officeName ||
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
      office: 'las la-briefcase',
      sensor: 'las la-microchip'
    };

    return icons[level];
  }
}
