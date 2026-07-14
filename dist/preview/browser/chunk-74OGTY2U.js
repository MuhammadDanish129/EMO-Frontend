import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-HJAQN6L2.js";
import {
  LiveConsumptionComponent
} from "./chunk-RXIVY263.js";
import "./chunk-23MD4Y7N.js";
import "./chunk-SS76AF3O.js";
import "./chunk-JHVMKIIT.js";
import "./chunk-RU3Q4DPZ.js";
import "./chunk-23BVNQNJ.js";
import "./chunk-ZKTKUHMD.js";
import {
  YxSelectComponent
} from "./chunk-L5ZIRAMR.js";
import "./chunk-AIWP64L7.js";
import "./chunk-ULHVIHAW.js";
import {
  ReportingTimezoneService
} from "./chunk-LMRTHEWX.js";
import "./chunk-7LK7NDKG.js";
import "./chunk-K2JMPSHA.js";
import "./chunk-6MZ7UVS4.js";
import "./chunk-AZ553IHQ.js";
import "./chunk-3ZFR3IJH.js";
import "./chunk-V53V3TUK.js";
import "./chunk-JJOWJPDK.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7CONLPWZ.js";
import {
  UserService
} from "./chunk-WHOMYXFN.js";
import "./chunk-SFDR4GMF.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-5DAVUJF5.js";
import "./chunk-EQ2Y7ZIZ.js";
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  TitleCasePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y6Q6HMFU.js";

// src/app/components/dashboards/crm/energy-deep-dive/energy-deep-dive.service.ts
var EnergyDeepDiveService = class _EnergyDeepDiveService {
  constructor(http) {
    this.http = http;
    this.dashboardUrl = `${environment.baseUrl}/dashboard`;
    this.deepDiveUrl = `${environment.baseUrl}/deep-dive`;
  }
  getDashboard(level, id, range = "24h") {
    return this.http.get(`${this.dashboardUrl}/${level}/${id}`, {
      params: new HttpParams().set("range", range)
    });
  }
  getDeepDive(level, id, range = "24h", timeZone = "UTC", forceRefresh = false) {
    const params = new HttpParams().set("range", range).set("timeZone", timeZone).set("forceRefresh", String(forceRefresh)).set("_ts", String(Date.now()));
    return this.http.get(`${this.deepDiveUrl}/${level}/${id}`, { params });
  }
  getBreadcrumb(level, id) {
    return this.http.get(`${this.dashboardUrl}/breadcrumb/${level}/${id}`);
  }
  static {
    this.\u0275fac = function EnergyDeepDiveService_Factory(t) {
      return new (t || _EnergyDeepDiveService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnergyDeepDiveService, factory: _EnergyDeepDiveService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/dashboards/crm/energy-deep-dive/energy-deep-dive.component.ts
var _c0 = (a0, a1, a2) => ({ level: a0, id: a1, name: a2 });
var _c1 = () => [1, 2, 3, 4];
function EnergyDeepDiveComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function EnergyDeepDiveComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.useDetectedTimezone());
    });
    \u0275\u0275text(1, " Use detected ");
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_nav_29_ng_container_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_nav_29_ng_container_2_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const breadcrumb_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openLevel(breadcrumb_r6.level, breadcrumb_r6.id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const breadcrumb_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", "Open " + breadcrumb_r6.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getLevelIcon(breadcrumb_r6.level));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(breadcrumb_r6.name);
  }
}
function EnergyDeepDiveComponent_nav_29_ng_container_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const breadcrumb_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getLevelIcon(breadcrumb_r6.level));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(breadcrumb_r6.name);
  }
}
function EnergyDeepDiveComponent_nav_29_ng_container_2_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_nav_29_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li");
    \u0275\u0275template(2, EnergyDeepDiveComponent_nav_29_ng_container_2_button_2_Template, 4, 4, "button", 43)(3, EnergyDeepDiveComponent_nav_29_ng_container_2_ng_template_3_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EnergyDeepDiveComponent_nav_29_ng_container_2_li_5_Template, 2, 0, "li", 44);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const last_r7 = ctx.last;
    const currentBreadcrumb_r8 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !last_r7)("ngIfElse", currentBreadcrumb_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !last_r7);
  }
}
function EnergyDeepDiveComponent_nav_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 39)(1, "ol");
    \u0275\u0275template(2, EnergyDeepDiveComponent_nav_29_ng_container_2_Template, 6, 3, "ng-container", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 41);
    \u0275\u0275element(4, "i", 42);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "CRM Dashboard");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.breadcrumbs);
  }
}
function EnergyDeepDiveComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setView("live"));
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2, "Live Readings ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.selectedView === "live");
  }
}
function EnergyDeepDiveComponent_section_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "span");
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Unable to load the explorer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.errorMessage);
  }
}
function EnergyDeepDiveComponent_section_40_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "span", 59)(2, "span", 60)(3, "span", 61);
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_section_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 51)(1, "div", 52)(2, "span", 53);
    \u0275\u0275element(3, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Fetching readings and configuration for the selected scope.");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 56);
    \u0275\u0275template(11, EnergyDeepDiveComponent_section_40_div_11_Template, 4, 0, "div", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.selectedView === "analysis" ? "Loading prepared analysis" : ctx_r3.selectedView === "live" ? "Connecting live readings" : "Loading hierarchy");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c1));
  }
}
function EnergyDeepDiveComponent_ng_container_41_section_1_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_41_section_1_button_11_Template_button_click_0_listener() {
      const child_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openLevel(child_r11.level, child_r11.id));
    });
    \u0275\u0275elementStart(1, "div", 70)(2, "span", 71);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 72);
    \u0275\u0275element(5, "i");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 74)(14, "small");
    \u0275\u0275text(15, "Total energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementStart(19, "b");
    \u0275\u0275text(20, "kWh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 75)(22, "span");
    \u0275\u0275element(23, "i", 76);
    \u0275\u0275elementStart(24, "small");
    \u0275\u0275text(25, "Power factor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275element(30, "i", 77);
    \u0275\u0275elementStart(31, "small");
    \u0275\u0275text(32, "Sensors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "span", 78);
    \u0275\u0275text(36);
    \u0275\u0275element(37, "i", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", "Open " + child_r11.name);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getLevelIcon(child_r11.level));
    \u0275\u0275advance();
    \u0275\u0275classProp("has-alert", child_r11.alertCount > 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(child_r11.alertCount > 0 ? "ri-alarm-warning-line" : "ri-checkbox-circle-line");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", child_r11.alertCount > 0 ? child_r11.alertCount + " alerts" : "Healthy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, child_r11.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r11.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 16, child_r11.totalActiveEnergyKwh, "1.0-2"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 19, child_r11.avgPowerFactor, "1.0-3"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(child_r11.sensorCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Open ", child_r11.level, "");
  }
}
function EnergyDeepDiveComponent_ng_container_41_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 64)(1, "header", 65)(2, "div")(3, "p", 66);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Choose the next level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 67);
    \u0275\u0275template(11, EnergyDeepDiveComponent_ng_container_41_section_1_button_11_Template, 38, 22, "button", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 5, ctx_r3.level), " hierarchy");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r3.childCards.length, " ", ctx_r3.childCards[0].level, "", ctx_r3.childCards.length === 1 ? "" : "s", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.childCards);
  }
}
function EnergyDeepDiveComponent_ng_container_41_section_2_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_41_section_2_button_10_Template_button_click_0_listener() {
      const sensor_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openSensorAnalysis(sensor_r13.sensorId));
    });
    \u0275\u0275elementStart(1, "div", 83)(2, "span", 84);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 85);
    \u0275\u0275element(5, "i");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "span");
    \u0275\u0275text(9, "Energy sensor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 86)(13, "small");
    \u0275\u0275text(14, "Active power");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementStart(18, "b");
    \u0275\u0275text(19, "W");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 87)(21, "span");
    \u0275\u0275element(22, "i", 88);
    \u0275\u0275elementStart(23, "small");
    \u0275\u0275text(24, "Voltage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275element(29, "i", 54);
    \u0275\u0275elementStart(30, "small");
    \u0275\u0275text(31, "Current");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275element(36, "i", 76);
    \u0275\u0275elementStart(37, "small");
    \u0275\u0275text(38, "Power factor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275element(43, "i", 89);
    \u0275\u0275elementStart(44, "small");
    \u0275\u0275text(45, "Energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "span", 78);
    \u0275\u0275text(50, "Analyze sensor");
    \u0275\u0275element(51, "i", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sensor_r13 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getLevelIcon("sensor"));
    \u0275\u0275advance();
    \u0275\u0275classProp("has-alert", sensor_r13.hasAlert);
    \u0275\u0275advance();
    \u0275\u0275classMap(sensor_r13.hasAlert ? "ri-alarm-warning-line" : "ri-checkbox-circle-line");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sensor_r13.hasAlert ? "Alert" : "Normal");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(sensor_r13.sensorName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 13, sensor_r13.latestActivePower, "1.0-1"), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 16, sensor_r13.latestVoltage, "1.0-1"), " V");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 19, sensor_r13.latestCurrent, "1.0-2"), " A");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 22, sensor_r13.latestPowerFactor, "1.0-3"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(48, 25, sensor_r13.totalActiveEnergyKwh, "1.0-1"), " kWh");
  }
}
function EnergyDeepDiveComponent_ng_container_41_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 64)(1, "header", 65)(2, "div")(3, "p", 66);
    \u0275\u0275text(4, "Device sensors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Choose a sensor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 80);
    \u0275\u0275template(10, EnergyDeepDiveComponent_ng_container_41_section_2_button_10_Template, 52, 28, "button", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dashboard_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", dashboard_r14.sensors == null ? null : dashboard_r14.sensors.length, " sensors");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", dashboard_r14.sensors);
  }
}
function EnergyDeepDiveComponent_ng_container_41_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 90)(1, "span");
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No child entities found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "This level does not currently contain the next hierarchy level.");
    \u0275\u0275elementEnd()();
  }
}
function EnergyDeepDiveComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_41_section_1_Template, 12, 7, "section", 62)(2, EnergyDeepDiveComponent_ng_container_41_section_2_Template, 11, 2, "section", 62)(3, EnergyDeepDiveComponent_ng_container_41_section_3_Template, 7, 0, "section", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dashboard_r14 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.childCards.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dashboard_r14.sensors == null ? null : dashboard_r14.sensors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.childCards.length && !(dashboard_r14.sensors == null ? null : dashboard_r14.sensors.length));
  }
}
function EnergyDeepDiveComponent_ng_container_42_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "span");
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Analysis unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.analysisError);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 157)(1, "div")(2, "p", 66);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 158)(10, "span", 159);
    \u0275\u0275element(11, "i");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 11, analysis_r16.level), " analysis");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(analysis_r16.entityName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(analysis_r16.insight);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ready", analysis_r16.configuration.isReadyForOptimization);
    \u0275\u0275advance();
    \u0275\u0275classMap(analysis_r16.configuration.isReadyForOptimization ? "ri-checkbox-circle-line" : "ri-settings-3-line");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", analysis_r16.configuration.isReadyForOptimization ? "Optimization ready" : "Configuration incomplete", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", analysis_r16.dataStatus.sensorsWithReadings, "/", analysis_r16.dataStatus.sensorCount, " sensors with usable data \xB7 ", analysis_r16.timezone, "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Last reading ", ctx_r3.formatReportingTimestamp(analysis_r16.dataStatus.lastReadingAt), "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 160);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Insufficient readings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_2_span_7_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.dataStatus.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", analysis_r16.dataStatus.lastReadingAt);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_strong_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", analysis_r16.currency, " ", \u0275\u0275pipeBind2(2, 2, analysis_r16.summary.estimatedCost, "1.0-2"), "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_apx_chart_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 161);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("series", ctx_r3.crmAnalysisChartOptions.series)("chart", ctx_r3.crmAnalysisChartOptions.chart)("xaxis", ctx_r3.crmAnalysisChartOptions.xaxis)("yaxis", ctx_r3.crmAnalysisChartOptions.yaxis)("stroke", ctx_r3.crmAnalysisChartOptions.stroke)("dataLabels", ctx_r3.crmAnalysisChartOptions.dataLabels)("colors", ctx_r3.crmAnalysisChartOptions.colors)("grid", ctx_r3.crmAnalysisChartOptions.grid)("legend", ctx_r3.crmAnalysisChartOptions.legend)("markers", ctx_r3.crmAnalysisChartOptions.markers)("tooltip", ctx_r3.crmAnalysisChartOptions.tooltip);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_small_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (ctx_r3.crmAnalysisChart == null ? null : ctx_r3.crmAnalysisChart.peakStartTime) || "-", " - ", (ctx_r3.crmAnalysisChart == null ? null : ctx_r3.crmAnalysisChart.peakEndTime) || "-", " configured peak ");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_small_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Selected period");
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_99_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Last reading ", ctx_r3.formatReportingTimestamp(analysis_r16.dataStatus.lastReadingAt), "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 162);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_99_span_7_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275classProp("data-warning", !analysis_r16.dataStatus.hasReadings);
    \u0275\u0275advance();
    \u0275\u0275classMap(analysis_r16.dataStatus.hasReadings ? "ri-database-2-line" : "ri-database-2-line");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(analysis_r16.dataStatus.hasReadings ? "Data coverage" : "Insufficient readings");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(analysis_r16.dataStatus.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", analysis_r16.dataStatus.lastReadingAt);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_ng_container_10_article_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 169);
    \u0275\u0275text(1, "Configure");
    \u0275\u0275element(2, "i", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const requirement_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", requirement_r17.route);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_ng_container_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_ng_container_10_article_1_a_6_Template, 3, 1, "a", 168);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const requirement_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(requirement_r17.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(requirement_r17.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", requirement_r17.route);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_ng_container_10_article_1_Template, 7, 3, "article", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const requirement_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", requirement_r17.status === "missing" || requirement_r17.status === "partial");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 163)(1, "div", 164)(2, "span");
    \u0275\u0275element(3, "i", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6, "Some configuration is missing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Complete the items below to unlock all analysis results.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 166);
    \u0275\u0275template(10, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_ng_container_10_Template, 2, 1, "ng-container", 167);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", analysis_r16.configuration.requirements)("ngForTrackBy", ctx_r3.trackRequirement);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_strong_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", analysis_r16.currency, " ", \u0275\u0275pipeBind2(2, 2, analysis_r16.summary.estimatedCost, "1.0-2"), "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Not available");
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_em_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r3.getChangeClass(analysis_r16.summary.costChangePercent));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", analysis_r16.summary.costChangePercent >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(2, 4, analysis_r16.summary.costChangePercent, "1.0-1"), "% vs previous");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(analysis_r16.summary.estimatedCost === null ? "Configure tariff rates" : "No previous cost comparison");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_em_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", analysis_r16.currency, " ", \u0275\u0275pipeBind2(2, 2, analysis_r16.summary.savingOpportunityCost, "1.0-2"), " potential cost saving");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(analysis_r16.features.optimizationSuggestions ? analysis_r16.suggestions.length + " suggestions \xB7 cost needs tariff rates" : "Configure appliance profiles");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 170)(1, "article")(2, "span", 94);
    \u0275\u0275element(3, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "small");
    \u0275\u0275text(6, "Energy used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "em");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "article")(14, "span", 95);
    \u0275\u0275element(15, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "small");
    \u0275\u0275text(18, "Estimated cost");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_strong_19_Template, 3, 5, "strong", 97)(20, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_ng_template_20_Template, 2, 0, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(22, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_em_22_Template, 3, 7, "em", 171)(23, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_ng_template_23_Template, 2, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "article")(26, "span", 98);
    \u0275\u0275element(27, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "small");
    \u0275\u0275text(30, "Peak demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "em");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "article")(38, "span", 100);
    \u0275\u0275element(39, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "small");
    \u0275\u0275text(42, "Saving opportunity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_em_46_Template, 3, 5, "em", 97)(47, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_ng_template_47_Template, 2, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noCost_r18 = \u0275\u0275reference(21);
    const costConfiguration_r19 = \u0275\u0275reference(24);
    const savingConfiguration_r20 = \u0275\u0275reference(48);
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 18, analysis_r16.summary.energyKwh, "1.0-2"), " kWh");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getChangeClass(analysis_r16.summary.energyChangePercent));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", analysis_r16.summary.energyChangePercent >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(12, 21, analysis_r16.summary.energyChangePercent, "1.0-1"), "% vs previous");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("kpi-unavailable", analysis_r16.summary.estimatedCost === null);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", analysis_r16.summary.estimatedCost !== null)("ngIfElse", noCost_r18);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", analysis_r16.summary.costChangePercent !== null)("ngIfElse", costConfiguration_r19);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(33, 24, analysis_r16.summary.peakDemandKw, "1.0-2"), " kW");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(analysis_r16.summary.peakDemandAt ? \u0275\u0275pipeBind2(36, 27, analysis_r16.summary.peakDemandAt, "short") : "No demand point");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("kpi-unavailable", !analysis_r16.features.optimizationSuggestions);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(analysis_r16.features.optimizationSuggestions ? \u0275\u0275pipeBind2(45, 30, analysis_r16.summary.savingOpportunityKwh, "1.0-2") + " kWh" : "Not available");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", analysis_r16.summary.savingOpportunityCost !== null)("ngIfElse", savingConfiguration_r20);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_apx_chart_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 172);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("series", ctx_r3.utilityTrendChartOptions.series)("chart", ctx_r3.utilityTrendChartOptions.chart)("dataLabels", ctx_r3.utilityTrendChartOptions.dataLabels)("plotOptions", ctx_r3.utilityTrendChartOptions.plotOptions)("yaxis", ctx_r3.utilityTrendChartOptions.yaxis)("xaxis", ctx_r3.utilityTrendChartOptions.xaxis)("legend", ctx_r3.utilityTrendChartOptions.legend)("colors", ctx_r3.utilityTrendChartOptions.colors)("grid", ctx_r3.utilityTrendChartOptions.grid)("fill", ctx_r3.utilityTrendChartOptions.fill)("tooltip", ctx_r3.utilityTrendChartOptions.tooltip);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_apx_chart_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 173);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("series", ctx_r3.utilityMixChartOptions.series)("chart", ctx_r3.utilityMixChartOptions.chart)("colors", ctx_r3.utilityMixChartOptions.colors)("labels", ctx_r3.utilityMixChartOptions.labels)("legend", ctx_r3.utilityMixChartOptions.legend)("stroke", ctx_r3.utilityMixChartOptions.stroke)("tooltip", ctx_r3.utilityMixChartOptions.tooltip)("plotOptions", ctx_r3.utilityMixChartOptions.plotOptions)("dataLabels", ctx_r3.utilityMixChartOptions.dataLabels);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_141_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "span", 175);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const utility_r21 = ctx.$implicit;
    const itemIndex_r22 = ctx.index;
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r3.utilityMixChartOptions == null ? null : ctx_r3.utilityMixChartOptions.colors == null ? null : ctx_r3.utilityMixChartOptions.colors[itemIndex_r22]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(utility_r21);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, analysis_r16.crmCharts.utilityMix.series[0].data[itemIndex_r22], "1.0-1"), " kWh ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", analysis_r16.crmCharts.utilityMix.totalKwh > 0 ? \u0275\u0275pipeBind2(10, 8, analysis_r16.crmCharts.utilityMix.series[0].data[itemIndex_r22] * 100 / analysis_r16.crmCharts.utilityMix.totalKwh, "1.0-1") : 0, "% ");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_141_div_1_Template, 11, 11, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", analysis_r16.crmCharts.utilityMix.categories);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "apx-chart", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.analysisTrendChart.series)("chart", ctx_r3.analysisTrendChart.chart)("xaxis", ctx_r3.analysisTrendChart.xaxis)("stroke", ctx_r3.analysisTrendChart.stroke)("dataLabels", ctx_r3.analysisTrendChart.dataLabels)("tooltip", ctx_r3.analysisTrendChart.tooltip)("fill", ctx_r3.analysisTrendChart.fill)("colors", ctx_r3.analysisTrendChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_166_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_166_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_166_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 178);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const noChartRecords_r23 = \u0275\u0275reference(45);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", noChartRecords_r23);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_166_ng_container_0_Template, 2, 1, "ng-container", 97);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const metricUnavailable_r24 = \u0275\u0275reference(169);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r3.isMetricAvailable(ctx_r3.analysisMetricView))("ngIfElse", metricUnavailable_r24);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "This metric is not configured");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Complete the related energy configuration to unlock this trend.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 180);
    \u0275\u0275text(8, "Configure");
    \u0275\u0275elementEnd()();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_170_a_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 184);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275text(2, "Configure demand limit and warning threshold");
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 181)(1, "header", 155)(2, "div")(3, "p", 66);
    \u0275\u0275text(4, "Demand profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Demand analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 176);
    \u0275\u0275element(10, "apx-chart", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 182)(12, "span")(13, "small");
    \u0275\u0275text(14, "Average");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span")(19, "small");
    \u0275\u0275text(20, "Peak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span")(25, "small");
    \u0275\u0275text(26, "Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "span")(31, "small");
    \u0275\u0275text(32, "Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "span")(37, "small");
    \u0275\u0275text(38, "Breaches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span")(42, "small");
    \u0275\u0275text(43, "Above limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_170_a_46_Template, 3, 0, "a", 183);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", analysis_r16.demand.intervalMinutes, "-minute interval");
    \u0275\u0275advance(2);
    \u0275\u0275property("series", ctx_r3.analysisDemandChart.series)("chart", ctx_r3.analysisDemandChart.chart)("xaxis", ctx_r3.analysisDemandChart.xaxis)("stroke", ctx_r3.analysisDemandChart.stroke)("dataLabels", ctx_r3.analysisDemandChart.dataLabels)("tooltip", ctx_r3.analysisDemandChart.tooltip)("fill", ctx_r3.analysisDemandChart.fill)("colors", ctx_r3.analysisDemandChart.colors);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 16, analysis_r16.demand.averageDemandKw, "1.0-2"), " kW");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 19, analysis_r16.demand.peakDemandKw, "1.0-2"), " kW");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.demand.demandLimitKw !== null ? \u0275\u0275pipeBind2(29, 22, analysis_r16.demand.demandLimitKw, "1.0-2") + " kW" : "Not set");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.demand.warningThresholdKw !== null ? \u0275\u0275pipeBind2(35, 25, analysis_r16.demand.warningThresholdKw, "1.0-2") + " kW" : "Not set");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.demand.breachCount !== null ? analysis_r16.demand.breachCount : "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(analysis_r16.demand.minutesAboveThreshold !== null ? analysis_r16.demand.minutesAboveThreshold + " min" : "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !analysis_r16.demand.hasConfiguredLimit);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 185)(1, "span");
    \u0275\u0275element(2, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Demand analysis unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.demand.unavailableReason);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 181)(1, "header", 155)(2, "div")(3, "p", 66);
    \u0275\u0275text(4, "Tariff periods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Peak vs off-peak");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Energy and cost split");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 186);
    \u0275\u0275element(10, "apx-chart", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 188)(12, "span")(13, "small");
    \u0275\u0275text(14, "Peak energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span")(19, "small");
    \u0275\u0275text(20, "Off-peak energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span")(25, "small");
    \u0275\u0275text(26, "Peak cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "span")(31, "small");
    \u0275\u0275text(32, "Off-peak cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("series", ctx_r3.analysisPeakChart.series)("chart", ctx_r3.analysisPeakChart.chart)("labels", ctx_r3.analysisPeakChart.labels)("dataLabels", ctx_r3.analysisPeakChart.dataLabels)("colors", ctx_r3.analysisPeakChart.colors);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 9, analysis_r16.peakOffPeak.peakEnergyKwh, "1.0-2"), " kWh");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 12, analysis_r16.peakOffPeak.offPeakEnergyKwh, "1.0-2"), " kWh");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.peakOffPeak.peakCost !== null ? analysis_r16.currency + " " + \u0275\u0275pipeBind2(29, 15, analysis_r16.peakOffPeak.peakCost, "1.0-2") : "Tariff not configured");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.peakOffPeak.offPeakCost !== null ? analysis_r16.currency + " " + \u0275\u0275pipeBind2(35, 18, analysis_r16.peakOffPeak.offPeakCost, "1.0-2") : "Tariff not configured");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 185)(1, "span");
    \u0275\u0275element(2, "i", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Peak/off-peak analysis unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 180);
    \u0275\u0275text(8, "Configure tariff schedule");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(analysis_r16.peakOffPeak.unavailableReason);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_16_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_16_button_4_Template_button_click_0_listener() {
      const child_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.openLevel(child_r27.level, child_r27.id, "analysis"));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r27 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getLevelIcon(child_r27.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r27.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 4, child_r27.sharePercent, "1.0-1"), "%");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 186);
    \u0275\u0275element(2, "apx-chart", 202);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 203);
    \u0275\u0275template(4, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_16_button_4_Template, 7, 7, "button", 204);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("series", ctx_r3.analysisShareChart.series)("chart", ctx_r3.analysisShareChart.chart)("labels", ctx_r3.analysisShareChart.labels)("dataLabels", ctx_r3.analysisShareChart.dataLabels)("colors", ctx_r3.analysisShareChart.colors)("legend", ctx_r3.analysisShareChart.legend)("plotOptions", ctx_r3.analysisShareChart.plotOptions)("tooltip", ctx_r3.analysisShareChart.tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", analysis_r16.children);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205);
    \u0275\u0275element(1, "apx-chart", 206);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.analysisRankingChart.series)("chart", ctx_r3.analysisRankingChart.chart)("plotOptions", ctx_r3.analysisRankingChart.plotOptions)("colors", ctx_r3.analysisRankingChart.colors)("dataLabels", ctx_r3.analysisRankingChart.dataLabels)("xaxis", ctx_r3.analysisRankingChart.xaxis)("tooltip", ctx_r3.analysisRankingChart.tooltip);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "div", 148)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "apx-chart", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.getMetricTitle(), " for selected hierarchy scope");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getMetricUnit(analysis_r16.currency));
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.analysisTrendChart.series)("chart", ctx_r3.analysisTrendChart.chart)("xaxis", ctx_r3.analysisTrendChart.xaxis)("stroke", ctx_r3.analysisTrendChart.stroke)("dataLabels", ctx_r3.analysisTrendChart.dataLabels)("tooltip", ctx_r3.analysisTrendChart.tooltip)("fill", ctx_r3.analysisTrendChart.fill)("colors", ctx_r3.analysisTrendChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 208);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_tr_55_Template_tr_click_0_listener() {
      const child_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.openLevel(child_r29.level, child_r29.id, "analysis"));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 209);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 210);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 211);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 212)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 213);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 214);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 215)(27, "span", 216);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 217)(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r29 = ctx.$implicit;
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-label", \u0275\u0275pipeBind1(2, 19, analysis_r16.childLevel));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r29.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 21, child_r29.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 23, child_r29.energyKwh, "1.0-2"), " kWh");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 26, child_r29.sharePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r29.estimatedCost !== null ? analysis_r16.currency + " " + \u0275\u0275pipeBind2(16, 29, child_r29.estimatedCost, "1.0-2") : "Not configured");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getChangeClass(child_r29.changePercent));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", child_r29.changePercent >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(20, 32, child_r29.changePercent, "1.0-1"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 35, child_r29.peakDemandKw, "1.0-2"), " kW");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r29.onlineSensorCount, "/", child_r29.sensorCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-issues", child_r29.issueCount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r29.issueCount);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getStatusClass(child_r29.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r29.status);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 190)(1, "article", 191)(2, "header", 143)(3, "div")(4, "p", 66);
    \u0275\u0275text(5, "Hierarchy breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 192)(10, "button", 25);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.changeAnalysisBreakdown("share"));
    });
    \u0275\u0275text(11, "Share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 25);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.changeAnalysisBreakdown("ranking"));
    });
    \u0275\u0275text(13, "Ranking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.changeAnalysisBreakdown("trend"));
    });
    \u0275\u0275text(15, "Trend");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_16_Template, 5, 9, "div", 193)(17, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_17_Template, 2, 7, "div", 194)(18, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_div_18_Template, 7, 10, "div", 195);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "article", 196)(20, "header", 155)(21, "div")(22, "p", 66);
    \u0275\u0275text(23, "Detailed comparison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h2");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 144)(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 197);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.exportHierarchyCsv());
    });
    \u0275\u0275element(31, "i", 108);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 198)(33, "table", 199)(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Estimated cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Peak demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "Issues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "tbody");
    \u0275\u0275template(55, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_tr_55_Template, 32, 38, "tr", 200);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 13, analysis_r16.childLevel), " analysis");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r3.analysisBreakdownView === "share");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.analysisBreakdownView === "ranking");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.analysisBreakdownView === "trend");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.analysisBreakdownView === "share" && ctx_r3.analysisShareChart);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.analysisBreakdownView === "ranking" && ctx_r3.analysisRankingChart);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.analysisBreakdownView === "trend" && ctx_r3.analysisTrendChart);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 15, analysis_r16.childLevel), " performance");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", analysis_r16.children.length, " items");
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", analysis_r16.children);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_div_9_article_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const issue_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", issue_r30.applianceName, "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_div_9_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "span");
    \u0275\u0275element(2, "i", 222);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275template(10, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_div_9_article_1_ng_container_10_Template, 2, 1, "ng-container", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const issue_r30 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r3.getIssueClass(issue_r30.severity));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", issue_r30.issueType, " \xB7 ", issue_r30.sensorName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r30.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r30.deviceName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", issue_r30.applianceName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind2(12, 8, issue_r30.detectedAt, "short"), "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 220);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_div_9_article_1_Template, 13, 11, "article", 221);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", analysis_r16.activeIssues);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223);
    \u0275\u0275element(1, "i", 224);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No active electrical issues were detected.");
    \u0275\u0275elementEnd()();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 218)(1, "header", 155)(2, "div")(3, "p", 66);
    \u0275\u0275text(4, "Detected conditions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Active issues");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_div_9_Template, 2, 1, "div", 219)(10, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_ng_template_10_Template, 4, 0, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noAnalysisIssues_r31 = \u0275\u0275reference(11);
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(analysis_r16.activeIssues.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", analysis_r16.activeIssues.length)("ngIfElse", noAnalysisIssues_r31);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_article_1_small_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const suggestion_r32 = \u0275\u0275nextContext(2).$implicit;
    const analysis_r16 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xB7 ", analysis_r16.currency, " ", \u0275\u0275pipeBind2(2, 2, suggestion_r32.estimatedSavingCost, "1.0-2"), "");
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_article_1_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275template(3, EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_article_1_small_8_ng_container_3_Template, 3, 5, "ng-container", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r32 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Potential saving: ", \u0275\u0275pipeBind2(2, 2, suggestion_r32.estimatedSavingKwh, "1.0-2"), " kWh");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", suggestion_r32.estimatedSavingCost !== null);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "span", 226);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_article_1_small_8_Template, 4, 5, "small", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const suggestion_r32 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestion_r32.priority);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(suggestion_r32.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestion_r32.recommendation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", suggestion_r32.estimatedSavingKwh !== null);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 225);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_article_1_Template, 9, 4, "article", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", analysis_r16.suggestions);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_189_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 229);
    \u0275\u0275text(1, "Configure sensor appliances");
    \u0275\u0275elementEnd();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_189_a_4_Template, 2, 0, "a", 228);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const analysis_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(analysis_r16.features.optimizationSuggestions ? "No suggestions were generated for this period." : "Optimization suggestions require sensor-appliance assignments and configured appliance limits.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !analysis_r16.features.optimizationSuggestions);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "apx-chart", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.activePowerChart.series)("chart", ctx_r3.activePowerChart.chart)("xaxis", ctx_r3.activePowerChart.xaxis)("stroke", ctx_r3.activePowerChart.stroke)("dataLabels", ctx_r3.activePowerChart.dataLabels)("tooltip", ctx_r3.activePowerChart.tooltip)("fill", ctx_r3.activePowerChart.fill)("colors", ctx_r3.activePowerChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "apx-chart", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.voltageCurrentChart.series)("chart", ctx_r3.voltageCurrentChart.chart)("xaxis", ctx_r3.voltageCurrentChart.xaxis)("stroke", ctx_r3.voltageCurrentChart.stroke)("dataLabels", ctx_r3.voltageCurrentChart.dataLabels)("tooltip", ctx_r3.voltageCurrentChart.tooltip)("fill", ctx_r3.voltageCurrentChart.fill)("colors", ctx_r3.voltageCurrentChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "apx-chart", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.powerFactorChart.series)("chart", ctx_r3.powerFactorChart.chart)("xaxis", ctx_r3.powerFactorChart.xaxis)("stroke", ctx_r3.powerFactorChart.stroke)("dataLabels", ctx_r3.powerFactorChart.dataLabels)("tooltip", ctx_r3.powerFactorChart.tooltip)("fill", ctx_r3.powerFactorChart.fill)("colors", ctx_r3.powerFactorChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186);
    \u0275\u0275element(1, "apx-chart", 187);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.pfDonutChart.series)("chart", ctx_r3.pfDonutChart.chart)("labels", ctx_r3.pfDonutChart.labels)("dataLabels", ctx_r3.pfDonutChart.dataLabels)("colors", ctx_r3.pfDonutChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "apx-chart", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.frequencyChart.series)("chart", ctx_r3.frequencyChart.chart)("xaxis", ctx_r3.frequencyChart.xaxis)("stroke", ctx_r3.frequencyChart.stroke)("dataLabels", ctx_r3.frequencyChart.dataLabels)("tooltip", ctx_r3.frequencyChart.tooltip)("fill", ctx_r3.frequencyChart.fill)("colors", ctx_r3.frequencyChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "apx-chart", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r3.hourlyDemandChart.series)("chart", ctx_r3.hourlyDemandChart.chart)("xaxis", ctx_r3.hourlyDemandChart.xaxis)("stroke", ctx_r3.hourlyDemandChart.stroke)("dataLabels", ctx_r3.hourlyDemandChart.dataLabels)("tooltip", ctx_r3.hourlyDemandChart.tooltip)("fill", ctx_r3.hourlyDemandChart.fill)("colors", ctx_r3.hourlyDemandChart.colors);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "span");
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const alert_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("alert-dot " + alert_r33.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alert_r33.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, alert_r33.timestamp, "medium"));
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_75_div_1_Template, 8, 7, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dashboard_r34 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", dashboard_r34.alerts);
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223);
    \u0275\u0275element(1, "i", 224);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No sensor alerts found.");
    \u0275\u0275elementEnd()();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_tr_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reading_r35 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, reading_r35.createdAt, "shortTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, reading_r35.volt, "1.0-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 12, reading_r35.current, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 15, reading_r35.activePower, "1.0-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, reading_r35.powerFactor, "1.0-3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 21, reading_r35.frequency, "1.0-2"));
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No recent readings found.");
    \u0275\u0275elementEnd()();
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 230)(2, "p", 66);
    \u0275\u0275text(3, "Sensor electrical detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Raw electrical quality and telemetry");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section", 231)(7, "article", 181)(8, "header", 155)(9, "div")(10, "p", 66);
    \u0275\u0275text(11, "Power");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h2");
    \u0275\u0275text(13, "Power analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "W / VAR / VA");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_16_Template, 2, 8, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "article", 181)(18, "header", 155)(19, "div")(20, "p", 66);
    \u0275\u0275text(21, "Electrical");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h2");
    \u0275\u0275text(23, "Voltage and current");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "V / A");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_26_Template, 2, 8, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "article", 181)(28, "header", 155)(29, "div")(30, "p", 66);
    \u0275\u0275text(31, "Quality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h2");
    \u0275\u0275text(33, "Power factor trend");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "PF");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_36_Template, 2, 8, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "article", 232)(38, "header", 155)(39, "div")(40, "p", 66);
    \u0275\u0275text(41, "Quality mix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h2");
    \u0275\u0275text(43, "Power factor distribution");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_44_Template, 2, 5, "div", 233);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "article", 181)(46, "header", 155)(47, "div")(48, "p", 66);
    \u0275\u0275text(49, "Stability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h2");
    \u0275\u0275text(51, "Frequency monitoring");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Hz");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_54_Template, 2, 8, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "article", 181)(56, "header", 155)(57, "div")(58, "p", 66);
    \u0275\u0275text(59, "Demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h2");
    \u0275\u0275text(61, "Hourly sensor demand");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63, "Avg W");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_64_Template, 2, 8, "div", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "section", 234)(66, "article", 218)(67, "header", 155)(68, "div")(69, "p", 66);
    \u0275\u0275text(70, "Sensor events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "h2");
    \u0275\u0275text(72, "Recent alerts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_75_Template, 2, 1, "div", 235)(76, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_ng_template_76_Template, 4, 0, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "article", 218)(79, "header", 155)(80, "div")(81, "p", 66);
    \u0275\u0275text(82, "Telemetry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "h2");
    \u0275\u0275text(84, "Recent readings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "span");
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 198)(88, "table")(89, "thead")(90, "tr")(91, "th");
    \u0275\u0275text(92, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "th");
    \u0275\u0275text(94, "V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "th");
    \u0275\u0275text(96, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "th");
    \u0275\u0275text(98, "W");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "th");
    \u0275\u0275text(100, "PF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "th");
    \u0275\u0275text(102, "Hz");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "tbody");
    \u0275\u0275template(104, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_tr_104_Template, 19, 24, "tr", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(105, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_div_105_Template, 4, 0, "div", 236);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dashboard_r34 = ctx.ngIf;
    const noSensorAlerts_r36 = \u0275\u0275reference(77);
    const ctx_r3 = \u0275\u0275nextContext(3);
    const noChartRecords_r23 = \u0275\u0275reference(45);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r3.activePowerChart)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.voltageCurrentChart)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.powerFactorChart)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.pfDonutChart)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.frequencyChart)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.hourlyDemandChart)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((dashboard_r34.alerts == null ? null : dashboard_r34.alerts.length) || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dashboard_r34.alerts == null ? null : dashboard_r34.alerts.length)("ngIfElse", noSensorAlerts_r36);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((dashboard_r34.recentReadings == null ? null : dashboard_r34.recentReadings.length) || 0);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", dashboard_r34.recentReadings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(dashboard_r34.recentReadings == null ? null : dashboard_r34.recentReadings.length));
  }
}
function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_1_Template, 15, 13, "section", 91)(2, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_2_Template, 8, 2, "section", 92);
    \u0275\u0275elementStart(3, "section", 93)(4, "article")(5, "span", 94);
    \u0275\u0275element(6, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "small");
    \u0275\u0275text(9, "Energy used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "em");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "article")(17, "span", 95);
    \u0275\u0275element(18, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "small");
    \u0275\u0275text(21, "Estimated cost");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EnergyDeepDiveComponent_ng_container_42_ng_container_2_strong_22_Template, 3, 5, "strong", 97)(23, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_23_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(25, "em");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "article")(28, "span", 98);
    \u0275\u0275element(29, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "small");
    \u0275\u0275text(32, "Peak demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "em");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "article")(40, "span", 100);
    \u0275\u0275element(41, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "small");
    \u0275\u0275text(44, "Saving opportunity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "em");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "section", 102)(51, "article", 103)(52, "header", 104)(53, "div", 105)(54, "span", 106);
    \u0275\u0275element(55, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "h2");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "button", 107);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.exportCrmAnalysisCsv());
    });
    \u0275\u0275element(62, "i", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 109)(64, "div", 110)(65, "div", 111);
    \u0275\u0275listener("wheel", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_div_wheel_65_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.blockChartPageScroll($event));
    });
    \u0275\u0275template(66, EnergyDeepDiveComponent_ng_container_42_ng_container_2_apx_chart_66_Template, 1, 11, "apx-chart", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "aside", 113)(68, "div", 114)(69, "div", 115)(70, "yx-select", 116);
    \u0275\u0275listener("valueChange", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_yx_select_valueChange_70_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.selectedCrmChartType = $event;
      return \u0275\u0275resetView(ctx_r3.onCrmChartTypeChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 117)(72, "div");
    \u0275\u0275element(73, "span", 118);
    \u0275\u0275elementStart(74, "p");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "strong");
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "small");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div");
    \u0275\u0275element(82, "span", 119);
    \u0275\u0275elementStart(83, "p");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "strong");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(88, EnergyDeepDiveComponent_ng_container_42_ng_container_2_small_88_Template, 2, 2, "small", 35)(89, EnergyDeepDiveComponent_ng_container_42_ng_container_2_small_89_Template, 2, 0, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div");
    \u0275\u0275element(91, "span", 120);
    \u0275\u0275elementStart(92, "p");
    \u0275\u0275text(93, "Total usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "strong");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "small");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(99, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_99_Template, 8, 7, "section", 121)(100, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_100_Template, 11, 2, "section", 122)(101, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_101_Template, 49, 33, "section", 123);
    \u0275\u0275elementStart(102, "section", 124)(103, "article", 125)(104, "header", 104)(105, "div", 105)(106, "span", 126);
    \u0275\u0275element(107, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div")(109, "h2");
    \u0275\u0275text(110, "Utility-wise Consumption Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p");
    \u0275\u0275text(112, "Monthly usage composition across the last 12 months for this hierarchy scope.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "button", 128);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_button_click_113_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.exportUtilityTrendCsv());
    });
    \u0275\u0275element(114, "i", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 129);
    \u0275\u0275template(116, EnergyDeepDiveComponent_ng_container_42_ng_container_2_apx_chart_116_Template, 1, 11, "apx-chart", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "article", 131)(118, "header", 104)(119, "div", 105)(120, "span", 132);
    \u0275\u0275element(121, "i", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div")(123, "h2");
    \u0275\u0275text(124, "Last 30 Days Utility Mix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "p");
    \u0275\u0275text(126, "Share of energy by utility category for this hierarchy scope.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "button", 134);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.exportUtilityMixCsv());
    });
    \u0275\u0275element(128, "i", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 135)(130, "div", 136);
    \u0275\u0275template(131, EnergyDeepDiveComponent_ng_container_42_ng_container_2_apx_chart_131_Template, 1, 9, "apx-chart", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 138)(133, "div", 139)(134, "span");
    \u0275\u0275text(135, "Total utility energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "strong");
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "small");
    \u0275\u0275text(140, "Last 30 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(141, EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_141_Template, 2, 1, "div", 140);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(142, "section", 141)(143, "article", 142)(144, "header", 143)(145, "div")(146, "p", 66);
    \u0275\u0275text(147, "Period comparison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "h2");
    \u0275\u0275text(149);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 144)(151, "button", 145);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_button_click_151_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.exportTrendCsv());
    });
    \u0275\u0275element(152, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "div", 146)(154, "button", 25);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_button_click_154_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changeAnalysisMetric("energy"));
    });
    \u0275\u0275text(155, "Energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "button", 147);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_button_click_156_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changeAnalysisMetric("cost"));
    });
    \u0275\u0275text(157, "Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "button", 147);
    \u0275\u0275listener("click", function EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template_button_click_158_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changeAnalysisMetric("demand"));
    });
    \u0275\u0275text(159, "Demand");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(160, "div", 148)(161, "span");
    \u0275\u0275text(162, "Selected period vs previous period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "strong");
    \u0275\u0275text(164);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(165, EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_165_Template, 2, 8, "div", 149)(166, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_166_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(168, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_168_Template, 9, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(170, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_170_Template, 47, 28, "article", 150)(171, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_171_Template, 7, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(173, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_173_Template, 36, 21, "article", 150)(174, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_174_Template, 9, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(176, EnergyDeepDiveComponent_ng_container_42_ng_container_2_section_176_Template, 56, 17, "section", 151);
    \u0275\u0275elementStart(177, "section", 152);
    \u0275\u0275template(178, EnergyDeepDiveComponent_ng_container_42_ng_container_2_article_178_Template, 12, 3, "article", 153);
    \u0275\u0275elementStart(179, "article", 154)(180, "header", 155)(181, "div")(182, "p", 66);
    \u0275\u0275text(183, "Actionable analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "h2");
    \u0275\u0275text(185, "Optimization suggestions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "span");
    \u0275\u0275text(187);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(188, EnergyDeepDiveComponent_ng_container_42_ng_container_2_div_188_Template, 2, 1, "div", 156)(189, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_template_189_Template, 5, 2, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(191, EnergyDeepDiveComponent_ng_container_42_ng_container_2_ng_container_191_Template, 106, 18, "ng-container", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const analysis_r16 = ctx.ngIf;
    const topNoCost_r37 = \u0275\u0275reference(24);
    const unavailableTrend_r38 = \u0275\u0275reference(167);
    const demandUnavailable_r39 = \u0275\u0275reference(172);
    const peakUnavailable_r40 = \u0275\u0275reference(175);
    const suggestionsUnavailable_r41 = \u0275\u0275reference(190);
    const ctx_r3 = \u0275\u0275nextContext(2);
    const noChartRecords_r23 = \u0275\u0275reference(45);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !analysis_r16.dataStatus.hasReadings);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 71, analysis_r16.summary.energyKwh, "1.0-2"), " kWh");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getChangeClass(analysis_r16.summary.energyChangePercent));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", analysis_r16.summary.energyChangePercent >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(15, 74, analysis_r16.summary.energyChangePercent, "1.0-1"), "% vs previous");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("kpi-unavailable", analysis_r16.summary.estimatedCost === null);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", analysis_r16.summary.estimatedCost !== null)("ngIfElse", topNoCost_r37);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(analysis_r16.summary.costChangePercent !== null ? "Compared with previous period" : "Configure tariff rates");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(35, 77, analysis_r16.summary.peakDemandKw, "1.0-2"), " kW");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(analysis_r16.summary.peakDemandAt ? \u0275\u0275pipeBind2(38, 80, analysis_r16.summary.peakDemandAt, "short") : "No demand point");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("kpi-unavailable", !analysis_r16.features.optimizationSuggestions);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(analysis_r16.features.optimizationSuggestions ? \u0275\u0275pipeBind2(47, 83, analysis_r16.summary.savingOpportunityKwh, "1.0-2") + " kWh" : "Not available");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(analysis_r16.summary.savingOpportunityCost !== null ? "Potential cost saving available" : "Review optimization suggestions");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("crm-card-loading", ctx_r3.isAnalysisLoading);
    \u0275\u0275attribute("aria-busy", ctx_r3.isAnalysisLoading);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.selectedCrmAnalysisTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selectedCrmAnalysisDescription);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.isAnalysisLoading);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.crmAnalysisChartOptions)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r3.crmChartTypeOptions)("disabled", ctx_r3.isAnalysisLoading)("value", ctx_r3.selectedCrmChartType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.crmPrimaryMetricLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(78, 86, ctx_r3.crmPrimaryMetricValue, "1.0-1"), " ", ctx_r3.crmPrimaryMetricUnit, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getRangeLabel());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.crmSecondaryMetricLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(87, 89, ctx_r3.crmSecondaryMetricValue, "1.0-1"), " ", ctx_r3.selectedCrmChartType === "peaknonpeak" ? "kWh" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedCrmChartType === "peaknonpeak");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedCrmChartType !== "peaknonpeak");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(96, 92, (ctx_r3.crmAnalysisChart == null ? null : ctx_r3.crmAnalysisChart.totalKwh) || 0, "1.0-1"), " kWh");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getRangeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !analysis_r16.configuration.isReadyForOptimization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", false);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r3.utilityTrendChartOptions)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r3.utilityMixChartOptions)("ngIfElse", noChartRecords_r23);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(138, 95, analysis_r16.crmCharts.utilityMix.totalKwh, "1.0-1"), " kWh");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", analysis_r16.crmCharts.utilityMix.categories.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.getMetricTitle());
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r3.analysisMetricView === "energy");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.analysisMetricView === "cost");
    \u0275\u0275property("disabled", !analysis_r16.features.costAnalysis);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.analysisMetricView === "demand");
    \u0275\u0275property("disabled", !analysis_r16.features.demandAnalysis);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.getMetricUnit(analysis_r16.currency));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.analysisTrendChart)("ngIfElse", unavailableTrend_r38);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.analysisDemandChart)("ngIfElse", demandUnavailable_r39);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", analysis_r16.peakOffPeak.isAvailable && ctx_r3.analysisPeakChart)("ngIfElse", peakUnavailable_r40);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", analysis_r16.children.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", false);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(analysis_r16.suggestions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", analysis_r16.features.optimizationSuggestions && analysis_r16.suggestions.length)("ngIfElse", suggestionsUnavailable_r41);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.level === "sensor" && ctx_r3.data);
  }
}
function EnergyDeepDiveComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EnergyDeepDiveComponent_ng_container_42_section_1_Template, 8, 1, "section", 33)(2, EnergyDeepDiveComponent_ng_container_42_ng_container_2_Template, 192, 98, "ng-container", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.analysisError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.analysisData);
  }
}
function EnergyDeepDiveComponent_section_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 238)(1, "div", 239)(2, "div")(3, "p", 66);
    \u0275\u0275text(4, "Live telemetry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 240);
    \u0275\u0275element(8, "i", 48);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "app-live-consumption", 241);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.getPageTitle(), " live readings");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, ctx_r3.level));
    \u0275\u0275advance(2);
    \u0275\u0275property("embedded", true)("scopeType", ctx_r3.level)("scopeId", ctx_r3.currentId);
  }
}
function EnergyDeepDiveComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "p");
    \u0275\u0275text(2, "No record found");
    \u0275\u0275elementEnd()();
  }
}
var EnergyDeepDiveComponent = class _EnergyDeepDiveComponent {
  constructor(dashboardService, userService, reportingTimezoneService) {
    this.dashboardService = dashboardService;
    this.userService = userService;
    this.reportingTimezoneService = reportingTimezoneService;
    this.isLoading = false;
    this.isAnalysisLoading = false;
    this.errorMessage = "";
    this.analysisError = "";
    this.level = "business";
    this.currentId = "";
    this.range = "24h";
    this.rangeOptions = [
      { label: "Last 24 hours", value: "24h" },
      { label: "Last 7 days", value: "7d" },
      { label: "Last 30 days", value: "30d" },
      { label: "Last 90 days", value: "90d" },
      { label: "Last 1 year", value: "1y" }
    ];
    this.selectedView = "hierarchy";
    this.analysisMetricView = "energy";
    this.analysisBreakdownView = "share";
    this.breadcrumbs = [];
    this.childCards = [];
    this.currentUser = null;
    this.reportingTimeZone = "UTC";
    this.detectedTimeZone = "UTC";
    this.timezoneConfirmed = false;
    this.selectedCrmChartType = "peaknonpeak";
    this.crmChartTypeOptions = [
      { label: "Peak vs Non-Peak", value: "peaknonpeak" },
      { label: "Energy Consumption", value: "energyconsumption" },
      { label: "High Demand", value: "highdemand" }
    ];
    this.chartPalette = [
      "rgb(132, 90, 223)",
      "rgb(35, 183, 229)",
      "rgb(38, 191, 148)",
      "rgb(245, 184, 73)"
    ];
    this.selectedViewStorageKey = "emo.energy-deep-dive.selected-view";
    this.reportingTimeZones = this.reportingTimezoneService.getSupportedTimezones();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      this.detectedTimeZone = this.reportingTimezoneService.detectedTimezone;
      this.reportingTimeZone = this.reportingTimezoneService.appliedTimezone;
      this.timezoneConfirmed = this.reportingTimezoneService.isConfirmed;
      this.currentId = this.currentUser?.fkBusiness || "";
      this.restoreSelectedView();
      if (!this.currentId) {
        this.errorMessage = "No business is associated with the current user.";
        return;
      }
      this.loadDashboard();
    });
  }
  loadDashboard() {
    if (!this.currentId)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    this.dashboardService.getDashboard(this.level, this.currentId, this.range).subscribe({
      next: (response) => {
        this.data = response;
        this.prepareChildCards(response);
        this.prepareSensorCharts(response);
        this.loadBreadcrumb();
        this.isLoading = false;
        if (this.selectedView === "analysis")
          this.loadAnalysis();
      },
      error: () => {
        this.errorMessage = "The selected hierarchy level could not be loaded.";
        this.isLoading = false;
      }
    });
  }
  loadAnalysis() {
    if (!this.currentId)
      return;
    this.isAnalysisLoading = true;
    this.analysisError = "";
    this.dashboardService.getDeepDive(this.level, this.currentId, this.range, this.reportingTimeZone, true).subscribe({
      next: (response) => {
        this.analysisData = response;
        if (response.breadcrumbs?.length)
          this.breadcrumbs = response.breadcrumbs;
        this.prepareAnalysisCharts(response);
        this.isAnalysisLoading = false;
      },
      error: () => {
        this.analysisData = void 0;
        this.analysisError = "Analysis could not be loaded for this hierarchy level.";
        this.isAnalysisLoading = false;
      }
    });
  }
  loadBreadcrumb() {
    if (this.level === "business") {
      this.breadcrumbs = [
        {
          id: this.currentId,
          name: this.data?.businessName || "Business",
          level: "business"
        }
      ];
      return;
    }
    this.dashboardService.getBreadcrumb(this.level, this.currentId).subscribe({
      next: (response) => this.breadcrumbs = response,
      error: () => this.breadcrumbs = []
    });
  }
  setView(view) {
    if (view === "live" && !this.canShowLiveTab)
      return;
    this.selectedView = view;
    this.persistSelectedView();
    if (view === "analysis" && !this.analysisData)
      this.loadAnalysis();
  }
  get canShowLiveTab() {
    return ["floor", "section", "office", "device", "sensor"].includes(this.level);
  }
  openHierarchyView() {
    if (this.level !== "sensor") {
      this.setView("hierarchy");
      return;
    }
    const parent = this.breadcrumbs.length > 1 ? this.breadcrumbs[this.breadcrumbs.length - 2] : void 0;
    if (parent)
      this.openLevel(parent.level, parent.id, "hierarchy");
  }
  changeRange(range) {
    if (this.range === range)
      return;
    this.range = range;
    this.resetViewData();
    this.loadDashboard();
  }
  changeAnalysisMetric(metric) {
    if (!this.analysisData || !this.isMetricAvailable(metric))
      return;
    this.analysisMetricView = metric;
    this.prepareAnalysisTrendChart(this.analysisData);
  }
  changeAnalysisBreakdown(view) {
    this.analysisBreakdownView = view;
  }
  isMetricAvailable(metric) {
    if (!this.analysisData)
      return false;
    if (metric === "cost")
      return this.analysisData.features.costAnalysis;
    if (metric === "demand")
      return this.analysisData.features.demandAnalysis;
    return this.analysisData.features.energyAnalysis;
  }
  openLevel(level, id, view) {
    let nextView = level === "sensor" ? "analysis" : view || this.selectedView;
    if (nextView === "live" && !["floor", "section", "office", "device", "sensor"].includes(level)) {
      nextView = "hierarchy";
    }
    this.level = level;
    this.currentId = id;
    this.selectedView = nextView;
    this.persistSelectedView();
    this.resetViewData();
    this.loadDashboard();
  }
  openSensorAnalysis(sensorId) {
    this.openLevel("sensor", sensorId, "analysis");
  }
  resetViewData() {
    this.analysisData = void 0;
    this.analysisTrendChart = void 0;
    this.analysisDemandChart = void 0;
    this.analysisPeakChart = void 0;
    this.analysisShareChart = void 0;
    this.analysisRankingChart = void 0;
    this.crmAnalysisChart = void 0;
    this.crmAnalysisChartOptions = void 0;
    this.utilityTrendChartOptions = void 0;
    this.utilityMixChartOptions = void 0;
  }
  prepareChildCards(response) {
    const levels = [
      {
        items: response.facilities,
        level: "facility",
        idKey: "facilityId",
        nameKey: "facilityName"
      },
      {
        items: response.buildings,
        level: "building",
        idKey: "buildingId",
        nameKey: "buildingName"
      },
      {
        items: response.floors,
        level: "floor",
        idKey: "floorId",
        nameKey: "floorName"
      },
      {
        items: response.sections,
        level: "section",
        idKey: "sectionId",
        nameKey: "sectionName"
      },
      {
        items: response.offices,
        level: "office",
        idKey: "officeId",
        nameKey: "officeName"
      },
      {
        items: response.devices,
        level: "device",
        idKey: "deviceId",
        nameKey: "deviceName"
      }
    ];
    const source = levels.find((item) => item.items?.length);
    this.childCards = (source?.items || []).map((item) => ({
      id: String(item[source.idKey] || ""),
      name: String(item[source.nameKey] || "Unnamed"),
      totalActiveEnergyKwh: item.totalActiveEnergyKwh,
      avgPowerFactor: item.avgPowerFactor,
      sensorCount: item.sensorCount,
      alertCount: item.alertCount,
      level: source.level
    }));
  }
  prepareSensorCharts(response) {
    this.hourlyEnergyChart = response.hourlyEnergy?.length ? this.lineChart([
      { name: "Energy", data: this.toSeries(response.hourlyEnergy) }
    ]) : void 0;
    if (!response.sensorId) {
      this.activePowerChart = void 0;
      this.voltageCurrentChart = void 0;
      this.powerFactorChart = void 0;
      this.frequencyChart = void 0;
      this.pfDonutChart = void 0;
      this.hourlyDemandChart = void 0;
      return;
    }
    const hasPowerData = !!(response.activePower?.length || response.reactivePower?.length || response.apparentPower?.length);
    this.activePowerChart = hasPowerData ? this.lineChart([
      { name: "Active power", data: this.toSeries(response.activePower || []) },
      {
        name: "Reactive power",
        data: this.toSeries(response.reactivePower || [])
      },
      {
        name: "Apparent power",
        data: this.toSeries(response.apparentPower || [])
      }
    ]) : void 0;
    this.voltageCurrentChart = response.voltage?.length || response.current?.length ? this.lineChart([
      { name: "Voltage", data: this.toSeries(response.voltage || []) },
      { name: "Current", data: this.toSeries(response.current || []) }
    ]) : void 0;
    this.powerFactorChart = response.powerFactor?.length ? this.lineChart([
      { name: "Power factor", data: this.toSeries(response.powerFactor || []) }
    ]) : void 0;
    this.frequencyChart = response.frequency?.length ? this.lineChart([
      { name: "Frequency", data: this.toSeries(response.frequency || []) }
    ]) : void 0;
    const today = /* @__PURE__ */ new Date();
    this.hourlyDemandChart = response.hourlyDemand?.length ? this.lineChart([
      {
        name: "Average demand",
        data: (response.hourlyDemand || []).map((item) => [
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), item.hour).getTime(),
          item.avgActivePowerW
        ])
      }
    ]) : void 0;
    const distribution = response.pfDistribution;
    const distributionSeries = distribution ? [
      distribution.excellentPct,
      distribution.goodPct,
      distribution.acceptablePct,
      distribution.poorPct
    ] : [];
    this.pfDonutChart = distributionSeries.some((value) => value > 0) ? {
      series: distributionSeries,
      chart: {
        type: "donut",
        height: 280,
        fontFamily: "inherit",
        animations: { enabled: false }
      },
      labels: ["Excellent", "Good", "Acceptable", "Poor"],
      colors: [
        "rgb(38, 191, 148)",
        "rgb(35, 183, 229)",
        "rgb(245, 184, 73)",
        "rgb(230, 83, 60)"
      ],
      dataLabels: { enabled: false }
    } : void 0;
  }
  prepareAnalysisCharts(response) {
    if (!this.isMetricAvailable(this.analysisMetricView)) {
      this.analysisMetricView = response.features.energyAnalysis ? "energy" : "demand";
    }
    this.prepareAnalysisTrendChart(response);
    this.prepareCrmCharts(response);
    this.analysisDemandChart = response.demand.hasData ? this.lineChart([
      {
        name: "Selected period demand",
        data: response.trend.map((point) => [
          new Date(point.bucket).getTime(),
          point.demandKw
        ])
      },
      {
        name: "Previous period demand",
        data: response.trend.map((point) => [
          new Date(point.bucket).getTime(),
          point.previousDemandKw
        ])
      }
    ]) : void 0;
    if (this.analysisDemandChart) {
      this.analysisDemandChart.tooltip = {
        x: { formatter: (value) => this.formatChartTooltip(value) },
        y: { formatter: (value) => `${value.toFixed(2)} kW` }
      };
    }
    this.analysisPeakChart = response.peakOffPeak.isAvailable ? {
      series: [
        response.peakOffPeak.peakEnergyKwh,
        response.peakOffPeak.offPeakEnergyKwh
      ],
      chart: {
        type: "donut",
        height: 280,
        fontFamily: "inherit",
        animations: { enabled: false }
      },
      labels: ["Peak", "Off-peak"],
      colors: ["rgb(245, 184, 73)", "rgb(38, 191, 148)"],
      dataLabels: { enabled: true }
    } : void 0;
    this.analysisShareChart = response.children.length ? {
      series: response.children.map((item) => item.energyKwh),
      chart: {
        type: "donut",
        height: 360,
        fontFamily: "inherit",
        animations: { enabled: false }
      },
      labels: response.children.map((item) => item.name),
      colors: response.children.map((_, index) => this.chartPalette[index % this.chartPalette.length]),
      dataLabels: {
        enabled: true,
        formatter: (value) => `${value.toFixed(1)}%`
      },
      legend: { show: true, position: "bottom" },
      plotOptions: { pie: { donut: { size: "66%" } } },
      tooltip: {
        y: { formatter: (value) => `${value.toFixed(2)} kWh` }
      }
    } : void 0;
    this.analysisRankingChart = response.children.length ? {
      series: [
        {
          name: "Energy",
          data: response.children.map((item) => item.energyKwh)
        }
      ],
      chart: {
        type: "bar",
        height: Math.max(340, response.children.length * 48),
        fontFamily: "inherit",
        toolbar: { show: false },
        animations: { enabled: false }
      },
      plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
      colors: ["rgb(132, 90, 223)"],
      dataLabels: {
        enabled: true,
        formatter: (value) => `${value.toFixed(1)} kWh`
      },
      xaxis: {
        categories: response.children.map((item) => item.name)
      },
      tooltip: {
        y: { formatter: (value) => `${value.toFixed(2)} kWh` }
      }
    } : void 0;
  }
  confirmReportingTimezone(value = this.reportingTimeZone) {
    if (!this.reportingTimezoneService.confirm(value))
      return;
    this.reportingTimeZone = value;
    this.timezoneConfirmed = true;
    this.analysisData = void 0;
    if (this.selectedView === "analysis")
      this.loadAnalysis();
  }
  useDetectedTimezone() {
    this.reportingTimeZone = this.detectedTimeZone;
    this.confirmReportingTimezone(this.detectedTimeZone);
  }
  formatReportingTimestamp(value, includeTime = true) {
    if (!value)
      return "";
    return this.reportingTimezoneService.formatTimestamp(value, includeTime ? void 0 : { hour: void 0, minute: void 0 });
  }
  onCrmChartTypeChange() {
    if (!this.analysisData)
      return;
    if (this.selectedCrmChartType === "peaknonpeak" && !this.analysisData.features.peakOffPeakAnalysis) {
      this.selectedCrmChartType = "energyconsumption";
    }
    this.prepareCrmAnalysisChart(this.analysisData);
  }
  prepareCrmCharts(response) {
    if (this.selectedCrmChartType === "peaknonpeak" && !response.features.peakOffPeakAnalysis) {
      this.selectedCrmChartType = "energyconsumption";
    }
    this.prepareCrmAnalysisChart(response);
    const utilityTrend = response.crmCharts?.utilityTrend;
    const utilityMonthLabels = utilityTrend ? this.buildUtilityMonthLabels(utilityTrend.categories, utilityTrend.points?.map((point) => point.period) || []) : [];
    this.utilityTrendChartOptions = utilityTrend?.series?.length ? {
      series: utilityTrend.series,
      chart: {
        type: "bar",
        height: 360,
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { enabled: false }
      },
      dataLabels: { enabled: false },
      plotOptions: { bar: { columnWidth: "72%", borderRadius: 1 } },
      xaxis: {
        categories: utilityMonthLabels,
        tickPlacement: "on",
        labels: { rotate: 0, trim: false, hideOverlappingLabels: false }
      },
      yaxis: { labels: { formatter: (value) => `${value.toFixed(0)} kWh` } },
      legend: { position: "top" },
      colors: this.chartPalette,
      grid: { borderColor: "#edf0f5", strokeDashArray: 4 },
      fill: { opacity: 1 },
      tooltip: {
        y: { formatter: (value) => `${value.toFixed(2)} kWh` }
      }
    } : void 0;
    const utilityMix = response.crmCharts?.utilityMix;
    const mixValues = utilityMix?.series?.[0]?.data || [];
    this.utilityMixChartOptions = mixValues.length ? {
      series: mixValues,
      chart: { type: "donut", height: 315, fontFamily: "inherit", animations: { enabled: false } },
      labels: utilityMix.categories,
      colors: utilityMix.categories.map((_, index) => this.chartPalette[index % this.chartPalette.length]),
      legend: { show: false },
      stroke: { show: false },
      tooltip: { y: { formatter: (value) => `${value.toFixed(2)} kWh` } },
      plotOptions: { pie: { expandOnClick: false, donut: { size: "72%" } } },
      dataLabels: { enabled: false }
    } : void 0;
  }
  prepareCrmAnalysisChart(response) {
    const source = this.selectedCrmChartType === "peaknonpeak" ? response.crmCharts?.peakNonPeak : this.selectedCrmChartType === "highdemand" ? response.crmCharts?.highDemand : response.crmCharts?.energyConsumption;
    this.crmAnalysisChart = source;
    if (!source?.series?.length) {
      this.crmAnalysisChartOptions = void 0;
      return;
    }
    const timestamps = source.points.map((point) => new Date(point.period).getTime());
    const hasDatetimePoints = timestamps.length === source.categories.length && timestamps.every(Number.isFinite);
    const series = hasDatetimePoints ? source.series.map((item) => __spreadProps(__spreadValues({}, item), {
      data: item.data.map((value, index) => [timestamps[index], value])
    })) : source.series;
    this.crmAnalysisChartOptions = {
      series,
      chart: {
        type: "area",
        width: "100%",
        height: 390,
        toolbar: {
          show: true,
          tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true },
          autoSelected: "zoom"
        },
        animations: { enabled: false },
        zoom: { enabled: true, type: "x", autoScaleYaxis: true, allowMouseWheelZoom: true }
      },
      xaxis: hasDatetimePoints ? {
        type: "datetime",
        tickAmount: this.range === "1y" ? 12 : void 0,
        labels: {
          rotate: 0,
          hideOverlappingLabels: true,
          datetimeUTC: true,
          formatter: (_value, timestamp) => this.formatChartTimestamp(timestamp)
        }
      } : { categories: source.categories, labels: { rotate: -35, trim: false, hideOverlappingLabels: true } },
      yaxis: { labels: { formatter: (value) => `${value.toFixed(0)} ${source.unit}` } },
      stroke: { curve: "smooth", width: 2.5 },
      dataLabels: { enabled: false },
      colors: this.chartPalette,
      grid: { borderColor: "#edf0f5", strokeDashArray: 4 },
      legend: { position: "top" },
      markers: { size: 0, hover: { size: 5 } },
      tooltip: {
        x: hasDatetimePoints ? { formatter: (value) => this.formatChartTooltip(value) } : void 0,
        y: { formatter: (value) => `${value.toFixed(2)} ${source.unit}` }
      }
    };
  }
  get selectedCrmAnalysisTitle() {
    return this.selectedCrmChartType === "peaknonpeak" ? "Peak vs Non-Peak" : this.selectedCrmChartType === "highdemand" ? "High Demand" : "Energy Consumption";
  }
  get selectedCrmAnalysisDescription() {
    return this.selectedCrmChartType === "peaknonpeak" ? "Compare energy used during configured tariff periods." : this.selectedCrmChartType === "highdemand" ? "Identify the highest demand reached in each period." : "Track energy consumption for the selected hierarchy scope.";
  }
  get crmPrimaryMetricLabel() {
    return this.selectedCrmChartType === "highdemand" ? "Peak demand" : this.selectedCrmChartType === "peaknonpeak" ? "Peak usage" : "Energy used";
  }
  get crmPrimaryMetricValue() {
    if (!this.crmAnalysisChart)
      return 0;
    return this.selectedCrmChartType === "highdemand" ? this.crmAnalysisChart.peakDemandW : this.selectedCrmChartType === "peaknonpeak" ? this.crmAnalysisChart.totalPeakKwh : this.crmAnalysisChart.totalKwh;
  }
  get crmPrimaryMetricUnit() {
    return this.selectedCrmChartType === "highdemand" ? "W" : "kWh";
  }
  get crmSecondaryMetricLabel() {
    return this.selectedCrmChartType === "peaknonpeak" ? "Non-peak usage" : "Data points";
  }
  get crmSecondaryMetricValue() {
    if (!this.crmAnalysisChart)
      return 0;
    return this.selectedCrmChartType === "peaknonpeak" ? this.crmAnalysisChart.totalNonPeakKwh : this.crmAnalysisChart.points?.length || 0;
  }
  exportCrmAnalysisCsv() {
    const chart = this.crmAnalysisChart;
    if (!chart)
      return;
    const rows = chart.points.map((point) => ({
      period: point.period || point.label,
      label: point.label,
      value: point.value,
      peakKwh: point.peakKwh,
      nonPeakKwh: point.nonPeakKwh,
      totalKwh: point.totalKwh,
      demandW: point.demandW
    }));
    this.downloadCsv(`${this.level}-${this.selectedCrmChartType}-${this.range}.csv`, rows);
  }
  exportUtilityTrendCsv() {
    const chart = this.analysisData?.crmCharts?.utilityTrend;
    if (!chart)
      return;
    const rows = chart.categories.map((period, index) => {
      const row = { period };
      chart.series.forEach((series) => row[series.name] = series.data[index] ?? 0);
      return row;
    });
    this.downloadCsv(`${this.level}-utility-consumption-trend.csv`, rows);
  }
  exportUtilityMixCsv() {
    const chart = this.analysisData?.crmCharts?.utilityMix;
    if (!chart)
      return;
    const values = chart.series?.[0]?.data || [];
    const total = values.reduce((sum, value) => sum + value, 0);
    this.downloadCsv(`${this.level}-last-30-days-utility-mix.csv`, chart.categories.map((utility, index) => ({
      utility,
      energyKwh: values[index] ?? 0,
      percentage: total > 0 ? ((values[index] ?? 0) * 100 / total).toFixed(2) : 0
    })));
  }
  exportHierarchyCsv() {
    const rows = (this.analysisData?.children || []).map((child) => ({
      name: child.name,
      level: child.level,
      energyKwh: child.energyKwh,
      sharePercent: child.sharePercent,
      estimatedCost: child.estimatedCost ?? "",
      changePercent: child.changePercent,
      peakDemandKw: child.peakDemandKw,
      sensorCount: child.sensorCount,
      onlineSensors: child.onlineSensorCount,
      issues: child.issueCount,
      status: child.status
    }));
    this.downloadCsv(`${this.level}-hierarchy-analysis-${this.range}.csv`, rows);
  }
  exportTrendCsv() {
    const rows = (this.analysisData?.trend || []).map((point) => ({
      bucket: point.bucket,
      energyKwh: point.energyKwh,
      previousEnergyKwh: point.previousEnergyKwh,
      cost: point.cost ?? "",
      previousCost: point.previousCost ?? "",
      demandKw: point.demandKw,
      previousDemandKw: point.previousDemandKw
    }));
    this.downloadCsv(`${this.level}-period-comparison-${this.range}.csv`, rows);
  }
  downloadCsv(fileName, rows) {
    if (!rows.length)
      return;
    const headers = Array.from(new Set(rows.flatMap((row) => Object.keys(row))));
    const escape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const csv = [headers.map(escape).join(","), ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  }
  blockChartPageScroll(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  restoreSelectedView() {
    const storedView = localStorage.getItem(this.selectedViewStorageKey);
    if (storedView === "analysis" || storedView === "hierarchy") {
      this.selectedView = storedView;
      return;
    }
    if (storedView === "live" && this.canShowLiveTab) {
      this.selectedView = storedView;
    }
  }
  persistSelectedView() {
    localStorage.setItem(this.selectedViewStorageKey, this.selectedView);
  }
  prepareAnalysisTrendChart(response) {
    if (!this.isMetricAvailable(this.analysisMetricView) || !response.trend.length) {
      this.analysisTrendChart = void 0;
      return;
    }
    const current = response.trend.map((point) => [
      new Date(point.bucket).getTime(),
      this.analysisMetricView === "energy" ? point.energyKwh : this.analysisMetricView === "cost" ? point.cost ?? 0 : point.demandKw
    ]);
    const previous = response.trend.map((point) => [
      new Date(point.bucket).getTime(),
      this.analysisMetricView === "energy" ? point.previousEnergyKwh : this.analysisMetricView === "cost" ? point.previousCost ?? 0 : point.previousDemandKw
    ]);
    this.analysisTrendChart = this.lineChart([
      { name: "Selected period", data: current },
      { name: "Previous period", data: previous }
    ]);
    const suffix = this.analysisMetricView === "energy" ? " kWh" : this.analysisMetricView === "cost" ? ` ${response.currency}` : " kW";
    this.analysisTrendChart.chart = __spreadProps(__spreadValues({}, this.analysisTrendChart.chart), {
      height: 360
    });
    this.analysisTrendChart.tooltip = {
      x: { formatter: (value) => this.formatChartTooltip(value) },
      y: { formatter: (value) => `${value.toFixed(2)}${suffix}` }
    };
  }
  sparkChart(data, color) {
    return {
      series: [{ name: "Power", data }],
      colors: [color],
      chart: {
        type: "area",
        height: 52,
        sparkline: { enabled: true },
        animations: { enabled: false }
      },
      stroke: { curve: "smooth", width: 2 },
      fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.3, opacityTo: 0.02 }
      },
      dataLabels: { enabled: false },
      tooltip: { enabled: false }
    };
  }
  lineChart(series) {
    return {
      series,
      colors: this.chartPalette,
      chart: {
        type: "area",
        height: 300,
        fontFamily: "inherit",
        animations: { enabled: false },
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      stroke: { curve: "smooth", width: 2.5 },
      dataLabels: { enabled: false },
      xaxis: {
        type: "datetime",
        tickAmount: this.range === "1y" ? 12 : void 0,
        labels: {
          datetimeUTC: true,
          hideOverlappingLabels: true,
          style: { fontSize: "10px" },
          formatter: (_value, timestamp) => this.formatChartTimestamp(timestamp)
        }
      },
      tooltip: { x: { formatter: (value) => this.formatChartTooltip(value) } },
      fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.28, opacityTo: 0.03 }
      }
    };
  }
  toSeries(points) {
    return points.map((point) => [
      new Date(point.timestamp).getTime(),
      point.value
    ]);
  }
  buildUtilityMonthLabels(categories, periods) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let previousYear;
    return categories.map((category, index) => {
      const source = periods[index] || category;
      const isoMatch = source.match(/^(\d{4})-(\d{1,2})/);
      const namedMatch = source.match(/^([A-Za-z]{3,9})[\s-]+(\d{4})/);
      let year;
      let monthIndex;
      if (isoMatch) {
        year = Number(isoMatch[1]);
        monthIndex = Number(isoMatch[2]) - 1;
      } else if (namedMatch) {
        year = Number(namedMatch[2]);
        monthIndex = monthNames.findIndex((month) => namedMatch[1].toLowerCase().startsWith(month.toLowerCase()));
      }
      if (year === void 0 || monthIndex === void 0 || monthIndex < 0 || monthIndex > 11) {
        return category;
      }
      const yearChanged = previousYear !== void 0 && year !== previousYear;
      previousYear = year;
      return yearChanged ? `\u2019${String(year).slice(-2)}` : monthNames[monthIndex];
    });
  }
  formatChartTimestamp(timestamp) {
    if (!timestamp || !Number.isFinite(timestamp))
      return "";
    const isLongRange = this.range === "90d" || this.range === "1y";
    return this.reportingTimezoneService.formatTimestamp(timestamp, isLongRange ? { day: "2-digit", month: "short", year: this.range === "1y" ? "2-digit" : void 0, hour: void 0, minute: void 0 } : { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", year: void 0 });
  }
  formatChartTooltip(timestamp) {
    return this.reportingTimezoneService.formatTimestamp(timestamp);
  }
  getPageTitle() {
    return this.data?.businessName || this.data?.facilityName || this.data?.buildingName || this.data?.floorName || this.data?.sectionName || this.data?.officeName || this.data?.deviceName || this.data?.sensorName || "Energy Explorer";
  }
  getLevelIcon(level) {
    const icons = {
      business: "las la-briefcase",
      facility: "las la-building",
      building: "las la-city",
      floor: "las la-layer-group",
      section: "las la-sitemap",
      office: "las la-door-open",
      device: "las la-hdd",
      sensor: "las la-microchip"
    };
    return icons[level];
  }
  getRangeLabel() {
    return {
      "24h": "Last 24 hours",
      "7d": "Last 7 days",
      "30d": "Last 30 days",
      "90d": "Last 90 days",
      "1y": "Last 1 year"
    }[this.range];
  }
  getMetricTitle() {
    return this.analysisMetricView === "energy" ? "Energy trend" : this.analysisMetricView === "cost" ? "Cost trend" : "Demand trend";
  }
  getMetricUnit(currency = "PKR") {
    return this.analysisMetricView === "energy" ? "kWh" : this.analysisMetricView === "cost" ? currency : "kW";
  }
  getStatusClass(status) {
    const normalized = (status || "Normal").toLowerCase();
    return normalized === "high" ? "status-pill status-high" : normalized === "review" ? "status-pill status-review" : "status-pill status-normal";
  }
  getRequirementClass(status) {
    return `config-${status}`;
  }
  getRequirementIcon(status) {
    return status === "ready" ? "ri-checkbox-circle-line" : status === "partial" ? "ri-error-warning-line" : status === "optional" ? "ri-information-line" : "ri-close-circle-line";
  }
  getIssueClass(severity) {
    return `issue-${(severity || "advisory").toLowerCase()}`;
  }
  getChangeClass(value) {
    if (value === null || Math.abs(value) < 0.01)
      return "neutral";
    return value > 0 ? "negative" : "positive";
  }
  trackRequirement(_, item) {
    return item.key;
  }
  static {
    this.\u0275fac = function EnergyDeepDiveComponent_Factory(t) {
      return new (t || _EnergyDeepDiveComponent)(\u0275\u0275directiveInject(EnergyDeepDiveService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ReportingTimezoneService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnergyDeepDiveComponent, selectors: [["app-energy-deep-dive"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 27, consts: [["noChartRecords", ""], ["currentBreadcrumb", ""], ["topNoCost", ""], ["unavailableTrend", ""], ["metricUnavailable", ""], ["demandUnavailable", ""], ["peakUnavailable", ""], ["suggestionsUnavailable", ""], ["noCost", ""], ["costConfiguration", ""], ["savingConfiguration", ""], ["noAnalysisIssues", ""], ["noSensorAlerts", ""], [1, "explorer-page"], [1, "explorer-page-header"], [1, "explorer-page-header-inner"], [1, "explorer-header-actions"], ["routerLink", "/dashboard/crm/historical-data", 1, "explorer-history-link", 3, "queryParams"], [1, "ri-download-cloud-2-line"], ["aria-label", "Analysis range", 1, "range-select"], ["labelKey", "label", "valueKey", "value", "placeholder", "Select date range", 3, "valueChange", "items", "value"], [1, "reporting-timezone-bar"], [1, "reporting-timezone-actions"], ["aria-label", "Reporting timezone", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], ["type", "button", "class", "secondary", 3, "click", 4, "ngIf"], ["class", "hierarchy-breadcrumb", "aria-label", "Hierarchy path", 4, "ngIf"], [1, "explorer-content"], ["aria-label", "Dashboard view", 1, "view-switch"], [1, "ri-node-tree"], [1, "ri-line-chart-line"], ["type", "button", 3, "active", "click", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "explorer-loader", "role", "status", 4, "ngIf"], [4, "ngIf"], ["class", "deep-live-readings", 4, "ngIf"], [3, "value"], ["type", "button", 1, "secondary", 3, "click"], ["aria-label", "Hierarchy path", 1, "hierarchy-breadcrumb"], [4, "ngFor", "ngForOf"], ["routerLink", "/dashboard/crm", 1, "breadcrumb-back-button"], [1, "las", "la-arrow-left"], ["type", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["class", "breadcrumb-divider", "aria-hidden", "true", 4, "ngIf"], [1, "current-breadcrumb"], ["aria-hidden", "true", 1, "breadcrumb-divider"], [1, "ri-arrow-right-s-line"], [1, "ri-pulse-line"], [1, "error-state"], [1, "ri-error-warning-line"], ["role", "status", 1, "explorer-loader"], [1, "explorer-loader-head"], [1, "loader-energy-icon"], [1, "ri-flashlight-line"], ["aria-hidden", "true", 1, "loader-spinner"], ["aria-hidden", "true", 1, "loader-card-grid"], ["class", "loader-hierarchy-card", 4, "ngFor", "ngForOf"], [1, "loader-hierarchy-card"], [1, "loader-square"], [1, "loader-line", "loader-line-title"], [1, "loader-reading"], ["class", "hierarchy-section", 4, "ngIf"], ["class", "hierarchy-empty", 4, "ngIf"], [1, "hierarchy-section"], [1, "section-head"], [1, "section-label"], [1, "child-grid"], ["type", "button", "class", "child-card", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "child-card", 3, "click"], [1, "child-card-head"], [1, "location-icon"], [1, "alert-pill"], [1, "child-card-title"], [1, "card-energy"], [1, "child-stats"], [1, "ri-gauge-line"], [1, "ri-cpu-line"], [1, "open-card"], [1, "ri-arrow-right-line"], [1, "sensor-grid"], ["type", "button", "class", "sensor-card", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "sensor-card", 3, "click"], [1, "sensor-card-head"], [1, "sensor-icon"], [1, "sensor-status"], [1, "card-energy", "sensor-energy"], [1, "sensor-values"], [1, "ri-battery-charge-line"], [1, "ri-database-2-line"], [1, "hierarchy-empty"], ["class", "analysis-summary analysis-heading", 4, "ngIf"], ["class", "data-availability analysis-reading-warning", 4, "ngIf"], [1, "analysis-kpi-grid", "analysis-kpi-grid--top"], [1, "kpi-icon", "kpi-purple"], [1, "kpi-icon", "kpi-blue"], [1, "ri-money-dollar-circle-line"], [4, "ngIf", "ngIfElse"], [1, "kpi-icon", "kpi-green"], [1, "ri-speed-up-line"], [1, "kpi-icon", "kpi-red"], [1, "ri-lightbulb-flash-line"], [1, "crm-primary-grid", "deep-crm-grid"], [1, "crm-card", "crm-peak-card"], [1, "crm-card-header"], [1, "crm-card-heading"], [1, "crm-card-icon", "crm-card-icon-primary"], ["type", "button", "aria-label", "Export selected analysis", 1, "crm-icon-button", 3, "click", "disabled"], [1, "ri-download-2-line"], [1, "crm-analysis-card-body"], [1, "crm-chart-main"], [1, "crm-chart-shell", "crm-line-chart-shell", 3, "wheel"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "dataLabels", "colors", "grid", "legend", "markers", "tooltip", 4, "ngIf", "ngIfElse"], ["aria-label", "Selected chart summary", 1, "crm-analysis-side"], [1, "crm-filter-bar", "crm-analysis-filter-bar", "crm-chart-selector-row"], [1, "crm-chart-selector"], ["labelKey", "label", "valueKey", "value", "label", "Chart", "placeholder", "Select chart", 3, "valueChange", "items", "disabled", "value"], [1, "crm-inline-metrics"], [1, "crm-metric-dot", "crm-metric-primary"], [1, "crm-metric-dot", "crm-metric-cyan"], [1, "crm-metric-dot", "crm-metric-green"], ["class", "data-availability", 3, "data-warning", 4, "ngIf"], ["class", "configuration-warning", 4, "ngIf"], ["class", "analysis-kpi-grid", 4, "ngIf"], ["aria-label", "Utility analysis charts", 1, "crm-secondary-grid", "deep-crm-secondary-grid"], [1, "crm-card", "crm-consumption-card"], [1, "crm-card-icon", "crm-card-icon-cyan"], [1, "ri-bar-chart-grouped-line"], ["type", "button", "aria-label", "Download utility trend CSV", 1, "crm-icon-button", 3, "click"], [1, "crm-chart-shell", "crm-bar-chart-shell"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "legend", "colors", "grid", "fill", "tooltip", 4, "ngIf", "ngIfElse"], [1, "crm-card", "crm-mix-card"], [1, "crm-card-icon", "crm-card-icon-green"], [1, "ri-donut-chart-line"], ["type", "button", "aria-label", "Download utility mix CSV", 1, "crm-icon-button", 3, "click"], [1, "crm-mix-content"], [1, "monthly-device-report-chart"], [3, "series", "chart", "colors", "labels", "legend", "stroke", "tooltip", "plotOptions", "dataLabels", 4, "ngIf", "ngIfElse"], [1, "crm-mix-details"], [1, "crm-mix-total"], ["class", "crm-mix-list", 4, "ngIf"], [1, "analysis-grid", "crm-analysis-graph-grid"], [1, "panel", "analysis-wide", "crm-analysis-graph-card"], [1, "panel-head", "analysis-panel-head"], [1, "panel-head-actions"], ["type", "button", "aria-label", "Download period comparison CSV", 1, "crm-icon-button", 3, "click"], ["aria-label", "Trend metric", 1, "analysis-segmented"], ["type", "button", 3, "click", "disabled"], [1, "chart-context-line"], ["class", "chart-wrap", 4, "ngIf", "ngIfElse"], ["class", "panel crm-analysis-graph-card", 4, "ngIf", "ngIfElse"], ["class", "analysis-breakdown-grid", 4, "ngIf"], [1, "analysis-grid", "data-grid", "analysis-actions-grid"], ["class", "panel", 4, "ngIf"], [1, "panel", "analysis-suggestions-panel"], [1, "panel-head"], ["class", "suggestion-list", 4, "ngIf", "ngIfElse"], [1, "analysis-summary", "analysis-heading"], [1, "analysis-status-stack"], [1, "analysis-readiness"], [1, "data-availability", "analysis-reading-warning"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "dataLabels", "colors", "grid", "legend", "markers", "tooltip"], [1, "data-availability"], [1, "configuration-warning"], [1, "configuration-warning__heading"], [1, "ri-settings-3-line"], [1, "configuration-warning__items"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [1, "analysis-kpi-grid"], [3, "class", 4, "ngIf", "ngIfElse"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "legend", "colors", "grid", "fill", "tooltip"], [3, "series", "chart", "colors", "labels", "legend", "stroke", "tooltip", "plotOptions", "dataLabels"], [1, "crm-mix-list"], [1, "crm-mix-marker"], [1, "chart-wrap"], [3, "series", "chart", "xaxis", "stroke", "dataLabels", "tooltip", "fill", "colors"], [4, "ngTemplateOutlet"], [1, "metric-unavailable"], ["routerLink", "/settings/energy"], [1, "panel", "crm-analysis-graph-card"], [1, "demand-summary-row", "demand-summary-extended"], ["class", "panel-config-link", "routerLink", "/settings/energy", 4, "ngIf"], ["routerLink", "/settings/energy", 1, "panel-config-link"], [1, "panel", "unavailable-panel"], [1, "donut-wrap"], [3, "series", "chart", "labels", "dataLabels", "colors"], [1, "peak-split-values"], [1, "ri-time-line"], [1, "analysis-breakdown-grid"], [1, "panel", "hierarchy-breakdown-panel", "crm-analysis-graph-card"], ["aria-label", "Hierarchy breakdown view", 1, "analysis-segmented"], ["class", "share-breakdown", 4, "ngIf"], ["class", "ranking-scroll", 4, "ngIf"], ["class", "breakdown-trend", 4, "ngIf"], [1, "panel", "hierarchy-analysis-table"], ["type", "button", "aria-label", "Download hierarchy analysis CSV", 1, "crm-icon-button", 3, "click"], [1, "table-wrap"], [1, "deep-comparison-table"], [3, "click", 4, "ngFor", "ngForOf"], [1, "share-breakdown"], [3, "series", "chart", "labels", "dataLabels", "colors", "legend", "plotOptions", "tooltip"], [1, "share-summary-list"], ["type", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "ranking-scroll"], [3, "series", "chart", "plotOptions", "colors", "dataLabels", "xaxis", "tooltip"], [1, "breakdown-trend"], [3, "click"], ["data-label", "Energy"], ["data-label", "Share"], ["data-label", "Estimated cost"], ["data-label", "Change"], ["data-label", "Peak demand"], ["data-label", "Online"], ["data-label", "Issues"], [1, "issue-count"], ["data-label", "Status"], [1, "panel"], ["class", "issue-list", 4, "ngIf", "ngIfElse"], [1, "issue-list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "ri-alarm-warning-line"], [1, "empty-state"], [1, "ri-checkbox-circle-line"], [1, "suggestion-list"], [1, "suggestion-priority"], [1, "empty-state", "config-empty"], ["routerLink", "/core/sensor-management", 4, "ngIf"], ["routerLink", "/core/sensor-management"], [1, "sensor-detail-heading"], [1, "analysis-grid", "crm-analysis-graph-grid", "sensor-analysis-graph-grid"], [1, "panel", "donut-analysis", "crm-analysis-graph-card"], ["class", "donut-wrap", 4, "ngIf", "ngIfElse"], [1, "analysis-grid", "data-grid"], ["class", "alert-list", 4, "ngIf", "ngIfElse"], ["class", "empty-state", 4, "ngIf"], [1, "alert-list"], [1, "deep-live-readings"], [1, "live-tab-heading"], [1, "live-scope-pill"], [3, "embedded", "scopeType", "scopeId"]], template: function EnergyDeepDiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "main", 13)(1, "header", 14)(2, "div", 15)(3, "div")(4, "h1");
        \u0275\u0275text(5, "Energy Explorer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " Analyze energy from Business to Facility, Building, Floor, Section, Office, Device and Sensor without losing hierarchy context. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 16)(9, "a", 17);
        \u0275\u0275element(10, "i", 18);
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Historical CSV");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 19)(14, "yx-select", 20);
        \u0275\u0275listener("valueChange", function EnergyDeepDiveComponent_Template_yx_select_valueChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeRange($event));
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "section", 21)(16, "div");
        \u0275\u0275element(17, "i");
        \u0275\u0275elementStart(18, "span")(19, "strong");
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "small");
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 22)(24, "select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function EnergyDeepDiveComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.reportingTimeZone, $event) || (ctx.reportingTimeZone = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(25, EnergyDeepDiveComponent_option_25_Template, 2, 2, "option", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 25);
        \u0275\u0275listener("click", function EnergyDeepDiveComponent_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmReportingTimezone());
        });
        \u0275\u0275text(27, "Confirm");
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, EnergyDeepDiveComponent_button_28_Template, 2, 0, "button", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, EnergyDeepDiveComponent_nav_29_Template, 7, 1, "nav", 27);
        \u0275\u0275elementStart(30, "div", 28)(31, "nav", 29)(32, "button", 25);
        \u0275\u0275listener("click", function EnergyDeepDiveComponent_Template_button_click_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openHierarchyView());
        });
        \u0275\u0275element(33, "i", 30);
        \u0275\u0275text(34, "Hierarchy ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 25);
        \u0275\u0275listener("click", function EnergyDeepDiveComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setView("analysis"));
        });
        \u0275\u0275element(36, "i", 31);
        \u0275\u0275text(37, "Analysis ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, EnergyDeepDiveComponent_button_38_Template, 3, 2, "button", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, EnergyDeepDiveComponent_section_39_Template, 8, 1, "section", 33)(40, EnergyDeepDiveComponent_section_40_Template, 12, 3, "section", 34)(41, EnergyDeepDiveComponent_ng_container_41_Template, 4, 3, "ng-container", 35)(42, EnergyDeepDiveComponent_ng_container_42_Template, 3, 2, "ng-container", 35)(43, EnergyDeepDiveComponent_section_43_Template, 12, 7, "section", 36)(44, EnergyDeepDiveComponent_ng_template_44_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction3(23, _c0, ctx.level, ctx.currentId, ctx.getPageTitle()));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.rangeOptions)("value", ctx.range);
        \u0275\u0275advance();
        \u0275\u0275classProp("is-confirmed", ctx.timezoneConfirmed);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.timezoneConfirmed ? "ri-time-line" : "ri-error-warning-line");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.timezoneConfirmed ? "Reporting timezone" : "Confirm reporting timezone");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.timezoneConfirmed ? ctx.reportingTimeZone : "UTC is used until you confirm a timezone. Detected: " + ctx.detectedTimeZone);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.reportingTimeZone);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.reportingTimeZones);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.timezoneConfirmed || ctx.reportingTimeZone !== ctx.detectedTimeZone);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.breadcrumbs.length);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.selectedView === "hierarchy");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.selectedView === "analysis");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.canShowLiveTab);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading || ctx.selectedView === "analysis" && ctx.isAnalysisLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedView === "hierarchy" && ctx.data);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedView === "analysis");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedView === "live" && ctx.canShowLiveTab);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, DecimalPipe, TitleCasePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, NgApexchartsModule, ChartComponent, YxSelectComponent, LiveConsumptionComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 1rem;\n}\n.crm-primary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.7fr) minmax(18rem, 0.7fr);\n}\n.crm-secondary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.45fr) minmax(18rem, 0.75fr);\n  align-items: stretch;\n}\n.crm-primary-grid.deep-crm-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.crm-primary-grid.deep-crm-grid[_ngcontent-%COMP%]    > .crm-peak-card[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  width: 100%;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.crm-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.95rem;\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n  animation: _ngcontent-%COMP%_explorer-rise 0.38s ease-out both;\n}\n.crm-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 4.75rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid var(--explorer-border);\n  background: var(--explorer-card);\n}\n.crm-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.crm-card-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.crm-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--explorer-text);\n  font-size: 0.83rem;\n  font-weight: 750;\n  line-height: 1.3;\n  text-overflow: ellipsis;\n}\n.crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--explorer-muted);\n  font-size: 0.6rem;\n  line-height: 1.45;\n}\n.crm-card-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.35rem;\n  min-width: 2.35rem;\n  height: 2.35rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.68rem;\n  font-size: 1rem;\n}\n.crm-card-icon-primary[_ngcontent-%COMP%] {\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.crm-card-icon-cyan[_ngcontent-%COMP%] {\n  background: var(--explorer-blue-soft);\n  color: var(--explorer-blue);\n}\n.crm-card-icon-green[_ngcontent-%COMP%] {\n  background: var(--explorer-green-soft);\n  color: var(--explorer-green);\n}\n.crm-card-icon-amber[_ngcontent-%COMP%] {\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n}\n.crm-icon-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.15rem;\n  min-width: 2.15rem;\n  height: 2.15rem;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.58rem;\n  background: var(--explorer-surface);\n  color: var(--explorer-muted);\n  font-size: 0.9rem;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    color 150ms ease,\n    transform 150ms ease;\n}\n.crm-icon-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(118, 81, 220, 0.32);\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  transform: translateY(-1px);\n}\n.crm-icon-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.crm-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 0.7rem;\n  padding: 0.8rem 1rem;\n  border-bottom: 1px solid var(--explorer-border);\n  background: var(--explorer-surface);\n}\n.crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 9.5rem;\n  gap: 0.28rem;\n}\n.crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.54rem;\n  font-weight: 760;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.crm-select[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.25rem;\n  padding: 0 0.7rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.55rem;\n  outline: 0;\n  background: var(--explorer-card);\n  color: var(--explorer-text);\n  font: inherit;\n  font-size: 0.64rem;\n  font-weight: 650;\n}\n.crm-select[_ngcontent-%COMP%]:focus, .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(118, 81, 220, 0.48);\n  box-shadow: 0 0 0 0.18rem rgba(118, 81, 220, 0.09);\n}\n.crm-inline-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.65rem;\n  padding: 0.85rem 1rem 0;\n}\n.crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n  padding: 0.65rem 0.7rem 0.65rem 1.25rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.68rem;\n  background: var(--explorer-surface);\n}\n.crm-inline-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .crm-inline-metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--explorer-muted);\n  font-size: 0.53rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--explorer-text);\n  font-size: 0.72rem;\n  font-weight: 780;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-metric-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.42rem;\n  height: 0.42rem;\n  border-radius: 50%;\n  inset-inline-start: 0.62rem;\n  inset-block-start: 0.82rem;\n}\n.crm-metric-primary[_ngcontent-%COMP%] {\n  background: var(--explorer-primary);\n}\n.crm-metric-cyan[_ngcontent-%COMP%] {\n  background: var(--explorer-blue);\n}\n.crm-metric-green[_ngcontent-%COMP%] {\n  background: var(--explorer-green);\n}\n.crm-chart-shell[_ngcontent-%COMP%], .monthly-device-report-chart[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  background: var(--explorer-card);\n}\n.crm-chart-shell[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 22rem;\n  align-items: center;\n  padding: 0.35rem 0.55rem 0.65rem;\n}\n.crm-line-chart-shell[_ngcontent-%COMP%] {\n  min-height: 24rem;\n}\n.crm-bar-chart-shell[_ngcontent-%COMP%] {\n  min-height: 23rem;\n}\n.crm-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%], .monthly-device-report-chart[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n.monthly-device-report-chart[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 17rem;\n  place-items: center;\n  padding: 0.45rem 0.75rem 0;\n}\n.monthly-device-report-chart[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.crm-mix-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.42rem;\n  max-height: 13.5rem;\n  overflow-y: auto;\n  padding: 0.3rem 1rem 1rem;\n  scrollbar-width: thin;\n  scrollbar-color: var(--explorer-border) transparent;\n}\n.crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 0.55rem;\n  align-items: center;\n  min-width: 0;\n  padding: 0.48rem 0.55rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.6rem;\n  background: var(--explorer-surface);\n}\n.crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.crm-mix-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-mix-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-mix-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.62rem;\n  font-weight: 730;\n}\n.crm-mix-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.08rem;\n  color: var(--explorer-muted);\n  font-size: 0.52rem;\n}\n.crm-mix-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.62rem;\n  font-weight: 780;\n}\n.crm-mix-marker[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.48rem;\n  min-width: 0.48rem;\n  height: 0.48rem;\n  border-radius: 50%;\n}\n.crm-mix-marker-0[_ngcontent-%COMP%] {\n  background: var(--explorer-primary);\n}\n.crm-mix-marker-1[_ngcontent-%COMP%] {\n  background: var(--explorer-blue);\n}\n.crm-mix-marker-2[_ngcontent-%COMP%] {\n  background: var(--explorer-green);\n}\n.crm-mix-marker-3[_ngcontent-%COMP%] {\n  background: var(--explorer-amber);\n}\n.crm-mix-marker-4[_ngcontent-%COMP%] {\n  background: var(--explorer-red);\n}\n.dark[_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-text[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-legend-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-legend-text[_ngcontent-%COMP%] {\n  fill: var(--explorer-muted) !important;\n  color: var(--explorer-muted) !important;\n}\n.dark[_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-gridline[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-gridline[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-xaxis[_ngcontent-%COMP%]   line[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-xaxis[_ngcontent-%COMP%]   line[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-yaxis[_ngcontent-%COMP%]   line[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-card[_ngcontent-%COMP%]   .apexcharts-yaxis[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 1199.98px) {\n  .crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .crm-mix-card[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-card-header[_ngcontent-%COMP%] {\n    min-height: auto;\n    align-items: flex-start;\n    padding: 0.8rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    padding: 0.75rem;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .crm-select[_ngcontent-%COMP%], .aggregate-state[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 0.75rem 0.75rem 0;\n  }\n  .crm-chart-shell[_ngcontent-%COMP%] {\n    min-height: 19rem;\n    padding-inline: 0.15rem;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%], .crm-bar-chart-shell[_ngcontent-%COMP%] {\n    min-height: 19rem;\n  }\n  .monthly-device-report-chart[_ngcontent-%COMP%] {\n    min-height: 15rem;\n    padding-inline: 0.2rem;\n  }\n  .crm-mix-list[_ngcontent-%COMP%] {\n    max-height: none;\n    padding-inline: 0.75rem;\n  }\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-chart-selector-row[_ngcontent-%COMP%] {\n  padding-bottom: 0.8rem;\n  border-bottom: 1px solid var(--explorer-border);\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0;\n  margin: 1rem 1rem 0;\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.75rem;\n  background: var(--explorer-card);\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  min-height: 5rem;\n  padding: 0.8rem 0.85rem 0.8rem 1.45rem;\n  border: 0;\n  border-inline-end: 1px solid var(--explorer-border);\n  border-radius: 0;\n  background: var(--explorer-card);\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-inline-end: 0;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-line-chart-shell[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  border-top: 0;\n  background: var(--explorer-card);\n}\n.crm-mix-content[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  background: var(--explorer-card);\n}\n.crm-mix-content[_ngcontent-%COMP%]   .monthly-device-report-chart[_ngcontent-%COMP%], .crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%] {\n  background: var(--explorer-card);\n}\n.crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%] {\n  padding: 0 1rem 1rem;\n}\n.crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 1px solid var(--explorer-border);\n  border-radius: 0;\n  background: transparent;\n}\n.crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n@media (max-width: 767.98px) {\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    margin: 0.75rem 0.75rem 0;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    border-inline-end: 0;\n    border-bottom: 1px solid var(--explorer-border);\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n}\n@media (max-width: 479.98px) {\n  .crm-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.76rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.56rem;\n  }\n  .crm-card-icon[_ngcontent-%COMP%] {\n    width: 2.05rem;\n    min-width: 2.05rem;\n    height: 2.05rem;\n  }\n}\n.explorer-page[_ngcontent-%COMP%] {\n  --explorer-card: #fff;\n  --explorer-surface: #f7f8fc;\n  --explorer-surface-strong: #eef1f7;\n  --explorer-border: rgba(100, 116, 139, 0.16);\n  --explorer-text: #172033;\n  --explorer-muted: #778196;\n  --explorer-primary: #7651dc;\n  --explorer-primary-soft: #eee9fc;\n  --explorer-blue: #23b7e5;\n  --explorer-blue-soft: #e7f8fd;\n  --explorer-green: #26bf94;\n  --explorer-green-soft: #e5f8f1;\n  --explorer-amber: #e0a12d;\n  --explorer-amber-soft: #fff4dd;\n  --explorer-red: #e6533c;\n  --explorer-red-soft: #fceae7;\n  --explorer-shadow: 0 0.75rem 2rem rgba(22, 32, 51, 0.055);\n  width: 100%;\n  min-width: 0;\n  margin-top: -0.5rem;\n  padding: 0;\n  color: var(--explorer-text);\n}\n.dark[_nghost-%COMP%]   .explorer-page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .explorer-page[_ngcontent-%COMP%] {\n  --explorer-card: #151b29;\n  --explorer-surface: #1a2131;\n  --explorer-surface-strong: #222b3d;\n  --explorer-border: rgba(255, 255, 255, 0.09);\n  --explorer-text: rgba(255, 255, 255, 0.9);\n  --explorer-muted: rgba(255, 255, 255, 0.5);\n  --explorer-primary-soft: rgba(118, 81, 220, 0.16);\n  --explorer-blue-soft: rgba(35, 183, 229, 0.14);\n  --explorer-green-soft: rgba(38, 191, 148, 0.14);\n  --explorer-amber-soft: rgba(224, 161, 45, 0.14);\n  --explorer-red-soft: rgba(230, 83, 60, 0.14);\n  --explorer-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.16);\n}\nbutton[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n}\n.explorer-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  background: rgb(var(--primary));\n}\n.explorer-page-header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 1.75rem 1.5rem 1rem;\n}\n.explorer-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n}\n.explorer-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 44rem;\n  margin: 0.125rem 0 0;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.875rem;\n}\n.explorer-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: none;\n  align-items: center;\n}\n.view-switch[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.22rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.68rem;\n  background: var(--explorer-surface);\n}\n.view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.15rem;\n  padding: 0 0.75rem;\n  border: 0;\n  border-radius: 0.52rem;\n  background: transparent;\n  color: var(--explorer-muted);\n  font-size: 0.63rem;\n  font-weight: 750;\n  transition:\n    color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.view-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--explorer-card);\n  box-shadow: 0 0.22rem 0.65rem rgba(22, 32, 51, 0.08);\n  color: var(--explorer-primary);\n}\n.range-select[_ngcontent-%COMP%] {\n  width: 12rem;\n}\n.section-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--explorer-primary);\n  font-size: 0.59rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.explorer-content[_ngcontent-%COMP%] {\n  width: min(100%, 100rem);\n  margin: 0 auto;\n  padding: 0 1.25rem 1.5rem;\n}\n.view-switch[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  max-width: 100%;\n  margin: 0 auto 1.25rem;\n  padding: 0.28rem;\n  border-radius: 0.8rem;\n  box-shadow: 0 0.35rem 1rem rgba(22, 32, 51, 0.045);\n}\n.view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 8rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.38rem;\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem 1.5rem;\n  border-bottom: 1px solid rgb(var(--gray-200));\n  background: rgb(var(--light));\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0;\n  padding: 0;\n  overflow-x: auto;\n  list-style: none;\n  scrollbar-width: none;\n}\n.breadcrumb-back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  min-height: 2rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.38rem;\n  padding: 0 0.7rem;\n  border: 1px solid rgb(var(--gray-200));\n  border-radius: 0.45rem;\n  background: rgb(var(--light));\n  color: rgb(var(--gray-600));\n  font-size: 0.66rem;\n  font-weight: 700;\n  transition:\n    border-color 150ms ease,\n    color 150ms ease,\n    background 150ms ease;\n}\n.breadcrumb-back-button[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--primary));\n  background: rgb(var(--primary-100));\n  color: rgb(var(--primary));\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: none;\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.2rem 0;\n  border: 0;\n  background: transparent;\n  color: var(--explorer-muted);\n  text-align: start;\n  transition: color 150ms ease;\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .current-breadcrumb[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .current-breadcrumb[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.hierarchy-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--explorer-primary);\n}\n.current-breadcrumb[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--explorer-primary);\n}\n.breadcrumb-divider[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.72rem;\n  opacity: 0.55;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.85rem;\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n}\n.error-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--explorer-text);\n  font-size: 0.75rem;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: var(--explorer-muted);\n  font-size: 0.62rem;\n}\n.error-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2rem;\n  min-width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.55rem;\n  background: var(--explorer-red-soft);\n  color: var(--explorer-red);\n}\n.explorer-loader[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.explorer-loader-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.8rem;\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n}\n.loader-energy-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.35rem;\n  min-width: 2.35rem;\n  height: 2.35rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.65rem;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  font-size: 1rem;\n  animation: _ngcontent-%COMP%_explorer-loader-pulse 1.5s ease-in-out infinite;\n}\n.explorer-loader-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.explorer-loader-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--explorer-text);\n  font-size: 0.72rem;\n}\n.explorer-loader-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: var(--explorer-muted);\n  font-size: 0.6rem;\n}\n.loader-spinner[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  min-width: 1.5rem;\n  height: 1.5rem;\n  border: 0.15rem solid var(--explorer-primary-soft);\n  border-top-color: var(--explorer-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_explorer-spin 0.8s linear infinite;\n}\n.loader-card-grid[_ngcontent-%COMP%], .loader-overview-cards[_ngcontent-%COMP%], .loader-chart-grid[_ngcontent-%COMP%], .loader-analysis-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.loader-card-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.loader-hierarchy-card[_ngcontent-%COMP%], .loader-overview-hero[_ngcontent-%COMP%], .loader-overview-cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .loader-chart[_ngcontent-%COMP%] {\n  border: 1px solid var(--explorer-border);\n  border-radius: 1rem;\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n}\n.loader-hierarchy-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 18.5rem;\n  gap: 0.65rem;\n  padding: 1rem;\n  overflow: hidden;\n}\n.loader-square[_ngcontent-%COMP%], .loader-pill[_ngcontent-%COMP%], .loader-line[_ngcontent-%COMP%], .loader-reading[_ngcontent-%COMP%], .loader-mini-card[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  border-radius: 0.45rem;\n  background: var(--explorer-surface-strong);\n}\n.loader-square[_ngcontent-%COMP%]::after, .loader-pill[_ngcontent-%COMP%]::after, .loader-line[_ngcontent-%COMP%]::after, .loader-reading[_ngcontent-%COMP%]::after, .loader-mini-card[_ngcontent-%COMP%]::after, .loader-overview-cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::after, .loader-chart[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 45%;\n  height: 100%;\n  content: "";\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.72),\n      transparent);\n  animation: _ngcontent-%COMP%_explorer-shimmer 1.3s ease-in-out infinite;\n}\n.dark[_nghost-%COMP%]   .loader-square[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .loader-square[_ngcontent-%COMP%]::after, .dark[_nghost-%COMP%]   .loader-pill[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .loader-pill[_ngcontent-%COMP%]::after, .dark[_nghost-%COMP%]   .loader-line[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .loader-line[_ngcontent-%COMP%]::after, .dark[_nghost-%COMP%]   .loader-reading[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .loader-reading[_ngcontent-%COMP%]::after, .dark[_nghost-%COMP%]   .loader-mini-card[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .loader-mini-card[_ngcontent-%COMP%]::after, .dark[_nghost-%COMP%]   .loader-overview-cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .loader-overview-cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::after, .dark[_nghost-%COMP%]   .loader-chart[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .loader-chart[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.12),\n      transparent);\n}\n.loader-square[_ngcontent-%COMP%] {\n  width: 2.45rem;\n  height: 2.45rem;\n}\n.loader-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 4.5rem;\n  height: 1.35rem;\n  inset-inline-end: 1rem;\n  inset-block-start: 1rem;\n  border-radius: 999px;\n}\n.loader-line[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 0.55rem;\n}\n.loader-line-short[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.loader-line-title[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 0.85rem;\n}\n.loader-line-value[_ngcontent-%COMP%] {\n  width: 42%;\n  height: 2rem;\n}\n.loader-reading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4.25rem;\n  margin-top: 0.2rem;\n}\n.loader-hierarchy-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.55rem;\n}\n.loader-mini-card[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n.loader-overview[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.loader-overview-hero[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 9rem;\n  align-content: center;\n  gap: 0.75rem;\n  padding: 1.2rem;\n}\n.loader-overview-cards[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.loader-overview-cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 9rem;\n  overflow: hidden;\n}\n.loader-chart-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.75fr) minmax(17rem, 0.75fr);\n}\n.loader-chart[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 19rem;\n  overflow: hidden;\n  background: var(--explorer-surface);\n}\n.loader-chart-small[_ngcontent-%COMP%] {\n  min-height: 19rem;\n}\n.loader-analysis-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.overview-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.35fr) minmax(11rem, 0.52fr) minmax(14rem, 0.72fr);\n  gap: 1rem;\n  align-items: stretch;\n  margin-bottom: 1rem;\n  animation: _ngcontent-%COMP%_explorer-rise 0.38s ease-out both;\n}\n.overview-usage-card[_ngcontent-%COMP%], .target-chart[_ngcontent-%COMP%], .overview-alerts[_ngcontent-%COMP%] {\n  border: 1px solid var(--explorer-border);\n  border-radius: 1rem;\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n}\n.overview-usage-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 11rem;\n  align-content: center;\n  gap: 0.7rem;\n  overflow: hidden;\n  padding: 1.15rem;\n}\n.overview-usage-card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 0.3rem;\n  border-radius: 999px;\n  background: var(--explorer-primary);\n  content: "";\n  inset-block: 1rem;\n  inset-inline-start: -0.08rem;\n}\n.overview-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: max-content;\n  max-width: 100%;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--explorer-primary);\n  font-size: 0.62rem;\n  font-weight: 780;\n}\n.overview-kicker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.overview-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--explorer-text);\n  font-size: clamp(1.45rem, 3vw, 2.15rem);\n  font-weight: 780;\n  letter-spacing: 0;\n}\n.overview-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n}\n.overview-usage-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--explorer-muted);\n  font-size: 0.62rem;\n}\n.overview-progress[_ngcontent-%COMP%] {\n  height: 0.42rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--explorer-surface-strong);\n}\n.overview-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--explorer-primary),\n      var(--explorer-blue));\n}\n.overview-usage-card[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .analysis-summary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.25rem;\n  width: max-content;\n  max-width: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-top: 0.1rem;\n  padding: 0 0.8rem;\n  border: 1px solid var(--explorer-primary);\n  border-radius: 0.55rem;\n  background: var(--explorer-primary);\n  color: #fff;\n  font-size: 0.64rem;\n  font-weight: 750;\n}\n.target-chart[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  align-content: center;\n  justify-items: center;\n  padding: 0.95rem;\n}\n.target-chart[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: min(9.5rem, 100%);\n}\n.target-chart-caption[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  margin-top: -0.35rem;\n  text-align: center;\n}\n.target-chart-caption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-primary);\n  font-size: 0.88rem;\n  line-height: 1;\n}\n.target-chart-caption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.58rem;\n}\n.overview-alerts[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: var(--explorer-red-soft);\n}\n.overview-alert-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.6rem;\n  min-width: 2.6rem;\n  height: 2.6rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.7rem;\n  background: var(--explorer-card);\n  color: var(--explorer-red);\n  font-size: 1.1rem;\n}\n.overview-alerts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.overview-alerts[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .overview-alerts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.58rem;\n}\n.overview-alerts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-red);\n  font-size: 1.25rem;\n}\n.overview-alerts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.34rem;\n  margin: 0.08rem 0 0;\n}\n.alert-separator[_ngcontent-%COMP%] {\n  width: 0.24rem;\n  height: 0.24rem;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.5;\n}\n.device-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.device-summary-card[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%], .child-card[_ngcontent-%COMP%], .sensor-card[_ngcontent-%COMP%], .kpi-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%], .analysis-summary[_ngcontent-%COMP%] {\n  border: 1px solid var(--explorer-border);\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n}\n.device-summary-card[_ngcontent-%COMP%] {\n  --summary-accent: var(--explorer-primary);\n  position: relative;\n  display: grid;\n  grid-template-rows: auto auto auto minmax(3.25rem, auto) auto;\n  gap: 0.5rem;\n  min-width: 0;\n  overflow: hidden;\n  padding: 0.9rem;\n  border-radius: 0.85rem;\n  animation: _ngcontent-%COMP%_explorer-rise 0.4s ease-out both;\n  box-shadow: -0.25rem 0 0 -0.03rem var(--summary-accent), var(--explorer-shadow);\n}\n.device-summary-card[_ngcontent-%COMP%]:nth-child(2) {\n  --summary-accent: var(--explorer-blue);\n}\n.device-summary-card[_ngcontent-%COMP%]:nth-child(3) {\n  --summary-accent: var(--explorer-green);\n}\n.device-summary-card[_ngcontent-%COMP%]:nth-child(4) {\n  --summary-accent: var(--explorer-amber);\n}\n.device-summary-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.device-type-icon[_ngcontent-%COMP%], .kpi-icon[_ngcontent-%COMP%], .location-icon[_ngcontent-%COMP%], .sensor-icon[_ngcontent-%COMP%], .meter-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.device-type-icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.55rem;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.device-summary-card[_ngcontent-%COMP%]:nth-child(2)   .device-type-icon[_ngcontent-%COMP%] {\n  background: var(--explorer-blue-soft);\n  color: var(--explorer-blue);\n}\n.device-summary-card[_ngcontent-%COMP%]:nth-child(3)   .device-type-icon[_ngcontent-%COMP%] {\n  background: var(--explorer-green-soft);\n  color: var(--explorer-green);\n}\n.device-summary-card[_ngcontent-%COMP%]:nth-child(4)   .device-type-icon[_ngcontent-%COMP%] {\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n}\n.change-pill[_ngcontent-%COMP%], .alert-pill[_ngcontent-%COMP%], .sensor-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.18rem;\n  padding: 0.25rem 0.42rem;\n  border-radius: 999px;\n  background: var(--explorer-red-soft);\n  color: var(--explorer-red);\n  font-size: 0.55rem;\n  font-weight: 750;\n}\n.change-pill.negative[_ngcontent-%COMP%], .alert-pill[_ngcontent-%COMP%]:not(.has-alert), .sensor-status[_ngcontent-%COMP%]:not(.has-alert) {\n  background: var(--explorer-green-soft);\n  color: var(--explorer-green);\n}\n.device-summary-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.1rem 0 0;\n  color: var(--explorer-muted);\n  font-size: 0.64rem;\n  font-weight: 650;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.device-summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--explorer-text);\n  font-size: 1.05rem;\n  font-weight: 750;\n}\n.device-summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.55em;\n}\n.sparkline[_ngcontent-%COMP%] {\n  min-width: 0;\n  height: 3.25rem;\n  margin: 0 -0.2rem;\n  overflow: hidden;\n}\n.sparkline[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.device-summary-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.45rem;\n}\n.device-summary-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.1rem;\n  padding: 0.45rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.58rem;\n  background: var(--explorer-surface);\n}\n.device-summary-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .device-summary-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.device-summary-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.5rem;\n  font-weight: 650;\n}\n.device-summary-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.58rem;\n  font-weight: 760;\n}\n.overview-chart-grid[_ngcontent-%COMP%], .analysis-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.75fr) minmax(17rem, 0.75fr);\n  align-items: stretch;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.main-overview-chart[_ngcontent-%COMP%], .distribution-panel[_ngcontent-%COMP%] {\n  min-height: 25rem;\n}\n.panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 0.95rem;\n  animation: _ngcontent-%COMP%_explorer-rise 0.42s ease-out both;\n}\n.panel-head[_ngcontent-%COMP%], .section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.panel-head[_ngcontent-%COMP%] {\n  min-height: 4.3rem;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid var(--explorer-border);\n}\n.panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .analysis-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.12rem 0 0;\n  color: var(--explorer-text);\n  font-size: 0.82rem;\n  font-weight: 720;\n}\n.panel-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .section-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 0.28rem 0.48rem;\n  border-radius: 999px;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  font-size: 0.55rem;\n  font-weight: 750;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  padding: 0.2rem 0.55rem 0.4rem;\n}\n.main-overview-chart[_ngcontent-%COMP%]   .chart-wrap[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n.chart-wrap[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%], .donut-wrap[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.donut-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 14rem;\n  place-items: center;\n}\n.distribution-panel[_ngcontent-%COMP%]   .donut-wrap[_ngcontent-%COMP%] {\n  min-height: 15rem;\n}\n.distribution-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  padding: 0 1rem 1rem;\n}\n.distribution-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 0.45rem;\n  align-items: center;\n  color: var(--explorer-muted);\n  font-size: 0.6rem;\n}\n.distribution-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n}\n.marker[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.42rem;\n  height: 0.42rem;\n  border-radius: 50%;\n}\n.marker-0[_ngcontent-%COMP%] {\n  background: var(--explorer-primary);\n}\n.marker-1[_ngcontent-%COMP%] {\n  background: var(--explorer-blue);\n}\n.marker-2[_ngcontent-%COMP%] {\n  background: var(--explorer-amber);\n}\n.marker-3[_ngcontent-%COMP%] {\n  background: var(--explorer-green);\n}\n.meter-panel[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.meter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.65rem;\n  padding: 0.9rem;\n}\n.meter-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  min-width: 0;\n  gap: 0.55rem;\n  align-items: center;\n  padding: 0.7rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.68rem;\n  background: var(--explorer-surface);\n}\n.meter-icon[_ngcontent-%COMP%] {\n  width: 1.9rem;\n  height: 1.9rem;\n  border-radius: 0.52rem;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.meter-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.meter-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .meter-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.meter-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.62rem;\n}\n.meter-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.53rem;\n}\n.meter-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  min-width: max-content;\n  color: var(--explorer-text);\n  font-size: 0.62rem;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.8rem;\n  margin-bottom: 1rem;\n}\n.kpi-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.8rem;\n  border-radius: 0.78rem;\n  animation: _ngcontent-%COMP%_explorer-rise 0.38s ease-out both;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 2.2rem;\n  min-width: 2.2rem;\n  height: 2.2rem;\n  border-radius: 0.62rem;\n}\n.kpi-purple[_ngcontent-%COMP%] {\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.kpi-blue[_ngcontent-%COMP%] {\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.kpi-green[_ngcontent-%COMP%] {\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.kpi-amber[_ngcontent-%COMP%] {\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.kpi-red[_ngcontent-%COMP%] {\n  background: var(--explorer-red-soft);\n  color: var(--explorer-red);\n}\n.kpi-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.kpi-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--explorer-muted);\n  font-size: 0.55rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.kpi-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-top: 0.08rem;\n  color: var(--explorer-text);\n  font-size: 0.72rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.alert-kpi[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-red);\n}\n.hierarchy-section[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1.25rem;\n}\n.section-head[_ngcontent-%COMP%] {\n  margin-bottom: 0.85rem;\n  padding: 0 0.15rem;\n}\n.child-grid[_ngcontent-%COMP%], .sensor-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.child-card[_ngcontent-%COMP%], .sensor-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 18.5rem;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 1rem;\n  border-radius: 1rem;\n  color: inherit;\n  text-align: start;\n  transition:\n    transform 170ms ease,\n    border-color 170ms ease,\n    box-shadow 170ms ease;\n}\n.child-card[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  filter: saturate(0.35);\n  opacity: 0.62;\n}\n.child-card[_ngcontent-%COMP%]:disabled   .open-card[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n}\n.child-card[_ngcontent-%COMP%]::before, .sensor-card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  background: var(--explorer-primary-soft);\n  content: "";\n  inset-inline-end: -4.5rem;\n  inset-block-start: -4.75rem;\n  opacity: 0.75;\n  pointer-events: none;\n}\n.sensor-card[_ngcontent-%COMP%]::before {\n  background: var(--explorer-primary-soft);\n}\n.child-card-head[_ngcontent-%COMP%], .sensor-card-head[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.location-icon[_ngcontent-%COMP%], .sensor-icon[_ngcontent-%COMP%] {\n  width: 2.45rem;\n  height: 2.45rem;\n  border-radius: 0.7rem;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  font-size: 1.05rem;\n}\n.sensor-icon[_ngcontent-%COMP%] {\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n}\n.child-card-title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: 1rem;\n}\n.child-card-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.18rem;\n  color: var(--explorer-primary);\n  font-size: 0.53rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.sensor-card[_ngcontent-%COMP%]   .child-card-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--explorer-primary);\n}\n.child-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .sensor-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--explorer-text);\n  font-size: 0.88rem;\n  font-weight: 750;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-energy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  margin: 1rem 0 0.8rem;\n  padding: 0.8rem;\n  border: 1px solid rgba(118, 81, 220, 0.16);\n  border-radius: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--explorer-primary-soft),\n      transparent);\n}\n.card-energy.sensor-energy[_ngcontent-%COMP%] {\n  border-color: rgba(118, 81, 220, 0.16);\n  background:\n    linear-gradient(\n      135deg,\n      var(--explorer-primary-soft),\n      transparent);\n}\n.card-energy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.54rem;\n  font-weight: 650;\n}\n.card-energy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.12rem;\n  color: var(--explorer-primary);\n  font-size: 1.15rem;\n  font-weight: 780;\n}\n.sensor-energy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-primary);\n}\n.card-energy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.55em;\n  font-weight: 700;\n}\n.child-stats[_ngcontent-%COMP%], .sensor-values[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.55rem;\n  margin-bottom: 0.9rem;\n}\n.child-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .sensor-values[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  min-width: 0;\n  gap: 0 0.38rem;\n  align-items: center;\n  padding: 0.55rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.62rem;\n  background: var(--explorer-surface);\n}\n.child-stats[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sensor-values[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  color: var(--explorer-muted);\n  font-size: 0.78rem;\n}\n.child-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .sensor-values[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.5rem;\n}\n.child-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .sensor-values[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--explorer-text);\n  font-size: 0.6rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.open-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--explorer-border);\n  color: var(--explorer-primary);\n  font-size: 0.6rem;\n  font-weight: 750;\n}\n.sensor-card[_ngcontent-%COMP%]   .open-card[_ngcontent-%COMP%] {\n  color: var(--explorer-primary);\n}\n.hierarchy-empty[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 18rem;\n  place-items: center;\n  align-content: center;\n  padding: 2rem;\n  border: 1px dashed var(--explorer-border);\n  border-radius: 1rem;\n  background: var(--explorer-card);\n  color: var(--explorer-muted);\n  text-align: center;\n}\n.hierarchy-empty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 3rem;\n  height: 3rem;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.75rem;\n  border-radius: 0.8rem;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  font-size: 1.3rem;\n}\n.hierarchy-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--explorer-text);\n  font-size: 0.82rem;\n}\n.hierarchy-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.62rem;\n}\n.analysis-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-radius: 0.85rem;\n}\n.analysis-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.62rem;\n}\n.analysis-summary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 0;\n}\n.analysis-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.donut-analysis[_ngcontent-%COMP%]   .donut-wrap[_ngcontent-%COMP%] {\n  min-height: 18.5rem;\n}\n.data-grid[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.alert-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  padding: 0.8rem;\n}\n.alert-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.55rem;\n  align-items: start;\n  padding: 0.55rem;\n  border-radius: 0.58rem;\n  background: var(--explorer-surface);\n}\n.alert-dot[_ngcontent-%COMP%] {\n  width: 0.45rem;\n  height: 0.45rem;\n  margin-top: 0.25rem;\n  border-radius: 50%;\n  background: var(--explorer-blue);\n}\n.alert-dot.critical[_ngcontent-%COMP%], .alert-dot.danger[_ngcontent-%COMP%], .alert-dot.error[_ngcontent-%COMP%] {\n  background: var(--explorer-red);\n}\n.alert-dot.warning[_ngcontent-%COMP%] {\n  background: var(--explorer-amber);\n}\n.alert-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .alert-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.alert-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.62rem;\n}\n.alert-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: var(--explorer-muted);\n  font-size: 0.52rem;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.7rem;\n  border-bottom: 1px solid var(--explorer-border);\n  color: var(--explorer-muted);\n  font-size: 0.58rem;\n  text-align: start;\n}\nth[_ngcontent-%COMP%] {\n  background: var(--explorer-surface);\n  color: var(--explorer-text);\n  font-weight: 750;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 9rem;\n  place-items: center;\n  align-content: center;\n  color: var(--explorer-muted);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  font-size: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.62rem;\n}\n@media (hover: hover) {\n  .child-card[_ngcontent-%COMP%]:hover, .sensor-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n    border-color: rgba(118, 81, 220, 0.28);\n    box-shadow: 0 1.15rem 2.25rem rgba(22, 32, 51, 0.09);\n  }\n  .child-card[_ngcontent-%COMP%]:disabled:hover {\n    transform: none;\n    border-color: var(--explorer-border);\n    box-shadow: var(--explorer-shadow);\n  }\n}\n@keyframes _ngcontent-%COMP%_explorer-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_explorer-rise {\n  from {\n    transform: translateY(0.4rem);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_explorer-shimmer {\n  from {\n    transform: translateX(-125%);\n  }\n  to {\n    transform: translateX(265%);\n  }\n}\n@keyframes _ngcontent-%COMP%_explorer-loader-pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.06);\n  }\n}\n@media (max-width: 1199.98px) {\n  .device-summary-grid[_ngcontent-%COMP%], .child-grid[_ngcontent-%COMP%], .sensor-grid[_ngcontent-%COMP%], .meter-grid[_ngcontent-%COMP%], .loader-card-grid[_ngcontent-%COMP%], .loader-overview-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .overview-hero[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(14rem, 0.72fr);\n  }\n  .overview-usage-card[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .overview-alerts[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .overview-chart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .loader-chart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 991.98px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .analysis-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .loader-analysis-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 767.98px) {\n  .explorer-page[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n  .explorer-page-header-inner[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1.5rem 1.25rem 1rem;\n  }\n  .explorer-header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .range-select[_ngcontent-%COMP%], .view-switch[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .view-switch[_ngcontent-%COMP%] {\n    width: min(100%, 22rem);\n    margin-inline: auto;\n    overflow-x: auto;\n  }\n  .overview-hero[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .target-chart[_ngcontent-%COMP%] {\n    justify-self: stretch;\n  }\n  .overview-alerts[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .device-summary-grid[_ngcontent-%COMP%], .child-grid[_ngcontent-%COMP%], .sensor-grid[_ngcontent-%COMP%], .meter-grid[_ngcontent-%COMP%], .loader-card-grid[_ngcontent-%COMP%], .loader-overview-cards[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .device-summary-grid[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    overscroll-behavior-inline: contain;\n    padding-inline-start: 0.25rem;\n    padding-block-end: 0.25rem;\n    scrollbar-width: none;\n    scroll-snap-type: inline proximity;\n  }\n  .device-summary-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .device-summary-card[_ngcontent-%COMP%] {\n    min-width: min(18rem, 84vw);\n    scroll-snap-align: start;\n  }\n  .analysis-summary[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .analysis-summary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .loader-hierarchy-card[_ngcontent-%COMP%]:nth-child(n+4), .loader-overview-cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(n+4) {\n    display: none;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column-reverse;\n    padding-inline: 1.25rem;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .breadcrumb-back-button[_ngcontent-%COMP%] {\n    width: max-content;\n  }\n  .chart-wrap[_ngcontent-%COMP%] {\n    padding-inline: 0.1rem;\n  }\n}\n@media (max-width: 479.98px) {\n  .explorer-page-header-inner[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .explorer-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .explorer-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .explorer-content[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.6rem;\n  }\n  .panel-head[_ngcontent-%COMP%] {\n    min-height: 3.9rem;\n    padding: 0.75rem;\n  }\n  .panel-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .overview-hero[_ngcontent-%COMP%], .overview-usage-card[_ngcontent-%COMP%], .target-chart[_ngcontent-%COMP%], .overview-alerts[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%], .analysis-summary[_ngcontent-%COMP%] {\n    border-radius: 0.78rem;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .current-breadcrumb[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .current-breadcrumb[_ngcontent-%COMP%] {\n    display: inline-flex;\n    min-width: 1.65rem;\n    min-height: 1.65rem;\n    align-items: center;\n    justify-content: center;\n  }\n  .child-card[_ngcontent-%COMP%], .sensor-card[_ngcontent-%COMP%] {\n    min-height: 17.5rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .loading-ring[_ngcontent-%COMP%], .loader-spinner[_ngcontent-%COMP%], .loader-energy-icon[_ngcontent-%COMP%], .loader-square[_ngcontent-%COMP%]::after, .loader-pill[_ngcontent-%COMP%]::after, .loader-line[_ngcontent-%COMP%]::after, .loader-reading[_ngcontent-%COMP%]::after, .loader-mini-card[_ngcontent-%COMP%]::after, .loader-overview-cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::after, .loader-chart[_ngcontent-%COMP%]::after, .overview-hero[_ngcontent-%COMP%], .device-summary-card[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%], .kpi-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .child-card[_ngcontent-%COMP%], .sensor-card[_ngcontent-%COMP%], .breadcrumb-back-button[_ngcontent-%COMP%] {\n    transition: none !important;\n  }\n}\n.explorer-context-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.85rem;\n}\n.explorer-context-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--explorer-text);\n  font-size: 1.15rem;\n  font-weight: 700;\n}\n.context-level[_ngcontent-%COMP%], .context-range[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--explorer-muted);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.055em;\n  text-transform: uppercase;\n}\n.context-level[_ngcontent-%COMP%] {\n  color: var(--explorer-primary);\n}\n.inline-config-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  width: max-content;\n  margin-top: 0.8rem;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n.target-missing-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 13rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 0.4rem;\n  padding: 1.25rem;\n  border: 1px dashed rgba(118, 81, 220, 0.35);\n  border-radius: 1rem;\n  background: var(--explorer-card);\n  text-align: center;\n}\n.target-missing-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  font-size: 1.25rem;\n}\n.target-missing-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.target-missing-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 15rem;\n  margin: 0;\n  color: var(--explorer-muted);\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.analysis-heading[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.analysis-status-stack[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.analysis-status-stack[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n}\n.analysis-readiness[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.42rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 999px;\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n  font-size: 0.75rem;\n  font-weight: 750;\n}\n.analysis-readiness.ready[_ngcontent-%COMP%] {\n  background: var(--explorer-green-soft);\n  color: var(--explorer-green);\n}\n.data-availability[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 0.85rem 1rem;\n  border: 1px solid rgba(38, 191, 148, 0.2);\n  border-radius: 0.85rem;\n  background: var(--explorer-green-soft);\n}\n.data-availability[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--explorer-green);\n  font-size: 1.25rem;\n}\n.data-availability[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.data-availability[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .data-availability[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n.data-availability[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.data-availability[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .data-availability[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.72rem;\n}\n.data-availability.data-warning[_ngcontent-%COMP%] {\n  border-color: rgba(224, 161, 45, 0.25);\n  background: var(--explorer-amber-soft);\n}\n.data-availability.data-warning[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--explorer-amber);\n}\n.configuration-panel[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  overflow: hidden;\n  border: 1px solid rgba(224, 161, 45, 0.2);\n  border-radius: 1rem;\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n}\n.configuration-panel.configuration-ready[_ngcontent-%COMP%] {\n  border-color: rgba(38, 191, 148, 0.22);\n}\n.configuration-panel[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.25rem;\n  padding: 1rem 1.15rem;\n  border-bottom: 1px solid var(--explorer-border);\n  background:\n    linear-gradient(\n      135deg,\n      var(--explorer-amber-soft),\n      transparent);\n}\n.configuration-panel.configuration-ready[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--explorer-green-soft),\n      transparent);\n}\n.configuration-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0.15rem;\n  color: var(--explorer-text);\n  font-size: 1rem;\n}\n.configuration-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.74rem;\n}\n.coverage-ring[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 5rem;\n  min-height: 5rem;\n  place-items: center;\n  align-content: center;\n  border: 5px solid var(--explorer-primary-soft);\n  border-radius: 50%;\n  background: var(--explorer-card);\n}\n.coverage-ring[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-primary);\n  font-size: 1.05rem;\n}\n.coverage-ring[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  max-width: 3.5rem;\n  color: var(--explorer-muted);\n  font-size: 0.55rem;\n  line-height: 1.1;\n  text-align: center;\n  text-transform: uppercase;\n}\n.configuration-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 1rem;\n}\n.configuration-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: flex-start;\n  gap: 0.7rem;\n  position: relative;\n  padding: 0.85rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.8rem;\n  background: var(--explorer-surface);\n}\n.configuration-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.configuration-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .configuration-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n.configuration-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.78rem;\n}\n.configuration-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.22rem;\n  color: var(--explorer-muted);\n  font-size: 0.68rem;\n  line-height: 1.42;\n}\n.configuration-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  align-self: center;\n  color: var(--explorer-primary);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n.configuration-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 2rem;\n  height: 2rem;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 0.65rem;\n}\n.config-ready[_ngcontent-%COMP%]   .configuration-icon[_ngcontent-%COMP%] {\n  background: var(--explorer-green-soft);\n  color: var(--explorer-green);\n}\n.config-partial[_ngcontent-%COMP%]   .configuration-icon[_ngcontent-%COMP%], .config-optional[_ngcontent-%COMP%]   .configuration-icon[_ngcontent-%COMP%] {\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n}\n.config-missing[_ngcontent-%COMP%]   .configuration-icon[_ngcontent-%COMP%] {\n  background: var(--explorer-red-soft);\n  color: var(--explorer-red);\n}\n.configuration-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.9rem 1rem;\n  border: 1px solid rgba(224, 161, 45, 0.28);\n  border-radius: 0.85rem;\n  background: var(--explorer-amber-soft);\n}\n.configuration-warning__heading[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 15rem;\n  align-items: flex-start;\n  gap: 0.65rem;\n}\n.configuration-warning__heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 2rem;\n  height: 2rem;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 0.6rem;\n  background: var(--explorer-card);\n  color: var(--explorer-amber);\n}\n.configuration-warning[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .configuration-warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.configuration-warning[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.78rem;\n}\n.configuration-warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.18rem;\n  color: var(--explorer-muted);\n  font-size: 0.68rem;\n  line-height: 1.4;\n}\n.configuration-warning__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n}\n.configuration-warning__items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 15rem;\n  flex: 1 1 15rem;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.55rem 0.7rem;\n  border-radius: 0.65rem;\n  background: var(--explorer-card);\n}\n.configuration-warning__items[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.configuration-warning__items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  color: var(--explorer-primary);\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n@media (max-width: 767px) {\n  .configuration-warning[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .configuration-warning__heading[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .configuration-warning__items[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-chart-selector-row[_ngcontent-%COMP%] {\n  overflow: visible;\n  align-items: flex-end;\n  padding: 0.9rem 1rem 0.25rem;\n  border-bottom: 0;\n  background: var(--explorer-card);\n}\n.crm-chart-selector[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 8;\n  width: min(100%, 18rem);\n}\n[_nghost-%COMP%]     .crm-chart-selector .yx-label {\n  color: var(--explorer-muted);\n  font-size: 0.58rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .crm-chart-selector .yx-select-trigger {\n  min-height: 2.65rem;\n  padding: 0 0.85rem;\n  border: 1px solid rgba(132, 90, 223, 0.32);\n  border-radius: 0.7rem;\n  background: var(--explorer-card);\n  box-shadow: 0 0.18rem 0.55rem rgba(22, 32, 51, 0.06);\n  color: var(--explorer-text);\n}\n[_nghost-%COMP%]     .crm-chart-selector .yx-select-trigger:hover {\n  border-color: rgba(132, 90, 223, 0.58);\n}\n[_nghost-%COMP%]     .crm-chart-selector .yx-select-panel {\n  z-index: 30;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.7rem;\n  box-shadow: 0 0.75rem 1.75rem rgba(22, 32, 51, 0.14);\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  padding: 0.9rem 1rem;\n  background: var(--explorer-card);\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-height: 5.1rem;\n  align-content: center;\n  padding: 0.8rem 0.85rem 0.8rem 1.45rem;\n  border-color: rgba(132, 90, 223, 0.16);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(132, 90, 223, 0.07),\n      var(--explorer-card));\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border-color: rgba(35, 183, 229, 0.18);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(35, 183, 229, 0.07),\n      var(--explorer-card));\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  border-color: rgba(38, 191, 148, 0.18);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(38, 191, 148, 0.07),\n      var(--explorer-card));\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-block: 0.15rem;\n  font-size: 0.88rem;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-line-chart-shell[_ngcontent-%COMP%] {\n  overflow: visible;\n  border-top: 1px solid var(--explorer-border);\n  padding-top: 0.8rem;\n}\n[_nghost-%COMP%]     .deep-crm-grid .apexcharts-toolbar {\n  z-index: 6 !important;\n  top: 0.35rem !important;\n  right: 0.65rem !important;\n  padding: 0.25rem !important;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.55rem;\n  background: var(--explorer-card);\n  box-shadow: 0 0.25rem 0.7rem rgba(22, 32, 51, 0.08);\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.crm-mix-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 0;\n  flex: 1 1 auto;\n  flex-direction: column;\n  margin: 0.85rem;\n  overflow: hidden;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.85rem;\n  background: var(--explorer-surface);\n}\n.crm-mix-content[_ngcontent-%COMP%]   .monthly-device-report-chart[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 0;\n  background: transparent;\n}\n.crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.2rem 0.7rem 0.75rem;\n  background: transparent;\n}\n.crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-color: rgba(132, 90, 223, 0.12);\n  background: var(--explorer-card);\n}\n@media (max-width: 767.98px) {\n  .crm-chart-selector[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .crm-mix-content[_ngcontent-%COMP%] {\n    margin: 0.7rem;\n  }\n}\n.analysis-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.85rem;\n  margin-bottom: 1rem;\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.85rem;\n  background: var(--explorer-card);\n  box-shadow: var(--explorer-shadow);\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .analysis-kpi-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .analysis-kpi-grid[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.66rem;\n  text-transform: uppercase;\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.18rem;\n  color: var(--explorer-text);\n  font-size: 0.98rem;\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  color: var(--explorer-muted);\n  font-size: 0.64rem;\n  font-style: normal;\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]   em.negative[_ngcontent-%COMP%], .negative[_ngcontent-%COMP%] {\n  color: var(--explorer-red) !important;\n}\n.analysis-kpi-grid[_ngcontent-%COMP%]   em.positive[_ngcontent-%COMP%], .positive[_ngcontent-%COMP%] {\n  color: var(--explorer-green) !important;\n}\n.neutral[_ngcontent-%COMP%] {\n  color: var(--explorer-muted) !important;\n}\n.kpi-unavailable[_ngcontent-%COMP%] {\n  border-style: dashed !important;\n  opacity: 0.78;\n}\n.analysis-wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.demand-summary-row[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n  padding: 0 1rem 1rem;\n}\n.peak-split-values[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.demand-summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  border-radius: 0.7rem;\n  background: var(--explorer-surface);\n  text-align: center;\n}\n.demand-summary-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .demand-summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.demand-summary-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.62rem;\n  text-transform: uppercase;\n}\n.demand-summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-size: 0.78rem;\n}\n.unavailable-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 20rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 2rem;\n  border-style: dashed;\n  text-align: center;\n}\n.unavailable-panel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 3.25rem;\n  height: 3.25rem;\n  place-items: center;\n  border-radius: 0.9rem;\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n  font-size: 1.5rem;\n}\n.unavailable-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0.25rem;\n  font-size: 0.95rem;\n}\n.unavailable-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 22rem;\n  margin: 0;\n  color: var(--explorer-muted);\n  font-size: 0.75rem;\n}\n.unavailable-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .config-empty[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  color: var(--explorer-primary);\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n.hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--explorer-primary-soft);\n}\n.hierarchy-analysis-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   strong[_ngcontent-%COMP%], .hierarchy-analysis-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.hierarchy-analysis-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   small[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: var(--explorer-muted);\n  font-size: 0.62rem;\n}\n.issue-count[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 1.7rem;\n  min-height: 1.7rem;\n  place-items: center;\n  border-radius: 999px;\n  background: var(--explorer-green-soft);\n  color: var(--explorer-green);\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.issue-count.has-issues[_ngcontent-%COMP%] {\n  background: var(--explorer-red-soft);\n  color: var(--explorer-red);\n}\n.issue-list[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.85rem;\n}\n.issue-list[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  padding: 0.75rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.75rem;\n  background: var(--explorer-surface);\n}\n.issue-list[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 2rem;\n  height: 2rem;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 0.6rem;\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n}\n.issue-list[_ngcontent-%COMP%]   .issue-critical[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: var(--explorer-red-soft);\n  color: var(--explorer-red);\n}\n.issue-list[_ngcontent-%COMP%]   .issue-warning[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n}\n.issue-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .issue-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .issue-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n.issue-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.76rem;\n}\n.issue-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  color: var(--explorer-muted);\n  font-size: 0.69rem;\n  line-height: 1.4;\n}\n.issue-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .suggestion-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.32rem;\n  color: var(--explorer-muted);\n  font-size: 0.61rem;\n}\n.suggestion-priority[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  padding: 0.28rem 0.48rem;\n  border-radius: 999px;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  font-size: 0.58rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.sensor-detail-heading[_ngcontent-%COMP%] {\n  margin: 1.35rem 0 0.75rem;\n}\n.sensor-detail-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  font-size: 1.05rem;\n}\n@media (max-width: 1199.98px) {\n  .analysis-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 767.98px) {\n  .explorer-context-row[_ngcontent-%COMP%], .configuration-panel[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], .analysis-heading[_ngcontent-%COMP%], .data-availability[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .analysis-status-stack[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .configuration-grid[_ngcontent-%COMP%], .analysis-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .configuration-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .configuration-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 2.7rem;\n  }\n  .data-availability[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    margin-left: 2rem;\n  }\n}\n.analysis-panel-head[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.analysis-segmented[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.25rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.7rem;\n  background: var(--explorer-surface);\n}\n.analysis-segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 0.5rem;\n  padding: 0.42rem 0.68rem;\n  background: transparent;\n  color: var(--explorer-muted);\n  font-size: 0.68rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.analysis-segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled), .analysis-segmented[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--explorer-primary);\n  color: #fff;\n}\n.analysis-segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.42;\n}\n.chart-context-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.65rem 1rem 0;\n  color: var(--explorer-muted);\n  font-size: 0.68rem;\n}\n.chart-context-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n}\n.metric-unavailable[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 18rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8rem;\n  padding: 1.25rem;\n  text-align: left;\n}\n.metric-unavailable[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 2.8rem;\n  height: 2.8rem;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n  font-size: 1.25rem;\n}\n.metric-unavailable[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .metric-unavailable[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n.metric-unavailable[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: var(--explorer-muted);\n  font-size: 0.7rem;\n}\n.metric-unavailable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .panel-config-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: var(--explorer-primary);\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n.panel-config-link[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem;\n}\n.demand-summary-extended[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.peak-split-values[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.analysis-breakdown-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.35fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.hierarchy-breakdown-panel[_ngcontent-%COMP%], .hierarchy-analysis-table[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin-bottom: 0;\n}\n.share-breakdown[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(17rem, 0.9fr) minmax(12rem, 1.1fr);\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.35rem 0.8rem 0.9rem;\n}\n.share-summary-list[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 21rem;\n  gap: 0.35rem;\n  overflow-y: auto;\n  padding-right: 0.25rem;\n}\n.share-summary-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  width: 100%;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.65rem;\n  padding: 0.58rem 0.65rem;\n  background: var(--explorer-surface);\n  color: var(--explorer-text);\n  text-align: left;\n  cursor: pointer;\n}\n.share-summary-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: var(--explorer-primary);\n  background: var(--explorer-primary-soft);\n}\n.share-summary-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.45rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.share-summary-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: var(--explorer-primary);\n}\n.ranking-scroll[_ngcontent-%COMP%] {\n  max-height: 34rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0 0.75rem 0.75rem;\n}\n.breakdown-trend[_ngcontent-%COMP%] {\n  padding: 0 0.45rem 0.65rem;\n}\n.deep-comparison-table[_ngcontent-%COMP%] {\n  min-width: 1120px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 4.3rem;\n  border-radius: 999px;\n  padding: 0.28rem 0.55rem;\n  font-size: 0.62rem;\n  font-weight: 800;\n}\n.status-normal[_ngcontent-%COMP%] {\n  background: var(--explorer-green-soft);\n  color: var(--explorer-green);\n}\n.status-review[_ngcontent-%COMP%] {\n  background: var(--explorer-amber-soft);\n  color: var(--explorer-amber);\n}\n.status-high[_ngcontent-%COMP%] {\n  background: var(--explorer-red-soft);\n  color: var(--explorer-red);\n}\n@media (max-width: 1199.98px) {\n  .analysis-breakdown-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 767.98px) {\n  .analysis-panel-head[_ngcontent-%COMP%], .chart-context-line[_ngcontent-%COMP%], .metric-unavailable[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .analysis-segmented[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n  }\n  .analysis-segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1 0 auto;\n  }\n  .demand-summary-extended[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%], .share-breakdown[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .share-summary-list[_ngcontent-%COMP%] {\n    max-height: 16rem;\n  }\n}\n.crm-primary-grid.deep-crm-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.crm-primary-grid.deep-crm-grid[_ngcontent-%COMP%]    > .crm-peak-card[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  width: 100%;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.analysis-target-overview[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.aggregate-state[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-height: 36px;\n  padding: 0 0.8rem;\n  border: 1px solid rgba(132, 90, 223, 0.2);\n  border-radius: 10px;\n  color: #6b7280;\n  background: rgba(132, 90, 223, 0.05);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.aggregate-state.cached[_ngcontent-%COMP%] {\n  color: #12805c;\n  border-color: rgba(38, 191, 148, 0.25);\n  background: rgba(38, 191, 148, 0.08);\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.9rem;\n  background: var(--explorer-card);\n  box-shadow: 0 0.35rem 1.15rem rgba(22, 32, 51, 0.055);\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 4.65rem;\n  padding: 0.9rem 1rem 0.9rem 4rem;\n  border-bottom: 1px solid var(--explorer-border);\n  background: var(--explorer-card);\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%]::before {\n  position: absolute;\n  display: inline-grid;\n  width: 2.35rem;\n  height: 2.35rem;\n  place-items: center;\n  border-radius: 0.68rem;\n  background: var(--explorer-primary-soft);\n  color: var(--explorer-primary);\n  font-family: remixicon;\n  font-size: 1rem;\n  content: "\\eeab";\n  inset-inline-start: 1rem;\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 750;\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.56rem;\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]   .chart-wrap[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .donut-wrap[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .ranking-scroll[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .breakdown-trend[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  padding: 0.35rem 0.65rem 0.55rem;\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]   .chart-context-line[_ngcontent-%COMP%] {\n  margin: 0.8rem 1rem 0;\n  padding: 0.65rem 0.75rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.7rem;\n  background: var(--explorer-surface);\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]   .demand-summary-row[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .peak-split-values[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem;\n  overflow: hidden;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.75rem;\n  background: var(--explorer-card);\n}\n.crm-analysis-graph-card[_ngcontent-%COMP%]   .demand-summary-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .peak-split-values[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.8rem;\n  border-color: var(--explorer-border);\n}\n.sensor-analysis-graph-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n@media (max-width: 767.98px) {\n  .crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%] {\n    min-height: auto;\n    align-items: flex-start;\n    padding: 0.85rem 0.8rem 0.85rem 3.55rem;\n  }\n  .crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%]::before {\n    width: 2rem;\n    height: 2rem;\n    border-radius: 0.55rem;\n    inset-inline-start: 0.8rem;\n  }\n  .crm-analysis-graph-card[_ngcontent-%COMP%]   .chart-wrap[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .breakdown-trend[_ngcontent-%COMP%] {\n    min-height: 18rem;\n    padding: 0.35rem 0.25rem 0.25rem;\n  }\n  .crm-analysis-graph-card[_ngcontent-%COMP%]   .chart-context-line[_ngcontent-%COMP%] {\n    margin: 0.7rem 0.7rem 0;\n  }\n  .sensor-analysis-graph-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n.analysis-reading-warning[_ngcontent-%COMP%] {\n  margin-bottom: 0.85rem;\n  border-color: rgba(224, 161, 45, 0.32);\n  background:\n    linear-gradient(\n      90deg,\n      var(--explorer-amber-soft),\n      var(--explorer-card));\n}\n.analysis-kpi-grid--top[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.analysis-kpi-grid--top[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 6.5rem;\n  padding: 1rem;\n  border-radius: 0.9rem;\n  box-shadow: 0 0.3rem 1rem rgba(22, 32, 51, 0.045);\n}\n.analysis-kpi-grid--top[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]::after {\n  position: absolute;\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n  background: var(--explorer-primary-soft);\n  content: "";\n  opacity: 0.55;\n  inset: auto -2.4rem -2.7rem auto;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-peak-card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  box-shadow: 0 0.45rem 1.35rem rgba(22, 32, 51, 0.06);\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-filter-bar[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 0.7rem;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 13rem;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-line-chart-shell[_ngcontent-%COMP%] {\n  min-height: 21.5rem;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.25fr) minmax(21rem, 0.75fr);\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]    > .crm-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .monthly-device-report-chart[_ngcontent-%COMP%] {\n  min-height: 14rem;\n  flex: 0 0 14rem;\n  padding-top: 0.2rem;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%] {\n  max-height: 10rem;\n  flex: 1 1 auto;\n  padding-top: 0;\n}\n.analysis-actions-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n}\n.analysis-suggestions-panel[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n.analysis-suggestions-panel[_ngcontent-%COMP%]   .suggestion-list[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n@media (max-width: 1199.98px) {\n  .deep-crm-secondary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .monthly-device-report-chart[_ngcontent-%COMP%] {\n    flex-basis: 16rem;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .analysis-kpi-grid--top[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    min-height: 5.75rem;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .analysis-suggestions-panel[_ngcontent-%COMP%]   .suggestion-list[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n.panel-head-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  flex-wrap: wrap;\n}\n.deep-live-readings[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.live-tab-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.15rem;\n  border: 1px solid #e8ecf3;\n  border-radius: 14px;\n  background: #fff;\n}\n.live-tab-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0.25rem;\n  color: #1f2937;\n  font-size: 1.1rem;\n}\n.live-tab-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.live-scope-pill) {\n  color: #7b8495;\n  font-size: 0.78rem;\n}\n.live-scope-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  flex: 0 0 auto;\n  padding: 0.5rem 0.75rem;\n  border-radius: 999px;\n  background: rgba(132, 90, 223, 0.1);\n  color: rgb(132, 90, 223);\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n@media (max-width: 767px) {\n  .live-tab-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .aggregate-state[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-peak-card[_ngcontent-%COMP%] {\n  overflow: visible;\n  background: var(--explorer-card);\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-peak-card[_ngcontent-%COMP%]    > .crm-card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  background: transparent;\n}\n.crm-analysis-card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  min-width: 0;\n  width: 100%;\n  background: var(--explorer-card);\n}\n.crm-chart-main[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n  background: transparent;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-chart-main[_ngcontent-%COMP%]   .crm-line-chart-shell[_ngcontent-%COMP%] {\n  min-height: 27rem;\n  width: 100%;\n  margin: 0;\n  padding: 0.8rem 0.35rem 0.75rem 0.55rem;\n  overflow: visible;\n  border: 0;\n  background: transparent;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-chart-main[_ngcontent-%COMP%]   .crm-line-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.crm-analysis-side[_ngcontent-%COMP%] {\n  display: flex;\n  order: -1;\n  min-width: 0;\n  flex-direction: column;\n  padding: 0.9rem 1rem 0;\n  border-bottom: 1px solid var(--explorer-border);\n  background: transparent;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-chart-selector-row[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-analysis-filter-bar[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0 0 1rem;\n  overflow: visible;\n  border: 0;\n  background: transparent;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-chart-selector[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  border: 0;\n  border-top: 1px solid var(--explorer-border);\n  border-radius: 0;\n  background: transparent;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  min-height: 6rem;\n  align-content: center;\n  padding: 0.8rem 0.75rem 0.8rem 1.25rem;\n  border: 0;\n  border-inline-end: 1px solid var(--explorer-border);\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-inline-end: 0;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0.16rem 0;\n  font-size: 0.9rem;\n}\n.deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-metric-dot[_ngcontent-%COMP%] {\n  inset-inline-start: 0;\n  inset-block-start: 1.25rem;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]    > .crm-card[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-consumption-card[_ngcontent-%COMP%]   .crm-bar-chart-shell[_ngcontent-%COMP%] {\n  min-height: 0;\n  flex: 1 1 auto;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: var(--explorer-card);\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-card[_ngcontent-%COMP%]    > .crm-card-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  background: transparent;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  min-height: 22.5rem;\n  flex: 1 1 auto;\n  gap: 0;\n  align-items: start;\n  margin: 0;\n  padding: 0.45rem 1rem 1rem;\n  overflow: visible;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .monthly-device-report-chart[_ngcontent-%COMP%] {\n  min-height: 17.5rem;\n  height: auto;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n.crm-mix-details[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  width: 100%;\n  height: auto;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0.85rem 0 0;\n  border-inline-start: 0;\n  border-top: 1px solid var(--explorer-border);\n  background: transparent;\n}\n.crm-mix-total[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.12rem;\n  padding: 0 0.25rem 0.8rem;\n  border-bottom: 1px solid var(--explorer-border);\n}\n.crm-mix-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-mix-total[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.55rem;\n}\n.crm-mix-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 1rem;\n  font-weight: 780;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: none;\n  gap: 0;\n  margin: 0;\n  padding: 0.45rem 0 0;\n  overflow: visible;\n  background: transparent;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0.58rem 0.25rem;\n  border: 0;\n  border-bottom: 1px solid var(--explorer-border);\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n@media (max-width: 1199.98px) {\n  .deep-crm-secondary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 991.98px) {\n  .crm-analysis-card-body[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .crm-analysis-side[_ngcontent-%COMP%] {\n    order: -1;\n    padding: 0.9rem 1rem 0;\n    border-inline-start: 0;\n    border-bottom: 1px solid var(--explorer-border);\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    min-height: 5.25rem;\n    padding: 0.8rem 0.75rem 0.8rem 1.25rem;\n    border-bottom: 0;\n    border-inline-end: 1px solid var(--explorer-border);\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    border-inline-end: 0;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-chart-main[_ngcontent-%COMP%]   .crm-line-chart-shell[_ngcontent-%COMP%] {\n    min-height: 23rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    min-height: 4.7rem;\n    border-inline-end: 0;\n    border-bottom: 1px solid var(--explorer-border);\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    min-height: 0;\n    padding: 0.5rem 0.75rem 0.85rem;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .monthly-device-report-chart[_ngcontent-%COMP%] {\n    min-height: 16rem;\n    padding: 0;\n  }\n  .crm-mix-details[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 0.8rem 0 0;\n    border-inline-start: 0;\n    border-top: 1px solid var(--explorer-border);\n  }\n  .crm-mix-total[_ngcontent-%COMP%] {\n    padding: 0 0.2rem 0.8rem;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]   .crm-mix-marker[_ngcontent-%COMP%] {\n  width: 0.78rem;\n  min-width: 0.78rem;\n  height: 0.78rem;\n  border: 2px solid var(--explorer-card);\n  border-radius: 0.24rem;\n  box-shadow: 0 0 0 1px var(--explorer-border);\n}\n.deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  grid-template-columns: 0.9rem minmax(0, 1fr) auto;\n  column-gap: 0.65rem;\n}\n[_nghost-%COMP%]     .deep-crm-grid .crm-chart-main .apexcharts-canvas, [_nghost-%COMP%]     .deep-crm-grid .crm-chart-main .apexcharts-svg {\n  width: 100% !important;\n  max-width: none !important;\n}\n.explorer-header-actions[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n}\n.explorer-history-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  min-height: 2.4rem;\n  padding: 0 0.85rem;\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  border-radius: 0.65rem;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 750;\n  text-decoration: none;\n}\n.explorer-history-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.reporting-timezone-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  width: min(100% - 2.5rem, 97.5rem);\n  margin: 0.85rem auto;\n  padding: 0.75rem 0.9rem;\n  border: 1px solid rgba(245, 184, 73, 0.45);\n  border-radius: 0.75rem;\n  background: rgba(245, 184, 73, 0.08);\n}\n.reporting-timezone-bar.is-confirmed[_ngcontent-%COMP%] {\n  border-color: rgba(38, 191, 148, 0.32);\n  background: rgba(38, 191, 148, 0.07);\n}\n.reporting-timezone-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n}\n.reporting-timezone-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > i[_ngcontent-%COMP%] {\n  color: rgb(197, 133, 22);\n  font-size: 1.1rem;\n}\n.reporting-timezone-bar.is-confirmed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > i[_ngcontent-%COMP%] {\n  color: rgb(28, 151, 112);\n}\n.reporting-timezone-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.reporting-timezone-bar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--explorer-text);\n  font-size: 0.74rem;\n}\n.reporting-timezone-bar[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--explorer-muted);\n  font-size: 0.65rem;\n}\n.reporting-timezone-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  flex: none;\n}\n.reporting-timezone-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .reporting-timezone-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.15rem;\n  border: 1px solid var(--explorer-border);\n  border-radius: 0.55rem;\n  font-size: 0.68rem;\n}\n.reporting-timezone-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 13rem;\n  padding: 0 0.65rem;\n  background: var(--explorer-card);\n  color: var(--explorer-text);\n}\n.reporting-timezone-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n  border-color: rgb(var(--primary));\n  background: rgb(var(--primary));\n  color: #fff;\n  font-weight: 700;\n}\n.reporting-timezone-actions[_ngcontent-%COMP%]   button.secondary[_ngcontent-%COMP%] {\n  border-color: var(--explorer-border);\n  background: var(--explorer-card);\n  color: var(--explorer-text);\n}\n@media (max-width: 767.98px) {\n  .explorer-header-actions[_ngcontent-%COMP%], .reporting-timezone-bar[_ngcontent-%COMP%], .reporting-timezone-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .explorer-history-link[_ngcontent-%COMP%], .range-select[_ngcontent-%COMP%], .reporting-timezone-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .reporting-timezone-bar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 767.98px) {\n  .explorer-page-header-inner[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.9rem 0.75rem 0.8rem;\n  }\n  .explorer-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.08rem;\n    line-height: 1.25;\n  }\n  .explorer-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 34rem;\n    margin-top: 0.2rem;\n    font-size: 0.68rem;\n    line-height: 1.45;\n  }\n  .explorer-header-actions[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    gap: 0.5rem;\n  }\n  .explorer-history-link[_ngcontent-%COMP%], .range-select[_ngcontent-%COMP%] {\n    min-width: 0;\n    min-height: 2.15rem;\n    font-size: 0.64rem;\n  }\n  .reporting-timezone-bar[_ngcontent-%COMP%] {\n    width: calc(100% - 1.5rem);\n    margin: 0.65rem auto;\n    gap: 0.65rem;\n    padding: 0.65rem;\n    border-radius: 0.6rem;\n  }\n  .reporting-timezone-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    align-items: flex-start;\n  }\n  .reporting-timezone-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .reporting-timezone-bar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.66rem;\n  }\n  .reporting-timezone-bar[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.58rem;\n    line-height: 1.4;\n  }\n  .reporting-timezone-actions[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto auto;\n    gap: 0.4rem;\n  }\n  .reporting-timezone-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .reporting-timezone-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: auto;\n    min-width: 0;\n    min-height: 2rem;\n    padding-inline: 0.55rem;\n    font-size: 0.6rem;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 0.45rem;\n    padding: 0.55rem 0.75rem;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 0.1rem;\n  }\n  .hierarchy-breadcrumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .current-breadcrumb[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 0.56rem;\n  }\n  .breadcrumb-back-button[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    min-height: 1.9rem;\n    padding: 0 0.55rem;\n    font-size: 0.58rem;\n  }\n  .explorer-content[_ngcontent-%COMP%] {\n    padding: 0 0.65rem 1rem;\n  }\n  .view-switch[_ngcontent-%COMP%] {\n    display: grid;\n    width: 100%;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.22rem;\n    margin: 0 auto 0.75rem;\n    padding: 0.22rem;\n    border-radius: 0.65rem;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 0;\n    min-height: 2rem;\n    gap: 0.25rem;\n    padding: 0 0.25rem;\n    border-radius: 0.45rem;\n    font-size: 0.56rem;\n    white-space: nowrap;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .hierarchy-section[_ngcontent-%COMP%], .analysis-kpi-grid[_ngcontent-%COMP%], .crm-primary-grid.deep-crm-grid[_ngcontent-%COMP%], .deep-crm-secondary-grid[_ngcontent-%COMP%], .analysis-grid[_ngcontent-%COMP%] {\n    margin-bottom: 0.7rem;\n  }\n  .section-head[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    gap: 0.5rem;\n    margin-bottom: 0.55rem;\n  }\n  .section-label[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .analysis-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .section-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .panel-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    padding: 0.2rem 0.4rem;\n    font-size: 0.52rem;\n  }\n  .child-grid[_ngcontent-%COMP%], .sensor-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.6rem;\n  }\n  .child-card[_ngcontent-%COMP%], .sensor-card[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 0.75rem;\n    border-radius: 0.68rem;\n  }\n  .child-card[_ngcontent-%COMP%]::before, .sensor-card[_ngcontent-%COMP%]::before {\n    width: 4.5rem;\n    height: 4.5rem;\n    inset-block-start: -2.8rem;\n  }\n  .location-icon[_ngcontent-%COMP%], .sensor-icon[_ngcontent-%COMP%] {\n    width: 1.9rem;\n    min-width: 1.9rem;\n    height: 1.9rem;\n    border-radius: 0.52rem;\n    font-size: 0.82rem;\n  }\n  .alert-pill[_ngcontent-%COMP%], .sensor-status[_ngcontent-%COMP%] {\n    padding: 0.2rem 0.4rem;\n    font-size: 0.52rem;\n  }\n  .child-card-title[_ngcontent-%COMP%] {\n    margin-top: 0.65rem;\n  }\n  .child-card-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 0.48rem;\n  }\n  .child-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .sensor-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.76rem;\n  }\n  .card-energy[_ngcontent-%COMP%] {\n    margin-top: 0.65rem;\n    padding: 0.55rem 0;\n  }\n  .card-energy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .child-stats[_ngcontent-%COMP%], .sensor-values[_ngcontent-%COMP%] {\n    gap: 0.4rem;\n  }\n  .open-card[_ngcontent-%COMP%] {\n    margin-top: 0.65rem;\n    font-size: 0.54rem;\n  }\n  .analysis-kpi-grid[_ngcontent-%COMP%], .analysis-kpi-grid--top[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.5rem;\n  }\n  .analysis-kpi-grid[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%], .analysis-kpi-grid--top[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    min-height: 4.9rem;\n    align-items: flex-start;\n    gap: 0.5rem;\n    padding: 0.65rem;\n    border-radius: 0.65rem;\n  }\n  .analysis-kpi-grid--top[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]::after {\n    width: 2.8rem;\n    height: 2.8rem;\n  }\n  .kpi-icon[_ngcontent-%COMP%] {\n    width: 1.8rem;\n    min-width: 1.8rem;\n    height: 1.8rem;\n    border-radius: 0.5rem;\n    font-size: 0.78rem;\n  }\n  .analysis-kpi-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    letter-spacing: 0.02em;\n  }\n  .analysis-kpi-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    margin-top: 0.12rem;\n    font-size: 0.76rem;\n    line-height: 1.25;\n  }\n  .analysis-kpi-grid[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n    margin-top: 0.12rem;\n    font-size: 0.5rem;\n    line-height: 1.3;\n  }\n  .crm-card[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%] {\n    border-radius: 0.68rem;\n    box-shadow: 0 0.18rem 0.6rem rgba(22, 32, 51, 0.045);\n  }\n  .crm-card-header[_ngcontent-%COMP%] {\n    min-height: 3.6rem;\n    gap: 0.5rem;\n    padding: 0.65rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n    white-space: normal;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 0.1rem;\n    font-size: 0.52rem;\n    line-height: 1.35;\n  }\n  .crm-card-icon[_ngcontent-%COMP%] {\n    width: 1.85rem;\n    min-width: 1.85rem;\n    height: 1.85rem;\n    border-radius: 0.5rem;\n    font-size: 0.78rem;\n  }\n  .crm-icon-button[_ngcontent-%COMP%] {\n    width: 1.85rem;\n    min-width: 1.85rem;\n    height: 1.85rem;\n    border-radius: 0.48rem;\n    font-size: 0.76rem;\n  }\n  .crm-analysis-card-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .crm-analysis-side[_ngcontent-%COMP%] {\n    order: -1;\n    padding: 0.55rem 0.65rem 0;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-chart-selector-row[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-analysis-filter-bar[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    border-radius: 0.55rem;\n  }\n  .crm-select[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    min-height: 2rem;\n    padding-inline: 0.55rem;\n    font-size: 0.58rem;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    min-height: 3.7rem;\n    padding: 0.55rem 0.45rem 0.55rem 0.9rem;\n    border-inline-end: 1px solid var(--explorer-border);\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(even) {\n    border-inline-end: 0;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    grid-column: 1/-1;\n    border-top: 1px solid var(--explorer-border);\n    border-bottom: 0;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-inline-metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.48rem;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-analysis-side[_ngcontent-%COMP%]   .crm-metric-dot[_ngcontent-%COMP%] {\n    width: 0.38rem;\n    height: 0.38rem;\n    inset-inline-start: 0.38rem;\n  }\n  .crm-chart-main[_ngcontent-%COMP%] {\n    padding: 0.35rem 0.25rem 0.5rem;\n  }\n  .deep-crm-grid[_ngcontent-%COMP%]   .crm-chart-main[_ngcontent-%COMP%]   .crm-line-chart-shell[_ngcontent-%COMP%], .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-consumption-card[_ngcontent-%COMP%]   .crm-bar-chart-shell[_ngcontent-%COMP%] {\n    min-height: 18rem;\n    padding: 0.2rem 0;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.7rem;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]    > .crm-card[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%] {\n    gap: 0.4rem;\n    padding: 0.35rem 0.55rem 0.65rem;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .monthly-device-report-chart[_ngcontent-%COMP%] {\n    min-height: 13.5rem;\n  }\n  .crm-mix-details[_ngcontent-%COMP%] {\n    padding-top: 0.55rem;\n  }\n  .crm-mix-total[_ngcontent-%COMP%] {\n    padding: 0 0.1rem 0.55rem;\n  }\n  .crm-mix-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .deep-crm-secondary-grid[_ngcontent-%COMP%]   .crm-mix-content[_ngcontent-%COMP%]   .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-height: 2rem;\n    padding: 0.35rem 0.2rem;\n    font-size: 0.56rem;\n  }\n  .analysis-grid[_ngcontent-%COMP%], .crm-analysis-graph-grid[_ngcontent-%COMP%], .sensor-analysis-graph-grid[_ngcontent-%COMP%], .analysis-breakdown-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.7rem;\n  }\n  .crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%] {\n    min-height: 3.5rem;\n    padding: 0.65rem 0.65rem 0.65rem 3rem;\n  }\n  .crm-analysis-graph-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%]::before {\n    width: 1.75rem;\n    height: 1.75rem;\n    inset-inline-start: 0.65rem;\n  }\n  .crm-analysis-graph-card[_ngcontent-%COMP%]   .chart-wrap[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .breakdown-trend[_ngcontent-%COMP%] {\n    min-height: 15.5rem;\n  }\n  .panel-head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 0.4rem;\n  }\n  .analysis-segmented[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.18rem;\n  }\n  .analysis-segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 1.9rem;\n    padding: 0.3rem 0.48rem;\n    font-size: 0.56rem;\n  }\n  .chart-context-line[_ngcontent-%COMP%] {\n    gap: 0.3rem;\n    padding: 0.45rem 0.65rem 0;\n    font-size: 0.54rem;\n  }\n  .error-state[_ngcontent-%COMP%], .data-availability[_ngcontent-%COMP%], .analysis-reading-warning[_ngcontent-%COMP%] {\n    gap: 0.55rem;\n    padding: 0.65rem;\n    border-radius: 0.6rem;\n    font-size: 0.6rem;\n  }\n  [_nghost-%COMP%]     .apexcharts-legend-text, [_nghost-%COMP%]     .apexcharts-xaxis-label, [_nghost-%COMP%]     .apexcharts-yaxis-label {\n    font-size: 9px !important;\n  }\n}\n@media (max-width: 420px) {\n  .explorer-header-actions[_ngcontent-%COMP%], .analysis-kpi-grid[_ngcontent-%COMP%], .analysis-kpi-grid--top[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .reporting-timezone-actions[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n  .reporting-timezone-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.08rem;\n    min-height: 2.4rem;\n    font-size: 0.5rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .view-switch[_ngcontent-%COMP%] {\n    width: max-content;\n    grid-template-columns: repeat(3, 2.65rem);\n    gap: 0.25rem;\n    padding: 0.25rem;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 2.65rem;\n    min-width: 2.65rem;\n    min-height: 2.15rem;\n    padding: 0;\n    font-size: 0;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 0.92rem;\n  }\n  .demand-summary-row[_ngcontent-%COMP%], .demand-summary-extended[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .demand-summary-row[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .peak-split-values[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(5.25rem, 1fr));\n    gap: 0.38rem;\n    margin: 0 0.55rem 0.6rem;\n    padding: 0;\n    overflow: visible;\n    border: 0;\n    border-radius: 0;\n    background: transparent;\n  }\n  .demand-summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .demand-summary-extended[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .demand-summary-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .peak-split-values[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: flex;\n    min-width: 0;\n    min-height: 3.25rem;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    padding: 0.42rem 0.5rem;\n    border: 1px solid var(--explorer-border);\n    border-radius: 0.5rem;\n    background: var(--explorer-surface);\n    text-align: start;\n  }\n  .demand-summary-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    overflow: hidden;\n    width: 100%;\n    color: var(--explorer-muted);\n    font-size: 0.47rem;\n    font-weight: 720;\n    letter-spacing: 0.025em;\n    line-height: 1.2;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .demand-summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    overflow-wrap: anywhere;\n    margin-top: 0.12rem;\n    color: var(--explorer-text);\n    font-size: 0.66rem;\n    line-height: 1.2;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n    overflow: visible;\n    padding: 0.55rem;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .hierarchy-analysis-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .hierarchy-analysis-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.5rem;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0;\n    overflow: hidden;\n    padding: 0;\n    border: 1px solid var(--explorer-border);\n    border-radius: 0.58rem;\n    background: var(--explorer-card);\n    box-shadow: 0 0.15rem 0.5rem rgba(22, 32, 51, 0.04);\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: grid;\n    min-width: 0;\n    min-height: 2.75rem;\n    align-content: center;\n    gap: 0.12rem;\n    padding: 0.42rem 0.5rem;\n    border: 0;\n    border-bottom: 1px solid var(--explorer-border);\n    color: var(--explorer-text);\n    font-size: 0.58rem;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(odd) {\n    border-inline-end: 1px solid var(--explorer-border);\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    grid-column: 1/-1;\n    min-height: 3rem;\n    border-inline-end: 0;\n    background: var(--explorer-surface);\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    color: var(--explorer-muted);\n    font-size: 0.43rem;\n    font-weight: 760;\n    letter-spacing: 0.04em;\n    line-height: 1;\n    text-transform: uppercase;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    overflow: hidden;\n    font-size: 0.68rem;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .hierarchy-analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.48rem;\n  }\n  [_nghost-%COMP%]     .apexcharts-xaxis-texts-g text {\n    transform: rotate(-90deg);\n    transform-box: fill-box;\n    transform-origin: center;\n    text-anchor: end;\n  }\n  [_nghost-%COMP%]     .apexcharts-xaxis-texts-g text tspan {\n    font-size: 8px;\n  }\n}\n@media (max-width: 420px) {\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex-direction: row;\n    min-height: 2.15rem;\n    font-size: 0;\n  }\n  .demand-summary-row[_ngcontent-%COMP%], .demand-summary-extended[_ngcontent-%COMP%], .peak-split-values[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .demand-summary-row[_ngcontent-%COMP%], .crm-analysis-graph-card[_ngcontent-%COMP%]   .peak-split-values[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=energy-deep-dive.component.css.map */', '\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.crm-dashboard[_ngcontent-%COMP%] {\n  --crm-bg: #f4f6fb;\n  --crm-card: #ffffff;\n  --crm-surface: #f8f9fc;\n  --crm-surface-strong: #f0f2f8;\n  --crm-border: rgba(100, 116, 139, 0.16);\n  --crm-border-strong: rgba(100, 116, 139, 0.24);\n  --crm-text: #172033;\n  --crm-muted: #758096;\n  --crm-primary: #6f4bd8;\n  --crm-primary-soft: #eee9fc;\n  --crm-cyan: #1ea8d5;\n  --crm-cyan-soft: #e5f7fc;\n  --crm-green: #20a97b;\n  --crm-green-soft: #e4f7f0;\n  --crm-amber: #d49320;\n  --crm-amber-soft: #fff4dc;\n  --crm-red: #dc5a52;\n  --crm-red-soft: #fceae8;\n  --crm-shadow: 0 0.75rem 2.25rem rgba(22, 32, 51, 0.055);\n  width: min(100%, 100rem);\n  min-width: 0;\n  margin: 0 auto;\n  padding: clamp(1rem, 2.2vw, 2.25rem);\n  color: var(--crm-text);\n}\n.dark[_nghost-%COMP%]   .crm-dashboard[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-dashboard[_ngcontent-%COMP%] {\n  --crm-bg: #0e1320;\n  --crm-card: #151b29;\n  --crm-surface: #1a2131;\n  --crm-surface-strong: #20283a;\n  --crm-border: rgba(255, 255, 255, 0.08);\n  --crm-border-strong: rgba(255, 255, 255, 0.13);\n  --crm-text: rgba(255, 255, 255, 0.9);\n  --crm-muted: rgba(255, 255, 255, 0.5);\n  --crm-primary-soft: rgba(111, 75, 216, 0.17);\n  --crm-cyan-soft: rgba(30, 168, 213, 0.14);\n  --crm-green-soft: rgba(32, 169, 123, 0.14);\n  --crm-amber-soft: rgba(212, 147, 32, 0.14);\n  --crm-red-soft: rgba(220, 90, 82, 0.14);\n  --crm-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.16);\n}\n.crm-empty-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.85rem 0.95rem;\n  border-radius: 0.85rem;\n  background: rgba(var(--success-100), 0.65);\n  color: rgb(var(--success-700));\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.crm-empty-mini[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.crm-status-danger[_ngcontent-%COMP%] {\n  background: rgba(var(--red-100), 0.85);\n  color: rgb(var(--red-600));\n}\n.crm-device-orange[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.14);\n  color: rgb(217, 119, 6);\n}\n.crm-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 10.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  overflow: hidden;\n  margin-bottom: 1.25rem;\n  padding: clamp(1.35rem, 3vw, 2.2rem);\n  border: 1px solid rgba(111, 75, 216, 0.14);\n  border-radius: 1.15rem;\n  background:\n    radial-gradient(\n      circle at 82% 10%,\n      rgba(30, 168, 213, 0.16),\n      transparent 28%),\n    radial-gradient(\n      circle at 4% 110%,\n      rgba(111, 75, 216, 0.16),\n      transparent 34%),\n    linear-gradient(\n      135deg,\n      var(--crm-card),\n      var(--crm-surface));\n  box-shadow: var(--crm-shadow);\n  animation: _ngcontent-%COMP%_crm-rise 0.4s ease-out both;\n}\n.crm-hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  width: 13rem;\n  height: 13rem;\n  border: 1.8rem solid rgba(111, 75, 216, 0.035);\n  border-radius: 50%;\n  content: "";\n  inset-inline-end: -3rem;\n  inset-block-end: -7rem;\n  pointer-events: none;\n}\n.crm-hero-copy[_ngcontent-%COMP%], .crm-hero-actions[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.crm-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.65rem;\n  color: var(--crm-primary);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.crm-live-dot[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 0.48rem;\n  height: 0.48rem;\n  border-radius: 50%;\n  background: var(--crm-green);\n  box-shadow: 0 0 0 0.28rem rgba(32, 169, 123, 0.12);\n  animation: _ngcontent-%COMP%_crm-pulse 2.2s ease-out infinite;\n}\n.crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: clamp(1.45rem, 3vw, 2.15rem);\n  font-weight: 750;\n  letter-spacing: -0.035em;\n}\n.crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.55rem 0 0;\n  color: var(--crm-muted);\n  font-size: clamp(0.78rem, 1.4vw, 0.9rem);\n  line-height: 1.55;\n}\n.crm-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: none;\n  align-items: stretch;\n  gap: 0.65rem;\n}\n.crm-range-chip[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%], .crm-export-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 3.15rem;\n  align-items: center;\n  border-radius: 0.75rem;\n}\n.crm-range-chip[_ngcontent-%COMP%] {\n  gap: 0.65rem;\n  padding: 0.65rem 0.9rem;\n  border: 1px solid var(--crm-border);\n  background: var(--crm-card);\n  color: var(--crm-text);\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.crm-range-chip[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--crm-primary);\n  font-size: 1.05rem;\n}\n.crm-range-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n}\n.crm-range-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-bottom: 0.1rem;\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n  font-weight: 550;\n}\n.crm-export-button[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  border: 1px solid var(--crm-primary);\n  background: var(--crm-primary);\n  box-shadow: 0 0.45rem 1rem rgba(111, 75, 216, 0.18);\n  color: #fff;\n  font-size: 0.76rem;\n  font-weight: 700;\n  transition:\n    transform 160ms ease,\n    box-shadow 160ms ease,\n    background 160ms ease;\n}\n.crm-explorer-button[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.9rem;\n  border: 1px solid rgba(111, 75, 216, 0.22);\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 0.72rem;\n  font-weight: 700;\n  transition:\n    transform 160ms ease,\n    border-color 160ms ease,\n    background 160ms ease;\n}\n.crm-dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.crm-overview-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n}\n.crm-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-inline: 0.15rem;\n}\n.crm-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.86rem;\n  font-weight: 720;\n}\n.crm-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.63rem;\n}\n.crm-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.55rem;\n  border-radius: 999px;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 0.58rem;\n  font-weight: 700;\n}\n.crm-overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n.crm-stat-card[_ngcontent-%COMP%], .crm-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--crm-border);\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.crm-stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.85rem;\n  overflow: hidden;\n  padding: 1rem;\n  border-radius: 0.9rem;\n  animation: _ngcontent-%COMP%_crm-rise 0.42s ease-out both;\n  transition:\n    transform 180ms ease,\n    border-color 180ms ease,\n    box-shadow 180ms ease;\n}\n.crm-stat-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 45ms;\n}\n.crm-stat-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 90ms;\n}\n.crm-stat-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 135ms;\n}\n.crm-stat-card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  content: "";\n  inset-inline-end: -1.6rem;\n  inset-block-end: -1.8rem;\n  opacity: 0.42;\n}\n.crm-stat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.85rem;\n  min-width: 2.85rem;\n  height: 2.85rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  font-size: 1.2rem;\n}\n.crm-stat-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.crm-stat-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.12rem 0;\n  color: var(--crm-text);\n  font-size: clamp(1rem, 2vw, 1.32rem);\n  font-weight: 750;\n  letter-spacing: -0.025em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.63em;\n  font-weight: 650;\n}\n.crm-stat-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-stat-corner[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--crm-muted);\n  font-size: 0.8rem;\n  inset-inline-end: 0.75rem;\n  inset-block-start: 0.65rem;\n  opacity: 0.45;\n}\n.crm-stat-primary[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-stat-primary[_ngcontent-%COMP%]::before {\n  background: var(--crm-primary-soft);\n}\n.crm-stat-cyan[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-stat-cyan[_ngcontent-%COMP%]::before {\n  background: var(--crm-cyan-soft);\n}\n.crm-stat-green[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-stat-green[_ngcontent-%COMP%]::before {\n  background: var(--crm-green-soft);\n}\n.crm-stat-amber[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-stat-amber[_ngcontent-%COMP%]::before {\n  background: var(--crm-amber-soft);\n}\n.crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 1.25rem;\n  align-items: stretch;\n}\n.crm-primary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.9fr) minmax(18rem, 0.8fr);\n}\n.crm-secondary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.65fr) minmax(18rem, 0.75fr);\n}\n.crm-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 1rem;\n  animation: _ngcontent-%COMP%_crm-rise 0.45s ease-out both;\n  animation-delay: 80ms;\n}\n.crm-peak-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.crm-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 4.7rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.15rem;\n  border-bottom: 1px solid var(--crm-border);\n}\n.crm-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.crm-card-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  height: 2.2rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.62rem;\n  font-size: 1rem;\n}\n.crm-card-icon-primary[_ngcontent-%COMP%] {\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-card-icon-cyan[_ngcontent-%COMP%] {\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-card-icon-green[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-card-icon-danger[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.88rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.crm-icon-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.25rem;\n  min-width: 2.25rem;\n  height: 2.25rem;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.62rem;\n  background: var(--crm-surface);\n  color: var(--crm-muted);\n  font-size: 0.92rem;\n  transition:\n    color 160ms ease,\n    border-color 160ms ease,\n    background 160ms ease;\n}\n.crm-filter-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(8rem, 1fr) auto minmax(8rem, 1fr) auto;\n  gap: 0.65rem;\n  align-items: end;\n  margin: 1rem 1.15rem 0;\n  padding: 0.7rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.75rem;\n  background: var(--crm-surface);\n}\n.crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.25rem;\n}\n.crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  height: 2.25rem;\n  padding: 0 0.7rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.55rem;\n  outline: none;\n  background: var(--crm-card);\n  color: var(--crm-text);\n  font-size: 0.72rem;\n  transition: border-color 160ms ease, box-shadow 160ms ease;\n}\n.crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--crm-primary);\n  box-shadow: 0 0 0 0.18rem rgba(111, 75, 216, 0.1);\n}\n.crm-filter-separator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 2.25rem;\n  align-items: center;\n  color: var(--crm-muted);\n}\n.crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 2.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0 0.9rem;\n  border: 1px solid var(--crm-primary);\n  border-radius: 0.55rem;\n  background: var(--crm-primary);\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  transition: transform 160ms ease, background 160ms ease;\n}\n.crm-date-range-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin: 0;\n  color: var(--crm-red);\n  font-size: 0.62rem;\n  font-weight: 650;\n}\n.crm-inline-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin: 1rem 1.15rem 0;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.75rem;\n}\n.crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  padding: 0.75rem 0.85rem 0.75rem 1.1rem;\n  border-inline-end: 1px solid var(--crm-border);\n}\n.crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-inline-end: 0;\n}\n.crm-metric-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.38rem;\n  height: 0.38rem;\n  border-radius: 50%;\n  inset-inline-start: 0.55rem;\n  inset-block-start: 0.95rem;\n}\n.crm-metric-primary[_ngcontent-%COMP%] {\n  background: var(--crm-primary);\n}\n.crm-metric-cyan[_ngcontent-%COMP%] {\n  background: var(--crm-cyan);\n}\n.crm-metric-green[_ngcontent-%COMP%] {\n  background: var(--crm-green);\n}\n.crm-inline-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .crm-inline-metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--crm-muted);\n  font-size: 0.59rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin: 0.12rem 0;\n  color: var(--crm-text);\n  font-size: 0.84rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-chart-shell[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n}\n.crm-line-chart-shell[_ngcontent-%COMP%] {\n  overscroll-behavior: contain;\n}\n.crm-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.crm-line-chart-shell[_ngcontent-%COMP%], .crm-bar-chart-shell[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.65rem 0.45rem;\n}\n.crm-card-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background: rgba(248, 249, 252, 0.78);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  inset: 0;\n}\n.dark[_nghost-%COMP%]   .crm-card-loader[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-card-loader[_ngcontent-%COMP%] {\n  background: rgba(21, 27, 41, 0.78);\n}\n.crm-card-loader-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  width: min(100%, 22rem);\n  gap: 0.8rem;\n  align-items: center;\n  padding: 0.9rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.85rem;\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.crm-card-loader-spinner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.55rem;\n  height: 2.55rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 1.15rem;\n}\n.crm-card-loader-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .crm-spinning-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_crm-spin 0.8s linear infinite;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.35rem;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .crm-card-loader-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.crm-alert-total[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 2.25rem;\n  height: 2.25rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.62rem;\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n  font-size: 0.9rem;\n  font-weight: 750;\n}\n.crm-operations-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: stretch;\n  height: auto;\n  min-height: 0;\n  overflow: hidden;\n  flex-direction: column;\n}\n.crm-operations-card[_ngcontent-%COMP%]   .crm-card-header[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.crm-idle-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 0;\n  overflow: hidden;\n  padding: 0.75rem;\n  overscroll-behavior: contain;\n}\n.crm-idle-card-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.35rem;\n}\n.crm-idle-card-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: var(--crm-border-strong);\n}\n.crm-idle-device-list[_ngcontent-%COMP%] {\n  gap: 0.55rem;\n  padding: 0;\n}\n.crm-idle-device-list[_ngcontent-%COMP%]   .crm-device-row[_ngcontent-%COMP%] {\n  padding: 0.72rem;\n  border: 1px solid var(--crm-border);\n  background: var(--crm-surface);\n}\n.crm-alert-summary[_ngcontent-%COMP%] {\n  padding: 1rem 1.15rem;\n  border-bottom: 1px solid var(--crm-border);\n}\n.crm-alert-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 4fr 7fr;\n  height: 0.45rem;\n  overflow: hidden;\n  border-radius: 999px;\n}\n.crm-alert-critical[_ngcontent-%COMP%] {\n  background: var(--crm-red);\n}\n.crm-alert-warning[_ngcontent-%COMP%] {\n  background: var(--crm-amber);\n}\n.crm-alert-info[_ngcontent-%COMP%] {\n  background: var(--crm-cyan);\n}\n.crm-alert-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.65rem;\n}\n.crm-alert-legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n}\n.crm-alert-legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.4rem;\n  height: 0.4rem;\n  border-radius: 50%;\n}\n.crm-alert-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.85rem;\n}\n.crm-alert-filter-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 999px;\n  background: var(--crm-surface);\n  color: var(--crm-muted);\n  padding: 0.35rem 0.7rem;\n  font-size: 0.62rem;\n  font-weight: 700;\n  transition:\n    border-color 160ms ease,\n    background 160ms ease,\n    color 160ms ease;\n}\n.crm-alert-filter-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .crm-alert-filter-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: rgba(111, 75, 216, 0.3);\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-alert-filter-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.45rem;\n  height: 0.45rem;\n  border-radius: 50%;\n}\n.crm-alert-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  margin-top: 0.75rem;\n  padding: 0 0.75rem 0.75rem;\n}\n.crm-alert-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.85rem;\n  background: var(--crm-surface);\n}\n.crm-alert-row-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.crm-alert-row-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.76rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-alert-row-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin-top: 0.1rem;\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-alert-row-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.65rem;\n  line-height: 1.35;\n}\n.crm-alert-row-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.45rem;\n}\n.crm-mini-action[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 999px;\n  background: var(--crm-primary);\n  color: #fff;\n  padding: 0.35rem 0.65rem;\n  font-size: 0.58rem;\n  font-weight: 750;\n}\n.crm-mini-action[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.crm-empty-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.crm-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.85rem 1.15rem 0.45rem;\n}\n.crm-section-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.crm-section-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.6rem;\n}\n.crm-device-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  padding: 0 0.75rem 0.75rem;\n}\n.crm-device-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 0.65rem;\n  align-items: center;\n  padding: 0.65rem 0.45rem;\n  border-radius: 0.65rem;\n  transition: background 160ms ease;\n}\n.crm-device-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2rem;\n  min-width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.55rem;\n  font-size: 0.85rem;\n}\n.crm-device-blue[_ngcontent-%COMP%] {\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-device-red[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-device-slate[_ngcontent-%COMP%] {\n  background: var(--crm-surface-strong);\n  color: var(--crm-muted);\n}\n.crm-device-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.crm-device-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-device-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-device-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.68rem;\n  font-weight: 650;\n}\n.crm-device-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n}\n.crm-status-pill[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.45rem;\n  border-radius: 999px;\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n  font-size: 0.57rem;\n  font-weight: 700;\n}\n.crm-operation-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  margin: 0 1.15rem 1rem;\n  padding: 0.7rem;\n  border: 1px solid rgba(212, 147, 32, 0.14);\n  border-radius: 0.65rem;\n  background: var(--crm-amber-soft);\n}\n.crm-operation-note[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.7rem;\n  min-width: 1.7rem;\n  height: 1.7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  background: var(--crm-card);\n  color: var(--crm-amber);\n  font-size: 0.82rem;\n}\n.crm-operation-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  line-height: 1.5;\n}\n.monthly-device-report-chart[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 13.5rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.5rem 0;\n}\n.monthly-device-report-chart[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 15rem;\n}\n.crm-mix-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  padding: 0 0.8rem 0.9rem;\n}\n.crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 0.55rem;\n  align-items: center;\n  padding: 0.45rem 0.35rem;\n  border-radius: 0.55rem;\n}\n.crm-mix-marker[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.45rem;\n  height: 0.45rem;\n  border-radius: 50%;\n}\n.crm-mix-marker-0[_ngcontent-%COMP%] {\n  background: var(--crm-primary);\n}\n.crm-mix-marker-1[_ngcontent-%COMP%] {\n  background: var(--crm-cyan);\n}\n.crm-mix-marker-2[_ngcontent-%COMP%] {\n  background: var(--crm-amber);\n}\n.crm-mix-marker-3[_ngcontent-%COMP%] {\n  background: var(--crm-green);\n}\n.crm-mix-marker-4[_ngcontent-%COMP%] {\n  background: var(--crm-red);\n}\n.crm-mix-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.crm-mix-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-mix-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-mix-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.66rem;\n  font-weight: 650;\n}\n.crm-mix-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.56rem;\n}\n.crm-mix-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.66rem;\n}\n.crm-empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 18rem;\n  place-items: center;\n  align-content: center;\n  color: var(--crm-muted);\n  text-align: center;\n}\n.crm-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  font-size: 1.8rem;\n}\n.crm-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.68rem;\n}\n.crm-error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 1.1rem;\n  border: 1px solid rgba(220, 90, 82, 0.18);\n  border-radius: 0.85rem;\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.crm-error-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.5rem;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.7rem;\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-error-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.crm-error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.66rem;\n}\n.dashboard-loader[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.dashboard-loader-panel[_ngcontent-%COMP%], .dashboard-refresh-loader[_ngcontent-%COMP%], .dashboard-loader-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--crm-border);\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.dashboard-loader-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.2rem;\n  border-radius: 0.9rem;\n}\n.energy-loader[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 3.6rem;\n  min-width: 3.6rem;\n  height: 3.6rem;\n  place-items: center;\n}\n.energy-loader-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border: 0.2rem solid var(--crm-primary-soft);\n  border-top-color: var(--crm-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_crm-spin 0.9s linear infinite;\n}\n.energy-loader-core[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.3rem;\n  height: 2.3rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.dashboard-loader-copy[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.dashboard-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.dashboard-loader-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.2rem 0 0.65rem;\n  color: var(--crm-muted);\n  font-size: 0.64rem;\n}\n.dashboard-loader-progress[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0.3rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--crm-surface-strong);\n}\n.dashboard-loader-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 38%;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--crm-primary),\n      var(--crm-cyan));\n  animation: _ngcontent-%COMP%_crm-loader 1.1s ease-in-out infinite;\n}\n.dashboard-loader-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n.dashboard-loader-card[_ngcontent-%COMP%] {\n  min-height: 8rem;\n  overflow: hidden;\n  border-radius: 0.85rem;\n  background:\n    linear-gradient(\n      100deg,\n      var(--crm-card) 20%,\n      var(--crm-surface) 40%,\n      var(--crm-card) 60%);\n  background-size: 250% 100%;\n  animation: _ngcontent-%COMP%_crm-shimmer 1.4s ease-in-out infinite;\n}\n.dashboard-loader-card-wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  min-height: 18rem;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.7rem 0.9rem;\n  border-radius: 0.72rem;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--crm-muted);\n  font-size: 0.64rem;\n  font-weight: 650;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_crm-spin 0.8s linear infinite;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%]   .dashboard-loader-progress[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (hover: hover) {\n  .crm-export-button[_ngcontent-%COMP%]:hover, .crm-explorer-button[_ngcontent-%COMP%]:hover, .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n  }\n  .crm-export-button[_ngcontent-%COMP%]:hover, .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background: #6040c2;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%]:hover {\n    border-color: rgba(111, 75, 216, 0.36);\n    background: rgba(111, 75, 216, 0.16);\n  }\n  .crm-export-button[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0.65rem 1.25rem rgba(111, 75, 216, 0.24);\n  }\n  .crm-stat-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n    border-color: var(--crm-border-strong);\n    box-shadow: 0 1rem 2.4rem rgba(22, 32, 51, 0.075);\n  }\n  .crm-icon-button[_ngcontent-%COMP%]:hover {\n    border-color: rgba(111, 75, 216, 0.3);\n    background: var(--crm-primary-soft);\n    color: var(--crm-primary);\n  }\n  .crm-device-row[_ngcontent-%COMP%]:hover, .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n    background: var(--crm-surface);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-rise {\n  from {\n    transform: translateY(0.55rem);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 169, 123, 0.28);\n  }\n  70% {\n    box-shadow: 0 0 0 0.55rem rgba(32, 169, 123, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(32, 169, 123, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-loader {\n  from {\n    transform: translateX(-110%);\n  }\n  to {\n    transform: translateX(300%);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-shimmer {\n  from {\n    background-position: 150% 0;\n  }\n  to {\n    background-position: -80% 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .crm-operations-card[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-dashboard[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    min-height: 0;\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1.1rem;\n    padding: 1.25rem;\n    border-radius: 0.9rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crm-range-chip[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 3.15rem;\n    min-width: 3.15rem;\n    padding: 0;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-dashboard-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .crm-card[_ngcontent-%COMP%] {\n    border-radius: 0.85rem;\n  }\n  .crm-card-header[_ngcontent-%COMP%] {\n    min-height: 4.2rem;\n    padding: 0.85rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 17rem;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    margin: 0.85rem 0.85rem 0;\n  }\n  .crm-filter-separator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 0.85rem 0.85rem 0;\n    overflow-x: auto;\n    overscroll-behavior-inline: contain;\n    scrollbar-width: none;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 9rem;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%], .crm-bar-chart-shell[_ngcontent-%COMP%] {\n    padding-inline: 0.2rem;\n  }\n  .crm-operations-card[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .crm-alert-summary[_ngcontent-%COMP%] {\n    border-inline-end: 0;\n    border-bottom: 1px solid var(--crm-border);\n  }\n  .dashboard-loader-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .dashboard-loader-card-wide[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 479.98px) {\n  .crm-dashboard[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.7rem;\n  }\n  .crm-section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.45rem;\n  }\n  .crm-stat-card[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .crm-export-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .crm-card-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .crm-card-icon[_ngcontent-%COMP%] {\n    width: 2rem;\n    min-width: 2rem;\n    height: 2rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .crm-panel-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .dashboard-loader-panel[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .dashboard-loader-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .dashboard-loader-card-wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .dashboard-refresh-loader[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 0.55rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .crm-hero[_ngcontent-%COMP%], .crm-stat-card[_ngcontent-%COMP%], .crm-card[_ngcontent-%COMP%], .crm-live-dot[_ngcontent-%COMP%], .energy-loader-ring[_ngcontent-%COMP%], .crm-card-loader-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .crm-spinning-icon[_ngcontent-%COMP%], .dashboard-loader-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dashboard-loader-card[_ngcontent-%COMP%], .dashboard-refresh-loader[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%], .crm-stat-card[_ngcontent-%COMP%], .crm-icon-button[_ngcontent-%COMP%], .crm-device-row[_ngcontent-%COMP%], .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    transition: none !important;\n  }\n}\n.crm-dashboard[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin: -0.5rem 0 0;\n  padding: 0;\n}\n.crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n  width: min(100% - 2.5rem, 100rem);\n  margin-inline: auto;\n}\n.crm-hero[_ngcontent-%COMP%] {\n  min-height: 0;\n  margin-bottom: 1rem;\n  padding: 1.75rem 1.5rem 1rem;\n  border: 0;\n  border-radius: 0;\n  background: rgb(var(--primary));\n  box-shadow: none;\n  animation: none;\n}\n.crm-hero[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.crm-eyebrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n}\n.crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 44rem;\n  margin-top: 0.125rem;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.crm-hero-actions[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 0.75rem;\n}\n.crm-range-chip[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%], .crm-export-button[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  border-radius: 0.5rem;\n  box-shadow: none;\n}\n.crm-range-chip[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-color: rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n}\n.crm-range-chip[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .crm-range-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.78);\n}\n.crm-range-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n}\n.crm-explorer-button[_ngcontent-%COMP%], .crm-export-button[_ngcontent-%COMP%] {\n  padding: 0 0.9rem;\n  border: 0;\n  background: rgba(255, 255, 255, 0.95);\n  color: rgb(var(--primary));\n  font-size: 0.75rem;\n}\n@media (hover: hover) {\n  .crm-explorer-button[_ngcontent-%COMP%]:hover, .crm-export-button[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n    background: #fff;\n    color: rgb(var(--primary));\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-dashboard[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n    width: calc(100% - 2rem);\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1.5rem 1.25rem 1rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .crm-range-chip[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 2.4rem;\n    min-width: 2.4rem;\n    padding: 0;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 479.98px) {\n  .crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n    width: calc(100% - 1.5rem);\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 2.4rem;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 2.4rem;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.crm-card-icon-amber[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-analysis-filter-bar[_ngcontent-%COMP%] {\n  align-items: end;\n}\n.crm-select[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  min-width: 12rem;\n  border: 1px solid var(--crm-border-strong);\n  border-radius: 0.65rem;\n  background: var(--crm-card);\n  color: var(--crm-text);\n  padding: 0.5rem 0.75rem;\n  font-size: 0.82rem;\n  outline: none;\n}\n.crm-select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(132, 90, 223, 0.55);\n  box-shadow: 0 0 0 0.2rem rgba(132, 90, 223, 0.11);\n}\n.crm-select[_ngcontent-%COMP%]:disabled, .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .crm-icon-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.62;\n}\n@media (max-width: 767.98px) {\n  .crm-dashboard-content[_ngcontent-%COMP%] {\n    gap: 0.85rem;\n  }\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .crm-stat-card[_ngcontent-%COMP%] {\n    gap: 0.7rem;\n    padding: 0.85rem;\n    border-radius: 0.75rem;\n  }\n  .crm-stat-icon[_ngcontent-%COMP%] {\n    width: 2.35rem;\n    min-width: 2.35rem;\n    height: 2.35rem;\n    border-radius: 0.65rem;\n    font-size: 1rem;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.98rem;\n    line-height: 1.2;\n    white-space: normal;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    font-size: 0.58rem;\n    line-height: 1.35;\n    white-space: normal;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .crm-card-header[_ngcontent-%COMP%] {\n    min-height: auto;\n    align-items: flex-start;\n    gap: 0.75rem;\n    padding: 0.85rem 0.8rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 0.55rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n    line-height: 1.25;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: block;\n    max-width: none;\n    font-size: 0.6rem;\n    line-height: 1.35;\n  }\n  .crm-card-icon[_ngcontent-%COMP%], .crm-icon-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    min-width: 2rem;\n    height: 2rem;\n    border-radius: 0.55rem;\n  }\n  .crm-analysis-filter-bar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.55rem;\n    margin: 0.75rem 0.75rem 0;\n    padding: 0.65rem;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 0.54rem;\n  }\n  .crm-select[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    min-height: 2.35rem;\n    height: auto;\n    padding: 0.45rem 0.65rem;\n    font-size: 0.72rem;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 2.35rem;\n    height: auto;\n    font-size: 0.68rem;\n  }\n  .crm-date-range-error[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    font-size: 0.58rem;\n    line-height: 1.35;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n    margin: 0.75rem 0.75rem 0;\n    overflow: visible;\n    border-radius: 0.7rem;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 0;\n    padding: 0.68rem 0.75rem 0.68rem 1rem;\n    border-inline-end: 0;\n    border-bottom: 1px solid var(--crm-border);\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .crm-inline-metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.56rem;\n    line-height: 1.32;\n    white-space: normal;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n    line-height: 1.2;\n    white-space: normal;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%] {\n    min-height: 18rem;\n    padding: 0.35rem 0.25rem 0.25rem;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n    min-height: 17.5rem;\n  }\n  [_nghost-%COMP%]     .crm-line-chart-shell .apexcharts-legend.apx-legend-position-top {\n    top: 0 !important;\n    right: auto !important;\n    left: 0.25rem !important;\n    justify-content: flex-start !important;\n    max-width: calc(100% - 0.5rem);\n    padding-inline-end: 0 !important;\n  }\n  [_nghost-%COMP%]     .crm-line-chart-shell .apexcharts-legend-series {\n    margin: 0.1rem 0.55rem 0.1rem 0 !important;\n  }\n  [_nghost-%COMP%]     .crm-line-chart-shell .apexcharts-toolbar {\n    top: 2.05rem !important;\n    right: 0.25rem !important;\n    display: flex !important;\n    max-width: calc(100% - 0.5rem);\n    justify-content: flex-end;\n  }\n  .crm-card-loader[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .crm-card-loader-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    gap: 0.65rem;\n    padding: 0.75rem;\n  }\n  .crm-card-loader-spinner[_ngcontent-%COMP%] {\n    width: 2.2rem;\n    height: 2.2rem;\n    border-radius: 0.65rem;\n    font-size: 1rem;\n  }\n  .crm-card-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n    white-space: normal;\n  }\n  .crm-card-loader-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.58rem;\n  }\n  .crm-operations-card[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 0;\n  }\n}\n@media (max-width: 479.98px) {\n  .crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n    width: calc(100% - 1rem);\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    padding-inline: 0.85rem;\n  }\n  .crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  .crm-stat-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.92rem;\n  }\n  .crm-card-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.56rem;\n  }\n  .crm-analysis-filter-bar[_ngcontent-%COMP%], .crm-inline-metrics[_ngcontent-%COMP%] {\n    margin: 0.65rem 0.65rem 0;\n  }\n  .crm-analysis-filter-bar[_ngcontent-%COMP%] {\n    padding: 0.58rem;\n  }\n  .crm-select[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%] {\n    min-height: 16rem;\n    padding-inline: 0;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n    min-height: 15.5rem;\n  }\n  .crm-card-loader-panel[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    justify-items: center;\n    width: min(100%, 18rem);\n    text-align: center;\n  }\n  .crm-card-loader-copy[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.crm-suggestions-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(245, 184, 73, 0.08),\n      transparent 12rem),\n    var(--crm-card);\n}\n.crm-suggestions-card[_ngcontent-%COMP%]   .crm-card-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.crm-suggestion-summary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 0.4rem;\n  min-height: 2rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgba(212, 147, 32, 0.24);\n  border-radius: 999px;\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n  font-size: 0.68rem;\n  font-weight: 750;\n  white-space: nowrap;\n}\n.crm-suggestion-summary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.crm-suggestion-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.9rem;\n  padding: 1rem;\n}\n.crm-suggestion-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  min-width: 0;\n  gap: 0.8rem;\n  overflow: hidden;\n  padding: 0.95rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.85rem;\n  background: var(--crm-surface);\n  transition:\n    transform 160ms ease,\n    border-color 160ms ease,\n    box-shadow 160ms ease;\n}\n.crm-suggestion-item[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 0.25rem;\n  content: "";\n  inset-block: 0;\n  inset-inline-start: 0;\n  background: var(--crm-primary);\n}\n.crm-suggestion-warning[_ngcontent-%COMP%] {\n  border-color: rgba(212, 147, 32, 0.32);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(212, 147, 32, 0.14),\n      transparent 58%),\n    var(--crm-surface);\n}\n.crm-suggestion-warning[_ngcontent-%COMP%]::before {\n  background: var(--crm-amber);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%] {\n  border-color: rgba(220, 90, 82, 0.34);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 90, 82, 0.13),\n      transparent 58%),\n    var(--crm-surface);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%]::before {\n  background: var(--crm-red);\n}\n.crm-suggestion-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  z-index: 1;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.72rem;\n  color: var(--crm-primary);\n  background: var(--crm-primary-soft);\n  font-size: 1.15rem;\n}\n.crm-suggestion-warning[_ngcontent-%COMP%]   .crm-suggestion-icon[_ngcontent-%COMP%] {\n  color: var(--crm-amber);\n  background: var(--crm-amber-soft);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%]   .crm-suggestion-icon[_ngcontent-%COMP%] {\n  color: var(--crm-red);\n  background: var(--crm-red-soft);\n}\n.crm-suggestion-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.crm-suggestion-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.65rem;\n}\n.crm-suggestion-title-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.88rem;\n  font-weight: 740;\n  line-height: 1.3;\n}\n.crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: none;\n  border-radius: 999px;\n  padding: 0.18rem 0.5rem;\n  border: 1px solid var(--crm-border);\n  background: rgba(255, 255, 255, 0.76);\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.crm-suggestion-warning[_ngcontent-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-color: rgba(212, 147, 32, 0.3);\n  color: var(--crm-amber);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-color: rgba(220, 90, 82, 0.3);\n  color: var(--crm-red);\n}\n.crm-suggestion-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.76rem;\n  line-height: 1.45;\n}\n.crm-suggestion-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.4rem;\n  margin-top: 0.6rem;\n  padding: 0.55rem 0.65rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.65rem;\n  background: rgba(255, 255, 255, 0.58);\n  color: var(--crm-text);\n  font-size: 0.72rem;\n  font-weight: 650;\n  line-height: 1.45;\n}\n.crm-suggestion-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 0.08rem;\n  color: var(--crm-green);\n  font-size: 0.9rem;\n}\n.crm-suggestion-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.7rem;\n}\n.crm-suggestion-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.24rem 0.52rem;\n  border: 1px solid var(--crm-border);\n  background: rgba(255, 255, 255, 0.72);\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  font-weight: 700;\n}\n.dark[_nghost-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-action[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-action[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n}\n@media (hover: hover) {\n  .crm-suggestion-item[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n    border-color: var(--crm-border-strong);\n    box-shadow: 0 0.75rem 1.6rem rgba(22, 32, 51, 0.075);\n  }\n}\n@media (max-width: 991.98px) {\n  .crm-suggestion-list[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-suggestions-card[_ngcontent-%COMP%]   .crm-card-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .crm-suggestion-summary[_ngcontent-%COMP%] {\n    width: fit-content;\n    min-height: 1.85rem;\n    font-size: 0.62rem;\n  }\n  .crm-suggestion-list[_ngcontent-%COMP%] {\n    gap: 0.7rem;\n    padding: 0.75rem;\n  }\n  .crm-suggestion-item[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.65rem;\n    padding: 0.8rem;\n  }\n  .crm-suggestion-icon[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n  .crm-suggestion-title-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.45rem;\n  }\n  .crm-suggestion-title-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .crm-suggestion-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .crm-suggestion-action[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.58rem;\n    font-size: 0.68rem;\n  }\n}\n.crm-overview-grid-five[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.crm-operational-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 2.25fr) minmax(250px, 0.75fr);\n  align-items: stretch;\n}\n.crm-dashboard-suggestions[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 1399px) {\n  .crm-overview-grid-five[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 991px) {\n  .crm-overview-grid-five[_ngcontent-%COMP%], .crm-operational-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.crm-live-button[_ngcontent-%COMP%] {\n  border-color: rgba(30, 168, 213, 0.25);\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-live-status[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: -0.3rem 0 1.25rem;\n}\n.crm-status-item[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.72rem 0.85rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.8rem;\n  background: var(--crm-card);\n  box-shadow: 0 0.4rem 1.1rem rgba(22, 32, 51, 0.035);\n}\n.crm-status-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2rem;\n  height: 2rem;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.58rem;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 1rem;\n}\n.crm-status-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.1rem;\n}\n.crm-status-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.72rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-status-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-status-indicator[_ngcontent-%COMP%] {\n  width: 0.72rem;\n  height: 0.72rem;\n  flex: none;\n  border-radius: 50%;\n  background: var(--crm-red);\n  box-shadow: 0 0 0 0.3rem var(--crm-red-soft);\n}\n.crm-status-item.is-connected[_ngcontent-%COMP%]   .crm-status-indicator[_ngcontent-%COMP%] {\n  background: var(--crm-green);\n  box-shadow: 0 0 0 0.3rem var(--crm-green-soft);\n  animation: _ngcontent-%COMP%_crm-live-pulse 1.8s infinite;\n}\n.crm-spin-soft[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_crm-spin 1s linear infinite;\n}\n.crm-unavailable-value[_ngcontent-%COMP%] {\n  color: var(--crm-amber) !important;\n  font-size: 1rem !important;\n}\n.crm-live-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(280px, 0.85fr);\n  gap: 1rem;\n  align-items: stretch;\n}\n.crm-live-chart-card[_ngcontent-%COMP%], .crm-utility-live-card[_ngcontent-%COMP%], .crm-top-consumers-card[_ngcontent-%COMP%], .crm-health-card[_ngcontent-%COMP%], .crm-readiness-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 0.95rem;\n}\n.crm-live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.28rem 0.55rem;\n  border-radius: 999px;\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n  font-size: 0.62rem;\n  font-weight: 760;\n}\n.crm-live-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  animation: _ngcontent-%COMP%_crm-live-pulse 1.8s infinite;\n}\n.crm-live-metric-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.65rem;\n  padding: 0.9rem 1rem 0;\n}\n.crm-live-metric-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n  padding: 0.72rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.72rem;\n  background: var(--crm-surface);\n}\n.crm-live-metric-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.6rem;\n  font-weight: 650;\n}\n.crm-live-metric-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.92rem;\n  font-weight: 760;\n}\n.crm-live-chart-wrap[_ngcontent-%COMP%] {\n  min-height: 15.5rem;\n  padding: 0.35rem 0.45rem 0;\n}\n.crm-chart-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.4rem;\n  margin: 0;\n  padding: 0.7rem 1rem 0.9rem;\n  border-top: 1px solid var(--crm-border);\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  line-height: 1.45;\n}\n.crm-chart-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 0.05rem;\n  color: var(--crm-primary);\n}\n.crm-utility-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  padding: 0.9rem 1rem 1rem;\n}\n.crm-utility-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%], .crm-utility-row-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.08rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.74rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .crm-utility-row-foot[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--crm-primary);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.crm-progress-track[_ngcontent-%COMP%] {\n  height: 0.42rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--crm-surface-strong);\n}\n.crm-progress-track[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--crm-primary),\n      var(--crm-cyan));\n  transition: width 280ms ease;\n}\n.crm-secondary-live-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);\n}\n.crm-text-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--crm-primary);\n  font-size: 0.66rem;\n  font-weight: 720;\n}\n.crm-consumer-table[_ngcontent-%COMP%] {\n  padding: 0 1rem 1rem;\n}\n.crm-consumer-table-head[_ngcontent-%COMP%], .crm-consumer-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(210px, 1.5fr) minmax(90px, 0.55fr) minmax(130px, 0.8fr) minmax(70px, 0.4fr);\n  gap: 0.75rem;\n  align-items: center;\n}\n.crm-consumer-table-head[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid var(--crm-border);\n  color: var(--crm-muted);\n  font-size: 0.57rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.crm-consumer-row[_ngcontent-%COMP%] {\n  padding: 0.72rem 0.75rem;\n  border-bottom: 1px solid var(--crm-border);\n  transition: background 160ms ease, transform 160ms ease;\n}\n.crm-consumer-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.crm-consumer-name[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.65rem;\n}\n.crm-consumer-name[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.15rem;\n  height: 2.15rem;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.62rem;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-consumer-name[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.crm-consumer-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-consumer-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-consumer-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.74rem;\n  font-weight: 720;\n}\n.crm-consumer-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n}\n.crm-consumer-power[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.2rem;\n}\n.crm-consumer-power[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.82rem;\n  font-weight: 760;\n}\n.crm-consumer-power[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .crm-consumer-health[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.59rem;\n}\n.crm-consumer-health[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.3rem;\n}\n.crm-consumer-health[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.38rem;\n  border-radius: 999px;\n  background: var(--crm-surface);\n}\n.crm-relay-pill[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 0.24rem 0.48rem;\n  border-radius: 999px;\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n  font-size: 0.58rem;\n  font-weight: 760;\n  text-transform: uppercase;\n}\n.crm-relay-pill.is-off[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-health-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.crm-health-percent[_ngcontent-%COMP%] {\n  color: var(--crm-green);\n  font-size: 1.15rem;\n  font-weight: 780;\n}\n.crm-health-progress[_ngcontent-%COMP%] {\n  height: 0.55rem;\n  overflow: hidden;\n  margin: 0.15rem 1rem 0;\n  border-radius: 999px;\n  background: var(--crm-surface-strong);\n}\n.crm-health-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--crm-green),\n      var(--crm-cyan));\n}\n.crm-health-counters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.45rem;\n  padding: 0.85rem 1rem 0.7rem;\n}\n.crm-health-counters[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.58rem 0.45rem;\n  border-radius: 0.65rem;\n  text-align: center;\n}\n.crm-health-counters[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 780;\n}\n.crm-health-counters[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.52rem;\n  font-weight: 650;\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-online[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-delayed[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-offline[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-never[_ngcontent-%COMP%] {\n  background: var(--crm-surface-strong);\n  color: var(--crm-muted);\n}\n.crm-health-rule[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 1rem 0.9rem;\n  color: var(--crm-muted);\n  font-size: 0.57rem;\n  text-align: center;\n}\n.crm-readiness-state[_ngcontent-%COMP%] {\n  padding: 0.28rem 0.52rem;\n  border-radius: 999px;\n  font-size: 0.58rem;\n  font-weight: 760;\n}\n.crm-readiness-state.is-ready[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-readiness-state.is-partial[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-readiness-state.is-required[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-readiness-score[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.2rem 1rem 0.75rem;\n}\n.crm-readiness-score[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--crm-primary);\n  font-size: 1rem;\n  font-weight: 780;\n}\n.crm-readiness-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n  padding: 0 1rem 1rem;\n}\n.crm-readiness-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.48rem 0.58rem;\n  border-radius: 0.58rem;\n  background: var(--crm-surface);\n}\n.crm-readiness-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n}\n.crm-readiness-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-green);\n  font-size: 0.61rem;\n  font-weight: 720;\n}\n.crm-readiness-list[_ngcontent-%COMP%]   strong.is-missing[_ngcontent-%COMP%] {\n  color: var(--crm-red);\n}\n@media (hover: hover) {\n  .crm-consumer-row[_ngcontent-%COMP%]:hover {\n    background: var(--crm-surface);\n    transform: translateX(2px);\n  }\n}\n@media (max-width: 1199.98px) {\n  .crm-live-grid[_ngcontent-%COMP%], .crm-secondary-live-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .crm-health-stack[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 991.98px) {\n  .crm-live-status[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .crm-live-metric-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .crm-consumer-table-head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-consumer-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .crm-consumer-health[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n  .crm-live-metric-row[_ngcontent-%COMP%], .crm-health-stack[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .crm-health-counters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .crm-consumer-row[_ngcontent-%COMP%] {\n    padding-inline: 0.2rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-live-pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.55;\n    transform: scale(0.82);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.crm-idle-insight-card[_ngcontent-%COMP%], .crm-suggestions-launcher[_ngcontent-%COMP%] {\n  min-height: 360px;\n}\n.crm-idle-insight-card[_ngcontent-%COMP%] {\n  height: 360px;\n  max-height: 360px;\n}\n.crm-confirmed-total[_ngcontent-%COMP%] {\n  min-width: 36px;\n  justify-content: center;\n  background: rgba(14, 165, 233, 0.12);\n  color: #0369a1;\n  border: 1px solid rgba(14, 165, 233, 0.2);\n}\n.crm-idle-evidence-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 11px 12px;\n  margin-bottom: 12px;\n  border-radius: 12px;\n  background: rgba(14, 165, 233, 0.07);\n  color: #075985;\n  font-size: 12px;\n  line-height: 1.45;\n}\n.crm-idle-evidence-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  font-size: 17px;\n  color: #0284c7;\n}\n.crm-confirmed-idle-row[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding: 13px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 14px;\n  background: rgba(248, 250, 252, 0.7);\n}\n.crm-idle-device-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.crm-idle-title-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.crm-confirmed-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 7px;\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.11);\n  color: #047857;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.crm-idle-evidence[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px 12px;\n  margin-top: 8px;\n  color: #64748b;\n  font-size: 11px;\n}\n.crm-idle-evidence[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  gap: 6px;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  min-width: 50px;\n  height: 30px;\n  padding: 0 8px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   .is-on[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.22);\n  background: rgba(16, 185, 129, 0.1);\n  color: #047857;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   .is-off[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.2);\n  background: rgba(239, 68, 68, 0.09);\n  color: #b91c1c;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.crm-idle-table-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 12px;\n  overscroll-behavior: contain;\n}\n.crm-idle-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 560px;\n  border-collapse: collapse;\n  text-align: left;\n}\n.crm-idle-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 2;\n  top: 0;\n  padding: 10px 12px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.22);\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 10px;\n  font-weight: 750;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.crm-idle-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.16);\n  color: var(--crm-text);\n  font-size: 11px;\n  vertical-align: middle;\n}\n.crm-idle-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.crm-idle-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(14, 165, 233, 0.04);\n}\n.crm-idle-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .crm-idle-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%], .crm-idle-table-appliance[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-idle-table-appliance[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.crm-idle-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .crm-idle-table-appliance[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  max-width: 240px;\n  margin-top: 3px;\n  overflow: hidden;\n  color: var(--crm-muted);\n  font-size: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-idle-table-appliance[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  min-width: 190px;\n}\n.crm-idle-table-appliance[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.crm-idle-table-evidence[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.crm-idle-control-column[_ngcontent-%COMP%] {\n  width: 120px;\n  text-align: right !important;\n}\n.crm-idle-command-sending[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: #0369a1;\n  font-size: 11px;\n  font-weight: 700;\n}\n.crm-idle-command-sending[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_crm-spin 0.8s linear infinite;\n}\n.dark[_nghost-%COMP%]   .crm-idle-table-wrap[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-idle-table-wrap[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n}\n.dark[_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .crm-idle-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(14, 165, 233, 0.08);\n}\n.crm-idle-empty-state[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  gap: 13px;\n  min-height: 190px;\n  text-align: left;\n}\n.crm-idle-empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #334155;\n  font-size: 14px;\n}\n.crm-idle-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n}\n.crm-suggestions-launcher[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px;\n  border: 1px solid rgba(111, 75, 216, 0.22);\n  text-align: left;\n  color: inherit;\n  cursor: pointer;\n  background:\n    radial-gradient(\n      circle at 90% 10%,\n      var(--crm-primary-soft),\n      transparent 42%),\n    var(--crm-card);\n  transition:\n    transform 180ms ease,\n    box-shadow 180ms ease,\n    border-color 180ms ease;\n}\n.crm-suggestions-launcher[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(111, 75, 216, 0.48);\n  box-shadow: 0 18px 35px rgba(111, 75, 216, 0.13);\n}\n.crm-suggestions-launcher-top[_ngcontent-%COMP%], .crm-suggestions-launcher-action[_ngcontent-%COMP%], .crm-suggestions-launcher-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.crm-suggestions-launcher-top[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.crm-live-indicator[_ngcontent-%COMP%], .crm-drawer-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #047857;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.crm-live-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .crm-drawer-eyebrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.12);\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%] {\n  gap: 12px;\n  margin: 26px 0 20px;\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  min-width: 64px;\n  font-size: 52px;\n  line-height: 0.95;\n  color: var(--crm-primary);\n  letter-spacing: -0.06em;\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: var(--crm-text);\n  font-size: 17px;\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-muted);\n  font-size: 11px;\n  line-height: 1.5;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 10px 11px;\n  border-radius: 11px;\n  background: var(--crm-surface);\n  color: var(--crm-muted);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 18px;\n  line-height: 1;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-critical[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-critical[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-warning[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.08);\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #0369a1;\n}\n.crm-suggestions-launcher-action[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-top: 18px;\n  padding-top: 16px;\n  border-top: 1px solid var(--crm-border);\n  color: var(--crm-primary);\n  font-size: 13px;\n  font-weight: 700;\n}\n.crm-suggestion-drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  background: rgba(15, 23, 42, 0.42);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.crm-suggestion-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1110;\n  display: flex;\n  flex-direction: column;\n  width: min(520px, 94vw);\n  height: 100vh;\n  background: #fff;\n  box-shadow: -24px 0 70px rgba(15, 23, 42, 0.22);\n  transform: translateX(105%);\n  transition: transform 220ms ease;\n  pointer-events: none;\n}\n.crm-suggestion-drawer.is-open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  pointer-events: auto;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 26px 26px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 5px;\n  color: #0f172a;\n  font-size: 24px;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 30px;\n  height: 30px;\n  margin-left: 7px;\n  border-radius: 9px;\n  background: #fef3c7;\n  color: #b45309;\n  font-size: 15px;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.crm-drawer-close[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 11px;\n  background: #f1f5f9;\n  color: #334155;\n  cursor: pointer;\n  font-size: 20px;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  padding: 16px 26px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px;\n  border-radius: 11px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #0f172a;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 11px;\n}\n.crm-suggestion-drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 20px 30px;\n}\n.crm-suggestion-drawer-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 13px;\n  padding: 16px;\n  margin-bottom: 12px;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #38bdf8;\n  border-radius: 14px;\n  background: #fff;\n}\n.crm-suggestion-drawer-item.is-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.crm-suggestion-drawer-item.is-critical[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.crm-suggestion-context[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-top: 10px;\n}\n.crm-suggestion-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 7px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 10px;\n}\n.crm-drawer-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 320px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.crm-drawer-empty[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  color: #10b981;\n  font-size: 48px;\n}\n.crm-drawer-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.crm-drawer-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 330px;\n  margin: 7px 0 0;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.dark[_nghost-%COMP%]   .crm-confirmed-idle-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-confirmed-idle-row[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-severity-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-severity-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-item[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #111827;\n  border-color: rgba(148, 163, 184, 0.2);\n}\n.dark[_nghost-%COMP%]   .crm-suggestions-launcher[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestions-launcher[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 90% 10%,\n      var(--crm-primary-soft),\n      transparent 42%),\n    var(--crm-card);\n}\n.dark[_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-idle-empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-idle-empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #0f172a;\n}\n@media (max-width: 720px) {\n  .crm-idle-insight-card[_ngcontent-%COMP%], .crm-suggestions-launcher[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    min-width: 62px;\n    font-size: 50px;\n  }\n  .crm-idle-table[_ngcontent-%COMP%] {\n    min-width: 560px;\n  }\n  .crm-suggestion-drawer-header[_ngcontent-%COMP%], .crm-suggestion-drawer-summary[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n}\n/*# sourceMappingURL=crm.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnergyDeepDiveComponent, { className: "EnergyDeepDiveComponent", filePath: "src\\app\\components\\dashboards\\crm\\energy-deep-dive\\energy-deep-dive.component.ts", lineNumber: 67 });
})();
export {
  EnergyDeepDiveComponent
};
//# sourceMappingURL=chunk-74OGTY2U.js.map
