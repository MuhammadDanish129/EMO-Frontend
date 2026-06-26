import { NgModule } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./crm/crm.component').then((m) => m.CrmComponent),
      },
      {
        path: 'crm',
        pathMatch: 'full',
        loadComponent: () =>
          import('./crm/crm.component').then((m) => m.CrmComponent),
      },
       {
        path: 'system-dashboard',
        pathMatch: 'full',
        loadComponent: () =>
          import('./system-dashboard/system-dashboard.component').then((m) => m.SystemDashboardComponent),
      },
      {
        path: 'crm/deep-dive',
        loadComponent: () =>
          import('./crm/energy-deep-dive/energy-deep-dive.component')
            .then((m) => m.EnergyDeepDiveComponent),
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}
