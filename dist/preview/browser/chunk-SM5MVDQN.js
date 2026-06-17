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

// src/app/components/device/device.routes.ts
var device = [
  {
    path: "",
    children: [
      {
        path: "utility-management",
        loadComponent: () => import("./chunk-BIJNPZPK.js").then((m) => m.UtilityManagementComponent),
        providers: [provideNativeDateAdapter()]
      }
    ]
  }
];
var deviceRoutingModule = class _deviceRoutingModule {
  static {
    this.routes = device;
  }
  static {
    this.\u0275fac = function deviceRoutingModule_Factory(t) {
      return new (t || _deviceRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _deviceRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(device), RouterModule] });
  }
};
export {
  device,
  deviceRoutingModule
};
//# sourceMappingURL=chunk-SM5MVDQN.js.map
