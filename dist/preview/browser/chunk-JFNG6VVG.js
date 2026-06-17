import {
  SharedModule
} from "./chunk-FF7QN5R5.js";
import "./chunk-6SVHGHML.js";
import "./chunk-3BGFXJK3.js";
import {
  FloorService
} from "./chunk-FDGREIVO.js";
import {
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import "./chunk-OWIRED5M.js";
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
  MatSlideToggle
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
  NgModel,
  NumberValueAccessor
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

// src/app/components/core/floor-management/floor-management-add-update/floor-management-add-update.component.ts
function FloorManagementAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.floorName, " ");
  }
}
function FloorManagementAddUpdateComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.floorNo, " ");
  }
}
function FloorManagementAddUpdateComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
var FloorManagementAddUpdateComponent = class _FloorManagementAddUpdateComponent {
  /* ================= MODE ================= */
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, floorService, toaster, _userService, data) {
    this.dialogRef = dialogRef;
    this.floorService = floorService;
    this.toaster = toaster;
    this._userService = _userService;
    this.data = data;
    this.isSaving = false;
    this.currentUser = null;
    this.fieldErrors = {};
    this.model = {
      floorName: "",
      fkBuilding: "",
      isActive: true,
      floorNo: 0
    };
  }
  /* ================= INIT ================= */
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.data?.mode === "edit" && this.data.value) {
        this.model = __spreadValues({}, this.data.value);
      }
      this.currentUser = yield this._userService.user$;
      this.model.fkBusiness = this.currentUser?.fkBusiness;
      if (this.data?.buildingId) {
        this.model.fkBuilding = this.data.buildingId;
      }
    });
  }
  /* ================= VALIDATION ================= */
  onNameChange() {
    if (this.fieldErrors.floorName) {
      this.fieldErrors.floorName = "";
    }
    if (this.fieldErrors.floorNo) {
      this.fieldErrors.floorNo = void 0;
    }
  }
  /* ================= ACTIONS ================= */
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.floorName?.trim()) {
      this.fieldErrors.floorName = "Floor Name is required";
    }
    if (!this.model.floorNo || this.model.floorNo <= -1) {
      this.fieldErrors.floorNo = "Floor Number is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    this.isSaving = true;
    console.log(this.model);
    const api$ = this.isEditMode ? this.floorService.updateFloor(this.model) : this.floorService.addFloor(this.model);
    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success(this.isEditMode ? "Floor Updated Successfully" : "Floor Added Successfully");
          setTimeout(() => this.dialogRef.close("saved"), 400);
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
    this.\u0275fac = function FloorManagementAddUpdateComponent_Factory(t) {
      return new (t || _FloorManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FloorService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloorManagementAddUpdateComponent, selectors: [["app-floor-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 13, consts: [[1, "w-full", "max-w-md", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-5"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], ["type", "number", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-[rgb(var(--text-muted))]"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "flex", "items-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40 border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function FloorManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function FloorManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " Floor Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function FloorManagementAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.floorName, $event) || (ctx.model.floorName = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, FloorManagementAddUpdateComponent_p_13_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 7);
        \u0275\u0275text(16, " Floor Number ");
        \u0275\u0275elementStart(17, "span", 8);
        \u0275\u0275text(18, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function FloorManagementAddUpdateComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.floorNo, $event) || (ctx.model.floorNo = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, FloorManagementAddUpdateComponent_p_20_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12)(22, "div")(23, "p", 13);
        \u0275\u0275text(24, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 14);
        \u0275\u0275text(26, " Inactive floors cannot be used. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-slide-toggle", 15);
        \u0275\u0275twoWayListener("ngModelChange", function FloorManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 16)(29, "button", 17);
        \u0275\u0275listener("click", function FloorManagementAddUpdateComponent_Template_button_click_29_listener() {
          return ctx.close();
        });
        \u0275\u0275text(30, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 18);
        \u0275\u0275listener("click", function FloorManagementAddUpdateComponent_Template_button_click_31_listener() {
          return ctx.save();
        });
        \u0275\u0275template(32, FloorManagementAddUpdateComponent_span_32_Template, 1, 0, "span", 19);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Floor" : "Add Floor", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.floorName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.floorName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.floorName);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.floorNo);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.floorNo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.floorNo);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Floor" : "Save Floor", " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgModel,
      SharedModule,
      MaterialModuleModule,
      MatSlideToggle
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloorManagementAddUpdateComponent, { className: "FloorManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\floor-management\\floor-management-add-update\\floor-management-add-update.component.ts", lineNumber: 29 });
})();

// src/app/components/core/floor-management/floor-management.component.ts
function FloorManagementComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "div", 40);
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4, " Loading Floors... ");
    \u0275\u0275elementEnd()()();
  }
}
function FloorManagementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div")(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45)(8, "button", 46);
    \u0275\u0275listener("click", function FloorManagementComponent_div_37_Template_button_click_8_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSection(f_r2.floorId));
    });
    \u0275\u0275element(9, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275listener("click", function FloorManagementComponent_div_37_Template_button_click_10_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(f_r2));
    });
    \u0275\u0275element(11, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 50);
    \u0275\u0275listener("click", function FloorManagementComponent_div_37_Template_button_click_12_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(f_r2.floorId));
    });
    \u0275\u0275element(13, "i", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", f_r2.floorName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", f_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function FloorManagementComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "p", 53);
    \u0275\u0275text(2, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 54);
    \u0275\u0275text(4, " Try adjusting search or add a new floor. ");
    \u0275\u0275elementEnd()();
  }
}
function FloorManagementComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2, " Loading Floors... ");
    \u0275\u0275elementEnd()();
  }
}
function FloorManagementComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 59)(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 60)(9, "div", 61)(10, "div", 62)(11, "button", 63);
    \u0275\u0275listener("click", function FloorManagementComponent_tr_53_Template_button_click_11_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSection(f_r5.floorId));
    });
    \u0275\u0275element(12, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 64);
    \u0275\u0275text(14, " Manage Sections ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 62)(16, "button", 65);
    \u0275\u0275listener("click", function FloorManagementComponent_tr_53_Template_button_click_16_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(f_r5));
    });
    \u0275\u0275element(17, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 64);
    \u0275\u0275text(19, " Edit Floor ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 62)(21, "button", 66);
    \u0275\u0275listener("click", function FloorManagementComponent_tr_53_Template_button_click_21_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(f_r5.floorId));
    });
    \u0275\u0275element(22, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 64);
    \u0275\u0275text(24, " Delete Floor ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r5.floorName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", f_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function FloorManagementComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 67)(2, "p", 53);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 54);
    \u0275\u0275text(5, " Try adjusting search or create a new Floor. ");
    \u0275\u0275elementEnd()()();
  }
}
function FloorManagementComponent_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function FloorManagementComponent_button_61_Template_button_click_0_listener() {
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
var FloorManagementComponent = class _FloorManagementComponent {
  constructor(_floorService, _toaster, dialog, _userService, router) {
    this._floorService = _floorService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Floors = [];
    this.filteredFloors = [];
  }
  /* =============================
   * INIT
   * ============================= */
  ngOnInit() {
    return __async(this, null, function* () {
      const nav = history.state;
      console.log("breadcrumb 3", nav);
      this.fkBuilding = nav.fkBuilding || nav.fkBuilding;
      this.fkFacility = nav.fkFacility;
      this.fkBusiness = nav.fkBusiness;
      this.currentUser = yield this._userService.user$;
      this.loadFloors(this.fkBuilding);
    });
  }
  /* =============================
   * LOAD
   * ============================= */
  loadFloors(fkBuilding) {
    this.isLoading = true;
    fkBuilding = this.fkBuilding;
    this._floorService.getFloorByBuildingId(fkBuilding).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load Floors");
          this.isLoading = false;
          return;
        }
        this.Floors = res.data ?? [];
        this.filteredFloors = [...this.Floors];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Floors = [];
        this.filteredFloors = [];
        this.isLoading = false;
        this._toaster.error("Failed to load Floors");
      }
    });
  }
  /* =============================
   * PAGINATION
   * ============================= */
  get pagedFloors() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredFloors.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredFloors.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredFloors.length);
  }
  /* =============================
   * SEARCH
   * ============================= */
  searchFloors() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredFloors = !term ? [...this.Floors] : this.Floors.filter((st) => st.floorName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* =============================
   * ADD
   * ============================= */
  addFloor() {
    const dialogRef = this.dialog.open(FloorManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add",
        buildingId: this.fkBuilding
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadFloors(this.fkBuilding);
      }
    });
  }
  /* =============================
   * EDIT
   * ============================= */
  edit(st) {
    const dialogRef = this.dialog.open(FloorManagementAddUpdateComponent, {
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
        this.loadFloors(this.fkBuilding);
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
        title: "Delete Floor",
        message: "Deleting this floor will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._floorService.deleteFloor(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Floor deleted");
            this.loadFloors(this.fkBuilding);
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
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredFloors.length) {
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
  goToSection(id) {
    this.router.navigate(["/core/section-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: id
      }
    });
  }
  goToBuilding(id) {
    this.router.navigate(["/core/building-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility
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
    this.\u0275fac = function FloorManagementComponent_Factory(t) {
      return new (t || _FloorManagementComponent)(\u0275\u0275directiveInject(FloorService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloorManagementComponent, selectors: [["app-floor-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-building", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "las", "la-city", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-layer-group", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold"], ["type", "text", "placeholder", "Search Floors..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-sitemap", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function FloorManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Floor Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage floors linked with selected building. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function FloorManagementComponent_Template_button_click_9_listener() {
          return ctx.addFloor();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Floor ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "button", 10);
        \u0275\u0275listener("click", function FloorManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility(ctx.fkBusiness);
        });
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function FloorManagementComponent_Template_button_click_19_listener() {
          return ctx.goToBuilding(ctx.fkBuilding);
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementStart(24, "span", 15);
        \u0275\u0275element(25, "i", 16);
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Floor");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "p", 19);
        \u0275\u0275text(31, " Total Floors: ");
        \u0275\u0275elementStart(32, "span", 20);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function FloorManagementComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function FloorManagementComponent_Template_input_ngModelChange_34_listener() {
          return ctx.searchFloors();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 22);
        \u0275\u0275template(36, FloorManagementComponent_div_36_Template, 5, 0, "div", 23)(37, FloorManagementComponent_div_37_Template, 14, 3, "div", 24)(38, FloorManagementComponent_div_38_Template, 5, 0, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 26)(40, "table", 27)(41, "thead", 28)(42, "tr")(43, "th", 29);
        \u0275\u0275text(44, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th", 29);
        \u0275\u0275text(46, "Floor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th", 29);
        \u0275\u0275text(48, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th", 30);
        \u0275\u0275text(50, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "tbody");
        \u0275\u0275template(52, FloorManagementComponent_tr_52_Template, 3, 0, "tr", 31)(53, FloorManagementComponent_tr_53_Template, 25, 4, "tr", 32)(54, FloorManagementComponent_tr_54_Template, 6, 0, "tr", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 33)(56, "p", 34);
        \u0275\u0275text(57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 35)(59, "button", 36);
        \u0275\u0275listener("click", function FloorManagementComponent_Template_button_click_59_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(60, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(61, FloorManagementComponent_button_61_Template, 2, 2, "button", 37);
        \u0275\u0275elementStart(62, "button", 36);
        \u0275\u0275listener("click", function FloorManagementComponent_Template_button_click_62_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(63, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275textInterpolate1(" ", ctx.filteredFloors.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedFloors);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedFloors.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedFloors);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedFloors.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredFloors.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredFloors.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MaterialModuleModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloorManagementComponent, { className: "FloorManagementComponent", filePath: "src\\app\\components\\core\\floor-management\\floor-management.component.ts", lineNumber: 21 });
})();
export {
  FloorManagementComponent
};
//# sourceMappingURL=chunk-JFNG6VVG.js.map
