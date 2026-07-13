export interface TariffTimePeriod {
  tariffTimePeriodId?: string;
  periodName: string;
  periodType: 'Peak' | 'OffPeak' | 'Standard';
  startTime: string;
  endTime: string;
  dayOfWeek: number | null;
  seasonStart?: string | null;
  seasonEnd?: string | null;
  isActive: boolean;
}
export interface EnergyTariffPlan {
  energyTariffPlanId?: string;
  fkBusiness: string;
  planName: string;
  currency: string;
  standardRatePerKwh: number;
  peakRatePerKwh: number;
  offPeakRatePerKwh: number;
  demandChargePerKw?: number | null;
  isActive: boolean;
  timePeriods: TariffTimePeriod[];
}
export interface DemandManagementSetting {
  demandManagementSettingId?: string;
  fkBusiness: string;
  demandLimitKw: number;
  warningThresholdPercent: number;
  recoveryThresholdKw: number;
  demandIntervalMinutes: number;
  stabilizationMinutes: number;
  enablePeakHourControl: boolean;
  enableDemandThresholdControl: boolean;
  suggestionOnlyMode: boolean;
  isActive: boolean;
}
export interface EnergyConfiguration {
  fkBusiness: string;
  tariffPlan: EnergyTariffPlan;
  demandManagement: DemandManagementSetting;
}
