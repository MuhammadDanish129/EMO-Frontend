import { NgModule } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { RouterModule, Routes } from "@angular/router";

export const core: Routes = [
  {
    path: '', children: [
      {
        path: 'business-management',
        loadComponent: () =>
          import('./business-management/business-management.component').then((m) => m.BusinessManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'facility-management',
        loadComponent: () =>
          import('./facility-management/facility-management.component').then((m) => m.FacilityManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'add-business',
        loadComponent: () =>
          import('./business-management/business-management-add-update/business-management-add-update.component').then((m) => m.BusinessManagementAddUpdateComponent),
        providers: [provideNativeDateAdapter()]
      },
       {
        path: 'building-management',
        loadComponent: () =>
          import('./building-management/building-management.component').then((m) => m.BuildingManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
       {
        path: 'add-building',
        loadComponent: () =>
          import('./building-management/building-management-add-update/building-management-add-update.component').then((m) => m.BuildingManagementAddUpdateComponent),
        providers: [provideNativeDateAdapter()]
      },
       {
        path: 'floor-management',
        loadComponent: () =>
          import('./floor-management/floor-management.component').then((m) => m.FloorManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
       {
        path: 'section-management',
        loadComponent: () =>
          import('./section-management/section-management.component').then((m) => m.SectionManagementComponent),
        providers: [provideNativeDateAdapter()]
      }, {
        path: 'office-management',
        loadComponent: () =>
          import('./office-management/office-management.component').then((m) => m.OfficeManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
       {
        path: 'tenant-office-assignment',
        loadComponent: () =>
          import('./tenant-office-assignment/tenant-office-assignment.component').then((m) => m.TenantOfficeAssignmentComponent),
        providers: [provideNativeDateAdapter()]
      },
       {
        path: 'business-admin-management',
        loadComponent: () =>
          import('./business-management/business-admin-management/business-admin-management.component').then((m) => m.BusinessAdminManagementComponent),
        providers: [provideNativeDateAdapter()]
      },

       {
        path: 'assign-tenant',
        loadComponent: () =>
          import('./tenant-office-assignment/assign-tenant/assign-tenant.component').then((m) => m.AssignTenantComponent),
        providers: [provideNativeDateAdapter()]
      },
        {
        path: 'device-management',
        loadComponent: () =>
          import('./device-management/device-management.component').then((m) => m.DeviceManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
       {
        path: 'sensor-management',
        loadComponent: () =>
          import('./sensor-management/sensor-management.component').then((m) => m.SensorManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'tenant-management',
        loadComponent: () =>
          import('./tenant-management/tenant-management.component').then((m) => m.TenantManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'agreement-management',
        loadComponent: () =>
          import('./agreement-management/agreement-management.component').then((m) => m.AgreementManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'agreement-tenant-management',
        loadComponent: () =>
          import('./agreement-management/agreement-tenant-management/agreement-tenant-management.component').then((m) => m.AgreementTenantManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'agreement-office-management',
        loadComponent: () =>
          import('./agreement-management/agreement-office-management/agreement-office-management.component').then((m) => m.AgreementOfficeManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      //   {
      //     path: 'user',
      //     loadComponent: () =>
      //       import('./user/user.component').then((m) => m.UserComponent),
      //     providers: [provideNativeDateAdapter()]
      //   }


    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(core)],
  exports: [RouterModule],
})
export class coreRoutingModule {
  static routes = core;
}
