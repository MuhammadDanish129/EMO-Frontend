import {
  UtilityService
} from "./chunk-ICNXWK7H.js";
import {
  OfficeService
} from "./chunk-OZNEKJTU.js";
import {
  DeviceService
} from "./chunk-7Q3O6SXW.js";
import {
  MatTooltip,
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import "./chunk-OWIRED5M.js";
import {
  YxSelectComponent
} from "./chunk-VUCKRGWV.js";
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
import {
  environment
} from "./chunk-LJGINEDX.js";
import "./chunk-6U6LEG24.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
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

// src/app/components/core/sensor-management/sensor-management.service.ts
var SensorService = class _SensorService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getSensors() {
    return this.http.get(`${this.baseUrl}/Sensor`);
  }
  getSensorByBusinessId(id) {
    return this.http.get(`${this.baseUrl}/Sensor/GetByBusinessId`, { params: { id } });
  }
  getSensorByDeviceId(id) {
    return this.http.get(`${this.baseUrl}/Sensor/GetByDeviceId`, { params: { id } });
  }
  addSensor(model) {
    return this.http.post(`${this.baseUrl}/Sensor`, model);
  }
  updateSensor(model) {
    return this.http.put(`${this.baseUrl}/Sensor`, model);
  }
  deleteSensor(id) {
    return this.http.delete(`${this.baseUrl}/Sensor`, { params: { id } });
  }
  static {
    this.\u0275fac = function SensorService_Factory(t) {
      return new (t || _SensorService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SensorService, factory: _SensorService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/core/sensor-management/sensor-management-add-update/sensor-management-add-update.component.ts
function SensorManagementAddUpdateComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedUtilityName, " ");
  }
}
function SensorManagementAddUpdateComponent_yx_select_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "yx-select", 17);
    \u0275\u0275twoWayListener("valueChange", function SensorManagementAddUpdateComponent_yx_select_29_Template_yx_select_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.fkutility, $event) || (ctx_r0.model.fkutility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r0.utilities);
    \u0275\u0275twoWayProperty("value", ctx_r0.model.fkutility);
  }
}
function SensorManagementAddUpdateComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function SensorManagementAddUpdateComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Update Sensor" : "Save Sensor", " ");
  }
}
var SensorManagementAddUpdateComponent = class _SensorManagementAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  get isViewMode() {
    return this.data?.mode === "view";
  }
  constructor(dialogRef, sensorService, officeService, deviceService, utilityService, userService, toaster, data) {
    this.dialogRef = dialogRef;
    this.sensorService = sensorService;
    this.officeService = officeService;
    this.deviceService = deviceService;
    this.utilityService = utilityService;
    this.userService = userService;
    this.toaster = toaster;
    this.data = data;
    this.isSaving = false;
    this.offices = [];
    this.devices = [];
    this.utilities = [];
    this.model = {
      sensorName: "",
      meterId: "",
      serialAddress: "",
      fkDevice: "",
      fkutility: ""
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      yield Promise.all([
        this.loadUtilities()
      ]);
      if (this.data?.value) {
        this.model = __spreadValues({}, this.data.value);
      } else if (this.data?.fkDevice) {
        this.model.fkDevice = this.data.fkDevice;
      }
    });
  }
  loadOffices() {
    return new Promise((resolve) => {
      this.officeService.getOfficeByBusinessId(this.currentUser.fkBusiness).subscribe((res) => {
        if (res.success)
          this.offices = res.data || [];
        resolve(true);
      });
    });
  }
  loadDevices() {
    return new Promise((resolve) => {
      this.deviceService.getDeviceByBusinessId(this.currentUser.fkBusiness).subscribe((res) => {
        if (res.success)
          this.devices = res.data || [];
        resolve(true);
      });
    });
  }
  loadUtilities() {
    return new Promise((resolve) => {
      this.utilityService.getUtilities().subscribe((res) => {
        if (res.success)
          this.utilities = res.data || [];
        resolve(true);
      });
    });
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    if (!this.model.sensorName?.trim()) {
      this.toaster.error("Sensor Name required");
      return;
    }
    this.isSaving = true;
    console.log(this.model);
    const api$ = this.isEditMode ? this.sensorService.updateSensor(this.model) : this.sensorService.addSensor(this.model);
    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success("Saved Successfully");
          this.dialogRef.close("saved");
        }
        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
  /* ================= LOOKUP NAME HELPERS ================= */
  get selectedDeviceName() {
    return this.devices.find((x) => x.deviceId === this.model.fkDevice)?.deviceName || "-";
  }
  get selectedUtilityName() {
    return this.utilities.find((x) => x.utilityId === this.model.fkutility)?.utilityName || "-";
  }
  static {
    this.\u0275fac = function SensorManagementAddUpdateComponent_Factory(t) {
      return new (t || _SensorManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SensorService), \u0275\u0275directiveInject(OfficeService), \u0275\u0275directiveInject(DeviceService), \u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SensorManagementAddUpdateComponent, selectors: [["app-sensor-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 10, consts: [[1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", 3, "click"], [1, "las", "la-times"], [1, "px-6", "py-4", "overflow-y-auto", "space-y-4"], [1, "rounded-lg", "p-5", "space-y-4", "border", "border-[rgb(var(--gray-200))]"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide", "text-muted"], [1, "yx-field"], [1, "yx-label"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["class", "yx-input w-full bg-gray-50", 4, "ngIf"], ["labelKey", "utilityName", "valueKey", "utilityId", "placeholder", "Select Utility", 3, "items", "value", "valueChange", 4, "ngIf"], [1, "flex", "justify-end", "gap-3", "px-6", "py-4", "border-t"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], ["type", "button", "class", "rounded-lg px-6 py-2 bg-[rgb(var(--primary))] text-white", 3, "disabled", "click", 4, "ngIf"], [1, "yx-input", "w-full", "bg-gray-50"], ["labelKey", "utilityName", "valueKey", "utilityId", "placeholder", "Select Utility", 3, "valueChange", "items", "value"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", 3, "click", "disabled"]], template: function SensorManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function SensorManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "p", 7);
        \u0275\u0275text(9, " Sensor Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Sensor Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function SensorManagementAddUpdateComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.sensorName, $event) || (ctx.model.sensorName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "label", 9);
        \u0275\u0275text(16, "Meter Id");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function SensorManagementAddUpdateComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.meterId, $event) || (ctx.model.meterId = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 8)(19, "label", 9);
        \u0275\u0275text(20, "Serial Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function SensorManagementAddUpdateComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.serialAddress, $event) || (ctx.model.serialAddress = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 6)(23, "p", 7);
        \u0275\u0275text(24, " Sensor Linking ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8)(26, "label", 9);
        \u0275\u0275text(27, "Utility");
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, SensorManagementAddUpdateComponent_div_28_Template, 2, 1, "div", 11)(29, SensorManagementAddUpdateComponent_yx_select_29_Template, 1, 2, "yx-select", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 13)(31, "button", 14);
        \u0275\u0275listener("click", function SensorManagementAddUpdateComponent_Template_button_click_31_listener() {
          return ctx.close();
        });
        \u0275\u0275text(32, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, SensorManagementAddUpdateComponent_button_33_Template, 2, 2, "button", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isViewMode ? "Sensor Details" : ctx.isEditMode ? "Update Sensor" : "Add Sensor", " ");
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.sensorName);
        \u0275\u0275property("disabled", ctx.isViewMode);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.meterId);
        \u0275\u0275property("disabled", ctx.isViewMode);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.serialAddress);
        \u0275\u0275property("disabled", ctx.isViewMode);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isViewMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isViewMode);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.isViewMode);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, YxSelectComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SensorManagementAddUpdateComponent, { className: "SensorManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\sensor-management\\sensor-management-add-update\\sensor-management-add-update.component.ts", lineNumber: 22 });
})();

// src/app/components/core/sensor-management/sensor-management.component.ts
function SensorManagementComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275element(2, "div", 45);
    \u0275\u0275elementStart(3, "p", 46);
    \u0275\u0275text(4, "Loading Sensors...");
    \u0275\u0275elementEnd()()();
  }
}
function SensorManagementComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "div", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 52)(8, "button", 53);
    \u0275\u0275listener("click", function SensorManagementComponent_div_57_Template_button_click_8_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(st_r2));
    });
    \u0275\u0275element(9, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 55);
    \u0275\u0275listener("click", function SensorManagementComponent_div_57_Template_button_click_10_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r2));
    });
    \u0275\u0275element(11, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 57);
    \u0275\u0275listener("click", function SensorManagementComponent_div_57_Template_button_click_12_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r2.sensorId));
    });
    \u0275\u0275element(13, "i", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r2.sensorName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r2.utilityName, " ");
  }
}
function SensorManagementComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "p", 60);
    \u0275\u0275text(2, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 61);
    \u0275\u0275text(4, "Try adjusting search or add a new sensor.");
    \u0275\u0275elementEnd()();
  }
}
function SensorManagementComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62)(2, "div", 44);
    \u0275\u0275element(3, "div", 45);
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5, " Loading Sensors... ");
    \u0275\u0275elementEnd()()()();
  }
}
function SensorManagementComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 63)(1, "td", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 67)(8, "div", 68)(9, "div", 69)(10, "button", 70);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_73_Template_button_click_10_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(st_r5));
    });
    \u0275\u0275element(11, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 71);
    \u0275\u0275text(13, " View Details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 69)(15, "button", 72);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_73_Template_button_click_15_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(st_r5));
    });
    \u0275\u0275element(16, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 71);
    \u0275\u0275text(18, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 69)(20, "button", 73);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_73_Template_button_click_20_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r5.sensorId));
    });
    \u0275\u0275element(21, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 71);
    \u0275\u0275text(23, " Delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const st_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r5.sensorName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(st_r5.utilityName);
  }
}
function SensorManagementComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74)(2, "p", 60);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 61);
    \u0275\u0275text(5, " Try adjusting search or create a new sensor. ");
    \u0275\u0275elementEnd()()();
  }
}
function SensorManagementComponent_button_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function SensorManagementComponent_button_81_Template_button_click_0_listener() {
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
var SensorManagementComponent = class _SensorManagementComponent {
  constructor(_sensorService, _toaster, dialog, _userService, router) {
    this._sensorService = _sensorService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Sensors = [];
    this.filteredSensors = [];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const nav = history.state;
      this.fkFloor = nav.fkFloor || nav.fkFloor;
      this.fkBuilding = nav.fkBuilding;
      this.fkFacility = nav.fkFacility;
      this.fkBusiness = nav.fkBusiness;
      this.fkSection = nav.fkSection;
      this.fkOffice = nav.fkOffice;
      this.fkDevice = nav.fkDevice;
      this.currentUser = yield this._userService.user$;
      this.loadSensors(this.currentUser.fkBusiness);
    });
  }
  loadSensors(fkDevice) {
    this.isLoading = true;
    fkDevice = this.fkDevice;
    this._sensorService.getSensorByDeviceId(fkDevice).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load sensors");
          this.isLoading = false;
          return;
        }
        this.Sensors = res.data ?? [];
        this.filteredSensors = [...this.Sensors];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Sensors = [];
        this.filteredSensors = [];
        this.isLoading = false;
        this._toaster.error("Failed to load sensors");
      }
    });
  }
  get pagedSensors() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredSensors.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredSensors.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredSensors.length);
  }
  searchSensors() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredSensors = !term ? [...this.Sensors] : this.filteredSensors.filter((st) => st.sensorName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  addSensor() {
    const dialogRef = this.dialog.open(SensorManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: { mode: "add", fkDevice: this.fkDevice }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadSensors(this.currentUser.fkBusiness);
      }
    });
  }
  viewDetails(sensor) {
    const dialogRef = this.dialog.open(SensorManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "view",
        value: sensor
      }
    });
  }
  edit(st) {
    const dialogRef = this.dialog.open(SensorManagementAddUpdateComponent, {
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
        this.loadSensors(this.currentUser.fkBusiness);
      }
    });
  }
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete Sensor",
        message: "Deleting this Sensor will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._sensorService.deleteSensor(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Sensor deleted");
            this.loadSensors(this.currentUser.fkBusiness);
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
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredSensors.length) {
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
  goToDevice() {
    this.router.navigate(["/core/device-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: this.fkOffice
      }
    });
  }
  goToFloor() {
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
    this.\u0275fac = function SensorManagementComponent_Factory(t) {
      return new (t || _SensorManagementComponent)(\u0275\u0275directiveInject(SensorService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SensorManagementComponent, selectors: [["app-sensor-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-building", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "las", "la-city", "text-sm", "sm:text-base"], [1, "las", "la-layer-group", "text-sm", "sm:text-base"], [1, "las", "la-sitemap", "text-sm", "sm:text-base"], [1, "las", "la-briefcase", "text-sm", "sm:text-base"], [1, "las", "la-broadcast-tower", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-microchip", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search Sensors..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "flex-1"], [1, "font-semibold", "text-sm"], [1, "text-xs", "text-[rgb(var(--primary))]"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], ["matTooltip", "View Details", 1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-eye", "text-lg"], ["matTooltip", "Edit", 1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], ["matTooltip", "Delete", 1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "7", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function SensorManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Sensor Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage Sensors linked with their respective Device. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_9_listener() {
          return ctx.addSensor();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Sensor ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "button", 10);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility();
        });
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_19_listener() {
          return ctx.goToBuilding();
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementStart(24, "button", 10);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_24_listener() {
          return ctx.goToFloor();
        });
        \u0275\u0275element(25, "i", 15);
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Floor");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "i", 13);
        \u0275\u0275elementStart(29, "button", 10);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_29_listener() {
          return ctx.goToSection();
        });
        \u0275\u0275element(30, "i", 16);
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "Section");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "i", 13);
        \u0275\u0275elementStart(34, "button", 10);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_34_listener() {
          return ctx.goToOffice();
        });
        \u0275\u0275element(35, "i", 17);
        \u0275\u0275elementStart(36, "span", 12);
        \u0275\u0275text(37, "Office");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "i", 13);
        \u0275\u0275elementStart(39, "button", 10);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_39_listener() {
          return ctx.goToDevice();
        });
        \u0275\u0275element(40, "i", 18);
        \u0275\u0275elementStart(41, "span", 12);
        \u0275\u0275text(42, "Device");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(43, "i", 13);
        \u0275\u0275elementStart(44, "span", 19);
        \u0275\u0275element(45, "i", 20);
        \u0275\u0275elementStart(46, "span", 12);
        \u0275\u0275text(47, "Sensor");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 21)(49, "div", 22)(50, "p", 23);
        \u0275\u0275text(51, " Total Sensors: ");
        \u0275\u0275elementStart(52, "span", 24);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function SensorManagementComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SensorManagementComponent_Template_input_ngModelChange_54_listener() {
          return ctx.searchSensors();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 26);
        \u0275\u0275template(56, SensorManagementComponent_div_56_Template, 5, 0, "div", 27)(57, SensorManagementComponent_div_57_Template, 14, 2, "div", 28)(58, SensorManagementComponent_div_58_Template, 5, 0, "div", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 30)(60, "table", 31)(61, "thead", 32)(62, "tr")(63, "th", 33);
        \u0275\u0275text(64, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th", 33);
        \u0275\u0275text(66, "Sensor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "th", 33);
        \u0275\u0275text(68, "Utility");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "th", 34);
        \u0275\u0275text(70, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "tbody", 35);
        \u0275\u0275template(72, SensorManagementComponent_tr_72_Template, 6, 0, "tr", 36)(73, SensorManagementComponent_tr_73_Template, 24, 3, "tr", 37)(74, SensorManagementComponent_tr_74_Template, 6, 0, "tr", 36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "div", 38)(76, "p", 39);
        \u0275\u0275text(77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 40)(79, "button", 41);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_79_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(80, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(81, SensorManagementComponent_button_81_Template, 2, 2, "button", 42);
        \u0275\u0275elementStart(82, "button", 41);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_82_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(83, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(53);
        \u0275\u0275textInterpolate1(" ", ctx.filteredSensors.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSensors);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSensors.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSensors);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSensors.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredSensors.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredSensors.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MaterialModuleModule, MatTooltip] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SensorManagementComponent, { className: "SensorManagementComponent", filePath: "src\\app\\components\\core\\sensor-management\\sensor-management.component.ts", lineNumber: 22 });
})();
export {
  SensorManagementComponent
};
//# sourceMappingURL=chunk-MLZSIRTE.js.map
