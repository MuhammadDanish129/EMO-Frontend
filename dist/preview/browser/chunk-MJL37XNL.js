import {
  RouterModule
} from "./chunk-J4QH6UQS.js";
import {
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-R5AMMNLH.js";
import "./chunk-6EVL5ZQD.js";

// src/app/components/dashboards/dashboard.routes.ts
var admin = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-754G7X2O.js").then((m) => m.CrmComponent)
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
//# sourceMappingURL=chunk-MJL37XNL.js.map
