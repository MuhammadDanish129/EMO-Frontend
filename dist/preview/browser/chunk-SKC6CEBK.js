import {
  SubUserTypeService
} from "./chunk-AQYXGAJ6.js";
import {
  YxSelectComponent
} from "./chunk-VUCKRGWV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
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
  __async,
  __spreadValues
} from "./chunk-6EVL5ZQD.js";

// src/app/components/management/sub-user-type/sub-user-type-add-update/sub-user-type-add-update.component.ts
function SubUserTypeAddUpdateComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.subUserTypeName, " ");
  }
}
function SubUserTypeAddUpdateComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " This name will be displayed across the system. ");
    \u0275\u0275elementEnd();
  }
}
function SubUserTypeAddUpdateComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
var SubUserTypeAddUpdateComponent = class _SubUserTypeAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, subUserTypeService, userTypeService, toaster, _userService, data) {
    this.dialogRef = dialogRef;
    this.subUserTypeService = subUserTypeService;
    this.userTypeService = userTypeService;
    this.toaster = toaster;
    this._userService = _userService;
    this.data = data;
    this.isSaving = false;
    this.isLoadingUserTypes = false;
    this.fieldErrors = {};
    this.userTypes = [];
    this.model = {
      subUserTypeName: "",
      isActive: true,
      fkUserTypeId: ""
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.data?.mode === "edit" && this.data.value) {
        this.model = __spreadValues({}, this.data.value);
      }
      this.currentUser = yield this._userService.user$;
      this.loadUserTypes(this.currentUser.userId);
    });
  }
  /* =============================
   * LOAD USER TYPES
   * ============================= */
  loadUserTypes(userId) {
    this.isLoadingUserTypes = true;
    this.userTypeService.GetByUserId(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.userTypes = res.data ?? [];
        } else {
          this.toaster.error(res.remarks || "Failed to load user types");
        }
        this.isLoadingUserTypes = false;
      },
      error: () => {
        this.isLoadingUserTypes = false;
        this.toaster.error("Failed to load user types");
      }
    });
  }
  onNameChange() {
    if (this.fieldErrors.subUserTypeName) {
      this.fieldErrors.subUserTypeName = "";
    }
  }
  onUserTypeChange() {
    if (this.fieldErrors.fkUserTypeId) {
      this.fieldErrors.fkUserTypeId = "";
    }
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.subUserTypeName?.trim()) {
      this.fieldErrors.subUserTypeName = "Sub User Type Name is required";
    }
    if (!this.model.fkUserTypeId) {
      this.fieldErrors.fkUserTypeId = "User Type is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    this.isSaving = true;
    const api$ = this.isEditMode ? this.subUserTypeService.updateSubUserType(this.model) : this.subUserTypeService.addSubUserType(this.model);
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
    this.\u0275fac = function SubUserTypeAddUpdateComponent_Factory(t) {
      return new (t || _SubUserTypeAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SubUserTypeService), \u0275\u0275directiveInject(UserTypeService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubUserTypeAddUpdateComponent, selectors: [["app-sub-usertype-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 14, consts: [[1, "w-full", "max-w-xl", "rounded-t-xl", "bg-[rgb(var(--light))]", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-5"], ["label", "User Type", "labelKey", "userTypeName", "valueKey", "userTypeId", "placeholder", "Select User Type", 3, "valueChange", "items", "required", "value", "error"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], ["class", "text-[11px] text-[rgb(var(--text-muted))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-muted"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "flex", "items-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40 border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "text-[11px]", "text-[rgb(var(--text-muted))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function SubUserTypeAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function SubUserTypeAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "yx-select", 6);
        \u0275\u0275twoWayListener("valueChange", function SubUserTypeAddUpdateComponent_Template_yx_select_valueChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.fkUserTypeId, $event) || (ctx.model.fkUserTypeId = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "label", 8);
        \u0275\u0275text(10, " Sub User Type Name ");
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function SubUserTypeAddUpdateComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.subUserTypeName, $event) || (ctx.model.subUserTypeName = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SubUserTypeAddUpdateComponent_Template_input_ngModelChange_13_listener() {
          return ctx.onNameChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, SubUserTypeAddUpdateComponent_p_14_Template, 2, 1, "p", 11)(15, SubUserTypeAddUpdateComponent_p_15_Template, 2, 0, "p", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 13)(17, "div")(18, "p", 14);
        \u0275\u0275text(19, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 15);
        \u0275\u0275text(21, "Inactive utilities cannot be used.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "mat-slide-toggle", 16);
        \u0275\u0275twoWayListener("ngModelChange", function SubUserTypeAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 17)(24, "button", 18);
        \u0275\u0275listener("click", function SubUserTypeAddUpdateComponent_Template_button_click_24_listener() {
          return ctx.close();
        });
        \u0275\u0275text(25, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 19);
        \u0275\u0275listener("click", function SubUserTypeAddUpdateComponent_Template_button_click_26_listener() {
          return ctx.save();
        });
        \u0275\u0275template(27, SubUserTypeAddUpdateComponent_span_27_Template, 1, 0, "span", 20);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Sub User Type" : "Add Sub User Type", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.userTypes)("required", true);
        \u0275\u0275twoWayProperty("value", ctx.model.fkUserTypeId);
        \u0275\u0275property("error", (tmp_4_0 = ctx.fieldErrors.fkUserTypeId) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.subUserTypeName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.subUserTypeName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.subUserTypeName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fieldErrors.subUserTypeName);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Sub User Type" : "Save Sub User Type", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle, YxSelectComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubUserTypeAddUpdateComponent, { className: "SubUserTypeAddUpdateComponent", filePath: "src\\app\\components\\management\\sub-user-type\\sub-user-type-add-update\\sub-user-type-add-update.component.ts", lineNumber: 21 });
})();

// src/app/components/management/sub-user-type/sub-user-type-hierarchy/sub-user-type-hierarchy.component.ts
var _c0 = (a0, a1) => ({ "cursor-not-allowed border-[rgb(var(--primary))] opacity-60": a0, "cursor-move border-[rgb(var(--default-border))]": a1 });
function SubUserTypeHierarchyComponent_div_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, " ROOT ");
    \u0275\u0275elementEnd();
  }
}
function SubUserTypeHierarchyComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275template(5, SubUserTypeHierarchyComponent_div_13_span_5_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const st_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275styleProp("margin-left", i_r2 * 20, "px");
    \u0275\u0275property("cdkDragDisabled", i_r2 === 0)("ngClass", \u0275\u0275pureFunction2(10, _c0, i_r2 === 0, i_r2 !== 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", i_r2 === 0 ? "text-[rgb(var(--primary))]" : "text-stone-600");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", st_r1.subUserTypeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r1.userTypeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", st_r1.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r1.isActive ? "Active" : "Inactive", " ");
  }
}
var SubUserTypeHierarchyComponent = class _SubUserTypeHierarchyComponent {
  constructor(dialogRef, data, dialog) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialog = dialog;
    this.subUserTypes = [];
  }
  ngOnInit() {
    this.subUserTypes = [...this.data];
    const rootIndex = this.subUserTypes.findIndex((s) => s.subUserTypeName === "Root");
    if (rootIndex > 0) {
      const [root] = this.subUserTypes.splice(rootIndex, 1);
      this.subUserTypes.unshift(root);
    }
  }
  drop(event) {
    if (event.previousIndex === 0 || event.currentIndex === 0) {
      return;
    }
    moveItemInArray(this.subUserTypes, event.previousIndex, event.currentIndex);
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Save Sub User Type Hierarchy",
        message: "You are about to update the sub user type hierarchy. Root will remain unchanged.",
        confirmText: "Save Hierarchy",
        cancelText: "Cancel",
        variant: "warning",
        showActions: true
      }
    });
    confirmRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      const payload = this.subUserTypes.map((st, index) => ({
        subUserTypeId: st.subUserTypeId,
        subUserTypeLevel: index
      }));
      this.dialogRef.close(payload);
    });
  }
  static {
    this.\u0275fac = function SubUserTypeHierarchyComponent_Factory(t) {
      return new (t || _SubUserTypeHierarchyComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubUserTypeHierarchyComponent, selectors: [["app-sub-user-type-hierarchy"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 1, consts: [[1, "w-full", "max-w-3xl", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-white/20", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-4"], [1, "text-sm", "text-[rgb(var(--default-text-color)]"], [1, "text-xs"], ["cdkDropList", "", 1, "rounded-lg", "border", "p-4", "bg-[rgb(var(--gray-50))]", "border-[rgb(var(--default-border))]", "space-y-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "flex items-center gap-3 rounded-md bg-[rgb(var(--light))] px-3 py-2\n               select-none border", 3, "cdkDragDisabled", "marginLeft", "ngClass", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "border", "border-[rgb(var(--gray-300))]", "hover:bg-[rgb(var(--gray-100))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"], ["cdkDrag", "", 1, "flex", "items-center", "gap-3", "rounded-md", "bg-[rgb(var(--light))]", "px-3", "py-2", "select-none", "border", 3, "cdkDragDisabled", "ngClass"], [1, "las", "la-grip-vertical", "text-lg", 3, "ngClass"], [1, "flex", "flex-col"], [1, "text-sm", "font-semibold", "text-indigo-600"], ["class", "ml-2 text-[10px] font-semibold text-[rgb(var(--primary))]", 4, "ngIf"], [1, "text-xs", "text-gray-500"], [1, "ml-auto", "text-xs", "px-2", "py-0.5", "rounded-full", 3, "ngClass"], [1, "ml-2", "text-[10px]", "font-semibold", "text-[rgb(var(--primary))]"]], template: function SubUserTypeHierarchyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, " Sub User Type Hierarchy ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function SubUserTypeHierarchyComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8, " Drag and reorder sub user types. ");
        \u0275\u0275element(9, "br");
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11, " Root always stays on top. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275listener("cdkDropListDropped", function SubUserTypeHierarchyComponent_Template_div_cdkDropListDropped_12_listener($event) {
          return ctx.drop($event);
        });
        \u0275\u0275template(13, SubUserTypeHierarchyComponent_div_13_Template, 10, 13, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
        \u0275\u0275listener("click", function SubUserTypeHierarchyComponent_Template_button_click_15_listener() {
          return ctx.close();
        });
        \u0275\u0275text(16, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275listener("click", function SubUserTypeHierarchyComponent_Template_button_click_17_listener() {
          return ctx.save();
        });
        \u0275\u0275text(18, " Save Hierarchy ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.subUserTypes);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DragDropModule, CdkDropList, CdkDrag], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubUserTypeHierarchyComponent, { className: "SubUserTypeHierarchyComponent", filePath: "src\\app\\components\\management\\sub-user-type\\sub-user-type-hierarchy\\sub-user-type-hierarchy.component.ts", lineNumber: 22 });
})();

// src/app/components/management/sub-user-type/sub-user-type.component.ts
function SubUserTypeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "div", 32);
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, " Loading sub user types... ");
    \u0275\u0275elementEnd()()();
  }
}
function SubUserTypeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div")(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "button", 40);
    \u0275\u0275listener("click", function SubUserTypeComponent_div_21_Template_button_click_10_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r2));
    });
    \u0275\u0275element(11, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function SubUserTypeComponent_div_21_Template_button_click_12_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r2.subUserTypeId));
    });
    \u0275\u0275element(13, "i", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r2.subUserTypeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r2.userTypeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", st_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function SubUserTypeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "p", 45);
    \u0275\u0275text(2, " No sub user types found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 46);
    \u0275\u0275text(4, " Try adjusting your search or add a new sub user type. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function SubUserTypeComponent_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addSubUserType());
    });
    \u0275\u0275element(6, "i", 48);
    \u0275\u0275text(7, " Add Sub User Type ");
    \u0275\u0275elementEnd()();
  }
}
function SubUserTypeComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49)(2, "div", 31);
    \u0275\u0275element(3, "div", 32);
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5, " Loading sub user types... ");
    \u0275\u0275elementEnd()()()();
  }
}
function SubUserTypeComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52)(4, "div", 53)(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 52)(10, "span", 38);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 56)(13, "div", 57)(14, "div", 58)(15, "button", 59);
    \u0275\u0275listener("click", function SubUserTypeComponent_tr_37_Template_button_click_15_listener() {
      const st_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r6));
    });
    \u0275\u0275element(16, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 60);
    \u0275\u0275text(18, " Edit Sub User Type ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 58)(20, "button", 61);
    \u0275\u0275listener("click", function SubUserTypeComponent_tr_37_Template_button_click_20_listener() {
      const st_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r6.subUserTypeId));
    });
    \u0275\u0275element(21, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 60);
    \u0275\u0275text(23, " Delete Sub User Type ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const st_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r7 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r6.subUserTypeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r6.userTypeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", st_r6.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r6.isActive ? "Active" : "Inactive", " ");
  }
}
function SubUserTypeComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, " No sub user types found ");
    \u0275\u0275elementEnd()();
  }
}
function SubUserTypeComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function SubUserTypeComponent_button_45_Template_button_click_0_listener() {
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
var SubUserTypeComponent = class _SubUserTypeComponent {
  constructor(_subUserTypeService, _toaster, dialog, _userService) {
    this._subUserTypeService = _subUserTypeService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.subUserTypes = [];
    this.filteredSubUserTypes = [];
  }
  /* =============================
   * INIT
   * ============================= */
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this._userService.user$;
      this.loadSubUserTypes(this.currentUser.userId);
    });
  }
  /* =============================
   * LOAD
   * ============================= */
  loadSubUserTypes(userId) {
    this.isLoading = true;
    this._subUserTypeService.getSubUserTypesByUserId(userId).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load sub user types");
          this.isLoading = false;
          return;
        }
        this.subUserTypes = res.data ?? [];
        this.filteredSubUserTypes = [...this.subUserTypes];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.subUserTypes = [];
        this.filteredSubUserTypes = [];
        this.isLoading = false;
        this._toaster.error("Failed to load sub user types");
      }
    });
  }
  /* =============================
   * PAGINATION
   * ============================= */
  get pagedSubUserTypes() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredSubUserTypes.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredSubUserTypes.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredSubUserTypes.length);
  }
  /* =============================
   * SEARCH
   * ============================= */
  searchSubUserTypes() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredSubUserTypes = !term ? [...this.subUserTypes] : this.subUserTypes.filter((st) => st.subUserTypeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* =============================
   * ADD
   * ============================= */
  addSubUserType() {
    const dialogRef = this.dialog.open(SubUserTypeAddUpdateComponent, {
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
        this.loadSubUserTypes(this.currentUser.userId);
      }
    });
  }
  /* =============================
   * EDIT
   * ============================= */
  edit(st) {
    const dialogRef = this.dialog.open(SubUserTypeAddUpdateComponent, {
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
        this.loadSubUserTypes(this.currentUser.userId);
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
        title: "Delete Sub User Type",
        message: "Deleting this sub user type will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._subUserTypeService.deleteSubUserType(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Sub User Type deleted");
            this.loadSubUserTypes(this.currentUser.userId);
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
  openHierarchy() {
    const dialogRef = this.dialog.open(SubUserTypeHierarchyComponent, {
      width: "720px",
      maxWidth: "90vw",
      disableClose: true,
      panelClass: "yx-enterprise-dialog",
      data: this.subUserTypes
    });
    dialogRef.afterClosed().subscribe((payload) => {
      if (!payload)
        return;
      this._subUserTypeService.updateSubUserTypeHierarchy(payload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Hierarchy updated successfully");
            this.loadSubUserTypes(this.currentUser.userId);
          } else {
            this._toaster.error(res.remarks || "Failed to update hierarchy");
          }
        },
        error: () => {
          this._toaster.error("Failed to update hierarchy");
        }
      });
    });
  }
  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredSubUserTypes.length) {
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
  static {
    this.\u0275fac = function SubUserTypeComponent_Factory(t) {
      return new (t || _SubUserTypeComponent)(\u0275\u0275directiveInject(SubUserTypeService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubUserTypeComponent, selectors: [["app-sub-user-type"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search sub user types...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "text-xs", "text-gray-500"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-400", "mt-1"], [1, "mt-4", "inline-flex", "items-center", "gap-2", "rounded-lg", "px-4", "py-2", "text-xs", "font-semibold", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--primary-700))]", 3, "click"], [1, "las", "la-plus-circle", "text-sm"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3"], [1, "flex", "flex-col"], [1, "font-semibold", "text-indigo-600"], [1, "text-xs", "text-[rgb(var(--primary))]"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "4", 1, "px-6", "py-16", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function SubUserTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Sub User Type Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage sub user roles linked with their respective user types. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function SubUserTypeComponent_Template_button_click_9_listener() {
          return ctx.addSubUserType();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Sub User Type ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "p", 10);
        \u0275\u0275text(15, " Total Sub User Types: ");
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SubUserTypeComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SubUserTypeComponent_Template_input_ngModelChange_18_listener() {
          return ctx.searchSubUserTypes();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275template(20, SubUserTypeComponent_div_20_Template, 5, 0, "div", 14)(21, SubUserTypeComponent_div_21_Template, 14, 4, "div", 15)(22, SubUserTypeComponent_div_22_Template, 8, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 17)(24, "table", 18)(25, "thead", 19)(26, "tr")(27, "th", 20);
        \u0275\u0275text(28, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 20);
        \u0275\u0275text(30, "Sub User Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 20);
        \u0275\u0275text(32, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 21);
        \u0275\u0275text(34, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "tbody", 22);
        \u0275\u0275template(36, SubUserTypeComponent_tr_36_Template, 6, 0, "tr", 23)(37, SubUserTypeComponent_tr_37_Template, 24, 5, "tr", 24)(38, SubUserTypeComponent_tr_38_Template, 3, 0, "tr", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 25)(40, "p", 26);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 27)(43, "button", 28);
        \u0275\u0275listener("click", function SubUserTypeComponent_Template_button_click_43_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(44, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, SubUserTypeComponent_button_45_Template, 2, 2, "button", 29);
        \u0275\u0275elementStart(46, "button", 28);
        \u0275\u0275listener("click", function SubUserTypeComponent_Template_button_click_46_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(47, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate1(" ", ctx.filteredSubUserTypes.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSubUserTypes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSubUserTypes.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSubUserTypes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSubUserTypes.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredSubUserTypes.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredSubUserTypes.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubUserTypeComponent, { className: "SubUserTypeComponent", filePath: "src\\app\\components\\management\\sub-user-type\\sub-user-type.component.ts", lineNumber: 22 });
})();
export {
  SubUserTypeComponent
};
//# sourceMappingURL=chunk-SKC6CEBK.js.map
