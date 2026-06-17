// // import { Injectable } from '@angular/core';
// // import { HttpClient, HttpParams } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { environment } from '../../../../environments/environment';
// // import {
// //   ActiveDeviceAlertsResponseDTO,
// //   EnergyConsumptionByDeviceTypeResponseDTO,
// //   IdleDevicesResponseDTO,
// //   MonthlyDeviceTypeReportResponseDTO,
// //   PeakNonPeakAnalysisResponseDTO,
// // } from './crm.type';
// // import { ResponseModel } from '../../../shared/response.model';

// // @Injectable({ providedIn: 'root' })
// // export class EnergyDashboardService {
// //   private baseUrl = `${environment.baseUrl}/EnergyDashboard`;

// //   constructor(private http: HttpClient) {}

// //   getMonthlyDeviceTypeReport(businessId?: string): Observable<ResponseModel<MonthlyDeviceTypeReportResponseDTO>> {
// //     return this.http.get<ResponseModel<MonthlyDeviceTypeReportResponseDTO>>(
// //       `${this.baseUrl}/GetMonthlyDeviceTypeReport`,
// //       { params: this.buildParams({ businessId }) }
// //     );
// //   }

// //   getActiveDeviceAlerts(businessId?: string): Observable<ResponseModel<ActiveDeviceAlertsResponseDTO>> {
// //     return this.http.get<ResponseModel<ActiveDeviceAlertsResponseDTO>>(
// //       `${this.baseUrl}/GetActiveDeviceAlerts`,
// //       { params: this.buildParams({ businessId }) }
// //     );
// //   }

// //   getIdleDevices(businessId?: string): Observable<ResponseModel<IdleDevicesResponseDTO>> {
// //     return this.http.get<ResponseModel<IdleDevicesResponseDTO>>(
// //       `${this.baseUrl}/GetIdleDevices`,
// //       { params: this.buildParams({ businessId }) }
// //     );
// //   }

// //   getEnergyConsumptionByDeviceType(businessId?: string): Observable<ResponseModel<EnergyConsumptionByDeviceTypeResponseDTO>> {
// //     return this.http.get<ResponseModel<EnergyConsumptionByDeviceTypeResponseDTO>>(
// //       `${this.baseUrl}/GetEnergyConsumptionByDeviceType`,
// //       { params: this.buildParams({ businessId }) }
// //     );
// //   }

// //   getPeakNonPeakAnalysis(fromDate: string, toDate: string, businessId?: string): Observable<ResponseModel<PeakNonPeakAnalysisResponseDTO>> {
// //     return this.http.get<ResponseModel<PeakNonPeakAnalysisResponseDTO>>(
// //       `${this.baseUrl}/GetPeakNonPeakAnalysis`,
// //       { params: this.buildParams({ fromDate, toDate, businessId }) }
// //     );
// //   }

// //   private buildParams(values: Record<string, string | undefined>): HttpParams {
// //     let params = new HttpParams();

// //     Object.entries(values).forEach(([key, value]) => {
// //       if (value) params = params.set(key, value);
// //     });

// //     return params;
// //   }
// // }



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../../../environments/environment';

// // ---------------------------------------------------------------------------
// // Response interfaces
// // ---------------------------------------------------------------------------

// export interface IdleDevice {
//   id: string;
//   name: string;
//   type: string;
//   status: 'Idle' | 'On' | 'Off';
//   icon: string;
//   iconBg: string;
//   iconColor: string;
// }

// export interface DeviceTypeConsumption {
//   categories: string[]; // months
//   series: {
//     name: string;
//     data: number[];
//   }[];
// }

// export interface DeviceTypeReportItem {
//   label: string;
//   value: number; // percentage
// }

// export interface DeviceTypeReport {
//   total: string; // e.g. "100%"
//   items: DeviceTypeReportItem[];
// }

// export interface DeviceAlert {
//   id: string;
//   level: 'critical' | 'warning' | 'info';
//   message: string;
//   device: string;
//   timestamp: string;
// }

// export interface DeviceAlertsResponse {
//   total: number;
//   newLastHour: number;
//   critical: number;
//   warning: number;
//   info: number;
//   alerts: DeviceAlert[];
// }

// export interface PeakNonPeakPoint {
//   date: string; // ISO date
//   peakKwh: number;
//   nonPeakKwh: number;
//   peakCost: number;
//   nonPeakCost: number;
// }

// export interface PeakNonPeakResponse {
//   startDate: string;
//   endDate: string;
//   totalPeakKwh: number;
//   totalNonPeakKwh: number;
//   totalPeakCost: number;
//   totalNonPeakCost: number;
//   peakRateApplied: number;   // $/kWh
//   nonPeakRateApplied: number; // $/kWh
//   points: PeakNonPeakPoint[];
// }

// export interface EnergySummary {
//   monthlyTargetKwh: number;
//   currentUsageKwh: number;
//   usagePercent: number;
//   estimatedMonthlyCost: number;
//   liveLoadKw: number;
//   carbonFootprintKg: number;
// }

// // ---------------------------------------------------------------------------
// // Service
// // ---------------------------------------------------------------------------

// @Injectable({
//   providedIn: 'root'
// })
// export class EnergyService {

//   // Adjust this to point at your real backend base URL
//   private baseUrl = `${environment.baseUrl}/energy`;

//   constructor(private http: HttpClient) {}

//   /** Card: Monthly Energy Target / summary strip */
//   getSummary(): Observable<EnergySummary> {
//     return this.http.get<EnergySummary>(`${this.baseUrl}/summary`);
//   }

//   /** Card: Idle Devices */
//   getIdleDevices(): Observable<IdleDevice[]> {
//     return this.http.get<IdleDevice[]>(`${this.baseUrl}/idle-devices`);
//   }

//   /** Card: Energy Consumption by Device Type (Last 12 Months) */
//   getDeviceTypeConsumption(): Observable<DeviceTypeConsumption> {
//     return this.http.get<DeviceTypeConsumption>(`${this.baseUrl}/device-type-consumption`);
//   }

//   /** Card: Monthly Device Type Report (donut) */
//   getDeviceTypeReport(): Observable<DeviceTypeReport> {
//     return this.http.get<DeviceTypeReport>(`${this.baseUrl}/device-type-report`);
//   }

//   /** Card: Active Device Alerts */
//   getActiveAlerts(): Observable<DeviceAlertsResponse> {
//     return this.http.get<DeviceAlertsResponse>(`${this.baseUrl}/alerts`);
//   }

//   /** Card: Peak / Non-Peak Usage Analysis */
//   getPeakNonPeak(startDate: string, endDate: string): Observable<PeakNonPeakResponse> {
//     return this.http.get<PeakNonPeakResponse>(`${this.baseUrl}/peak-nonpeak`, {
//       params: { startDate, endDate }
//     });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  EnergyConsumptionByDeviceTypeResponseDTO,
  MonthlyDeviceTypeReportResponseDTO,
  PeakNonPeakSummaryResponseDTO
} from './crm.type';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from "../../../shared/response.model";

@Injectable({
  providedIn: 'root'
})
export class EnergyDashboardService {
  private baseUrl = `${environment.baseUrl}/EnergyDashboard`;

  constructor(private http: HttpClient) {}

  getMonthlyDeviceTypeReport(): Observable<ResponseModel<MonthlyDeviceTypeReportResponseDTO[]>> {
    return this.http.get<ResponseModel<MonthlyDeviceTypeReportResponseDTO[]>>(
      `${this.baseUrl}/GetMonthlyDeviceTypeReport`
    );
  }

  getEnergyConsumptionByDeviceTypeLast12Months(): Observable<ResponseModel<EnergyConsumptionByDeviceTypeResponseDTO[]>> {
    return this.http.get<ResponseModel<EnergyConsumptionByDeviceTypeResponseDTO[]>>(
      `${this.baseUrl}/GetEnergyConsumptionByDeviceTypeLast12Months`
    );
  }

  getPeakNonPeakAnalysis(
    startDate: string,
    endDate: string
  ): Observable<ResponseModel<PeakNonPeakSummaryResponseDTO>> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get<ResponseModel<PeakNonPeakSummaryResponseDTO>>(
      `${this.baseUrl}/GetPeakNonPeakAnalysis`,
      { params }
    );
  }

  exportPeakNonPeakAnalysisCsv(startDate: string, endDate: string): Observable<Blob> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get(`${this.baseUrl}/ExportPeakNonPeakAnalysisCsv`, {
      params,
      responseType: 'blob'
    });
  }

  exportEnergyConsumptionByDeviceTypeCsv(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/ExportEnergyConsumptionByDeviceTypeCsv`, {
      responseType: 'blob'
    });
  }
}