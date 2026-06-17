import {
  DeviceService
} from "./chunk-7Q3O6SXW.js";
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

// src/app/components/core/device-management/device-management-add-update/device-management-add-update.component.ts
function DeviceManagementAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.deviceName, " ");
  }
}
function DeviceManagementAddUpdateComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.deviceMacAddress, " ");
  }
}
function DeviceManagementAddUpdateComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
var DeviceManagementAddUpdateComponent = class _DeviceManagementAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, deviceService, toaster, _userService, data) {
    this.dialogRef = dialogRef;
    this.deviceService = deviceService;
    this.toaster = toaster;
    this._userService = _userService;
    this.data = data;
    this.isSaving = false;
    this.isLoadingUserTypes = false;
    this.currentUser = null;
    this.fieldErrors = {};
    this.model = {
      deviceName: "",
      deviceMacAddress: "",
      fkBusiness: "",
      fkOffice: "",
      isActive: true
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.isEditMode && this.data.value) {
        this.model = __spreadValues({}, this.data.value);
      } else {
        this.model.fkOffice = this.data?.fkOffice || "";
        this.model.fkBusiness = this.data?.fkBusiness || "";
      }
    });
  }
  onNameChange() {
    if (this.fieldErrors.deviceName) {
      this.fieldErrors.deviceName = "";
    }
  }
  onAddressChange() {
    if (this.fieldErrors.deviceMacAddress) {
      this.fieldErrors.deviceMacAddress = "";
    }
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.deviceName?.trim()) {
      this.fieldErrors.deviceName = "Device Name is required";
    }
    if (!this.model.deviceMacAddress?.trim()) {
      this.fieldErrors.deviceMacAddress = "Mac Address is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    this.isSaving = true;
    const api$ = this.isEditMode ? this.deviceService.updateDevice(this.model) : this.deviceService.addDevice(this.model);
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
    this.\u0275fac = function DeviceManagementAddUpdateComponent_Factory(t) {
      return new (t || _DeviceManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(DeviceService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceManagementAddUpdateComponent, selectors: [["app-device-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 13, consts: [[1, "w-full", "max-w-md", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-5"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-[rgb(var(--text-muted))]"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "flex", "items-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40 border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function DeviceManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function DeviceManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " Device Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function DeviceManagementAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.deviceName, $event) || (ctx.model.deviceName = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, DeviceManagementAddUpdateComponent_p_13_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 7);
        \u0275\u0275text(16, " Mac Address ");
        \u0275\u0275elementStart(17, "span", 8);
        \u0275\u0275text(18, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function DeviceManagementAddUpdateComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.deviceMacAddress, $event) || (ctx.model.deviceMacAddress = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, DeviceManagementAddUpdateComponent_p_20_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "div")(23, "p", 12);
        \u0275\u0275text(24, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 13);
        \u0275\u0275text(26, " Inactive devices cannot be used. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-slide-toggle", 14);
        \u0275\u0275twoWayListener("ngModelChange", function DeviceManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 15)(29, "button", 16);
        \u0275\u0275listener("click", function DeviceManagementAddUpdateComponent_Template_button_click_29_listener() {
          return ctx.close();
        });
        \u0275\u0275text(30, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 17);
        \u0275\u0275listener("click", function DeviceManagementAddUpdateComponent_Template_button_click_31_listener() {
          return ctx.save();
        });
        \u0275\u0275template(32, DeviceManagementAddUpdateComponent_span_32_Template, 1, 0, "span", 18);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Device" : "Add Device", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.deviceName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.deviceName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.deviceName);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.deviceMacAddress);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.deviceMacAddress);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.deviceMacAddress);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Device" : "Save Device", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceManagementAddUpdateComponent, { className: "DeviceManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\device-management\\device-management-add-update\\device-management-add-update.component.ts", lineNumber: 20 });
})();

// src/app/components/core/device-management/device-management.component.ts
function DeviceManagementComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275element(2, "div", 44);
    \u0275\u0275elementStart(3, "p", 45);
    \u0275\u0275text(4, " Loading Devices... ");
    \u0275\u0275elementEnd()()();
  }
}
function DeviceManagementComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div")(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 51)(10, "button", 52);
    \u0275\u0275listener("click", function DeviceManagementComponent_div_52_Template_button_click_10_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSensors(st_r2.deviceId));
    });
    \u0275\u0275element(11, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 54);
    \u0275\u0275listener("click", function DeviceManagementComponent_div_52_Template_button_click_12_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r2));
    });
    \u0275\u0275element(13, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 56);
    \u0275\u0275listener("click", function DeviceManagementComponent_div_52_Template_button_click_14_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r2.deviceId));
    });
    \u0275\u0275element(15, "i", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r2.deviceName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r2.deviceMacAddress, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", st_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function DeviceManagementComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "p", 59);
    \u0275\u0275text(2, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275text(4, " Try adjusting your search or add a new device. ");
    \u0275\u0275elementEnd()();
  }
}
function DeviceManagementComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61)(2, "div", 43);
    \u0275\u0275element(3, "div", 44);
    \u0275\u0275elementStart(4, "p", 45);
    \u0275\u0275text(5, " Loading Devices... ");
    \u0275\u0275elementEnd()()()();
  }
}
function DeviceManagementComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 62)(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 64)(7, "span", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 64)(10, "span", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 66)(13, "div", 67)(14, "div", 68)(15, "button", 69);
    \u0275\u0275listener("click", function DeviceManagementComponent_tr_70_Template_button_click_15_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSensors(st_r5.deviceId));
    });
    \u0275\u0275element(16, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 70);
    \u0275\u0275text(18, " Manage Sensors ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 68)(20, "button", 71);
    \u0275\u0275listener("click", function DeviceManagementComponent_tr_70_Template_button_click_20_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r5));
    });
    \u0275\u0275element(21, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 70);
    \u0275\u0275text(23, " Edit Device ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 68)(25, "button", 72);
    \u0275\u0275listener("click", function DeviceManagementComponent_tr_70_Template_button_click_25_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r5.deviceId));
    });
    \u0275\u0275element(26, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 70);
    \u0275\u0275text(28, " Delete Device ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const st_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", st_r5.deviceName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", st_r5.deviceMacAddress, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", st_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function DeviceManagementComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 73)(2, "p", 59);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 60);
    \u0275\u0275text(5, " Try adjusting search or create a new device. ");
    \u0275\u0275elementEnd()()();
  }
}
function DeviceManagementComponent_button_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function DeviceManagementComponent_button_78_Template_button_click_0_listener() {
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
var DeviceManagementComponent = class _DeviceManagementComponent {
  constructor(_deviceService, _toaster, dialog, _userService, router) {
    this._deviceService = _deviceService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Devices = [];
    this.filteredDevices = [];
  }
  /* =============================
   * INIT
   * ============================= */
  ngOnInit() {
    return __async(this, null, function* () {
      const nav = history.state;
      this.fkFloor = nav.fkFloor || nav.fkFloor;
      this.fkBuilding = nav.fkBuilding;
      this.fkFacility = nav.fkFacility;
      this.fkBusiness = nav.fkBusiness;
      this.fkSection = nav.fkSection;
      this.fkOffice = nav.fkOffice;
      this.currentUser = yield this._userService.user$;
      this.loadDevices(this.fkOffice);
    });
  }
  /* =============================
   * LOAD
   * ============================= */
  loadDevices(fkOffice) {
    this.isLoading = true;
    const OfficeId = fkOffice || this.currentUser?.fkBusiness;
    this._deviceService.getDeviceByOfficeId(OfficeId).subscribe({
      next: (res) => {
        if (!res.success) {
          this._toaster.error(res.remarks || "Failed to load devices");
          this.filteredDevices = res.data ?? [];
          this.isLoading = false;
          return;
        }
        this.Devices = res.data ?? [];
        this.filteredDevices = [...this.Devices];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Devices = [];
        this.filteredDevices = [];
        this.isLoading = false;
        this._toaster.error("Failed to load devices");
      }
    });
  }
  /* =============================
   * PAGINATION
   * ============================= */
  get pagedDevices() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredDevices.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredDevices.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredDevices.length);
  }
  /* =============================
   * SEARCH
   * ============================= */
  searchDevices() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredDevices = !term ? [...this.Devices] : this.Devices.filter((d) => d.deviceName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* =============================
   * ADD
   * ============================= */
  addDevice() {
    const dialogRef = this.dialog.open(DeviceManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add",
        fkOffice: this.fkOffice,
        fkBusiness: this.currentUser.fkBusiness
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadDevices(this.fkOffice);
      }
    });
  }
  /* =============================
   * EDIT
   * ============================= */
  edit(device) {
    const dialogRef = this.dialog.open(DeviceManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "edit",
        value: device
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadDevices(this.currentUser.fkBusiness);
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
        title: "Delete Device",
        message: "Deleting this Device will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this._deviceService.deleteDevice(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Device deleted");
            this.loadDevices();
          } else {
            this._toaster.error(res.remarks || "Delete failed");
            this.isLoading = false;
          }
        },
        error: () => {
          this._toaster.error("Delete failed");
          this.isLoading = false;
        }
      });
    });
  }
  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredDevices.length) {
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
  goToOffice() {
    this.router.navigate(["/core/office-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection
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
  goToSensors(id) {
    this.router.navigate(["/core/sensor-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: this.fkOffice,
        fkDevice: id
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
    this.\u0275fac = function DeviceManagementComponent_Factory(t) {
      return new (t || _DeviceManagementComponent)(\u0275\u0275directiveInject(DeviceService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceManagementComponent, selectors: [["app-device-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 81, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-building", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "las", "la-city", "text-sm", "sm:text-base"], [1, "las", "la-layer-group", "text-sm", "sm:text-base"], [1, "las", "la-sitemap", "text-sm", "sm:text-base"], [1, "las", "la-briefcase", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-broadcast-tower", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search Devices..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "font-medium", "text-[11px]", "text-[rgb(var(--primary))]"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-microchip", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3"], [1, "font-semibold", "text-indigo-600"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function DeviceManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Device Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage Devices linked with their respective Office. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_9_listener() {
          return ctx.addDevice();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Device ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "button", 10);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility();
        });
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_19_listener() {
          return ctx.goToBuilding();
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementStart(24, "button", 10);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_24_listener() {
          return ctx.goToFloor(ctx.fkBuilding);
        });
        \u0275\u0275element(25, "i", 15);
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Floor");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "i", 13);
        \u0275\u0275elementStart(29, "button", 10);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_29_listener() {
          return ctx.goToSection();
        });
        \u0275\u0275element(30, "i", 16);
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "Section");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "i", 13);
        \u0275\u0275elementStart(34, "button", 10);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_34_listener() {
          return ctx.goToOffice();
        });
        \u0275\u0275element(35, "i", 17);
        \u0275\u0275elementStart(36, "span", 12);
        \u0275\u0275text(37, "Office");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "i", 13);
        \u0275\u0275elementStart(39, "span", 18);
        \u0275\u0275element(40, "i", 19);
        \u0275\u0275elementStart(41, "span", 12);
        \u0275\u0275text(42, "Devices");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 20)(44, "div", 21)(45, "p", 22);
        \u0275\u0275text(46, " Total Devices: ");
        \u0275\u0275elementStart(47, "span", 23);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function DeviceManagementComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function DeviceManagementComponent_Template_input_ngModelChange_49_listener() {
          return ctx.searchDevices();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 25);
        \u0275\u0275template(51, DeviceManagementComponent_div_51_Template, 5, 0, "div", 26)(52, DeviceManagementComponent_div_52_Template, 16, 4, "div", 27)(53, DeviceManagementComponent_div_53_Template, 5, 0, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 29)(55, "table", 30)(56, "thead", 31)(57, "tr")(58, "th", 32);
        \u0275\u0275text(59, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th", 32);
        \u0275\u0275text(61, "Devices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th", 32);
        \u0275\u0275text(63, "Mac Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th", 32);
        \u0275\u0275text(65, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 33);
        \u0275\u0275text(67, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "tbody", 34);
        \u0275\u0275template(69, DeviceManagementComponent_tr_69_Template, 6, 0, "tr", 35)(70, DeviceManagementComponent_tr_70_Template, 29, 5, "tr", 36)(71, DeviceManagementComponent_tr_71_Template, 6, 0, "tr", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 37)(73, "p", 38);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 39)(76, "button", 40);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_76_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(77, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(78, DeviceManagementComponent_button_78_Template, 2, 2, "button", 41);
        \u0275\u0275elementStart(79, "button", 40);
        \u0275\u0275listener("click", function DeviceManagementComponent_Template_button_click_79_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(80, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(48);
        \u0275\u0275textInterpolate1(" ", ctx.filteredDevices.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedDevices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedDevices.length === 0);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedDevices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedDevices.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredDevices.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredDevices.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MaterialModuleModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceManagementComponent, { className: "DeviceManagementComponent", filePath: "src\\app\\components\\core\\device-management\\device-management.component.ts", lineNumber: 22 });
})();
export {
  DeviceManagementComponent
};
//# sourceMappingURL=chunk-PCU2P7N5.js.map
