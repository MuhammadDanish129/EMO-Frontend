import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/core/building-management/building-management.service.ts
var BuildingService = class _BuildingService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getFacilities() {
    return this.http.get(`${this.baseUrl}/Building`);
  }
  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getBuildingByFacilityId(id) {
    return this.http.get(`${this.baseUrl}/Building/GetByFacilityId`, { params: { id } });
  }
  //   getSubUserTypesOfBusinessAdmin(
  //     userId: string
  //   ): Observable<ResponseModel<FacilityResponseDTO[]>> {
  //     return this.http.get<ResponseModel<FacilityResponseDTO[]>>(
  //       `${this.baseUrl}/Facility/GetSubUserTypesOfBusiness`,
  //       { params: { userId } }
  //     );
  //   }
  addBuilding(model) {
    return this.http.post(`${this.baseUrl}/Building`, model);
  }
  updateBuilding(model) {
    return this.http.put(`${this.baseUrl}/Building`, model);
  }
  deletBuilding(id) {
    return this.http.delete(`${this.baseUrl}/Building`, { params: { id } });
  }
  static {
    this.\u0275fac = function BuildingService_Factory(t) {
      return new (t || _BuildingService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuildingService, factory: _BuildingService.\u0275fac, providedIn: "root" });
  }
};

export {
  BuildingService
};
//# sourceMappingURL=chunk-YPK5LAZQ.js.map
