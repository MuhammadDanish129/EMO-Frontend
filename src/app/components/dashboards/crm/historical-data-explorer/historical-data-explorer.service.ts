import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { DashboardLevel } from '../energy-deep-dive/energy-deep-dive.types';
import { HistoricalDataResponse, HistoricalInterval } from './historical-data-explorer.types';

@Injectable({ providedIn: 'root' })
export class HistoricalDataExplorerService {
  private readonly baseUrl = `${environment.baseUrl}/historical-data`;

  constructor(private readonly http: HttpClient) {}

  preview(
    level: DashboardLevel,
    id: string,
    from: string,
    to: string,
    interval: HistoricalInterval,
    timeZone: string,
  ): Observable<HistoricalDataResponse> {
    return this.http.get<HistoricalDataResponse>(`${this.baseUrl}/${level}/${id}`, {
      params: this.params(from, to, interval, timeZone),
    });
  }

  exportCsv(
    level: DashboardLevel,
    id: string,
    from: string,
    to: string,
    interval: HistoricalInterval,
    timeZone: string,
  ): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.baseUrl}/${level}/${id}/export`, {
      params: this.params(from, to, interval, timeZone),
      observe: 'response',
      responseType: 'blob',
    });
  }

  private params(
    from: string,
    to: string,
    interval: HistoricalInterval,
    timeZone: string,
  ): HttpParams {
    return new HttpParams()
      .set('from', from)
      .set('to', to)
      .set('interval', interval)
      .set('timeZone', timeZone)
      .set('_ts', Date.now().toString());
  }
}
