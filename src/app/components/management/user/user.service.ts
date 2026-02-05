import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/response.model";
import { UserRequestDTO, UserResponseDTO } from "./user.type";

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {


  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getUsers(userId: string): Observable<ResponseModel<UserResponseDTO[]>> {
    return this.http.get<ResponseModel<UserResponseDTO[]>>(
      `${this.baseUrl}/User/GetUsers`, {params:{userId}}
    );
  }
  addUser(request: UserRequestDTO): Observable<ResponseModel<any>>{
    return this.http.post<ResponseModel<any>>(`${this.baseUrl}/User`, request);
  }
  updateUser(request: UserRequestDTO): Observable<ResponseModel<any>>{
    return this.http.put<ResponseModel<any>>(`${this.baseUrl}/User`, request);
  }
    
  deleteUser(
    id: string
  ): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(
      `${this.baseUrl}/User`,
      { params: { id } }
    );
  }
}
