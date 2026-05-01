import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/response.model";
import { AgreementResponseDTO, ContactPersonDTO, RemoveOfficeFromAgreementRequestDTO } from "./agreement-management.type";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { UserResponseDTO } from "../../management/user/user.type";
import { OfficeResponseDTO } from "../office-management/office-management.type";

@Injectable({ providedIn: 'root' })
export class AgreementService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAgreements(): Observable<ResponseModel<AgreementResponseDTO[]>> {
    return this.http.get<ResponseModel<AgreementResponseDTO[]>>(
      `${this.baseUrl}/Agreement`
    );
  }

  addAgreement(model: any) {
    return this.http.post(`${this.baseUrl}/Agreement`, model);
  }


  getOfficesByAgreementId(
      id: string
    ): Observable<ResponseModel<OfficeResponseDTO[]>> {
      return this.http.get<ResponseModel<OfficeResponseDTO[]>>(
        `${this.baseUrl}/Agreement/GetOfficesByAgreementId`,
        { params: { id } }
      );
    }

  getContactPersons(id: string): Observable<ResponseModel<ContactPersonDTO[]>> {
      return this.http.get<ResponseModel<ContactPersonDTO[]>>(
        `${this.baseUrl}/ContactPerson/GetContactPersonByAgreemenId`,
        { params: { id } }
      );
    }


     getTenants(id: string): Observable<ResponseModel<UserResponseDTO[]>> {
      return this.http.get<ResponseModel<UserResponseDTO[]>>(
        `${this.baseUrl}/Tenant/GetTenantByAgreementId`,
        { params: { id } }
      );
    }


      getTenantsByBusinessId(id: string): Observable<ResponseModel<UserResponseDTO[]>> {
      return this.http.get<ResponseModel<UserResponseDTO[]>>(
        `${this.baseUrl}/Tenant/GetTenantsByBusinessId`,
        { params: { id } }
      );
    }

    updatecontactPerson(model: any) {
    return this.http.put(`${this.baseUrl}/ContactPerson`, model);
  }
  updateAgreement(model: any) {
    return this.http.put(`${this.baseUrl}/Agreement`, model);
  }
   getByBusinessId(
      id: string
    ): Observable<ResponseModel<AgreementResponseDTO[]>> {
      return this.http.get<ResponseModel<AgreementResponseDTO[]>>(
        `${this.baseUrl}/Agreement/GetByBusinessId`,
        { params: { id } }
      );
    }

  deleteAgreement(id: string) {
    return this.http.delete(`${this.baseUrl}/Agreement`, {
      params: { id }
    });
  }

   deleteContactPerson(id: string) {
    return this.http.delete(`${this.baseUrl}/ContactPerson`, {
      params: { id }
    });
  }

 removeOfficeFromAgreement(payload: RemoveOfficeFromAgreementRequestDTO) {
  return this.http.post(
    `${this.baseUrl}/Agreement/RemoveOfficeFromAgreement`,
    payload
  );
}
}
