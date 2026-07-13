import {
  YxSelectComponent
} from "./chunk-L5ZIRAMR.js";
import {
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
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7CONLPWZ.js";
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AVLIJGNB.js";
import "./chunk-QURSFKIH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y6Q6HMFU.js";

// src/app/components/core/appliance-management/appliance-management.service.ts
var ApplianceManagementService = class _ApplianceManagementService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getAppliances() {
    return this.http.get(`${this.baseUrl}/Appliance`);
  }
  getApplianceById(id) {
    return this.http.get(`${this.baseUrl}/Appliance/GetById`, { params: { id } });
  }
  getAppliancesByUtilityId(id) {
    return this.http.get(`${this.baseUrl}/Appliance/GetByUtilityId`, { params: { id } });
  }
  getBusinessAppliancesByUtilityId(businessId, utilityId) {
    return this.http.get(`${this.baseUrl}/Appliance/business/GetByUtilityId`, { params: { businessId, utilityId } });
  }
  getAssignableAppliancesBySensorId(id) {
    return this.http.get(`${this.baseUrl}/SensorAppliance/GetAssignableBySensorId`, { params: { id } });
  }
  addBusinessAppliance(model) {
    return this.http.post(`${this.baseUrl}/Appliance/business`, model);
  }
  updateBusinessAppliance(model) {
    return this.http.put(`${this.baseUrl}/Appliance/business`, model);
  }
  addAppliance(model) {
    return this.http.post(`${this.baseUrl}/Appliance`, model);
  }
  updateAppliance(model) {
    return this.http.put(`${this.baseUrl}/Appliance`, model);
  }
  deleteAppliance(id) {
    return this.http.delete(`${this.baseUrl}/Appliance`, { params: { id } });
  }
  seedDefaultAppliances() {
    return this.http.get(`${this.baseUrl}/Appliance/SeedDefault`);
  }
  assignApplianceToSensor(model) {
    return this.http.post(`${this.baseUrl}/SensorAppliance/Assign`, model);
  }
  updateSensorAppliance(model) {
    return this.http.put(`${this.baseUrl}/SensorAppliance`, model);
  }
  getSensorApplianceBySensorId(id) {
    return this.http.get(`${this.baseUrl}/SensorAppliance/GetBySensorId`, { params: { id } });
  }
  getApplianceStatusBySensorId(id) {
    return this.http.get(`${this.baseUrl}/SensorAppliance/GetStatusBySensorId`, { params: { id } });
  }
  deleteSensorAppliance(id) {
    return this.http.delete(`${this.baseUrl}/SensorAppliance`, { params: { id } });
  }
  static {
    this.\u0275fac = function ApplianceManagementService_Factory(t) {
      return new (t || _ApplianceManagementService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplianceManagementService, factory: _ApplianceManagementService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/core/appliance-management/appliance-management-add-update/appliance-management-add-update.component.ts
var _c0 = (a0, a1) => ({ "border-[rgb(var(--danger))]": a0, "border-[rgb(var(--gray-200))]": a1 });
function ApplianceManagementAddUpdateComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.applianceName, " ");
  }
}
function ApplianceManagementAddUpdateComponent_option_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
var ApplianceManagementAddUpdateComponent = class _ApplianceManagementAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, applianceService, toaster, data) {
    this.dialogRef = dialogRef;
    this.applianceService = applianceService;
    this.toaster = toaster;
    this.data = data;
    this.isSaving = false;
    this.priorityOptions = [
      { label: "Low", value: "Low" },
      { label: "Normal", value: "Normal" },
      { label: "High", value: "High" },
      { label: "Critical", value: "Critical" }
    ];
    this.fieldErrors = {};
    this.model = this.createDefaultModel();
  }
  ngOnInit() {
    if (this.isEditMode && this.data.value) {
      this.model = {
        applianceId: this.data.value.applianceId,
        applianceName: this.data.value.applianceName || "",
        companyName: this.data.value.companyName || "",
        modelNumber: this.data.value.modelNumber || "",
        fkBusiness: this.data.value.fkBusiness || this.data.fkBusiness || "",
        ratedVoltage: this.toNumber(this.data.value.ratedVoltage, 220),
        minCurrent: this.toNumber(this.data.value.minCurrent),
        maxCurrent: this.toNumber(this.data.value.maxCurrent),
        minPower: this.toNumber(this.data.value.minPower),
        maxPower: this.toNumber(this.data.value.maxPower),
        standbyPower: this.toNumber(this.data.value.standbyPower),
        normalPowerFactor: this.toNumber(this.data.value.normalPowerFactor),
        description: this.data.value.description || "",
        isCritical: this.data.value.isCritical ?? false,
        priorityLevel: this.data.value.priorityLevel || "Normal",
        isDefault: this.data.value.isDefault ?? false,
        isCustom: this.data.value.isCustom ?? true,
        isActive: this.data.value.isActive ?? true,
        fkUtility: this.data.value.fkUtility || this.data.fkUtility || ""
      };
      return;
    }
    this.model = this.createDefaultModel();
    this.model.fkUtility = this.data?.fkUtility || "";
    this.model.fkBusiness = this.data?.fkBusiness || "";
  }
  onNameChange() {
    if (this.fieldErrors.applianceName) {
      this.fieldErrors.applianceName = "";
    }
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.applianceName?.trim()) {
      this.fieldErrors.applianceName = "Appliance Name is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    const payload = __spreadProps(__spreadValues({}, this.model), {
      applianceName: this.model.applianceName.trim(),
      companyName: this.model.companyName.trim(),
      modelNumber: this.model.modelNumber.trim(),
      fkBusiness: this.model.fkBusiness || this.data.fkBusiness || "",
      description: this.model.description.trim(),
      ratedVoltage: this.toNumber(this.model.ratedVoltage, 220),
      minCurrent: this.toNumber(this.model.minCurrent),
      maxCurrent: this.toNumber(this.model.maxCurrent),
      minPower: this.toNumber(this.model.minPower),
      maxPower: this.toNumber(this.model.maxPower),
      standbyPower: this.toNumber(this.model.standbyPower),
      normalPowerFactor: this.toNumber(this.model.normalPowerFactor),
      isCritical: this.model.isCritical ?? false,
      priorityLevel: this.model.priorityLevel || "Normal",
      fkUtility: this.model.fkUtility || this.data.fkUtility || "",
      isDefault: this.model.isDefault ?? false,
      isCustom: this.model.isCustom ?? true,
      isActive: this.model.isActive ?? true
    });
    this.isSaving = true;
    const api$ = this.isEditMode ? this.applianceService.updateBusinessAppliance(payload) : this.applianceService.addBusinessAppliance(payload);
    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success(this.isEditMode ? "Appliance Updated Successfully" : "Appliance Added Successfully");
          setTimeout(() => this.dialogRef.close({ status: "saved", id: res.data?.applianceId }), 400);
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
  createDefaultModel() {
    return {
      applianceName: "",
      companyName: "",
      modelNumber: "",
      fkBusiness: "",
      ratedVoltage: 220,
      minCurrent: 0,
      maxCurrent: 0,
      minPower: 0,
      maxPower: 0,
      standbyPower: 0,
      normalPowerFactor: 0,
      description: "",
      isCritical: false,
      priorityLevel: "Normal",
      isDefault: false,
      isCustom: true,
      isActive: true,
      fkUtility: ""
    };
  }
  toNumber(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  static {
    this.\u0275fac = function ApplianceManagementAddUpdateComponent_Factory(t) {
      return new (t || _ApplianceManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(ApplianceManagementService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplianceManagementAddUpdateComponent, selectors: [["app-appliance-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 93, vars: 25, consts: [[1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "appliance-dialog-body", "px-6", "py-4", "overflow-y-auto", "space-y-4"], [1, "rounded-lg", "p-5", "space-y-4", "border", 3, "ngClass"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide", "text-muted"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "yx-field"], [1, "yx-label"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", "placeholder", "Enter appliance name", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["class", "text-xs mt-1 text-[rgb(var(--danger))]", 4, "ngIf"], ["type", "text", "placeholder", "Enter company name", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter model number", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], [1, "rounded-lg", "p-5", "space-y-4", "border", "border-[rgb(var(--gray-200))]"], [1, "mt-1", "text-xs", "text-muted"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center", "gap-3"], [1, "text-sm", "text-[rgb(var(--primary))]", "font-medium"], [1, "text-xs", "text-muted"], ["color", "primary", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter appliance description", 1, "yx-input", "w-full", "min-h-[92px]", 3, "ngModelChange", "ngModel"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "flex", "justify-end", "gap-3", "px-6", "py-4", "border-t", "bg-[rgb(var(--light))]"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-[rgb(var(--red-500))]", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "disabled:opacity-60", 3, "click", "disabled"], [1, "text-xs", "mt-1", "text-[rgb(var(--danger))]"], [3, "value"]], template: function ApplianceManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function ApplianceManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "p", 7);
        \u0275\u0275text(9, " Appliance Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "label", 10);
        \u0275\u0275text(13, " Appliance Name ");
        \u0275\u0275elementStart(14, "span", 11);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.applianceName, $event) || (ctx.model.applianceName = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_16_listener() {
          return ctx.onNameChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, ApplianceManagementAddUpdateComponent_p_17_Template, 2, 1, "p", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9)(19, "label", 10);
        \u0275\u0275text(20, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.companyName, $event) || (ctx.model.companyName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "label", 10);
        \u0275\u0275text(24, "Model Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.modelNumber, $event) || (ctx.model.modelNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 9)(27, "label", 10);
        \u0275\u0275text(28, "Rated Voltage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.ratedVoltage, $event) || (ctx.model.ratedVoltage = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 17)(31, "p", 7);
        \u0275\u0275text(32, " Electrical Range ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 8)(34, "div", 9)(35, "label", 10);
        \u0275\u0275text(36, "Min Current");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.minCurrent, $event) || (ctx.model.minCurrent = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 9)(39, "label", 10);
        \u0275\u0275text(40, "Max Current");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.maxCurrent, $event) || (ctx.model.maxCurrent = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 9)(43, "label", 10);
        \u0275\u0275text(44, "Min Power");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.minPower, $event) || (ctx.model.minPower = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 9)(47, "label", 10);
        \u0275\u0275text(48, "Max Power");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.maxPower, $event) || (ctx.model.maxPower = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 9)(51, "label", 10);
        \u0275\u0275text(52, "Standby Power");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.standbyPower, $event) || (ctx.model.standbyPower = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 9)(55, "label", 10);
        \u0275\u0275text(56, "Normal Power Factor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_input_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.normalPowerFactor, $event) || (ctx.model.normalPowerFactor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(58, "div", 17)(59, "div")(60, "p", 7);
        \u0275\u0275text(61, " Optimization Classification ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p", 18);
        \u0275\u0275text(63, " Use priority and critical status to rank dashboard recommendations safely. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 8)(65, "div", 9)(66, "label", 10);
        \u0275\u0275text(67, "Optimization Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "select", 19);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_select_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.priorityLevel, $event) || (ctx.model.priorityLevel = $event);
          return $event;
        });
        \u0275\u0275template(69, ApplianceManagementAddUpdateComponent_option_69_Template, 2, 2, "option", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 21)(71, "div")(72, "p", 22);
        \u0275\u0275text(73, "Critical appliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p", 23);
        \u0275\u0275text(75, "Critical appliances are excluded from interruption-based recommendations.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "mat-slide-toggle", 24);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_76_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isCritical, $event) || (ctx.model.isCritical = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 17)(78, "p", 7);
        \u0275\u0275text(79, " Description ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "textarea", 25);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_textarea_ngModelChange_80_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.description, $event) || (ctx.model.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 26)(82, "div")(83, "p", 22);
        \u0275\u0275text(84, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 23);
        \u0275\u0275text(86, "Inactive appliances cannot be assigned.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "mat-slide-toggle", 24);
        \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_87_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 27)(89, "button", 28);
        \u0275\u0275listener("click", function ApplianceManagementAddUpdateComponent_Template_button_click_89_listener() {
          return ctx.close();
        });
        \u0275\u0275text(90, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "button", 29);
        \u0275\u0275listener("click", function ApplianceManagementAddUpdateComponent_Template_button_click_91_listener() {
          return ctx.save();
        });
        \u0275\u0275text(92);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Appliance" : "Add Appliance", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c0, ctx.fieldErrors.applianceName, !ctx.fieldErrors.applianceName));
        \u0275\u0275advance(9);
        \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx.fieldErrors.applianceName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.applianceName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.applianceName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.companyName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.modelNumber);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.ratedVoltage);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.minCurrent);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.maxCurrent);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.minPower);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.maxPower);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.standbyPower);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.normalPowerFactor);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.priorityLevel);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.priorityOptions);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isCritical);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.description);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Appliance" : "Save Appliance", " ");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle], styles: ["\n\n.appliance-dialog-body[_ngcontent-%COMP%] {\n  overscroll-behavior: contain;\n  scrollbar-gutter: stable;\n}\n.appliance-dialog-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.45rem;\n}\n.appliance-dialog-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: rgb(var(--gray-300));\n}\ntextarea.yx-input[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-height: 700px) {\n  .appliance-dialog-body[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=appliance-management-add-update.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplianceManagementAddUpdateComponent, { className: "ApplianceManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\appliance-management\\appliance-management-add-update\\appliance-management-add-update.component.ts", lineNumber: 17 });
})();

// src/app/components/core/appliance-management/appliance-management.component.ts
function ApplianceManagementComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function ApplianceManagementComponent_div_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeApplianceDetails());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function ApplianceManagementComponent_div_53_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4, " Appliance Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function ApplianceManagementComponent_div_53_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeApplianceDetails());
    });
    \u0275\u0275element(6, "i", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "div", 32)(9, "p", 33);
    \u0275\u0275text(10, " Appliance Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 35)(14, "div", 32)(15, "p", 33);
    \u0275\u0275text(16, " Company ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 32)(20, "p", 33);
    \u0275\u0275text(21, " Model ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 36);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 32)(25, "p", 33);
    \u0275\u0275text(26, " Utility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 35)(30, "div", 32)(31, "p", 33);
    \u0275\u0275text(32, " Voltage ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 37);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 32)(36, "p", 33);
    \u0275\u0275text(37, " Current Range ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 37);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 32)(41, "p", 33);
    \u0275\u0275text(42, " Power Range ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 37);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 35)(46, "div", 32)(47, "p", 33);
    \u0275\u0275text(48, " Standby Power ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 37);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 32)(52, "p", 33);
    \u0275\u0275text(53, " Power Factor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 37);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 32)(57, "p", 33);
    \u0275\u0275text(58, " Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 38);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 32)(62, "p", 33);
    \u0275\u0275text(63, " Optimization Classification ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 39)(65, "div")(66, "p", 40);
    \u0275\u0275text(67, "Critical");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 41);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div")(71, "p", 40);
    \u0275\u0275text(72, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 37);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 32)(76, "p", 33);
    \u0275\u0275text(77, " Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 42);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 43)(81, "button", 44);
    \u0275\u0275listener("click", function ApplianceManagementComponent_div_53_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeApplianceDetails());
    });
    \u0275\u0275text(82, " Close ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.applianceName || "-", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.companyName || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.modelNumber || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.utilityName || ctx_r1.utilityName || "-", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.ratedVoltage, " V ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedApplianceDetails.minCurrent, " - ", ctx_r1.selectedApplianceDetails.maxCurrent, " A ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedApplianceDetails.minPower, " - ", ctx_r1.selectedApplianceDetails.maxPower, " W ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.standbyPower, " W ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.normalPowerFactor, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.selectedApplianceDetails.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r1.selectedApplianceDetails.isCritical ? "bg-danger/10 text-danger" : "bg-success/10 text-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.isCritical ? "Yes" : "No", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.priorityLevel || "Normal", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedApplianceDetails.description || "No description provided.", " ");
  }
}
function ApplianceManagementComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "p", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275listener("click", function ApplianceManagementComponent_div_54_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToSensor());
    });
    \u0275\u0275element(5, "i", 49);
    \u0275\u0275text(6, " Back to Sensors ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pageError, " ");
  }
}
function ApplianceManagementComponent_ng_container_55_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275element(2, "div", 82);
    \u0275\u0275elementStart(3, "p", 83);
    \u0275\u0275text(4, "Loading Appliances...");
    \u0275\u0275elementEnd()()();
  }
}
function ApplianceManagementComponent_ng_container_55_div_28_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1, " Critical ");
    \u0275\u0275elementEnd();
  }
}
function ApplianceManagementComponent_ng_container_55_div_28_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1, " Assigned ");
    \u0275\u0275elementEnd();
  }
}
function ApplianceManagementComponent_ng_container_55_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_div_28_Template_div_click_0_listener() {
      const appliance_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApplianceDetails(appliance_r6));
    })("keydown.enter", function ApplianceManagementComponent_ng_container_55_div_28_Template_div_keydown_enter_0_listener() {
      const appliance_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApplianceDetails(appliance_r6));
    })("keydown.space", function ApplianceManagementComponent_ng_container_55_div_28_Template_div_keydown_space_0_listener($event) {
      const appliance_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openApplianceDetails(appliance_r6);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "div", 85)(2, "div", 86)(3, "input", 87);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_div_28_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function ApplianceManagementComponent_ng_container_55_div_28_Template_input_change_3_listener() {
      const appliance_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleApplianceSelection(appliance_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 88)(5, "div", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 91);
    \u0275\u0275template(10, ApplianceManagementComponent_ng_container_55_div_28_span_10_Template, 2, 0, "span", 92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ApplianceManagementComponent_ng_container_55_div_28_span_11_Template, 2, 0, "span", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 94)(13, "div")(14, "p", 60);
    \u0275\u0275text(15, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 95);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "p", 60);
    \u0275\u0275text(20, "Power");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 96);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 97)(24, "button", 98);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_div_28_Template_button_click_24_listener($event) {
      const appliance_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.edit(appliance_r6));
    });
    \u0275\u0275element(25, "i", 99);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const appliance_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("appliance-card-selected", ctx_r1.isApplianceSelected(appliance_r6.applianceId))("appliance-card-assigned", ctx_r1.isAssignedAppliance(appliance_r6.applianceId));
    \u0275\u0275attribute("aria-label", "View details for " + appliance_r6.applianceName);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isApplianceSelected(appliance_r6.applianceId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", appliance_r6.applianceName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appliance_r6.companyName || "No company", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", appliance_r6.isCritical);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAssignedAppliance(appliance_r6.applianceId));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(appliance_r6.modelNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", appliance_r6.minPower, " - ", appliance_r6.maxPower, " W");
  }
}
function ApplianceManagementComponent_ng_container_55_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "p", 103);
    \u0275\u0275text(2, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 104);
    \u0275\u0275text(4, "Try another search or add a custom appliance.");
    \u0275\u0275elementEnd()();
  }
}
function ApplianceManagementComponent_ng_container_55_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 105)(2, "div", 81);
    \u0275\u0275element(3, "div", 82);
    \u0275\u0275elementStart(4, "p", 83);
    \u0275\u0275text(5, " Loading Appliances... ");
    \u0275\u0275elementEnd()()()();
  }
}
function ApplianceManagementComponent_ng_container_55_tr_50_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1, " Assigned ");
    \u0275\u0275elementEnd();
  }
}
function ApplianceManagementComponent_ng_container_55_tr_50_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1, " Critical ");
    \u0275\u0275elementEnd();
  }
}
function ApplianceManagementComponent_ng_container_55_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 106);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_tr_50_Template_tr_click_0_listener() {
      const appliance_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApplianceDetails(appliance_r8));
    })("keydown.enter", function ApplianceManagementComponent_ng_container_55_tr_50_Template_tr_keydown_enter_0_listener() {
      const appliance_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openApplianceDetails(appliance_r8));
    })("keydown.space", function ApplianceManagementComponent_ng_container_55_tr_50_Template_tr_keydown_space_0_listener($event) {
      const appliance_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openApplianceDetails(appliance_r8);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "td", 107)(2, "div", 108)(3, "input", 109);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_tr_50_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function ApplianceManagementComponent_ng_container_55_tr_50_Template_input_change_3_listener() {
      const appliance_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleApplianceSelection(appliance_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td", 110)(7, "div", 111)(8, "span", 112);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ApplianceManagementComponent_ng_container_55_tr_50_span_10_Template, 2, 0, "span", 113);
    \u0275\u0275elementStart(11, "div", 114);
    \u0275\u0275template(12, ApplianceManagementComponent_ng_container_55_tr_50_span_12_Template, 2, 0, "span", 115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td", 110);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 110);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 110);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 110)(20, "span", 116);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 117)(23, "div", 118)(24, "div", 119)(25, "button", 120);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_tr_50_Template_button_click_25_listener($event) {
      const appliance_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.edit(appliance_r8));
    });
    \u0275\u0275element(26, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 121);
    \u0275\u0275text(28, " Edit Appliance ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const appliance_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("appliance-row-selected", ctx_r1.isApplianceSelected(appliance_r8.applianceId))("appliance-row-assigned", ctx_r1.isAssignedAppliance(appliance_r8.applianceId));
    \u0275\u0275attribute("aria-label", "View details for " + appliance_r8.applianceName);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isApplianceSelected(appliance_r8.applianceId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pageIndex * ctx_r1.pageSize + i_r9 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", appliance_r8.applianceName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAssignedAppliance(appliance_r8.applianceId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", appliance_r8.isCritical);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appliance_r8.companyName || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appliance_r8.modelNumber || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", appliance_r8.minPower, " - ", appliance_r8.maxPower, " W ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", appliance_r8.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appliance_r8.isActive ? "Active" : "Inactive", " ");
  }
}
function ApplianceManagementComponent_ng_container_55_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 124)(2, "p", 103);
    \u0275\u0275text(3, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 104);
    \u0275\u0275text(5, "Try adjusting search or create a new appliance.");
    \u0275\u0275elementEnd()()();
  }
}
function ApplianceManagementComponent_ng_container_55_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 125);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_button_58_Template_button_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", p_r11 === ctx_r1.pageIndex ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r11 + 1, " ");
  }
}
function ApplianceManagementComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50)(2, "div", 51)(3, "div", 52)(4, "div", 32)(5, "p", 33);
    \u0275\u0275text(6, " Sensor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32)(10, "p", 33);
    \u0275\u0275text(11, " Utility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 55);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignSelectedAppliance());
    });
    \u0275\u0275element(15, "i", 56);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 57)(18, "div", 58)(19, "p", 59);
    \u0275\u0275text(20, " Total Appliances: ");
    \u0275\u0275elementStart(21, "span", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 61)(24, "yx-select", 62);
    \u0275\u0275twoWayListener("valueChange", function ApplianceManagementComponent_ng_container_55_Template_yx_select_valueChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedSearchField, $event) || (ctx_r1.selectedSearchField = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function ApplianceManagementComponent_ng_container_55_Template_yx_select_valueChange_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchAppliances());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ApplianceManagementComponent_ng_container_55_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ApplianceManagementComponent_ng_container_55_Template_input_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchAppliances());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 64);
    \u0275\u0275template(27, ApplianceManagementComponent_ng_container_55_div_27_Template, 5, 0, "div", 65)(28, ApplianceManagementComponent_ng_container_55_div_28_Template, 26, 13, "div", 66)(29, ApplianceManagementComponent_ng_container_55_div_29_Template, 5, 0, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 68)(31, "table", 69)(32, "thead", 70)(33, "tr")(34, "th", 71);
    \u0275\u0275text(35, "Sr #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 71);
    \u0275\u0275text(37, "Appliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 71);
    \u0275\u0275text(39, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 71);
    \u0275\u0275text(41, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 71);
    \u0275\u0275text(43, "Power Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 71);
    \u0275\u0275text(45, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 72);
    \u0275\u0275text(47, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "tbody", 73);
    \u0275\u0275template(49, ApplianceManagementComponent_ng_container_55_tr_49_Template, 6, 0, "tr", 24)(50, ApplianceManagementComponent_ng_container_55_tr_50_Template, 29, 16, "tr", 74)(51, ApplianceManagementComponent_ng_container_55_tr_51_Template, 6, 0, "tr", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 75)(53, "p", 76);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 77)(56, "button", 78);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(57, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ApplianceManagementComponent_ng_container_55_button_58_Template, 2, 2, "button", 79);
    \u0275\u0275elementStart(59, "button", 78);
    \u0275\u0275listener("click", function ApplianceManagementComponent_ng_container_55_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(60, " Next ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sensorName || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.utilityName || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canAssignAppliance || ctx_r1.isAssigning);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isAssigning ? "Assigning..." : "Assign Appliance", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredAppliances.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.searchFields);
    \u0275\u0275twoWayProperty("value", ctx_r1.selectedSearchField);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoading || ctx_r1.isAssignmentLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pagedAppliances);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && !ctx_r1.isAssignmentLoading && ctx_r1.pagedAppliances.length === 0);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.isLoading || ctx_r1.isAssignmentLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pagedAppliances);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && !ctx_r1.isAssignmentLoading && ctx_r1.pagedAppliances.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.filteredAppliances.length ? ctx_r1.pageIndex * ctx_r1.pageSize + 1 : 0, " - ", ctx_r1.pageEnd, " of ", ctx_r1.filteredAppliances.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pageIndex === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r1.pageIndex + 1) * ctx_r1.pageSize >= ctx_r1.filteredAppliances.length);
  }
}
var ApplianceManagementComponent = class _ApplianceManagementComponent {
  constructor(applianceService, toaster, router, dialog) {
    this.applianceService = applianceService;
    this.toaster = toaster;
    this.router = router;
    this.dialog = dialog;
    this.sensorName = "";
    this.utilityName = "";
    this.searchText = "";
    this.selectedSearchField = "applianceName";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.isAssignmentLoading = false;
    this.isAssigning = false;
    this.Appliances = [];
    this.filteredAppliances = [];
    this.currentAssignment = null;
    this.assignedApplianceId = "";
    this.selectedApplianceId = "";
    this.selectedApplianceDetails = null;
    this.pageError = "";
    this.searchFields = [
      { label: "Appliance Name", value: "applianceName" },
      { label: "Company Name", value: "companyName" },
      { label: "Model Number", value: "modelNumber" },
      { label: "Description", value: "description" }
    ];
  }
  ngOnInit() {
    const nav = history.state || {};
    this.fkFloor = nav.fkFloor;
    this.fkBuilding = nav.fkBuilding;
    this.fkFacility = nav.fkFacility;
    this.fkBusiness = nav.fkBusiness;
    this.fkSection = nav.fkSection;
    this.fkOffice = nav.fkOffice;
    this.fkDevice = nav.fkDevice;
    this.fkSensor = nav.fkSensor || nav.sensorId;
    this.fkUtility = nav.fkUtility || nav.fkutility;
    this.sensorName = nav.sensorName || "Selected Sensor";
    this.utilityName = nav.utilityName || "";
    if (!this.fkSensor) {
      this.pageError = "Sensor information was not provided. Please open appliance management from Sensor Management.";
      return;
    }
    this.loadAppliances();
    this.loadCurrentAssignment();
  }
  get pagedAppliances() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredAppliances.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredAppliances.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredAppliances.length);
  }
  get canAssignAppliance() {
    return !!this.selectedApplianceId && this.selectedApplianceId !== this.assignedApplianceId;
  }
  loadAppliances(selectId) {
    this.isLoading = true;
    this.applianceService.getAssignableAppliancesBySensorId(this.fkSensor).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.Appliances = [];
          this.filteredAppliances = [];
          this.toaster.error(res.remarks || "Failed to load business appliances");
          this.isLoading = false;
          return;
        }
        const context = res.data;
        this.fkBusiness = context?.fkBusiness || this.fkBusiness;
        this.fkUtility = context?.fkUtility || this.fkUtility;
        this.sensorName = context?.sensorName || this.sensorName;
        this.utilityName = context?.utilityName || this.utilityName;
        this.Appliances = context?.appliances ?? [];
        if (selectId) {
          this.selectedApplianceId = selectId;
        }
        this.applySearch();
        this.isLoading = false;
      },
      error: () => {
        this.Appliances = [];
        this.filteredAppliances = [];
        this.isLoading = false;
        this.toaster.error("Failed to load business appliances");
      }
    });
  }
  loadCurrentAssignment() {
    this.isAssignmentLoading = true;
    this.applianceService.getSensorApplianceBySensorId(this.fkSensor).subscribe({
      next: (res) => {
        this.currentAssignment = res.success === false ? null : res.data ?? null;
        this.assignedApplianceId = this.currentAssignment?.fkAppliance || "";
        if (this.assignedApplianceId) {
          this.selectedApplianceId = this.assignedApplianceId;
        }
        this.applySearch();
        this.isAssignmentLoading = false;
      },
      error: () => {
        this.currentAssignment = null;
        this.assignedApplianceId = "";
        this.applySearch();
        this.isAssignmentLoading = false;
      }
    });
  }
  searchAppliances() {
    this.applySearch();
  }
  applySearch() {
    const term = this.searchText.toLowerCase().trim();
    const searchedAppliances = !term ? [...this.Appliances] : this.Appliances.filter((appliance) => String(appliance[this.selectedSearchField] ?? "").toLowerCase().includes(term));
    this.filteredAppliances = this.sortAssignedFirst(searchedAppliances);
    this.pageIndex = 0;
  }
  toggleApplianceSelection(appliance) {
    this.selectedApplianceId = this.selectedApplianceId === appliance.applianceId ? "" : appliance.applianceId;
  }
  isApplianceSelected(id) {
    return this.selectedApplianceId === id;
  }
  isAssignedAppliance(id) {
    return this.assignedApplianceId === id;
  }
  assignSelectedAppliance() {
    if (!this.selectedApplianceId) {
      this.toaster.error("Please select an appliance first");
      return;
    }
    if (this.selectedApplianceId === this.assignedApplianceId) {
      this.toaster.info("This appliance is already assigned to the sensor");
      return;
    }
    this.isAssigning = true;
    this.applianceService.assignApplianceToSensor({
      fkSensor: this.fkSensor,
      fkAppliance: this.selectedApplianceId,
      remarks: "Assigned from Appliance Management",
      isActive: true
    }).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.toaster.error(res.remarks || "Failed to assign appliance");
          this.isAssigning = false;
          return;
        }
        this.currentAssignment = res.data ?? this.currentAssignment;
        this.assignedApplianceId = this.currentAssignment?.fkAppliance || this.selectedApplianceId;
        this.toaster.success("Appliance assigned to sensor");
        this.applySearch();
        this.isAssigning = false;
      },
      error: () => {
        this.isAssigning = false;
        this.toaster.error("Failed to assign appliance");
      }
    });
  }
  addAppliance() {
    const dialogRef = this.dialog.open(ApplianceManagementAddUpdateComponent, {
      width: "720px",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add",
        fkUtility: this.fkUtility,
        utilityName: this.utilityName,
        fkBusiness: this.fkBusiness
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.status === "saved" || result === "saved") {
        this.loadAppliances(result?.id);
      }
    });
  }
  edit(appliance) {
    const dialogRef = this.dialog.open(ApplianceManagementAddUpdateComponent, {
      width: "720px",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "edit",
        value: appliance,
        fkUtility: this.fkUtility,
        utilityName: this.utilityName,
        fkBusiness: this.fkBusiness
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.status === "saved" || result === "saved") {
        this.loadAppliances();
      }
    });
  }
  openApplianceDetails(appliance) {
    this.selectedApplianceDetails = appliance;
  }
  closeApplianceDetails() {
    this.selectedApplianceDetails = null;
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredAppliances.length) {
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
  goToFacility() {
    this.router.navigate(["/core/facility-management"], {
      state: { fkBusiness: this.fkBusiness }
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
  goToFloor() {
    this.router.navigate(["/core/floor-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding
      }
    });
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
  goToSensor() {
    this.router.navigate(["/core/sensor-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: this.fkOffice,
        fkDevice: this.fkDevice
      }
    });
  }
  sortAssignedFirst(appliances) {
    if (!this.assignedApplianceId)
      return [...appliances];
    return [...appliances].sort((a, b) => {
      if (a.applianceId === this.assignedApplianceId)
        return -1;
      if (b.applianceId === this.assignedApplianceId)
        return 1;
      return 0;
    });
  }
  static {
    this.\u0275fac = function ApplianceManagementComponent_Factory(t) {
      return new (t || _ApplianceManagementComponent)(\u0275\u0275directiveInject(ApplianceManagementService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplianceManagementComponent, selectors: [["app-appliance-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 3, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "ri-community-line", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "ri-building-4-line", "text-sm", "sm:text-base"], [1, "ri-stack-line", "text-sm", "sm:text-base"], [1, "ri-layout-grid-line", "text-sm", "sm:text-base"], [1, "ri-door-open-line", "text-sm", "sm:text-base"], [1, "las", "la-broadcast-tower", "text-sm", "sm:text-base"], [1, "las", "la-microchip", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-plug", "text-sm", "sm:text-base"], ["class", "appliance-details-overlay fixed inset-0 z-[1000] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "rounded-md bg-[rgb(var(--light))] shadow-md mx-5 mb-6 p-6", 4, "ngIf"], [4, "ngIf"], [1, "appliance-details-overlay", "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "bg-black/45", "px-4", "py-6", "backdrop-blur-sm", 3, "click"], [1, "appliance-details-popup", "w-full", "max-w-2xl", "overflow-hidden", "border", "border-white/20", "bg-[rgb(var(--light))]", "shadow-2xl", 3, "click"], [1, "appliance-details-popup-header", "flex", "items-center", "justify-between", "gap-3", "bg-[rgb(var(--primary))]", "px-6", "py-3"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "appliance-details-popup-body", "max-h-[78vh]", "overflow-y-auto", "space-y-4", "px-6", "py-5"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-[rgb(var(--primary))]"], [1, "mt-1", "text-sm", "font-semibold", "text-indigo-600"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-3"], [1, "mt-1", "break-words", "text-sm", "text-[rgb(var(--dark))]"], [1, "mt-1", "text-sm", "text-[rgb(var(--dark))]"], [1, "mt-2", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-3", "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "text-xs", "text-muted"], [1, "mt-1", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-1", "whitespace-pre-line", "break-words", "text-sm", "leading-6", "text-[rgb(var(--dark))]"], [1, "flex", "justify-end", "border-t", "border-[rgb(var(--gray-200))]", "pt-4"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6", "p-6"], [1, "rounded-lg", "border", "border-[rgb(var(--red-100))]", "bg-[rgb(var(--red-100))]/30", "p-4"], [1, "text-sm", "font-semibold", "text-[rgb(var(--red-600))]"], ["type", "button", 1, "mt-4", "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-[rgb(var(--primary))]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], [1, "las", "la-arrow-left", "text-lg"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-4", "p-4"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "grid", "flex-1", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "mt-1", "break-words", "text-sm", "font-semibold", "text-indigo-600"], [1, "mt-1", "break-words", "text-sm", "font-semibold", "text-[rgb(var(--dark))]"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-[rgb(var(--primary))]", "px-5", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], [1, "las", "la-link", "text-lg"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6", "overflow-hidden"], [1, "flex", "flex-col", "gap-3", "p-4", "border-b", "lg:flex-row", "lg:items-end", "lg:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], [1, "grid", "w-full", "grid-cols-1", "gap-3", "sm:grid-cols-[220px_minmax(0,1fr)]", "lg:w-[560px]"], ["labelKey", "label", "valueKey", "value", "placeholder", "Search By", 3, "valueChange", "items", "value"], ["type", "text", "placeholder", "Search appliances...", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "appliance-card cursor-pointer rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", "role", "button", "tabindex", "0", 3, "appliance-card-selected", "appliance-card-assigned", "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], ["class", "appliance-row cursor-pointer border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", "role", "button", "tabindex", "0", 3, "appliance-row-selected", "appliance-row-assigned", "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-3", "px-4", "py-3", "border-t", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-gray-500"], [1, "flex", "flex-wrap", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], ["role", "button", "tabindex", "0", 1, "appliance-card", "cursor-pointer", "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4", 3, "click", "keydown.enter", "keydown.space"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-2"], ["type", "checkbox", 1, "form-check-input", "mt-0.5", "h-5", "w-5", "accent-green-600", 3, "click", "change", "checked"], [1, "min-w-0"], [1, "truncate", "font-semibold", "text-indigo-600", "text-sm"], [1, "truncate", "text-xs", "text-[rgb(var(--primary))]"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], ["class", "rounded-full bg-danger/10 px-2 py-0.5 text-[10px] font-semibold text-danger", 4, "ngIf"], ["class", "rounded-full bg-[rgb(var(--primary-100))] px-3 py-1 text-xs font-semibold text-[rgb(var(--primary))]", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "text-xs"], [1, "mt-1", "break-words", "text-[rgb(var(--dark))]"], [1, "mt-1", "text-[rgb(var(--dark))]"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg", "leading-none"], [1, "rounded-full", "bg-danger/10", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-danger"], [1, "rounded-full", "bg-[rgb(var(--primary-100))]", "px-3", "py-1", "text-xs", "font-semibold", "text-[rgb(var(--primary))]"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "7", 1, "px-6", "py-14", "text-center"], ["role", "button", "tabindex", "0", 1, "appliance-row", "cursor-pointer", "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]", 3, "click", "keydown.enter", "keydown.space"], [1, "px-4", "py-3", "font-medium"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", 1, "form-check-input", "me-1", "font-semibold", 3, "click", "change", "checked"], [1, "px-4", "py-3"], [1, "flex", "flex-col"], [1, "font-semibold", "text-indigo-600"], ["class", "mt-1 w-max rounded-full bg-[rgb(var(--primary-100))] px-3 py-1 text-xs font-semibold text-[rgb(var(--primary))]", 4, "ngIf"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], ["class", "w-max rounded-full bg-danger/10 px-2 py-0.5 text-[10px] font-semibold text-danger", 4, "ngIf"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "mt-1", "w-max", "rounded-full", "bg-[rgb(var(--primary-100))]", "px-3", "py-1", "text-xs", "font-semibold", "text-[rgb(var(--primary))]"], [1, "w-max", "rounded-full", "bg-danger/10", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-danger"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function ApplianceManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Appliance Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage appliances linked with the selected sensor utility. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_9_listener() {
          return ctx.addAppliance();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Appliance ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "button", 10);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility();
        });
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_19_listener() {
          return ctx.goToBuilding();
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementStart(24, "button", 10);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_24_listener() {
          return ctx.goToFloor();
        });
        \u0275\u0275element(25, "i", 15);
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Floor");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "i", 13);
        \u0275\u0275elementStart(29, "button", 10);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_29_listener() {
          return ctx.goToSection();
        });
        \u0275\u0275element(30, "i", 16);
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "Section");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "i", 13);
        \u0275\u0275elementStart(34, "button", 10);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_34_listener() {
          return ctx.goToOffice();
        });
        \u0275\u0275element(35, "i", 17);
        \u0275\u0275elementStart(36, "span", 12);
        \u0275\u0275text(37, "Office");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "i", 13);
        \u0275\u0275elementStart(39, "button", 10);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_39_listener() {
          return ctx.goToDevice();
        });
        \u0275\u0275element(40, "i", 18);
        \u0275\u0275elementStart(41, "span", 12);
        \u0275\u0275text(42, "Device");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(43, "i", 13);
        \u0275\u0275elementStart(44, "button", 10);
        \u0275\u0275listener("click", function ApplianceManagementComponent_Template_button_click_44_listener() {
          return ctx.goToSensor();
        });
        \u0275\u0275element(45, "i", 19);
        \u0275\u0275elementStart(46, "span", 12);
        \u0275\u0275text(47, "Sensor");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(48, "i", 13);
        \u0275\u0275elementStart(49, "span", 20);
        \u0275\u0275element(50, "i", 21);
        \u0275\u0275elementStart(51, "span", 12);
        \u0275\u0275text(52, "Appliance");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(53, ApplianceManagementComponent_div_53_Template, 83, 17, "div", 22)(54, ApplianceManagementComponent_div_54_Template, 7, 1, "div", 23)(55, ApplianceManagementComponent_ng_container_55_Template, 61, 20, "ng-container", 24);
      }
      if (rf & 2) {
        \u0275\u0275advance(53);
        \u0275\u0275property("ngIf", ctx.selectedApplianceDetails);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pageError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.pageError);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MaterialModuleModule, YxSelectComponent], styles: ["\n\n.appliance-row-selected[_ngcontent-%COMP%], .appliance-card-selected[_ngcontent-%COMP%] {\n  background: rgb(var(--primary-100));\n}\n.appliance-row-assigned[_ngcontent-%COMP%], .appliance-card-assigned[_ngcontent-%COMP%] {\n  box-shadow: inset 3px 0 0 rgb(var(--primary));\n}\n.appliance-card-selected[_ngcontent-%COMP%] {\n  border-color: rgb(var(--primary));\n}\n.appliance-details-popup[_ngcontent-%COMP%] {\n  border-radius: 0.75rem !important;\n  overflow: hidden;\n  transform: translateZ(0);\n}\n.appliance-details-popup-header[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.appliance-details-popup-body[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n  overscroll-behavior: contain;\n  scrollbar-gutter: stable;\n}\n.appliance-details-popup-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.45rem;\n}\n.appliance-details-popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: rgb(var(--gray-300));\n}\n/*# sourceMappingURL=appliance-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplianceManagementComponent, { className: "ApplianceManagementComponent", filePath: "src\\app\\components\\core\\appliance-management\\appliance-management.component.ts", lineNumber: 22 });
})();
export {
  ApplianceManagementComponent
};
//# sourceMappingURL=chunk-6DV2JKBD.js.map
