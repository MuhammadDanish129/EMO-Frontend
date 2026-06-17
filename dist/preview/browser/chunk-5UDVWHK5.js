import {
  SharedModule
} from "./chunk-FF7QN5R5.js";
import {
  BuildingService
} from "./chunk-YPK5LAZQ.js";
import {
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  MatSlideToggle
} from "./chunk-LVRCF6MZ.js";
import {
  MAT_DIALOG_DATA,
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
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R5AMMNLH.js";
import {
  __async,
  __spreadValues
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/building-management/building-management-add-update/building-management-add-update.component.ts
function BuildingManagementAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.buildingName, " ");
  }
}
function BuildingManagementAddUpdateComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
var BuildingManagementAddUpdateComponent = class _BuildingManagementAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, buildingService, toaster, _userService, data) {
    this.dialogRef = dialogRef;
    this.buildingService = buildingService;
    this.toaster = toaster;
    this._userService = _userService;
    this.data = data;
    this.isSaving = false;
    this.isLoadingUserTypes = false;
    this.currentUser = null;
    this.fieldErrors = {};
    this.model = {
      buildingName: "",
      fkFacility: "",
      isActive: true
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.data?.mode === "edit" && this.data.value) {
        this.model = __spreadValues({}, this.data.value);
      }
      this.currentUser = yield this._userService.user$;
      if (this.data?.facilityId) {
        this.model.fkFacility = this.data.facilityId;
        this.model.fkBusiness = this.currentUser?.fkBusiness;
      }
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
    if (this.fieldErrors.buildingName) {
      this.fieldErrors.buildingName = "";
    }
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.buildingName?.trim()) {
      this.fieldErrors.buildingName = "Building Name is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    console.log(this.model);
    this.isSaving = true;
    const api$ = this.isEditMode ? this.buildingService.updateBuilding(this.model) : this.buildingService.addBuilding(this.model);
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
    this.\u0275fac = function BuildingManagementAddUpdateComponent_Factory(t) {
      return new (t || _BuildingManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(BuildingService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingManagementAddUpdateComponent, selectors: [["app-building-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 9, consts: [[1, "w-full", "max-w-md", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-5"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-[rgb(var(--text-muted))]"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "flex", "items-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40 border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function BuildingManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function BuildingManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " Building Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function BuildingManagementAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.buildingName, $event) || (ctx.model.buildingName = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, BuildingManagementAddUpdateComponent_p_13_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div")(16, "p", 12);
        \u0275\u0275text(17, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 13);
        \u0275\u0275text(19, " Inactive buildings cannot be used. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-slide-toggle", 14);
        \u0275\u0275twoWayListener("ngModelChange", function BuildingManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 15)(22, "button", 16);
        \u0275\u0275listener("click", function BuildingManagementAddUpdateComponent_Template_button_click_22_listener() {
          return ctx.close();
        });
        \u0275\u0275text(23, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 17);
        \u0275\u0275listener("click", function BuildingManagementAddUpdateComponent_Template_button_click_24_listener() {
          return ctx.save();
        });
        \u0275\u0275template(25, BuildingManagementAddUpdateComponent_span_25_Template, 1, 0, "span", 18);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Building" : "Add Building", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.buildingName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.buildingName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.buildingName);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Building" : "Save Building", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SharedModule, MaterialModuleModule, MatSlideToggle] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingManagementAddUpdateComponent, { className: "BuildingManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\building-management\\building-management-add-update\\building-management-add-update.component.ts", lineNumber: 21 });
})();

export {
  BuildingManagementAddUpdateComponent
};
//# sourceMappingURL=chunk-5UDVWHK5.js.map
