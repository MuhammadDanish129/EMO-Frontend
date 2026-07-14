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

// src/app/components/core/core.route.ts
var core = [
  {
    path: "",
    children: [
      {
        path: "business-management",
        loadComponent: () => import("./chunk-ABPGZC2L.js").then((m) => m.BusinessManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "facility-management",
        loadComponent: () => import("./chunk-AEJCS5AB.js").then((m) => m.FacilityManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "add-business",
        loadComponent: () => import("./chunk-DWWTMD3F.js").then((m) => m.BusinessManagementAddUpdateComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "building-management",
        loadComponent: () => import("./chunk-T44MBZ3B.js").then((m) => m.BuildingManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "add-building",
        loadComponent: () => import("./chunk-HF7WUTVL.js").then((m) => m.BuildingManagementAddUpdateComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "floor-management",
        loadComponent: () => import("./chunk-SQ3XDXNJ.js").then((m) => m.FloorManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "section-management",
        loadComponent: () => import("./chunk-TJEXGADE.js").then((m) => m.SectionManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "office-management",
        loadComponent: () => import("./chunk-LTOHJINN.js").then((m) => m.OfficeManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "tenant-office-assignment",
        loadComponent: () => import("./chunk-FZJ3YDNV.js").then((m) => m.TenantOfficeAssignmentComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "business-admin-management",
        loadComponent: () => import("./chunk-BCBCKS43.js").then((m) => m.BusinessAdminManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "assign-tenant",
        loadComponent: () => import("./chunk-KUMLHW5O.js").then((m) => m.AssignTenantComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "device-management",
        loadComponent: () => import("./chunk-E2D5G4UL.js").then((m) => m.DeviceManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "sensor-management",
        loadComponent: () => import("./chunk-A4WQBASU.js").then((m) => m.SensorManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "appliance-management",
        loadComponent: () => import("./chunk-6DV2JKBD.js").then((m) => m.ApplianceManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "tenant-management",
        loadComponent: () => import("./chunk-FKRST5DM.js").then((m) => m.TenantManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "agreement-management",
        loadComponent: () => import("./chunk-6QHJLJRN.js").then((m) => m.AgreementManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "agreement-tenant-management",
        loadComponent: () => import("./chunk-MEZ3LAQD.js").then((m) => m.AgreementTenantManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "agreement-office-management",
        loadComponent: () => import("./chunk-WPLCTJ66.js").then((m) => m.AgreementOfficeManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: "contact-person-management",
        loadComponent: () => import("./chunk-VDYSSSXL.js").then((m) => m.ContactPersonManagementComponent),
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
//# sourceMappingURL=chunk-2UO5TLE7.js.map
