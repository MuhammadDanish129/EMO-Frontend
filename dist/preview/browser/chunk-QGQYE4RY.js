import {
  provideNativeDateAdapter
} from "./chunk-JJOWJPDK.js";
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

// src/app/components/management/management.routes.ts
var management = [
  {
    path: "",
    children: [
      {
        path: "user-type",
        loadComponent: () => import("./chunk-TXQQ2ULO.js").then((m) => m.UsertypeComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "sub-user-type",
        loadComponent: () => import("./chunk-YZYGILXP.js").then((m) => m.SubUserTypeComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "user",
        loadComponent: () => import("./chunk-BZHTVC7K.js").then((m) => m.UserComponent),
        providers: [provideNativeDateAdapter()]
      }
    ]
  }
];
var managementRoutingModule = class _managementRoutingModule {
  static {
    this.routes = management;
  }
  static {
    this.\u0275fac = function managementRoutingModule_Factory(t) {
      return new (t || _managementRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _managementRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(management), RouterModule] });
  }
};
export {
  management,
  managementRoutingModule
};
//# sourceMappingURL=chunk-QGQYE4RY.js.map
