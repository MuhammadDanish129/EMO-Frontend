import {
  FloorService
} from "./chunk-FDGREIVO.js";
import {
  SectionService
} from "./chunk-JZCFIY3V.js";
import {
  OfficeService
} from "./chunk-OZNEKJTU.js";
import {
  FacilityService
} from "./chunk-HC5ZLZEI.js";
import {
  BuildingService
} from "./chunk-YPK5LAZQ.js";
import {
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import "./chunk-OWIRED5M.js";
import {
  YxSelectComponent
} from "./chunk-VUCKRGWV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  Router
} from "./chunk-J4QH6UQS.js";
import "./chunk-YGYCE7FQ.js";
import "./chunk-5JUZCUNR.js";
import {
  MatSlideToggleModule
} from "./chunk-LVRCF6MZ.js";
import "./chunk-L4J3DKML.js";
import {
  ToastrService
} from "./chunk-5USDJHRC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3FUH7QM2.js";
import "./chunk-LJGINEDX.js";
import "./chunk-6U6LEG24.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R5AMMNLH.js";
import {
  __async
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/tenant-office-assignment/tenant-office-assignment.component.ts
var _c0 = (a0, a1) => ({ "border-[rgb(var(--light))]": a0, "border-gray-200": a1 });
function TenantOfficeAssignmentComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToAssignTenant());
    });
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, " Assign Tenant ");
    \u0275\u0275elementEnd();
  }
}
function TenantOfficeAssignmentComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementStart(3, "p", 40);
    \u0275\u0275text(4, " Loading Offices... ");
    \u0275\u0275elementEnd()()();
  }
}
function TenantOfficeAssignmentComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "input", 44);
    \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_div_25_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TenantOfficeAssignmentComponent_div_25_Template_input_change_3_listener() {
      const o_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleOfficeSelection(o_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 47)(9, "button", 48);
    \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_div_25_Template_button_click_9_listener($event) {
      const o_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.assignTenantForOffice(o_r4));
    });
    \u0275\u0275element(10, "i", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-[rgb(var(--primary-100))]", ctx_r1.isOfficeSelected(o_r4.officeId))("text-[rgb(var(--gray-900))]", ctx_r1.isOfficeSelected(o_r4.officeId));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isOfficeSelected(o_r4.officeId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r4.officeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", o_r4.isOcuppied ? "bg-danger/10 text-danger" : "bg-success/10 text-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r4.isOcuppied ? "Occupied" : "Available", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx_r1.isOfficeSelected(o_r4.officeId), !ctx_r1.isOfficeSelected(o_r4.officeId)));
  }
}
function TenantOfficeAssignmentComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "p", 51);
    \u0275\u0275text(2, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, " Try adjusting your search or filters. ");
    \u0275\u0275elementEnd()();
  }
}
function TenantOfficeAssignmentComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53)(2, "div", 38);
    \u0275\u0275element(3, "div", 39);
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5, " Loading Offices... ");
    \u0275\u0275elementEnd()()()();
  }
}
function TenantOfficeAssignmentComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54);
    \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_tr_41_Template_tr_click_0_listener() {
      const o_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectionEnabled && ctx_r1.toggleOfficeSelection(o_r6));
    });
    \u0275\u0275elementStart(1, "td", 55)(2, "div", 56)(3, "input", 57);
    \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_tr_41_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TenantOfficeAssignmentComponent_tr_41_Template_input_change_3_listener() {
      const o_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleOfficeSelection(o_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td", 58)(7, "div", 59)(8, "span", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 58)(11, "span", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 26)(14, "div", 62)(15, "button", 63);
    \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_tr_41_Template_button_click_15_listener($event) {
      const o_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.assignTenantForOffice(o_r6));
    });
    \u0275\u0275element(16, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 64);
    \u0275\u0275text(18, " Assign Tenant ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-[rgb(var(--primary-100))]", ctx_r1.isOfficeSelected(o_r6.officeId))("text-[rgb(var(--gray-900))]", ctx_r1.isOfficeSelected(o_r6.officeId));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isOfficeSelected(o_r6.officeId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pageIndex * ctx_r1.pageSize + i_r7 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", o_r6.officeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", o_r6.isOcuppied ? "bg-danger/10 text-danger" : "bg-success/10 text-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r6.isOcuppied ? "Occupied" : "Available", " ");
  }
}
function TenantOfficeAssignmentComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 65)(2, "p", 51);
    \u0275\u0275text(3, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 52);
    \u0275\u0275text(5, " Try adjusting search or create a new Offices ");
    \u0275\u0275elementEnd()()();
  }
}
function TenantOfficeAssignmentComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_button_49_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", p_r9 === ctx_r1.pageIndex ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9 + 1, " ");
  }
}
var TenantOfficeAssignmentComponent = class _TenantOfficeAssignmentComponent {
  constructor(facilityService, buildingService, floorService, sectionService, officeService, router, userService, toaster) {
    this.facilityService = facilityService;
    this.buildingService = buildingService;
    this.floorService = floorService;
    this.sectionService = sectionService;
    this.officeService = officeService;
    this.router = router;
    this.userService = userService;
    this.toaster = toaster;
    this.facilities = [];
    this.buildings = [];
    this.floors = [];
    this.sections = [];
    this.offices = [];
    this.filteredOffices = [];
    this.selectedOfficeIds = [];
    this.selectedFacilityId = "";
    this.selectedBuildingId = "";
    this.selectedFloorId = "";
    this.selectedSectionId = "";
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.selectionEnabled = true;
  }
  /* ================= INIT ================= */
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      this.loadFacilities();
    });
  }
  /* ================= LOAD ================= */
  loadFacilities() {
    this.isLoading = true;
    this.facilityService.getFacilities().subscribe({
      next: (res) => {
        if (res.success === false) {
          this.toaster.error(res.remarks || "Failed to load facilities");
          this.isLoading = false;
          return;
        }
        this.facilities = res.data ?? [];
        this.isLoading = false;
      },
      error: () => {
        this.facilities = [];
        this.isLoading = false;
        this.toaster.error("Failed to load facilities");
      }
    });
  }
  /* ================= HIERARCHY ================= */
  onFacilityChange() {
    this.resetBelow("facility");
    if (!this.selectedFacilityId)
      return;
    this.buildingService.getBuildingByFacilityId(this.selectedFacilityId).subscribe((res) => this.buildings = res.data || []);
  }
  onBuildingChange() {
    this.resetBelow("building");
    if (!this.selectedBuildingId)
      return;
    this.floorService.getFloorByBuildingId(this.selectedBuildingId).subscribe((res) => this.floors = res.data || []);
  }
  onFloorChange() {
    this.resetBelow("floor");
    if (!this.selectedFloorId)
      return;
    this.sectionService.getSectionByFloorId(this.selectedFloorId).subscribe((res) => this.sections = res.data || []);
  }
  onSectionChange() {
    if (!this.selectedSectionId)
      return;
    this.isLoading = true;
    this.officeService.GetAvailableOfficesBySectionId(this.selectedSectionId).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.toaster.error(res.remarks || "Failed to load offices");
          this.isLoading = false;
          return;
        }
        this.offices = res.data ?? [];
        this.filteredOffices = [...this.offices];
        this.pageIndex = 0;
        this.selectedOfficeIds = [];
        this.isLoading = false;
      },
      error: () => {
        this.offices = [];
        this.filteredOffices = [];
        this.isLoading = false;
        this.toaster.error("Failed to load offices");
      }
    });
  }
  /* ================= SEARCH ================= */
  searchOffices() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredOffices = !term ? [...this.offices] : this.offices.filter((o) => o.officeName?.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= PAGINATION ================= */
  get pagedOffices() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredOffices.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredOffices.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredOffices.length);
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredOffices.length) {
      this.pageIndex++;
    }
  }
  prevPage() {
    if (this.pageIndex > 0)
      this.pageIndex--;
  }
  goToPage(i) {
    this.pageIndex = i;
  }
  /* ================= SELECTION ================= */
  toggleOfficeSelection(office) {
    const exists = this.selectedOfficeIds.includes(office.officeId);
    if (exists) {
      this.selectedOfficeIds = this.selectedOfficeIds.filter((x) => x !== office.officeId);
    } else {
      this.selectedOfficeIds = [...this.selectedOfficeIds, office.officeId];
    }
  }
  isOfficeSelected(id) {
    return this.selectedOfficeIds.includes(id);
  }
  get canAssignTenant() {
    return this.selectedOfficeIds.length > 0;
  }
  /* ================= NAVIGATION ================= */
  goToAssignTenant() {
    if (!this.canAssignTenant)
      return;
    this.router.navigate(["/core/assign-tenant"], { state: { officeIds: this.selectedOfficeIds } });
  }
  assignTenantForOffice(office) {
    this.selectedOfficeIds = [office.officeId];
    this.router.navigate(["/core/assign-tenant"], { state: { officeIds: this.selectedOfficeIds } });
  }
  /* ================= HELPERS ================= */
  resetBelow(level) {
    if (level === "facility") {
      this.buildings = [];
      this.floors = [];
      this.sections = [];
      this.clearOffices();
    }
    if (level === "building") {
      this.floors = [];
      this.sections = [];
      this.clearOffices();
    }
    if (level === "floor") {
      this.sections = [];
      this.clearOffices();
    }
  }
  clearOffices() {
    this.offices = [];
    this.filteredOffices = [];
    this.selectedOfficeIds = [];
    this.pageIndex = 0;
  }
  static {
    this.\u0275fac = function TenantOfficeAssignmentComponent_Factory(t) {
      return new (t || _TenantOfficeAssignmentComponent)(\u0275\u0275directiveInject(FacilityService), \u0275\u0275directiveInject(BuildingService), \u0275\u0275directiveInject(FloorService), \u0275\u0275directiveInject(SectionService), \u0275\u0275directiveInject(OfficeService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantOfficeAssignmentComponent, selectors: [["app-tenant-office-assignment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 30, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], ["class", "flex items-center justify-center gap-2 rounded-lg bg-white/95 px-4 py-2 text-sm font-semibold text-[rgb(var(--primary))]", 3, "click", 4, "ngIf"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "p-5", "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-6"], ["labelKey", "facilityName", "valueKey", "facilityId", "placeholder", "Facility", 3, "valueChange", "items", "enableSearch", "value"], ["labelKey", "buildingName", "valueKey", "buildingId", "placeholder", "Building", 3, "valueChange", "items", "enableSearch", "value", "disabled"], ["labelKey", "floorName", "valueKey", "floorId", "placeholder", "Floor", 3, "valueChange", "items", "enableSearch", "value", "disabled"], ["labelKey", "sectionName", "valueKey", "sectionId", "placeholder", "Section", 3, "valueChange", "items", "enableSearch", "value", "disabled"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6", "overflow-hidden"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["placeholder", "Search Offices...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 3, "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 3, "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", 1, "form-check-input", "w-5", "h-5", "accent-green-600", 3, "click", "change", "checked"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", "w-max", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "pt-3", "border-t", "border-[rgb(var(--primary-200))]", 3, "ngClass"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-user-plus", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]", 3, "click"], [1, "px-4", "py-3", "font-medium"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", 1, "form-check-input", "me-1", "font-semibold", 3, "click", "change", "checked"], [1, "px-4", "py-3"], [1, "flex", "flex-col"], [1, "font-semibold", "text-indigo-600"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["colspan", "4", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function TenantOfficeAssignmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Tenant Office Assignment ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage Tenant Office linked with their respective Business. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275template(9, TenantOfficeAssignmentComponent_button_9_Template, 3, 0, "button", 6);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "yx-select", 9);
        \u0275\u0275twoWayListener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedFacilityId, $event) || (ctx.selectedFacilityId = $event);
          return $event;
        });
        \u0275\u0275listener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_12_listener() {
          return ctx.onFacilityChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "yx-select", 10);
        \u0275\u0275twoWayListener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedBuildingId, $event) || (ctx.selectedBuildingId = $event);
          return $event;
        });
        \u0275\u0275listener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_13_listener() {
          return ctx.onBuildingChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "yx-select", 11);
        \u0275\u0275twoWayListener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedFloorId, $event) || (ctx.selectedFloorId = $event);
          return $event;
        });
        \u0275\u0275listener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_14_listener() {
          return ctx.onFloorChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "yx-select", 12);
        \u0275\u0275twoWayListener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedSectionId, $event) || (ctx.selectedSectionId = $event);
          return $event;
        });
        \u0275\u0275listener("valueChange", function TenantOfficeAssignmentComponent_Template_yx_select_valueChange_15_listener() {
          return ctx.onSectionChange();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "p", 15);
        \u0275\u0275text(19, " Total Offices: ");
        \u0275\u0275elementStart(20, "span", 16);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function TenantOfficeAssignmentComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function TenantOfficeAssignmentComponent_Template_input_ngModelChange_22_listener() {
          return ctx.searchOffices();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 18);
        \u0275\u0275template(24, TenantOfficeAssignmentComponent_div_24_Template, 5, 0, "div", 19)(25, TenantOfficeAssignmentComponent_div_25_Template, 11, 12, "div", 20)(26, TenantOfficeAssignmentComponent_div_26_Template, 5, 0, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 22)(28, "table", 23)(29, "thead", 24)(30, "tr")(31, "th", 25);
        \u0275\u0275text(32, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 25);
        \u0275\u0275text(34, "Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th", 25);
        \u0275\u0275text(36, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 26);
        \u0275\u0275text(38, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody", 27);
        \u0275\u0275template(40, TenantOfficeAssignmentComponent_tr_40_Template, 6, 0, "tr", 28)(41, TenantOfficeAssignmentComponent_tr_41_Template, 19, 9, "tr", 29)(42, TenantOfficeAssignmentComponent_tr_42_Template, 6, 0, "tr", 28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 30)(44, "p", 31);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 32)(47, "button", 33);
        \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_Template_button_click_47_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(48, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, TenantOfficeAssignmentComponent_button_49_Template, 2, 2, "button", 34);
        \u0275\u0275elementStart(50, "button", 33);
        \u0275\u0275listener("click", function TenantOfficeAssignmentComponent_Template_button_click_50_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(51, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.canAssignTenant);
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.facilities)("enableSearch", true);
        \u0275\u0275twoWayProperty("value", ctx.selectedFacilityId);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.buildings)("enableSearch", true);
        \u0275\u0275twoWayProperty("value", ctx.selectedBuildingId);
        \u0275\u0275property("disabled", !ctx.selectedFacilityId);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.floors)("enableSearch", true);
        \u0275\u0275twoWayProperty("value", ctx.selectedFloorId);
        \u0275\u0275property("disabled", !ctx.selectedBuildingId);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.sections)("enableSearch", true);
        \u0275\u0275twoWayProperty("value", ctx.selectedSectionId);
        \u0275\u0275property("disabled", !ctx.selectedFloorId);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.filteredOffices.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedOffices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedOffices.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedOffices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedOffices.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredOffices.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredOffices.length);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatSlideToggleModule,
      MaterialModuleModule,
      YxSelectComponent
    ], styles: ["\n\n/*# sourceMappingURL=tenant-office-assignment.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantOfficeAssignmentComponent, { className: "TenantOfficeAssignmentComponent", filePath: "src\\app\\components\\core\\tenant-office-assignment\\tenant-office-assignment.component.ts", lineNumber: 32 });
})();
export {
  TenantOfficeAssignmentComponent
};
//# sourceMappingURL=chunk-LEA3P4RA.js.map
