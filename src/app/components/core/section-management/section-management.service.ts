import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';

import { SectionRequestDTO, SectionResponseDTO } from './section-management.type';

@Injectable({
  providedIn: 'root',
})
export class SectionService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /** ===============================
   *  GET ALL SECTIONS
   *  =============================== */
  getSections(): Observable<ResponseModel<SectionResponseDTO[]>> {
    return this.http.get<ResponseModel<SectionResponseDTO[]>>(
      `${this.baseUrl}/Section`
    );
  }

  /** ===============================
   *  GET SECTIONS BY FLOOR ID
   *  =============================== */
  getSectionByFloorId(
    id: string
  ): Observable<ResponseModel<SectionResponseDTO[]>> {
    return this.http.get<ResponseModel<SectionResponseDTO[]>>(
      `${this.baseUrl}/Section/GetByFloorId`,
      { params: { id } }
    );
  }

  /** ===============================
   *  ADD SECTION
   *  =============================== */
  addSection(
    model: SectionRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Section`,
      model
    );
  }

  /** ===============================
   *  UPDATE SECTION
   *  =============================== */
  updateSection(
    model: SectionRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Section`,
      model
    );
  }

  /** ===============================
   *  DELETE SECTION
   *  =============================== */
  deleteSection(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Section`,
      { params: { id } }
    );
  }

}
