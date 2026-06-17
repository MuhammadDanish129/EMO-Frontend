import {
  RouterModule
} from "./chunk-J4QH6UQS.js";
import {
  provideNativeDateAdapter
} from "./chunk-6U6LEG24.js";
import {
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-R5AMMNLH.js";
import "./chunk-6EVL5ZQD.js";

// src/app/components/management/management.routes.ts
var management = [
  {
    path: "",
    children: [
      {
        path: "user-type",
        loadComponent: () => import("./chunk-2UUVZGVO.js").then((m) => m.UsertypeComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "sub-user-type",
        loadComponent: () => import("./chunk-SKC6CEBK.js").then((m) => m.SubUserTypeComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "user",
        loadComponent: () => import("./chunk-NVX2FKEF.js").then((m) => m.UserComponent),
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
//# sourceMappingURL=chunk-YD5AKYI6.js.map
