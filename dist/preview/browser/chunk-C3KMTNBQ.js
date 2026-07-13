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

// src/app/components/device/device.routes.ts
var device = [
  {
    path: "",
    children: [
      {
        path: "utility-management",
        loadComponent: () => import("./chunk-ANAUQHYM.js").then((m) => m.UtilityManagementComponent),
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
//# sourceMappingURL=chunk-C3KMTNBQ.js.map
