import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/response.model";
import { AgreementResponseDTO } from "./agreement-management.type";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";

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

  updateAgreement(model: any) {
    return this.http.put(`${this.baseUrl}/Agreement`, model);
  }
   getSensorByBusinessId(
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
}
