import {
  UserManagementService
} from "./chunk-BKFPHQFE.js";
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  CommonModule,
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-AVLIJGNB.js";
import "./chunk-QURSFKIH.js";
import "./chunk-Y6Q6HMFU.js";

// src/app/components/dashboards/system-dashboard/system.services.ts
var SuperAdminDashboardService = class _SuperAdminDashboardService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /* ===============================
   * GET SUPER ADMIN DASHBOARD
   * =============================== */
  getDashboard() {
    return this.http.get(this.baseUrl + "/SuperAdminDashboard");
  }
  /* ===============================
   * GET BUSINESS WISE SUMMARY
   * =============================== */
  getBusinessWiseSummary() {
    return this.http.get(this.baseUrl + "/SuperAdminDashboard/BusinessWiseSummary");
  }
  static {
    this.\u0275fac = function SuperAdminDashboardService_Factory(t) {
      return new (t || _SuperAdminDashboardService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperAdminDashboardService, factory: _SuperAdminDashboardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/dashboards/system-dashboard/system-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = () => [1, 2, 3];
function SystemDashboardComponent_section_13_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275element(3, "i")(4, "b")(5, "small");
    \u0275\u0275elementEnd()();
  }
}
function SystemDashboardComponent_section_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "span")(2, "i")(3, "i");
    \u0275\u0275elementEnd();
  }
}
function SystemDashboardComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 14)(2, "div", 15)(3, "span", 16);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275element(6, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275element(8, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275element(10, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "strong");
    \u0275\u0275text(13, "Building your system overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Collecting businesses, facilities, offices, devices, and sensors.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 24);
    \u0275\u0275element(17, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 25);
    \u0275\u0275template(19, SystemDashboardComponent_section_13_div_19_Template, 6, 0, "div", 26)(20, SystemDashboardComponent_section_13_div_20_Template, 4, 0, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c1));
  }
}
function SystemDashboardComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 30)(1, "span", 31);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Dashboard data is unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 33);
    \u0275\u0275listener("click", function SystemDashboardComponent_section_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getDashboard());
    });
    \u0275\u0275text(9, "Try again");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function SystemDashboardComponent_ng_container_15_div_84_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 57);
    \u0275\u0275listener("click", function SystemDashboardComponent_ng_container_15_div_84_article_1_Template_article_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBusinessDetails(item_r5));
    })("keydown.enter", function SystemDashboardComponent_ng_container_15_div_84_article_1_Template_article_keydown_enter_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openBusinessDetails(item_r5));
    })("keydown.space", function SystemDashboardComponent_ng_container_15_div_84_article_1_Template_article_keydown_space_0_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.openBusinessDetails(item_r5);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "header", 58)(2, "div", 59)(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 61)(9, "div", 62)(10, "span");
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275text(12, " Facilities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 62)(17, "span");
    \u0275\u0275element(18, "i", 43);
    \u0275\u0275text(19, " Buildings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 62)(24, "span");
    \u0275\u0275element(25, "i", 45);
    \u0275\u0275text(26, " Floors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 62)(31, "span");
    \u0275\u0275element(32, "i", 47);
    \u0275\u0275text(33, " Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 62)(38, "span");
    \u0275\u0275element(39, "i", 63);
    \u0275\u0275text(40, " Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 62)(45, "span");
    \u0275\u0275element(46, "i", 64);
    \u0275\u0275text(47, " Sensors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 65)(52, "div", 66)(53, "span");
    \u0275\u0275text(54, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 67)(59, "span");
    \u0275\u0275text(60, "Occupied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 68)(65, "span");
    \u0275\u0275text(66, "Vacant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "strong");
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", "View admins for " + (item_r5.businessName || "Unnamed business"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.businessName ? item_r5.businessName.charAt(0) : "B", " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("title", item_r5.businessName || "Unnamed business");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.businessName || "Unnamed business", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 13, item_r5.facilityCount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, item_r5.buildingCount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 17, item_r5.floorCount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 19, item_r5.sectionCount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 21, item_r5.devicesCount || 0));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 23, item_r5.sensorsCount || 0));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 25, item_r5.activeOfficeCount));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 27, item_r5.occupiedOfficeCount));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 29, item_r5.vacantOfficeCount));
  }
}
function SystemDashboardComponent_ng_container_15_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, SystemDashboardComponent_ng_container_15_div_84_article_1_Template, 70, 31, "article", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredBusinessWiseSummary);
  }
}
function SystemDashboardComponent_ng_container_15_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.hasBusinessSearch ? "ri-search-line" : "ri-building-2-line");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasBusinessSearch ? "No matching businesses found" : "No business summary available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasBusinessSearch ? "Try another business name or clear the search." : "Business-level property data will appear here once available.", " ");
  }
}
function SystemDashboardComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "section", 35)(3, "div", 36)(4, "article", 37)(5, "span", 38);
    \u0275\u0275element(6, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39)(8, "span");
    \u0275\u0275text(9, "Businesses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, "Registered organizations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "article", 41)(17, "span", 38);
    \u0275\u0275element(18, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 39)(20, "span");
    \u0275\u0275text(21, "Facilities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Managed locations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "article", 42)(29, "span", 38);
    \u0275\u0275element(30, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 39)(32, "span");
    \u0275\u0275text(33, "Buildings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, "Across all facilities");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "article", 44)(41, "span", 38);
    \u0275\u0275element(42, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 39)(44, "span");
    \u0275\u0275text(45, "Floors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "Configured levels");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "article", 46)(53, "span", 38);
    \u0275\u0275element(54, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 39)(56, "span");
    \u0275\u0275text(57, "Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p");
    \u0275\u0275text(62, "Operational zones");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(63, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "article", 48)(65, "span", 38);
    \u0275\u0275element(66, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 39)(68, "span");
    \u0275\u0275text(69, "Offices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "strong");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p");
    \u0275\u0275text(74, "Total office inventory");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(75, "i", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "section", 49)(77, "header", 50)(78, "div", 51)(79, "p", 52);
    \u0275\u0275text(80, " Total Businesses: ");
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "input", 53);
    \u0275\u0275listener("input", function SystemDashboardComponent_ng_container_15_Template_input_input_83_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBusinessSearch($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(84, SystemDashboardComponent_ng_container_15_div_84_Template, 2, 1, "div", 54)(85, SystemDashboardComponent_ng_container_15_ng_template_85_Template, 7, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.ngIf;
    const noBusinessData_r7 = \u0275\u0275reference(86);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("is-refreshing", ctx_r1.isLoading);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, data_r6.counts.totalBusinesses));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 14, data_r6.counts.totalFacilities));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 16, data_r6.counts.totalBuildings));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 18, data_r6.counts.totalFloors));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 20, data_r6.counts.totalSections));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 22, data_r6.counts.totalOffices));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.filteredBusinessWiseSummary.length);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.businessSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredBusinessWiseSummary.length > 0)("ngIfElse", noBusinessData_r7);
  }
}
function SystemDashboardComponent_section_16_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "span");
    \u0275\u0275text(2, " Loading admins... ");
    \u0275\u0275elementEnd();
  }
}
function SystemDashboardComponent_section_16_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.adminErrorMessage, " ");
  }
}
function SystemDashboardComponent_section_16_div_28_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 92)(1, "div", 93);
    \u0275\u0275element(2, "img", 94);
    \u0275\u0275elementStart(3, "div")(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 96)(11, "div", 97);
    \u0275\u0275element(12, "i", 98);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 97);
    \u0275\u0275element(16, "i", 99);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 97);
    \u0275\u0275element(20, "i", 100);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 97);
    \u0275\u0275element(24, "i", 101);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const admin_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getUserAvatar(admin_r9), \u0275\u0275sanitizeUrl)("alt", admin_r9.name || "Business admin");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(admin_r9.name || "Unnamed admin");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(admin_r9.userName || "No username");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-active", admin_r9.isActive)("is-inactive", !admin_r9.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", admin_r9.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(admin_r9.subUserTypeName || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(admin_r9.userPhone || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(admin_r9.genderName || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(admin_r9.handlerName || "N/A");
  }
}
function SystemDashboardComponent_section_16_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275template(1, SystemDashboardComponent_section_16_div_28_article_1_Template, 27, 13, "article", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.businessAdmins);
  }
}
function SystemDashboardComponent_section_16_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "span");
    \u0275\u0275element(2, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "No admins found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "This business does not have admins assigned yet.");
    \u0275\u0275elementEnd()();
  }
}
function SystemDashboardComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 70);
    \u0275\u0275listener("click", function SystemDashboardComponent_section_16_Template_section_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBusinessDetails());
    });
    \u0275\u0275elementStart(1, "article", 71);
    \u0275\u0275listener("click", function SystemDashboardComponent_section_16_Template_article_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 72)(3, "div", 73)(4, "span", 74);
    \u0275\u0275element(5, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "span");
    \u0275\u0275text(8, "Business admins");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2", 76);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Assigned admins");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 77)(14, "span", 78);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 79);
    \u0275\u0275listener("click", function SystemDashboardComponent_section_16_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBusinessDetails());
    });
    \u0275\u0275element(17, "i", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 81)(19, "section", 82)(20, "div", 83)(21, "div")(22, "h3");
    \u0275\u0275text(23, "Assigned admins");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Users who can manage this business.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, SystemDashboardComponent_section_16_div_26_Template, 3, 0, "div", 84)(27, SystemDashboardComponent_section_16_div_27_Template, 3, 1, "div", 85)(28, SystemDashboardComponent_section_16_div_28_Template, 2, 1, "div", 86)(29, SystemDashboardComponent_section_16_div_29_Template, 7, 0, "div", 87);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const business_r10 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(business_r10.businessName || "Unnamed business");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.businessAdmins.length, " ", ctx_r1.businessAdmins.length === 1 ? "admin" : "admins", " ");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.isAdminLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAdminLoading && ctx_r1.adminErrorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAdminLoading && !ctx_r1.adminErrorMessage && ctx_r1.businessAdmins.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAdminLoading && !ctx_r1.adminErrorMessage && ctx_r1.businessAdmins.length === 0);
  }
}
var SystemDashboardComponent = class _SystemDashboardComponent {
  constructor(dashboardService, userManagementService) {
    this.dashboardService = dashboardService;
    this.userManagementService = userManagementService;
    this.dashboardData = null;
    this.businessWiseSummary = [];
    this.businessSearchTerm = "";
    this.selectedBusiness = null;
    this.businessAdmins = [];
    this.isLoading = false;
    this.isAdminLoading = false;
    this.errorMessage = "";
    this.adminErrorMessage = "";
  }
  ngOnInit() {
    this.getDashboard();
  }
  get filteredBusinessWiseSummary() {
    const searchTerm = this.businessSearchTerm.trim().toLowerCase();
    if (!searchTerm) {
      return this.businessWiseSummary;
    }
    return this.businessWiseSummary.filter((item) => (item.businessName || "").toLowerCase().includes(searchTerm));
  }
  get hasBusinessSearch() {
    return this.businessSearchTerm.trim().length > 0;
  }
  onBusinessSearch(event) {
    const target = event.target;
    this.businessSearchTerm = target?.value || "";
  }
  openBusinessDetails(item) {
    this.selectedBusiness = item;
    this.businessAdmins = [];
    this.adminErrorMessage = "";
    this.loadBusinessAdmins(item.businessId);
  }
  closeBusinessDetails() {
    this.selectedBusiness = null;
    this.businessAdmins = [];
    this.adminErrorMessage = "";
    this.isAdminLoading = false;
  }
  loadBusinessAdmins(businessId) {
    if (!businessId) {
      this.adminErrorMessage = "Business id is missing.";
      return;
    }
    this.isAdminLoading = true;
    this.userManagementService.getBusinessAdmins(businessId).subscribe({
      next: (response) => {
        this.isAdminLoading = false;
        if (response.success) {
          this.businessAdmins = response.data || [];
        } else {
          this.businessAdmins = [];
          this.adminErrorMessage = response.remarks || "No admin details found for this business.";
        }
      },
      error: () => {
        this.isAdminLoading = false;
        this.businessAdmins = [];
        this.adminErrorMessage = "Failed to load business admins.";
      }
    });
  }
  getUserAvatar(user) {
    if (user?.imageBase64) {
      return user.imageBase64;
    }
    switch ((user?.genderName || "").toLowerCase()) {
      case "male":
        return "assets/images/avatars/male.jpg";
      case "female":
        return "assets/images/avatars/female.jpg";
      default:
        return "assets/images/avatars/other.jpg";
    }
  }
  /* ===============================
   * GET DASHBOARD DATA
   * =============================== */
  getDashboard() {
    this.isLoading = true;
    this.errorMessage = "";
    this.dashboardService.getDashboard().subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success && response.data) {
          this.dashboardData = response.data;
          this.businessWiseSummary = response.data.businessWiseSummary || [];
        } else {
          this.dashboardData = null;
          this.businessWiseSummary = [];
          this.errorMessage = response.remarks || "No dashboard data found.";
        }
      },
      error: () => {
        this.isLoading = false;
        this.dashboardData = null;
        this.businessWiseSummary = [];
        this.errorMessage = "Something went wrong while loading dashboard.";
      }
    });
  }
  static {
    this.\u0275fac = function SystemDashboardComponent_Factory(t) {
      return new (t || _SystemDashboardComponent)(\u0275\u0275directiveInject(SuperAdminDashboardService), \u0275\u0275directiveInject(UserManagementService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemDashboardComponent, selectors: [["app-system-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 8, consts: [["noBusinessData", ""], [1, "system-dashboard"], [1, "system-page-header", "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], ["type", "button", 1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", "disabled:cursor-wait", "disabled:opacity-70", 3, "click", "disabled"], [1, "ri-refresh-line", "text-lg"], ["class", "dashboard-loading", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["class", "business-detail-backdrop", "role", "presentation", 3, "click", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "dashboard-loading"], [1, "system-loader"], ["aria-hidden", "true", 1, "loader-orbit"], [1, "loader-core"], [1, "ri-dashboard-3-line"], [1, "loader-node", "node-business"], [1, "ri-briefcase-4-line"], [1, "loader-node", "node-facility"], [1, "ri-community-line"], [1, "loader-node", "node-office"], [1, "ri-door-open-line"], ["aria-hidden", "true", 1, "loading-progress"], ["aria-hidden", "true", 1, "dashboard-skeleton"], ["class", "skeleton-stat", 4, "ngFor", "ngForOf"], ["class", "skeleton-business", 4, "ngFor", "ngForOf"], [1, "skeleton-stat"], [1, "skeleton-business"], [1, "error-state"], [1, "error-icon"], [1, "ri-error-warning-line"], ["type", "button", 3, "click"], [1, "dashboard-content"], ["aria-labelledby", "portfolio-heading", 1, "overview-section"], [1, "stats-grid"], [1, "stat-card", "stat-purple"], [1, "stat-icon"], [1, "stat-copy"], [1, "ri-arrow-right-up-line", "stat-corner"], [1, "stat-card", "stat-cyan"], [1, "stat-card", "stat-blue"], [1, "ri-building-4-line"], [1, "stat-card", "stat-amber"], [1, "ri-stack-line"], [1, "stat-card", "stat-pink"], [1, "ri-layout-grid-line"], [1, "stat-card", "stat-green"], [1, "panel", "business-panel"], [1, "panel-header", "business-header"], [1, "business-header-tools"], [1, "business-count"], ["type", "text", "aria-label", "Search business cards", "placeholder", "Search Businesses..", 1, "business-search", "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "input", "value"], ["class", "business-card-grid", 4, "ngIf", "ngIfElse"], [1, "business-card-grid"], ["class", "business-summary-card", "role", "button", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 1, "business-summary-card", 3, "click", "keydown.enter", "keydown.space"], [1, "business-card-header"], [1, "business-card-title"], [1, "business-avatar"], ["aria-label", "Property coverage", 1, "business-property-grid"], [1, "business-property-item"], [1, "ri-remote-control-2-line"], [1, "ri-cpu-line"], ["aria-label", "Office utilization", 1, "office-status-grid"], [1, "office-status-item", "status-active"], [1, "office-status-item", "status-occupied"], [1, "office-status-item", "status-vacant"], [1, "empty-state", "empty-state-wide"], ["role", "presentation", 1, "business-detail-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "business-detail-title", 1, "business-detail-modal", 3, "click"], [1, "business-detail-header"], [1, "business-detail-title"], [1, "business-avatar", "business-detail-avatar"], [1, "las", "la-users"], ["id", "business-detail-title"], [1, "business-detail-actions"], [1, "admin-count-pill"], ["type", "button", "aria-label", "Close business admins", 1, "business-detail-close", 3, "click"], [1, "ri-close-line"], [1, "business-detail-body"], [1, "admin-module"], [1, "admin-module-head"], ["class", "detail-loading", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "detail-error", 4, "ngIf"], ["class", "admin-list", 4, "ngIf"], ["class", "detail-empty", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "detail-loading"], [1, "detail-error"], [1, "admin-list"], ["class", "admin-row", 4, "ngFor", "ngForOf"], [1, "admin-row"], [1, "admin-person"], [3, "src", "alt"], [1, "admin-status"], [1, "admin-row-details"], [1, "admin-detail-item"], [1, "las", "la-id-badge"], [1, "las", "la-phone"], [1, "las", "la-user"], [1, "las", "la-user-cog"], [1, "detail-empty"]], template: function SystemDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "div")(5, "h1", 5);
        \u0275\u0275text(6, " System Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, " Monitor your entire property ecosystem, from businesses and facilities to office occupancy. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275listener("click", function SystemDashboardComponent_Template_button_click_9_listener() {
          return ctx.getDashboard();
        });
        \u0275\u0275element(10, "i", 8);
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(13, SystemDashboardComponent_section_13_Template, 21, 4, "section", 9)(14, SystemDashboardComponent_section_14_Template, 10, 1, "section", 10)(15, SystemDashboardComponent_ng_container_15_Template, 87, 24, "ng-container", 11)(16, SystemDashboardComponent_section_16_Template, 30, 7, "section", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275classProp("animate-spin", ctx.isLoading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isLoading ? "Refreshing" : "Refresh data");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading && !ctx.dashboardData);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dashboardData);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedBusiness);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.system-dashboard[_ngcontent-%COMP%] {\n  --sys-card: #ffffff;\n  --sys-surface: #f8f9fc;\n  --sys-surface-strong: #f0f2f8;\n  --sys-border: rgba(100, 116, 139, 0.16);\n  --sys-border-strong: rgba(100, 116, 139, 0.24);\n  --sys-text: #172033;\n  --sys-muted: #758096;\n  --sys-primary: #6f4bd8;\n  --sys-primary-soft: #eee9fc;\n  --sys-cyan: #1ea8d5;\n  --sys-cyan-soft: #e5f7fc;\n  --sys-blue: #4776d0;\n  --sys-blue-soft: #e9f0fc;\n  --sys-green: #20a97b;\n  --sys-green-soft: #e4f7f0;\n  --sys-amber: #d49320;\n  --sys-amber-soft: #fff4dc;\n  --sys-pink: #c45b91;\n  --sys-pink-soft: #fbeaf3;\n  --sys-red: #dc5a52;\n  --sys-red-soft: #fceae8;\n  --sys-shadow: 0 0.75rem 2.25rem rgba(22, 32, 51, 0.055);\n  --sys-page-pad: clamp(1rem, 2.2vw, 2.25rem);\n  width: min(100%, 100rem);\n  min-width: 0;\n  margin: 0 auto;\n  padding: var(--sys-page-pad);\n  padding-top: 0;\n  color: var(--sys-text);\n}\n.dark[_nghost-%COMP%]   .system-dashboard[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .system-dashboard[_ngcontent-%COMP%] {\n  --sys-card: #151b29;\n  --sys-surface: #1a2131;\n  --sys-surface-strong: #20283a;\n  --sys-border: rgba(255, 255, 255, 0.08);\n  --sys-border-strong: rgba(255, 255, 255, 0.13);\n  --sys-text: rgba(255, 255, 255, 0.9);\n  --sys-muted: rgba(255, 255, 255, 0.5);\n  --sys-primary-soft: rgba(111, 75, 216, 0.17);\n  --sys-cyan-soft: rgba(30, 168, 213, 0.14);\n  --sys-blue-soft: rgba(71, 118, 208, 0.15);\n  --sys-green-soft: rgba(32, 169, 123, 0.14);\n  --sys-amber-soft: rgba(212, 147, 32, 0.14);\n  --sys-pink-soft: rgba(196, 91, 145, 0.14);\n  --sys-red-soft: rgba(220, 90, 82, 0.14);\n  --sys-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.16);\n}\n.system-page-header[_ngcontent-%COMP%] {\n  margin-inline: calc(0rem - var(--sys-page-pad));\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  transition: opacity 180ms ease;\n}\n.dashboard-content.is-refreshing[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  pointer-events: none;\n}\n.overview-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-inline: 0.15rem;\n}\n.section-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--sys-primary);\n  font-size: 0.61rem;\n  font-weight: 750;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.12rem 0 0;\n  color: var(--sys-text);\n  font-size: 0.92rem;\n  font-weight: 730;\n}\n.section-badge[_ngcontent-%COMP%], .total-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 999px;\n  background: var(--sys-primary-soft);\n  color: var(--sys-primary);\n  font-size: 0.61rem;\n  font-weight: 700;\n}\n.section-badge[_ngcontent-%COMP%] {\n  padding: 0.36rem 0.62rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.stat-card[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%] {\n  border: 1px solid var(--sys-border);\n  background: var(--sys-card);\n  box-shadow: var(--sys-shadow);\n}\n.stat-card[_ngcontent-%COMP%] {\n  --stat-accent: var(--sys-primary);\n  position: relative;\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n  overflow: hidden;\n  padding: 1rem 0.9rem;\n  border-radius: 0.9rem;\n  animation: _ngcontent-%COMP%_sys-rise 0.42s ease-out both;\n  box-shadow: -0.32rem 0 0 -0.04rem var(--stat-accent), var(--sys-shadow);\n  transition:\n    transform 180ms ease,\n    border-color 180ms ease,\n    box-shadow 180ms ease;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 45ms;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 90ms;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 135ms;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 180ms;\n}\n.stat-card[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 225ms;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 3.7rem;\n  height: 3.7rem;\n  border-radius: 50%;\n  content: "";\n  inset-block-end: -1.9rem;\n  inset-inline-end: -1.7rem;\n  opacity: 0.5;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--sys-border-strong);\n  box-shadow: -0.32rem 0 0 -0.04rem var(--stat-accent), 0 1rem 2.4rem rgba(22, 32, 51, 0.085);\n  transform: translateY(-3px);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.55rem;\n  min-width: 2.55rem;\n  height: 2.55rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.72rem;\n  font-size: 1.08rem;\n}\n.stat-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.stat-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--sys-muted);\n  font-size: 0.64rem;\n  font-weight: 600;\n}\n.stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 0.08rem 0;\n  color: var(--sys-text);\n  font-size: clamp(1.12rem, 2vw, 1.5rem);\n  font-weight: 760;\n  letter-spacing: 0;\n}\n.stat-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--sys-muted);\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stat-corner[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--sys-muted);\n  font-size: 0.75rem;\n  inset-block-start: 0.65rem;\n  inset-inline-end: 0.7rem;\n  opacity: 0.38;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  --stat-accent: var(--sys-primary);\n}\n.stat-purple[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--sys-primary-soft);\n  color: var(--sys-primary);\n}\n.stat-purple[_ngcontent-%COMP%]::before {\n  background: var(--sys-primary-soft);\n}\n.stat-cyan[_ngcontent-%COMP%] {\n  --stat-accent: var(--sys-cyan);\n}\n.stat-cyan[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--sys-cyan-soft);\n  color: var(--sys-cyan);\n}\n.stat-cyan[_ngcontent-%COMP%]::before {\n  background: var(--sys-cyan-soft);\n}\n.stat-blue[_ngcontent-%COMP%] {\n  --stat-accent: var(--sys-blue);\n}\n.stat-blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--sys-blue-soft);\n  color: var(--sys-blue);\n}\n.stat-blue[_ngcontent-%COMP%]::before {\n  background: var(--sys-blue-soft);\n}\n.stat-amber[_ngcontent-%COMP%] {\n  --stat-accent: var(--sys-amber);\n}\n.stat-amber[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--sys-amber-soft);\n  color: var(--sys-amber);\n}\n.stat-amber[_ngcontent-%COMP%]::before {\n  background: var(--sys-amber-soft);\n}\n.stat-pink[_ngcontent-%COMP%] {\n  --stat-accent: var(--sys-pink);\n}\n.stat-pink[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--sys-pink-soft);\n  color: var(--sys-pink);\n}\n.stat-pink[_ngcontent-%COMP%]::before {\n  background: var(--sys-pink-soft);\n}\n.stat-green[_ngcontent-%COMP%] {\n  --stat-accent: var(--sys-green);\n}\n.stat-green[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--sys-green-soft);\n  color: var(--sys-green);\n}\n.stat-green[_ngcontent-%COMP%]::before {\n  background: var(--sys-green-soft);\n}\n.insights-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);\n  gap: 1.25rem;\n}\n.panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  border-radius: 1rem;\n  padding: 1.15rem;\n  animation: _ngcontent-%COMP%_sys-rise 0.45s ease-out both;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.72rem;\n}\n.panel-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.45rem;\n  min-width: 2.45rem;\n  height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.7rem;\n  font-size: 1.05rem;\n}\n.panel-icon-purple[_ngcontent-%COMP%] {\n  background: var(--sys-primary-soft);\n  color: var(--sys-primary);\n}\n.panel-icon-cyan[_ngcontent-%COMP%] {\n  background: var(--sys-cyan-soft);\n  color: var(--sys-cyan);\n}\n.panel-icon-green[_ngcontent-%COMP%] {\n  background: var(--sys-green-soft);\n  color: var(--sys-green);\n}\n.panel-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--sys-text);\n  font-size: 0.84rem;\n  font-weight: 730;\n}\n.panel-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--sys-muted);\n  font-size: 0.63rem;\n  line-height: 1.45;\n}\n.total-pill[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 0.34rem 0.58rem;\n}\n.occupancy-overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10.5rem 1fr;\n  align-items: center;\n  gap: clamp(1rem, 3vw, 2rem);\n  padding: 1rem;\n  border: 1px solid var(--sys-border);\n  border-radius: 0.9rem;\n  background: var(--sys-surface);\n}\n.occupancy-ring[_ngcontent-%COMP%] {\n  --occupancy: 0;\n  position: relative;\n  display: grid;\n  width: 8.5rem;\n  height: 8.5rem;\n  place-items: center;\n  margin: auto;\n  border-radius: 50%;\n  background: conic-gradient(var(--sys-primary) calc(var(--occupancy) * 1%), var(--sys-surface-strong) 0);\n  box-shadow: 0 0.8rem 1.8rem rgba(111, 75, 216, 0.12);\n}\n.occupancy-ring[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 6.3rem;\n  height: 6.3rem;\n  border-radius: 50%;\n  background: var(--sys-card);\n  box-shadow: inset 0 0 0 1px var(--sys-border);\n  content: "";\n}\n.occupancy-ring[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  text-align: center;\n  z-index: 1;\n}\n.occupancy-ring[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-size: 1.45rem;\n  font-weight: 780;\n  letter-spacing: -0.04em;\n}\n.occupancy-ring[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--sys-muted);\n  font-size: 0.61rem;\n  font-weight: 650;\n  text-transform: uppercase;\n}\n.occupancy-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n  padding: 0.78rem;\n  border: 1px solid var(--sys-border);\n  border-radius: 0.72rem;\n  background: var(--sys-card);\n}\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  color: var(--sys-muted);\n  font-size: 0.62rem;\n  font-weight: 600;\n}\n.summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-size: 0.9rem;\n  font-weight: 750;\n}\n.summary-dot[_ngcontent-%COMP%] {\n  width: 0.42rem;\n  min-width: 0.42rem;\n  height: 0.42rem;\n  margin-inline-end: 0.42rem;\n  border-radius: 50%;\n}\n.dot-green[_ngcontent-%COMP%] {\n  background: var(--sys-green);\n  box-shadow: 0 0 0 0.18rem var(--sys-green-soft);\n}\n.dot-slate[_ngcontent-%COMP%] {\n  background: #94a3b8;\n  box-shadow: 0 0 0 0.18rem var(--sys-surface-strong);\n}\n.dot-purple[_ngcontent-%COMP%] {\n  background: var(--sys-primary);\n  box-shadow: 0 0 0 0.18rem var(--sys-primary-soft);\n}\n.dot-cyan[_ngcontent-%COMP%] {\n  background: var(--sys-cyan);\n  box-shadow: 0 0 0 0.18rem var(--sys-cyan-soft);\n}\n.utilization-bars[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n  margin-top: 1rem;\n}\n.utilization-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.4rem;\n  color: var(--sys-muted);\n  font-size: 0.64rem;\n  font-weight: 600;\n}\n.utilization-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-weight: 720;\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 0.48rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--sys-surface-strong);\n}\n.progress-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  transition: width 500ms ease;\n}\n.progress-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--sys-primary),\n      #967ce8);\n}\n.progress-cyan[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--sys-cyan),\n      #64cbe9);\n}\n.activity-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100%;\n  flex-direction: column;\n}\n.activity-count[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.75rem;\n  height: 1.75rem;\n  flex: none;\n  place-items: center;\n  border-radius: 50%;\n  background: var(--sys-cyan-soft);\n  color: var(--sys-cyan);\n  font-size: 0.65rem;\n  font-weight: 750;\n}\n.activity-list[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 22rem;\n  overflow-y: auto;\n  padding-inline-end: 0.25rem;\n}\n.activity-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 2.4rem 1fr;\n  gap: 0.75rem;\n  padding: 0.7rem 0;\n}\n.activity-item[_ngcontent-%COMP%]:not(:last-child)::before {\n  position: absolute;\n  width: 1px;\n  background: var(--sys-border);\n  content: "";\n  inset-block: 2.85rem -0.15rem;\n  inset-inline-start: 1.18rem;\n}\n.activity-marker[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 2.4rem;\n  height: 2.4rem;\n  place-items: center;\n  border: 0.28rem solid var(--sys-card);\n  border-radius: 50%;\n  background: var(--sys-surface-strong);\n  color: var(--sys-muted);\n  font-size: 0.7rem;\n  font-weight: 750;\n  z-index: 1;\n}\n.activity-marker.is-latest[_ngcontent-%COMP%] {\n  background: var(--sys-primary);\n  box-shadow: 0 0 0 0.2rem var(--sys-primary-soft);\n  color: #fff;\n}\n.activity-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding-block: 0.12rem;\n}\n.activity-copy[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.activity-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--sys-text);\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.new-pill[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 0.16rem 0.34rem;\n  border-radius: 999px;\n  background: var(--sys-primary-soft);\n  color: var(--sys-primary);\n  font-size: 0.48rem;\n  font-weight: 750;\n  text-transform: uppercase;\n}\n.activity-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.38rem;\n  overflow: hidden;\n  margin: 0.24rem 0;\n  color: var(--sys-muted);\n  font-size: 0.6rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.activity-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.22rem;\n  min-width: 0.22rem;\n  height: 0.22rem;\n  border-radius: 50%;\n  background: var(--sys-border-strong);\n}\n.activity-copy[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--sys-muted);\n  font-size: 0.55rem;\n}\n.business-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0;\n}\n.business-header[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1.15rem;\n  border-bottom: 1px solid var(--sys-border);\n}\n.business-count[_ngcontent-%COMP%] {\n  flex: none;\n  margin: 0;\n  color: rgb(var(--primary));\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  white-space: nowrap;\n}\n.business-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(var(--primary));\n  font-weight: 600;\n}\n.business-header-tools[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex: 1 1 100%;\n  min-width: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.65rem;\n}\n.business-search[_ngcontent-%COMP%] {\n  min-width: 0;\n  color: var(--sys-text);\n}\n.business-search[_ngcontent-%COMP%]::placeholder {\n  color: var(--sys-muted);\n}\n.business-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  align-items: stretch;\n  gap: 0.75rem;\n  padding: 1rem;\n}\n.business-summary-card[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.75rem;\n  padding: 0.85rem;\n  border: 1px solid var(--sys-border);\n  border-radius: 0.5rem;\n  background:\n    linear-gradient(\n      180deg,\n      var(--sys-card),\n      var(--sys-surface));\n  animation: _ngcontent-%COMP%_sys-rise 0.45s ease-out both;\n  cursor: pointer;\n  transition:\n    border-color 180ms ease,\n    box-shadow 180ms ease,\n    transform 180ms ease;\n}\n.business-summary-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--sys-border-strong);\n  box-shadow: 0 0.9rem 2rem rgba(22, 32, 51, 0.075);\n  transform: translateY(-2px);\n}\n.business-summary-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.16rem solid rgba(111, 75, 216, 0.38);\n  outline-offset: 0.16rem;\n}\n.business-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.55rem;\n}\n.business-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-width: 0;\n  align-items: center;\n  gap: 0.55rem;\n}\n.business-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.1rem;\n  min-width: 2.1rem;\n  height: 2.1rem;\n  place-items: center;\n  border-radius: 0.5rem;\n  background:\n    linear-gradient(\n      145deg,\n      var(--sys-primary-soft),\n      var(--sys-cyan-soft));\n  color: var(--sys-primary);\n  font-size: 0.76rem;\n  font-weight: 780;\n}\n.business-card-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  flex: 1;\n}\n.business-card-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  overflow: hidden;\n  margin: 0;\n  color: var(--sys-text);\n  font-size: 0.72rem;\n  font-weight: 730;\n  line-height: 1.25;\n  overflow-wrap: anywhere;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.business-card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.12rem 0 0;\n  color: var(--sys-muted);\n  font-size: 0.54rem;\n  font-weight: 560;\n}\n.office-total-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 1.55rem;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  gap: 0.28rem;\n  padding: 0.28rem 0.46rem;\n  border-radius: 999px;\n  background: var(--sys-green-soft);\n  color: var(--sys-green);\n  font-size: 0.52rem;\n  font-weight: 750;\n  white-space: nowrap;\n}\n.office-total-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.business-property-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.48rem;\n}\n.business-property-item[_ngcontent-%COMP%], .office-status-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--sys-border);\n  border-radius: 0.5rem;\n  background: var(--sys-card);\n}\n.business-property-item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n  padding: 0.55rem;\n}\n.business-property-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .office-status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--sys-muted);\n  font-size: 0.52rem;\n  font-weight: 680;\n  text-transform: uppercase;\n}\n.business-property-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.22rem;\n}\n.business-property-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--sys-primary);\n  font-size: 0.72rem;\n}\n.business-property-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-size: 0.82rem;\n  font-weight: 760;\n}\n.office-status-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.48rem;\n}\n.office-status-item[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n  padding: 0.48rem;\n}\n.office-status-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 770;\n}\n.status-active[_ngcontent-%COMP%] {\n  background: var(--sys-green-soft);\n  color: var(--sys-green);\n}\n.status-occupied[_ngcontent-%COMP%] {\n  background: var(--sys-primary-soft);\n  color: var(--sys-primary);\n}\n.status-vacant[_ngcontent-%COMP%] {\n  background: var(--sys-cyan-soft);\n  color: var(--sys-cyan);\n}\n.status-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .status-active[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-green);\n}\n.status-occupied[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .status-occupied[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-primary);\n}\n.status-vacant[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .status-vacant[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-cyan);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 1;\n  min-height: 12rem;\n  place-content: center;\n  justify-items: center;\n  padding: 1.5rem;\n  color: var(--sys-muted);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  margin-bottom: 0.65rem;\n  border-radius: 0.85rem;\n  background: var(--sys-surface-strong);\n  color: var(--sys-primary);\n  font-size: 1.25rem;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-size: 0.72rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.61rem;\n}\n.empty-state-wide[_ngcontent-%COMP%] {\n  min-height: 15rem;\n}\n.business-detail-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  display: grid;\n  padding: 1rem;\n  background: rgba(15, 23, 42, 0.52);\n  inset: 0;\n  place-items: center;\n  z-index: 1000;\n}\n.business-detail-modal[_ngcontent-%COMP%] {\n  display: flex;\n  width: min(100%, 44rem);\n  max-height: calc(100vh - 2rem);\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--sys-border);\n  border-radius: 0.7rem;\n  background: var(--sys-card);\n  box-shadow: 0 1.6rem 4rem rgba(15, 23, 42, 0.24);\n  color: var(--sys-text);\n  animation: _ngcontent-%COMP%_sys-modal-in 160ms ease-out both;\n}\n.business-detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.15rem;\n  background: rgb(var(--primary));\n  color: #fff;\n}\n.business-detail-title[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.business-detail-avatar[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  min-width: 2.75rem;\n  height: 2.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  font-size: 1.35rem;\n}\n.business-detail-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.business-detail-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.74);\n  font-size: 0.58rem;\n  font-weight: 760;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.business-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.1rem 0 0;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 760;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.business-detail-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.12rem 0 0;\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.business-detail-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 0.5rem;\n}\n.admin-count-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 2rem;\n  padding: 0.38rem 0.68rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 760;\n  white-space: nowrap;\n}\n.business-detail-close[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2rem;\n  min-width: 2rem;\n  height: 2rem;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0.48rem;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 1rem;\n  transition:\n    background 180ms ease,\n    color 180ms ease,\n    border-color 180ms ease;\n}\n.business-detail-close[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.38);\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.business-detail-body[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 0;\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 0;\n}\n.admin-module[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n}\n.admin-module-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.95rem 1.15rem;\n  border-bottom: 1px solid var(--sys-border);\n  background: var(--sys-surface);\n}\n.admin-module-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--sys-text);\n  font-size: 0.8rem;\n  font-weight: 760;\n}\n.admin-module-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.14rem 0 0;\n  color: var(--sys-muted);\n  font-size: 0.62rem;\n}\n.detail-loading[_ngcontent-%COMP%], .detail-error[_ngcontent-%COMP%], .detail-empty[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 8rem;\n  place-items: center;\n  margin: 0.75rem;\n  padding: 1rem;\n  border: 1px solid var(--sys-border);\n  border-radius: 0.6rem;\n  background: var(--sys-surface);\n  color: var(--sys-muted);\n  font-size: 0.66rem;\n  text-align: center;\n}\n.detail-loading[_ngcontent-%COMP%] {\n  align-content: center;\n  gap: 0.55rem;\n}\n.detail-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 1.9rem;\n  height: 1.9rem;\n  border: 0.18rem solid var(--sys-primary-soft);\n  border-top-color: var(--sys-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sys-spin 0.8s linear infinite;\n}\n.detail-error[_ngcontent-%COMP%] {\n  color: var(--sys-red);\n}\n.detail-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.detail-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.6rem;\n  height: 2.6rem;\n  place-items: center;\n  margin-bottom: 0.35rem;\n  border-radius: 0.72rem;\n  background: var(--sys-primary-soft);\n  color: var(--sys-primary);\n  font-size: 1.15rem;\n}\n.detail-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-size: 0.72rem;\n}\n.detail-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.16rem 0 0;\n}\n.admin-list[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 0.75rem;\n}\n.admin-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  min-width: 0;\n  gap: 0.7rem 0.85rem;\n  padding: 0.8rem 0.9rem;\n  border: 1px solid transparent;\n  border-bottom-color: var(--sys-border);\n  background: var(--sys-card);\n}\n.admin-row[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.55rem;\n  border-top-right-radius: 0.55rem;\n}\n.admin-row[_ngcontent-%COMP%]:last-child {\n  border-bottom-color: transparent;\n  border-bottom-right-radius: 0.55rem;\n  border-bottom-left-radius: 0.55rem;\n}\n.admin-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--sys-border-strong);\n  background: var(--sys-surface);\n}\n.admin-person[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.admin-person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2.65rem;\n  min-width: 2.65rem;\n  height: 2.65rem;\n  border: 1px solid var(--sys-border);\n  border-radius: 0.65rem;\n  object-fit: cover;\n}\n.admin-person[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.admin-person[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: var(--sys-text);\n  font-size: 0.74rem;\n  font-weight: 760;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.admin-person[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.14rem 0 0;\n  color: var(--sys-muted);\n  font-size: 0.6rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.admin-row-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.45rem 0.7rem;\n  min-width: 0;\n}\n.admin-detail-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.32rem;\n  color: var(--sys-muted);\n  font-size: 0.6rem;\n  font-weight: 620;\n}\n.admin-detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--sys-primary);\n  font-size: 0.82rem;\n}\n.admin-detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.admin-status[_ngcontent-%COMP%] {\n  flex: none;\n  justify-self: end;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  font-size: 0.55rem;\n  font-weight: 760;\n}\n.admin-status.is-active[_ngcontent-%COMP%] {\n  background: var(--sys-green-soft);\n  color: var(--sys-green);\n}\n.admin-status.is-inactive[_ngcontent-%COMP%] {\n  background: var(--sys-red-soft);\n  color: var(--sys-red);\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin-bottom: 1.25rem;\n  padding: 1rem;\n  border: 1px solid rgba(220, 90, 82, 0.2);\n  border-radius: 0.9rem;\n  background: var(--sys-red-soft);\n}\n.error-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.5rem;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border-radius: 0.7rem;\n  background: var(--sys-card);\n  color: var(--sys-red);\n  font-size: 1.05rem;\n}\n.error-state[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-size: 0.72rem;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: var(--sys-muted);\n  font-size: 0.62rem;\n}\n.error-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 0.5rem 0.75rem;\n  border: 0;\n  border-radius: 0.6rem;\n  background: var(--sys-red);\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 700;\n}\n.dashboard-loading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: 1.25rem;\n  border: 1px solid var(--sys-border);\n  border-radius: 1rem;\n  background: var(--sys-card);\n  box-shadow: var(--sys-shadow);\n}\n.system-loader[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  gap: 0.85rem;\n  padding: 0.8rem 0.5rem 0.25rem;\n  text-align: center;\n}\n.loader-orbit[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 5.6rem;\n  height: 5.6rem;\n  place-items: center;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at center,\n      var(--sys-primary-soft) 0 42%,\n      transparent 43%),\n    conic-gradient(\n      from 0deg,\n      var(--sys-primary),\n      var(--sys-cyan),\n      var(--sys-green),\n      var(--sys-primary));\n  box-shadow: 0 1rem 2rem rgba(111, 75, 216, 0.14);\n  animation: _ngcontent-%COMP%_sys-spin 3.2s linear infinite;\n}\n.loader-orbit[_ngcontent-%COMP%]::before {\n  position: absolute;\n  border: 0.35rem solid var(--sys-card);\n  border-radius: inherit;\n  content: "";\n  inset: 0.42rem;\n}\n.loader-core[_ngcontent-%COMP%], .loader-node[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.7rem;\n  z-index: 1;\n}\n.loader-core[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.45rem;\n  height: 2.45rem;\n  background: var(--sys-primary-soft);\n  color: var(--sys-primary);\n  font-size: 1.08rem;\n  animation: _ngcontent-%COMP%_sys-loader-counter 3.2s linear infinite;\n}\n.loader-node[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1.65rem;\n  height: 1.65rem;\n  border: 0.12rem solid var(--sys-card);\n  background: var(--sys-card);\n  box-shadow: 0 0.45rem 1rem rgba(22, 32, 51, 0.12);\n  font-size: 0.82rem;\n  animation: _ngcontent-%COMP%_sys-loader-counter 3.2s linear infinite;\n}\n.node-business[_ngcontent-%COMP%] {\n  color: var(--sys-primary);\n  inset-block-start: -0.2rem;\n}\n.node-facility[_ngcontent-%COMP%] {\n  color: var(--sys-cyan);\n  inset-inline-end: -0.2rem;\n}\n.node-office[_ngcontent-%COMP%] {\n  color: var(--sys-green);\n  inset-block-end: -0.2rem;\n}\n.system-loader[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sys-text);\n  font-size: 0.82rem;\n}\n.system-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: var(--sys-muted);\n  font-size: 0.64rem;\n}\n.loading-progress[_ngcontent-%COMP%] {\n  height: 0.25rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--sys-surface-strong);\n}\n.loading-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 35%;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--sys-primary),\n      var(--sys-cyan));\n  animation: _ngcontent-%COMP%_sys-loading 1.2s ease-in-out infinite;\n}\n.dashboard-skeleton[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.skeleton-stat[_ngcontent-%COMP%], .skeleton-business[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--sys-border);\n  border-radius: 0.85rem;\n  background: var(--sys-surface);\n}\n.skeleton-stat[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 6rem;\n  align-items: center;\n  gap: 0.72rem;\n  padding: 0.8rem;\n}\n.skeleton-stat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.7rem;\n}\n.skeleton-stat[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  gap: 0.38rem;\n}\n.skeleton-stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .skeleton-stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .skeleton-stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .skeleton-stat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .skeleton-business[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .skeleton-business[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      100deg,\n      var(--sys-surface) 20%,\n      var(--sys-surface-strong) 45%,\n      var(--sys-surface) 70%);\n  background-size: 300% 100%;\n  animation: _ngcontent-%COMP%_sys-shimmer 1.5s linear infinite;\n}\n.skeleton-stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 52%;\n  height: 0.48rem;\n  border-radius: 999px;\n}\n.skeleton-stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 1rem;\n  border-radius: 999px;\n}\n.skeleton-stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  width: 92%;\n  height: 0.42rem;\n  border-radius: 999px;\n}\n.skeleton-business[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column: span 2;\n  gap: 0.65rem;\n  padding: 0.85rem;\n}\n.skeleton-business[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 68%;\n  height: 1rem;\n  border-radius: 999px;\n}\n.skeleton-business[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 2.4rem;\n  border-radius: 0.55rem;\n}\n@keyframes _ngcontent-%COMP%_sys-rise {\n  from {\n    opacity: 0;\n    transform: translateY(0.45rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sys-loading {\n  from {\n    transform: translateX(-110%);\n  }\n  to {\n    transform: translateX(300%);\n  }\n}\n@keyframes _ngcontent-%COMP%_sys-shimmer {\n  from {\n    background-position: 100% 0;\n  }\n  to {\n    background-position: -100% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_sys-modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(0.45rem) scale(0.985);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_sys-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_sys-loader-counter {\n  to {\n    transform: rotate(-360deg);\n  }\n}\n@media (max-width: 87.5rem) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 68rem) {\n  .insights-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .activity-list[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n}\n@media (max-width: 47.99rem) {\n  .system-dashboard[_ngcontent-%COMP%] {\n    --sys-page-pad: 0.75rem;\n    padding: var(--sys-page-pad);\n    padding-top: 0;\n  }\n  .system-page-header[_ngcontent-%COMP%] {\n    margin-bottom: 0.85rem !important;\n  }\n  .system-page-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 0.95rem 1rem !important;\n  }\n  .system-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    line-height: 1.2;\n  }\n  .system-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 100%;\n    font-size: 0.75rem;\n    line-height: 1.45;\n  }\n  .system-page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 2.5rem;\n  }\n  .dashboard-content[_ngcontent-%COMP%] {\n    gap: 0.9rem;\n  }\n  .overview-section[_ngcontent-%COMP%] {\n    gap: 0.65rem;\n  }\n  .stats-grid[_ngcontent-%COMP%], .dashboard-skeleton[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.65rem;\n  }\n  .skeleton-business[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    min-height: 5.65rem;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.55rem;\n    padding: 0.75rem;\n    border-radius: 0.7rem;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 2.15rem;\n    min-width: 2.15rem;\n    height: 2.15rem;\n    border-radius: 0.58rem;\n    font-size: 0.95rem;\n  }\n  .stat-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .stat-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 100%;\n    font-size: 0.52rem;\n  }\n  .section-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .occupancy-overview[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .occupancy-summary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .panel[_ngcontent-%COMP%] {\n    border-radius: 0.8rem;\n  }\n  .panel-header[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .panel-title[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 0.58rem;\n  }\n  .panel-icon[_ngcontent-%COMP%] {\n    width: 2.1rem;\n    min-width: 2.1rem;\n    height: 2.1rem;\n    border-radius: 0.58rem;\n    font-size: 0.95rem;\n  }\n  .panel-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .panel-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.58rem;\n  }\n  .business-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    padding: 0.85rem;\n  }\n  .business-header-tools[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n    align-items: stretch;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .business-search[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .business-count[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .business-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.65rem;\n    padding: 0.85rem;\n  }\n  .business-summary-card[_ngcontent-%COMP%] {\n    gap: 0.68rem;\n    padding: 0.75rem;\n  }\n  .business-card-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .business-card-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .business-property-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.42rem;\n  }\n  .business-property-item[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .office-status-grid[_ngcontent-%COMP%] {\n    gap: 0.42rem;\n  }\n  .office-status-item[_ngcontent-%COMP%] {\n    padding: 0.45rem;\n  }\n  .dashboard-loading[_ngcontent-%COMP%] {\n    padding: 0.9rem;\n    border-radius: 0.8rem;\n  }\n  .loader-orbit[_ngcontent-%COMP%] {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .loader-core[_ngcontent-%COMP%] {\n    width: 2.15rem;\n    height: 2.15rem;\n  }\n  .loader-node[_ngcontent-%COMP%] {\n    width: 1.45rem;\n    height: 1.45rem;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    min-height: 11rem;\n    padding: 1.1rem;\n  }\n  .business-detail-backdrop[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 0.75rem;\n    place-items: center;\n  }\n  .business-detail-modal[_ngcontent-%COMP%] {\n    width: min(100%, 28rem);\n    height: auto;\n    max-height: calc(100dvh - 1.5rem);\n    border-radius: 0.72rem;\n  }\n  .business-detail-header[_ngcontent-%COMP%] {\n    flex: none;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 0.78rem 0.85rem;\n  }\n  .business-detail-title[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    gap: 0.58rem;\n  }\n  .business-detail-avatar[_ngcontent-%COMP%] {\n    width: 2.35rem;\n    min-width: 2.35rem;\n    height: 2.35rem;\n  }\n  .business-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.84rem;\n  }\n  .business-detail-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 12rem;\n  }\n  .business-detail-body[_ngcontent-%COMP%] {\n    min-height: 0;\n    overflow-y: auto;\n    padding: 0;\n  }\n  .business-detail-actions[_ngcontent-%COMP%] {\n    gap: 0.38rem;\n  }\n  .admin-count-pill[_ngcontent-%COMP%] {\n    min-height: 1.75rem;\n    padding: 0.28rem 0.5rem;\n    font-size: 0.56rem;\n  }\n  .business-detail-close[_ngcontent-%COMP%] {\n    width: 1.8rem;\n    min-width: 1.8rem;\n    height: 1.8rem;\n  }\n  .admin-module[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .admin-module-head[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    padding: 0.75rem 0.85rem;\n    z-index: 2;\n  }\n  .admin-module-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.74rem;\n  }\n  .admin-module-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.58rem;\n  }\n  .admin-list[_ngcontent-%COMP%] {\n    gap: 0.55rem;\n    padding: 0.65rem;\n  }\n  .admin-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n    align-items: start;\n    gap: 0.62rem 0.65rem;\n    padding: 0.7rem;\n    border-color: var(--sys-border);\n    border-radius: 0.55rem;\n  }\n  .admin-row-details[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .admin-status[_ngcontent-%COMP%] {\n    justify-self: end;\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .detail-loading[_ngcontent-%COMP%], .detail-error[_ngcontent-%COMP%], .detail-empty[_ngcontent-%COMP%] {\n    min-height: 10rem;\n    margin: 0.65rem;\n  }\n}\n@media (max-width: 34rem) {\n  .stats-grid[_ngcontent-%COMP%], .dashboard-skeleton[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .skeleton-business[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  .occupancy-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .office-total-badge[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .office-status-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .business-property-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .office-status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.48rem;\n  }\n  .business-property-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .office-status-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n  }\n  .error-state[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .error-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .business-detail-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 9rem;\n  }\n  .business-detail-header[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: row;\n  }\n  .business-detail-actions[_ngcontent-%COMP%] {\n    width: auto;\n    justify-content: flex-end;\n  }\n  .admin-count-pill[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .admin-row-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 2.35rem;\n    min-width: 2.35rem;\n    height: 2.35rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    scroll-behavior: auto !important;\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n/*# sourceMappingURL=system-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemDashboardComponent, { className: "SystemDashboardComponent", filePath: "src\\app\\components\\dashboards\\system-dashboard\\system-dashboard.component.ts", lineNumber: 20 });
})();
export {
  SystemDashboardComponent
};
//# sourceMappingURL=chunk-6RLJSNKA.js.map
