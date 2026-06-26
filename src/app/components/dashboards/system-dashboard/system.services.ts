import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/response.model";

import {
  SuperAdminDashboardResponseDTO,
  BusinessWiseDashboardDTO
} from "./system.type";

@Injectable({
  providedIn: 'root',
})
export class SuperAdminDashboardService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  /* ===============================
   * GET SUPER ADMIN DASHBOARD
   * =============================== */
  getDashboard(): Observable<ResponseModel<SuperAdminDashboardResponseDTO>> {
    return this.http.get<ResponseModel<SuperAdminDashboardResponseDTO>>(
      this.baseUrl + '/SuperAdminDashboard'
    );
  }

  /* ===============================
   * GET BUSINESS WISE SUMMARY
   * =============================== */
  getBusinessWiseSummary(): Observable<ResponseModel<BusinessWiseDashboardDTO[]>> {
    return this.http.get<ResponseModel<BusinessWiseDashboardDTO[]>>(
      this.baseUrl + '/SuperAdminDashboard/BusinessWiseSummary'
    );
  }

}