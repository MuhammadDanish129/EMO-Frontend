import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import {
  ApplianceRequestDTO,
  ApplianceResponseDTO,
  ApplianceStatusDTO,
  AssignSensorApplianceDTO,
  SensorApplianceResponseDTO,
  SensorAssignableAppliancesDTO,
  UpdateSensorApplianceDTO
} from './appliance-management.type';

@Injectable({
  providedIn: 'root',
})
export class ApplianceManagementService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAppliances(): Observable<ResponseModel<ApplianceResponseDTO[]>> {
    return this.http.get<ResponseModel<ApplianceResponseDTO[]>>(
      `${this.baseUrl}/Appliance`
    );
  }

  getApplianceById(id: string): Observable<ResponseModel<ApplianceResponseDTO>> {
    return this.http.get<ResponseModel<ApplianceResponseDTO>>(
      `${this.baseUrl}/Appliance/GetById`,
      { params: { id } }
    );
  }

  getAppliancesByUtilityId(id: string): Observable<ResponseModel<ApplianceResponseDTO[]>> {
    return this.http.get<ResponseModel<ApplianceResponseDTO[]>>(
      `${this.baseUrl}/Appliance/GetByUtilityId`,
      { params: { id } }
    );
  }


  getBusinessAppliancesByUtilityId(businessId: string, utilityId: string): Observable<ResponseModel<ApplianceResponseDTO[]>> {
    return this.http.get<ResponseModel<ApplianceResponseDTO[]>>(
      `${this.baseUrl}/Appliance/business/GetByUtilityId`,
      { params: { businessId, utilityId } }
    );
  }

  getAssignableAppliancesBySensorId(id: string): Observable<ResponseModel<SensorAssignableAppliancesDTO>> {
    return this.http.get<ResponseModel<SensorAssignableAppliancesDTO>>(
      `${this.baseUrl}/SensorAppliance/GetAssignableBySensorId`,
      { params: { id } }
    );
  }

  addBusinessAppliance(model: ApplianceRequestDTO): Observable<ResponseModel<ApplianceResponseDTO>> {
    return this.http.post<ResponseModel<ApplianceResponseDTO>>(
      `${this.baseUrl}/Appliance/business`,
      model
    );
  }

  updateBusinessAppliance(model: ApplianceRequestDTO): Observable<ResponseModel<ApplianceResponseDTO>> {
    return this.http.put<ResponseModel<ApplianceResponseDTO>>(
      `${this.baseUrl}/Appliance/business`,
      model
    );
  }

  addAppliance(model: ApplianceRequestDTO): Observable<ResponseModel<ApplianceResponseDTO>> {
    return this.http.post<ResponseModel<ApplianceResponseDTO>>(
      `${this.baseUrl}/Appliance`,
      model
    );
  }

  updateAppliance(model: ApplianceRequestDTO): Observable<ResponseModel<ApplianceResponseDTO>> {
    return this.http.put<ResponseModel<ApplianceResponseDTO>>(
      `${this.baseUrl}/Appliance`,
      model
    );
  }

  deleteAppliance(id: string): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Appliance`,
      { params: { id } }
    );
  }

  seedDefaultAppliances(): Observable<ResponseModel<ApplianceResponseDTO[]>> {
    return this.http.get<ResponseModel<ApplianceResponseDTO[]>>(
      `${this.baseUrl}/Appliance/SeedDefault`
    );
  }

  assignApplianceToSensor(
    model: AssignSensorApplianceDTO
  ): Observable<ResponseModel<SensorApplianceResponseDTO>> {
    return this.http.post<ResponseModel<SensorApplianceResponseDTO>>(
      `${this.baseUrl}/SensorAppliance/Assign`,
      model
    );
  }

  updateSensorAppliance(
    model: UpdateSensorApplianceDTO
  ): Observable<ResponseModel<SensorApplianceResponseDTO>> {
    return this.http.put<ResponseModel<SensorApplianceResponseDTO>>(
      `${this.baseUrl}/SensorAppliance`,
      model
    );
  }

  getSensorApplianceBySensorId(id: string): Observable<ResponseModel<SensorApplianceResponseDTO>> {
    return this.http.get<ResponseModel<SensorApplianceResponseDTO>>(
      `${this.baseUrl}/SensorAppliance/GetBySensorId`,
      { params: { id } }
    );
  }

  getApplianceStatusBySensorId(id: string): Observable<ResponseModel<ApplianceStatusDTO>> {
    return this.http.get<ResponseModel<ApplianceStatusDTO>>(
      `${this.baseUrl}/SensorAppliance/GetStatusBySensorId`,
      { params: { id } }
    );
  }

  deleteSensorAppliance(id: string): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/SensorAppliance`,
      { params: { id } }
    );
  }
}
