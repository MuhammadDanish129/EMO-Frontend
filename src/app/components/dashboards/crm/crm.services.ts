import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import {
  CrmAnalysisChartType,
  CrmChartRange,
  CrmDashboardChartResponseDTO,
  CrmDashboardLiveOverviewResponseDTO,
  CrmDashboardSummaryResponseDTO,
  CrmDashboardSuggestionResponseDTO,
  EnergyConsumptionByDeviceTypeResponseDTO,
  MonthlyDeviceTypeReportResponseDTO,
  PeakNonPeakSummaryResponseDTO
} from './crm.type';
import { User } from '../../../shared/services/user/user.type';

@Injectable({
  providedIn: 'root'
})
export class EnergyDashboardService {
  private baseUrl = `${environment.baseUrl}/EnergyDashboard`;

  constructor(private http: HttpClient) {}

  getDashboardSummary(user: User | null): Observable<ResponseModel<CrmDashboardSummaryResponseDTO>> {
    const scope = this.resolveScope(user);
    return this.http.get<ResponseModel<CrmDashboardSummaryResponseDTO>>(
      `${this.baseUrl}/crm/${scope.scope}/summary`,
      { params: scope.params }
    );
  }

  getDashboardLiveOverview(
    user: User | null,
    forceRefresh = false,
  ): Observable<ResponseModel<CrmDashboardLiveOverviewResponseDTO>> {
    const scope = this.resolveScope(user);
    const params = scope.params
      .set('forceRefresh', String(forceRefresh))
      .set('_ts', String(Date.now()));

    return this.http.get<ResponseModel<CrmDashboardLiveOverviewResponseDTO>>(
      `${this.baseUrl}/crm/${scope.scope}/live-overview`,
      { params }
    );
  }

  getDashboardChart(
    user: User | null,
    chartType: CrmAnalysisChartType | 'hourlyusage' | 'utilitywise',
    range: CrmChartRange = '30d',
    fromDate?: string,
    toDate?: string
  ): Observable<ResponseModel<CrmDashboardChartResponseDTO>> {
    const scope = this.resolveScope(user);
    let params = scope.params
      .set('chartType', chartType)
      .set('range', range);

    if (range === 'custom' && fromDate && toDate) {
      params = params
        .set('fromDate', fromDate)
        .set('toDate', toDate);
    }

    return this.http.get<ResponseModel<CrmDashboardChartResponseDTO>>(
      `${this.baseUrl}/crm/${scope.scope}/chart`,
      { params }
    );
  }

  getDashboardSuggestions(user: User | null): Observable<ResponseModel<CrmDashboardSuggestionResponseDTO[]>> {
    const scope = this.resolveScope(user);
    return this.http.get<ResponseModel<CrmDashboardSuggestionResponseDTO[]>>(
      `${this.baseUrl}/crm/${scope.scope}/suggestions`,
      { params: scope.params.set('_ts', String(Date.now())) }
    );
  }

  getMonthlyDeviceTypeReport(user?: User | null): Observable<ResponseModel<MonthlyDeviceTypeReportResponseDTO[]>> {
    return this.http.get<ResponseModel<MonthlyDeviceTypeReportResponseDTO[]>>(
      `${this.baseUrl}/GetMonthlyDeviceTypeReport`,
      { params: this.buildLegacyParams(user) }
    );
  }

  getEnergyConsumptionByDeviceTypeLast12Months(user?: User | null): Observable<ResponseModel<EnergyConsumptionByDeviceTypeResponseDTO[]>> {
    return this.http.get<ResponseModel<EnergyConsumptionByDeviceTypeResponseDTO[]>>(
      `${this.baseUrl}/GetEnergyConsumptionByDeviceTypeLast12Months`,
      { params: this.buildLegacyParams(user) }
    );
  }

  getPeakNonPeakAnalysis(
    startDate: string,
    endDate: string,
    user?: User | null
  ): Observable<ResponseModel<PeakNonPeakSummaryResponseDTO>> {
    let params = this.buildLegacyParams(user)
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get<ResponseModel<PeakNonPeakSummaryResponseDTO>>(
      `${this.baseUrl}/GetPeakNonPeakAnalysis`,
      { params }
    );
  }

  exportPeakNonPeakAnalysisCsv(startDate: string, endDate: string, user?: User | null): Observable<Blob> {
    const params = this.buildLegacyParams(user)
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get(`${this.baseUrl}/ExportPeakNonPeakAnalysisCsv`, {
      params,
      responseType: 'blob'
    });
  }

  exportEnergyConsumptionByDeviceTypeCsv(user?: User | null): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/ExportEnergyConsumptionByDeviceTypeCsv`, {
      params: this.buildLegacyParams(user),
      responseType: 'blob'
    });
  }

  private resolveScope(user: User | null): { scope: 'business' | 'tenant'; params: HttpParams } {
    const businessId = user?.fkBusiness || '';
    const userId = user?.userId || '';
    const isTenant = Number(user?.userTypeLevel) === 2;

    if (isTenant) {
      let params = new HttpParams().set('tenantId', userId);
      if (businessId) {
        params = params.set('businessId', businessId);
      }
      return { scope: 'tenant', params };
    }

    return {
      scope: 'business',
      params: businessId ? new HttpParams().set('businessId', businessId) : new HttpParams()
    };
  }

  private buildLegacyParams(user?: User | null): HttpParams {
    const scope = this.resolveScope(user ?? null);
    return scope.params;
  }
}
