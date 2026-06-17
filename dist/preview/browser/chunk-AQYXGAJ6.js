import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/management/sub-user-type/sub-user-type.service.ts
var SubUserTypeService = class _SubUserTypeService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getSubUserTypes() {
    return this.http.get(`${this.baseUrl}/SubUserType`);
  }
  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getSubUserTypesByUserId(userId) {
    return this.http.get(`${this.baseUrl}/SubUserType/byUserId`, { params: { userId } });
  }
  getActiveSubUserTypesByUserId(userId) {
    return this.http.get(`${this.baseUrl}/SubUserType/GetActiveSubUserTypesByUserId`, { params: { userId } });
  }
  getSubUserTypesOfBusinessAdmin(userId) {
    return this.http.get(`${this.baseUrl}/SubUserType/GetSubUserTypesOfBusiness`, { params: { userId } });
  }
  /** ===============================
   *  ADD SUB USER TYPE
   *  =============================== */
  addSubUserType(model) {
    return this.http.post(`${this.baseUrl}/SubUserType`, model);
  }
  /** ===============================
   *  UPDATE SUB USER TYPE
   *  =============================== */
  updateSubUserType(model) {
    return this.http.put(`${this.baseUrl}/SubUserType`, model);
  }
  /** ===============================
   *  DELETE SUB USER TYPE
   *  =============================== */
  deleteSubUserType(id) {
    return this.http.delete(`${this.baseUrl}/SubUserType`, { params: { id } });
  }
  /** ===============================
   *  UPDATE SUB USER TYPE HIERARCHY
   *  =============================== */
  updateSubUserTypeHierarchy(model) {
    return this.http.put(`${this.baseUrl}/SubUserType/updateHierarchy`, model);
  }
  static {
    this.\u0275fac = function SubUserTypeService_Factory(t) {
      return new (t || _SubUserTypeService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubUserTypeService, factory: _SubUserTypeService.\u0275fac, providedIn: "root" });
  }
};

export {
  SubUserTypeService
};
//# sourceMappingURL=chunk-AQYXGAJ6.js.map
