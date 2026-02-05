import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/response.model";
import { UserTypeHierarchyRequestDTO, UserTypeRequestDTO, UserTypeResponseDTO } from "./usertype.type";

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {

  baseUrl: string = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }
  getUserTypes(): Observable<ResponseModel<UserTypeResponseDTO[]>> {
    return this.http.get<ResponseModel<UserTypeResponseDTO[]>>(this.baseUrl + '/UserType');
  }
  addUserType(model: UserTypeRequestDTO): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(this.baseUrl + '/UserType', model);
  }
  updateUserType(model: UserTypeRequestDTO): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(this.baseUrl + '/UserType', model);
  }
  deleteUserType(id: string): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(this.baseUrl + '/UserType/', { params: { id } });
  }
  updateUserTypeHierarchy(model: UserTypeHierarchyRequestDTO[]): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(this.baseUrl + '/UserType/updateHierarchy', model);
  }
   GetByUserId(id: string): Observable<ResponseModel<UserTypeResponseDTO[]>> {
    return this.http.get<ResponseModel<UserTypeResponseDTO[]>>(this.baseUrl + '/UserType/GetByUserId', {params:{id}});
  }
}
