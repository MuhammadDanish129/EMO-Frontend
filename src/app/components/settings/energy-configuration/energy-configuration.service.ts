import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import { EnergyConfiguration } from './energy-configuration.types';
@Injectable({ providedIn: 'root' })
export class EnergyConfigurationService {
  private api = environment.baseUrl + '/EnergyConfiguration';
  constructor(private http: HttpClient) {}
  getByBusinessId(id: string): Observable<ResponseModel<EnergyConfiguration>> {
    return this.http.get<ResponseModel<EnergyConfiguration>>(
      `${this.api}/GetByBusinessId`,
      { params: { id } },
    );
  }
  save(
    model: EnergyConfiguration,
  ): Observable<ResponseModel<EnergyConfiguration>> {
    return this.http.put<ResponseModel<EnergyConfiguration>>(this.api, model);
  }
}
