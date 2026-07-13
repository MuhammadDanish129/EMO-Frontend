import {
  SharedModule
} from "./chunk-EKPEZVU2.js";
import "./chunk-LHFGODON.js";
import "./chunk-7CRJAVD7.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-HJAQN6L2.js";
import {
  SensorCommandService
} from "./chunk-AIWP64L7.js";
import {
  LiveAlertsService,
  SocketService
} from "./chunk-ULHVIHAW.js";
import "./chunk-7CONLPWZ.js";
import {
  UserService
} from "./chunk-WHOMYXFN.js";
import {
  ToastrService
} from "./chunk-SFDR4GMF.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-5DAVUJF5.js";
import "./chunk-EQ2Y7ZIZ.js";
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DecimalPipe,
  HttpClient,
  HttpParams,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  Subscription,
  forkJoin,
  map,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-AVLIJGNB.js";
import "./chunk-QURSFKIH.js";
import {
  __async
} from "./chunk-Y6Q6HMFU.js";

// src/app/components/dashboards/crm/crm.services.ts
var EnergyDashboardService = class _EnergyDashboardService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.baseUrl}/EnergyDashboard`;
  }
  getDashboardSummary(user) {
    const scope = this.resolveScope(user);
    return this.http.get(`${this.baseUrl}/crm/${scope.scope}/summary`, { params: scope.params });
  }
  getDashboardLiveOverview(user, forceRefresh = false) {
    const scope = this.resolveScope(user);
    const params = scope.params.set("forceRefresh", String(forceRefresh)).set("_ts", String(Date.now()));
    return this.http.get(`${this.baseUrl}/crm/${scope.scope}/live-overview`, { params });
  }
  getDashboardChart(user, chartType, range = "30d", fromDate, toDate) {
    const scope = this.resolveScope(user);
    let params = scope.params.set("chartType", chartType).set("range", range);
    if (range === "custom" && fromDate && toDate) {
      params = params.set("fromDate", fromDate).set("toDate", toDate);
    }
    return this.http.get(`${this.baseUrl}/crm/${scope.scope}/chart`, { params });
  }
  getDashboardSuggestions(user) {
    const scope = this.resolveScope(user);
    return this.http.get(`${this.baseUrl}/crm/${scope.scope}/suggestions`, { params: scope.params.set("_ts", String(Date.now())) });
  }
  getMonthlyDeviceTypeReport(user) {
    return this.http.get(`${this.baseUrl}/GetMonthlyDeviceTypeReport`, { params: this.buildLegacyParams(user) });
  }
  getEnergyConsumptionByDeviceTypeLast12Months(user) {
    return this.http.get(`${this.baseUrl}/GetEnergyConsumptionByDeviceTypeLast12Months`, { params: this.buildLegacyParams(user) });
  }
  getPeakNonPeakAnalysis(startDate, endDate, user) {
    let params = this.buildLegacyParams(user).set("startDate", startDate).set("endDate", endDate);
    return this.http.get(`${this.baseUrl}/GetPeakNonPeakAnalysis`, { params });
  }
  exportPeakNonPeakAnalysisCsv(startDate, endDate, user) {
    const params = this.buildLegacyParams(user).set("startDate", startDate).set("endDate", endDate);
    return this.http.get(`${this.baseUrl}/ExportPeakNonPeakAnalysisCsv`, {
      params,
      responseType: "blob"
    });
  }
  exportEnergyConsumptionByDeviceTypeCsv(user) {
    return this.http.get(`${this.baseUrl}/ExportEnergyConsumptionByDeviceTypeCsv`, {
      params: this.buildLegacyParams(user),
      responseType: "blob"
    });
  }
  resolveScope(user) {
    const businessId = user?.fkBusiness || "";
    const userId = user?.userId || "";
    const isTenant = Number(user?.userTypeLevel) === 2;
    if (isTenant) {
      let params = new HttpParams().set("tenantId", userId);
      if (businessId) {
        params = params.set("businessId", businessId);
      }
      return { scope: "tenant", params };
    }
    return {
      scope: "business",
      params: businessId ? new HttpParams().set("businessId", businessId) : new HttpParams()
    };
  }
  buildLegacyParams(user) {
    const scope = this.resolveScope(user ?? null);
    return scope.params;
  }
  static {
    this.\u0275fac = function EnergyDashboardService_Factory(t) {
      return new (t || _EnergyDashboardService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnergyDashboardService, factory: _EnergyDashboardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/dashboards/crm/live-optimization-suggestions.service.ts
var LiveOptimizationSuggestionsService = class _LiveOptimizationSuggestionsService {
  constructor(socketService) {
    this.socketService = socketService;
    this.suggestionsSubject = new BehaviorSubject([]);
    this.businessId = "";
    this.hasSocketSnapshot = false;
    this.suggestions$ = this.suggestionsSubject.asObservable();
    this.count$ = this.suggestions$.pipe(map((items) => items.length));
    this.handleSuggestions = (payload) => {
      if (!payload || String(payload.businessId || "") !== this.businessId) {
        return;
      }
      const items = (payload.suggestions ?? []).map((item) => this.normalizeSuggestion(item));
      this.hasSocketSnapshot = true;
      this.suggestionsSubject.next(this.sortSuggestions(items));
    };
  }
  get suggestions() {
    return this.suggestionsSubject.value;
  }
  start(businessId) {
    const cleanBusinessId = String(businessId || "").trim();
    if (!cleanBusinessId || this.businessId === cleanBusinessId) {
      return;
    }
    this.stop();
    this.businessId = cleanBusinessId;
    this.hasSocketSnapshot = false;
    this.socketService.connect();
    this.socketService.on("optimization-suggestions", this.handleSuggestions);
    this.socketService.subscribeBusiness(cleanBusinessId);
  }
  stop(clearSuggestions = true) {
    if (this.businessId) {
      this.socketService.unsubscribeBusiness(this.businessId);
    }
    this.socketService.off("optimization-suggestions", this.handleSuggestions);
    this.businessId = "";
    this.hasSocketSnapshot = false;
    if (clearSuggestions) {
      this.suggestionsSubject.next([]);
    }
  }
  replaceSnapshot(items) {
    if (this.hasSocketSnapshot) {
      return;
    }
    this.suggestionsSubject.next(this.sortSuggestions(items ?? []));
  }
  normalizeSuggestion(item) {
    return {
      suggestionId: item.reasonCode,
      severity: item.severity || "info",
      type: item.type || "general",
      title: item.title || "Optimization suggestion",
      message: item.description || "",
      action: item.recommendation || "",
      estimatedSavingKwh: item.estimatedSavingKwh ?? null,
      estimatedSavingCost: item.estimatedSavingCost ?? null,
      sensorId: item.sensorId || "",
      sensorName: "",
      applianceId: item.applianceId || "",
      applianceName: item.affectedAppliance || "",
      utilityName: item.affectedUtility || "",
      officeName: item.affectedOffice || "",
      timeBucket: item.detectedAtUtc || "",
      canApplyAction: Boolean(item.canApplyAction),
      conflictsWithPeakHour: Boolean(item.conflictsWithPeakHour),
      reasonCode: item.reasonCode || ""
    };
  }
  sortSuggestions(items) {
    return [...items].sort((first, second) => {
      const severityDifference = this.severityRank(second.severity) - this.severityRank(first.severity);
      if (severityDifference !== 0)
        return severityDifference;
      return this.timeValue(second.timeBucket) - this.timeValue(first.timeBucket);
    });
  }
  severityRank(value) {
    switch ((value || "").toLowerCase()) {
      case "critical":
        return 4;
      case "warning":
        return 3;
      case "opportunity":
        return 2;
      case "info":
        return 1;
      default:
        return 0;
    }
  }
  timeValue(value) {
    const parsed = new Date(value || "").getTime();
    return Number.isFinite(parsed) ? parsed : 0;
  }
  static {
    this.\u0275fac = function LiveOptimizationSuggestionsService_Factory(t) {
      return new (t || _LiveOptimizationSuggestionsService)(\u0275\u0275inject(SocketService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiveOptimizationSuggestionsService, factory: _LiveOptimizationSuggestionsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/dashboards/crm/crm.component.ts
function CrmComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "div", 24);
    \u0275\u0275element(2, "span", 25);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 24);
    \u0275\u0275element(9, "i", 26);
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12, "Today\u2019s energy snapshot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275element(16, "i", 27);
    \u0275\u0275elementStart(17, "div")(18, "strong");
    \u0275\u0275text(19, "Automatic refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "Live overview refreshes every 15 seconds");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("is-connected", ctx_r0.liveAlertsService.isSocketConnected);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.liveAlertsService.isSocketConnected ? "Live stream connected" : "Live stream reconnecting");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getLastUpdateLabel(ctx_r0.lastSocketPacketAt || (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.liveUpdatedAtUtc)));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getLastUpdateLabel(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.aggregateUpdatedAtUtc));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("crm-spin-soft", ctx_r0.isLiveRefreshing);
  }
}
function CrmComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 28)(1, "div", 29)(2, "div", 30);
    \u0275\u0275element(3, "span", 31);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275element(5, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "p");
    \u0275\u0275text(8, "Preparing your live energy workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Loading current sensor health, today\u2019s consumption and optimization actions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 35);
    \u0275\u0275element(12, "i");
    \u0275\u0275elementEnd()()()();
  }
}
function CrmComponent_section_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "span");
    \u0275\u0275element(2, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h2");
    \u0275\u0275text(5, "Dashboard unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CrmComponent_div_26_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "PKR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Calculated from the configured tariff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 1, (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.estimatedCostToday) || 0, "1.0-0"), " ");
  }
}
function CrmComponent_div_26_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong", 114);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Configure a tariff to calculate cost");
    \u0275\u0275elementEnd();
  }
}
function CrmComponent_div_26_p_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Limit: ", \u0275\u0275pipeBind2(2, 1, ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.demandLimitKw, "1.0-1"), " kW ");
  }
}
function CrmComponent_div_26_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Demand limit is not configured");
    \u0275\u0275elementEnd();
  }
}
function CrmComponent_div_26_div_123_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 117)(1, "div", 118)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 92);
    \u0275\u0275element(11, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 119)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const utility_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(utility_r3.utilityName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", utility_r3.onlineSensors, " live ", utility_r3.onlineSensors === 1 ? "sensor" : "sensors", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 8, ctx_r0.getPowerValue(utility_r3.currentLoadW), "1.0-2"), " ", ctx_r0.getPowerUnit(utility_r3.currentLoadW), "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", utility_r3.percentage, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 11, utility_r3.percentage, "1.0-1"), "% of live load");
  }
}
function CrmComponent_div_26_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275template(1, CrmComponent_div_26_div_123_article_1_Template, 16, 14, "article", 116);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 1, ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.utilityLoads, 0, 6));
  }
}
function CrmComponent_div_26_ng_template_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Waiting for live utility readings.");
    \u0275\u0275elementEnd()();
  }
}
function CrmComponent_div_26_div_140_article_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 124)(1, "div", 125)(2, "span");
    \u0275\u0275element(3, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 127)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 128)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 129);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getConsumerName(item_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getConsumerLocation(item_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r0.getPowerValue(item_r4.currentLoadW), "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getPowerUnit(item_r4.currentLoadW));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 12, item_r4.voltage, "1.0-1"), " V");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("PF ", \u0275\u0275pipeBind2(21, 15, item_r4.powerFactor, "1.0-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-off", (item_r4.relayState || "").toUpperCase() === "OFF");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.relayState || "Unknown", " ");
  }
}
function CrmComponent_div_26_div_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "span");
    \u0275\u0275text(3, "Device / sensor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Live load");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Electrical health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Relay");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, CrmComponent_div_26_div_140_article_10_Template, 24, 18, "article", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.topConsumers)("ngForTrackBy", ctx_r0.trackBySensorId);
  }
}
function CrmComponent_div_26_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i", 126);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No fresh live device readings are available yet.");
    \u0275\u0275elementEnd()();
  }
}
function CrmComponent_div_26_aside_222_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275element(1, "i", 138);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Use the controls to send an ON or OFF command directly to an appliance.");
    \u0275\u0275elementEnd()();
  }
}
function CrmComponent_div_26_aside_222_div_14_article_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 151);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, item_r5.coveragePercent, "1.0-0"), "% coverage");
  }
}
function CrmComponent_div_26_aside_222_div_14_article_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152)(1, "button", 153);
    \u0275\u0275listener("click", function CrmComponent_div_26_aside_222_div_14_article_1_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.sendIdleApplianceCommand(item_r5, "ON"));
    });
    \u0275\u0275element(2, "i", 154);
    \u0275\u0275text(3, " On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 155);
    \u0275\u0275listener("click", function CrmComponent_div_26_aside_222_div_14_article_1_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.sendIdleApplianceCommand(item_r5, "OFF"));
    });
    \u0275\u0275element(5, "i", 156);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isIdleApplianceCommanding(item_r5));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isIdleApplianceCommanding(item_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isIdleApplianceCommanding(item_r5) ? "Sending" : "Off", "");
  }
}
function CrmComponent_div_26_aside_222_div_14_article_1_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1, "Idle");
    \u0275\u0275elementEnd();
  }
}
function CrmComponent_div_26_aside_222_div_14_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 141)(1, "span", 142);
    \u0275\u0275element(2, "i", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 144)(4, "div", 145)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 146);
    \u0275\u0275element(8, "i", 147);
    \u0275\u0275text(9, " Idle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 148)(13, "span");
    \u0275\u0275element(14, "i", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CrmComponent_div_26_aside_222_div_14_article_1_span_16_Template, 4, 4, "span", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CrmComponent_div_26_aside_222_div_14_article_1_div_17_Template, 7, 3, "div", 150)(18, CrmComponent_div_26_aside_222_div_14_article_1_ng_template_18_Template, 2, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const idleOnlyStatus_r7 = \u0275\u0275reference(19);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r5.applianceName || item_r5.sensorName || "Idle appliance");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r5.message || item_r5.action || "Stable standby usage detected");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getIdleEvidenceLabel(item_r5), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.coveragePercent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canControlIdleAppliance(item_r5))("ngIfElse", idleOnlyStatus_r7);
  }
}
function CrmComponent_div_26_aside_222_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275template(1, CrmComponent_div_26_aside_222_div_14_article_1_Template, 20, 6, "article", 140);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const idleAlerts_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", idleAlerts_r8);
  }
}
function CrmComponent_div_26_aside_222_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "No idle appliances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "New idle devices will appear here as live alerts arrive.");
    \u0275\u0275elementEnd()()();
  }
}
function CrmComponent_div_26_aside_222_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 131)(1, "header", 54)(2, "div", 55)(3, "span", 56);
    \u0275\u0275element(4, "i", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7, "Idle appliances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Appliances currently reported as idle by live monitoring.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 133);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 134);
    \u0275\u0275template(13, CrmComponent_div_26_aside_222_div_13_Template, 4, 0, "div", 135)(14, CrmComponent_div_26_aside_222_div_14_Template, 2, 1, "div", 136)(15, CrmComponent_div_26_aside_222_ng_template_15_Template, 7, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const idleAlerts_r8 = ctx.ngIf;
    const noIdleAppliances_r9 = \u0275\u0275reference(16);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(idleAlerts_r8.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", idleAlerts_r8.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", idleAlerts_r8.length > 0)("ngIfElse", noIdleAppliances_r9);
  }
}
function CrmComponent_div_26_div_256_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275listener("click", function CrmComponent_div_26_div_256_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeSuggestionsPanel());
    });
    \u0275\u0275elementEnd();
  }
}
function CrmComponent_div_26_div_287_article_1_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 126);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", suggestion_r11.applianceName, "");
  }
}
function CrmComponent_div_26_div_287_article_1_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 170);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", suggestion_r11.officeName, "");
  }
}
function CrmComponent_div_26_div_287_article_1_div_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", suggestion_r11.utilityName, "");
  }
}
function CrmComponent_div_26_div_287_article_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275template(1, CrmComponent_div_26_div_287_article_1_div_11_span_1_Template, 3, 1, "span", 149)(2, CrmComponent_div_26_div_287_article_1_div_11_span_2_Template, 3, 1, "span", 149)(3, CrmComponent_div_26_div_287_article_1_div_11_span_3_Template, 3, 1, "span", 149);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", suggestion_r11.applianceName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", suggestion_r11.officeName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", suggestion_r11.utilityName);
  }
}
function CrmComponent_div_26_div_287_article_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171);
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const suggestion_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(suggestion_r11.action);
  }
}
function CrmComponent_div_26_div_287_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 163)(1, "span", 164);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 165)(4, "div", 166)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CrmComponent_div_26_div_287_article_1_div_11_Template, 4, 3, "div", 167)(12, CrmComponent_div_26_div_287_article_1_div_12_Template, 4, 1, "div", 168);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const suggestion_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-critical", (suggestion_r11.severity || "").toLowerCase() === "critical")("is-warning", (suggestion_r11.severity || "").toLowerCase() === "warning");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getSuggestionIcon(suggestion_r11));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(suggestion_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestion_r11.severity || "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestion_r11.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", suggestion_r11.applianceName || suggestion_r11.officeName || suggestion_r11.utilityName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", suggestion_r11.action);
  }
}
function CrmComponent_div_26_div_287_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275template(1, CrmComponent_div_26_div_287_article_1_Template, 13, 11, "article", 162);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.suggestions);
  }
}
function CrmComponent_div_26_ng_template_288_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "No active optimization suggestions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "The worker will add recommendations here when a stable condition is confirmed.");
    \u0275\u0275elementEnd()();
  }
}
function CrmComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "section", 39)(2, "div", 40)(3, "article", 41)(4, "div", 42);
    \u0275\u0275element(5, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "span");
    \u0275\u0275text(8, "Energy today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementStart(12, "small");
    \u0275\u0275text(13, "kWh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "From midnight to the latest stored reading");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "article", 45)(18, "div", 42);
    \u0275\u0275element(19, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43)(21, "span");
    \u0275\u0275text(22, "Current live load");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Sum of fresh readings from online sensors");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "article", 46)(32, "div", 42);
    \u0275\u0275element(33, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 43)(35, "span");
    \u0275\u0275text(36, "Cost today");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, CrmComponent_div_26_ng_container_37_Template, 8, 4, "ng-container", 48)(38, CrmComponent_div_26_ng_template_38_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "article", 49)(42, "div", 42);
    \u0275\u0275element(43, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 43)(45, "span");
    \u0275\u0275text(46, "Sensor health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48);
    \u0275\u0275elementStart(49, "small");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "p");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "article", 41)(55, "div", 42);
    \u0275\u0275element(56, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 43)(58, "span");
    \u0275\u0275text(59, "Peak demand today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "number");
    \u0275\u0275elementStart(63, "small");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(65, CrmComponent_div_26_p_65_Template, 3, 4, "p", 48)(66, CrmComponent_div_26_ng_template_66_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "i", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "section", 52)(70, "article", 53)(71, "header", 54)(72, "div", 55)(73, "span", 56);
    \u0275\u0275element(74, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div")(76, "h2");
    \u0275\u0275text(77, "Live consumption");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79, "Total demand from fresh live sensor readings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "span", 58);
    \u0275\u0275element(81, "i", 59);
    \u0275\u0275text(82, " Live");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 60)(84, "div")(85, "small");
    \u0275\u0275text(86, "Current demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div")(91, "small");
    \u0275\u0275text(92, "Energy since opening");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "strong");
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div")(97, "small");
    \u0275\u0275text(98, "Average power factor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "strong");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div")(103, "small");
    \u0275\u0275text(104, "Average voltage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "strong");
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "div", 61);
    \u0275\u0275element(109, "apx-chart", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p", 63);
    \u0275\u0275element(111, "i", 64);
    \u0275\u0275text(112, " \u201CEnergy since opening\u201D is calculated from positive changes in cumulative live meter readings and resets when this page is reopened. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "article", 65)(114, "header", 54)(115, "div", 55)(116, "span", 66);
    \u0275\u0275element(117, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div")(119, "h2");
    \u0275\u0275text(120, "Current load by utility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "p");
    \u0275\u0275text(122, "Where the live electrical load is being used now.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(123, CrmComponent_div_26_div_123_Template, 3, 5, "div", 68)(124, CrmComponent_div_26_ng_template_124_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "section", 69)(127, "article", 70)(128, "header", 54)(129, "div", 55)(130, "span", 71);
    \u0275\u0275element(131, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div")(133, "h2");
    \u0275\u0275text(134, "Top active devices now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "p");
    \u0275\u0275text(136, "Highest live power consumers across the selected business scope.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(137, "a", 73);
    \u0275\u0275text(138, "View all ");
    \u0275\u0275element(139, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(140, CrmComponent_div_26_div_140_Template, 11, 2, "div", 75)(141, CrmComponent_div_26_ng_template_141_Template, 4, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "aside", 76)(144, "article", 77)(145, "header", 54)(146, "div", 55)(147, "span", 78);
    \u0275\u0275element(148, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div")(150, "h2");
    \u0275\u0275text(151, "System health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "p");
    \u0275\u0275text(153, "Freshness of all configured sensors.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "strong", 80);
    \u0275\u0275text(155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 81);
    \u0275\u0275element(157, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 82)(159, "div", 83)(160, "strong");
    \u0275\u0275text(161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "span");
    \u0275\u0275text(163, "Online");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 84)(165, "strong");
    \u0275\u0275text(166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "span");
    \u0275\u0275text(168, "Delayed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div", 85)(170, "strong");
    \u0275\u0275text(171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "span");
    \u0275\u0275text(173, "Offline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "div", 86)(175, "strong");
    \u0275\u0275text(176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "span");
    \u0275\u0275text(178, "Never connected");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(179, "p", 87);
    \u0275\u0275text(180);
    \u0275\u0275pipe(181, "number");
    \u0275\u0275pipe(182, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "article", 88)(184, "header", 54)(185, "div", 55)(186, "span", 66);
    \u0275\u0275element(187, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "div")(189, "h2");
    \u0275\u0275text(190, "Optimization readiness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "p");
    \u0275\u0275text(192, "Configuration required for trusted actions.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(193, "span", 90);
    \u0275\u0275text(194);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "div", 91)(196, "strong");
    \u0275\u0275text(197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "div", 92);
    \u0275\u0275element(199, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(200, "div", 93)(201, "div")(202, "span");
    \u0275\u0275text(203, "Tariff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "strong");
    \u0275\u0275text(205);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(206, "div")(207, "span");
    \u0275\u0275text(208, "Demand limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "strong");
    \u0275\u0275text(210);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(211, "div")(212, "span");
    \u0275\u0275text(213, "Appliance assignments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(214, "strong");
    \u0275\u0275text(215);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "div")(217, "span");
    \u0275\u0275text(218, "Optimization profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "strong");
    \u0275\u0275text(220);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(221, "section", 94);
    \u0275\u0275template(222, CrmComponent_div_26_aside_222_Template, 17, 4, "aside", 95);
    \u0275\u0275pipe(223, "async");
    \u0275\u0275elementStart(224, "button", 96);
    \u0275\u0275listener("click", function CrmComponent_div_26_Template_button_click_224_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openSuggestionsPanel());
    });
    \u0275\u0275elementStart(225, "div", 97)(226, "span", 71);
    \u0275\u0275element(227, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "span", 99);
    \u0275\u0275element(229, "i");
    \u0275\u0275text(230, " Live");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "div", 100)(232, "strong");
    \u0275\u0275text(233);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(234, "div")(235, "h2");
    \u0275\u0275text(236, "Active suggestions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "p");
    \u0275\u0275text(238, "Generated continuously from stable sensor evidence.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(239, "div", 101)(240, "span", 102)(241, "b");
    \u0275\u0275text(242);
    \u0275\u0275elementEnd();
    \u0275\u0275text(243, " Critical");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "span", 103)(245, "b");
    \u0275\u0275text(246);
    \u0275\u0275elementEnd();
    \u0275\u0275text(247, " Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "span", 104)(249, "b");
    \u0275\u0275text(250);
    \u0275\u0275elementEnd();
    \u0275\u0275text(251, " Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(252, "div", 105)(253, "span");
    \u0275\u0275text(254);
    \u0275\u0275elementEnd();
    \u0275\u0275element(255, "i", 74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(256, CrmComponent_div_26_div_256_Template, 1, 0, "div", 106);
    \u0275\u0275elementStart(257, "aside", 107)(258, "header", 108)(259, "div")(260, "span", 109);
    \u0275\u0275element(261, "i");
    \u0275\u0275text(262, " Live optimization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(263, "h2");
    \u0275\u0275text(264, "Active suggestions ");
    \u0275\u0275elementStart(265, "b");
    \u0275\u0275text(266);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(267, "p");
    \u0275\u0275text(268, "Recommendations update automatically as confirmed sensor conditions change.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(269, "button", 110);
    \u0275\u0275listener("click", function CrmComponent_div_26_Template_button_click_269_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuggestionsPanel());
    });
    \u0275\u0275element(270, "i", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(271, "div", 112)(272, "span", 102)(273, "b");
    \u0275\u0275text(274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(275, "small");
    \u0275\u0275text(276, "Critical");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(277, "span", 103)(278, "b");
    \u0275\u0275text(279);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(280, "small");
    \u0275\u0275text(281, "Warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(282, "span", 104)(283, "b");
    \u0275\u0275text(284);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(285, "small");
    \u0275\u0275text(286, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(287, CrmComponent_div_26_div_287_Template, 2, 1, "div", 113)(288, CrmComponent_div_26_ng_template_288_Template, 6, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tariffMissing_r12 = \u0275\u0275reference(39);
    const demandMissing_r13 = \u0275\u0275reference(67);
    const noUtilityLoad_r14 = \u0275\u0275reference(125);
    const noConsumers_r15 = \u0275\u0275reference(142);
    const noLiveSuggestions_r16 = \u0275\u0275reference(289);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 70, (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.energyTodayKwh) || 0, "1.0-2"), " ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 73, ctx_r0.getPowerValue(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.currentLoadW), "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getPowerUnit(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.currentLoadW));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.costConfigured)("ngIfElse", tariffMissing_r12);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.onlineSensors) || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.totalSensors) || 0, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.delayedSensors) || 0, " delayed \xB7 ", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.offlineSensors) || 0, " offline");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(62, 76, ctx_r0.getPowerValue(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.peakDemandTodayW), "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getPowerUnit(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.peakDemandTodayW));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.demandLimitConfigured)("ngIfElse", demandMissing_r13);
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(89, 79, ctx_r0.getPowerValue(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.currentLoadW), "1.0-2"), " ", ctx_r0.getPowerUnit(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.currentLoadW), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(95, 82, ctx_r0.liveSessionEnergyKwh, "1.0-4"), " kWh");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(101, 85, (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.averagePowerFactor) || 0, "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(107, 88, (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.averageVoltage) || 0, "1.0-1"), " V");
    \u0275\u0275advance(3);
    \u0275\u0275property("series", ctx_r0.liveLoadChart.series)("chart", ctx_r0.liveLoadChart.chart)("xaxis", ctx_r0.liveLoadChart.xaxis)("yaxis", ctx_r0.liveLoadChart.yaxis)("stroke", ctx_r0.liveLoadChart.stroke)("dataLabels", ctx_r0.liveLoadChart.dataLabels)("tooltip", ctx_r0.liveLoadChart.tooltip)("fill", ctx_r0.liveLoadChart.fill);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.utilityLoads == null ? null : ctx_r0.liveOverview.utilityLoads.length)("ngIfElse", noUtilityLoad_r14);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.topConsumers == null ? null : ctx_r0.liveOverview.topConsumers.length)("ngIfElse", noConsumers_r15);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", ctx_r0.getSensorHealthPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getSensorHealthPercent(), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.onlineSensors) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.delayedSensors) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.offlineSensors) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.neverConnectedSensors) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Online \u2264 ", \u0275\u0275pipeBind2(181, 91, ((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.onlineThresholdSeconds) || 180) / 60, "1.0-0"), " min \xB7 Delayed \u2264 ", \u0275\u0275pipeBind2(182, 94, ((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.delayedThresholdSeconds) || 600) / 60, "1.0-0"), " min ");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngClass", ctx_r0.getReadinessClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getReadinessLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.optimizationReadinessPercent) || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.optimizationReadinessPercent) || 0, "%");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-missing", !(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.tariffConfigured));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.tariffConfigured) ? "Configured" : "Missing");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-missing", !(ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.demandLimitConfigured));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.demandLimitConfigured) ? "Configured" : "Missing");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.assignedSensors) || 0, " / ", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.totalSensors) || 0, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.configuredOptimizationSensors) || 0, " / ", (ctx_r0.liveOverview == null ? null : ctx_r0.liveOverview.totalSensors) || 0, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(223, 97, ctx_r0.liveAlertsService.idleAlerts$));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Open " + ctx_r0.suggestions.length + " active optimization suggestions");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.suggestions.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.getSuggestionSeverityCount("critical"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getSuggestionSeverityCount("warning"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getSuggestionSeverityCount("info") + ctx_r0.getSuggestionSeverityCount("opportunity"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.suggestions.length ? "Review live recommendations" : "Open optimization details");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isSuggestionsPanelOpen);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-open", ctx_r0.isSuggestionsPanelOpen);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.suggestions.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getSuggestionSeverityCount("critical"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getSuggestionSeverityCount("warning"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getSuggestionSeverityCount("info") + ctx_r0.getSuggestionSeverityCount("opportunity"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.suggestions.length)("ngIfElse", noLiveSuggestions_r16);
  }
}
var CrmComponent = class _CrmComponent {
  constructor(userService, energyDashboardService, liveAlertsService, liveOptimizationSuggestionsService, sensorCommandService, toaster) {
    this.userService = userService;
    this.energyDashboardService = energyDashboardService;
    this.liveAlertsService = liveAlertsService;
    this.liveOptimizationSuggestionsService = liveOptimizationSuggestionsService;
    this.sensorCommandService = sensorCommandService;
    this.toaster = toaster;
    this.currentUser = null;
    this.isDashboardReady = false;
    this.isLoading = false;
    this.isLiveRefreshing = false;
    this.errorMessage = "";
    this.liveOverview = null;
    this.suggestions = [];
    this.isSuggestionsPanelOpen = false;
    this.liveSessionEnergyKwh = 0;
    this.lastSocketPacketAt = "";
    this.liveLoadChart = this.createLiveLoadChart([], []);
    this.subscriptions = new Subscription();
    this.energyBaselines = /* @__PURE__ */ new Map();
    this.latestEnergyValues = /* @__PURE__ */ new Map();
    this.liveLoadLabels = [];
    this.liveLoadValues = [];
    this.commandingIdleSensors = /* @__PURE__ */ new Set();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      this.liveAlertsService.start(this.currentUser?.fkBusiness);
      this.liveOptimizationSuggestionsService.start(this.currentUser?.fkBusiness);
      this.subscriptions.add(this.liveOptimizationSuggestionsService.suggestions$.subscribe((items) => {
        this.suggestions = items;
      }));
      this.observeLiveSensorEnergy();
      this.loadDashboardData();
      this.refreshTimer = setInterval(() => {
        this.refreshLiveOverview();
      }, 15e3);
    });
  }
  ngOnDestroy() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
    this.liveOptimizationSuggestionsService.stop();
    this.subscriptions.unsubscribe();
  }
  loadDashboardData() {
    this.isLoading = true;
    this.isDashboardReady = false;
    this.errorMessage = "";
    forkJoin({
      liveOverview: this.energyDashboardService.getDashboardLiveOverview(this.currentUser, true),
      suggestions: this.energyDashboardService.getDashboardSuggestions(this.currentUser)
    }).subscribe({
      next: (response) => {
        if (!response.liveOverview.success || !response.suggestions.success) {
          this.errorMessage = "Dashboard data could not be loaded properly.";
          this.isLoading = false;
          return;
        }
        this.liveOverview = response.liveOverview.data ?? null;
        this.liveOptimizationSuggestionsService.replaceSnapshot(response.suggestions.data ?? []);
        this.recordLiveLoadPoint();
        this.isDashboardReady = true;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Something went wrong while loading dashboard data.";
        this.isDashboardReady = false;
        this.isLoading = false;
      }
    });
  }
  refreshLiveOverview() {
    if (!this.currentUser || this.isLiveRefreshing) {
      return;
    }
    this.isLiveRefreshing = true;
    this.energyDashboardService.getDashboardLiveOverview(this.currentUser).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.liveOverview = response.data;
          this.recordLiveLoadPoint();
        }
        this.isLiveRefreshing = false;
      },
      error: () => {
        this.isLiveRefreshing = false;
      }
    });
  }
  canControlIdleAppliance(alert) {
    return Boolean(alert?.sensorId) && (alert.commandAllowed ?? alert.canTurnOff ?? true);
  }
  isIdleApplianceCommanding(alert) {
    return this.commandingIdleSensors.has(String(alert?.sensorId || "").trim());
  }
  sendIdleApplianceCommand(alert, command) {
    const sensorId = String(alert?.sensorId || "").trim();
    if (!sensorId || !this.canControlIdleAppliance(alert) || this.commandingIdleSensors.has(sensorId)) {
      return;
    }
    const applianceName = alert.applianceName || alert.sensorName || "this appliance";
    const action = command === "ON" ? "turn on" : "turn off";
    const confirmed = window.confirm(`Do you want to ${action} ${applianceName}?`);
    if (!confirmed) {
      return;
    }
    this.commandingIdleSensors.add(sensorId);
    this.sensorCommandService.sendRelayCommand({
      sensorId,
      command,
      reason: `crm_idle_manual_${command.toLowerCase()}`
    }).subscribe({
      next: (response) => {
        this.commandingIdleSensors.delete(sensorId);
        if (!response.success) {
          this.toaster.error(response.remarks || `Failed to ${action} appliance`);
          return;
        }
        if (command === "OFF") {
          this.liveAlertsService.resolveAlert(alert);
        }
        this.toaster.success(`${applianceName} ${command === "ON" ? "turned on" : "turned off"}`);
      },
      error: () => {
        this.commandingIdleSensors.delete(sensorId);
        this.toaster.error(`Failed to ${action} appliance`);
      }
    });
  }
  openSuggestionsPanel() {
    this.isSuggestionsPanelOpen = true;
  }
  closeSuggestionsPanel() {
    this.isSuggestionsPanelOpen = false;
  }
  getSuggestionSeverityCount(severity) {
    const normalized = (severity || "").toLowerCase();
    return this.suggestions.filter((item) => (item.severity || "").toLowerCase() === normalized).length;
  }
  getIdleEvidenceLabel(alert) {
    const seconds = Math.round(Number(alert.evidenceWindowSeconds || 60));
    const samples = Math.round(Number(alert.sampleCount || 0));
    const power = Number(alert.averagePowerW ?? alert.currentPowerW ?? 0);
    return `${power.toFixed(1)} W average \xB7 ${samples} samples \xB7 ${seconds}s confirmed`;
  }
  getSuggestionIcon(suggestion) {
    if (suggestion.conflictsWithPeakHour) {
      return "ri-flashlight-line";
    }
    switch ((suggestion.severity || "").toLowerCase()) {
      case "critical":
        return "ri-error-warning-line";
      case "warning":
        return "ri-alert-line";
      default:
        return "ri-information-line";
    }
  }
  getConsumerName(item) {
    return item.applianceName || item.sensorName || "Live sensor";
  }
  getConsumerLocation(item) {
    return [item.floorName, item.officeName, item.utilityName].filter(Boolean).join(" \xB7 ") || "Location not assigned";
  }
  getPowerValue(powerW) {
    const value = Math.max(0, Number(powerW || 0));
    return value >= 1e3 ? value / 1e3 : value;
  }
  getPowerUnit(powerW) {
    return Math.max(0, Number(powerW || 0)) >= 1e3 ? "kW" : "W";
  }
  getSensorHealthPercent() {
    const total = this.liveOverview?.totalSensors || 0;
    return total > 0 ? Math.round((this.liveOverview?.onlineSensors || 0) / total * 100) : 0;
  }
  getReadinessLabel() {
    const readiness = this.liveOverview?.optimizationReadinessPercent || 0;
    if (readiness >= 90)
      return "Ready";
    if (readiness >= 60)
      return "Partially ready";
    return "Setup required";
  }
  getReadinessClass() {
    const readiness = this.liveOverview?.optimizationReadinessPercent || 0;
    if (readiness >= 90)
      return "is-ready";
    if (readiness >= 60)
      return "is-partial";
    return "is-required";
  }
  getLastUpdateLabel(value) {
    if (!value)
      return "Waiting for live packet";
    const timestamp = new Date(value).getTime();
    if (!Number.isFinite(timestamp))
      return "Waiting for live packet";
    const seconds = Math.max(0, Math.floor((Date.now() - timestamp) / 1e3));
    if (seconds < 10)
      return "Updated just now";
    if (seconds < 60)
      return `Updated ${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
      return `Updated ${minutes}m ago`;
    return `Updated ${Math.floor(minutes / 60)}h ago`;
  }
  trackBySensorId(_, item) {
    return item.sensorId;
  }
  observeLiveSensorEnergy() {
    this.subscriptions.add(this.liveAlertsService.allSensorCards$.subscribe((cards) => {
      let latestPacket = 0;
      for (const card of cards) {
        const sensorId = String(card?.sensorId || "").trim();
        const activeEnergy = Number(card?.activeEnergy || 0);
        if (!sensorId || !Number.isFinite(activeEnergy) || activeEnergy < 0) {
          continue;
        }
        if (!this.energyBaselines.has(sensorId)) {
          this.energyBaselines.set(sensorId, activeEnergy);
        }
        this.latestEnergyValues.set(sensorId, activeEnergy);
        const packetTime = new Date(card?.receivedAt || "").getTime();
        if (Number.isFinite(packetTime)) {
          latestPacket = Math.max(latestPacket, packetTime);
        }
      }
      this.liveSessionEnergyKwh = Array.from(this.latestEnergyValues.entries()).reduce((total, [sensorId, current]) => {
        const baseline = this.energyBaselines.get(sensorId) ?? current;
        const difference = current - baseline;
        return difference > 0 && difference < 1e3 ? total + difference : total;
      }, 0);
      if (latestPacket > 0) {
        this.lastSocketPacketAt = new Date(latestPacket).toISOString();
      }
    }));
  }
  recordLiveLoadPoint() {
    if (!this.liveOverview) {
      return;
    }
    const now = /* @__PURE__ */ new Date();
    this.liveLoadLabels.push(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    this.liveLoadValues.push(Number((this.liveOverview.currentLoadW / 1e3).toFixed(3)));
    if (this.liveLoadLabels.length > 20) {
      this.liveLoadLabels.shift();
      this.liveLoadValues.shift();
    }
    this.liveLoadChart = this.createLiveLoadChart([...this.liveLoadLabels], [...this.liveLoadValues]);
  }
  createLiveLoadChart(categories, values) {
    return {
      series: [{ name: "Live load", data: values }],
      chart: {
        type: "area",
        height: 260,
        toolbar: { show: false },
        animations: { enabled: true, speed: 350 },
        zoom: { enabled: false }
      },
      xaxis: {
        categories,
        labels: { show: categories.length > 1, rotate: 0 },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: (value) => `${value.toFixed(value >= 10 ? 0 : 1)} kW`
        }
      },
      stroke: { curve: "smooth", width: 3 },
      dataLabels: { enabled: false },
      tooltip: {
        y: { formatter: (value) => `${value.toFixed(3)} kW` }
      },
      fill: {
        type: "gradient",
        gradient: { shadeIntensity: 0.25, opacityFrom: 0.35, opacityTo: 0.04 }
      }
    };
  }
  static {
    this.\u0275fac = function CrmComponent_Factory(t) {
      return new (t || _CrmComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(EnergyDashboardService), \u0275\u0275directiveInject(LiveAlertsService), \u0275\u0275directiveInject(LiveOptimizationSuggestionsService), \u0275\u0275directiveInject(SensorCommandService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrmComponent, selectors: [["app-crm"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 5, consts: [["tariffMissing", ""], ["demandMissing", ""], ["noUtilityLoad", ""], ["noConsumers", ""], ["noLiveSuggestions", ""], ["noIdleAppliances", ""], ["idleOnlyStatus", ""], [1, "crm-dashboard"], [1, "crm-hero"], [1, "crm-hero-copy"], [1, "crm-eyebrow"], ["aria-hidden", "true", 1, "crm-live-dot"], [1, "crm-hero-actions"], ["routerLink", "/live-consumption", 1, "crm-explorer-button", "crm-live-button"], [1, "ri-pulse-line"], ["routerLink", "/dashboard/crm/deep-dive", 1, "crm-explorer-button"], [1, "las", "la-sitemap"], ["routerLink", "/dashboard/crm/historical-data", 1, "crm-explorer-button"], [1, "ri-download-cloud-2-line"], ["class", "crm-live-status", 4, "ngIf"], ["class", "dashboard-loader", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "crm-error-state", 4, "ngIf"], ["class", "crm-dashboard-content", 4, "ngIf"], [1, "crm-live-status"], [1, "crm-status-item"], [1, "crm-status-indicator"], [1, "ri-database-2-line"], [1, "ri-refresh-line"], ["role", "status", "aria-live", "polite", 1, "dashboard-loader"], [1, "dashboard-loader-panel"], ["aria-hidden", "true", 1, "energy-loader"], [1, "energy-loader-ring"], [1, "energy-loader-core"], [1, "ri-flashlight-line"], [1, "dashboard-loader-copy"], [1, "dashboard-loader-progress"], [1, "crm-error-state"], [1, "ri-error-warning-line"], [1, "crm-dashboard-content"], ["aria-label", "Live energy summary", 1, "crm-overview-section"], [1, "crm-overview-grid", "crm-overview-grid-five"], [1, "crm-stat-card", "crm-stat-primary"], [1, "crm-stat-icon"], [1, "crm-stat-copy"], [1, "ri-arrow-right-up-line", "crm-stat-corner"], [1, "crm-stat-card", "crm-stat-cyan"], [1, "crm-stat-card", "crm-stat-green"], [1, "ri-money-dollar-circle-line"], [4, "ngIf", "ngIfElse"], [1, "crm-stat-card", "crm-stat-amber"], [1, "ri-radar-line"], [1, "ri-speed-up-line"], [1, "crm-live-grid"], [1, "crm-card", "crm-live-chart-card"], [1, "crm-card-header"], [1, "crm-card-heading"], [1, "crm-card-icon", "crm-card-icon-cyan"], [1, "ri-line-chart-line"], [1, "crm-live-badge"], [1, "ri-radio-button-line"], [1, "crm-live-metric-row"], [1, "crm-live-chart-wrap"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "dataLabels", "tooltip", "fill"], [1, "crm-chart-note"], [1, "ri-information-line"], [1, "crm-card", "crm-utility-live-card"], [1, "crm-card-icon", "crm-card-icon-primary"], [1, "ri-stack-line"], ["class", "crm-utility-list", 4, "ngIf", "ngIfElse"], [1, "crm-live-grid", "crm-secondary-live-grid"], [1, "crm-card", "crm-top-consumers-card"], [1, "crm-card-icon", "crm-card-icon-amber"], [1, "ri-fire-line"], ["routerLink", "/live-consumption", 1, "crm-text-link"], [1, "ri-arrow-right-line"], ["class", "crm-consumer-table", 4, "ngIf", "ngIfElse"], [1, "crm-health-stack"], [1, "crm-card", "crm-health-card"], [1, "crm-card-icon", "crm-card-icon-green"], [1, "ri-heart-pulse-line"], [1, "crm-health-percent"], [1, "crm-health-progress"], [1, "crm-health-counters"], [1, "is-online"], [1, "is-delayed"], [1, "is-offline"], [1, "is-never"], [1, "crm-health-rule"], [1, "crm-card", "crm-readiness-card"], [1, "ri-settings-4-line"], [1, "crm-readiness-state", 3, "ngClass"], [1, "crm-readiness-score"], [1, "crm-progress-track"], [1, "crm-readiness-list"], [1, "crm-primary-grid", "crm-operational-grid"], ["class", "crm-card crm-operations-card crm-idle-insight-card", 4, "ngIf"], ["type", "button", 1, "crm-card", "crm-suggestions-launcher", 3, "click"], [1, "crm-suggestions-launcher-top"], [1, "ri-lightbulb-flash-line"], [1, "crm-live-indicator"], [1, "crm-suggestions-launcher-count"], [1, "crm-suggestion-severity-summary"], [1, "is-critical"], [1, "is-warning"], [1, "is-info"], [1, "crm-suggestions-launcher-action"], ["class", "crm-suggestion-drawer-backdrop", 3, "click", 4, "ngIf"], ["aria-label", "Active optimization suggestions", 1, "crm-suggestion-drawer"], [1, "crm-suggestion-drawer-header"], [1, "crm-drawer-eyebrow"], ["type", "button", "aria-label", "Close suggestions", 1, "crm-drawer-close", 3, "click"], [1, "ri-close-line"], [1, "crm-suggestion-drawer-summary"], ["class", "crm-suggestion-drawer-body", 4, "ngIf", "ngIfElse"], [1, "crm-unavailable-value"], [1, "crm-utility-list"], ["class", "crm-utility-row", 4, "ngFor", "ngForOf"], [1, "crm-utility-row"], [1, "crm-utility-row-head"], [1, "crm-utility-row-foot"], [1, "crm-empty-mini"], [1, "crm-consumer-table"], [1, "crm-consumer-table-head"], ["class", "crm-consumer-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "crm-consumer-row"], [1, "crm-consumer-name"], [1, "ri-plug-line"], [1, "crm-consumer-power"], [1, "crm-consumer-health"], [1, "crm-relay-pill"], [1, "crm-empty-state"], [1, "crm-card", "crm-operations-card", "crm-idle-insight-card"], [1, "ri-timer-flash-line"], [1, "crm-alert-total", "crm-confirmed-total"], [1, "crm-idle-card-body"], ["class", "crm-idle-evidence-banner", 4, "ngIf"], ["class", "crm-device-list crm-idle-device-list", 4, "ngIf", "ngIfElse"], [1, "crm-idle-evidence-banner"], [1, "ri-shield-check-line"], [1, "crm-device-list", "crm-idle-device-list"], ["class", "crm-device-row crm-confirmed-idle-row", 4, "ngFor", "ngForOf"], [1, "crm-device-row", "crm-confirmed-idle-row"], [1, "crm-device-icon", "crm-device-blue"], [1, "ri-remote-control-2-line"], [1, "crm-idle-device-copy"], [1, "crm-idle-title-line"], [1, "crm-confirmed-pill"], [1, "ri-check-double-line"], [1, "crm-idle-evidence"], [4, "ngIf"], ["class", "crm-idle-command-actions", 4, "ngIf", "ngIfElse"], [1, "ri-signal-wifi-line"], [1, "crm-idle-command-actions"], ["type", "button", 1, "is-on", 3, "click", "disabled"], [1, "ri-play-circle-line"], ["type", "button", 1, "is-off", 3, "click", "disabled"], [1, "ri-shut-down-line"], [1, "crm-status-pill"], [1, "crm-empty-mini", "crm-idle-empty-state"], [1, "ri-checkbox-circle-line"], [1, "crm-suggestion-drawer-backdrop", 3, "click"], [1, "crm-suggestion-drawer-body"], ["class", "crm-suggestion-drawer-item", 3, "is-critical", "is-warning", 4, "ngFor", "ngForOf"], [1, "crm-suggestion-drawer-item"], [1, "crm-suggestion-icon"], [1, "crm-suggestion-copy"], [1, "crm-suggestion-title-row"], ["class", "crm-suggestion-context", 4, "ngIf"], ["class", "crm-suggestion-action", 4, "ngIf"], [1, "crm-suggestion-context"], [1, "ri-map-pin-line"], [1, "crm-suggestion-action"], [1, "crm-drawer-empty"]], template: function CrmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 7)(1, "header", 8)(2, "div", 9)(3, "div", 10);
        \u0275\u0275element(4, "span", 11);
        \u0275\u0275text(5, " Live energy command center ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "Energy Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 12)(11, "a", 13);
        \u0275\u0275element(12, "i", 14);
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Live Readings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "a", 15);
        \u0275\u0275element(16, "i", 16);
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18, "Energy Explorer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "a", 17);
        \u0275\u0275element(20, "i", 18);
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "Historical CSV");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(23, CrmComponent_section_23_Template, 22, 7, "section", 19)(24, CrmComponent_section_24_Template, 13, 0, "section", 20)(25, CrmComponent_section_25_Template, 8, 1, "section", 21)(26, CrmComponent_div_26_Template, 290, 99, "div", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("Welcome back, ", (ctx.currentUser == null ? null : ctx.currentUser.name) || "there", ". See what is happening now and open Energy Explorer for detailed analysis.");
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isDashboardReady);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading && !ctx.isDashboardReady);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isDashboardReady);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, AsyncPipe, SlicePipe, DecimalPipe, RouterModule, RouterLink, SharedModule, NgApexchartsModule, ChartComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.crm-dashboard[_ngcontent-%COMP%] {\n  --crm-bg: #f4f6fb;\n  --crm-card: #ffffff;\n  --crm-surface: #f8f9fc;\n  --crm-surface-strong: #f0f2f8;\n  --crm-border: rgba(100, 116, 139, 0.16);\n  --crm-border-strong: rgba(100, 116, 139, 0.24);\n  --crm-text: #172033;\n  --crm-muted: #758096;\n  --crm-primary: #6f4bd8;\n  --crm-primary-soft: #eee9fc;\n  --crm-cyan: #1ea8d5;\n  --crm-cyan-soft: #e5f7fc;\n  --crm-green: #20a97b;\n  --crm-green-soft: #e4f7f0;\n  --crm-amber: #d49320;\n  --crm-amber-soft: #fff4dc;\n  --crm-red: #dc5a52;\n  --crm-red-soft: #fceae8;\n  --crm-shadow: 0 0.75rem 2.25rem rgba(22, 32, 51, 0.055);\n  width: min(100%, 100rem);\n  min-width: 0;\n  margin: 0 auto;\n  padding: clamp(1rem, 2.2vw, 2.25rem);\n  color: var(--crm-text);\n}\n.dark[_nghost-%COMP%]   .crm-dashboard[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-dashboard[_ngcontent-%COMP%] {\n  --crm-bg: #0e1320;\n  --crm-card: #151b29;\n  --crm-surface: #1a2131;\n  --crm-surface-strong: #20283a;\n  --crm-border: rgba(255, 255, 255, 0.08);\n  --crm-border-strong: rgba(255, 255, 255, 0.13);\n  --crm-text: rgba(255, 255, 255, 0.9);\n  --crm-muted: rgba(255, 255, 255, 0.5);\n  --crm-primary-soft: rgba(111, 75, 216, 0.17);\n  --crm-cyan-soft: rgba(30, 168, 213, 0.14);\n  --crm-green-soft: rgba(32, 169, 123, 0.14);\n  --crm-amber-soft: rgba(212, 147, 32, 0.14);\n  --crm-red-soft: rgba(220, 90, 82, 0.14);\n  --crm-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.16);\n}\n.crm-empty-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.85rem 0.95rem;\n  border-radius: 0.85rem;\n  background: rgba(var(--success-100), 0.65);\n  color: rgb(var(--success-700));\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.crm-empty-mini[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.crm-status-danger[_ngcontent-%COMP%] {\n  background: rgba(var(--red-100), 0.85);\n  color: rgb(var(--red-600));\n}\n.crm-device-orange[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.14);\n  color: rgb(217, 119, 6);\n}\n.crm-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 10.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  overflow: hidden;\n  margin-bottom: 1.25rem;\n  padding: clamp(1.35rem, 3vw, 2.2rem);\n  border: 1px solid rgba(111, 75, 216, 0.14);\n  border-radius: 1.15rem;\n  background:\n    radial-gradient(\n      circle at 82% 10%,\n      rgba(30, 168, 213, 0.16),\n      transparent 28%),\n    radial-gradient(\n      circle at 4% 110%,\n      rgba(111, 75, 216, 0.16),\n      transparent 34%),\n    linear-gradient(\n      135deg,\n      var(--crm-card),\n      var(--crm-surface));\n  box-shadow: var(--crm-shadow);\n  animation: _ngcontent-%COMP%_crm-rise 0.4s ease-out both;\n}\n.crm-hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  width: 13rem;\n  height: 13rem;\n  border: 1.8rem solid rgba(111, 75, 216, 0.035);\n  border-radius: 50%;\n  content: "";\n  inset-inline-end: -3rem;\n  inset-block-end: -7rem;\n  pointer-events: none;\n}\n.crm-hero-copy[_ngcontent-%COMP%], .crm-hero-actions[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.crm-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.65rem;\n  color: var(--crm-primary);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.crm-live-dot[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 0.48rem;\n  height: 0.48rem;\n  border-radius: 50%;\n  background: var(--crm-green);\n  box-shadow: 0 0 0 0.28rem rgba(32, 169, 123, 0.12);\n  animation: _ngcontent-%COMP%_crm-pulse 2.2s ease-out infinite;\n}\n.crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: clamp(1.45rem, 3vw, 2.15rem);\n  font-weight: 750;\n  letter-spacing: -0.035em;\n}\n.crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0.55rem 0 0;\n  color: var(--crm-muted);\n  font-size: clamp(0.78rem, 1.4vw, 0.9rem);\n  line-height: 1.55;\n}\n.crm-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: none;\n  align-items: stretch;\n  gap: 0.65rem;\n}\n.crm-range-chip[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%], .crm-export-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 3.15rem;\n  align-items: center;\n  border-radius: 0.75rem;\n}\n.crm-range-chip[_ngcontent-%COMP%] {\n  gap: 0.65rem;\n  padding: 0.65rem 0.9rem;\n  border: 1px solid var(--crm-border);\n  background: var(--crm-card);\n  color: var(--crm-text);\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.crm-range-chip[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--crm-primary);\n  font-size: 1.05rem;\n}\n.crm-range-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n}\n.crm-range-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-bottom: 0.1rem;\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n  font-weight: 550;\n}\n.crm-export-button[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  border: 1px solid var(--crm-primary);\n  background: var(--crm-primary);\n  box-shadow: 0 0.45rem 1rem rgba(111, 75, 216, 0.18);\n  color: #fff;\n  font-size: 0.76rem;\n  font-weight: 700;\n  transition:\n    transform 160ms ease,\n    box-shadow 160ms ease,\n    background 160ms ease;\n}\n.crm-explorer-button[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.9rem;\n  border: 1px solid rgba(111, 75, 216, 0.22);\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 0.72rem;\n  font-weight: 700;\n  transition:\n    transform 160ms ease,\n    border-color 160ms ease,\n    background 160ms ease;\n}\n.crm-dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.crm-overview-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n}\n.crm-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-inline: 0.15rem;\n}\n.crm-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.86rem;\n  font-weight: 720;\n}\n.crm-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.63rem;\n}\n.crm-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.55rem;\n  border-radius: 999px;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 0.58rem;\n  font-weight: 700;\n}\n.crm-overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n.crm-stat-card[_ngcontent-%COMP%], .crm-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--crm-border);\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.crm-stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.85rem;\n  overflow: hidden;\n  padding: 1rem;\n  border-radius: 0.9rem;\n  animation: _ngcontent-%COMP%_crm-rise 0.42s ease-out both;\n  transition:\n    transform 180ms ease,\n    border-color 180ms ease,\n    box-shadow 180ms ease;\n}\n.crm-stat-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 45ms;\n}\n.crm-stat-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 90ms;\n}\n.crm-stat-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 135ms;\n}\n.crm-stat-card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  content: "";\n  inset-inline-end: -1.6rem;\n  inset-block-end: -1.8rem;\n  opacity: 0.42;\n}\n.crm-stat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.85rem;\n  min-width: 2.85rem;\n  height: 2.85rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  font-size: 1.2rem;\n}\n.crm-stat-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.crm-stat-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.12rem 0;\n  color: var(--crm-text);\n  font-size: clamp(1rem, 2vw, 1.32rem);\n  font-weight: 750;\n  letter-spacing: -0.025em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.63em;\n  font-weight: 650;\n}\n.crm-stat-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-stat-corner[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--crm-muted);\n  font-size: 0.8rem;\n  inset-inline-end: 0.75rem;\n  inset-block-start: 0.65rem;\n  opacity: 0.45;\n}\n.crm-stat-primary[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-stat-primary[_ngcontent-%COMP%]::before {\n  background: var(--crm-primary-soft);\n}\n.crm-stat-cyan[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-stat-cyan[_ngcontent-%COMP%]::before {\n  background: var(--crm-cyan-soft);\n}\n.crm-stat-green[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-stat-green[_ngcontent-%COMP%]::before {\n  background: var(--crm-green-soft);\n}\n.crm-stat-amber[_ngcontent-%COMP%]   .crm-stat-icon[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-stat-amber[_ngcontent-%COMP%]::before {\n  background: var(--crm-amber-soft);\n}\n.crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 1.25rem;\n  align-items: stretch;\n}\n.crm-primary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.9fr) minmax(18rem, 0.8fr);\n}\n.crm-secondary-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.65fr) minmax(18rem, 0.75fr);\n}\n.crm-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 1rem;\n  animation: _ngcontent-%COMP%_crm-rise 0.45s ease-out both;\n  animation-delay: 80ms;\n}\n.crm-peak-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.crm-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 4.7rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.15rem;\n  border-bottom: 1px solid var(--crm-border);\n}\n.crm-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.crm-card-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.2rem;\n  min-width: 2.2rem;\n  height: 2.2rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.62rem;\n  font-size: 1rem;\n}\n.crm-card-icon-primary[_ngcontent-%COMP%] {\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-card-icon-cyan[_ngcontent-%COMP%] {\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-card-icon-green[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-card-icon-danger[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.88rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.crm-icon-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.25rem;\n  min-width: 2.25rem;\n  height: 2.25rem;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.62rem;\n  background: var(--crm-surface);\n  color: var(--crm-muted);\n  font-size: 0.92rem;\n  transition:\n    color 160ms ease,\n    border-color 160ms ease,\n    background 160ms ease;\n}\n.crm-filter-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(8rem, 1fr) auto minmax(8rem, 1fr) auto;\n  gap: 0.65rem;\n  align-items: end;\n  margin: 1rem 1.15rem 0;\n  padding: 0.7rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.75rem;\n  background: var(--crm-surface);\n}\n.crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.25rem;\n}\n.crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  height: 2.25rem;\n  padding: 0 0.7rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.55rem;\n  outline: none;\n  background: var(--crm-card);\n  color: var(--crm-text);\n  font-size: 0.72rem;\n  transition: border-color 160ms ease, box-shadow 160ms ease;\n}\n.crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--crm-primary);\n  box-shadow: 0 0 0 0.18rem rgba(111, 75, 216, 0.1);\n}\n.crm-filter-separator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 2.25rem;\n  align-items: center;\n  color: var(--crm-muted);\n}\n.crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 2.25rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0 0.9rem;\n  border: 1px solid var(--crm-primary);\n  border-radius: 0.55rem;\n  background: var(--crm-primary);\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  transition: transform 160ms ease, background 160ms ease;\n}\n.crm-date-range-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin: 0;\n  color: var(--crm-red);\n  font-size: 0.62rem;\n  font-weight: 650;\n}\n.crm-inline-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin: 1rem 1.15rem 0;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.75rem;\n}\n.crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  padding: 0.75rem 0.85rem 0.75rem 1.1rem;\n  border-inline-end: 1px solid var(--crm-border);\n}\n.crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-inline-end: 0;\n}\n.crm-metric-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.38rem;\n  height: 0.38rem;\n  border-radius: 50%;\n  inset-inline-start: 0.55rem;\n  inset-block-start: 0.95rem;\n}\n.crm-metric-primary[_ngcontent-%COMP%] {\n  background: var(--crm-primary);\n}\n.crm-metric-cyan[_ngcontent-%COMP%] {\n  background: var(--crm-cyan);\n}\n.crm-metric-green[_ngcontent-%COMP%] {\n  background: var(--crm-green);\n}\n.crm-inline-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .crm-inline-metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--crm-muted);\n  font-size: 0.59rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin: 0.12rem 0;\n  color: var(--crm-text);\n  font-size: 0.84rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-chart-shell[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n}\n.crm-line-chart-shell[_ngcontent-%COMP%] {\n  overscroll-behavior: contain;\n}\n.crm-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.crm-line-chart-shell[_ngcontent-%COMP%], .crm-bar-chart-shell[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.65rem 0.45rem;\n}\n.crm-card-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background: rgba(248, 249, 252, 0.78);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  inset: 0;\n}\n.dark[_nghost-%COMP%]   .crm-card-loader[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-card-loader[_ngcontent-%COMP%] {\n  background: rgba(21, 27, 41, 0.78);\n}\n.crm-card-loader-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  width: min(100%, 22rem);\n  gap: 0.8rem;\n  align-items: center;\n  padding: 0.9rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.85rem;\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.crm-card-loader-spinner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.55rem;\n  height: 2.55rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 1.15rem;\n}\n.crm-card-loader-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .crm-spinning-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_crm-spin 0.8s linear infinite;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.35rem;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .crm-card-loader-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-card-loader-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.crm-alert-total[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 2.25rem;\n  height: 2.25rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.62rem;\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n  font-size: 0.9rem;\n  font-weight: 750;\n}\n.crm-operations-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: stretch;\n  height: auto;\n  min-height: 0;\n  overflow: hidden;\n  flex-direction: column;\n}\n.crm-operations-card[_ngcontent-%COMP%]   .crm-card-header[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.crm-idle-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 0.75rem;\n  overscroll-behavior: contain;\n}\n.crm-idle-card-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.35rem;\n}\n.crm-idle-card-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: var(--crm-border-strong);\n}\n.crm-idle-device-list[_ngcontent-%COMP%] {\n  gap: 0.55rem;\n  padding: 0;\n}\n.crm-idle-device-list[_ngcontent-%COMP%]   .crm-device-row[_ngcontent-%COMP%] {\n  padding: 0.72rem;\n  border: 1px solid var(--crm-border);\n  background: var(--crm-surface);\n}\n.crm-alert-summary[_ngcontent-%COMP%] {\n  padding: 1rem 1.15rem;\n  border-bottom: 1px solid var(--crm-border);\n}\n.crm-alert-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 4fr 7fr;\n  height: 0.45rem;\n  overflow: hidden;\n  border-radius: 999px;\n}\n.crm-alert-critical[_ngcontent-%COMP%] {\n  background: var(--crm-red);\n}\n.crm-alert-warning[_ngcontent-%COMP%] {\n  background: var(--crm-amber);\n}\n.crm-alert-info[_ngcontent-%COMP%] {\n  background: var(--crm-cyan);\n}\n.crm-alert-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.65rem;\n}\n.crm-alert-legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n}\n.crm-alert-legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.4rem;\n  height: 0.4rem;\n  border-radius: 50%;\n}\n.crm-alert-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.85rem;\n}\n.crm-alert-filter-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 999px;\n  background: var(--crm-surface);\n  color: var(--crm-muted);\n  padding: 0.35rem 0.7rem;\n  font-size: 0.62rem;\n  font-weight: 700;\n  transition:\n    border-color 160ms ease,\n    background 160ms ease,\n    color 160ms ease;\n}\n.crm-alert-filter-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .crm-alert-filter-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: rgba(111, 75, 216, 0.3);\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-alert-filter-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.45rem;\n  height: 0.45rem;\n  border-radius: 50%;\n}\n.crm-alert-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  margin-top: 0.75rem;\n  padding: 0 0.75rem 0.75rem;\n}\n.crm-alert-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.85rem;\n  background: var(--crm-surface);\n}\n.crm-alert-row-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.crm-alert-row-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.76rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-alert-row-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin-top: 0.1rem;\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-alert-row-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.65rem;\n  line-height: 1.35;\n}\n.crm-alert-row-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.45rem;\n}\n.crm-mini-action[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 999px;\n  background: var(--crm-primary);\n  color: #fff;\n  padding: 0.35rem 0.65rem;\n  font-size: 0.58rem;\n  font-weight: 750;\n}\n.crm-mini-action[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.crm-empty-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.crm-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.85rem 1.15rem 0.45rem;\n}\n.crm-section-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.crm-section-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.6rem;\n}\n.crm-device-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  padding: 0 0.75rem 0.75rem;\n}\n.crm-device-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 0.65rem;\n  align-items: center;\n  padding: 0.65rem 0.45rem;\n  border-radius: 0.65rem;\n  transition: background 160ms ease;\n}\n.crm-device-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2rem;\n  min-width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.55rem;\n  font-size: 0.85rem;\n}\n.crm-device-blue[_ngcontent-%COMP%] {\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-device-red[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-device-slate[_ngcontent-%COMP%] {\n  background: var(--crm-surface-strong);\n  color: var(--crm-muted);\n}\n.crm-device-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.crm-device-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-device-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-device-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.68rem;\n  font-weight: 650;\n}\n.crm-device-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n}\n.crm-status-pill[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.45rem;\n  border-radius: 999px;\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n  font-size: 0.57rem;\n  font-weight: 700;\n}\n.crm-operation-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  margin: 0 1.15rem 1rem;\n  padding: 0.7rem;\n  border: 1px solid rgba(212, 147, 32, 0.14);\n  border-radius: 0.65rem;\n  background: var(--crm-amber-soft);\n}\n.crm-operation-note[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.7rem;\n  min-width: 1.7rem;\n  height: 1.7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  background: var(--crm-card);\n  color: var(--crm-amber);\n  font-size: 0.82rem;\n}\n.crm-operation-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  line-height: 1.5;\n}\n.monthly-device-report-chart[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 13.5rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.5rem 0;\n}\n.monthly-device-report-chart[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 15rem;\n}\n.crm-mix-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  padding: 0 0.8rem 0.9rem;\n}\n.crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 0.55rem;\n  align-items: center;\n  padding: 0.45rem 0.35rem;\n  border-radius: 0.55rem;\n}\n.crm-mix-marker[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.45rem;\n  height: 0.45rem;\n  border-radius: 50%;\n}\n.crm-mix-marker-0[_ngcontent-%COMP%] {\n  background: var(--crm-primary);\n}\n.crm-mix-marker-1[_ngcontent-%COMP%] {\n  background: var(--crm-cyan);\n}\n.crm-mix-marker-2[_ngcontent-%COMP%] {\n  background: var(--crm-amber);\n}\n.crm-mix-marker-3[_ngcontent-%COMP%] {\n  background: var(--crm-green);\n}\n.crm-mix-marker-4[_ngcontent-%COMP%] {\n  background: var(--crm-red);\n}\n.crm-mix-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.crm-mix-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-mix-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-mix-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.66rem;\n  font-weight: 650;\n}\n.crm-mix-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.56rem;\n}\n.crm-mix-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.66rem;\n}\n.crm-empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 18rem;\n  place-items: center;\n  align-content: center;\n  color: var(--crm-muted);\n  text-align: center;\n}\n.crm-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  font-size: 1.8rem;\n}\n.crm-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.68rem;\n}\n.crm-error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 1.1rem;\n  border: 1px solid rgba(220, 90, 82, 0.18);\n  border-radius: 0.85rem;\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.crm-error-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.5rem;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.7rem;\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-error-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.crm-error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.66rem;\n}\n.dashboard-loader[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.dashboard-loader-panel[_ngcontent-%COMP%], .dashboard-refresh-loader[_ngcontent-%COMP%], .dashboard-loader-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--crm-border);\n  background: var(--crm-card);\n  box-shadow: var(--crm-shadow);\n}\n.dashboard-loader-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.2rem;\n  border-radius: 0.9rem;\n}\n.energy-loader[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 3.6rem;\n  min-width: 3.6rem;\n  height: 3.6rem;\n  place-items: center;\n}\n.energy-loader-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border: 0.2rem solid var(--crm-primary-soft);\n  border-top-color: var(--crm-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_crm-spin 0.9s linear infinite;\n}\n.energy-loader-core[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.3rem;\n  height: 2.3rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.dashboard-loader-copy[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.dashboard-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--crm-text);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.dashboard-loader-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.2rem 0 0.65rem;\n  color: var(--crm-muted);\n  font-size: 0.64rem;\n}\n.dashboard-loader-progress[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0.3rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--crm-surface-strong);\n}\n.dashboard-loader-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 38%;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--crm-primary),\n      var(--crm-cyan));\n  animation: _ngcontent-%COMP%_crm-loader 1.1s ease-in-out infinite;\n}\n.dashboard-loader-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n.dashboard-loader-card[_ngcontent-%COMP%] {\n  min-height: 8rem;\n  overflow: hidden;\n  border-radius: 0.85rem;\n  background:\n    linear-gradient(\n      100deg,\n      var(--crm-card) 20%,\n      var(--crm-surface) 40%,\n      var(--crm-card) 60%);\n  background-size: 250% 100%;\n  animation: _ngcontent-%COMP%_crm-shimmer 1.4s ease-in-out infinite;\n}\n.dashboard-loader-card-wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  min-height: 18rem;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.7rem 0.9rem;\n  border-radius: 0.72rem;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--crm-muted);\n  font-size: 0.64rem;\n  font-weight: 650;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_crm-spin 0.8s linear infinite;\n}\n.dashboard-refresh-loader[_ngcontent-%COMP%]   .dashboard-loader-progress[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (hover: hover) {\n  .crm-export-button[_ngcontent-%COMP%]:hover, .crm-explorer-button[_ngcontent-%COMP%]:hover, .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n  }\n  .crm-export-button[_ngcontent-%COMP%]:hover, .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background: #6040c2;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%]:hover {\n    border-color: rgba(111, 75, 216, 0.36);\n    background: rgba(111, 75, 216, 0.16);\n  }\n  .crm-export-button[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0.65rem 1.25rem rgba(111, 75, 216, 0.24);\n  }\n  .crm-stat-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n    border-color: var(--crm-border-strong);\n    box-shadow: 0 1rem 2.4rem rgba(22, 32, 51, 0.075);\n  }\n  .crm-icon-button[_ngcontent-%COMP%]:hover {\n    border-color: rgba(111, 75, 216, 0.3);\n    background: var(--crm-primary-soft);\n    color: var(--crm-primary);\n  }\n  .crm-device-row[_ngcontent-%COMP%]:hover, .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n    background: var(--crm-surface);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-rise {\n  from {\n    transform: translateY(0.55rem);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 169, 123, 0.28);\n  }\n  70% {\n    box-shadow: 0 0 0 0.55rem rgba(32, 169, 123, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(32, 169, 123, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-loader {\n  from {\n    transform: translateX(-110%);\n  }\n  to {\n    transform: translateX(300%);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-shimmer {\n  from {\n    background-position: 150% 0;\n  }\n  to {\n    background-position: -80% 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .crm-operations-card[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-dashboard[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    min-height: 0;\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1.1rem;\n    padding: 1.25rem;\n    border-radius: 0.9rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crm-range-chip[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 3.15rem;\n    min-width: 3.15rem;\n    padding: 0;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-dashboard-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .crm-primary-grid[_ngcontent-%COMP%], .crm-secondary-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .crm-card[_ngcontent-%COMP%] {\n    border-radius: 0.85rem;\n  }\n  .crm-card-header[_ngcontent-%COMP%] {\n    min-height: 4.2rem;\n    padding: 0.85rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 17rem;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    margin: 0.85rem 0.85rem 0;\n  }\n  .crm-filter-separator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 0.85rem 0.85rem 0;\n    overflow-x: auto;\n    overscroll-behavior-inline: contain;\n    scrollbar-width: none;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 9rem;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%], .crm-bar-chart-shell[_ngcontent-%COMP%] {\n    padding-inline: 0.2rem;\n  }\n  .crm-operations-card[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .crm-alert-summary[_ngcontent-%COMP%] {\n    border-inline-end: 0;\n    border-bottom: 1px solid var(--crm-border);\n  }\n  .dashboard-loader-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .dashboard-loader-card-wide[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 479.98px) {\n  .crm-dashboard[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.7rem;\n  }\n  .crm-section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.45rem;\n  }\n  .crm-stat-card[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .crm-export-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .crm-card-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .crm-card-icon[_ngcontent-%COMP%] {\n    width: 2rem;\n    min-width: 2rem;\n    height: 2rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .crm-panel-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .dashboard-loader-panel[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .dashboard-loader-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .dashboard-loader-card-wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .dashboard-refresh-loader[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 0.55rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .crm-hero[_ngcontent-%COMP%], .crm-stat-card[_ngcontent-%COMP%], .crm-card[_ngcontent-%COMP%], .crm-live-dot[_ngcontent-%COMP%], .energy-loader-ring[_ngcontent-%COMP%], .crm-card-loader-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .crm-spinning-icon[_ngcontent-%COMP%], .dashboard-loader-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dashboard-loader-card[_ngcontent-%COMP%], .dashboard-refresh-loader[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%], .crm-stat-card[_ngcontent-%COMP%], .crm-icon-button[_ngcontent-%COMP%], .crm-device-row[_ngcontent-%COMP%], .crm-mix-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    transition: none !important;\n  }\n}\n.crm-dashboard[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin: -0.5rem 0 0;\n  padding: 0;\n}\n.crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n  width: min(100% - 2.5rem, 100rem);\n  margin-inline: auto;\n}\n.crm-hero[_ngcontent-%COMP%] {\n  min-height: 0;\n  margin-bottom: 1rem;\n  padding: 1.75rem 1.5rem 1rem;\n  border: 0;\n  border-radius: 0;\n  background: rgb(var(--primary));\n  box-shadow: none;\n  animation: none;\n}\n.crm-hero[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.crm-eyebrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n}\n.crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 44rem;\n  margin-top: 0.125rem;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.crm-hero-actions[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 0.75rem;\n}\n.crm-range-chip[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%], .crm-export-button[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  border-radius: 0.5rem;\n  box-shadow: none;\n}\n.crm-range-chip[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-color: rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n}\n.crm-range-chip[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .crm-range-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.78);\n}\n.crm-range-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n}\n.crm-explorer-button[_ngcontent-%COMP%], .crm-export-button[_ngcontent-%COMP%] {\n  padding: 0 0.9rem;\n  border: 0;\n  background: rgba(255, 255, 255, 0.95);\n  color: rgb(var(--primary));\n  font-size: 0.75rem;\n}\n@media (hover: hover) {\n  .crm-explorer-button[_ngcontent-%COMP%]:hover, .crm-export-button[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n    background: #fff;\n    color: rgb(var(--primary));\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-dashboard[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n    width: calc(100% - 2rem);\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1.5rem 1.25rem 1rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .crm-range-chip[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 2.4rem;\n    min-width: 2.4rem;\n    padding: 0;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 479.98px) {\n  .crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n    width: calc(100% - 1.5rem);\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 2.4rem;\n  }\n  .crm-export-button[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%] {\n    width: 2.4rem;\n  }\n  .crm-export-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crm-explorer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.crm-card-icon-amber[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-analysis-filter-bar[_ngcontent-%COMP%] {\n  align-items: end;\n}\n.crm-select[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  min-width: 12rem;\n  border: 1px solid var(--crm-border-strong);\n  border-radius: 0.65rem;\n  background: var(--crm-card);\n  color: var(--crm-text);\n  padding: 0.5rem 0.75rem;\n  font-size: 0.82rem;\n  outline: none;\n}\n.crm-select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(132, 90, 223, 0.55);\n  box-shadow: 0 0 0 0.2rem rgba(132, 90, 223, 0.11);\n}\n.crm-select[_ngcontent-%COMP%]:disabled, .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .crm-icon-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.62;\n}\n@media (max-width: 767.98px) {\n  .crm-dashboard-content[_ngcontent-%COMP%] {\n    gap: 0.85rem;\n  }\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .crm-stat-card[_ngcontent-%COMP%] {\n    gap: 0.7rem;\n    padding: 0.85rem;\n    border-radius: 0.75rem;\n  }\n  .crm-stat-icon[_ngcontent-%COMP%] {\n    width: 2.35rem;\n    min-width: 2.35rem;\n    height: 2.35rem;\n    border-radius: 0.65rem;\n    font-size: 1rem;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.98rem;\n    line-height: 1.2;\n    white-space: normal;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    font-size: 0.58rem;\n    line-height: 1.35;\n    white-space: normal;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .crm-card-header[_ngcontent-%COMP%] {\n    min-height: auto;\n    align-items: flex-start;\n    gap: 0.75rem;\n    padding: 0.85rem 0.8rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 0.55rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n    line-height: 1.25;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: block;\n    max-width: none;\n    font-size: 0.6rem;\n    line-height: 1.35;\n  }\n  .crm-card-icon[_ngcontent-%COMP%], .crm-icon-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    min-width: 2rem;\n    height: 2rem;\n    border-radius: 0.55rem;\n  }\n  .crm-analysis-filter-bar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.55rem;\n    margin: 0.75rem 0.75rem 0;\n    padding: 0.65rem;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 0.54rem;\n  }\n  .crm-select[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    min-height: 2.35rem;\n    height: auto;\n    padding: 0.45rem 0.65rem;\n    font-size: 0.72rem;\n  }\n  .crm-filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 2.35rem;\n    height: auto;\n    font-size: 0.68rem;\n  }\n  .crm-date-range-error[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    font-size: 0.58rem;\n    line-height: 1.35;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n    margin: 0.75rem 0.75rem 0;\n    overflow: visible;\n    border-radius: 0.7rem;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 0;\n    padding: 0.68rem 0.75rem 0.68rem 1rem;\n    border-inline-end: 0;\n    border-bottom: 1px solid var(--crm-border);\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .crm-inline-metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.56rem;\n    line-height: 1.32;\n    white-space: normal;\n  }\n  .crm-inline-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n    line-height: 1.2;\n    white-space: normal;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%] {\n    min-height: 18rem;\n    padding: 0.35rem 0.25rem 0.25rem;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n    min-height: 17.5rem;\n  }\n  [_nghost-%COMP%]     .crm-line-chart-shell .apexcharts-legend.apx-legend-position-top {\n    top: 0 !important;\n    right: auto !important;\n    left: 0.25rem !important;\n    justify-content: flex-start !important;\n    max-width: calc(100% - 0.5rem);\n    padding-inline-end: 0 !important;\n  }\n  [_nghost-%COMP%]     .crm-line-chart-shell .apexcharts-legend-series {\n    margin: 0.1rem 0.55rem 0.1rem 0 !important;\n  }\n  [_nghost-%COMP%]     .crm-line-chart-shell .apexcharts-toolbar {\n    top: 2.05rem !important;\n    right: 0.25rem !important;\n    display: flex !important;\n    max-width: calc(100% - 0.5rem);\n    justify-content: flex-end;\n  }\n  .crm-card-loader[_ngcontent-%COMP%] {\n    padding: 0.65rem;\n  }\n  .crm-card-loader-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    gap: 0.65rem;\n    padding: 0.75rem;\n  }\n  .crm-card-loader-spinner[_ngcontent-%COMP%] {\n    width: 2.2rem;\n    height: 2.2rem;\n    border-radius: 0.65rem;\n    font-size: 1rem;\n  }\n  .crm-card-loader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n    white-space: normal;\n  }\n  .crm-card-loader-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.58rem;\n  }\n  .crm-operations-card[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 0;\n  }\n}\n@media (max-width: 479.98px) {\n  .crm-dashboard[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.crm-hero) {\n    width: calc(100% - 1rem);\n  }\n  .crm-hero[_ngcontent-%COMP%] {\n    padding-inline: 0.85rem;\n  }\n  .crm-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .crm-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .crm-overview-grid[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  .crm-stat-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .crm-stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.92rem;\n  }\n  .crm-card-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .crm-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.56rem;\n  }\n  .crm-analysis-filter-bar[_ngcontent-%COMP%], .crm-inline-metrics[_ngcontent-%COMP%] {\n    margin: 0.65rem 0.65rem 0;\n  }\n  .crm-analysis-filter-bar[_ngcontent-%COMP%] {\n    padding: 0.58rem;\n  }\n  .crm-select[_ngcontent-%COMP%], .crm-filter-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%] {\n    min-height: 16rem;\n    padding-inline: 0;\n  }\n  .crm-line-chart-shell[_ngcontent-%COMP%]   apx-chart[_ngcontent-%COMP%] {\n    min-height: 15.5rem;\n  }\n  .crm-card-loader-panel[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    justify-items: center;\n    width: min(100%, 18rem);\n    text-align: center;\n  }\n  .crm-card-loader-copy[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.crm-suggestions-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 1.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(245, 184, 73, 0.08),\n      transparent 12rem),\n    var(--crm-card);\n}\n.crm-suggestions-card[_ngcontent-%COMP%]   .crm-card-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.crm-suggestion-summary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 0.4rem;\n  min-height: 2rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgba(212, 147, 32, 0.24);\n  border-radius: 999px;\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n  font-size: 0.68rem;\n  font-weight: 750;\n  white-space: nowrap;\n}\n.crm-suggestion-summary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.crm-suggestion-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.9rem;\n  padding: 1rem;\n}\n.crm-suggestion-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  min-width: 0;\n  gap: 0.8rem;\n  overflow: hidden;\n  padding: 0.95rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.85rem;\n  background: var(--crm-surface);\n  transition:\n    transform 160ms ease,\n    border-color 160ms ease,\n    box-shadow 160ms ease;\n}\n.crm-suggestion-item[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 0.25rem;\n  content: "";\n  inset-block: 0;\n  inset-inline-start: 0;\n  background: var(--crm-primary);\n}\n.crm-suggestion-warning[_ngcontent-%COMP%] {\n  border-color: rgba(212, 147, 32, 0.32);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(212, 147, 32, 0.14),\n      transparent 58%),\n    var(--crm-surface);\n}\n.crm-suggestion-warning[_ngcontent-%COMP%]::before {\n  background: var(--crm-amber);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%] {\n  border-color: rgba(220, 90, 82, 0.34);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 90, 82, 0.13),\n      transparent 58%),\n    var(--crm-surface);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%]::before {\n  background: var(--crm-red);\n}\n.crm-suggestion-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  z-index: 1;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.72rem;\n  color: var(--crm-primary);\n  background: var(--crm-primary-soft);\n  font-size: 1.15rem;\n}\n.crm-suggestion-warning[_ngcontent-%COMP%]   .crm-suggestion-icon[_ngcontent-%COMP%] {\n  color: var(--crm-amber);\n  background: var(--crm-amber-soft);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%]   .crm-suggestion-icon[_ngcontent-%COMP%] {\n  color: var(--crm-red);\n  background: var(--crm-red-soft);\n}\n.crm-suggestion-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.crm-suggestion-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.65rem;\n}\n.crm-suggestion-title-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.88rem;\n  font-weight: 740;\n  line-height: 1.3;\n}\n.crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: none;\n  border-radius: 999px;\n  padding: 0.18rem 0.5rem;\n  border: 1px solid var(--crm-border);\n  background: rgba(255, 255, 255, 0.76);\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.crm-suggestion-warning[_ngcontent-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-color: rgba(212, 147, 32, 0.3);\n  color: var(--crm-amber);\n}\n.crm-suggestion-critical[_ngcontent-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-color: rgba(220, 90, 82, 0.3);\n  color: var(--crm-red);\n}\n.crm-suggestion-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: var(--crm-muted);\n  font-size: 0.76rem;\n  line-height: 1.45;\n}\n.crm-suggestion-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.4rem;\n  margin-top: 0.6rem;\n  padding: 0.55rem 0.65rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.65rem;\n  background: rgba(255, 255, 255, 0.58);\n  color: var(--crm-text);\n  font-size: 0.72rem;\n  font-weight: 650;\n  line-height: 1.45;\n}\n.crm-suggestion-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 0.08rem;\n  color: var(--crm-green);\n  font-size: 0.9rem;\n}\n.crm-suggestion-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.7rem;\n}\n.crm-suggestion-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.24rem 0.52rem;\n  border: 1px solid var(--crm-border);\n  background: rgba(255, 255, 255, 0.72);\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  font-weight: 700;\n}\n.dark[_nghost-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-title-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-action[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-action[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n}\n@media (hover: hover) {\n  .crm-suggestion-item[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n    border-color: var(--crm-border-strong);\n    box-shadow: 0 0.75rem 1.6rem rgba(22, 32, 51, 0.075);\n  }\n}\n@media (max-width: 991.98px) {\n  .crm-suggestion-list[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-suggestions-card[_ngcontent-%COMP%]   .crm-card-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .crm-suggestion-summary[_ngcontent-%COMP%] {\n    width: fit-content;\n    min-height: 1.85rem;\n    font-size: 0.62rem;\n  }\n  .crm-suggestion-list[_ngcontent-%COMP%] {\n    gap: 0.7rem;\n    padding: 0.75rem;\n  }\n  .crm-suggestion-item[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.65rem;\n    padding: 0.8rem;\n  }\n  .crm-suggestion-icon[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n  .crm-suggestion-title-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.45rem;\n  }\n  .crm-suggestion-title-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .crm-suggestion-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .crm-suggestion-action[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.58rem;\n    font-size: 0.68rem;\n  }\n}\n.crm-overview-grid-five[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.crm-operational-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(300px, 0.8fr) minmax(0, 1.2fr);\n  align-items: stretch;\n}\n.crm-dashboard-suggestions[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 1399px) {\n  .crm-overview-grid-five[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 991px) {\n  .crm-overview-grid-five[_ngcontent-%COMP%], .crm-operational-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.crm-live-button[_ngcontent-%COMP%] {\n  border-color: rgba(30, 168, 213, 0.25);\n  background: var(--crm-cyan-soft);\n  color: var(--crm-cyan);\n}\n.crm-live-status[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: -0.3rem 0 1.25rem;\n}\n.crm-status-item[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.72rem 0.85rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.8rem;\n  background: var(--crm-card);\n  box-shadow: 0 0.4rem 1.1rem rgba(22, 32, 51, 0.035);\n}\n.crm-status-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2rem;\n  height: 2rem;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.58rem;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n  font-size: 1rem;\n}\n.crm-status-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.1rem;\n}\n.crm-status-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.72rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-status-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-status-indicator[_ngcontent-%COMP%] {\n  width: 0.72rem;\n  height: 0.72rem;\n  flex: none;\n  border-radius: 50%;\n  background: var(--crm-red);\n  box-shadow: 0 0 0 0.3rem var(--crm-red-soft);\n}\n.crm-status-item.is-connected[_ngcontent-%COMP%]   .crm-status-indicator[_ngcontent-%COMP%] {\n  background: var(--crm-green);\n  box-shadow: 0 0 0 0.3rem var(--crm-green-soft);\n  animation: _ngcontent-%COMP%_crm-live-pulse 1.8s infinite;\n}\n.crm-spin-soft[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_crm-spin 1s linear infinite;\n}\n.crm-unavailable-value[_ngcontent-%COMP%] {\n  color: var(--crm-amber) !important;\n  font-size: 1rem !important;\n}\n.crm-live-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(280px, 0.85fr);\n  gap: 1rem;\n  align-items: stretch;\n}\n.crm-live-chart-card[_ngcontent-%COMP%], .crm-utility-live-card[_ngcontent-%COMP%], .crm-top-consumers-card[_ngcontent-%COMP%], .crm-health-card[_ngcontent-%COMP%], .crm-readiness-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 0.95rem;\n}\n.crm-live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.28rem 0.55rem;\n  border-radius: 999px;\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n  font-size: 0.62rem;\n  font-weight: 760;\n}\n.crm-live-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  animation: _ngcontent-%COMP%_crm-live-pulse 1.8s infinite;\n}\n.crm-live-metric-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.65rem;\n  padding: 0.9rem 1rem 0;\n}\n.crm-live-metric-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n  padding: 0.72rem;\n  border: 1px solid var(--crm-border);\n  border-radius: 0.72rem;\n  background: var(--crm-surface);\n}\n.crm-live-metric-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.6rem;\n  font-weight: 650;\n}\n.crm-live-metric-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.92rem;\n  font-weight: 760;\n}\n.crm-live-chart-wrap[_ngcontent-%COMP%] {\n  min-height: 15.5rem;\n  padding: 0.35rem 0.45rem 0;\n}\n.crm-chart-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.4rem;\n  margin: 0;\n  padding: 0.7rem 1rem 0.9rem;\n  border-top: 1px solid var(--crm-border);\n  color: var(--crm-muted);\n  font-size: 0.62rem;\n  line-height: 1.45;\n}\n.crm-chart-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 0.05rem;\n  color: var(--crm-primary);\n}\n.crm-utility-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  padding: 0.9rem 1rem 1rem;\n}\n.crm-utility-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%], .crm-utility-row-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.08rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--crm-text);\n  font-size: 0.74rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .crm-utility-row-foot[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n}\n.crm-utility-row-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--crm-primary);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.crm-progress-track[_ngcontent-%COMP%] {\n  height: 0.42rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--crm-surface-strong);\n}\n.crm-progress-track[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--crm-primary),\n      var(--crm-cyan));\n  transition: width 280ms ease;\n}\n.crm-secondary-live-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);\n}\n.crm-text-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--crm-primary);\n  font-size: 0.66rem;\n  font-weight: 720;\n}\n.crm-consumer-table[_ngcontent-%COMP%] {\n  padding: 0 1rem 1rem;\n}\n.crm-consumer-table-head[_ngcontent-%COMP%], .crm-consumer-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(210px, 1.5fr) minmax(90px, 0.55fr) minmax(130px, 0.8fr) minmax(70px, 0.4fr);\n  gap: 0.75rem;\n  align-items: center;\n}\n.crm-consumer-table-head[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid var(--crm-border);\n  color: var(--crm-muted);\n  font-size: 0.57rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.crm-consumer-row[_ngcontent-%COMP%] {\n  padding: 0.72rem 0.75rem;\n  border-bottom: 1px solid var(--crm-border);\n  transition: background 160ms ease, transform 160ms ease;\n}\n.crm-consumer-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.crm-consumer-name[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.65rem;\n}\n.crm-consumer-name[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.15rem;\n  height: 2.15rem;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.62rem;\n  background: var(--crm-primary-soft);\n  color: var(--crm-primary);\n}\n.crm-consumer-name[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.crm-consumer-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .crm-consumer-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.crm-consumer-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.74rem;\n  font-weight: 720;\n}\n.crm-consumer-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.58rem;\n}\n.crm-consumer-power[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.2rem;\n}\n.crm-consumer-power[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-text);\n  font-size: 0.82rem;\n  font-weight: 760;\n}\n.crm-consumer-power[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .crm-consumer-health[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.59rem;\n}\n.crm-consumer-health[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.3rem;\n}\n.crm-consumer-health[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.38rem;\n  border-radius: 999px;\n  background: var(--crm-surface);\n}\n.crm-relay-pill[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 0.24rem 0.48rem;\n  border-radius: 999px;\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n  font-size: 0.58rem;\n  font-weight: 760;\n  text-transform: uppercase;\n}\n.crm-relay-pill.is-off[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-health-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.crm-health-percent[_ngcontent-%COMP%] {\n  color: var(--crm-green);\n  font-size: 1.15rem;\n  font-weight: 780;\n}\n.crm-health-progress[_ngcontent-%COMP%] {\n  height: 0.55rem;\n  overflow: hidden;\n  margin: 0.15rem 1rem 0;\n  border-radius: 999px;\n  background: var(--crm-surface-strong);\n}\n.crm-health-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--crm-green),\n      var(--crm-cyan));\n}\n.crm-health-counters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.45rem;\n  padding: 0.85rem 1rem 0.7rem;\n}\n.crm-health-counters[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.58rem 0.45rem;\n  border-radius: 0.65rem;\n  text-align: center;\n}\n.crm-health-counters[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 780;\n}\n.crm-health-counters[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.52rem;\n  font-weight: 650;\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-online[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-delayed[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-offline[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-health-counters[_ngcontent-%COMP%]   .is-never[_ngcontent-%COMP%] {\n  background: var(--crm-surface-strong);\n  color: var(--crm-muted);\n}\n.crm-health-rule[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 1rem 0.9rem;\n  color: var(--crm-muted);\n  font-size: 0.57rem;\n  text-align: center;\n}\n.crm-readiness-state[_ngcontent-%COMP%] {\n  padding: 0.28rem 0.52rem;\n  border-radius: 999px;\n  font-size: 0.58rem;\n  font-weight: 760;\n}\n.crm-readiness-state.is-ready[_ngcontent-%COMP%] {\n  background: var(--crm-green-soft);\n  color: var(--crm-green);\n}\n.crm-readiness-state.is-partial[_ngcontent-%COMP%] {\n  background: var(--crm-amber-soft);\n  color: var(--crm-amber);\n}\n.crm-readiness-state.is-required[_ngcontent-%COMP%] {\n  background: var(--crm-red-soft);\n  color: var(--crm-red);\n}\n.crm-readiness-score[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.2rem 1rem 0.75rem;\n}\n.crm-readiness-score[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--crm-primary);\n  font-size: 1rem;\n  font-weight: 780;\n}\n.crm-readiness-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n  padding: 0 1rem 1rem;\n}\n.crm-readiness-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.48rem 0.58rem;\n  border-radius: 0.58rem;\n  background: var(--crm-surface);\n}\n.crm-readiness-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--crm-muted);\n  font-size: 0.61rem;\n}\n.crm-readiness-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--crm-green);\n  font-size: 0.61rem;\n  font-weight: 720;\n}\n.crm-readiness-list[_ngcontent-%COMP%]   strong.is-missing[_ngcontent-%COMP%] {\n  color: var(--crm-red);\n}\n@media (hover: hover) {\n  .crm-consumer-row[_ngcontent-%COMP%]:hover {\n    background: var(--crm-surface);\n    transform: translateX(2px);\n  }\n}\n@media (max-width: 1199.98px) {\n  .crm-live-grid[_ngcontent-%COMP%], .crm-secondary-live-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .crm-health-stack[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 991.98px) {\n  .crm-live-status[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .crm-live-metric-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .crm-consumer-table-head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .crm-consumer-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .crm-consumer-health[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 767.98px) {\n  .crm-hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .crm-explorer-button[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n  .crm-live-metric-row[_ngcontent-%COMP%], .crm-health-stack[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .crm-health-counters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .crm-consumer-row[_ngcontent-%COMP%] {\n    padding-inline: 0.2rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-live-pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.55;\n    transform: scale(0.82);\n  }\n}\n@keyframes _ngcontent-%COMP%_crm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.crm-idle-insight-card[_ngcontent-%COMP%], .crm-suggestions-launcher[_ngcontent-%COMP%] {\n  min-height: 360px;\n}\n.crm-idle-insight-card[_ngcontent-%COMP%] {\n  height: 360px;\n  max-height: 360px;\n}\n.crm-confirmed-total[_ngcontent-%COMP%] {\n  min-width: 36px;\n  justify-content: center;\n  background: rgba(14, 165, 233, 0.12);\n  color: #0369a1;\n  border: 1px solid rgba(14, 165, 233, 0.2);\n}\n.crm-idle-evidence-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 11px 12px;\n  margin-bottom: 12px;\n  border-radius: 12px;\n  background: rgba(14, 165, 233, 0.07);\n  color: #075985;\n  font-size: 12px;\n  line-height: 1.45;\n}\n.crm-idle-evidence-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  font-size: 17px;\n  color: #0284c7;\n}\n.crm-confirmed-idle-row[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding: 13px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 14px;\n  background: rgba(248, 250, 252, 0.7);\n}\n.crm-idle-device-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.crm-idle-title-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.crm-confirmed-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 7px;\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.11);\n  color: #047857;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.crm-idle-evidence[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px 12px;\n  margin-top: 8px;\n  color: #64748b;\n  font-size: 11px;\n}\n.crm-idle-evidence[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  gap: 6px;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  min-width: 50px;\n  height: 30px;\n  padding: 0 8px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   .is-on[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.22);\n  background: rgba(16, 185, 129, 0.1);\n  color: #047857;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   .is-off[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.2);\n  background: rgba(239, 68, 68, 0.09);\n  color: #b91c1c;\n}\n.crm-idle-command-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n.crm-idle-empty-state[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  gap: 13px;\n  min-height: 190px;\n  text-align: left;\n}\n.crm-idle-empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #334155;\n  font-size: 14px;\n}\n.crm-idle-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n}\n.crm-suggestions-launcher[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 22px;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  text-align: left;\n  color: inherit;\n  cursor: pointer;\n  background:\n    radial-gradient(\n      circle at 90% 10%,\n      rgba(245, 158, 11, 0.12),\n      transparent 38%),\n    var(--crm-card-bg, #fff);\n  transition:\n    transform 180ms ease,\n    box-shadow 180ms ease,\n    border-color 180ms ease;\n}\n.crm-suggestions-launcher[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(245, 158, 11, 0.42);\n  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.09);\n}\n.crm-suggestions-launcher-top[_ngcontent-%COMP%], .crm-suggestions-launcher-action[_ngcontent-%COMP%], .crm-suggestions-launcher-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.crm-suggestions-launcher-top[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.crm-live-indicator[_ngcontent-%COMP%], .crm-drawer-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #047857;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.crm-live-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .crm-drawer-eyebrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.12);\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%] {\n  gap: 17px;\n  margin: 34px 0 24px;\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  min-width: 84px;\n  font-size: 64px;\n  line-height: 0.95;\n  color: #0f172a;\n  letter-spacing: -0.06em;\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #1e293b;\n  font-size: 20px;\n}\n.crm-suggestions-launcher-count[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 10px 11px;\n  border-radius: 11px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 18px;\n  line-height: 1;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-critical[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-critical[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-warning[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.08);\n}\n.crm-suggestion-severity-summary[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #0369a1;\n}\n.crm-suggestions-launcher-action[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(148, 163, 184, 0.2);\n  color: #b45309;\n  font-size: 13px;\n  font-weight: 700;\n}\n.crm-suggestion-drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  background: rgba(15, 23, 42, 0.42);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.crm-suggestion-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1110;\n  display: flex;\n  flex-direction: column;\n  width: min(520px, 94vw);\n  height: 100vh;\n  background: #fff;\n  box-shadow: -24px 0 70px rgba(15, 23, 42, 0.22);\n  transform: translateX(105%);\n  transition: transform 220ms ease;\n  pointer-events: none;\n}\n.crm-suggestion-drawer.is-open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  pointer-events: auto;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 26px 26px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 5px;\n  color: #0f172a;\n  font-size: 24px;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 30px;\n  height: 30px;\n  margin-left: 7px;\n  border-radius: 9px;\n  background: #fef3c7;\n  color: #b45309;\n  font-size: 15px;\n}\n.crm-suggestion-drawer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.crm-drawer-close[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 11px;\n  background: #f1f5f9;\n  color: #334155;\n  cursor: pointer;\n  font-size: 20px;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  padding: 16px 26px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px;\n  border-radius: 11px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #0f172a;\n}\n.crm-suggestion-drawer-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 11px;\n}\n.crm-suggestion-drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px 20px 30px;\n}\n.crm-suggestion-drawer-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 13px;\n  padding: 16px;\n  margin-bottom: 12px;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #38bdf8;\n  border-radius: 14px;\n  background: #fff;\n}\n.crm-suggestion-drawer-item.is-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.crm-suggestion-drawer-item.is-critical[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.crm-suggestion-context[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-top: 10px;\n}\n.crm-suggestion-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 7px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 10px;\n}\n.crm-drawer-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 320px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.crm-drawer-empty[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  color: #10b981;\n  font-size: 48px;\n}\n.crm-drawer-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.crm-drawer-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 330px;\n  margin: 7px 0 0;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.dark[_nghost-%COMP%]   .crm-confirmed-idle-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-confirmed-idle-row[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-severity-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-severity-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-item[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #111827;\n  border-color: rgba(148, 163, 184, 0.2);\n}\n.dark[_nghost-%COMP%]   .crm-suggestions-launcher[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestions-launcher[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 90% 10%,\n      rgba(245, 158, 11, 0.12),\n      transparent 38%),\n    #111827;\n}\n.dark[_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestions-launcher-count[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-idle-empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-idle-empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-header[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crm-suggestion-drawer-summary[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: #0f172a;\n}\n@media (max-width: 720px) {\n  .crm-idle-insight-card[_ngcontent-%COMP%], .crm-suggestions-launcher[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .crm-suggestions-launcher-count[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    min-width: 62px;\n    font-size: 50px;\n  }\n  .crm-confirmed-idle-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .crm-confirmed-idle-row[_ngcontent-%COMP%]    > .crm-idle-command-actions[_ngcontent-%COMP%], .crm-confirmed-idle-row[_ngcontent-%COMP%]    > .crm-status-pill[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n  .crm-suggestion-drawer-header[_ngcontent-%COMP%], .crm-suggestion-drawer-summary[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n}\n/*# sourceMappingURL=crm.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrmComponent, { className: "CrmComponent", filePath: "src\\app\\components\\dashboards\\crm\\crm.component.ts", lineNumber: 50 });
})();
export {
  CrmComponent
};
//# sourceMappingURL=chunk-PBFA2NS3.js.map
