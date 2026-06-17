import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/core/device-management/device-management.service.ts
var DeviceService = class _DeviceService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /* ===============================
   * GET ALL DEVICES
   * =============================== */
  getDevices() {
    return this.http.get(`${this.baseUrl}/Device`);
  }
  /* ===============================
   * GET BY BUSINESS ID
   * =============================== */
  getDeviceByBusinessId(id) {
    return this.http.get(`${this.baseUrl}/Device/GetByBusinessId`, { params: { id } });
  }
  getDeviceByOfficeId(id) {
    return this.http.get(`${this.baseUrl}/Device/GetByOfficeId`, { params: { id } });
  }
  /* ===============================
   * ADD DEVICE
   * =============================== */
  addDevice(model) {
    return this.http.post(`${this.baseUrl}/Device`, model);
  }
  /* ===============================
   * UPDATE DEVICE
   * =============================== */
  updateDevice(model) {
    return this.http.put(`${this.baseUrl}/Device`, model);
  }
  /* ===============================
   * DELETE DEVICE
   * =============================== */
  deleteDevice(id) {
    return this.http.delete(`${this.baseUrl}/Device`, { params: { id } });
  }
  static {
    this.\u0275fac = function DeviceService_Factory(t) {
      return new (t || _DeviceService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeviceService, factory: _DeviceService.\u0275fac, providedIn: "root" });
  }
};

export {
  DeviceService
};
//# sourceMappingURL=chunk-7Q3O6SXW.js.map
