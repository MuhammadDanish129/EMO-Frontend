// app.routes.ts
import { Route } from '@angular/router';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { AuthGuard } from './shared/services/guards/auth.guard';

export const App_Route: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },

  {
    path: 'auth/login',
    loadComponent: () =>
      import('./authentication/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],         // Protects all children
    canActivateChild: [AuthGuard],    // Optional: additional protection
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboards/dashboard.routes').then((m) => m.admin),
        // canLoad: [AuthGuard],         // Ensures lazy-loaded module is protected
      },
    ],
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],         // Protects all children
    canActivateChild: [AuthGuard],    // Optional: additional protection
    children: [
      {
        path: 'live-consumption',
        loadChildren: () =>
          import('./components/dashboards/live-consumption/live-consumption.routes').then((m) => m.liveConsumption),
        // canLoad: [AuthGuard],         // Ensures lazy-loaded module is protected
      },
    ],
  },
  {
    path: 'management',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],         // Protects all children
    canActivateChild: [AuthGuard],    // Optional: additional protection
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/management/management.routes').then((m) => m.management),
        // canLoad: [AuthGuard],         // Ensures lazy-loaded module is protected
      },
    ],

  },
  {
    path: 'core',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],         // Protects all children
    canActivateChild: [AuthGuard],    // Optional: additional protection
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/core/core.route').then((m) => m.core),
        // canLoad: [AuthGuard],         // Ensures lazy-loaded module is protected
      },
    ],

  },
  {
    path: 'device',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],         // Protects all children
    canActivateChild: [AuthGuard],    // Optional: additional protection
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/device/device.routes').then((m) => m.device),
        // canLoad: [AuthGuard],         // Ensures lazy-loaded module is protected
      },
    ],

  },

  // Optional: fallback route
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
