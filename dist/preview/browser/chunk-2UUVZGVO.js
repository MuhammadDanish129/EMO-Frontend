import {
  UserTypeService
} from "./chunk-ZQNSAZPO.js";
import {
  ConfirmDialogComponent
} from "./chunk-2YM3HG7T.js";
import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-YGYCE7FQ.js";
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
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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

// src/app/components/management/usertype/usertype-add-update/usertype-add-update.component.ts
function UsertypeAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.userTypeName, " ");
  }
}
function UsertypeAddUpdateComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " This name will be displayed across the system. ");
    \u0275\u0275elementEnd();
  }
}
function UsertypeAddUpdateComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.userTypeLevel, " ");
  }
}
function UsertypeAddUpdateComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " This Level will define the user type hierarchy. ");
    \u0275\u0275elementEnd();
  }
}
function UsertypeAddUpdateComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
var UsertypeAddUpdateComponent = class _UsertypeAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  closeWithDelay(result) {
    setTimeout(() => {
      this.dialogRef.close(result);
    }, 500);
  }
  onUserTypeNameChange() {
    if (this.fieldErrors.userTypeName, this.fieldErrors.userTypeLevel) {
      this.fieldErrors.userTypeName = "";
      this.fieldErrors.userTypeLevel = 0;
    }
  }
  constructor(dialogRef, _userTypeService, _toaster, data) {
    this.dialogRef = dialogRef;
    this._userTypeService = _userTypeService;
    this._toaster = _toaster;
    this.data = data;
    this.isSaving = false;
    this.fieldErrors = {};
    this.model = {
      userTypeName: "",
      isActive: true,
      userTypeLevel: 0
    };
    if (data?.mode === "edit" && data.value) {
      this.model = __spreadValues({}, data.value);
    }
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.userTypeName?.trim()) {
      this.fieldErrors.userTypeName = "User Type Name is required";
      return;
    }
    this.isSaving = true;
    if (this.isEditMode) {
      const updatePayload = {
        userTypeId: this.data.value.userTypeId,
        userTypeName: this.model.userTypeName,
        userTypeLevel: this.model.userTypeLevel,
        isActive: this.model.isActive
      };
      this._userTypeService.updateUserType(updatePayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("User Type updated successfully");
            this.closeWithDelay("saved");
          } else {
            this._toaster.error(res.remarks || "Failed to update user type");
            this.fieldErrors.userTypeName = res.remarks || "Invalid user type name";
          }
          this.isSaving = false;
        },
        error: (err) => {
          this._toaster.error("Something went wrong");
          this.fieldErrors.userTypeName = err?.error?.message || "Something went wrong";
          this.isSaving = false;
        }
      });
    } else {
      const addUserPayload = {
        userTypeName: this.model.userTypeName,
        isActive: this.model.isActive,
        userTypeLevel: this.model.userTypeLevel
      };
      this._userTypeService.addUserType(addUserPayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("User Type added successfully");
            this.closeWithDelay("saved");
          } else {
            this._toaster.error(res.remarks || "Failed to add user type");
            this.fieldErrors.userTypeName = res.remarks || "Invalid user type name";
          }
          this.isSaving = false;
        },
        error: (err) => {
          this._toaster.error("Something went wrong");
          this.fieldErrors.userTypeName = err?.error?.message || "Something went wrong";
          this.isSaving = false;
        }
      });
    }
  }
  static {
    this.\u0275fac = function UsertypeAddUpdateComponent_Factory(t) {
      return new (t || _UsertypeAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(UserTypeService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsertypeAddUpdateComponent, selectors: [["app-usertype-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 15, consts: [[1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "overflow-y-auto", "space-y-5"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold", "text-[rgb(var(--default-text-color))]"], [1, "text-[rgb(var(--danger))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", "text-[rgb(var(--default-text-color))]", "placeholder:text-[rgb(var(--text-muted))]", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], ["class", "text-[11px] text-[rgb(var(--text-muted))]", 4, "ngIf"], [1, "text-[rgb(var(--red-500))]"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-muted"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "transition", "disabled:opacity-60", "disabled:cursor-not-allowed", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40\n               border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "text-[11px]", "text-[rgb(var(--text-muted))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function UsertypeAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function UsertypeAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " User Type Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function UsertypeAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.userTypeName, $event) || (ctx.model.userTypeName = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UsertypeAddUpdateComponent_Template_input_ngModelChange_12_listener() {
          return ctx.onUserTypeNameChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, UsertypeAddUpdateComponent_p_13_Template, 2, 1, "p", 10)(14, UsertypeAddUpdateComponent_p_14_Template, 2, 0, "p", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "label", 7);
        \u0275\u0275text(17, " User Type Level ");
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function UsertypeAddUpdateComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.userTypeLevel, $event) || (ctx.model.userTypeLevel = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UsertypeAddUpdateComponent_Template_input_ngModelChange_20_listener() {
          return ctx.onUserTypeNameChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, UsertypeAddUpdateComponent_p_21_Template, 2, 1, "p", 10)(22, UsertypeAddUpdateComponent_p_22_Template, 2, 0, "p", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 13)(24, "div")(25, "p", 14);
        \u0275\u0275text(26, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 15);
        \u0275\u0275text(28, "Inactive user types cannot be assigned.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-slide-toggle", 16);
        \u0275\u0275twoWayListener("ngModelChange", function UsertypeAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 17)(31, "button", 18);
        \u0275\u0275listener("click", function UsertypeAddUpdateComponent_Template_button_click_31_listener() {
          return ctx.close();
        });
        \u0275\u0275text(32, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 19);
        \u0275\u0275listener("click", function UsertypeAddUpdateComponent_Template_button_click_33_listener() {
          return ctx.save();
        });
        \u0275\u0275template(34, UsertypeAddUpdateComponent_span_34_Template, 1, 0, "span", 20);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update User Type" : "Add User Type", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.userTypeName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.userTypeName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.userTypeName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fieldErrors.userTypeName);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.userTypeLevel);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.userTypeLevel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.userTypeLevel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fieldErrors.userTypeLevel);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update User Type" : "Save User Type", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsertypeAddUpdateComponent, { className: "UsertypeAddUpdateComponent", filePath: "src\\app\\components\\management\\usertype\\usertype-add-update\\usertype-add-update.component.ts", lineNumber: 17 });
})();

// src/app/components/management/usertype/usertype-hierarchy/usertype-hierarchy.component.ts
var _c0 = (a0, a1) => ({ "cursor-move border-[rgb(var(--default-border))]": a0, "cursor-not-allowed border-[rgb(var(--primary))]": a1 });
function UserTypeHierarchyComponent_div_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, " ROOT ");
    \u0275\u0275elementEnd();
  }
}
function UserTypeHierarchyComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275template(4, UserTypeHierarchyComponent_div_13_span_4_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ut_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275styleProp("margin-left", i_r2 * 24, "px");
    \u0275\u0275classProp("opacity-60", ut_r1.userTypeName === "System Admin");
    \u0275\u0275property("cdkDragDisabled", ut_r1.userTypeName === "System Admin")("ngClass", \u0275\u0275pureFunction2(11, _c0, ut_r1.userTypeName !== "System Admin", ut_r1.userTypeName === "System Admin"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ut_r1.userTypeName === "System Admin" ? "text-[rgb(var(--primary))]" : "text-stone-600");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ut_r1.userTypeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ut_r1.userTypeName === "System Admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ut_r1.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ut_r1.isActive ? "Active" : "Inactive", " ");
  }
}
var UserTypeHierarchyComponent = class _UserTypeHierarchyComponent {
  constructor(dialogRef, data, dialog, _userTypeService, _toaster) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialog = dialog;
    this._userTypeService = _userTypeService;
    this._toaster = _toaster;
    this.userTypes = [];
  }
  ngOnInit() {
    this.userTypes = [...this.data];
    const sysIndex = this.userTypes.findIndex((u) => u.userTypeName === "System Admin");
    if (sysIndex > 0) {
      const [sysAdmin] = this.userTypes.splice(sysIndex, 1);
      this.userTypes.unshift(sysAdmin);
    }
  }
  drop(event) {
    if (event.previousIndex === 0 || event.currentIndex === 0) {
      return;
    }
    moveItemInArray(this.userTypes, event.previousIndex, event.currentIndex);
  }
  close() {
    this.dialogRef.close();
  }
  closeWithDelay(result) {
    setTimeout(() => {
      this.dialogRef.close(result);
    }, 500);
  }
  save() {
    const confirmationDialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Save User Type Hierarchy",
        message: "You are about to update the user type hierarchy. This change will affect role relationships and access flow across the system.",
        confirmText: "Save Hierarchy",
        cancelText: "Cancel",
        variant: "warning",
        showActions: true
      }
    });
    confirmationDialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      const hierarchyPayload = this.userTypes.map((ut, index) => ({
        userTypeId: ut.userTypeId,
        userTypeLevel: index
      }));
      this._userTypeService.updateUserTypeHierarchy(hierarchyPayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("User Type hierarchy updated successfully");
            this.closeWithDelay("saved");
          } else {
            this._toaster.error(res.remarks || "Failed to update user type hierarchy");
          }
        },
        error: (err) => {
          this._toaster.error("Something went wrong");
        }
      });
    });
  }
  static {
    this.\u0275fac = function UserTypeHierarchyComponent_Factory(t) {
      return new (t || _UserTypeHierarchyComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserTypeService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserTypeHierarchyComponent, selectors: [["app-usertype-hierarchy"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 1, consts: [[1, "w-full", "max-w-3xl", "bg-[rgb(var(--light))]", "rounded-t-xl", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-white/20", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-4"], [1, "text-sm", "text-[rgb(var(--default-text-color))]"], [1, "text-xs"], ["cdkDropList", "", 1, "rounded-lg", "border", "p-4", "bg-[rgb(var(--gray-50))]", "border-[rgb(var(--default-border))]", "space-y-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "flex items-center gap-3 rounded-md bg-[rgb(var(--light))]  px-3 py-2\n         select-none border", 3, "cdkDragDisabled", "marginLeft", "ngClass", "opacity-60", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "border", "border-[rgb(var(--gray-300))]", "hover:bg-[rgb(var(--gray-100))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"], ["cdkDrag", "", 1, "flex", "items-center", "gap-3", "rounded-md", "bg-[rgb(var(--light))]", "px-3", "py-2", "select-none", "border", 3, "cdkDragDisabled", "ngClass"], [1, "las", "la-grip-vertical", "text-lg", 3, "ngClass"], [1, "text-sm", "font-medium"], ["class", "ml-2 text-[10px] font-semibold text-[rgb(var(--primary))]", 4, "ngIf"], [1, "ml-auto", "text-xs", "px-2", "py-0.5", "rounded-full", 3, "ngClass"], [1, "ml-2", "text-[10px]", "font-semibold", "text-[rgb(var(--primary))]"]], template: function UserTypeHierarchyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, " User Type Hierarchy ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function UserTypeHierarchyComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8, " Drag and reorder user types to define hierarchy. ");
        \u0275\u0275element(9, "br");
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11, " System Admin always stays on top. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275listener("cdkDropListDropped", function UserTypeHierarchyComponent_Template_div_cdkDropListDropped_12_listener($event) {
          return ctx.drop($event);
        });
        \u0275\u0275template(13, UserTypeHierarchyComponent_div_13_Template, 7, 14, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
        \u0275\u0275listener("click", function UserTypeHierarchyComponent_Template_button_click_15_listener() {
          return ctx.close();
        });
        \u0275\u0275text(16, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275listener("click", function UserTypeHierarchyComponent_Template_button_click_17_listener() {
          return ctx.save();
        });
        \u0275\u0275text(18, " Save Hierarchy ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.userTypes);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DragDropModule, CdkDropList, CdkDrag], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserTypeHierarchyComponent, { className: "UserTypeHierarchyComponent", filePath: "src\\app\\components\\management\\usertype\\usertype-hierarchy\\usertype-hierarchy.component.ts", lineNumber: 20 });
})();

// src/app/components/management/usertype/usertype.component.ts
function UsertypeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "div", 32);
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, " Loading user types... ");
    \u0275\u0275elementEnd()()();
  }
}
function UsertypeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div")(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "button", 39);
    \u0275\u0275listener("click", function UsertypeComponent_div_21_Template_button_click_8_listener() {
      const ut_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(ut_r2));
    });
    \u0275\u0275element(9, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 41);
    \u0275\u0275listener("click", function UsertypeComponent_div_21_Template_button_click_10_listener() {
      const ut_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(ut_r2.userTypeId));
    });
    \u0275\u0275element(11, "i", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ut_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ut_r2.userTypeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ut_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ut_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function UsertypeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "p", 44);
    \u0275\u0275text(2, " No user types found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 45);
    \u0275\u0275text(4, " Try adjusting your search or add a new user type. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function UsertypeComponent_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUserType());
    });
    \u0275\u0275element(6, "i", 47);
    \u0275\u0275text(7, " Add User Type ");
    \u0275\u0275elementEnd()();
  }
}
function UsertypeComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48)(2, "div", 31);
    \u0275\u0275element(3, "div", 32);
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5, " Loading user types... ");
    \u0275\u0275elementEnd()()()();
  }
}
function UsertypeComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 49)(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 52)(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 53)(9, "div", 54)(10, "div", 55)(11, "button", 56);
    \u0275\u0275listener("click", function UsertypeComponent_tr_37_Template_button_click_11_listener() {
      const ut_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(ut_r6));
    });
    \u0275\u0275element(12, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 57);
    \u0275\u0275text(14, " Edit User Type ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 55)(16, "button", 58);
    \u0275\u0275listener("click", function UsertypeComponent_tr_37_Template_button_click_16_listener() {
      const ut_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(ut_r6.userTypeId));
    });
    \u0275\u0275element(17, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 57);
    \u0275\u0275text(19, " Delete User Type ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ut_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r7 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ut_r6.userTypeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ut_r6.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ut_r6.isActive ? "Active" : "Inactive", " ");
  }
}
function UsertypeComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 59);
    \u0275\u0275text(2, " No Record found. ");
    \u0275\u0275elementEnd()();
  }
}
function UsertypeComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function UsertypeComponent_button_45_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", p_r9 === ctx_r2.pageIndex ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9 + 1, " ");
  }
}
var UsertypeComponent = class _UsertypeComponent {
  constructor(_userTypeService, _toaster, dialog) {
    this._userTypeService = _userTypeService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.userTypes = [];
    this.filteredUserTypes = [];
  }
  ngOnInit() {
    this.loadUserTypes();
  }
  loadUserTypes() {
    this.isLoading = true;
    this._userTypeService.getUserTypes().subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load user types");
          this.isLoading = false;
          return;
        }
        this.userTypes = res.data ?? [];
        this.filteredUserTypes = [...this.userTypes];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.userTypes = [];
        this.isLoading = false;
        this.filteredUserTypes = [];
        this._toaster.error("Failed to load user types");
      }
    });
  }
  /* Pagination helpers */
  get pagedUserTypes() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredUserTypes.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredUserTypes.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredUserTypes.length);
  }
  /* Search */
  searchUserTypes() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredUserTypes = !term ? [...this.userTypes] : this.userTypes.filter((u) => u.userTypeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* Actions */
  addUserType() {
    const dialogRef = this.dialog.open(UsertypeAddUpdateComponent, {
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
        this.loadUserTypes();
      }
    });
  }
  edit(ut) {
    const dialogRef = this.dialog.open(UsertypeAddUpdateComponent, {
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
        this.loadUserTypes();
      }
    });
  }
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete User Type",
        message: "Deleting this user type will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._userTypeService.deleteUserType(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("User Type deleted");
            this.loadUserTypes();
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
  openHierarchy() {
    const dialogRef = this.dialog.open(UserTypeHierarchyComponent, {
      width: "720px",
      maxWidth: "90vw",
      disableClose: true,
      panelClass: "yx-enterprise-dialog",
      data: this.userTypes
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadUserTypes();
      }
    });
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredUserTypes.length) {
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
    this.\u0275fac = function UsertypeComponent_Factory(t) {
      return new (t || _UsertypeComponent)(\u0275\u0275directiveInject(UserTypeService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsertypeComponent, selectors: [["app-usertype"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search user types...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))]  shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-400", "mt-1"], [1, "mt-4", "inline-flex", "items-center", "gap-2", "rounded-lg", "px-4", "py-2", "text-xs", "font-semibold", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--primary-700))]", 3, "click"], [1, "las", "la-plus-circle", "text-sm"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "4", 1, "px-6", "py-16", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function UsertypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " User Type Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage different user roles and control their availability across the system. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function UsertypeComponent_Template_button_click_9_listener() {
          return ctx.addUserType();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add User Type ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "p", 10);
        \u0275\u0275text(15, " Total User Types: ");
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function UsertypeComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UsertypeComponent_Template_input_ngModelChange_18_listener() {
          return ctx.searchUserTypes();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275template(20, UsertypeComponent_div_20_Template, 5, 0, "div", 14)(21, UsertypeComponent_div_21_Template, 12, 3, "div", 15)(22, UsertypeComponent_div_22_Template, 8, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 17)(24, "table", 18)(25, "thead", 19)(26, "tr")(27, "th", 20);
        \u0275\u0275text(28, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 20);
        \u0275\u0275text(30, "User Type Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 20);
        \u0275\u0275text(32, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 21);
        \u0275\u0275text(34, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "tbody", 22);
        \u0275\u0275template(36, UsertypeComponent_tr_36_Template, 6, 0, "tr", 23)(37, UsertypeComponent_tr_37_Template, 20, 4, "tr", 24)(38, UsertypeComponent_tr_38_Template, 3, 0, "tr", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 25)(40, "p", 26);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 27)(43, "button", 28);
        \u0275\u0275listener("click", function UsertypeComponent_Template_button_click_43_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(44, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, UsertypeComponent_button_45_Template, 2, 2, "button", 29);
        \u0275\u0275elementStart(46, "button", 28);
        \u0275\u0275listener("click", function UsertypeComponent_Template_button_click_46_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(47, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate1(" ", ctx.filteredUserTypes.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedUserTypes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedUserTypes.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedUserTypes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedUserTypes.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredUserTypes.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredUserTypes.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsertypeComponent, { className: "UsertypeComponent", filePath: "src\\app\\components\\management\\usertype\\usertype.component.ts", lineNumber: 20 });
})();
export {
  UsertypeComponent
};
//# sourceMappingURL=chunk-2UUVZGVO.js.map
