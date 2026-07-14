import {
  RouterModule
} from "./chunk-5DAVUJF5.js";
import "./chunk-EQ2Y7ZIZ.js";
import {
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-AVLIJGNB.js";
import "./chunk-QURSFKIH.js";
import "./chunk-Y6Q6HMFU.js";

// src/app/components/dashboards/dashboard.routes.ts
var admin = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-XIBHGIP3.js").then((m) => m.CrmComponent)
      },
      {
        path: "crm",
        pathMatch: "full",
        loadComponent: () => import("./chunk-XIBHGIP3.js").then((m) => m.CrmComponent)
      },
      {
        path: "system-dashboard",
        pathMatch: "full",
        loadComponent: () => import("./chunk-6RLJSNKA.js").then((m) => m.SystemDashboardComponent)
      },
      {
        path: "crm/deep-dive",
        loadComponent: () => import("./chunk-74OGTY2U.js").then((m) => m.EnergyDeepDiveComponent)
      },
      {
        path: "crm/historical-data",
        loadComponent: () => import("./chunk-V2R3REQY.js").then((m) => m.HistoricalDataExplorerComponent)
      }
    ]
  }
];
var dashboardRoutingModule = class _dashboardRoutingModule {
  static {
    this.routes = admin;
  }
  static {
    this.\u0275fac = function dashboardRoutingModule_Factory(t) {
      return new (t || _dashboardRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _dashboardRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(admin), RouterModule] });
  }
};
export {
  admin,
  dashboardRoutingModule
};
//# sourceMappingURL=chunk-FLDAVODB.js.map
