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

// src/app/components/core/core.route.ts
var core = [
  {
    path: "",
    children: [
      {
        path: "business-management",
        loadComponent: () => import("./chunk-PWCGZFIB.js").then((m) => m.BusinessManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "facility-management",
        loadComponent: () => import("./chunk-Y4CJJE2Y.js").then((m) => m.FacilityManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "add-business",
        loadComponent: () => import("./chunk-NA62OIZI.js").then((m) => m.BusinessManagementAddUpdateComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "building-management",
        loadComponent: () => import("./chunk-GAMCHWGH.js").then((m) => m.BuildingManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "add-building",
        loadComponent: () => import("./chunk-RF4KJP4X.js").then((m) => m.BuildingManagementAddUpdateComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "floor-management",
        loadComponent: () => import("./chunk-JFNG6VVG.js").then((m) => m.FloorManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "section-management",
        loadComponent: () => import("./chunk-V5CJPWHX.js").then((m) => m.SectionManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "office-management",
        loadComponent: () => import("./chunk-7OOO7SSD.js").then((m) => m.OfficeManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "tenant-office-assignment",
        loadComponent: () => import("./chunk-LEA3P4RA.js").then((m) => m.TenantOfficeAssignmentComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "business-admin-management",
        loadComponent: () => import("./chunk-62XAVUU5.js").then((m) => m.BusinessAdminManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "assign-tenant",
        loadComponent: () => import("./chunk-P7CQV4UF.js").then((m) => m.AssignTenantComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "device-management",
        loadComponent: () => import("./chunk-PCU2P7N5.js").then((m) => m.DeviceManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "sensor-management",
        loadComponent: () => import("./chunk-MLZSIRTE.js").then((m) => m.SensorManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "tenant-management",
        loadComponent: () => import("./chunk-CUUSKYIK.js").then((m) => m.TenantManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "agreement-management",
        loadComponent: () => import("./chunk-IWNYWVMQ.js").then((m) => m.AgreementManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "agreement-tenant-management",
        loadComponent: () => import("./chunk-U6J3D5MV.js").then((m) => m.AgreementTenantManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "agreement-office-management",
        loadComponent: () => import("./chunk-WGOHWJH4.js").then((m) => m.AgreementOfficeManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "contact-person-management",
        loadComponent: () => import("./chunk-ZQHBECD7.js").then((m) => m.ContactPersonManagementComponent),
        providers: [provideNativeDateAdapter()]
      }
      //   {
      //     path: 'user',
      //     loadComponent: () =>
      //       import('./user/user.component').then((m) => m.UserComponent),
      //     providers: [provideNativeDateAdapter()]
      //   }
    ]
  }
];
var coreRoutingModule = class _coreRoutingModule {
  static {
    this.routes = core;
  }
  static {
    this.\u0275fac = function coreRoutingModule_Factory(t) {
      return new (t || _coreRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _coreRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(core), RouterModule] });
  }
};
export {
  core,
  coreRoutingModule
};
//# sourceMappingURL=chunk-QFPGEXPC.js.map
