import {
  BuildingManagementAddUpdateComponent
} from "./chunk-5UDVWHK5.js";
import "./chunk-FF7QN5R5.js";
import "./chunk-6SVHGHML.js";
import "./chunk-3BGFXJK3.js";
import {
  BuildingService
} from "./chunk-YPK5LAZQ.js";
import {
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import "./chunk-OWIRED5M.js";
import "./chunk-VUCKRGWV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  Router
} from "./chunk-J4QH6UQS.js";
import {
  ConfirmDialogComponent
} from "./chunk-2YM3HG7T.js";
import "./chunk-YGYCE7FQ.js";
import "./chunk-5JUZCUNR.js";
import "./chunk-LVRCF6MZ.js";
import {
  MatDialog
} from "./chunk-L4J3DKML.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
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

// src/app/components/core/building-management/building-management.component.ts
function BuildingManagementComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, " Loading Buildings... ");
    \u0275\u0275elementEnd()()();
  }
}
function BuildingManagementComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div")(3, "div", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "button", 45);
    \u0275\u0275listener("click", function BuildingManagementComponent_div_32_Template_button_click_8_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToFloor(b_r2.buildingId));
    });
    \u0275\u0275element(9, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 47);
    \u0275\u0275listener("click", function BuildingManagementComponent_div_32_Template_button_click_10_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(b_r2));
    });
    \u0275\u0275element(11, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 49);
    \u0275\u0275listener("click", function BuildingManagementComponent_div_32_Template_button_click_12_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(b_r2.buildingId));
    });
    \u0275\u0275element(13, "i", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", b_r2.buildingName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", b_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function BuildingManagementComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p", 52);
    \u0275\u0275text(2, " No Buildings Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 53);
    \u0275\u0275text(4, " Try adjusting search or add a new building. ");
    \u0275\u0275elementEnd()();
  }
}
function BuildingManagementComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, " Loading Buildings... ");
    \u0275\u0275elementEnd()();
  }
}
function BuildingManagementComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 55)(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 58)(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 59)(9, "div", 60)(10, "div", 61)(11, "button", 62);
    \u0275\u0275listener("click", function BuildingManagementComponent_tr_48_Template_button_click_11_listener() {
      const b_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToFloor(b_r5.buildingId));
    });
    \u0275\u0275element(12, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 63);
    \u0275\u0275text(14, " Manage Floors ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61)(16, "button", 64);
    \u0275\u0275listener("click", function BuildingManagementComponent_tr_48_Template_button_click_16_listener() {
      const b_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(b_r5));
    });
    \u0275\u0275element(17, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 63);
    \u0275\u0275text(19, " Edit Building ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 61)(21, "button", 65);
    \u0275\u0275listener("click", function BuildingManagementComponent_tr_48_Template_button_click_21_listener() {
      const b_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(b_r5.buildingId));
    });
    \u0275\u0275element(22, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 63);
    \u0275\u0275text(24, " Delete Building ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", b_r5.buildingName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", b_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function BuildingManagementComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66)(2, "p", 67);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 68);
    \u0275\u0275text(5, " Try adjusting search or create a new Buidlings. ");
    \u0275\u0275elementEnd()()();
  }
}
function BuildingManagementComponent_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function BuildingManagementComponent_button_56_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", p_r8 === ctx_r2.pageIndex ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8 + 1, " ");
  }
}
var BuildingManagementComponent = class _BuildingManagementComponent {
  constructor(_buildingService, _toaster, dialog, _userService, router) {
    this._buildingService = _buildingService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Buildings = [];
    this.filteredBuildings = [];
  }
  /* =============================
   * INIT
   * ============================= */
  ngOnInit() {
    return __async(this, null, function* () {
      const nav = history.state;
      console.log("breadcrumb 2", nav);
      this.fkFacility = nav.fkFacility;
      this.fkBusiness = nav.fkBusiness;
      this.currentUser = yield this._userService.user$;
      this.loadBuildings(this.fkFacility);
    });
  }
  /* =============================
   * LOAD
   * ============================= */
  loadBuildings(fkFacility) {
    this.isLoading = true;
    fkFacility = this.fkFacility;
    this._buildingService.getBuildingByFacilityId(fkFacility).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load Buildings");
          this.isLoading = false;
          return;
        }
        console.log(res.success);
        this.Buildings = res.data ?? [];
        this.filteredBuildings = [...this.Buildings];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Buildings = [];
        this.filteredBuildings = [];
        this.isLoading = false;
        this._toaster.error("Failed to load Buildings");
      }
    });
  }
  /* =============================
   * PAGINATION
   * ============================= */
  get pagedBuildings() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredBuildings.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredBuildings.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredBuildings.length);
  }
  /* =============================
   * SEARCH
   * ============================= */
  searchBuildings() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredBuildings = !term ? [...this.Buildings] : this.filteredBuildings.filter((st) => st.buildingName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* =============================
   * ADD
   * ============================= */
  addBuilding() {
    const dialogRef = this.dialog.open(BuildingManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add",
        facilityId: this.fkFacility
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadBuildings(this.fkFacility);
      }
    });
  }
  /* =============================
   * EDIT
   * ============================= */
  edit(st) {
    const dialogRef = this.dialog.open(BuildingManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "edit",
        value: st
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadBuildings(this.fkFacility);
      }
    });
  }
  /* =============================
   * DELETE
   * ============================= */
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete Building",
        message: "Deleting this building will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._buildingService.deletBuilding(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Building deleted");
            this.loadBuildings(this.fkFacility);
          } else {
            this._toaster.error(res.remarks || "Delete failed");
          }
        },
        error: () => {
          this._toaster.error("Delete failed");
        }
      });
    });
  }
  /* =============================
   * HIERARCHY
   * ============================= */
  // openHierarchy() {
  //   const dialogRef = this.dialog.open(SubUserTypeHierarchyComponent, {
  //     width: '720px',
  //     maxWidth: '90vw',
  //     disableClose: true,
  //     panelClass: 'yx-enterprise-dialog',
  //     data: this.subUserTypes
  //   });
  //   dialogRef.afterClosed().subscribe(payload => {
  //     if (!payload) return;
  //     this._subUserTypeService.updateSubUserTypeHierarchy(payload).subscribe({
  //       next: (res) => {
  //         if (res.success) {
  //           this._toaster.success('Hierarchy updated successfully');
  //           this.loadSubUserTypes(this.currentUser.userId);
  //         } else {
  //           this._toaster.error(res.remarks || 'Failed to update hierarchy');
  //         }
  //       },
  //       error: () => {
  //         this._toaster.error('Failed to update hierarchy');
  //       }
  //     });
  //   });
  // }
  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredBuildings.length) {
      this.pageIndex++;
    }
  }
  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
    }
  }
  goToPage(i) {
    this.pageIndex = i;
  }
  goToFloor(id) {
    this.router.navigate(["/core/floor-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: id
      }
    });
  }
  goToFacility(id) {
    this.router.navigate(["/core/facility-management"], {
      state: {
        fkBusiness: this.fkBusiness
      }
    });
  }
  static {
    this.\u0275fac = function BuildingManagementComponent_Factory(t) {
      return new (t || _BuildingManagementComponent)(\u0275\u0275directiveInject(BuildingService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingManagementComponent, selectors: [["app-building-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-building", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-city", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold"], ["type", "text", "placeholder", "Search Buildings..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-layer-group", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-400", "mt-1"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "transition", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "transition", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "transition", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "text-sm", "font-semibold", "text-gray-700"], [1, "text-xs", "text-gray-600", "mt-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function BuildingManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Building Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage buildings linked with selected facility. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function BuildingManagementComponent_Template_button_click_9_listener() {
          return ctx.addBuilding();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Building ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "button", 10);
        \u0275\u0275listener("click", function BuildingManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility(ctx.fkBusiness);
        });
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275element(20, "i", 15);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 16)(24, "div", 17)(25, "p", 18);
        \u0275\u0275text(26, " Total Buildings: ");
        \u0275\u0275elementStart(27, "span", 19);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function BuildingManagementComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BuildingManagementComponent_Template_input_ngModelChange_29_listener() {
          return ctx.searchBuildings();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 21);
        \u0275\u0275template(31, BuildingManagementComponent_div_31_Template, 5, 0, "div", 22)(32, BuildingManagementComponent_div_32_Template, 14, 3, "div", 23)(33, BuildingManagementComponent_div_33_Template, 5, 0, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 25)(35, "table", 26)(36, "thead", 27)(37, "tr")(38, "th", 28);
        \u0275\u0275text(39, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th", 28);
        \u0275\u0275text(41, "Building");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th", 28);
        \u0275\u0275text(43, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th", 29);
        \u0275\u0275text(45, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "tbody");
        \u0275\u0275template(47, BuildingManagementComponent_tr_47_Template, 3, 0, "tr", 30)(48, BuildingManagementComponent_tr_48_Template, 25, 4, "tr", 31)(49, BuildingManagementComponent_tr_49_Template, 6, 0, "tr", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 32)(51, "p", 33);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 34)(54, "button", 35);
        \u0275\u0275listener("click", function BuildingManagementComponent_Template_button_click_54_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(55, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, BuildingManagementComponent_button_56_Template, 2, 2, "button", 36);
        \u0275\u0275elementStart(57, "button", 35);
        \u0275\u0275listener("click", function BuildingManagementComponent_Template_button_click_57_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(58, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate1(" ", ctx.filteredBuildings.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedBuildings);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedBuildings.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedBuildings);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedBuildings.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredBuildings.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredBuildings.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MaterialModuleModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingManagementComponent, { className: "BuildingManagementComponent", filePath: "src\\app\\components\\core\\building-management\\building-management.component.ts", lineNumber: 21 });
})();
export {
  BuildingManagementComponent
};
//# sourceMappingURL=chunk-GAMCHWGH.js.map
