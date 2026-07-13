import {
  ReportingTimezoneService
} from "./chunk-LMRTHEWX.js";
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
  DefaultValueAccessor,
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
import {
  ToastrService
} from "./chunk-SFDR4GMF.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-5DAVUJF5.js";
import "./chunk-EQ2Y7ZIZ.js";
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  CommonModule,
  DecimalPipe,
  HttpClient,
  HttpParams,
  NgForOf,
  NgIf,
  SlicePipe,
  TitleCasePipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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

// src/app/components/dashboards/crm/historical-data-explorer/historical-data-explorer.service.ts
var HistoricalDataExplorerService = class _HistoricalDataExplorerService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.baseUrl}/historical-data`;
  }
  preview(level, id, from, to, interval, timeZone) {
    return this.http.get(`${this.baseUrl}/${level}/${id}`, {
      params: this.params(from, to, interval, timeZone)
    });
  }
  exportCsv(level, id, from, to, interval, timeZone) {
    return this.http.get(`${this.baseUrl}/${level}/${id}/export`, {
      params: this.params(from, to, interval, timeZone),
      observe: "response",
      responseType: "blob"
    });
  }
  params(from, to, interval, timeZone) {
    return new HttpParams().set("from", from).set("to", to).set("interval", interval).set("timeZone", timeZone).set("_ts", Date.now().toString());
  }
  static {
    this.\u0275fac = function HistoricalDataExplorerService_Factory(t) {
      return new (t || _HistoricalDataExplorerService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistoricalDataExplorerService, factory: _HistoricalDataExplorerService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/dashboards/crm/historical-data-explorer/historical-data-explorer.component.ts
function HistoricalDataExplorerComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
function HistoricalDataExplorerComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function HistoricalDataExplorerComponent_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.useDetectedTimezone());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Use detected ", ctx_r2.detectedTimezone, " ");
  }
}
function HistoricalDataExplorerComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function HistoricalDataExplorerComponent_section_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "article")(2, "small");
    \u0275\u0275text(3, "Data points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "article")(11, "small");
    \u0275\u0275text(12, "Sensors included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Within selected scope");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "article")(18, "small");
    \u0275\u0275text(19, "Total energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "For selected range");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "article")(26, "small");
    \u0275\u0275text(27, "Applied timezone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, "Confirmed reporting boundary");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, ctx_r2.preview.pointCount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 7, ctx_r2.preview.interval), " rows");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.preview.sensorCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 9, ctx_r2.totalEnergy, "1.0-3"), " kWh");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.preview.timeZone);
  }
}
function HistoricalDataExplorerComponent_section_60_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(point_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r5.bucketStartLocal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 8, point_r5.energyKwh, "1.0-4"), " kWh");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 11, point_r5.averageActivePowerW, "1.0-1"), " W");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 14, point_r5.maximumActivePowerW, "1.0-1"), " W");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 17, point_r5.averageVoltageV, "1.0-1"), " V");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 20, point_r5.averagePowerFactor, "1.0-3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 23, point_r5.sampleCount));
  }
}
function HistoricalDataExplorerComponent_section_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24)(1, "div", 25)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 26)(8, "table")(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Energy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Avg power");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Peak power");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Voltage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "PF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Samples");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, HistoricalDataExplorerComponent_section_60_tr_26_Template, 24, 25, "tr", 27);
    \u0275\u0275pipe(27, "slice");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Showing the first 12 rows. The CSV contains all ", ctx_r2.preview == null ? null : ctx_r2.preview.pointCount, " rows.");
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(27, 2, ctx_r2.preview == null ? null : ctx_r2.preview.points, 0, 12));
  }
}
var HistoricalDataExplorerComponent = class _HistoricalDataExplorerComponent {
  constructor(api, users, route, reportingTimezone, toast) {
    this.api = api;
    this.users = users;
    this.route = route;
    this.reportingTimezone = reportingTimezone;
    this.toast = toast;
    this.level = "business";
    this.entityId = "";
    this.entityName = "Business";
    this.fromDate = "";
    this.toDate = "";
    this.interval = "day";
    this.timezone = "UTC";
    this.detectedTimezone = "UTC";
    this.timezoneConfirmed = false;
    this.timezones = [];
    this.loading = false;
    this.exporting = false;
    this.intervals = [
      { value: "15minute", label: "Every 15 minutes", description: "Maximum 31 days" },
      { value: "hour", label: "Hourly", description: "Maximum 1 year" },
      { value: "day", label: "Daily", description: "Maximum 3 years" },
      { value: "month", label: "Monthly", description: "Maximum 3 years" }
    ];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const user = yield this.users.user$;
      const requestedLevel = this.route.snapshot.queryParamMap.get("level");
      this.level = this.isLevel(requestedLevel) ? requestedLevel : "business";
      this.entityId = this.route.snapshot.queryParamMap.get("id") || user?.fkBusiness || "";
      this.entityName = this.route.snapshot.queryParamMap.get("name") || this.level;
      this.detectedTimezone = this.reportingTimezone.detectedTimezone;
      this.timezone = this.reportingTimezone.appliedTimezone;
      this.timezoneConfirmed = this.reportingTimezone.isConfirmed;
      this.timezones = this.reportingTimezone.getSupportedTimezones();
      if (!this.timezones.includes(this.timezone))
        this.timezones = [this.timezone, ...this.timezones];
      this.setDefaultRange();
      if (!this.entityId) {
        this.toast.error("A dashboard scope is required for historical export.");
        return;
      }
      if (this.timezoneConfirmed)
        this.loadPreview();
    });
  }
  confirmTimezone(value = this.timezone) {
    if (!this.reportingTimezone.confirm(value)) {
      this.toast.error("Select a valid reporting timezone.");
      return;
    }
    this.timezone = value;
    this.timezoneConfirmed = true;
    this.toast.success(`Reporting timezone confirmed as ${value}.`);
    this.loadPreview();
  }
  useDetectedTimezone() {
    this.timezone = this.detectedTimezone;
    this.confirmTimezone(this.detectedTimezone);
  }
  loadPreview() {
    if (!this.validate())
      return;
    this.loading = true;
    const range = this.buildRange();
    this.api.preview(this.level, this.entityId, range.from, range.to, this.interval, this.timezone).subscribe({
      next: (response) => {
        this.preview = response;
        this.entityName = response.entityName || this.entityName;
        this.loading = false;
      },
      error: (error) => {
        this.preview = void 0;
        this.loading = false;
        this.toast.error(error?.error?.message || "Historical preview could not be loaded.");
      }
    });
  }
  downloadCsv() {
    if (!this.validate())
      return;
    this.exporting = true;
    const range = this.buildRange();
    this.api.exportCsv(this.level, this.entityId, range.from, range.to, this.interval, this.timezone).subscribe({
      next: (response) => {
        const blob = response.body;
        if (!blob) {
          this.exporting = false;
          this.toast.error("The CSV response was empty.");
          return;
        }
        const disposition = response.headers.get("content-disposition") || "";
        const match = /filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(disposition);
        const fileName = match ? decodeURIComponent(match[1]) : `energy-${this.interval}.csv`;
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = fileName;
        anchor.click();
        URL.revokeObjectURL(url);
        this.exporting = false;
      },
      error: (error) => {
        this.exporting = false;
        this.toast.error(error?.error?.message || "CSV export could not be created.");
      }
    });
  }
  get totalEnergy() {
    return this.preview?.points.reduce((sum, point) => sum + point.energyKwh, 0) || 0;
  }
  get intervalLimitText() {
    return this.intervals.find((item) => item.value === this.interval)?.description || "";
  }
  validate() {
    if (!this.entityId || !this.fromDate || !this.toDate)
      return false;
    const from = /* @__PURE__ */ new Date(`${this.fromDate}T00:00:00`);
    const to = /* @__PURE__ */ new Date(`${this.toDate}T00:00:00`);
    if (!Number.isFinite(from.getTime()) || !Number.isFinite(to.getTime()) || to < from) {
      this.toast.error("Choose a valid date range.");
      return false;
    }
    const days = (to.getTime() - from.getTime()) / 864e5 + 1;
    if (days > 1098) {
      this.toast.error("The maximum historical range is three years.");
      return false;
    }
    if (this.interval === "15minute" && days > 31) {
      this.toast.error("15-minute exports are limited to 31 days.");
      return false;
    }
    if (this.interval === "hour" && days > 366) {
      this.toast.error("Hourly exports are limited to one year.");
      return false;
    }
    if (!this.timezoneConfirmed) {
      this.toast.warning("Confirm the reporting timezone before requesting historical data.");
      return false;
    }
    return true;
  }
  buildRange() {
    const exclusiveEnd = /* @__PURE__ */ new Date(`${this.toDate}T00:00:00`);
    exclusiveEnd.setDate(exclusiveEnd.getDate() + 1);
    return {
      from: `${this.fromDate}T00:00:00`,
      to: this.localDateTime(exclusiveEnd)
    };
  }
  localDateTime(value) {
    const pad = (number) => String(number).padStart(2, "0");
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}T00:00:00`;
  }
  setDefaultRange() {
    const today = /* @__PURE__ */ new Date();
    const start = new Date(today);
    start.setFullYear(start.getFullYear() - 1);
    start.setDate(start.getDate() + 1);
    const date = (value) => {
      const pad = (number) => String(number).padStart(2, "0");
      return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
    };
    this.fromDate = date(start);
    this.toDate = date(today);
  }
  isLevel(value) {
    return !!value && ["business", "facility", "building", "floor", "section", "office", "device", "sensor"].includes(value);
  }
  static {
    this.\u0275fac = function HistoricalDataExplorerComponent_Factory(t) {
      return new (t || _HistoricalDataExplorerComponent)(\u0275\u0275directiveInject(HistoricalDataExplorerService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ReportingTimezoneService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoricalDataExplorerComponent, selectors: [["app-historical-data-explorer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 27, consts: [[1, "history-page"], [1, "history-hero"], [1, "history-eyebrow"], [1, "ri-file-chart-line"], ["routerLink", "/dashboard/crm", 1, "history-back"], [1, "ri-arrow-left-line"], [1, "history-timezone"], [1, "timezone-actions"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], ["type", "button", "class", "secondary", 3, "click", 4, "ngIf"], [1, "history-panel"], [1, "history-panel-head"], [1, "history-form"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "history-form-actions"], ["type", "button", 1, "preview-button", 3, "click", "disabled"], ["type", "button", 1, "export-button", 3, "click", "disabled"], ["class", "history-summary", 4, "ngIf"], ["class", "history-table-card", 4, "ngIf"], [3, "value"], ["type", "button", 1, "secondary", 3, "click"], [1, "history-summary"], [1, "history-table-card"], [1, "history-table-head"], [1, "history-table-wrap"], [4, "ngFor", "ngForOf"]], template: function HistoricalDataExplorerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
        \u0275\u0275element(4, "i", 3);
        \u0275\u0275text(5, " Historical data explorer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "Energy CSV Export");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Choose a range, reporting interval and confirmed timezone. The maximum range is three years.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "a", 4);
        \u0275\u0275element(11, "i", 5);
        \u0275\u0275text(12, "CRM Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "section", 6)(14, "div")(15, "strong");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, "UTC sensor timestamps are grouped into days and months using the timezone you confirm here.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7)(20, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function HistoricalDataExplorerComponent_Template_select_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.timezone, $event) || (ctx.timezone = $event);
          return $event;
        });
        \u0275\u0275template(21, HistoricalDataExplorerComponent_option_21_Template, 2, 2, "option", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 10);
        \u0275\u0275listener("click", function HistoricalDataExplorerComponent_Template_button_click_22_listener() {
          return ctx.confirmTimezone();
        });
        \u0275\u0275text(23, "Confirm");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, HistoricalDataExplorerComponent_button_24_Template, 2, 1, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "section", 12)(26, "div", 13)(27, "div")(28, "small");
        \u0275\u0275text(29, "Selected scope");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h2");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "titlecase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "titlecase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 14)(39, "label")(40, "span");
        \u0275\u0275text(41, "From date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function HistoricalDataExplorerComponent_Template_input_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "label")(44, "span");
        \u0275\u0275text(45, "To date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function HistoricalDataExplorerComponent_Template_input_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "label")(48, "span");
        \u0275\u0275text(49, "Interval");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function HistoricalDataExplorerComponent_Template_select_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.interval, $event) || (ctx.interval = $event);
          return $event;
        });
        \u0275\u0275template(51, HistoricalDataExplorerComponent_option_51_Template, 2, 2, "option", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 16)(53, "button", 17);
        \u0275\u0275listener("click", function HistoricalDataExplorerComponent_Template_button_click_53_listener() {
          return ctx.loadPreview();
        });
        \u0275\u0275element(54, "i");
        \u0275\u0275text(55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 18);
        \u0275\u0275listener("click", function HistoricalDataExplorerComponent_Template_button_click_56_listener() {
          return ctx.downloadCsv();
        });
        \u0275\u0275element(57, "i");
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(59, HistoricalDataExplorerComponent_section_59_Template, 32, 12, "section", 19)(60, HistoricalDataExplorerComponent_section_60_Template, 28, 6, "section", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("is-confirmed", ctx.timezoneConfirmed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.timezoneConfirmed ? "Reporting timezone confirmed" : "Timezone confirmation required");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.timezones);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.detectedTimezone !== ctx.timezone);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 23, ctx.entityName));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 25, ctx.level));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.intervalLimitText);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.interval);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.intervals);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading || !ctx.timezoneConfirmed);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.loading ? "ri-loader-4-line spin" : "ri-search-eye-line");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", ctx.loading ? "Loading..." : "Preview", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.exporting || !ctx.timezoneConfirmed);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.exporting ? "ri-loader-4-line spin" : "ri-download-cloud-2-line");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", ctx.exporting ? "Preparing..." : "Download CSV", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preview == null ? null : ctx.preview.points == null ? null : ctx.preview.points.length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DecimalPipe, TitleCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, MaterialModuleModule], styles: ["\n\n.history-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: #f6f7fb;\n  color: #172033;\n}\n.history-hero[_ngcontent-%COMP%], .history-panel[_ngcontent-%COMP%], .history-timezone[_ngcontent-%COMP%], .history-table-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e7eaf1;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(30, 41, 59, 0.05);\n}\n.history-hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  align-items: center;\n  padding: 26px 30px;\n  margin-bottom: 18px;\n}\n.history-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 5px 0 6px;\n  font-size: 28px;\n}\n.history-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.history-eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #845adf !important;\n}\n.history-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  background: #f1edfb;\n  color: #6941c6;\n  text-decoration: none;\n  font-weight: 700;\n}\n.history-timezone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 18px 22px;\n  margin-bottom: 18px;\n  border-left: 4px solid #f5b849;\n}\n.history-timezone.is-confirmed[_ngcontent-%COMP%] {\n  border-left-color: #26bf94;\n}\n.history-timezone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n}\n.timezone-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.timezone-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .history-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .history-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 42px;\n  border: 1px solid #dce1eb;\n  border-radius: 9px;\n  padding: 0 11px;\n  background: #fff;\n}\n.timezone-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .history-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 9px;\n  padding: 11px 15px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.timezone-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #845adf;\n  color: #fff;\n}\n.timezone-actions[_ngcontent-%COMP%]   .secondary[_ngcontent-%COMP%] {\n  background: #eef1f6;\n  color: #344054;\n}\n.history-panel[_ngcontent-%COMP%] {\n  padding: 22px;\n  margin-bottom: 18px;\n}\n.history-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.history-panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n.history-panel-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .history-panel-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.history-panel-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #f1edfb;\n  color: #6941c6;\n  padding: 7px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.history-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(170px, 1fr)) auto;\n  gap: 14px;\n  align-items: end;\n}\n.history-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  font-weight: 600;\n}\n.history-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.preview-button[_ngcontent-%COMP%] {\n  background: #eef1f6;\n  color: #344054;\n}\n.export-button[_ngcontent-%COMP%] {\n  background: #26bf94;\n  color: #fff;\n}\n.history-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.history-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.history-summary[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e7eaf1;\n  border-radius: 14px;\n  padding: 18px;\n}\n.history-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.history-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  margin: 7px 0;\n}\n.history-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #94a3b8;\n  font-size: 12px;\n}\n.history-table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.history-table-head[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  border-bottom: 1px solid #edf0f5;\n}\n.history-table-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.history-table-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n}\n.history-table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.history-table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\n.history-table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .history-table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid #edf0f5;\n  text-align: left;\n}\n.history-table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #64748b;\n  background: #fafbfc;\n}\n.history-table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_history-spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_history-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1000px) {\n  .history-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .history-form-actions[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .history-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .history-page[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .history-hero[_ngcontent-%COMP%], .history-timezone[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .history-form[_ngcontent-%COMP%], .history-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .history-form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .history-form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=historical-data-explorer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoricalDataExplorerComponent, { className: "HistoricalDataExplorerComponent", filePath: "src\\app\\components\\dashboards\\crm\\historical-data-explorer\\historical-data-explorer.component.ts", lineNumber: 20 });
})();
export {
  HistoricalDataExplorerComponent
};
//# sourceMappingURL=chunk-V2R3REQY.js.map
