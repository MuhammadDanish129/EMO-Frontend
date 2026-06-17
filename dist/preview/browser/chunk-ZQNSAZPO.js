import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/management/usertype/usertype.service.ts
var UserTypeService = class _UserTypeService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getUserTypes() {
    return this.http.get(this.baseUrl + "/UserType");
  }
  addUserType(model) {
    return this.http.post(this.baseUrl + "/UserType", model);
  }
  updateUserType(model) {
    return this.http.put(this.baseUrl + "/UserType", model);
  }
  deleteUserType(id) {
    return this.http.delete(this.baseUrl + "/UserType/", { params: { id } });
  }
  updateUserTypeHierarchy(model) {
    return this.http.put(this.baseUrl + "/UserType/updateHierarchy", model);
  }
  GetByUserId(id) {
    return this.http.get(this.baseUrl + "/UserType/GetByUserId", { params: { id } });
  }
  static {
    this.\u0275fac = function UserTypeService_Factory(t) {
      return new (t || _UserTypeService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserTypeService, factory: _UserTypeService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserTypeService
};
//# sourceMappingURL=chunk-ZQNSAZPO.js.map
