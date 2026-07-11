import { Routes } from '@angular/router';
export const settings: Routes=[{path:'energy',loadComponent:()=>import('./energy-configuration/energy-configuration.component').then(m=>m.EnergyConfigurationComponent)}];
