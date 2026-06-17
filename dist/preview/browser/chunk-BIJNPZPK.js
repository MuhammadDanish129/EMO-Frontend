import {
  UtilityService
} from "./chunk-ICNXWK7H.js";
import {
  ConfirmDialogComponent
} from "./chunk-2YM3HG7T.js";
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
  __spreadValues
} from "./chunk-6EVL5ZQD.js";

// src/app/components/device/utility-management/utility-management-add-update/utility-management-add-update.component.ts
function UtilityManagementAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.utilityName, " ");
  }
}
function UtilityManagementAddUpdateComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, " This name will be displayed across the system. ");
    \u0275\u0275elementEnd();
  }
}
function UtilityManagementAddUpdateComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
var UtilityManagementAddUpdateComponent = class _UtilityManagementAddUpdateComponent {
  /* ================= MODE ================= */
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  /* ================= CONSTRUCTOR ================= */
  constructor(dialogRef, _utilityService, _toaster, data) {
    this.dialogRef = dialogRef;
    this._utilityService = _utilityService;
    this._toaster = _toaster;
    this.data = data;
    this.isSaving = false;
    this.fieldErrors = {};
    this.model = {
      utilityName: "",
      isActive: true
    };
    if (data?.mode === "edit" && data.value) {
      this.model = __spreadValues({}, data.value);
    }
  }
  /* ================= HELPERS ================= */
  closeWithDelay(result) {
    setTimeout(() => {
      this.dialogRef.close(result);
    }, 500);
  }
  onUtilityNameChange() {
    if (this.fieldErrors.utilityName) {
      this.fieldErrors.utilityName = "";
    }
  }
  close() {
    this.dialogRef.close();
  }
  /* ================= SAVE ================= */
  save() {
    this.fieldErrors = {};
    if (!this.model.utilityName?.trim()) {
      this.fieldErrors.utilityName = "Utility Name is required";
      return;
    }
    this.isSaving = true;
    if (this.isEditMode) {
      const updatePayload = {
        utilityId: this.data.value.utilityId,
        utilityName: this.model.utilityName,
        isActive: this.model.isActive
      };
      this._utilityService.updateUtility(updatePayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Utility updated successfully");
            this.closeWithDelay("saved");
          } else {
            this._toaster.error(res.remarks || "Failed to update utility");
            this.fieldErrors.utilityName = res.remarks || "Invalid utility name";
          }
          this.isSaving = false;
        },
        error: (err) => {
          this._toaster.error("Something went wrong");
          this.fieldErrors.utilityName = err?.error?.message || "Something went wrong";
          this.isSaving = false;
        }
      });
    } else {
      const addPayload = {
        utilityName: this.model.utilityName,
        isActive: this.model.isActive
      };
      this._utilityService.addUtility(addPayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Utility added successfully");
            this.closeWithDelay("saved");
          } else {
            this._toaster.error(res.remarks || "Failed to add utility");
            this.fieldErrors.utilityName = res.remarks || "Invalid utility name";
          }
          this.isSaving = false;
        },
        error: (err) => {
          this._toaster.error("Something went wrong");
          this.fieldErrors.utilityName = err?.error?.message || "Something went wrong";
          this.isSaving = false;
        }
      });
    }
  }
  static {
    this.\u0275fac = function UtilityManagementAddUpdateComponent_Factory(t) {
      return new (t || _UtilityManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilityManagementAddUpdateComponent, selectors: [["app-utility-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 10, consts: [[1, "w-full", "max-w-xl", "rounded-t-xl", "bg-[rgb(var(--light))]", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "overflow-y-auto", "space-y-6"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold", "text-[rgb(var(--default-text-color))]"], [1, "text-[rgb(var(--danger))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-4", "text-sm", "border-[rgb(var(--input-border))]", "text-[rgb(var(--default-text-color))]", "placeholder:text-[rgb(var(--text-muted))]", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], ["class", "text-[11px] text-[rgb(var(--text-muted))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-muted"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "transition", "disabled:opacity-60", "disabled:cursor-not-allowed", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40\n               border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "text-[11px]", "text-[rgb(var(--text-muted))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function UtilityManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function UtilityManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " Utility Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function UtilityManagementAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.utilityName, $event) || (ctx.model.utilityName = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UtilityManagementAddUpdateComponent_Template_input_ngModelChange_12_listener() {
          return ctx.onUtilityNameChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, UtilityManagementAddUpdateComponent_p_13_Template, 2, 1, "p", 10)(14, UtilityManagementAddUpdateComponent_p_14_Template, 2, 0, "p", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12)(16, "div")(17, "p", 13);
        \u0275\u0275text(18, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 14);
        \u0275\u0275text(20, "Inactive utilities cannot be used.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-slide-toggle", 15);
        \u0275\u0275twoWayListener("ngModelChange", function UtilityManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 16)(23, "button", 17);
        \u0275\u0275listener("click", function UtilityManagementAddUpdateComponent_Template_button_click_23_listener() {
          return ctx.close();
        });
        \u0275\u0275text(24, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 18);
        \u0275\u0275listener("click", function UtilityManagementAddUpdateComponent_Template_button_click_25_listener() {
          return ctx.save();
        });
        \u0275\u0275template(26, UtilityManagementAddUpdateComponent_span_26_Template, 1, 0, "span", 19);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Utility" : "Add Utility", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.utilityName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.utilityName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.utilityName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fieldErrors.utilityName);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Utility" : "Save Utility", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilityManagementAddUpdateComponent, { className: "UtilityManagementAddUpdateComponent", filePath: "src\\app\\components\\device\\utility-management\\utility-management-add-update\\utility-management-add-update.component.ts", lineNumber: 22 });
})();

// src/app/components/device/utility-management/utility-management.component.ts
function UtilityManagementComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "div", 32);
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, " Loading utilities... ");
    \u0275\u0275elementEnd()()();
  }
}
function UtilityManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div")(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "button", 39);
    \u0275\u0275listener("click", function UtilityManagementComponent_div_21_Template_button_click_8_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(u_r2));
    });
    \u0275\u0275element(9, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 41);
    \u0275\u0275listener("click", function UtilityManagementComponent_div_21_Template_button_click_10_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(u_r2.utilityId));
    });
    \u0275\u0275element(11, "i", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", u_r2.utilityName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", u_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function UtilityManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "p", 44);
    \u0275\u0275text(2, " No record found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 45);
    \u0275\u0275text(4, " Try adjusting search or add a new utility. ");
    \u0275\u0275elementEnd()();
  }
}
function UtilityManagementComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2, " Loading utilities... ");
    \u0275\u0275elementEnd()();
  }
}
function UtilityManagementComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 47)(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 50)(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 51)(9, "div", 52)(10, "div", 53)(11, "button", 39);
    \u0275\u0275listener("click", function UtilityManagementComponent_tr_37_Template_button_click_11_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(u_r5));
    });
    \u0275\u0275element(12, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 54);
    \u0275\u0275text(14, " Edit Utility ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 53)(16, "button", 41);
    \u0275\u0275listener("click", function UtilityManagementComponent_tr_37_Template_button_click_16_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(u_r5.utilityId));
    });
    \u0275\u0275element(17, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 54);
    \u0275\u0275text(19, " Delete Utility ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r5.utilityName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", u_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function UtilityManagementComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55)(2, "p", 44);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5, " Try adjusting search or create a new utilities. ");
    \u0275\u0275elementEnd()()();
  }
}
function UtilityManagementComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function UtilityManagementComponent_button_45_Template_button_click_0_listener() {
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
var UtilityManagementComponent = class _UtilityManagementComponent {
  constructor(_utilityService, _toaster, dialog) {
    this._utilityService = _utilityService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.utilities = [];
    this.filteredUtilities = [];
  }
  /* ================= INIT ================= */
  ngOnInit() {
    this.loadUtilities();
  }
  /* ================= LOAD ================= */
  loadUtilities() {
    this.isLoading = true;
    this._utilityService.getUtilities().subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load utilities");
          this.utilities = res.data ?? [];
          this.isLoading = false;
          return;
        }
        this.utilities = res.data ?? [];
        this.filteredUtilities = [...this.utilities];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.utilities = [];
        this.filteredUtilities = [];
        this.isLoading = false;
        this._toaster.error("Failed to load utilities");
      }
    });
  }
  /* ================= PAGINATION ================= */
  get pagedUtilities() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredUtilities.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredUtilities.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredUtilities.length);
  }
  /* ================= SEARCH ================= */
  searchUtilities() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredUtilities = !term ? [...this.utilities] : this.utilities.filter((u) => u.utilityName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= ADD ================= */
  addUtility() {
    const dialogRef = this.dialog.open(UtilityManagementAddUpdateComponent, {
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
        this.loadUtilities();
      }
    });
  }
  /* ================= EDIT ================= */
  edit(ut) {
    const dialogRef = this.dialog.open(UtilityManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      data: {
        mode: "edit",
        value: ut
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadUtilities();
      }
    });
  }
  /* ================= DELETE ================= */
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete Utility",
        message: "Deleting this utility will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._utilityService.deleteUtility(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Utility deleted");
            this.loadUtilities();
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
  /* ================= PAGE CONTROLS ================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredUtilities.length) {
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
  static {
    this.\u0275fac = function UtilityManagementComponent_Factory(t) {
      return new (t || _UtilityManagementComponent)(\u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilityManagementComponent, selectors: [["app-utility"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", "hover:bg-[rgb(var(--primary-200))]", "hover:shadow-md", "hover:-translate-y-0.5", "transition-all", "duration-200", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search utilities...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-400", "mt-1"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "text-xs", "text-gray-600", "mt-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function UtilityManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Utility Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage utilities linked with offices across the system. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function UtilityManagementComponent_Template_button_click_9_listener() {
          return ctx.addUtility();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Utility ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "p", 10);
        \u0275\u0275text(15, " Total Utilities: ");
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function UtilityManagementComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UtilityManagementComponent_Template_input_ngModelChange_18_listener() {
          return ctx.searchUtilities();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275template(20, UtilityManagementComponent_div_20_Template, 5, 0, "div", 14)(21, UtilityManagementComponent_div_21_Template, 12, 3, "div", 15)(22, UtilityManagementComponent_div_22_Template, 5, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 17)(24, "table", 18)(25, "thead", 19)(26, "tr")(27, "th", 20);
        \u0275\u0275text(28, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 20);
        \u0275\u0275text(30, "Utility Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 20);
        \u0275\u0275text(32, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 21);
        \u0275\u0275text(34, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "tbody", 22);
        \u0275\u0275template(36, UtilityManagementComponent_tr_36_Template, 3, 0, "tr", 23)(37, UtilityManagementComponent_tr_37_Template, 20, 4, "tr", 24)(38, UtilityManagementComponent_tr_38_Template, 6, 0, "tr", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 25)(40, "p", 26);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 27)(43, "button", 28);
        \u0275\u0275listener("click", function UtilityManagementComponent_Template_button_click_43_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(44, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, UtilityManagementComponent_button_45_Template, 2, 2, "button", 29);
        \u0275\u0275elementStart(46, "button", 28);
        \u0275\u0275listener("click", function UtilityManagementComponent_Template_button_click_46_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(47, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate1(" ", ctx.filteredUtilities.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedUtilities);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedUtilities.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedUtilities);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedUtilities.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredUtilities.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredUtilities.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilityManagementComponent, { className: "UtilityManagementComponent", filePath: "src\\app\\components\\device\\utility-management\\utility-management.component.ts", lineNumber: 21 });
})();
export {
  UtilityManagementComponent
};
//# sourceMappingURL=chunk-BIJNPZPK.js.map
