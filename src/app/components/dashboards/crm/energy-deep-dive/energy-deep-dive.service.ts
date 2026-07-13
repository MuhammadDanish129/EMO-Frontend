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

  getDashboard(level: DashboardLevel, id: string, range = '24h'): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(`${this.dashboardUrl}/${level}/${id}`, {
      params: new HttpParams().set('range', range)
    });
  }

  getDeepDive(
    level: DashboardLevel,
    id: string,
    range = '24h',
    timeZone = 'UTC',
    forceRefresh = false,
  ): Observable<DeepDiveResponse> {
    const params = new HttpParams()
      .set('range', range)
      .set('timeZone', timeZone)
      .set('forceRefresh', String(forceRefresh))
      .set('_ts', String(Date.now()));

    return this.http.get<DeepDiveResponse>(`${this.deepDiveUrl}/${level}/${id}`, { params });
  }

  getBreadcrumb(level: DashboardLevel, id: string): Observable<BreadcrumbDto[]> {
    return this.http.get<BreadcrumbDto[]>(`${this.dashboardUrl}/breadcrumb/${level}/${id}`);
  }
}
