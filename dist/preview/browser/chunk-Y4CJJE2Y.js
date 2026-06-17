import {
  FacilityService
} from "./chunk-HC5ZLZEI.js";
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
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-LVRCF6MZ.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
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
  __async,
  __spreadValues
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/facility-management/facility-management-add-update/facility-management-add-update.component.ts
function FacilityManagementAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.facilityName, " ");
  }
}
function FacilityManagementAddUpdateComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
var FacilityManagementAddUpdateComponent = class _FacilityManagementAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, facilityService, toaster, _userService, data) {
    this.dialogRef = dialogRef;
    this.facilityService = facilityService;
    this.toaster = toaster;
    this._userService = _userService;
    this.data = data;
    this.isSaving = false;
    this.isLoadingUserTypes = false;
    this.currentUser = null;
    this.fieldErrors = {};
    this.model = {
      facilityName: "",
      fkBusiness: "",
      facilityaddress: "",
      isActive: true
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.data?.mode === "edit" && this.data.value) {
        this.model = __spreadValues({}, this.data.value);
      }
      this.currentUser = yield this._userService.user$;
      this.model.fkBusiness = this.currentUser?.fkBusiness;
    });
  }
  /* =============================
   * LOAD USER TYPES
   * ============================= */
  //   loadUserTypes(userId: string) {
  //     this.isLoadingUserTypes = true;
  // // this.userTypeService.GetByUserId(userId).subscribe({
  //     this.facilityService.GetByUserId(userId).subscribe({
  //       next: (res) => {
  //         if (res.success) {
  //           this.userTypes = res.data ?? [];
  //         } else {
  //           this.toaster.error(res.remarks || 'Failed to load user types');
  //         }
  //         this.isLoadingUserTypes = false;
  //       },
  //       error: () => {
  //         this.isLoadingUserTypes = false;
  //         this.toaster.error('Failed to load user types');
  //       }
  //     });
  //   }
  onNameChange() {
    if (this.fieldErrors.facilityName) {
      this.fieldErrors.facilityAddress = "";
    }
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.facilityName?.trim()) {
      this.fieldErrors.facilityName = "Facility Name is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    console.log(this.model);
    this.isSaving = true;
    const api$ = this.isEditMode ? this.facilityService.updateFacility(this.model) : this.facilityService.addFacility(this.model);
    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success(this.isEditMode ? "Record Updated Successfully" : "Record Added Successfully");
          setTimeout(() => this.dialogRef.close("saved"), 500);
        } else {
          this.toaster.error(res.remarks || "Operation failed");
        }
        this.isSaving = false;
      },
      error: () => {
        this.toaster.error("Something went wrong");
        this.isSaving = false;
      }
    });
  }
  static {
    this.\u0275fac = function FacilityManagementAddUpdateComponent_Factory(t) {
      return new (t || _FacilityManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FacilityService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilityManagementAddUpdateComponent, selectors: [["app-facility-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 10, consts: [[1, "w-full", "max-w-md", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-5"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-[rgb(var(--text-muted))]"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "flex", "items-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40 border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function FacilityManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function FacilityManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " Facility Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function FacilityManagementAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.facilityName, $event) || (ctx.model.facilityName = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, FacilityManagementAddUpdateComponent_p_13_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 7);
        \u0275\u0275text(16, " Facility Address ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function FacilityManagementAddUpdateComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.facilityaddress, $event) || (ctx.model.facilityaddress = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11)(19, "div")(20, "p", 12);
        \u0275\u0275text(21, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 13);
        \u0275\u0275text(23, " Inactive facilities cannot be used. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "mat-slide-toggle", 14);
        \u0275\u0275twoWayListener("ngModelChange", function FacilityManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 15)(26, "button", 16);
        \u0275\u0275listener("click", function FacilityManagementAddUpdateComponent_Template_button_click_26_listener() {
          return ctx.close();
        });
        \u0275\u0275text(27, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function FacilityManagementAddUpdateComponent_Template_button_click_28_listener() {
          return ctx.save();
        });
        \u0275\u0275template(29, FacilityManagementAddUpdateComponent_span_29_Template, 1, 0, "span", 18);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Facility" : "Add Facility", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.facilityName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.facilityName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.facilityName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.facilityaddress);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Facility" : "Save Facility", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilityManagementAddUpdateComponent, { className: "FacilityManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\facility-management\\facility-management-add-update\\facility-management-add-update.component.ts", lineNumber: 20 });
})();

// src/app/components/core/facility-management/facility-management.component.ts
function FacilityManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275element(2, "div", 37);
    \u0275\u0275elementStart(3, "p", 38);
    \u0275\u0275text(4, " Loading Facilities... ");
    \u0275\u0275elementEnd()()();
  }
}
function FacilityManagementComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div")(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44)(9, "button", 45);
    \u0275\u0275listener("click", function FacilityManagementComponent_div_27_Template_button_click_9_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToBuilding(st_r2.facilityId));
    });
    \u0275\u0275element(10, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 47);
    \u0275\u0275listener("click", function FacilityManagementComponent_div_27_Template_button_click_11_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r2));
    });
    \u0275\u0275element(12, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 49);
    \u0275\u0275listener("click", function FacilityManagementComponent_div_27_Template_button_click_13_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r2.facilityId));
    });
    \u0275\u0275element(14, "i", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r2.facilityName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", st_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function FacilityManagementComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p", 52);
    \u0275\u0275text(2, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 53);
    \u0275\u0275text(4, " Try adjusting your search or add a new facility. ");
    \u0275\u0275elementEnd()();
  }
}
function FacilityManagementComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54)(2, "div", 36);
    \u0275\u0275element(3, "div", 37);
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5, " Loading Facilities... ");
    \u0275\u0275elementEnd()()()();
  }
}
function FacilityManagementComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 55)(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 57)(4, "div", 58)(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 57)(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 61)(12, "div", 62)(13, "div", 63)(14, "button", 64);
    \u0275\u0275listener("click", function FacilityManagementComponent_tr_43_Template_button_click_14_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToBuilding(st_r5.facilityId));
    });
    \u0275\u0275element(15, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 65);
    \u0275\u0275text(17, " Go To Building ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 63)(19, "button", 66);
    \u0275\u0275listener("click", function FacilityManagementComponent_tr_43_Template_button_click_19_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r5));
    });
    \u0275\u0275element(20, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 65);
    \u0275\u0275text(22, " Edit Facility ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 63)(24, "button", 67);
    \u0275\u0275listener("click", function FacilityManagementComponent_tr_43_Template_button_click_24_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r5.facilityId));
    });
    \u0275\u0275element(25, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 65);
    \u0275\u0275text(27, " Delete Facility ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const st_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r5.facilityName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", st_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function FacilityManagementComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 68)(2, "p", 52);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 53);
    \u0275\u0275text(5, " Try adjusting search or create a new Facility. ");
    \u0275\u0275elementEnd()()();
  }
}
function FacilityManagementComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function FacilityManagementComponent_button_51_Template_button_click_0_listener() {
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
var FacilityManagementComponent = class _FacilityManagementComponent {
  constructor(_facilityService, _toaster, dialog, _userService, router) {
    this._facilityService = _facilityService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Facilities = [];
    this.filteredFacilities = [];
  }
  /* =============================
   * INIT
   * ============================= */
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this._userService.user$;
      this.loadFacilities(this.currentUser.fkFacilities);
      const nav = history.state;
      console.log("breadcrumb 1", nav);
    });
  }
  /* =============================
   * LOAD
   * ============================= */
  loadFacilities(fkBusiness) {
    this.isLoading = true;
    fkBusiness = this.currentUser.fkBusiness;
    this._facilityService.getFacilityByBusinessId(fkBusiness).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load facilities");
          this.isLoading = false;
          return;
        }
        console.log(res.success);
        this.Facilities = res.data ?? [];
        this.filteredFacilities = [...this.Facilities];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Facilities = [];
        this.filteredFacilities = [];
        this.isLoading = false;
        this._toaster.error("Failed to load facilities");
      }
    });
  }
  /* =============================
   * PAGINATION
   * ============================= */
  get pagedFacilities() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredFacilities.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredFacilities.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredFacilities.length);
  }
  /* =============================
   * SEARCH
   * ============================= */
  searchFacilities() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredFacilities = !term ? [...this.Facilities] : this.filteredFacilities.filter((st) => st.facilityName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* =============================
   * ADD
   * ============================= */
  addFacility() {
    const dialogRef = this.dialog.open(FacilityManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadFacilities(this.currentUser.fkFacilities);
      }
    });
  }
  /* =============================
   * EDIT
   * ============================= */
  edit(st) {
    const dialogRef = this.dialog.open(FacilityManagementAddUpdateComponent, {
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
        this.loadFacilities(this.currentUser.fkFacilities);
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
        title: "Delete Facility",
        message: "Deleting this Facility will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._facilityService.deleteFacility(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Facility deleted");
            this.loadFacilities(this.currentUser.fkBusiness);
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
    if ((this.pageIndex + 1) * this.pageSize < this.filteredFacilities.length) {
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
  goToBuilding(id) {
    this.router.navigate(["/core/building-management"], {
      state: {
        fkBusiness: this.currentUser.fkBusiness,
        fkFacility: id
      }
    });
  }
  static {
    this.\u0275fac = function FacilityManagementComponent_Factory(t) {
      return new (t || _FacilityManagementComponent)(\u0275\u0275directiveInject(FacilityService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilityManagementComponent, selectors: [["app-facility-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-building", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search Facilities..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "text-xs", "text-gray-500"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-building", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3"], [1, "flex", "flex-col"], [1, "font-semibold", "text-indigo-600"], [1, "text-xs", "text-[rgb(var(--primary))]"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function FacilityManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Facility Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage Facilities linked with their respective Business. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function FacilityManagementComponent_Template_button_click_9_listener() {
          return ctx.addFacility();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Facility ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "span", 10);
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "p", 15);
        \u0275\u0275text(21, " Total Facilities: ");
        \u0275\u0275elementStart(22, "span", 16);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function FacilityManagementComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function FacilityManagementComponent_Template_input_ngModelChange_24_listener() {
          return ctx.searchFacilities();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 18);
        \u0275\u0275template(26, FacilityManagementComponent_div_26_Template, 5, 0, "div", 19)(27, FacilityManagementComponent_div_27_Template, 15, 3, "div", 20)(28, FacilityManagementComponent_div_28_Template, 5, 0, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 22)(30, "table", 23)(31, "thead", 24)(32, "tr")(33, "th", 25);
        \u0275\u0275text(34, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th", 25);
        \u0275\u0275text(36, "Facilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 25);
        \u0275\u0275text(38, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 26);
        \u0275\u0275text(40, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "tbody", 27);
        \u0275\u0275template(42, FacilityManagementComponent_tr_42_Template, 6, 0, "tr", 28)(43, FacilityManagementComponent_tr_43_Template, 28, 4, "tr", 29)(44, FacilityManagementComponent_tr_44_Template, 6, 0, "tr", 28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 30)(46, "p", 31);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 32)(49, "button", 33);
        \u0275\u0275listener("click", function FacilityManagementComponent_Template_button_click_49_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(50, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, FacilityManagementComponent_button_51_Template, 2, 2, "button", 34);
        \u0275\u0275elementStart(52, "button", 33);
        \u0275\u0275listener("click", function FacilityManagementComponent_Template_button_click_52_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(53, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate1(" ", ctx.filteredFacilities.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedFacilities);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedFacilities.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedFacilities);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedFacilities.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredFacilities.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredFacilities.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MaterialModuleModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilityManagementComponent, { className: "FacilityManagementComponent", filePath: "src\\app\\components\\core\\facility-management\\facility-management.component.ts", lineNumber: 22 });
})();
export {
  FacilityManagementComponent
};
//# sourceMappingURL=chunk-Y4CJJE2Y.js.map
