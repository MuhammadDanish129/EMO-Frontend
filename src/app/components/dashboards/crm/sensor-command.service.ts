import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';

export interface SensorRelayCommandRequestDTO {
  sensorId: string;
  command: 'ON' | 'OFF';
  reason: string;
}

export interface SensorRelayCommandResponseDTO {
  sensorId: string;
  macAddress: string;
  topic: string;
  command: string;
  reason: string;
  sentAtUtc: string;
}

@Injectable({ providedIn: 'root' })
export class SensorCommandService {
  private baseUrl = environment.baseUrl + '/SensorCommand';

  constructor(private http: HttpClient) {}

  sendRelayCommand(model: SensorRelayCommandRequestDTO): Observable<ResponseModel<SensorRelayCommandResponseDTO>> {
    return this.http.post<ResponseModel<SensorRelayCommandResponseDTO>>(`${this.baseUrl}/Relay`, model);
  }
}
