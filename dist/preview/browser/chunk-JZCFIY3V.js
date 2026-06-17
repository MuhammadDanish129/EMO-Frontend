import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";

// src/app/components/core/section-management/section-management.service.ts
var SectionService = class _SectionService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /** ===============================
   *  GET ALL SECTIONS
   *  =============================== */
  getSections() {
    return this.http.get(`${this.baseUrl}/Section`);
  }
  /** ===============================
   *  GET SECTIONS BY FLOOR ID
   *  =============================== */
  getSectionByFloorId(id) {
    return this.http.get(`${this.baseUrl}/Section/GetByFloorId`, { params: { id } });
  }
  /** ===============================
   *  ADD SECTION
   *  =============================== */
  addSection(model) {
    return this.http.post(`${this.baseUrl}/Section`, model);
  }
  /** ===============================
   *  UPDATE SECTION
   *  =============================== */
  updateSection(model) {
    return this.http.put(`${this.baseUrl}/Section`, model);
  }
  /** ===============================
   *  DELETE SECTION
   *  =============================== */
  deleteSection(id) {
    return this.http.delete(`${this.baseUrl}/Section`, { params: { id } });
  }
  static {
    this.\u0275fac = function SectionService_Factory(t) {
      return new (t || _SectionService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SectionService, factory: _SectionService.\u0275fac, providedIn: "root" });
  }
};

export {
  SectionService
};
//# sourceMappingURL=chunk-JZCFIY3V.js.map
