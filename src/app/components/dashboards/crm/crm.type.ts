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
