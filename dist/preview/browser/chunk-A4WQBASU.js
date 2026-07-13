import {
  UtilityService
} from "./chunk-KODQ6RXS.js";
import {
  ConfirmDialogComponent
} from "./chunk-JSCBWFFG.js";
import {
  DeviceService
} from "./chunk-23MD4Y7N.js";
import {
  OfficeService
} from "./chunk-ZKTKUHMD.js";
import {
  YxSelectComponent
} from "./chunk-L5ZIRAMR.js";
import {
  MatTooltip,
  MaterialModuleModule
} from "./chunk-7LK7NDKG.js";
import "./chunk-K2JMPSHA.js";
import "./chunk-6MZ7UVS4.js";
import "./chunk-AZ553IHQ.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
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
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
} from "./chunk-AVLIJGNB.js";
import "./chunk-QURSFKIH.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y6Q6HMFU.js";

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
function SensorManagementAddUpdateComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedUtilityName, " ");
  }
}
function SensorManagementAddUpdateComponent_yx_select_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "yx-select", 21);
    \u0275\u0275twoWayListener("valueChange", function SensorManagementAddUpdateComponent_yx_select_36_Template_yx_select_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.fkutility, $event) || (ctx_r0.model.fkutility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r0.utilities)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r0.model.fkutility);
  }
}
function SensorManagementAddUpdateComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SensorManagementAddUpdateComponent_button_40_Template_button_click_0_listener() {
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
      fkutility: "",
      standbyAutoOff: false
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      yield Promise.all([
        this.loadUtilities()
      ]);
      if (this.data?.value) {
        this.model = __spreadProps(__spreadValues({}, this.data.value), {
          standbyAutoOff: this.data.value.standbyAutoOff ?? false
        });
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
    const request = __spreadProps(__spreadValues({}, this.model), {
      standbyAutoOff: Boolean(this.model.standbyAutoOff)
    });
    const api$ = this.isEditMode ? this.sensorService.updateSensor(request) : this.sensorService.addSensor(request);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SensorManagementAddUpdateComponent, selectors: [["app-sensor-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 12, consts: [[1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", 3, "click"], [1, "las", "la-times"], [1, "px-6", "py-4", "overflow-y-auto", "space-y-4"], [1, "rounded-lg", "p-5", "space-y-4", "border", "border-[rgb(var(--gray-200))]"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide", "text-muted"], [1, "yx-field"], [1, "yx-label"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-center", "justify-between", "gap-4", "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "px-4", "py-3"], [1, "text-sm", "font-semibold", "text-[rgb(var(--dark))]"], [1, "mt-1", "text-xs", "text-[rgb(var(--gray-500))]"], ["color", "primary", 3, "ngModelChange", "ngModel", "disabled"], ["class", "yx-input w-full bg-gray-50", 4, "ngIf"], ["labelKey", "utilityName", "valueKey", "utilityId", "placeholder", "Select Utility", "placement", "top", 3, "items", "enableSearch", "value", "valueChange", 4, "ngIf"], [1, "flex", "justify-end", "gap-3", "px-6", "py-4", "border-t"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], ["type", "button", "class", "rounded-lg px-6 py-2 bg-[rgb(var(--primary))] text-white", 3, "disabled", "click", 4, "ngIf"], [1, "yx-input", "w-full", "bg-gray-50"], ["labelKey", "utilityName", "valueKey", "utilityId", "placeholder", "Select Utility", "placement", "top", 3, "valueChange", "items", "enableSearch", "value"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", 3, "click", "disabled"]], template: function SensorManagementAddUpdateComponent_Template(rf, ctx) {
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
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 11)(23, "div")(24, "p", 12);
        \u0275\u0275text(25, " Standby Auto Off ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 13);
        \u0275\u0275text(27, " Automatically turn linked standby appliances off when the sensor detects standby usage. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "mat-slide-toggle", 14);
        \u0275\u0275twoWayListener("ngModelChange", function SensorManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.standbyAutoOff, $event) || (ctx.model.standbyAutoOff = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 6)(30, "p", 7);
        \u0275\u0275text(31, " Sensor Linking ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 8)(33, "label", 9);
        \u0275\u0275text(34, "Utility");
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, SensorManagementAddUpdateComponent_div_35_Template, 2, 1, "div", 15)(36, SensorManagementAddUpdateComponent_yx_select_36_Template, 1, 3, "yx-select", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 17)(38, "button", 18);
        \u0275\u0275listener("click", function SensorManagementAddUpdateComponent_Template_button_click_38_listener() {
          return ctx.close();
        });
        \u0275\u0275text(39, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(40, SensorManagementAddUpdateComponent_button_40_Template, 2, 2, "button", 19);
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
        \u0275\u0275twoWayProperty("ngModel", ctx.model.standbyAutoOff);
        \u0275\u0275property("disabled", ctx.isViewMode);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isViewMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isViewMode);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.isViewMode);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle, YxSelectComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SensorManagementAddUpdateComponent, { className: "SensorManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\sensor-management\\sensor-management-add-update\\sensor-management-add-update.component.ts", lineNumber: 23 });
})();

// src/app/components/core/sensor-management/hvac-loop-setting.service.ts
var HvacLoopSettingService = class _HvacLoopSettingService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getBySensorId(sensorId) {
    return this.http.get(`${this.baseUrl}/HvacLoopSetting/GetBySensorId`, { params: { id: sensorId } });
  }
  create(model) {
    return this.http.post(`${this.baseUrl}/HvacLoopSetting`, model);
  }
  update(model) {
    return this.http.put(`${this.baseUrl}/HvacLoopSetting`, model);
  }
  enableLoop(sensorId) {
    return this.http.put(`${this.baseUrl}/HvacLoopSetting/EnableLoop`, null, { params: { id: sensorId } });
  }
  disableLoop(sensorId) {
    return this.http.put(`${this.baseUrl}/HvacLoopSetting/DisableLoop`, null, { params: { id: sensorId } });
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/HvacLoopSetting`, { params: { id } });
  }
  static {
    this.\u0275fac = function HvacLoopSettingService_Factory(t) {
      return new (t || _HvacLoopSettingService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HvacLoopSettingService, factory: _HvacLoopSettingService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/core/sensor-management/hvac-loop-setting-dialog/hvac-loop-setting-dialog.component.ts
function HvacLoopSettingDialogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3, " Loading current loop setting... ");
    \u0275\u0275elementEnd()();
  }
}
var HvacLoopSettingDialogComponent = class _HvacLoopSettingDialogComponent {
  constructor(dialogRef, hvacLoopSettingService, toaster, data) {
    this.dialogRef = dialogRef;
    this.hvacLoopSettingService = hvacLoopSettingService;
    this.toaster = toaster;
    this.data = data;
    this.isLoading = false;
    this.isSaving = false;
    this.hasExistingSetting = false;
    this.sensorName = "";
    this.utilityName = "";
    this.onMinutes = 15;
    this.offMinutes = 5;
    this.model = {
      fkSensor: "",
      loopEnabled: false,
      loopOnSeconds: 900,
      loopOffSeconds: 300,
      isActive: true
    };
  }
  ngOnInit() {
    this.sensorName = this.data.sensorName || "-";
    this.utilityName = this.data.utilityName || "-";
    this.resetToDefaults();
    if (!this.isHvacUtility()) {
      this.toaster.error("Loop setting is only available for HVAC sensors");
      this.dialogRef.close();
      return;
    }
    this.loadSetting();
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    if (!this.isHvacUtility()) {
      this.toaster.error("Loop setting is only available for HVAC sensors");
      return;
    }
    const onMinutes = Number(this.onMinutes);
    const offMinutes = Number(this.offMinutes);
    if (this.model.loopEnabled && (!Number.isFinite(onMinutes) || onMinutes <= 0)) {
      this.toaster.error("ON duration must be greater than 0");
      return;
    }
    if (this.model.loopEnabled && (!Number.isFinite(offMinutes) || offMinutes <= 0)) {
      this.toaster.error("OFF duration must be greater than 0");
      return;
    }
    this.isSaving = true;
    const request = this.buildRequest();
    const api$ = this.hasExistingSetting ? this.hvacLoopSettingService.update(request) : this.hvacLoopSettingService.create(request);
    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.dialogRef.close("saved");
        } else {
          this.toaster.error(res.remarks || "Failed to save HVAC loop setting");
        }
        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
        this.toaster.error("Failed to save HVAC loop setting");
      }
    });
  }
  loadSetting() {
    this.isLoading = true;
    this.hvacLoopSettingService.getBySensorId(this.data.fkSensor).subscribe({
      next: (res) => {
        if (res.data) {
          this.applyExistingSetting(res.data);
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status && error.status !== 404) {
          this.toaster.error("Failed to load HVAC loop setting");
        }
      }
    });
  }
  resetToDefaults() {
    this.hasExistingSetting = false;
    this.onMinutes = 15;
    this.offMinutes = 5;
    this.model = {
      fkSensor: this.data.fkSensor,
      loopEnabled: false,
      loopOnSeconds: 900,
      loopOffSeconds: 300,
      isActive: true
    };
  }
  applyExistingSetting(setting) {
    this.hasExistingSetting = true;
    this.onMinutes = this.secondsToMinutes(setting.loopOnSeconds);
    this.offMinutes = this.secondsToMinutes(setting.loopOffSeconds);
    this.model = {
      hvacLoopSettingId: setting.hvacLoopSettingId,
      fkSensor: setting.fkSensor || this.data.fkSensor,
      loopEnabled: Boolean(setting.loopEnabled),
      loopOnSeconds: setting.loopOnSeconds || 0,
      loopOffSeconds: setting.loopOffSeconds || 0,
      isActive: setting.isActive !== false
    };
  }
  buildRequest() {
    return {
      hvacLoopSettingId: this.model.hvacLoopSettingId,
      fkSensor: this.data.fkSensor,
      loopEnabled: this.model.loopEnabled,
      loopOnSeconds: this.minutesToSeconds(this.onMinutes),
      loopOffSeconds: this.minutesToSeconds(this.offMinutes),
      isActive: this.model.isActive
    };
  }
  secondsToMinutes(seconds) {
    return seconds ? seconds / 60 : 0;
  }
  minutesToSeconds(minutes) {
    const numericMinutes = Number(minutes);
    if (!Number.isFinite(numericMinutes) || numericMinutes <= 0) {
      return 0;
    }
    return Math.round(numericMinutes * 60);
  }
  isHvacUtility() {
    return (this.data.utilityName || "").trim().toLowerCase() === "hvac";
  }
  static {
    this.\u0275fac = function HvacLoopSettingDialogComponent_Factory(t) {
      return new (t || _HvacLoopSettingDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(HvacLoopSettingService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HvacLoopSettingDialogComponent, selectors: [["app-hvac-loop-setting-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 12, consts: [[1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-start", "justify-between", "gap-4", "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], [1, "mt-1", "text-xs", "leading-relaxed", "text-white/80"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times"], [1, "px-6", "py-4", "overflow-y-auto", "space-y-4"], ["class", "flex items-center gap-3 rounded-lg border border-[rgb(var(--primary-200))] bg-[rgb(var(--primary-100))] p-3", 4, "ngIf"], [1, "rounded-lg", "p-4", "space-y-3", "border", "border-[rgb(var(--gray-200))]"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-[rgb(var(--primary))]"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "text-xs", "font-medium", "text-[rgb(var(--gray-500))]"], [1, "mt-1", "break-words", "text-sm", "font-semibold", "text-[rgb(var(--dark))]"], [1, "mt-1", "text-sm", "font-semibold", "text-[rgb(var(--primary))]"], [1, "rounded-lg", "p-4", "space-y-4", "border", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-sm", "font-semibold", "text-[rgb(var(--dark))]"], [1, "mt-1", "text-xs", "text-[rgb(var(--gray-500))]"], ["color", "primary", 3, "ngModelChange", "ngModel", "disabled"], [1, "yx-field"], [1, "yx-label"], [1, "relative"], ["type", "number", "min", "1", "step", "1", 1, "yx-input", "w-full", "pr-16", 3, "ngModelChange", "ngModel", "disabled"], [1, "pointer-events-none", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-xs", "font-medium", "text-[rgb(var(--gray-500))]"], [1, "flex", "items-center", "justify-between", "gap-4", "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "px-4", "py-3"], [1, "flex", "justify-end", "gap-3", "px-6", "py-4", "border-t"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary))]", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], [1, "flex", "items-center", "gap-3", "rounded-lg", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--primary-100))]", "p-3"], [1, "h-5", "w-5", "animate-spin", "rounded-full", "border-2", "border-[rgb(var(--primary-200))]", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-[rgb(var(--gray-700))]"]], template: function HvacLoopSettingDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
        \u0275\u0275text(4, " HVAC Loop Settings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, " Configure automatic ON/OFF loop for this HVAC sensor. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function HvacLoopSettingDialogComponent_Template_button_click_7_listener() {
          return ctx.close();
        });
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275template(10, HvacLoopSettingDialogComponent_div_10_Template, 4, 0, "div", 7);
        \u0275\u0275elementStart(11, "div", 8)(12, "p", 9);
        \u0275\u0275text(13, " Selected Sensor ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div")(16, "p", 11);
        \u0275\u0275text(17, "Sensor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 12);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div")(21, "p", 11);
        \u0275\u0275text(22, "Utility");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 13);
        \u0275\u0275text(24, " HVAC ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "div", 14)(26, "div", 15)(27, "div")(28, "p", 16);
        \u0275\u0275text(29, " Loop Enabled ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 17);
        \u0275\u0275text(31, " Example: ON for 15 minutes, OFF for 5 minutes, then repeat. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "mat-slide-toggle", 18);
        \u0275\u0275twoWayListener("ngModelChange", function HvacLoopSettingDialogComponent_Template_mat_slide_toggle_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.loopEnabled, $event) || (ctx.model.loopEnabled = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 10)(34, "div", 19)(35, "label", 20);
        \u0275\u0275text(36, "ON Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 21)(38, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function HvacLoopSettingDialogComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.onMinutes, $event) || (ctx.onMinutes = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 23);
        \u0275\u0275text(40, " min ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 19)(42, "label", 20);
        \u0275\u0275text(43, "OFF Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 21)(45, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function HvacLoopSettingDialogComponent_Template_input_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.offMinutes, $event) || (ctx.offMinutes = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 23);
        \u0275\u0275text(47, " min ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 24)(49, "div")(50, "p", 16);
        \u0275\u0275text(51, " Active Status ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p", 17);
        \u0275\u0275text(53, " Keep this loop setting active for the selected sensor. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "mat-slide-toggle", 18);
        \u0275\u0275twoWayListener("ngModelChange", function HvacLoopSettingDialogComponent_Template_mat_slide_toggle_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 25)(56, "button", 26);
        \u0275\u0275listener("click", function HvacLoopSettingDialogComponent_Template_button_click_56_listener() {
          return ctx.close();
        });
        \u0275\u0275text(57, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 27);
        \u0275\u0275listener("click", function HvacLoopSettingDialogComponent_Template_button_click_58_listener() {
          return ctx.save();
        });
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ctx.sensorName, " ");
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.loopEnabled);
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.onMinutes);
        \u0275\u0275property("disabled", !ctx.model.loopEnabled || ctx.isLoading);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.offMinutes);
        \u0275\u0275property("disabled", !ctx.model.loopEnabled || ctx.isLoading);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving || ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? "Saving..." : "Save Settings", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, MatSlideToggleModule, MatSlideToggle], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\ninput[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=hvac-loop-setting-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HvacLoopSettingDialogComponent, { className: "HvacLoopSettingDialogComponent", filePath: "src\\app\\components\\core\\sensor-management\\hvac-loop-setting-dialog\\hvac-loop-setting-dialog.component.ts", lineNumber: 27 });
})();

// src/app/components/core/sensor-management/sensor-management.component.ts
function SensorManagementComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function SensorManagementComponent_div_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSensorDetails());
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275listener("click", function SensorManagementComponent_div_48_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "span", 47);
    \u0275\u0275text(4, " Sensor Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function SensorManagementComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSensorDetails());
    });
    \u0275\u0275element(6, "i", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "div", 51)(9, "p", 52);
    \u0275\u0275text(10, " Sensor Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 54)(14, "div", 51)(15, "p", 52);
    \u0275\u0275text(16, " Utility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 55);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 51)(20, "p", 52);
    \u0275\u0275text(21, " Device ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 55);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 54)(25, "div", 51)(26, "p", 52);
    \u0275\u0275text(27, " Meter Id ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 56);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 51)(31, "p", 52);
    \u0275\u0275text(32, " Serial Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 56);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 51)(36, "p", 52);
    \u0275\u0275text(37, " Standby Auto Off ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 57);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 58)(41, "button", 59);
    \u0275\u0275listener("click", function SensorManagementComponent_div_48_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSensorDetails());
    });
    \u0275\u0275text(42, " Close ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSensor.sensorName || "-", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSensor.utilityName || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSensor.deviceName || "-", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSensor.meterId || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSensor.serialAddress || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.selectedSensor.standbyAutoOff ? "bg-[rgb(var(--success-100))] text-[rgb(var(--success-600))]" : "bg-[rgb(var(--gray-200))] text-[rgb(var(--gray-600))]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSensor.standbyAutoOff ? "Enabled" : "Disabled", " ");
  }
}
function SensorManagementComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275element(2, "div", 62);
    \u0275\u0275elementStart(3, "p", 63);
    \u0275\u0275text(4, "Loading Sensors...");
    \u0275\u0275elementEnd()()();
  }
}
function SensorManagementComponent_div_58_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function SensorManagementComponent_div_58_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const st_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openHvacLoopSetting(st_r4));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
}
function SensorManagementComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function SensorManagementComponent_div_58_Template_div_click_0_listener() {
      const st_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails(st_r4));
    })("keydown.enter", function SensorManagementComponent_div_58_Template_div_keydown_enter_0_listener() {
      const st_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails(st_r4));
    })("keydown.space", function SensorManagementComponent_div_58_Template_div_keydown_space_0_listener($event) {
      const st_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.viewDetails(st_r4);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "div", 65)(2, "div", 66)(3, "div", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 70)(10, "button", 71);
    \u0275\u0275listener("click", function SensorManagementComponent_div_58_Template_button_click_10_listener($event) {
      const st_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.goToAppliance(st_r4));
    });
    \u0275\u0275element(11, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SensorManagementComponent_div_58_button_12_Template, 2, 0, "button", 73);
    \u0275\u0275elementStart(13, "button", 74);
    \u0275\u0275listener("click", function SensorManagementComponent_div_58_Template_button_click_13_listener($event) {
      const st_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.edit(st_r4));
    });
    \u0275\u0275element(14, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 76);
    \u0275\u0275listener("click", function SensorManagementComponent_div_58_Template_button_click_15_listener($event) {
      const st_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.delete(st_r4.sensorId));
    });
    \u0275\u0275element(16, "i", 77);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "View details for " + st_r4.sensorName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r4.sensorName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r4.utilityName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", st_r4.standbyAutoOff ? "bg-[rgb(var(--success-100))] text-[rgb(var(--success-600))]" : "bg-[rgb(var(--gray-200))] text-[rgb(var(--gray-600))]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Standby auto-off ", st_r4.standbyAutoOff ? "on" : "off", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isHvacSensor(st_r4));
  }
}
function SensorManagementComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "p", 81);
    \u0275\u0275text(2, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "Try adjusting search or add a new sensor.");
    \u0275\u0275elementEnd()();
  }
}
function SensorManagementComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83)(2, "div", 61);
    \u0275\u0275element(3, "div", 62);
    \u0275\u0275elementStart(4, "p", 63);
    \u0275\u0275text(5, " Loading Sensors... ");
    \u0275\u0275elementEnd()()()();
  }
}
function SensorManagementComponent_tr_76_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "button", 97);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_76_div_17_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const st_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openHvacLoopSetting(st_r7));
    });
    \u0275\u0275element(2, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4, " HVAC Loop Settings ");
    \u0275\u0275elementEnd()();
  }
}
function SensorManagementComponent_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 84);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_76_Template_tr_click_0_listener() {
      const st_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails(st_r7));
    })("keydown.enter", function SensorManagementComponent_tr_76_Template_tr_keydown_enter_0_listener() {
      const st_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails(st_r7));
    })("keydown.space", function SensorManagementComponent_tr_76_Template_tr_keydown_space_0_listener($event) {
      const st_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.viewDetails(st_r7);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "td", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 87)(8, "span", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 89)(11, "div", 90)(12, "div", 91)(13, "button", 92);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_76_Template_button_click_13_listener($event) {
      const st_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.goToAppliance(st_r7));
    });
    \u0275\u0275element(14, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 93);
    \u0275\u0275text(16, " Manage Appliance ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, SensorManagementComponent_tr_76_div_17_Template, 5, 0, "div", 94);
    \u0275\u0275elementStart(18, "div", 91)(19, "button", 95);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_76_Template_button_click_19_listener($event) {
      const st_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.edit(st_r7));
    });
    \u0275\u0275element(20, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 93);
    \u0275\u0275text(22, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 91)(24, "button", 96);
    \u0275\u0275listener("click", function SensorManagementComponent_tr_76_Template_button_click_24_listener($event) {
      const st_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.delete(st_r7.sensorId));
    });
    \u0275\u0275element(25, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 93);
    \u0275\u0275text(27, " Delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const st_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "View details for " + st_r7.sensorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pageIndex * ctx_r1.pageSize + i_r9 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r7.sensorName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(st_r7.utilityName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", st_r7.standbyAutoOff ? "bg-[rgb(var(--success-100))] text-[rgb(var(--success-600))]" : "bg-[rgb(var(--gray-200))] text-[rgb(var(--gray-600))]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r7.standbyAutoOff ? "Enabled" : "Disabled", " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.isHvacSensor(st_r7));
  }
}
function SensorManagementComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 98)(2, "p", 81);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 82);
    \u0275\u0275text(5, " Try adjusting search or create a new sensor. ");
    \u0275\u0275elementEnd()()();
  }
}
function SensorManagementComponent_button_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function SensorManagementComponent_button_84_Template_button_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", p_r11 === ctx_r1.pageIndex ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r11 + 1, " ");
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
    this.selectedSensor = null;
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
    this.filteredSensors = !term ? [...this.Sensors] : this.Sensors.filter((st) => (st.sensorName || "").toLowerCase().includes(term) || (st.utilityName || "").toLowerCase().includes(term));
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
    this.selectedSensor = sensor;
  }
  closeSensorDetails() {
    this.selectedSensor = null;
  }
  isHvacSensor(sensor) {
    const utilityName = sensor?.utilityName || "";
    return utilityName.trim().toLowerCase() === "hvac";
  }
  openHvacLoopSetting(sensor) {
    if (!this.isHvacSensor(sensor)) {
      this._toaster.error("Loop setting is only available for HVAC sensors");
      return;
    }
    const dialogRef = this.dialog.open(HvacLoopSettingDialogComponent, {
      width: "460px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        fkSensor: sensor.sensorId,
        sensorName: sensor.sensorName,
        utilityName: sensor.utilityName
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this._toaster.success("HVAC loop setting updated");
        this.loadSensors(this.currentUser.fkBusiness);
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
  goToAppliance(sensor) {
    this.router.navigate(["/core/appliance-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: this.fkOffice,
        fkDevice: this.fkDevice,
        fkSensor: sensor.sensorId,
        fkUtility: sensor.fkutility,
        sensorName: sensor.sensorName,
        utilityName: sensor.utilityName
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SensorManagementComponent, selectors: [["app-sensor-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 87, vars: 15, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "ri-community-line", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "ri-building-4-line", "text-sm", "sm:text-base"], [1, "ri-stack-line", "text-sm", "sm:text-base"], [1, "ri-layout-grid-line", "text-sm", "sm:text-base"], [1, "ri-door-open-line", "text-sm", "sm:text-base"], [1, "las", "la-broadcast-tower", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-microchip", "text-sm", "sm:text-base"], ["class", "sensor-details-overlay fixed inset-0 z-[1000] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search Sensors..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "cursor-pointer rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", "role", "button", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "cursor-pointer border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", "role", "button", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sensor-details-overlay", "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "bg-black/45", "px-4", "py-6", "backdrop-blur-sm", 3, "click"], [1, "sensor-details-popup", "w-full", "max-w-md", "overflow-hidden", "border", "border-white/20", "bg-[rgb(var(--light))]", "shadow-2xl", 3, "click"], [1, "sensor-details-popup-header", "flex", "items-center", "justify-between", "gap-3", "bg-[rgb(var(--primary))]", "px-6", "py-3"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "sensor-details-popup-body", "space-y-4", "px-6", "py-5"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-[rgb(var(--primary))]"], [1, "mt-1", "text-sm", "font-semibold", "text-indigo-600"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "mt-1", "break-words", "text-sm", "font-semibold", "text-[rgb(var(--dark))]"], [1, "mt-1", "break-words", "text-sm", "text-[rgb(var(--dark))]"], [1, "mt-2", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "flex", "justify-end", "border-t", "border-[rgb(var(--gray-200))]", "pt-4"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], ["role", "button", "tabindex", "0", 1, "cursor-pointer", "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4", 3, "click", "keydown.enter", "keydown.space"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "flex-1"], [1, "font-semibold", "text-sm"], [1, "text-xs", "text-[rgb(var(--primary))]"], [1, "mt-2", "inline-flex", "rounded-full", "px-2", "py-1", "text-[11px]", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], ["matTooltip", "Manage Appliance", 1, "rounded-lg", "p-2", "bg-[rgb(var(--success-100))]", "text-[rgb(var(--success-600))]", 3, "click"], [1, "las", "la-plug", "text-lg"], ["matTooltip", "HVAC Loop Settings", "class", "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--primary-100))] text-[rgb(var(--primary))]", 3, "click", 4, "ngIf"], ["matTooltip", "Edit", 1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], ["matTooltip", "Delete", 1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], ["matTooltip", "HVAC Loop Settings", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-sync-alt", "text-lg", "leading-none"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "5", 1, "px-6", "py-14", "text-center"], ["role", "button", "tabindex", "0", 1, "cursor-pointer", "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]", 3, "click", "keydown.enter", "keydown.space"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--success-100))]", "text-[rgb(var(--success-600))]", "hover:bg-[rgb(var(--success-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["class", "relative group", 4, "ngIf"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], [1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "transition", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--primary))]", "hover:bg-[rgb(var(--primary-200))]", "hover:scale-105", 3, "click"], ["colspan", "5", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function SensorManagementComponent_Template(rf, ctx) {
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
        \u0275\u0275template(48, SensorManagementComponent_div_48_Template, 43, 7, "div", 21);
        \u0275\u0275elementStart(49, "div", 22)(50, "div", 23)(51, "p", 24);
        \u0275\u0275text(52, " Total Sensors: ");
        \u0275\u0275elementStart(53, "span", 25);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function SensorManagementComponent_Template_input_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SensorManagementComponent_Template_input_ngModelChange_55_listener() {
          return ctx.searchSensors();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 27);
        \u0275\u0275template(57, SensorManagementComponent_div_57_Template, 5, 0, "div", 28)(58, SensorManagementComponent_div_58_Template, 17, 6, "div", 29)(59, SensorManagementComponent_div_59_Template, 5, 0, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 31)(61, "table", 32)(62, "thead", 33)(63, "tr")(64, "th", 34);
        \u0275\u0275text(65, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 34);
        \u0275\u0275text(67, "Sensor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "th", 34);
        \u0275\u0275text(69, "Utility");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "th", 34);
        \u0275\u0275text(71, "Standby Auto Off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "th", 35);
        \u0275\u0275text(73, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "tbody", 36);
        \u0275\u0275template(75, SensorManagementComponent_tr_75_Template, 6, 0, "tr", 37)(76, SensorManagementComponent_tr_76_Template, 28, 7, "tr", 38)(77, SensorManagementComponent_tr_77_Template, 6, 0, "tr", 37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 39)(79, "p", 40);
        \u0275\u0275text(80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 41)(82, "button", 42);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_82_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(83, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(84, SensorManagementComponent_button_84_Template, 2, 2, "button", 43);
        \u0275\u0275elementStart(85, "button", 42);
        \u0275\u0275listener("click", function SensorManagementComponent_Template_button_click_85_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(86, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(48);
        \u0275\u0275property("ngIf", ctx.selectedSensor);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.filteredSensors.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSensors);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSensors.length === 0);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSensors);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSensors.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " - ", ctx.pageEnd, " of ", ctx.filteredSensors.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredSensors.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MaterialModuleModule, MatTooltip], styles: ["\n\n.sensor-details-popup[_ngcontent-%COMP%] {\n  border-radius: 0.75rem !important;\n  overflow: hidden;\n  transform: translateZ(0);\n}\n.sensor-details-popup-header[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.sensor-details-popup-body[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n/*# sourceMappingURL=sensor-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SensorManagementComponent, { className: "SensorManagementComponent", filePath: "src\\app\\components\\core\\sensor-management\\sensor-management.component.ts", lineNumber: 23 });
})();
export {
  SensorManagementComponent
};
//# sourceMappingURL=chunk-A4WQBASU.js.map
