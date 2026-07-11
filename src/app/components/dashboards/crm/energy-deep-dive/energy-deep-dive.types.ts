import { CrmDashboardChartResponseDTO } from '../crm.type';

export type DashboardLevel =
  | 'business'
  | 'facility'
  | 'building'
  | 'floor'
  | 'section'
  | 'office'
  | 'device'
  | 'sensor';

export type DashboardRange = '24h' | '7d' | '30d' | '90d' | '1y';
export type BreakdownView = 'share' | 'ranking' | 'trend';
export type MetricView = 'energy' | 'cost' | 'demand';

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
  deviceId?: string;
  deviceName?: string;
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
  deviceId?: string;
  deviceName?: string;
  sensorId?: string;
  sensorName?: string;
  facilities?: HierarchyNodeDto[];
  buildings?: HierarchyNodeDto[];
  floors?: HierarchyNodeDto[];
  sections?: HierarchyNodeDto[];
  offices?: HierarchyNodeDto[];
  devices?: HierarchyNodeDto[];
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

export interface DeepDiveResponse {
  level: DashboardLevel;
  entityId: string;
  entityName: string;
  childLevel: DashboardLevel | '';
  from: string;
  to: string;
  currency: string;
  timezone: string;
  dataStatus: DeepDiveDataStatus;
  configuration: DeepDiveConfigurationStatus;
  features: DeepDiveFeatureAvailability;
  summary: DeepDiveSummary;
  breadcrumbs: BreadcrumbDto[];
  children: DeepDiveChild[];
  trend: DeepDiveTrendPoint[];
  peakOffPeak: DeepDivePeakOffPeak;
  demand: DeepDiveDemand;
  activeIssues: DeepDiveIssue[];
  suggestions: DeepDiveSuggestion[];
  crmCharts: DeepDiveCrmCharts;
  calculatedAt: string;
  servedFromAggregate: boolean;
  insight: string;
}

export interface DeepDiveCrmCharts {
  energyConsumption: CrmDashboardChartResponseDTO;
  peakNonPeak: CrmDashboardChartResponseDTO;
  highDemand: CrmDashboardChartResponseDTO;
  utilityTrend: CrmDashboardChartResponseDTO;
  utilityMix: CrmDashboardChartResponseDTO;
}

export interface DeepDiveDataStatus {
  hasReadings: boolean;
  sensorCount: number;
  sensorsWithReadings: number;
  firstReadingAt: string | null;
  lastReadingAt: string | null;
  message: string;
}

export type ConfigurationRequirementStatus = 'ready' | 'partial' | 'missing' | 'optional';

export interface DeepDiveConfigurationRequirement {
  key: string;
  title: string;
  description: string;
  status: ConfigurationRequirementStatus;
  route: string;
}

export interface DeepDiveConfigurationStatus {
  isReadyForOptimization: boolean;
  hasActiveTariffPlan: boolean;
  hasTariffRates: boolean;
  hasPeakSchedule: boolean;
  hasValidTimezone: boolean;
  hasDemandSettings: boolean;
  hasDemandLimit: boolean;
  hasMonthlyEnergyTarget: boolean;
  hasOfficeSchedules: boolean;
  hasApplianceAssignments: boolean;
  hasApplianceThresholds: boolean;
  totalSensors: number;
  sensorsWithAppliance: number;
  sensorsWithOptimizationProfile: number;
  applianceCoveragePercent: number;
  requirements: DeepDiveConfigurationRequirement[];
}

export interface DeepDiveFeatureAvailability {
  energyAnalysis: boolean;
  costAnalysis: boolean;
  peakOffPeakAnalysis: boolean;
  demandAnalysis: boolean;
  demandThresholdAnalysis: boolean;
  monthlyTargetAnalysis: boolean;
  optimizationSuggestions: boolean;
  savingsCostAnalysis: boolean;
}

export interface DeepDiveSummary {
  energyKwh: number;
  previousEnergyKwh: number;
  energyChangePercent: number;
  estimatedCost: number | null;
  previousEstimatedCost: number | null;
  costChangePercent: number | null;
  peakDemandKw: number;
  peakDemandAt: string | null;
  savingOpportunityKwh: number;
  savingOpportunityCost: number | null;
  monthlyEnergyTargetKwh: number | null;
  targetUsagePercent: number | null;
}

export interface DeepDiveChild {
  id: string;
  name: string;
  level: DashboardLevel;
  energyKwh: number;
  sharePercent: number;
  estimatedCost: number | null;
  previousEnergyKwh: number;
  changePercent: number;
  peakDemandKw: number;
  sensorCount: number;
  onlineSensorCount: number;
  issueCount: number;
  status: string;
}

export interface DeepDiveTrendPoint {
  bucket: string;
  energyKwh: number;
  previousEnergyKwh: number;
  demandKw: number;
  previousDemandKw: number;
  cost: number | null;
  previousCost: number | null;
}

export interface DeepDivePeakOffPeak {
  isAvailable: boolean;
  unavailableReason: string;
  peakEnergyKwh: number;
  offPeakEnergyKwh: number;
  peakSharePercent: number;
  offPeakSharePercent: number;
  peakCost: number | null;
  offPeakCost: number | null;
}

export interface DeepDiveDemand {
  hasData: boolean;
  hasConfiguredLimit: boolean;
  unavailableReason: string;
  intervalMinutes: number;
  averageDemandKw: number;
  peakDemandKw: number;
  peakDemandAt: string | null;
  demandLimitKw: number | null;
  warningThresholdKw: number | null;
  breachCount: number | null;
  minutesAboveThreshold: number | null;
}

export interface DeepDiveIssue {
  sensorId: string;
  sensorName: string;
  deviceName: string;
  applianceName: string;
  issueType: string;
  severity: string;
  message: string;
  currentValue: number;
  detectedAt: string;
}

export interface DeepDiveSuggestion {
  priority: string;
  title: string;
  reasonCode: string;
  recommendation: string;
  estimatedSavingKwh: number | null;
  estimatedSavingCost: number | null;
  canApplyAction: boolean;
}
