// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// import { environment } from '../../../../../environments/environment';
// import {
//   BreadcrumbDto,
//   DashboardLevel,
//   DashboardResponse,
//   EnergyOverviewDashboardDto
// } from './energy-deep-dive.types';

// @Injectable({
//   providedIn: 'root'
// })
// export class EnergyDeepDiveService {
//   private readonly apiUrl = `${environment.baseUrl}/dashboard`;

//   constructor(private http: HttpClient) {}

//   getDashboard(
//     level: DashboardLevel,
//     id: string,
//     range = '24h'
//   ): Observable<DashboardResponse> {
//     const params = new HttpParams().set('range', range);

//     return this.http.get<DashboardResponse>(
//       `${this.apiUrl}/${level}/${id}`,
//       { params }
//     );
//   }

//   getOverviewDashboard(
//     businessId: string,
//     range = '24h'
//   ): Observable<EnergyOverviewDashboardDto> {
//     const params = new HttpParams().set('range', range);

//     return this.http.get<EnergyOverviewDashboardDto>(
//       `${this.apiUrl}/overview/business/${businessId}`,
//       { params }
//     );
//   }

//   getBreadcrumb(
//     level: DashboardLevel,
//     id: string
//   ): Observable<BreadcrumbDto[]> {
//     return this.http.get<BreadcrumbDto[]>(
//       `${this.apiUrl}/breadcrumb/${level}/${id}`
//     );
//   }
// }
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import {
  BreadcrumbDto,
  DashboardLevel,
  DashboardResponse,
  EnergyOverviewDashboardDto
} from './energy-deep-dive.types';

@Injectable({
  providedIn: 'root'
})
export class EnergyDeepDiveService {
  private readonly apiUrl = `${environment.baseUrl}/dashboard`;

  constructor(private http: HttpClient) {}

  getDashboard(
    level: DashboardLevel,
    id: string,
    range = '24h'
  ): Observable<DashboardResponse> {
    const params = new HttpParams().set('range', range);

    return this.http.get<DashboardResponse>(
      `${this.apiUrl}/${level}/${id}`,
      { params }
    );
  }

  getOverviewDashboard(
    level: Exclude<DashboardLevel, 'sensor'>,
    id: string,
    range = '24h'
  ): Observable<EnergyOverviewDashboardDto> {
    const params = new HttpParams().set('range', range);

    return this.http.get<EnergyOverviewDashboardDto>(
      `${this.apiUrl}/overview/${level}/${id}`,
      { params }
    );
  }

  getBreadcrumb(
    level: DashboardLevel,
    id: string
  ): Observable<BreadcrumbDto[]> {
    return this.http.get<BreadcrumbDto[]>(
      `${this.apiUrl}/breadcrumb/${level}/${id}`
    );
  }
}
