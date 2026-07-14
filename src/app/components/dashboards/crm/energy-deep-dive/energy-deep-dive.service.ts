import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import {
  BreadcrumbDto,
  DashboardLevel,
  DashboardResponse,
  DeepDiveResponse
} from './energy-deep-dive.types';

@Injectable({ providedIn: 'root' })
export class EnergyDeepDiveService {
  private readonly dashboardUrl = `${environment.baseUrl}/dashboard`;
  private readonly deepDiveUrl = `${environment.baseUrl}/deep-dive`;

  constructor(private http: HttpClient) {}

  getDashboard(
    level: DashboardLevel,
    id: string,
    range = '24h',
    isTenant = false
  ): Observable<DashboardResponse> {
    const url = isTenant
      ? (level === 'business'
          ? `${environment.baseUrl}/tenant/dashboard`
          : `${environment.baseUrl}/tenant/dashboard/${level}/${id}`)
      : `${this.dashboardUrl}/${level}/${id}`;

    return this.http.get<DashboardResponse>(url, {
      params: new HttpParams().set('range', range)
    });
  }

  getDeepDive(
    level: DashboardLevel,
    id: string,
    range = '24h',
    timeZone = 'UTC',
    forceRefresh = false,
    isTenant = false,
  ): Observable<DeepDiveResponse> {
    const params = new HttpParams()
      .set('range', range)
      .set('timeZone', timeZone)
      .set('forceRefresh', String(forceRefresh))
      .set('_ts', String(Date.now()));

    const url = isTenant
      ? `${environment.baseUrl}/tenant/deep-dive/${level}/${id}`
      : `${this.deepDiveUrl}/${level}/${id}`;
    return this.http.get<DeepDiveResponse>(url, { params });
  }

  getBreadcrumb(level: DashboardLevel, id: string, isTenant = false): Observable<BreadcrumbDto[]> {
    const url = isTenant
      ? `${environment.baseUrl}/tenant/dashboard/breadcrumb/${level}/${id}`
      : `${this.dashboardUrl}/breadcrumb/${level}/${id}`;
    return this.http.get<BreadcrumbDto[]>(url);
  }
}
