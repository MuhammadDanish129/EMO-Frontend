import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import { DeviceRequestDTO, DeviceResponseDTO } from './device-management.type';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /* ===============================
   * GET ALL DEVICES
   * =============================== */
  getDevices(): Observable<ResponseModel<DeviceResponseDTO[]>> {
    return this.http.get<ResponseModel<DeviceResponseDTO[]>>(
      `${this.baseUrl}/Device`
    );
  }

  /* ===============================
   * GET BY BUSINESS ID
   * =============================== */
  getDeviceByBusinessId(
    id: string
  ): Observable<ResponseModel<DeviceResponseDTO[]>> {
    return this.http.get<ResponseModel<DeviceResponseDTO[]>>(
      `${this.baseUrl}/Device/GetByBusinessId`,
      { params: { id } }
    );
  }


   getDeviceByOfficeId(
    id: string
  ): Observable<ResponseModel<DeviceResponseDTO[]>> {
    return this.http.get<ResponseModel<DeviceResponseDTO[]>>(
      `${this.baseUrl}/Device/GetByOfficeId`,
      { params: { id } }
    );
  }
  /* ===============================
   * ADD DEVICE
   * =============================== */
  addDevice(
    model: DeviceRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Device`,
      model
    );
  }

  /* ===============================
   * UPDATE DEVICE
   * =============================== */
  updateDevice(
    model: DeviceRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Device`,
      model
    );
  }

  /* ===============================
   * DELETE DEVICE
   * =============================== */
  deleteDevice(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Device`,
      { params: { id } }
    );
  }
}
