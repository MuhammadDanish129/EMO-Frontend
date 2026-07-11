import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { ResponseModel } from '../../../../../shared/response.model';
import { OptimizationDashboardResponseDTO } from './optimization-dashboard.type';

export type OptimizationRange = '24h' | '7d' | '30d' | 'custom';

@Injectable({ providedIn: 'root' })
export class OptimizationDashboardService {
  private baseUrl = environment.baseUrl + '/OptimizationDashboard';

  constructor(private http: HttpClient) {}

  getOptimizationDashboard(
    level: string,
    id: string,
    range: OptimizationRange = '24h',
    from?: string,
    to?: string
  ): Observable<ResponseModel<OptimizationDashboardResponseDTO>> {
    let params = new HttpParams().set('range', range);
    if (from) params = params.set('from', from);
    if (to) params = params.set('to', to);

    return this.http.get<ResponseModel<OptimizationDashboardResponseDTO>>(
      `${this.baseUrl}/${level}/${id}`,
      { params }
    );
  }
}
