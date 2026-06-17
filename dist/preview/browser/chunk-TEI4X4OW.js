import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/management/management.service.ts
var ManagementService = class _ManagementService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl + "/Gender";
  }
  // ================================
  // GET ALL
  // ================================
  getAll() {
    return this.http.get(this.baseUrl);
  }
  // ================================
  // GET BY ID
  // ================================
  getById(id) {
    return this.http.get(`${this.baseUrl}/GetById/`, { params: { id } });
  }
  // ================================
  // ADD
  // ================================
  add(request) {
    return this.http.post(this.baseUrl, request);
  }
  // ================================
  // UPDATE
  // ================================
  update(request) {
    return this.http.put(`${this.baseUrl}`, request);
  }
  // ================================
  // DELETE
  // ================================
  delete(id) {
    return this.http.delete(`${this.baseUrl}/`, { params: { id } });
  }
  static {
    this.\u0275fac = function ManagementService_Factory(t) {
      return new (t || _ManagementService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ManagementService, factory: _ManagementService.\u0275fac, providedIn: "root" });
  }
};

export {
  ManagementService
};
//# sourceMappingURL=chunk-TEI4X4OW.js.map
