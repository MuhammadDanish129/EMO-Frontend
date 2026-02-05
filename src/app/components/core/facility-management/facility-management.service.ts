import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import { FacilityRequestDTO, FacilityResponseDTO } from './facility-management.type';

@Injectable({
  providedIn: 'root',
})
export class FacilityService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getFacilities(): Observable<ResponseModel<FacilityResponseDTO[]>> {
    return this.http.get<ResponseModel<FacilityResponseDTO[]>>(
      `${this.baseUrl}/Facility`
    );
  }

  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getFacilityByBusinessId(
    id: string
  ): Observable<ResponseModel<FacilityResponseDTO[]>> {
    return this.http.get<ResponseModel<FacilityResponseDTO[]>>(
      `${this.baseUrl}/Facility/GetByBusinessId`,
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
  /** ===============================
   *  ADD SUB USER TYPE
   *  =============================== */
  addFacility(
    model: FacilityRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Facility`,
      model
    );
  }

  /** ===============================
   *  UPDATE SUB USER TYPE
   *  =============================== */
  updateFacility(
    model: FacilityRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Facility`,
      model
    );
  }

  /** ===============================
   *  DELETE SUB USER TYPE
   *  =============================== */
  deleteFacility(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Facility`,
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
