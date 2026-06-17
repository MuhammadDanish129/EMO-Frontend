import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/core/floor-management/floor-management.service.ts
var FloorService = class _FloorService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /** ===============================
   *  GET ALL FLOORS
   *  =============================== */
  getFloors() {
    return this.http.get(`${this.baseUrl}/Floor`);
  }
  /** ===============================
   *  GET FLOORS BY BUILDING ID
   *  =============================== */
  getFloorByBuildingId(id) {
    return this.http.get(`${this.baseUrl}/Floor/GetByBuildingId`, { params: { id } });
  }
  /** ===============================
   *  ADD FLOOR
   *  =============================== */
  addFloor(model) {
    return this.http.post(`${this.baseUrl}/Floor`, model);
  }
  /** ===============================
   *  UPDATE FLOOR
   *  =============================== */
  updateFloor(model) {
    return this.http.put(`${this.baseUrl}/Floor`, model);
  }
  /** ===============================
   *  DELETE FLOOR
   *  =============================== */
  deleteFloor(id) {
    return this.http.delete(`${this.baseUrl}/Floor`, { params: { id } });
  }
  static {
    this.\u0275fac = function FloorService_Factory(t) {
      return new (t || _FloorService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FloorService, factory: _FloorService.\u0275fac, providedIn: "root" });
  }
};

export {
  FloorService
};
//# sourceMappingURL=chunk-FDGREIVO.js.map
