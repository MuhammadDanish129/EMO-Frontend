import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseModel } from '../../../shared/response.model';
import { FloorRequestDTO, FloorResponseDTO } from './floor-management.type';

@Injectable({
  providedIn: 'root',
})
export class FloorService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /** ===============================
   *  GET ALL FLOORS
   *  =============================== */
  getFloors(): Observable<ResponseModel<FloorResponseDTO[]>> {
    return this.http.get<ResponseModel<FloorResponseDTO[]>>(
      `${this.baseUrl}/Floor`
    );
  }

  /** ===============================
   *  GET FLOORS BY BUILDING ID
   *  =============================== */
  getFloorByBuildingId(
    id: string
  ): Observable<ResponseModel<FloorResponseDTO[]>> {
    return this.http.get<ResponseModel<FloorResponseDTO[]>>(
      `${this.baseUrl}/Floor/GetByBuildingId`,
      { params: { id } }
    );
  }

  /** ===============================
   *  ADD FLOOR
   *  =============================== */
  addFloor(
    model: FloorRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${this.baseUrl}/Floor`,
      model
    );
  }

  /** ===============================
   *  UPDATE FLOOR
   *  =============================== */
  updateFloor(
    model: FloorRequestDTO
  ): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(
      `${this.baseUrl}/Floor`,
      model
    );
  }

  /** ===============================
   *  DELETE FLOOR
   *  =============================== */
  deleteFloor(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/Floor`,
      { params: { id } }
    );
  }
}
