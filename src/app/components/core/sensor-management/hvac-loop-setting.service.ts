import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import {
  HvacLoopSettingRequestDTO,
  HvacLoopSettingResponseDTO
} from './hvac-loop-setting.type';

@Injectable({
  providedIn: 'root'
})
export class HvacLoopSettingService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBySensorId(
    sensorId: string
  ): Observable<ResponseModel<HvacLoopSettingResponseDTO>> {
    return this.http.get<ResponseModel<HvacLoopSettingResponseDTO>>(
      `${this.baseUrl}/HvacLoopSetting/GetBySensorId`,
      { params: { id: sensorId } }
    );
  }

  create(
    model: HvacLoopSettingRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/HvacLoopSetting`,
      model
    );
  }

  update(
    model: HvacLoopSettingRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/HvacLoopSetting`,
      model
    );
  }

  enableLoop(sensorId: string): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/HvacLoopSetting/EnableLoop`,
      null,
      { params: { id: sensorId } }
    );
  }

  disableLoop(sensorId: string): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/HvacLoopSetting/DisableLoop`,
      null,
      { params: { id: sensorId } }
    );
  }

  delete(id: string): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/HvacLoopSetting`,
      { params: { id } }
    );
  }
}
