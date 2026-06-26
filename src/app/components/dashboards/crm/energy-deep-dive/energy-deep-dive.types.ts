export type DashboardLevel =
  | 'business'
  | 'facility'
  | 'building'
  | 'floor'
  | 'section'
  | 'office'
  | 'sensor';

export interface BreadcrumbDto {
  id: string;
  name: string;
  level: DashboardLevel;
}

export interface KpiSummaryDto {
  totalActiveEnergyKwh: number;
  totalReactiveEnergyKvarh: number;
  avgActivePowerW: number;
  avgPowerFactor: number;
  avgVoltage: number;
  avgCurrent: number;
  avgFrequency: number;
  peakActivePowerW: number;
  sensorCount: number;
  alertCount: number;
}

export interface TimeSeriesPointDto {
  timestamp: string;
  value: number;
}

export interface ChildCardDto {
  id: string;
  name: string;
  totalActiveEnergyKwh: number;
  avgPowerFactor: number;
  sensorCount: number;
  alertCount: number;
  level: DashboardLevel;
}

export interface HierarchyNodeDto {
  facilityId?: string;
  facilityName?: string;
  buildingId?: string;
  buildingName?: string;
  floorId?: string;
  floorName?: string;
  sectionId?: string;
  sectionName?: string;
  officeId?: string;
  officeName?: string;
  totalActiveEnergyKwh: number;
  avgPowerFactor: number;
  sensorCount: number;
  alertCount: number;
}

export interface SensorCardDto {
  sensorId: string;
  sensorName: string;
  latestVoltage: number;
  latestCurrent: number;
  latestActivePower: number;
  latestPowerFactor: number;
  totalActiveEnergyKwh: number;
  hasAlert: boolean;
}

export interface PfDistributionDto {
  excellentPct: number;
  goodPct: number;
  acceptablePct: number;
  poorPct: number;
}

export interface HourlyDemandDto {
  hour: number;
  avgActivePowerW: number;
}

export interface RawReadingDto {
  packetId: number;
  createdAt: string;
  volt: number;
  current: number;
  activePower: number;
  reactivePower: number;
  apparentPower: number;
  powerFactor: number;
  frequency: number;
  activeEnergy: number;
  reactiveEnergy: number;
}

export interface AlertDto {
  type: string;
  message: string;
  timestamp: string;
}

export interface EnergyOverviewDashboardDto {
  monthlyTargetKwh: number;
  currentUsageKwh: number;
  usagePercent: number;
  deviceTypeSummaries: DeviceTypeSummaryDto[];
  energyMeters: EnergyMeterOverviewDto[];
  monthlyDeviceTypeConsumption: MonthlyEnergyDeviceTypeDto[];
  deviceTypeDistribution: DeviceTypeDistributionDto;
  alerts: AlertOverviewDto;
}

export interface DeviceTypeSummaryDto {
  deviceType: string;
  totalEnergyKwh: number;
  avgVoltage: number;
  avgActivePowerW: number;
  changePercent: number;
  sparkline: number[];
}

export interface EnergyMeterOverviewDto {
  meterName: string;
  voltage: number;
  powerW: number;
}

export interface MonthlyEnergyDeviceTypeDto {
  month: string;
  hvac: number;
  lighting: number;
  miscellaneous: number;
  computation: number;
}

export interface DeviceTypeDistributionDto {
  hvacPct: number;
  lightingPct: number;
  miscellaneousPct: number;
  computationPct: number;
}

export interface AlertOverviewDto {
  totalAlerts: number;
  criticalAlerts: number;
  warningAlerts: number;
  infoAlerts: number;
}

export interface DashboardResponse {
  kpis: KpiSummaryDto;
  hourlyEnergy: TimeSeriesPointDto[];

  businessId?: string;
  businessName?: string;
  facilityId?: string;
  facilityName?: string;
  buildingId?: string;
  buildingName?: string;
  floorId?: string;
  floorName?: string;
  sectionId?: string;
  sectionName?: string;
  officeId?: string;
  officeName?: string;
  sensorId?: string;
  sensorName?: string;

  facilities?: HierarchyNodeDto[];
  buildings?: HierarchyNodeDto[];
  floors?: HierarchyNodeDto[];
  sections?: HierarchyNodeDto[];
  offices?: HierarchyNodeDto[];
  sensors?: SensorCardDto[];

  voltage?: TimeSeriesPointDto[];
  current?: TimeSeriesPointDto[];
  activePower?: TimeSeriesPointDto[];
  reactivePower?: TimeSeriesPointDto[];
  apparentPower?: TimeSeriesPointDto[];
  powerFactor?: TimeSeriesPointDto[];
  frequency?: TimeSeriesPointDto[];
  activeEnergy?: TimeSeriesPointDto[];
  reactiveEnergy?: TimeSeriesPointDto[];

  pfDistribution?: PfDistributionDto;
  hourlyDemand?: HourlyDemandDto[];
  recentReadings?: RawReadingDto[];
  alerts?: AlertDto[];
}
