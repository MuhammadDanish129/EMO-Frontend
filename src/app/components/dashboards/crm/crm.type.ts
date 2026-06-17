// export interface MonthlyDeviceTypeReportItemDTO {
//   utilityId: string;
//   utilityName: string;
//   energyKwh: number;
//   percentage: number;
// }

// export interface MonthlyDeviceTypeReportResponseDTO {
//   totalEnergyKwh: number;
//   items: MonthlyDeviceTypeReportItemDTO[];
// }

// export interface ActiveDeviceAlertsResponseDTO {
//   totalAlerts: number;
//   newAlertsLastHour: number;
//   criticalAlerts: number;
//   warningAlerts: number;
//   informationalAlerts: number;
// }

// export interface IdleDeviceItemDTO {
//   sensorId: string;
//   sensorName: string;
//   utilityName: string;
//   lastPowerW: number;
//   idleMinutes: number;
//   lastSeenAt: string;
// }

// export interface IdleDevicesResponseDTO {
//   totalIdleDevices: number;
//   idleThresholdW: number;
//   items: IdleDeviceItemDTO[];
// }

// export interface EnergyConsumptionSeriesDTO {
//   utilityName: string;
//   data: number[];
// }

// export interface EnergyConsumptionByDeviceTypeResponseDTO {
//   months: string[];
//   series: EnergyConsumptionSeriesDTO[];
// }

// export interface PeakNonPeakSummaryDTO {
//   totalEnergyKwh: number;
//   peakEnergyKwh: number;
//   nonPeakEnergyKwh: number;
//   peakPercentage: number;
//   nonPeakPercentage: number;
//   peakAveragePowerW: number;
//   nonPeakAveragePowerW: number;
//   highestPeakDemandW: number;
//   highestPeakDemandAt: string | null;
// }

// export interface PeakNonPeakDailyItemDTO {
//   date: string;
//   peakEnergyKwh: number;
//   nonPeakEnergyKwh: number;
// }

// export interface PeakNonPeakAnalysisResponseDTO {
//   fromDate: string;
//   toDate: string;
//   peakStartHour: number;
//   peakEndHour: number;
//   summary: PeakNonPeakSummaryDTO;
//   daily: PeakNonPeakDailyItemDTO[];
// }


// export interface ResponseModel<T> {
//   data: T;
//   remarks: string;
//   success: boolean;
// }

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
  dailyData: PeakNonPeakAnalysisResponseDTO[];
}