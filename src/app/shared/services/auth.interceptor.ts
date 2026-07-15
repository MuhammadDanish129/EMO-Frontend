import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthUtils } from './auth.utils';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private redirectingToLogin = false;

  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has('No-Auth')) {
      return next.handle(req.clone({ headers: req.headers.delete('No-Auth') }));
    }

    let request = req;
    const token = this.authService.accessToken;

    if (token && !AuthUtils.isTokenExpired(token)) {
      request = req.clone({
        setHeaders: { authorization: `Bearer ${token}` }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP request failed', {
          status: error.status,
          url: request.url,
          message: error.message
        });

        // Network/server errors must not destroy the current route or hierarchy context.
        if (error.status === 0) {
          this.toaster.error(
            'The server could not be reached. Your current page and hierarchy have been preserved.',
            'Connection Error'
          );
        } else if (error.status >= 500) {
          this.toaster.error(
            error.error?.remarks || error.error?.message || 'The server could not complete this request.',
            'Server Error'
          );
        } else if (error.status === 404) {
          this.toaster.error('The requested record or endpoint was not found.', 'Not Found');
        } else if (error.status === 401) {
          // Only authentication failures should clear the session. Navigate through Angular
          // instead of reloading the browser so route state is handled predictably.
          if (!this.redirectingToLogin) {
            this.redirectingToLogin = true;
            this.authService.signOutLocal();
            this.toaster.error('Your session has expired. Please sign in again.', 'Authentication Expired');
            void this.router.navigate(['/auth/login']).finally(() => {
              this.redirectingToLogin = false;
            });
          }
        } else if (error.status === 403) {
          this.toaster.error('You do not have permission to perform this action.', 'Access Denied');
        }

        return throwError(() => error);
      })
    );
  }
}
