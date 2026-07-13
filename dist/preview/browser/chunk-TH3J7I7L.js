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

// src/app/components/dashboards/live-consumption/live-consumption.routes.ts
var liveConsumption = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-PG3Y6ELR.js").then((m) => m.LiveConsumptionComponent),
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
//# sourceMappingURL=chunk-TH3J7I7L.js.map
