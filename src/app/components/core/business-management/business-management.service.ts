import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ResponseModel } from "../../../shared/response.model";
import { AddBusinessAndAdminRequestDTO, BusinessRequestDTO, BusinessResponseDTO } from "./business-management.type";
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class BusinessService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getBusinesses(): Observable<ResponseModel<BusinessResponseDTO[]>> {
    return this.http.get<ResponseModel<BusinessResponseDTO[]>>(
      `${this.baseUrl}/Business`
    );
  }

  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getBusinessByUserId(
    userId: string
  ): Observable<ResponseModel<BusinessResponseDTO[]>> {
    return this.http.get<ResponseModel<BusinessResponseDTO[]>>(
      `${this.baseUrl}/Business`
    );
  }

  /** ===============================
   *  ADD SUB USER TYPE
   *  =============================== */
  addBusiness(
    model: BusinessRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Business`,
      model
    );
  }

   AddBusinessAndBusinessAdmin(
    model: AddBusinessAndAdminRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Business/AddBusinessAndBusinessAdmin`,
      model
    );
  }

  /** ===============================
   *  UPDATE SUB USER TYPE
   *  =============================== */
  updateBusiness(
    model: BusinessRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Business`,
      model
    );
  }

  /** ===============================
   *  DELETE SUB USER TYPE
   *  =============================== */
  deleteBusiness(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Business`,
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
