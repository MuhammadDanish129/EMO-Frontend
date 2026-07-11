export interface OptimizationDashboardResponseDTO {
  level: string;
  entityId: string;
  range: string;
  isCustomRange: boolean;
  fromUtc: string;
  toUtc: string;
  rangeLabel: string;
  totalEnergyKwh: number;
  currentLivePowerW: number;
  peakPowerW: number;
  sensorCount: number;
  activeSensorCount: number;
  meterResetCount: number;
  ignoredSpikeCount: number;
  suggestions: OptimizationSuggestionDTO[];
  alerts: OptimizationAlertDTO[];
  highConsumers: HighConsumerDTO[];
  comparisons: EntityComparisonDTO[];
  comparisonChart: EntityComparisonDTO[];
  utilityBreakdown: UtilityConsumptionDTO[];
  idleAppliances: IdleApplianceDTO[];
  faultyAppliances: FaultyApplianceDTO[];
  peakDemandHours: PeakDemandHourDTO[];
  peakDemandSummary: PeakDemandSummaryDTO;
  liveSensors: LiveSensorOptimizationDTO[];
}

export interface OptimizationSuggestionDTO {
  severity: 'critical' | 'warning' | 'info' | 'success' | string;
  type: string;
  title: string;
  message: string;
  action: string;
  sensorId?: string;
  sensorName?: string;
  applianceName?: string;
  estimatedSavingKwh?: number;
}

export interface OptimizationAlertDTO {
  severity: string;
  type: string;
  title?: string;
  message: string;
  action?: string;
  sensorId?: string;
  sensorName?: string;
  applianceName?: string;
  timestampUtc: string;
}

export interface HighConsumerDTO {
  sensorId: string;
  sensorName: string;
  utilityName: string;
  applianceName: string;
  energyKwh: number;
  currentPowerW: number;
  sharePercent: number;
}

export interface EntityComparisonDTO {
  entityId: string;
  entityName: string;
  level: string;
  energyKwh: number;
  currentPowerW: number;
  sensorCount: number;
  suggestion?: string;
}

export interface UtilityConsumptionDTO {
  utilityName: string;
  energyKwh: number;
  currentPowerW: number;
  sharePercent: number;
}

export interface IdleApplianceDTO {
  sensorId: string;
  sensorName: string;
  applianceName: string;
  utilityName: string;
  currentPowerW: number;
  standbyPowerW: number;
  flexibleStandbyLimitW: number;
  standbyAutoOff: boolean;
  canTurnOff: boolean;
  actionLabel: string;
  deviceName: string;
  officeName: string;
  floorName: string;
  buildingName: string;
  facilityName: string;
  macAddress: string;
  serialAddress: string;
}

export interface FaultyApplianceDTO {
  sensorId: string;
  sensorName: string;
  applianceName: string;
  utilityName: string;
  currentPowerW: number;
  expectedMaxPowerW: number;
  powerFactor: number;
  reason: string;
  recommendedAction: string;
  deviceName: string;
  officeName: string;
  floorName: string;
  buildingName: string;
  facilityName: string;
}

export interface PeakDemandHourDTO {
  hourUtc: string;
  hourLabel: string;
  hourOfDay: number;
  energyKwh: number;
  averagePowerW: number;
  peakPowerW: number;
  sensorCount: number;
  isPeakHour: boolean;
}

export interface PeakDemandSummaryDTO {
  peakHourLabel: string;
  peakPowerW: number;
  peakEnergyKwh: number;
  recommendedAvoidHours: string;
  message: string;
}

export interface LiveSensorOptimizationDTO {
  sensorId: string;
  sensorName: string;
  applianceName: string;
  utilityName: string;
  activePowerW: number;
  voltage: number;
  current: number;
  powerFactor: number;
  frequency: number;
  relayState: string;
  relayEnabled: boolean;
  hvacLoopEnabled: boolean;
  hvacLoopOnSeconds: number;
  hvacLoopOffSeconds: number;
  receivedAtUtc?: string;
  isIdle: boolean;
  isFaulty: boolean;
}

export interface LiveOperationAlertDTO {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  type:
    | 'idle'
    | 'faulty'
    | 'voltage-sag'
    | 'voltage-surge'
    | 'low-power-factor'
    | 'high-live-consumption'
    | 'stale-sensor'
    | 'hvac-loop';
  title: string;
  message: string;
  action: string;
  sensorId: string;
  sensorName: string;
  applianceName?: string;
  utilityName?: string;
  currentPowerW?: number;
  standbyPowerW?: number;
  expectedMaxPowerW?: number;
  voltage?: number;
  powerFactor?: number;
  canTurnOff?: boolean;
  commandAllowed?: boolean;
  generatedAtUtc: string;
  lastSeenUtc: string;
  commandSent?: boolean;
}

export interface LiveAlertsPayloadDTO {
  scopeLevel: string;
  scopeId: string;
  generatedAtUtc: string;
  isSnapshot?: boolean;
  resolvedAlertIds?: string[];
  alerts: LiveOperationAlertDTO[];
}
