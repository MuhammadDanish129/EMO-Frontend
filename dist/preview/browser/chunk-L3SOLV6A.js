import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/core/agreement-management/agreement-management.service.ts
var AgreementService = class _AgreementService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getAgreements() {
    return this.http.get(`${this.baseUrl}/Agreement`);
  }
  addAgreement(model) {
    return this.http.post(`${this.baseUrl}/Agreement`, model);
  }
  getOfficesByAgreementId(id) {
    return this.http.get(`${this.baseUrl}/Agreement/GetOfficesByAgreementId`, { params: { id } });
  }
  getContactPersons(id) {
    return this.http.get(`${this.baseUrl}/ContactPerson/GetContactPersonByAgreemenId`, { params: { id } });
  }
  getTenants(id) {
    return this.http.get(`${this.baseUrl}/Tenant/GetTenantByAgreementId`, { params: { id } });
  }
  getTenantsByBusinessId(id) {
    return this.http.get(`${this.baseUrl}/Tenant/GetTenantsByBusinessId`, { params: { id } });
  }
  updatecontactPerson(model) {
    return this.http.put(`${this.baseUrl}/ContactPerson`, model);
  }
  updateAgreement(model) {
    return this.http.put(`${this.baseUrl}/Agreement`, model);
  }
  getByBusinessId(id) {
    return this.http.get(`${this.baseUrl}/Agreement/GetByBusinessId`, { params: { id } });
  }
  deleteAgreement(id) {
    return this.http.delete(`${this.baseUrl}/Agreement`, {
      params: { id }
    });
  }
  deleteContactPerson(id) {
    return this.http.delete(`${this.baseUrl}/ContactPerson`, {
      params: { id }
    });
  }
  removeOfficeFromAgreement(payload) {
    return this.http.post(`${this.baseUrl}/Agreement/RemoveOfficeFromAgreement`, payload);
  }
  static {
    this.\u0275fac = function AgreementService_Factory(t) {
      return new (t || _AgreementService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgreementService, factory: _AgreementService.\u0275fac, providedIn: "root" });
  }
};

export {
  AgreementService
};
//# sourceMappingURL=chunk-L3SOLV6A.js.map
