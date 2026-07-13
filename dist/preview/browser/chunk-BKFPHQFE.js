import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AVLIJGNB.js";

// src/app/components/management/user/user.service.ts
var UserManagementService = class _UserManagementService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getUsers(userId) {
    return this.http.get(`${this.baseUrl}/User/GetUsers`, { params: { userId } });
  }
  addUser(request) {
    return this.http.post(`${this.baseUrl}/User`, request);
  }
  updateUser(request) {
    return this.http.put(`${this.baseUrl}/User`, request);
  }
  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/User`, { params: { id } });
  }
  getBusinessAdmins(businessId) {
    return this.http.get(`${this.baseUrl}/User/GetBusinessAdminsByBusinessId`, { params: { businessId } });
  }
  static {
    this.\u0275fac = function UserManagementService_Factory(t) {
      return new (t || _UserManagementService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserManagementService, factory: _UserManagementService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserManagementService
};
//# sourceMappingURL=chunk-BKFPHQFE.js.map
