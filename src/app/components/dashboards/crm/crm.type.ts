export interface MonthlyDeviceTypeReportResponseDTO {
  utilityName: string;
  totalKwh: number;
  percentage: number;
}

export interface EnergyConsumptionByDeviceTypeResponseDTO {
  month: string;
  year: number;
  utilityName: string;
  totalKwh: number;
}

export interface PeakNonPeakAnalysisResponseDTO {
  period: string;
  peakKwh: number;
  nonPeakKwh: number;
  totalKwh: number;
  peakPercentage: number;
  nonPeakPercentage: number;
}

export interface PeakNonPeakSummaryResponseDTO {
  totalPeakKwh: number;
  totalNonPeakKwh: number;
  totalKwh: number;
  peakPercentage: number;
  nonPeakPercentage: number;
  peakStartTime?: string;
  peakEndTime?: string;
  dailyData: PeakNonPeakAnalysisResponseDTO[];
}

export interface CrmDashboardSummaryResponseDTO {
  totalEnergyKwh: number;
  currentLoadW: number;
  monthlyCost: number;
  onlineSensors: number;
  savingOpportunity: number;
  peakDemandW: number;
  fromDate: string;
  toDate: string;
}

export interface CrmLiveUtilityLoadResponseDTO {
  utilityName: string;
  currentLoadW: number;
  percentage: number;
  onlineSensors: number;
}

export interface CrmLiveConsumerResponseDTO {
  sensorId: string;
  sensorName: string;
  applianceName: string;
  utilityName: string;
  officeName: string;
  floorName: string;
  currentLoadW: number;
  voltage: number;
  powerFactor: number;
  relayState: string;
  receivedAtUtc: string;
}

export interface CrmDashboardLiveOverviewResponseDTO {
  energyTodayKwh: number;
  estimatedCostToday?: number | null;
  costConfigured: boolean;
  currentLoadW: number;
  peakDemandTodayW: number;
  totalSensors: number;
  onlineSensors: number;
  delayedSensors: number;
  offlineSensors: number;
  neverConnectedSensors: number;
  averageVoltage: number;
  averagePowerFactor: number;
  assignedSensors: number;
  configuredOptimizationSensors: number;
  optimizationReadinessPercent: number;
  tariffConfigured: boolean;
  demandLimitConfigured: boolean;
  demandLimitKw?: number | null;
  onlineThresholdSeconds: number;
  delayedThresholdSeconds: number;
  liveUpdatedAtUtc: string;
  aggregateUpdatedAtUtc: string;
  utilityLoads: CrmLiveUtilityLoadResponseDTO[];
  topConsumers: CrmLiveConsumerResponseDTO[];
}

export interface CrmDashboardChartSeriesDTO {
  name: string;
  data: number[];
}

export interface CrmDashboardChartPointDTO {
  label: string;
  period: string;
  value: number;
  peakKwh: number;
  nonPeakKwh: number;
  totalKwh: number;
  demandW: number;
}

export interface CrmDashboardChartResponseDTO {
  chartType: string;
  range: string;
  fromDate: string;
  toDate: string;
  unit: string;
  categories: string[];
  series: CrmDashboardChartSeriesDTO[];
  points: CrmDashboardChartPointDTO[];
  totalKwh: number;
  totalPeakKwh: number;
  totalNonPeakKwh: number;
  peakDemandW: number;
  peakStartTime?: string;
  peakEndTime?: string;
}

export interface CrmDashboardSuggestionResponseDTO {
  suggestionId: string;
  severity: 'critical' | 'warning' | 'info' | string;
  type: string;
  title: string;
  message: string;
  action: string;
  estimatedSavingKwh?: number | null;
  estimatedSavingCost?: number | null;
  sensorId: string;
  sensorName: string;
  applianceId: string;
  applianceName: string;
  utilityName: string;
  officeName: string;
  timeBucket: string;
  canApplyAction: boolean;
  conflictsWithPeakHour: boolean;
  reasonCode: string;
}

export type CrmAnalysisChartType = 'energyconsumption' | 'peaknonpeak' | 'peakdemand';
export type CrmChartRange = '24h' | '7d' | '30d' | 'custom';

export interface OptimizationSuggestionSocketItemDTO {
  reasonCode: string;
  sensorId?: string | null;
  officeId?: string | null;
  applianceId?: string | null;
  type: string;
  severity: string;
  priority?: string;
  title: string;
  description: string;
  recommendation: string;
  affectedAppliance?: string;
  affectedUtility?: string;
  affectedOffice?: string;
  confidence?: string;
  estimatedSavingKwh?: number | null;
  estimatedSavingCost?: number | null;
  conflictsWithPeakHour?: boolean;
  canApplyAction?: boolean;
  detectedAtUtc?: string;
  expiresAtUtc?: string;
}

export interface OptimizationSuggestionsSocketPayloadDTO {
  businessId: string;
  generatedAtUtc: string;
  isSnapshot?: boolean;
  suggestions: OptimizationSuggestionSocketItemDTO[];
}
