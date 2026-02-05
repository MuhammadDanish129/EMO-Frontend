import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponseModel } from '../../shared/response.model';
import {
  GenderRequestDTO,
  GenderResponseDTO
} from './management.type';

@Injectable({
  providedIn: 'root',
})
export class ManagementService {

  private baseUrl = environment.baseUrl + '/Gender';

  constructor(private http: HttpClient) {}

  // ================================
  // GET ALL
  // ================================
  getAll(): Observable<ResponseModel<GenderResponseDTO[]>> {
    return this.http.get<ResponseModel<GenderResponseDTO[]>>(
      this.baseUrl
    );
  }

  // ================================
  // GET BY ID
  // ================================
  getById(id: string): Observable<ResponseModel<GenderResponseDTO>> {
    return this.http.get<ResponseModel<GenderResponseDTO>>(
      `${this.baseUrl}/GetById/`,{params:{id}}
    );
  }

  // ================================
  // ADD
  // ================================
  add(request: GenderRequestDTO): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      this.baseUrl,
      request
    );
  }

  // ================================
  // UPDATE
  // ================================
  update(request: GenderRequestDTO): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}`,
      request
    );
  }

  // ================================
  // DELETE
  // ================================
  delete(id: string): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/`,{params: {id}}
    );
  }
}
