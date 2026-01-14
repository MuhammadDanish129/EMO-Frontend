import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'',children:[
{
  path: '',
  loadComponent: () =>
    import('./crm/crm.component').then((m) => m.CrmComponent),
},


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}
