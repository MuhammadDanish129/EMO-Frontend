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

// src/app/components/dashboards/live-consumption/live-consumption.routes.ts
var liveConsumption = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-6GA7TFRJ.js").then((m) => m.LiveConsumptionComponent),
        providers: [provideNativeDateAdapter()]
      }
    ]
  }
];
var LiveConsumptionRoutingModule = class _LiveConsumptionRoutingModule {
  static {
    this.routes = liveConsumption;
  }
  static {
    this.\u0275fac = function LiveConsumptionRoutingModule_Factory(t) {
      return new (t || _LiveConsumptionRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LiveConsumptionRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(liveConsumption), RouterModule] });
  }
};
export {
  LiveConsumptionRoutingModule,
  liveConsumption
};
//# sourceMappingURL=chunk-55KLFKFO.js.map
