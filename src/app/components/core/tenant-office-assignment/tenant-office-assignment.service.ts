
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { TenantResponseDTO } from './tenant-office-assignment.type';
import { ResponseModel } from '../../../shared/response.model';

@Injectable({
  providedIn: 'root',
})
export class TenantService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

getTenantsByBusiness(id: string ): Observable<ResponseModel<TenantResponseDTO[]>> {
  return this.http.get<ResponseModel<TenantResponseDTO[]>>(
    `${this.baseUrl}/Tenant/GetByBusinenssId`,
    { params: { id } }

  );
}

assignTenant(payload: any): Observable<ResponseModel<any>> {
  return this.http.post<ResponseModel<any>>(
    `${this.baseUrl}/Tenant/AssignTenant`,
    payload
  );
}
}