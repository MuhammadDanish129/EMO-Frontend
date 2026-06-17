import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/device/utility-management/utility-management.service.ts
var UtilityService = class _UtilityService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /* ===============================
   * GET ALL UTILITIES
   * =============================== */
  getUtilities() {
    return this.http.get(this.baseUrl + "/Utility");
  }
  /* ===============================
   * GET BY OFFICE ID (If Needed)
   * =============================== */
  getAllUtilities(id) {
    return this.http.get(this.baseUrl + "/Utility");
  }
  /* ===============================
   * ADD
   * =============================== */
  addUtility(model) {
    return this.http.post(this.baseUrl + "/Utility", model);
  }
  /* ===============================
   * UPDATE
   * =============================== */
  updateUtility(model) {
    return this.http.put(this.baseUrl + "/Utility", model);
  }
  /* ===============================
   * DELETE
   * =============================== */
  deleteUtility(id) {
    return this.http.delete(this.baseUrl + "/Utility", { params: { id } });
  }
  static {
    this.\u0275fac = function UtilityService_Factory(t) {
      return new (t || _UtilityService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilityService, factory: _UtilityService.\u0275fac, providedIn: "root" });
  }
};

export {
  UtilityService
};
//# sourceMappingURL=chunk-ICNXWK7H.js.map
