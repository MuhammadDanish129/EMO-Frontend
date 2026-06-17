import {
  SharedModule
} from "./chunk-FF7QN5R5.js";
import "./chunk-6SVHGHML.js";
import "./chunk-3BGFXJK3.js";
import {
  OfficeService
} from "./chunk-OZNEKJTU.js";
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

// src/app/components/core/office-management/office-management-add-update/office-management-add-update.component.ts
function OfficeManagementAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.officeName, " ");
  }
}
function OfficeManagementAddUpdateComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
var OfficeManagementAddUpdateComponent = class _OfficeManagementAddUpdateComponent {
  /* ================= MODE ================= */
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, officeService, toaster, _userService, data) {
    this.dialogRef = dialogRef;
    this.officeService = officeService;
    this.toaster = toaster;
    this._userService = _userService;
    this.data = data;
    this.isSaving = false;
    this.currentUser = null;
    this.fieldErrors = {};
    this.model = {
      officeName: "",
      fkSection: "",
      isActive: true
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
      if (this.data?.sectionId) {
        this.model.fkSection = this.data.sectionId;
      }
    });
  }
  /* ================= VALIDATION ================= */
  onNameChange() {
    if (this.fieldErrors.officeName) {
      this.fieldErrors.officeName = "";
    }
  }
  /* ================= ACTIONS ================= */
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.officeName?.trim()) {
      this.fieldErrors.officeName = "Office Name is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    this.isSaving = true;
    const api$ = this.isEditMode ? this.officeService.updateOffice(this.model) : this.officeService.addOffice(this.model);
    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success(this.isEditMode ? "Office Updated Successfully" : "Office Added Successfully");
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
    this.\u0275fac = function OfficeManagementAddUpdateComponent_Factory(t) {
      return new (t || _OfficeManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OfficeService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfficeManagementAddUpdateComponent, selectors: [["app-office-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 9, consts: [[1, "w-full", "max-w-md", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-5"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-[rgb(var(--text-muted))]"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "flex", "items-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40 border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function OfficeManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function OfficeManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " Office Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.officeName, $event) || (ctx.model.officeName = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, OfficeManagementAddUpdateComponent_p_13_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div")(16, "p", 12);
        \u0275\u0275text(17, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 13);
        \u0275\u0275text(19, " Inactive offices cannot be used. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-slide-toggle", 14);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 15)(22, "button", 16);
        \u0275\u0275listener("click", function OfficeManagementAddUpdateComponent_Template_button_click_22_listener() {
          return ctx.close();
        });
        \u0275\u0275text(23, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 17);
        \u0275\u0275listener("click", function OfficeManagementAddUpdateComponent_Template_button_click_24_listener() {
          return ctx.save();
        });
        \u0275\u0275template(25, OfficeManagementAddUpdateComponent_span_25_Template, 1, 0, "span", 18);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Office" : "Add Office", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.officeName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.officeName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.officeName);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Office" : "Save Office", " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      SharedModule,
      MaterialModuleModule,
      MatSlideToggle
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfficeManagementAddUpdateComponent, { className: "OfficeManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\office-management\\office-management-add-update\\office-management-add-update.component.ts", lineNumber: 29 });
})();

// src/app/components/core/office-management/office-management.component.ts
function OfficeManagementComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "div", 42);
    \u0275\u0275elementStart(3, "p", 36);
    \u0275\u0275text(4, " Loading Offices... ");
    \u0275\u0275elementEnd()()();
  }
}
function OfficeManagementComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div")(3, "div", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "button", 49);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_47_Template_button_click_10_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToDevice(o_r2.officeId));
    });
    \u0275\u0275element(11, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 51);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_47_Template_button_click_12_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(o_r2));
    });
    \u0275\u0275element(13, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_47_Template_button_click_14_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(o_r2.officeId));
    });
    \u0275\u0275element(15, "i", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", o_r2.officeName, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-[rgb(var(--red-600))]", o_r2.isOcuppied === true)("text-[rgb(var(--success-600))]", o_r2.isOcuppied === false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r2.isOcuppied ? "Occupied" : "Available", "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", o_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function OfficeManagementComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "p", 56);
    \u0275\u0275text(2, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, " Try adjusting search or add a new offices. ");
    \u0275\u0275elementEnd()();
  }
}
function OfficeManagementComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2, " Loading Offices... ");
    \u0275\u0275elementEnd()();
  }
}
function OfficeManagementComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59)(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 62)(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 62)(9, "span", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 63)(12, "div", 64)(13, "div", 65)(14, "button", 66);
    \u0275\u0275listener("click", function OfficeManagementComponent_tr_65_Template_button_click_14_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToDevice(o_r5.officeId));
    });
    \u0275\u0275element(15, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 67);
    \u0275\u0275text(17, " Manage Devices ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 65)(19, "button", 68);
    \u0275\u0275listener("click", function OfficeManagementComponent_tr_65_Template_button_click_19_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(o_r5));
    });
    \u0275\u0275element(20, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 67);
    \u0275\u0275text(22, " Edit Office ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 65)(24, "button", 69);
    \u0275\u0275listener("click", function OfficeManagementComponent_tr_65_Template_button_click_24_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(o_r5.officeId));
    });
    \u0275\u0275element(25, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 67);
    \u0275\u0275text(27, " Delete Office ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r5.officeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", o_r5.isOcuppied ? "bg-[rgb(var(--red-100))] text-[rgb(var(--red-600))]" : "bg-[rgb(var(--success-100))] text-[rgb(var(--success-700))]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r5.isOcuppied ? "Occupied" : "Available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", o_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function OfficeManagementComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70)(2, "p", 56);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 57);
    \u0275\u0275text(5, " Try adjusting search or create a new Office. ");
    \u0275\u0275elementEnd()()();
  }
}
function OfficeManagementComponent_button_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function OfficeManagementComponent_button_73_Template_button_click_0_listener() {
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
var OfficeManagementComponent = class _OfficeManagementComponent {
  constructor(_officeService, _toaster, dialog, _userService, router) {
    this._officeService = _officeService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Offices = [];
    this.filteredOffices = [];
  }
  /* ================= INIT ================= */
  ngOnInit() {
    return __async(this, null, function* () {
      const nav = history.state;
      this.fkSection = nav.fkSection;
      this.fkFloor = nav.fkFloor;
      this.fkBuilding = nav.fkBuilding;
      this.fkFacility = nav.fkFacility;
      this.fkBusiness = nav.fkBusiness;
      this.currentUser = yield this._userService.user$;
      this.loadOffices(this.fkSection);
    });
  }
  /* ================= LOAD ================= */
  loadOffices(fkSection) {
    this.isLoading = true;
    this._officeService.getOfficeBySectionId(fkSection).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load Offices");
          this.isLoading = false;
          return;
        }
        this.Offices = res.data ?? [];
        this.filteredOffices = [...this.Offices];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Offices = [];
        this.filteredOffices = [];
        this.isLoading = false;
        this._toaster.error("Failed to load Offices");
      }
    });
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
  /* ================= SEARCH ================= */
  searchOffices() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredOffices = !term ? [...this.Offices] : this.Offices.filter((o) => o.officeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= ADD ================= */
  addOffice() {
    const dialogRef = this.dialog.open(OfficeManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add",
        sectionId: this.fkSection
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadOffices(this.fkSection);
      }
    });
  }
  /* ================= EDIT ================= */
  edit(st) {
    const dialogRef = this.dialog.open(OfficeManagementAddUpdateComponent, {
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
        this.loadOffices(this.fkSection);
      }
    });
  }
  /* ================= DELETE ================= */
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete Office",
        message: "Deleting this office is permanent.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._officeService.deleteOffice(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Office deleted");
            this.loadOffices(this.fkSection);
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
  /* ================= PAGINATION CONTROLS ================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredOffices.length) {
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
  goToSection() {
    this.router.navigate(["/core/section-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor
      }
    });
  }
  goToDevice(id) {
    this.router.navigate(["/core/device-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: id
      }
    });
  }
  goToFloor(id) {
    this.router.navigate(["/core/floor-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding
      }
    });
  }
  goToBuilding() {
    this.router.navigate(["/core/building-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility
      }
    });
  }
  goToFacility() {
    this.router.navigate(["/core/facility-management"], {
      state: {
        fkBusiness: this.fkBusiness
      }
    });
  }
  static {
    this.\u0275fac = function OfficeManagementComponent_Factory(t) {
      return new (t || _OfficeManagementComponent)(\u0275\u0275directiveInject(OfficeService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfficeManagementComponent, selectors: [["app-office-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 76, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-building", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "las", "la-city", "text-sm", "sm:text-base"], [1, "las", "la-layer-group", "text-sm", "sm:text-base"], [1, "las", "la-sitemap", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-briefcase", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold"], ["type", "text", "placeholder", "Search Offices..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "text-[11px]", "font-medium"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-broadcast-tower", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "6", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function OfficeManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Office Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage offices linked with selected section. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_9_listener() {
          return ctx.addOffice();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Office ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "button", 10);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility();
        });
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_19_listener() {
          return ctx.goToBuilding();
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementStart(24, "button", 10);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_24_listener() {
          return ctx.goToFloor(ctx.fkBuilding);
        });
        \u0275\u0275element(25, "i", 15);
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Floor");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "i", 13);
        \u0275\u0275elementStart(29, "button", 10);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_29_listener() {
          return ctx.goToSection();
        });
        \u0275\u0275element(30, "i", 16);
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "Section");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "i", 13);
        \u0275\u0275elementStart(34, "span", 17);
        \u0275\u0275element(35, "i", 18);
        \u0275\u0275elementStart(36, "span", 12);
        \u0275\u0275text(37, "Office");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 19)(39, "div", 20)(40, "p", 21);
        \u0275\u0275text(41, " Total Offices: ");
        \u0275\u0275elementStart(42, "span", 22);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OfficeManagementComponent_Template_input_ngModelChange_44_listener() {
          return ctx.searchOffices();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 24);
        \u0275\u0275template(46, OfficeManagementComponent_div_46_Template, 5, 0, "div", 25)(47, OfficeManagementComponent_div_47_Template, 16, 8, "div", 26)(48, OfficeManagementComponent_div_48_Template, 5, 0, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 28)(50, "table", 29)(51, "thead", 30)(52, "tr")(53, "th", 31);
        \u0275\u0275text(54, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th", 31);
        \u0275\u0275text(56, "Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th", 31);
        \u0275\u0275text(58, "Occupied");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th", 31);
        \u0275\u0275text(60, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th", 32);
        \u0275\u0275text(62, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "tbody");
        \u0275\u0275template(64, OfficeManagementComponent_tr_64_Template, 3, 0, "tr", 33)(65, OfficeManagementComponent_tr_65_Template, 28, 6, "tr", 34)(66, OfficeManagementComponent_tr_66_Template, 6, 0, "tr", 33);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "div", 35)(68, "p", 36);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 37)(71, "button", 38);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_71_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(72, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(73, OfficeManagementComponent_button_73_Template, 2, 2, "button", 39);
        \u0275\u0275elementStart(74, "button", 38);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_74_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(75, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(43);
        \u0275\u0275textInterpolate1(" ", ctx.filteredOffices.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedOffices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedOffices.length === 0);
        \u0275\u0275advance(16);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MaterialModuleModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfficeManagementComponent, { className: "OfficeManagementComponent", filePath: "src\\app\\components\\core\\office-management\\office-management.component.ts", lineNumber: 24 });
})();
export {
  OfficeManagementComponent
};
//# sourceMappingURL=chunk-7OOO7SSD.js.map
