import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import { BuildingRequestDTO, BuildingResponseDTO } from './building-management.type';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getFacilities(): Observable<ResponseModel<BuildingResponseDTO[]>> {
    return this.http.get<ResponseModel<BuildingResponseDTO[]>>(
      `${this.baseUrl}/Building`
    );
  }

  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getBuildingByFacilityId(
    id: string
  ): Observable<ResponseModel<BuildingResponseDTO[]>> {
    return this.http.get<ResponseModel<BuildingResponseDTO[]>>(
      `${this.baseUrl}/Building/GetByFacilityId`,
      { params: { id } }
    );
  }
//   getSubUserTypesOfBusinessAdmin(
//     userId: string
//   ): Observable<ResponseModel<FacilityResponseDTO[]>> {
//     return this.http.get<ResponseModel<FacilityResponseDTO[]>>(
//       `${this.baseUrl}/Facility/GetSubUserTypesOfBusiness`,
//       { params: { userId } }
//     );
//   }

  addBuilding(
    model: BuildingRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Building`,
      model
    );
  }


  updateBuilding(
    model: BuildingRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Building`,
      model
    );
  }


  deletBuilding(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Building`,
      { params: { id } }
    );
  }

  /** ===============================
   *  UPDATE SUB USER TYPE HIERARCHY
   *  =============================== */
//   updateSubUserTypeHierarchy(
//     model: SubUserTypeHierarchyRequestDTO[]
//   ): Observable<ResponseModel<any>> {
//     return this.http.put<ResponseModel<any>>(
//       `${this.baseUrl}/SubUserType/updateHierarchy`,
//       model
//     );
//   }
}
