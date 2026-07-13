import {
  MaterialModuleModule
} from "./chunk-7LK7NDKG.js";
import "./chunk-K2JMPSHA.js";
import "./chunk-6MZ7UVS4.js";
import "./chunk-AZ553IHQ.js";
import "./chunk-3ZFR3IJH.js";
import "./chunk-V53V3TUK.js";
import "./chunk-JJOWJPDK.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7CONLPWZ.js";
import {
  UserService
} from "./chunk-WHOMYXFN.js";
import {
  ToastrService
} from "./chunk-SFDR4GMF.js";
import {
  ActivatedRoute
} from "./chunk-5DAVUJF5.js";
import "./chunk-EQ2Y7ZIZ.js";
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AVLIJGNB.js";
import "./chunk-QURSFKIH.js";
import {
  __async
} from "./chunk-Y6Q6HMFU.js";

// src/app/components/settings/energy-configuration/energy-configuration.service.ts
var EnergyConfigurationService = class _EnergyConfigurationService {
  constructor(http) {
    this.http = http;
    this.api = environment.baseUrl + "/EnergyConfiguration";
  }
  getByBusinessId(id) {
    return this.http.get(`${this.api}/GetByBusinessId`, { params: { id } });
  }
  save(model) {
    return this.http.put(this.api, model);
  }
  static {
    this.\u0275fac = function EnergyConfigurationService_Factory(t) {
      return new (t || _EnergyConfigurationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnergyConfigurationService, factory: _EnergyConfigurationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/settings/energy-configuration/energy-configuration.component.ts
function EnergyConfigurationComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading energy settings...");
    \u0275\u0275elementEnd()();
  }
}
function EnergyConfigurationComponent_main_16_section_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 20)(2, "span", 21);
    \u0275\u0275element(3, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2");
    \u0275\u0275text(6, "Tariff Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Define the active electricity tariff and billing rates for this business.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 23)(10, "label")(11, "span");
    \u0275\u0275text(12, "Plan name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_18_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.tariffPlan.planName, $event) || (ctx_r1.model.tariffPlan.planName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label")(15, "span");
    \u0275\u0275text(16, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_18_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.tariffPlan.currency, $event) || (ctx_r1.model.tariffPlan.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label")(19, "span");
    \u0275\u0275text(20, "Standard rate / kWh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_18_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.tariffPlan.standardRatePerKwh, $event) || (ctx_r1.model.tariffPlan.standardRatePerKwh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label")(23, "span");
    \u0275\u0275text(24, "Peak rate / kWh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_18_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.tariffPlan.peakRatePerKwh, $event) || (ctx_r1.model.tariffPlan.peakRatePerKwh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label")(27, "span");
    \u0275\u0275text(28, "Off-peak rate / kWh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_18_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.tariffPlan.offPeakRatePerKwh, $event) || (ctx_r1.model.tariffPlan.offPeakRatePerKwh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label")(31, "span");
    \u0275\u0275text(32, "Demand charge / kW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_18_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.tariffPlan.demandChargePerKw, $event) || (ctx_r1.model.tariffPlan.demandChargePerKw = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.tariffPlan.planName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.tariffPlan.currency);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.tariffPlan.standardRatePerKwh);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.tariffPlan.peakRatePerKwh);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.tariffPlan.offPeakRatePerKwh);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.tariffPlan.demandChargePerKw);
  }
}
function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    const di_r8 = ctx.index;
    \u0275\u0275property("ngValue", di_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r7);
  }
}
function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label")(2, "span");
    \u0275\u0275text(3, "Period name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template_input_ngModelChange_4_listener($event) {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(p_r6.periodName, $event) || (p_r6.periodName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label")(6, "span");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template_select_ngModelChange_8_listener($event) {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(p_r6.periodType, $event) || (p_r6.periodType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 37);
    \u0275\u0275text(10, "Peak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 38);
    \u0275\u0275text(12, "Off-peak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 39);
    \u0275\u0275text(14, "Standard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "label")(16, "span");
    \u0275\u0275text(17, "Start time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template_input_ngModelChange_18_listener($event) {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(p_r6.startTime, $event) || (p_r6.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label")(20, "span");
    \u0275\u0275text(21, "End time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template_input_ngModelChange_22_listener($event) {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(p_r6.endTime, $event) || (p_r6.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "label")(24, "span");
    \u0275\u0275text(25, "Applies on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template_select_ngModelChange_26_listener($event) {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(p_r6.dayOfWeek, $event) || (p_r6.dayOfWeek = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 41);
    \u0275\u0275text(28, "Every day");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, EnergyConfigurationComponent_main_16_section_19_div_13_div_1_option_29_Template, 2, 2, "option", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 43)(31, "span");
    \u0275\u0275text(32, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template_input_ngModelChange_33_listener($event) {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(p_r6.isActive, $event) || (p_r6.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 46);
    \u0275\u0275listener("click", function EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template_button_click_35_listener() {
      const i_r9 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removePeriod(i_r9));
    });
    \u0275\u0275element(36, "i", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", p_r6.periodName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", p_r6.periodType);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", p_r6.startTime);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", p_r6.endTime);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", p_r6.dayOfWeek);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.days);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", p_r6.isActive);
  }
}
function EnergyConfigurationComponent_main_16_section_19_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, EnergyConfigurationComponent_main_16_section_19_div_13_div_1_Template, 37, 8, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.model.tariffPlan.timePeriods);
  }
}
function EnergyConfigurationComponent_main_16_section_19_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "span");
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No schedule configured");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add a time period to configure peak and off-peak tariff windows.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function EnergyConfigurationComponent_main_16_section_19_div_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addPeriod());
    });
    \u0275\u0275element(8, "i", 30);
    \u0275\u0275text(9, "Add First Period");
    \u0275\u0275elementEnd()();
  }
}
function EnergyConfigurationComponent_main_16_section_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 26)(2, "div", 27)(3, "span", 21);
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7, "Tariff Time Periods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Create peak, off-peak or standard windows. Leave the day blank to apply every day.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 29);
    \u0275\u0275listener("click", function EnergyConfigurationComponent_main_16_section_19_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPeriod());
    });
    \u0275\u0275element(11, "i", 30);
    \u0275\u0275text(12, "Add Period");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, EnergyConfigurationComponent_main_16_section_19_div_13_Template, 2, 1, "div", 31)(14, EnergyConfigurationComponent_main_16_section_19_div_14_Template, 10, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.model.tariffPlan.timePeriods.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.model.tariffPlan.timePeriods.length);
  }
}
function EnergyConfigurationComponent_main_16_section_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 20)(2, "span", 21);
    \u0275\u0275element(3, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2");
    \u0275\u0275text(6, "Demand Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Set demand thresholds and decide how the system responds to consumption peaks.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 23)(10, "label")(11, "span");
    \u0275\u0275text(12, "Demand limit (kW)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_20_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.demandLimitKw, $event) || (ctx_r1.model.demandManagement.demandLimitKw = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label")(15, "span");
    \u0275\u0275text(16, "Warning threshold (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_20_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.warningThresholdPercent, $event) || (ctx_r1.model.demandManagement.warningThresholdPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label")(19, "span");
    \u0275\u0275text(20, "Recovery threshold (kW)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_20_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.recoveryThresholdKw, $event) || (ctx_r1.model.demandManagement.recoveryThresholdKw = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label")(23, "span");
    \u0275\u0275text(24, "Demand interval (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_20_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.demandIntervalMinutes, $event) || (ctx_r1.model.demandManagement.demandIntervalMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label")(27, "span");
    \u0275\u0275text(28, "Stabilization time (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_20_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.stabilizationMinutes, $event) || (ctx_r1.model.demandManagement.stabilizationMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 55)(31, "label", 56)(32, "span", 57);
    \u0275\u0275element(33, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 59)(35, "strong");
    \u0275\u0275text(36, "Tariff peak-hour control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "small");
    \u0275\u0275text(38, "Allow automation during configured peak tariff periods.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "span", 43)(40, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_20_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.enablePeakHourControl, $event) || (ctx_r1.model.demandManagement.enablePeakHourControl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "label", 56)(43, "span", 57);
    \u0275\u0275element(44, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 59)(46, "strong");
    \u0275\u0275text(47, "Measured demand control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "small");
    \u0275\u0275text(49, "Respond when measured demand reaches the configured limit.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "span", 43)(51, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_20_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.enableDemandThresholdControl, $event) || (ctx_r1.model.demandManagement.enableDemandThresholdControl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "span", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 61);
    \u0275\u0275element(54, "i", 62);
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "Peak-demand time is discovered from the highest configured interval average; it is not manually entered.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.demandLimitKw);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.warningThresholdPercent);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.recoveryThresholdKw);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.demandIntervalMinutes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.stabilizationMinutes);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.enablePeakHourControl);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.enableDemandThresholdControl);
  }
}
function EnergyConfigurationComponent_main_16_section_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 20)(2, "span", 21);
    \u0275\u0275element(3, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2");
    \u0275\u0275text(6, "HVAC Automation Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Review automation readiness and control how HVAC recommendations are applied.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "label", 63)(10, "span", 57);
    \u0275\u0275element(11, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 59)(13, "strong");
    \u0275\u0275text(14, "Suggestion-only mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "small");
    \u0275\u0275text(16, "Generate energy-saving recommendations without automatically controlling HVAC appliances.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span", 43)(18, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EnergyConfigurationComponent_main_16_section_21_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.demandManagement.suggestionOnlyMode, $event) || (ctx_r1.model.demandManagement.suggestionOnlyMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 65);
    \u0275\u0275element(21, "i", 66);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Keep suggestion-only mode enabled until the HVAC executor, manual override protection and staggered restart logic are implemented.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 67)(25, "div", 68)(26, "span", 69);
    \u0275\u0275element(27, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "small");
    \u0275\u0275text(30, "Peak-hour trigger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 68)(34, "span", 69);
    \u0275\u0275element(35, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "small");
    \u0275\u0275text(38, "Demand trigger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 68)(42, "span", 69);
    \u0275\u0275element(43, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div")(45, "small");
    \u0275\u0275text(46, "Demand limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.demandManagement.suggestionOnlyMode);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("enabled", ctx_r1.model.demandManagement.enablePeakHourControl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.model.demandManagement.enablePeakHourControl ? "Enabled" : "Disabled");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("enabled", ctx_r1.model.demandManagement.enableDemandThresholdControl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.model.demandManagement.enableDemandThresholdControl ? "Enabled" : "Disabled");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.model.demandManagement.demandLimitKw, " kW");
  }
}
function EnergyConfigurationComponent_main_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 11)(1, "nav", 12)(2, "button", 13);
    \u0275\u0275listener("click", function EnergyConfigurationComponent_main_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "tariff");
    });
    \u0275\u0275element(3, "i", 14);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Tariffs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275listener("click", function EnergyConfigurationComponent_main_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "schedule");
    });
    \u0275\u0275element(7, "i", 15);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Peak & Off-Peak Schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 13);
    \u0275\u0275listener("click", function EnergyConfigurationComponent_main_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "demand");
    });
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Demand Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275listener("click", function EnergyConfigurationComponent_main_16_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "hvac");
    });
    \u0275\u0275element(15, "i", 17);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "HVAC Automation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, EnergyConfigurationComponent_main_16_section_18_Template, 34, 6, "section", 18)(19, EnergyConfigurationComponent_main_16_section_19_Template, 15, 2, "section", 18)(20, EnergyConfigurationComponent_main_16_section_20_Template, 57, 7, "section", 18)(21, EnergyConfigurationComponent_main_16_section_21_Template, 49, 8, "section", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "tariff");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "schedule");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "demand");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "hvac");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "tariff");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "schedule");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "demand");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "hvac");
  }
}
var EnergyConfigurationComponent = class _EnergyConfigurationComponent {
  constructor(api, users, route, toast) {
    this.api = api;
    this.users = users;
    this.route = route;
    this.toast = toast;
    this.activeTab = "tariff";
    this.loading = false;
    this.saving = false;
    this.businessId = "";
    this.model = this.emptyModel("");
    this.days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const user = yield this.users.get();
      this.businessId = this.route.snapshot.queryParamMap.get("businessId") || history.state?.businessId || user?.fkBusiness || "";
      if (!this.businessId) {
        this.toast.error("Business id is required to manage energy settings.");
        return;
      }
      this.load();
    });
  }
  load() {
    this.loading = true;
    this.api.getByBusinessId(this.businessId).subscribe({
      next: (r) => {
        if (r.success && r.data) {
          this.model = r.data;
        } else
          this.toast.error(r.remarks || "Unable to load settings");
        this.loading = false;
      },
      error: () => {
        this.toast.error("Unable to load energy settings");
        this.loading = false;
      }
    });
  }
  save() {
    if (!this.validate())
      return;
    this.saving = true;
    this.model.fkBusiness = this.businessId;
    this.model.tariffPlan.fkBusiness = this.businessId;
    this.model.demandManagement.fkBusiness = this.businessId;
    this.api.save(this.model).subscribe({
      next: (r) => {
        this.saving = false;
        if (r.success && r.data) {
          this.model = r.data;
          this.toast.success("Energy settings saved");
        } else
          this.toast.error(r.remarks || "Unable to save");
      },
      error: () => {
        this.saving = false;
        this.toast.error("Unable to save energy settings");
      }
    });
  }
  addPeriod() {
    this.model.tariffPlan.timePeriods.push({
      periodName: "Peak window",
      periodType: "Peak",
      startTime: "18:00",
      endTime: "23:00",
      dayOfWeek: null,
      isActive: true
    });
  }
  removePeriod(i) {
    this.model.tariffPlan.timePeriods.splice(i, 1);
  }
  validate() {
    const d = this.model.demandManagement;
    if (d.recoveryThresholdKw >= d.demandLimitKw) {
      this.toast.error("Recovery threshold must be below demand limit.");
      return false;
    }
    if (this.model.tariffPlan.timePeriods.some((x) => x.isActive && (!x.startTime || !x.endTime))) {
      this.toast.error("Complete all active time periods.");
      return false;
    }
    return true;
  }
  emptyModel(id) {
    return {
      fkBusiness: id,
      tariffPlan: {
        fkBusiness: id,
        planName: "Default Energy Tariff",
        currency: "PKR",
        standardRatePerKwh: 0,
        peakRatePerKwh: 0,
        offPeakRatePerKwh: 0,
        demandChargePerKw: null,
        isActive: true,
        timePeriods: []
      },
      demandManagement: {
        fkBusiness: id,
        demandLimitKw: 15,
        warningThresholdPercent: 90,
        recoveryThresholdKw: 13.5,
        demandIntervalMinutes: 15,
        stabilizationMinutes: 5,
        enablePeakHourControl: false,
        enableDemandThresholdControl: false,
        suggestionOnlyMode: true,
        isActive: true
      }
    };
  }
  static {
    this.\u0275fac = function EnergyConfigurationComponent_Factory(t) {
      return new (t || _EnergyConfigurationComponent)(\u0275\u0275directiveInject(EnergyConfigurationService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnergyConfigurationComponent, selectors: [["app-energy-configuration"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 6, consts: [[1, "energy-settings-page"], [1, "page-banner"], [1, "page-banner__content"], [1, "page-title-row"], [1, "page-icon"], [1, "ri-flashlight-line"], ["type", "button", 1, "save-button", 3, "click", "disabled"], ["class", "loading-card", 4, "ngIf"], ["class", "settings-content", 4, "ngIf"], [1, "loading-card"], [1, "loader"], [1, "settings-content"], ["aria-label", "Energy configuration sections", 1, "tabs"], ["type", "button", 3, "click"], [1, "ri-money-dollar-circle-line"], [1, "ri-time-line"], [1, "ri-speed-up-line"], [1, "ri-temp-cold-line"], ["class", "settings-card", 4, "ngIf"], [1, "settings-card"], [1, "section-heading"], [1, "section-icon"], [1, "ri-price-tag-3-line"], [1, "form-grid"], [1, "yx-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "yx-input", 3, "ngModelChange", "ngModel"], [1, "section-heading", "section-heading--action"], [1, "section-heading__title"], [1, "ri-calendar-schedule-line"], ["type", "button", 1, "secondary-button", 3, "click"], [1, "ri-add-line"], ["class", "period-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "period-list"], ["class", "period", 4, "ngFor", "ngForOf"], [1, "period"], ["placeholder", "Period name", 1, "yx-input", 3, "ngModelChange", "ngModel"], ["value", "Peak"], ["value", "OffPeak"], ["value", "Standard"], ["type", "time", 1, "yx-input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "toggle-field"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "toggle-track"], ["type", "button", "title", "Remove period", 1, "delete-button", 3, "click"], [1, "ri-delete-bin-line"], [1, "empty-state"], [1, "ri-calendar-close-line"], [1, "ri-dashboard-3-line"], ["type", "number", "min", "0.01", 1, "yx-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "100", 1, "yx-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "60", 1, "yx-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "60", 1, "yx-input", 3, "ngModelChange", "ngModel"], [1, "option-list"], [1, "option-card"], [1, "option-icon"], [1, "ri-timer-flash-line"], [1, "option-copy"], [1, "ri-line-chart-line"], [1, "info-note"], [1, "ri-information-line"], [1, "option-card", "featured-option"], [1, "ri-lightbulb-flash-line"], [1, "info-note", "warning-note"], [1, "ri-shield-check-line"], [1, "summary-grid"], [1, "summary-item"], [1, "summary-icon"]], template: function EnergyConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "span", 4);
        \u0275\u0275element(6, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div")(8, "h1");
        \u0275\u0275text(9, "Energy Configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11, "Configure tariffs, peak schedules, demand limits and HVAC automation policy.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function EnergyConfigurationComponent_Template_button_click_12_listener() {
          return ctx.save();
        });
        \u0275\u0275element(13, "i");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, EnergyConfigurationComponent_div_15_Template, 4, 0, "div", 7)(16, EnergyConfigurationComponent_main_16_Template, 22, 12, "main", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("disabled", ctx.saving || ctx.loading || !ctx.businessId);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.saving ? "ri-loader-4-line spin" : "ri-save-line");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Saving..." : "Save Settings", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.businessId);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MaterialModuleModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.energy-settings-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 4rem);\n  color: rgb(var(--gray-800));\n}\n.page-banner[_ngcontent-%COMP%] {\n  margin-top: -0.5rem;\n  background: rgb(var(--primary));\n  padding: 1rem 1.5rem;\n}\n.page-banner__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-top: 0.75rem;\n}\n.page-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n}\n.page-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 0.75rem;\n  background: rgba(255, 255, 255, 0.16);\n  color: #fff;\n  font-size: 1.4rem;\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n}\n.page-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 46rem;\n  margin: 0.2rem 0 0;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.875rem;\n}\n.save-button[_ngcontent-%COMP%], .secondary-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: 0;\n  border-radius: 0.5rem;\n  padding: 0.62rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n.save-button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.96);\n  color: rgb(var(--primary));\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.save-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  background: #fff;\n}\n.save-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.breadcrumb-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid rgb(var(--gray-200));\n  background: rgb(var(--light));\n  padding: 0.75rem 1.5rem;\n  color: rgb(var(--gray-600));\n  font-size: 0.8rem;\n}\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: rgb(var(--primary));\n  font-weight: 600;\n}\n.breadcrumb-arrow[_ngcontent-%COMP%] {\n  color: rgb(var(--gray-400));\n  font-size: 0.7rem;\n}\n.settings-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 90rem;\n  padding: 0 1.25rem 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  overflow-x: auto;\n  margin-bottom: 1rem;\n  border: 1px solid rgb(var(--gray-200));\n  border-radius: 0.625rem;\n  background: rgb(var(--light));\n  padding: 0.35rem;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);\n  scrollbar-width: none;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: max-content;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  border: 0;\n  border-radius: 0.45rem;\n  background: transparent;\n  padding: 0.72rem 0.85rem;\n  color: rgb(var(--gray-600));\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: rgb(var(--primary));\n  background: rgb(var(--primary-50));\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: rgb(var(--primary));\n  box-shadow: 0 3px 9px rgba(var(--primary), 0.2);\n}\n.settings-card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--gray-200));\n  border-radius: 0.75rem;\n  background: rgb(var(--light));\n  padding: 1.25rem;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n}\n.section-heading[_ngcontent-%COMP%], .section-heading__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.section-heading--action[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.section-icon[_ngcontent-%COMP%], .option-icon[_ngcontent-%COMP%], .summary-icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: rgb(var(--primary));\n  background: rgb(var(--primary-100));\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.65rem;\n  font-size: 1.15rem;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgb(var(--gray-800));\n  font-size: 1rem;\n  font-weight: 700;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: rgb(var(--gray-500));\n  font-size: 0.78rem;\n}\n.secondary-button[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--primary));\n  background: transparent;\n  color: rgb(var(--primary));\n}\n.secondary-button[_ngcontent-%COMP%]:hover {\n  background: rgb(var(--primary));\n  color: #fff;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.form-grid__wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\nlabel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .period[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .period[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  color: rgb(var(--gray-700));\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.yx-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.55rem;\n  border: 1px solid rgb(var(--input-border));\n  border-radius: 0.5rem;\n  outline: 0;\n  background: rgb(var(--light));\n  padding: 0.55rem 0.75rem;\n  color: rgb(var(--gray-800));\n  font-size: 0.84rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.yx-input[_ngcontent-%COMP%]:focus {\n  border-color: rgb(var(--primary));\n  box-shadow: 0 0 0 3px rgba(var(--primary), 0.1);\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-top: 1.1rem;\n  border: 1px solid rgb(var(--primary-200));\n  border-radius: 0.55rem;\n  background: rgb(var(--primary-50));\n  padding: 0.7rem 0.85rem;\n  color: rgb(var(--gray-600));\n  font-size: 0.78rem;\n  line-height: 1.5;\n}\n.info-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: rgb(var(--primary));\n  font-size: 1rem;\n}\n.warning-note[_ngcontent-%COMP%] {\n  border-color: rgb(var(--warning-200));\n  background: rgb(var(--warning-50));\n}\n.warning-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(var(--warning));\n}\n.period-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.period[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.35fr 1fr 0.85fr 0.85fr 1fr auto auto;\n  align-items: end;\n  gap: 0.65rem;\n  border: 1px solid rgb(var(--gray-200));\n  border-radius: 0.65rem;\n  background: rgb(var(--gray-50));\n  padding: 0.85rem;\n}\n.toggle-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex !important;\n  min-height: 2.55rem;\n  flex-direction: row !important;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.toggle-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n.toggle-track[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2.35rem;\n  height: 1.3rem;\n  flex: 0 0 auto;\n  border-radius: 999px;\n  background: rgb(var(--gray-300));\n  transition: 0.2s;\n}\n.toggle-track[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0.15rem;\n  left: 0.15rem;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  content: "";\n  transition: 0.2s;\n}\n.toggle-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] {\n  background: rgb(var(--primary));\n}\n.toggle-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]::after {\n  transform: translateX(1.05rem);\n}\n.delete-button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.55rem;\n  height: 2.55rem;\n  place-items: center;\n  border: 1px solid rgb(var(--red-200));\n  border-radius: 0.5rem;\n  background: rgb(var(--red-50));\n  color: rgb(var(--red-600));\n  cursor: pointer;\n}\n.delete-button[_ngcontent-%COMP%]:hover {\n  background: rgb(var(--red-600));\n  color: #fff;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 18rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3.5rem;\n  height: 3.5rem;\n  place-items: center;\n  border-radius: 50%;\n  background: rgb(var(--gray-100));\n  color: rgb(var(--gray-500));\n  font-size: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.8rem 0 0.25rem;\n  font-size: 0.95rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: rgb(var(--gray-500));\n  font-size: 0.8rem;\n}\n.option-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n  margin-top: 1.1rem;\n}\n.option-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border: 1px solid rgb(var(--gray-200));\n  border-radius: 0.65rem;\n  background: rgb(var(--gray-50));\n  padding: 0.9rem;\n  cursor: pointer;\n}\n.option-icon[_ngcontent-%COMP%] {\n  width: 2.35rem;\n  height: 2.35rem;\n  border-radius: 0.55rem;\n}\n.option-copy[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.option-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(var(--gray-800));\n  font-size: 0.8rem;\n}\n.option-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgb(var(--gray-500));\n  font-size: 0.7rem;\n  line-height: 1.4;\n}\n.option-card[_ngcontent-%COMP%]    > .toggle-field[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n.featured-option[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.85rem;\n  margin-top: 1.1rem;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  border: 1px solid rgb(var(--gray-200));\n  border-radius: 0.65rem;\n  padding: 0.85rem;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 0.55rem;\n}\n.summary-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.summary-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgb(var(--gray-500));\n  font-size: 0.7rem;\n}\n.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(var(--gray-700));\n  font-size: 0.85rem;\n}\n.summary-item[_ngcontent-%COMP%]   strong.enabled[_ngcontent-%COMP%] {\n  color: rgb(var(--success));\n}\n.loading-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 18rem;\n  margin: 0 1.25rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 0.75rem;\n  border: 1px solid rgb(var(--gray-200));\n  border-radius: 0.75rem;\n  background: rgb(var(--light));\n  color: rgb(var(--gray-500));\n  font-size: 0.82rem;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 4px solid rgb(var(--gray-200));\n  border-top-color: rgb(var(--primary));\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1100px) {\n  .period[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .delete-button[_ngcontent-%COMP%] {\n    align-self: end;\n  }\n}\n@media (max-width: 767px) {\n  .page-banner[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-banner__content[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .save-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .breadcrumb-bar[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .settings-content[_ngcontent-%COMP%] {\n    padding-inline: 0.75rem;\n  }\n  .tabs[_ngcontent-%COMP%] {\n    gap: 0.3rem;\n    overflow: visible;\n  }\n  .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 0;\n    flex: 1 1 25%;\n    padding: 0.7rem 0.4rem;\n  }\n  .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .settings-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .section-heading--action[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .secondary-button[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .form-grid[_ngcontent-%COMP%], .option-list[_ngcontent-%COMP%], .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .period[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .form-grid__wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n@media (max-width: 480px) {\n  .page-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .period[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .delete-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.4;\n  }\n}\n/*# sourceMappingURL=energy-configuration.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnergyConfigurationComponent, { className: "EnergyConfigurationComponent", filePath: "src\\app\\components\\settings\\energy-configuration\\energy-configuration.component.ts", lineNumber: 20 });
})();
export {
  EnergyConfigurationComponent
};
//# sourceMappingURL=chunk-7OQV7PFS.js.map
