import {
  ConfirmDialogComponent
} from "./chunk-JSCBWFFG.js";
import {
  SharedModule
} from "./chunk-7IPU3MFX.js";
import "./chunk-WXP2OXZD.js";
import "./chunk-7CRJAVD7.js";
import {
  OfficeService
} from "./chunk-ZKTKUHMD.js";
import "./chunk-ULHVIHAW.js";
import {
  MaterialModuleModule
} from "./chunk-7LK7NDKG.js";
import "./chunk-K2JMPSHA.js";
import "./chunk-6MZ7UVS4.js";
import "./chunk-AZ553IHQ.js";
import {
  MatSlideToggle
} from "./chunk-3ZFR3IJH.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-V53V3TUK.js";
import "./chunk-JJOWJPDK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7CONLPWZ.js";
import {
  UserService
} from "./chunk-WHOMYXFN.js";
import {
  ToastrService
} from "./chunk-SFDR4GMF.js";
import {
  Router
} from "./chunk-5DAVUJF5.js";
import "./chunk-EQ2Y7ZIZ.js";
import "./chunk-LJGINEDX.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AVLIJGNB.js";
import "./chunk-QURSFKIH.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y6Q6HMFU.js";

// src/app/components/core/office-management/office-management-add-update/office-management-add-update.component.ts
var _c0 = (a0, a1) => ({ "border-[rgb(var(--danger))]": a0, "border-[rgb(var(--gray-200))]": a1 });
function OfficeManagementAddUpdateComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.officeName, " ");
  }
}
function OfficeManagementAddUpdateComponent_div_27_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.openingTime, " ");
  }
}
function OfficeManagementAddUpdateComponent_div_27_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.closingTime, " ");
  }
}
function OfficeManagementAddUpdateComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3, " Opening Time ");
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_div_27_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.openingTime, $event) || (ctx_r0.model.openingTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, OfficeManagementAddUpdateComponent_div_27_p_7_Template, 2, 1, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "label", 9);
    \u0275\u0275text(10, " Closing Time ");
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_div_27_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.closingTime, $event) || (ctx_r0.model.closingTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, OfficeManagementAddUpdateComponent_div_27_p_14_Template, 2, 1, "p", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r0.fieldErrors.openingTime);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.openingTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors.openingTime);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r0.fieldErrors.closingTime);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.closingTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors.closingTime);
  }
}
function OfficeManagementAddUpdateComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " Open from 00:00 to 23:59 ");
    \u0275\u0275elementEnd();
  }
}
function OfficeManagementAddUpdateComponent_label_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 29)(1, "input", 30);
    \u0275\u0275listener("change", function OfficeManagementAddUpdateComponent_label_35_Template_input_change_1_listener($event) {
      const day_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleDay(day_r4, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.isDaySelected(day_r4) ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary-100))] text-[rgb(var(--primary))]" : "border-[rgb(var(--gray-200))] text-muted hover:border-[rgb(var(--primary-300))]");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isDaySelected(day_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r4);
  }
}
function OfficeManagementAddUpdateComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.workingDays, " ");
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
    this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.selectedDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    this.fieldErrors = {};
    this.model = {
      officeName: "",
      fkSection: "",
      isActive: true,
      isOcuppied: false,
      openingTime: "09:00",
      closingTime: "18:00",
      workingDays: "Monday,Tuesday,Wednesday,Thursday,Friday",
      is24Hours: false,
      afterHoursAlertEnabled: true
    };
  }
  /* ================= INIT ================= */
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.data?.mode === "edit" && this.data.value) {
        this.model = __spreadProps(__spreadValues(__spreadValues({}, this.model), this.data.value), {
          openingTime: this.data.value.openingTime || "09:00",
          closingTime: this.data.value.closingTime || "18:00",
          workingDays: this.data.value.workingDays || "Monday,Tuesday,Wednesday,Thursday,Friday",
          is24Hours: this.data.value.is24Hours ?? false,
          afterHoursAlertEnabled: this.data.value.afterHoursAlertEnabled ?? true
        });
        this.selectedDays = this.model.workingDays ? this.model.workingDays.split(",").map((x) => x.trim()).filter(Boolean) : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
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
  isDaySelected(day) {
    return this.selectedDays.includes(day);
  }
  toggleDay(day, checked) {
    if (checked) {
      if (!this.selectedDays.includes(day)) {
        this.selectedDays.push(day);
      }
    } else {
      this.selectedDays = this.selectedDays.filter((x) => x !== day);
    }
    this.model.workingDays = this.selectedDays.join(",");
    if (this.fieldErrors.workingDays) {
      this.fieldErrors.workingDays = "";
    }
  }
  on24HoursChange() {
    if (this.model.is24Hours) {
      this.model.openingTime = "00:00";
      this.model.closingTime = "23:59";
    } else {
      this.model.openingTime = "09:00";
      this.model.closingTime = "18:00";
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
    if (!this.model.is24Hours) {
      if (!this.model.openingTime) {
        this.fieldErrors.openingTime = "Opening time is required";
      }
      if (!this.model.closingTime) {
        this.fieldErrors.closingTime = "Closing time is required";
      }
    }
    if (!this.selectedDays.length) {
      this.fieldErrors.workingDays = "Select at least one working day";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    this.model.workingDays = this.selectedDays.join(",");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfficeManagementAddUpdateComponent, selectors: [["app-office-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 26, consts: [[1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times"], [1, "office-dialog-body", "px-6", "py-2", "overflow-y-auto", "space-y-3"], [1, "rounded-lg", "p-5", "space-y-4", "border", 3, "ngClass"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide", "text-muted"], [1, "yx-field"], [1, "yx-label"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", "placeholder", "Enter office name", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["class", "text-xs mt-1 text-[rgb(var(--danger))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "text-[rgb(var(--primary))]", "font-medium"], [1, "text-xs", "text-muted"], ["color", "primary", 3, "ngModelChange", "change", "ngModel"], ["class", "grid grid-cols-1 sm:grid-cols-2 gap-4", 4, "ngIf"], ["class", "rounded-lg border border-[rgb(var(--primary-200))] bg-[rgb(var(--primary-100))] px-4 py-3 text-sm font-medium text-[rgb(var(--primary))]", 4, "ngIf"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-2"], ["class", "flex h-9 cursor-pointer select-none items-center justify-center rounded-lg border px-3 text-center text-xs font-semibold transition", 3, "ngClass", 4, "ngFor", "ngForOf"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "px-6", "py-4", "border-t", "bg-[rgb(var(--light))]"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-[rgb(var(--red-500))]", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "disabled:opacity-60", 3, "click", "disabled"], [1, "text-xs", "mt-1", "text-[rgb(var(--danger))]"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["type", "time", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], [1, "rounded-lg", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--primary-100))]", "px-4", "py-3", "text-sm", "font-medium", "text-[rgb(var(--primary))]"], [1, "flex", "h-9", "cursor-pointer", "select-none", "items-center", "justify-center", "rounded-lg", "border", "px-3", "text-center", "text-xs", "font-semibold", "transition", 3, "ngClass"], ["type", "checkbox", 1, "sr-only", 3, "change", "checked"], [1, "block", "truncate"]], template: function OfficeManagementAddUpdateComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "p", 7);
        \u0275\u0275text(9, " Office Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, " Office Name ");
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.officeName, $event) || (ctx.model.officeName = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OfficeManagementAddUpdateComponent_Template_input_ngModelChange_15_listener() {
          return ctx.onNameChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, OfficeManagementAddUpdateComponent_p_16_Template, 2, 1, "p", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 6)(18, "p", 7);
        \u0275\u0275text(19, " Schedule ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "div")(22, "p", 14);
        \u0275\u0275text(23, "24 Hours Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 15);
        \u0275\u0275text(25, "Use full-day timing for this office");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "mat-slide-toggle", 16);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.is24Hours, $event) || (ctx.model.is24Hours = $event);
          return $event;
        });
        \u0275\u0275listener("change", function OfficeManagementAddUpdateComponent_Template_mat_slide_toggle_change_26_listener() {
          return ctx.on24HoursChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, OfficeManagementAddUpdateComponent_div_27_Template, 15, 8, "div", 17)(28, OfficeManagementAddUpdateComponent_div_28_Template, 2, 0, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 6)(30, "p", 7);
        \u0275\u0275text(31, " Working Days ");
        \u0275\u0275elementStart(32, "span", 10);
        \u0275\u0275text(33, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 19);
        \u0275\u0275template(35, OfficeManagementAddUpdateComponent_label_35_Template, 4, 3, "label", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, OfficeManagementAddUpdateComponent_p_36_Template, 2, 1, "p", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 13)(38, "div")(39, "p", 14);
        \u0275\u0275text(40, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 15);
        \u0275\u0275text(42, "Inactive offices cannot be assigned");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "mat-slide-toggle", 21);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 13)(45, "div")(46, "p", 14);
        \u0275\u0275text(47, "After-Hours Alert");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 15);
        \u0275\u0275text(49, "Track energy use outside office hours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "mat-slide-toggle", 21);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.afterHoursAlertEnabled, $event) || (ctx.model.afterHoursAlertEnabled = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 22)(52, "button", 23);
        \u0275\u0275listener("click", function OfficeManagementAddUpdateComponent_Template_button_click_52_listener() {
          return ctx.close();
        });
        \u0275\u0275text(53, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 24);
        \u0275\u0275listener("click", function OfficeManagementAddUpdateComponent_Template_button_click_54_listener() {
          return ctx.save();
        });
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Office" : "Add Office", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c0, ctx.fieldErrors.officeName, !ctx.fieldErrors.officeName));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx.fieldErrors.officeName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.officeName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.officeName);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(20, _c0, ctx.fieldErrors.openingTime || ctx.fieldErrors.closingTime, !(ctx.fieldErrors.openingTime || ctx.fieldErrors.closingTime)));
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.is24Hours);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.model.is24Hours);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.model.is24Hours);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c0, ctx.fieldErrors.workingDays, !ctx.fieldErrors.workingDays));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.days);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.workingDays);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.afterHoursAlertEnabled);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Office" : "Save Office", " ");
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
      SharedModule,
      MaterialModuleModule,
      MatSlideToggle
    ], styles: ["\n\n.office-dialog-body[_ngcontent-%COMP%] {\n  overscroll-behavior: contain;\n  scrollbar-gutter: stable;\n}\n.office-dialog-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.45rem;\n}\n.office-dialog-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: rgb(var(--gray-300));\n}\n@media (max-height: 700px) {\n  .office-dialog-body[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=office-management-add-update.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfficeManagementAddUpdateComponent, { className: "OfficeManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\office-management\\office-management-add-update\\office-management-add-update.component.ts", lineNumber: 29 });
})();

// src/app/components/core/office-management/office-management.component.ts
function OfficeManagementComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275element(2, "div", 44);
    \u0275\u0275elementStart(3, "p", 37);
    \u0275\u0275text(4, "Loading Offices...");
    \u0275\u0275elementEnd()()();
  }
}
function OfficeManagementComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "div", 48)(4, "div", 49)(5, "div", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 52)(10, "span", 53);
    \u0275\u0275element(11, "i");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 53);
    \u0275\u0275element(14, "i");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 54)(17, "div", 55)(18, "span", 56);
    \u0275\u0275text(19, "Working hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong", 57);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 58);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_47_Template_button_click_22_listener($event) {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openWorkingDays(o_r2, $event));
    });
    \u0275\u0275elementStart(23, "span", 59);
    \u0275\u0275text(24, "Working days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong", 60);
    \u0275\u0275text(26);
    \u0275\u0275element(27, "i", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 62)(29, "button", 63);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_47_Template_button_click_29_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToDevice(o_r2.officeId));
    });
    \u0275\u0275element(30, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 65);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_47_Template_button_click_31_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(o_r2));
    });
    \u0275\u0275element(32, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 67);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_47_Template_button_click_33_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(o_r2.officeId));
    });
    \u0275\u0275element(34, "i", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", o_r2.officeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", o_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r2.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", o_r2.isOcuppied ? "bg-[rgb(var(--red-100))] text-[rgb(var(--red-600))]" : "bg-[rgb(var(--success-100))] text-[rgb(var(--success-700))]");
    \u0275\u0275advance();
    \u0275\u0275classMap(o_r2.isOcuppied ? "ri-lock-line" : "ri-checkbox-circle-line");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r2.isOcuppied ? "Occupied" : "Available", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", o_r2.afterHoursAlertEnabled ? "bg-[rgb(var(--success-100))] text-[rgb(var(--success-700))]" : "bg-[rgb(var(--gray-200))] text-[rgb(var(--gray-600))]");
    \u0275\u0275advance();
    \u0275\u0275classMap(o_r2.afterHoursAlertEnabled ? "ri-notification-3-line" : "ri-notification-off-line");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Alerts ", o_r2.afterHoursAlertEnabled ? "On" : "Off", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", o_r2.is24Hours ? "24 Hours" : o_r2.openingTime + " - " + o_r2.closingTime, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getWorkingDaysSummary(o_r2.workingDays), " ");
  }
}
function OfficeManagementComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p", 70);
    \u0275\u0275text(2, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 71);
    \u0275\u0275text(4, "Try adjusting search or add a new office.");
    \u0275\u0275elementEnd()();
  }
}
function OfficeManagementComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72);
    \u0275\u0275text(2, "Loading Offices...");
    \u0275\u0275elementEnd()();
  }
}
function OfficeManagementComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 73)(1, "td", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 77)(8, "button", 78);
    \u0275\u0275listener("click", function OfficeManagementComponent_tr_71_Template_button_click_8_listener($event) {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openWorkingDays(o_r5, $event));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 77)(11, "span", 79);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 77)(14, "span", 79);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 77)(17, "span", 79);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 80)(20, "div", 81)(21, "div", 82)(22, "button", 83);
    \u0275\u0275listener("click", function OfficeManagementComponent_tr_71_Template_button_click_22_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToDevice(o_r5.officeId));
    });
    \u0275\u0275element(23, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 85);
    \u0275\u0275text(25, " Manage Devices ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 82)(27, "button", 86);
    \u0275\u0275listener("click", function OfficeManagementComponent_tr_71_Template_button_click_27_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(o_r5));
    });
    \u0275\u0275element(28, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 85);
    \u0275\u0275text(30, " Edit Office ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 82)(32, "button", 88);
    \u0275\u0275listener("click", function OfficeManagementComponent_tr_71_Template_button_click_32_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(o_r5.officeId));
    });
    \u0275\u0275element(33, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 85);
    \u0275\u0275text(35, " Delete Office ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.officeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r5.is24Hours ? "24 Hours" : o_r5.openingTime + " - " + o_r5.closingTime, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getWorkingDaysSummary(o_r5.workingDays), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", o_r5.afterHoursAlertEnabled ? "bg-[rgb(var(--success-100))] text-[rgb(var(--success-700))]" : "bg-[rgb(var(--gray-200))] text-[rgb(var(--gray-600))]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r5.afterHoursAlertEnabled ? "Enabled" : "Disabled", " ");
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
function OfficeManagementComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 90)(2, "p", 70);
    \u0275\u0275text(3, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "Try adjusting search or create a new Office.");
    \u0275\u0275elementEnd()()();
  }
}
function OfficeManagementComponent_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function OfficeManagementComponent_button_79_Template_button_click_0_listener() {
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
function OfficeManagementComponent_div_82_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r10, " ");
  }
}
function OfficeManagementComponent_div_82_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275template(1, OfficeManagementComponent_div_82_div_16_span_1_Template, 2, 1, "span", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getWorkingDays(ctx_r2.selectedWorkingDaysOffice.workingDays));
  }
}
function OfficeManagementComponent_div_82_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275elementStart(2, "p", 111);
    \u0275\u0275text(3, " No working days configured. ");
    \u0275\u0275elementEnd()();
  }
}
function OfficeManagementComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_82_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeWorkingDays());
    });
    \u0275\u0275elementStart(1, "div", 93);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_82_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 94)(3, "div", 49)(4, "span", 95);
    \u0275\u0275text(5, " Working Days ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 96);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 97);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_82_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeWorkingDays());
    });
    \u0275\u0275element(9, "i", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 99)(11, "div", 100)(12, "p", 101);
    \u0275\u0275text(13, " Selected schedule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 102);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, OfficeManagementComponent_div_82_div_16_Template, 2, 1, "div", 103)(17, OfficeManagementComponent_div_82_ng_template_17_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(19, "div", 104)(20, "button", 105);
    \u0275\u0275listener("click", function OfficeManagementComponent_div_82_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeWorkingDays());
    });
    \u0275\u0275text(21, " Done ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const noWorkingDays_r11 = \u0275\u0275reference(18);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedWorkingDaysOffice.officeName, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getWorkingDaysSummary(ctx_r2.selectedWorkingDaysOffice.workingDays), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getWorkingDays(ctx_r2.selectedWorkingDaysOffice.workingDays).length)("ngIfElse", noWorkingDays_r11);
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
    this.selectedWorkingDaysOffice = null;
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
  /* ================= WORKING DAYS DISPLAY ================= */
  getWorkingDays(days) {
    return (days ?? "").split(",").map((day) => day.trim()).filter(Boolean);
  }
  getWorkingDaysSummary(days) {
    const count = this.getWorkingDays(days).length;
    if (!count)
      return "No days";
    return `${count} ${count === 1 ? "day" : "days"}`;
  }
  openWorkingDays(o, event) {
    event?.stopPropagation();
    this.selectedWorkingDaysOffice = o;
  }
  closeWorkingDays() {
    this.selectedWorkingDaysOffice = null;
  }
  /* ================= ADD ================= */
  addOffice() {
    const dialogRef = this.dialog.open(OfficeManagementAddUpdateComponent, {
      width: "720px",
      maxWidth: "95vw",
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
      width: "720px",
      maxWidth: "95vw",
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfficeManagementComponent, selectors: [["app-office-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 83, vars: 15, consts: [["noWorkingDays", ""], [1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "ri-door-open-line", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "ri-community-line", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "ri-building-4-line", "text-sm", "sm:text-base"], [1, "ri-stack-line", "text-sm", "sm:text-base"], [1, "ri-layout-grid-line", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "ri-door-open-line", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold"], ["type", "text", "placeholder", "Search Offices..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "working-days-overlay fixed inset-0 z-[1000] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "gap-3"], [1, "min-w-0", "flex-1"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "min-w-0"], [1, "truncate", "text-sm", "font-semibold", "text-indigo-600"], [1, "flex-shrink-0", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-2.5", "py-1", "text-[11px]", "font-semibold", 3, "ngClass"], [1, "mt-4", "grid", "grid-cols-1", "gap-2", "text-xs", "sm:grid-cols-2"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "bg-[rgb(var(--gray-50))]", "px-3", "py-2"], [1, "block", "text-[11px]", "font-medium", "text-gray-500"], [1, "mt-1", "block", "break-words", "text-[rgb(var(--dark))]"], ["type", "button", 1, "rounded-lg", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--primary-100))]", "px-3", "py-2", "text-left", 3, "click"], [1, "block", "text-[11px]", "font-medium", "text-[rgb(var(--primary))]"], [1, "mt-1", "flex", "items-center", "justify-between", "gap-2", "text-[rgb(var(--primary))]"], [1, "las", "la-angle-right", "text-xs"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-broadcast-tower", "text-lg", "leading-none"], [1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg", "leading-none"], [1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg", "leading-none"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "8", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3", "text-sm"], [1, "px-4", "py-3"], ["type", "button", 1, "inline-flex", "min-w-[76px]", "items-center", "justify-center", "rounded-full", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--primary-100))]", "px-3", "py-1", "text-xs", "font-semibold", "text-[rgb(var(--primary))]", "transition", "hover:bg-[rgb(var(--primary-200))]", 3, "click"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "las", "la-broadcast-tower", "text-lg"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], [1, "las", "la-trash", "text-lg"], ["colspan", "8", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"], [1, "working-days-overlay", "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "bg-black/45", "px-4", "py-6", "backdrop-blur-sm", 3, "click"], [1, "working-days-popup", "w-full", "max-w-md", "overflow-hidden", "border", "border-white/20", "bg-[rgb(var(--light))]", "shadow-2xl", 3, "click"], [1, "working-days-popup-header", "flex", "items-center", "justify-between", "gap-3", "bg-[rgb(var(--primary))]", "px-6", "py-3"], [1, "text-sm", "font-semibold", "text-white"], [1, "mt-0.5", "truncate", "text-xs", "text-white/75"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "working-days-popup-body", "space-y-4", "px-5", "py-5"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "px-4", "py-3"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-[rgb(var(--primary))]"], [1, "mt-1", "text-sm", "font-semibold", "text-[rgb(var(--dark))]"], ["class", "grid grid-cols-2 gap-2 sm:grid-cols-3", 4, "ngIf", "ngIfElse"], [1, "flex", "justify-end", "border-t", "border-[rgb(var(--gray-200))]", "pt-4"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"], [1, "grid", "grid-cols-2", "gap-2", "sm:grid-cols-3"], ["class", "inline-flex min-h-10 items-center justify-center rounded-xl border border-[rgb(var(--primary-200))] bg-dark px-3 py-2 text-center text-xs font-semibold text-[rgb(var(--primary))] shadow-sm", 4, "ngFor", "ngForOf"], [1, "inline-flex", "min-h-10", "items-center", "justify-center", "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-dark", "px-3", "py-2", "text-center", "text-xs", "font-semibold", "text-[rgb(var(--primary))]", "shadow-sm"], [1, "rounded-xl", "border", "border-[rgb(var(--gray-200))]", "bg-[rgb(var(--gray-50))]", "px-4", "py-6", "text-center"], [1, "las", "la-calendar-times", "text-2xl", "text-gray-400"], [1, "mt-2", "text-xs", "font-semibold", "text-muted"]], template: function OfficeManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div")(4, "h1", 4);
        \u0275\u0275text(5, " Office Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, " Manage offices linked with selected section and define office hours for after-hours energy alerts. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_9_listener() {
          return ctx.addOffice();
        });
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275text(11, " Add Office ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 9)(13, "nav", 10)(14, "button", 11);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility();
        });
        \u0275\u0275element(15, "i", 12);
        \u0275\u0275elementStart(16, "span", 13);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 14);
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_19_listener() {
          return ctx.goToBuilding();
        });
        \u0275\u0275element(20, "i", 15);
        \u0275\u0275elementStart(21, "span", 13);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "i", 14);
        \u0275\u0275elementStart(24, "button", 11);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_24_listener() {
          return ctx.goToFloor(ctx.fkBuilding);
        });
        \u0275\u0275element(25, "i", 16);
        \u0275\u0275elementStart(26, "span", 13);
        \u0275\u0275text(27, "Floor");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "i", 14);
        \u0275\u0275elementStart(29, "button", 11);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_29_listener() {
          return ctx.goToSection();
        });
        \u0275\u0275element(30, "i", 17);
        \u0275\u0275elementStart(31, "span", 13);
        \u0275\u0275text(32, "Section");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "i", 14);
        \u0275\u0275elementStart(34, "span", 18);
        \u0275\u0275element(35, "i", 19);
        \u0275\u0275elementStart(36, "span", 13);
        \u0275\u0275text(37, "Office");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 20)(39, "div", 21)(40, "p", 22);
        \u0275\u0275text(41, " Total Offices: ");
        \u0275\u0275elementStart(42, "span", 23);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function OfficeManagementComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function OfficeManagementComponent_Template_input_ngModelChange_44_listener() {
          return ctx.searchOffices();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 25);
        \u0275\u0275template(46, OfficeManagementComponent_div_46_Template, 5, 0, "div", 26)(47, OfficeManagementComponent_div_47_Template, 35, 13, "div", 27)(48, OfficeManagementComponent_div_48_Template, 5, 0, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 29)(50, "table", 30)(51, "thead", 31)(52, "tr")(53, "th", 32);
        \u0275\u0275text(54, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th", 32);
        \u0275\u0275text(56, "Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th", 32);
        \u0275\u0275text(58, "Working Hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th", 32);
        \u0275\u0275text(60, "Working Days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th", 32);
        \u0275\u0275text(62, "Alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th", 32);
        \u0275\u0275text(64, "Occupied");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th", 32);
        \u0275\u0275text(66, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "th", 33);
        \u0275\u0275text(68, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "tbody");
        \u0275\u0275template(70, OfficeManagementComponent_tr_70_Template, 3, 0, "tr", 34)(71, OfficeManagementComponent_tr_71_Template, 36, 10, "tr", 35)(72, OfficeManagementComponent_tr_72_Template, 6, 0, "tr", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 36)(74, "p", 37);
        \u0275\u0275text(75);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 38)(77, "button", 39);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_77_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(78, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(79, OfficeManagementComponent_button_79_Template, 2, 2, "button", 40);
        \u0275\u0275elementStart(80, "button", 39);
        \u0275\u0275listener("click", function OfficeManagementComponent_Template_button_click_80_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(81, " Next ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(82, OfficeManagementComponent_div_82_Template, 22, 4, "div", 41);
      }
      if (rf & 2) {
        \u0275\u0275advance(43);
        \u0275\u0275textInterpolate(ctx.filteredOffices.length);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedOffices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedOffices.length === 0);
        \u0275\u0275advance(22);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedOffices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedOffices.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.filteredOffices.length ? ctx.pageIndex * ctx.pageSize + 1 : 0, " - ", ctx.pageEnd, " of ", ctx.filteredOffices.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredOffices.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedWorkingDaysOffice);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MaterialModuleModule], styles: ["\n\n.working-days-popup[_ngcontent-%COMP%] {\n  border-radius: 0.75rem !important;\n  overflow: hidden;\n  transform: translateZ(0);\n}\n.working-days-popup-header[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.working-days-popup-body[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n/*# sourceMappingURL=office-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfficeManagementComponent, { className: "OfficeManagementComponent", filePath: "src\\app\\components\\core\\office-management\\office-management.component.ts", lineNumber: 24 });
})();
export {
  OfficeManagementComponent
};
//# sourceMappingURL=chunk-LTOHJINN.js.map
