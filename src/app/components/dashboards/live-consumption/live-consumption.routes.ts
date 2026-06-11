import { NgModule } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { RouterModule, Routes } from "@angular/router";

export const liveConsumption: Routes = [
  {
    path: '', children: [
      {
          path: '',
          loadComponent: () =>
            import('./live-consumption.component').then((m) => m.LiveConsumptionComponent),
          providers: [provideNativeDateAdapter()]
        }
      


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(liveConsumption)],
  exports: [RouterModule],
})
export class LiveConsumptionRoutingModule {
  static routes = liveConsumption;
}
