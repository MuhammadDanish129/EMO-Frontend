import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/response.model";
import { UserTypeResponseDTO } from "./usertype.type";

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {

  baseUrl: string = environment.baseUrl;
  constructor(
    private http: HttpClient) { }
  getUserTypes(): Observable<ResponseModel<UserTypeResponseDTO[]>> {
      return this.http.get<ResponseModel<UserTypeResponseDTO[]>>(this.baseUrl + '/UserType');
  }
}
