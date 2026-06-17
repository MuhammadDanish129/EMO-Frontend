import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/core/office-management/office-management.service.ts
var OfficeService = class _OfficeService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /** ===============================
   *  GET ALL OFFICES
   *  =============================== */
  getOffices() {
    return this.http.get(`${this.baseUrl}/Office`);
  }
  getOfficeByBusinessId(id) {
    return this.http.get(`${this.baseUrl}/Office/GetByBusinessId`, { params: { id } });
  }
  getOfficeByTenantId(id) {
    return this.http.get(`${this.baseUrl}/Agreement/GetOfficesByTenantId`, { params: { id } });
  }
  /** ===============================
   *  GET OFFICES BY SECTION ID
   *  =============================== */
  getOfficeBySectionId(id) {
    return this.http.get(`${this.baseUrl}/Office/GetBySectionId`, { params: { id } });
  }
  GetAvailableOfficesBySectionId(id) {
    return this.http.get(`${this.baseUrl}/Office/GetAvailableOfficesBySectionId`, { params: { id } });
  }
  /** ===============================
   *  ADD OFFICE
   *  =============================== */
  addOffice(model) {
    return this.http.post(`${this.baseUrl}/Office`, model);
  }
  /** ===============================
   *  UPDATE OFFICE
   *  =============================== */
  updateOffice(model) {
    return this.http.put(`${this.baseUrl}/Office`, model);
  }
  /** ===============================
   *  DELETE OFFICE
   *  =============================== */
  deleteOffice(id) {
    return this.http.delete(`${this.baseUrl}/Office`, { params: { id } });
  }
  static {
    this.\u0275fac = function OfficeService_Factory(t) {
      return new (t || _OfficeService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OfficeService, factory: _OfficeService.\u0275fac, providedIn: "root" });
  }
};

export {
  OfficeService
};
//# sourceMappingURL=chunk-OZNEKJTU.js.map
