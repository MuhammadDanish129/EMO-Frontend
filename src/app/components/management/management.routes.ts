import { NgModule } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { RouterModule, Routes } from "@angular/router";

export const management: Routes = [
  {
    path: '', children: [
      {
        path: 'user-type',
        loadComponent: () =>
          import('./usertype/usertype.component').then((m) => m.UsertypeComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'sub-user-type',
        loadComponent: () =>
          import('./sub-user-type/sub-user-type.component').then((m) => m.SubUserTypeComponent),
        providers: [provideNativeDateAdapter()]
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./user/user.component').then((m) => m.UserComponent),
        providers: [provideNativeDateAdapter()]
      }


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
