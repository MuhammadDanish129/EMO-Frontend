import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/core/facility-management/facility-management.service.ts
var FacilityService = class _FacilityService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getFacilities() {
    return this.http.get(`${this.baseUrl}/Facility`);
  }
  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getFacilityByBusinessId(id) {
    return this.http.get(`${this.baseUrl}/Facility/GetByBusinessId`, { params: { id } });
  }
  //   getSubUserTypesOfBusinessAdmin(
  //     userId: string
  //   ): Observable<ResponseModel<FacilityResponseDTO[]>> {
  //     return this.http.get<ResponseModel<FacilityResponseDTO[]>>(
  //       `${this.baseUrl}/Facility/GetSubUserTypesOfBusiness`,
  //       { params: { userId } }
  //     );
  //   }
  /** ===============================
   *  ADD SUB USER TYPE
   *  =============================== */
  addFacility(model) {
    return this.http.post(`${this.baseUrl}/Facility`, model);
  }
  /** ===============================
   *  UPDATE SUB USER TYPE
   *  =============================== */
  updateFacility(model) {
    return this.http.put(`${this.baseUrl}/Facility`, model);
  }
  /** ===============================
   *  DELETE SUB USER TYPE
   *  =============================== */
  deleteFacility(id) {
    return this.http.delete(`${this.baseUrl}/Facility`, { params: { id } });
  }
  static {
    this.\u0275fac = function FacilityService_Factory(t) {
      return new (t || _FacilityService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FacilityService, factory: _FacilityService.\u0275fac, providedIn: "root" });
  }
};

export {
  FacilityService
};
//# sourceMappingURL=chunk-HC5ZLZEI.js.map
