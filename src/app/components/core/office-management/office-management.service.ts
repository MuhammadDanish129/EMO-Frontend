import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';

import { OfficeRequestDTO, OfficeResponseDTO } from './office-management.type';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /** ===============================
   *  GET ALL OFFICES
   *  =============================== */
  getOffices(): Observable<ResponseModel<OfficeResponseDTO[]>> {
    return this.http.get<ResponseModel<OfficeResponseDTO[]>>(
      `${this.baseUrl}/Office`
    );
  }

  /** ===============================
   *  GET OFFICES BY SECTION ID
   *  =============================== */
  getOfficeBySectionId(
    id: string
  ): Observable<ResponseModel<OfficeResponseDTO[]>> {
    return this.http.get<ResponseModel<OfficeResponseDTO[]>>(
      `${this.baseUrl}/Office/GetBySectionId`,
      { params: { id } }
    );
  }
   GetAvailableOfficesBySectionId(
    id: string
  ): Observable<ResponseModel<OfficeResponseDTO[]>> {
    return this.http.get<ResponseModel<OfficeResponseDTO[]>>(
      `${this.baseUrl}/Office/GetAvailableOfficesBySectionId`,
      { params: { id } }
    );
  }

  /** ===============================
   *  ADD OFFICE
   *  =============================== */
  addOffice(
    model: OfficeRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Office`,
      model
    );
  }

  /** ===============================
   *  UPDATE OFFICE
   *  =============================== */
  updateOffice(
    model: OfficeRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Office`,
      model
    );
  }

  /** ===============================
   *  DELETE OFFICE
   *  =============================== */
  deleteOffice(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Office`,
      { params: { id } }
    );
  }

}
