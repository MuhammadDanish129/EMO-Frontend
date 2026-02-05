import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import { SubUserTypeHierarchyRequestDTO, SubUserTypeRequestDTO, SubUserTypeResponseDTO } from './sub-user-type.type';

@Injectable({
  providedIn: 'root',
})
export class SubUserTypeService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getSubUserTypes(): Observable<ResponseModel<SubUserTypeResponseDTO[]>> {
    return this.http.get<ResponseModel<SubUserTypeResponseDTO[]>>(
      `${this.baseUrl}/SubUserType`
    );
  }

  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getSubUserTypesByUserId(
    userId: string
  ): Observable<ResponseModel<SubUserTypeResponseDTO[]>> {
    return this.http.get<ResponseModel<SubUserTypeResponseDTO[]>>(
      `${this.baseUrl}/SubUserType/byUserId`,
      { params: { userId } }
    );
  }
  getSubUserTypesOfBusinessAdmin(
    userId: string
  ): Observable<ResponseModel<SubUserTypeResponseDTO[]>> {
    return this.http.get<ResponseModel<SubUserTypeResponseDTO[]>>(
      `${this.baseUrl}/SubUserType/GetSubUserTypesOfBusiness`,
      { params: { userId } }
    );
  }
  /** ===============================
   *  ADD SUB USER TYPE
   *  =============================== */
  addSubUserType(
    model: SubUserTypeRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/SubUserType`,
      model
    );
  }

  /** ===============================
   *  UPDATE SUB USER TYPE
   *  =============================== */
  updateSubUserType(
    model: SubUserTypeRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/SubUserType`,
      model
    );
  }

  /** ===============================
   *  DELETE SUB USER TYPE
   *  =============================== */
  deleteSubUserType(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/SubUserType`,
      { params: { id } }
    );
  }

  /** ===============================
   *  UPDATE SUB USER TYPE HIERARCHY
   *  =============================== */
  updateSubUserTypeHierarchy(
    model: SubUserTypeHierarchyRequestDTO[]
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/SubUserType/updateHierarchy`,
      model
    );
  }
}
