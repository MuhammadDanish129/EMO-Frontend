import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import { SensorRequestDTO, SensorResponseDTO } from './sensor-management.type';

@Injectable({
  providedIn: 'root',
})
export class SensorService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getSensors(): Observable<ResponseModel<SensorResponseDTO[]>> {
    return this.http.get<ResponseModel<SensorResponseDTO[]>>(
      `${this.baseUrl}/Sensor`
    );
  }

  getSensorByBusinessId(
    id: string
  ): Observable<ResponseModel<SensorResponseDTO[]>> {
    return this.http.get<ResponseModel<SensorResponseDTO[]>>(
      `${this.baseUrl}/Sensor/GetByBusinessId`,
      { params: { id } }
    );
  }

  getSensorByDeviceId(
    id: string
  ): Observable<ResponseModel<SensorResponseDTO[]>> {
    return this.http.get<ResponseModel<SensorResponseDTO[]>>(
      `${this.baseUrl}/Sensor/GetByDeviceId`,
      { params: { id } }
    );
  }

  addSensor(
    model: SensorRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Sensor`,
      model
    );
  }

  updateSensor(
    model: SensorRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Sensor`,
      model
    );
  }

  deleteSensor(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Sensor`,
      { params: { id } }
    );
  }
}
