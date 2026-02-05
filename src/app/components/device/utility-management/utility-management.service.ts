import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/response.model";

import {
  UtilityRequestDTO,
  UtilityResponseDTO
} from "./utility-management.type";

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  /* ===============================
   * GET ALL UTILITIES
   * =============================== */
  getUtilities(): Observable<ResponseModel<UtilityResponseDTO[]>> {
    return this.http.get<ResponseModel<UtilityResponseDTO[]>>(
      this.baseUrl + '/Utility'
    );
  }

  /* ===============================
   * GET BY OFFICE ID (If Needed)
   * =============================== */
  getAllUtilities(id: string): Observable<ResponseModel<UtilityResponseDTO[]>> {
    return this.http.get<ResponseModel<UtilityResponseDTO[]>>(
      this.baseUrl + '/Utility'
    );
  }

  /* ===============================
   * ADD
   * =============================== */
  addUtility(model: UtilityRequestDTO): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      this.baseUrl + '/Utility',
      model
    );
  }

  /* ===============================
   * UPDATE
   * =============================== */
  updateUtility(model: UtilityRequestDTO): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      this.baseUrl + '/Utility',
      model
    );
  }

  /* ===============================
   * DELETE
   * =============================== */
  deleteUtility(id: string): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      this.baseUrl + '/Utility',
      { params: { id } }
    );
  }

}
