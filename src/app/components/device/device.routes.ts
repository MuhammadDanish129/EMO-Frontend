import { NgModule } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { RouterModule, Routes } from "@angular/router";

export const device: Routes = [
  {
    path: '', children: [
      {
        path: 'utility-management',
        loadComponent: () =>
          import('./utility-management/utility-management.component').then((m) => m.UtilityManagementComponent),
        providers: [provideNativeDateAdapter()]
      },
      


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(device)],
  exports: [RouterModule],
})
export class deviceRoutingModule {
  static routes = device;
}
