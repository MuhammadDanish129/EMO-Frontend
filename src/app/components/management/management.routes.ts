import { NgModule } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { RouterModule, Routes } from "@angular/router";

export const management: Routes = [
  {
    path: '', children: [
      {
        path: 'facility',
        loadComponent: () =>
          import('./facility/facility.component').then((m) => m.FacilityComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'user-type',
        loadComponent: () =>
          import('./usertype/usertype.component').then((m) => m.UsertypeComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'unit',
        loadComponent: () =>
          import('./unit/unit.component').then((m) => m.UnitComponent),
      },
      {
        path: 'section',
        loadComponent: () =>
          import('./section/section.component').then((m) => m.SectionComponent),
      },
      {
        path: 'subsection',
        loadComponent: () =>
          import('./subsection/subsection.component').then((m) => m.SubSectionComponent),
      },


    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(management)],
  exports: [RouterModule],
})
export class managementRoutingModule {
  static routes = management;
}
