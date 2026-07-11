import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NavigationError, RouterOutlet, provideRouter, withNavigationErrorHandler } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { App_Route } from './app.routes';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthGuard } from './shared/services/guards/auth.guard';
import { AuthInterceptor } from './shared/services/auth.interceptor';

const chunkLoadErrorPattern = /Failed to fetch dynamically imported module|Loading chunk|Importing a module script failed|error loading dynamically imported module/i;
const chunkLoadRetryKey = 'emo.chunk-load-retry-url';

function handleNavigationError(error: NavigationError): void {
  const errorText = [
    error.error?.message,
    error.error?.toString?.(),
    String(error.error ?? '')
  ].join(' ');

  if (!chunkLoadErrorPattern.test(errorText) || typeof window === 'undefined') {
    console.error(error);
    return;
  }

  try {
    const currentUrl = window.location.href;
    const retriedUrl = window.sessionStorage.getItem(chunkLoadRetryKey);

    if (retriedUrl === currentUrl) {
      window.sessionStorage.removeItem(chunkLoadRetryKey);
      console.error(error);
      return;
    }

    window.sessionStorage.setItem(chunkLoadRetryKey, currentUrl);
  } catch {
    console.error(error);
  }

  window.location.reload();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(App_Route, withNavigationErrorHandler(handleNavigationError)),
    RouterOutlet,
    ColorPickerService,
    provideAnimations(),

    // ✅ HttpClient + Interceptors (Standalone way)
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ Register interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

    AuthGuard,

    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule, // still safe to keep
      ColorPickerModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-bottom-center'
      })
    ),
  ]
};
