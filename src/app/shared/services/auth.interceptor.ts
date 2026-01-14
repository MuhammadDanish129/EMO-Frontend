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
import { AuthService } from './auth.service';
import { AuthUtils } from './auth.utils';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService,
        private _toaster: ToastrService) {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // 👉 Skip auth if request has No-Auth header
        if (req.headers.has('No-Auth')) {
            const headers = req.headers.delete('No-Auth'); // remove custom header
            return next.handle(req.clone({ headers }));
        }

        let newReq = req;

        // 👉 Add Authorization if token exists and is NOT expired
        if (
            this._authService.accessToken &&
            !AuthUtils.isTokenExpired(this._authService.accessToken)
        ) {
            newReq = req.clone({
                setHeaders: {
                    authorization: `Bearer ${this._authService.accessToken}`
                }
            });
        }

        return next.handle(newReq).pipe(
            catchError((error) => {
              console.log('Error from interceptor', error);
              if(error.status === 0 || error.status === 500){
                this._toaster.error('Server is not responding. Please try again later.', 'Server Error');
              }
              if(error.status === 401){
                this._toaster.error('Re-login to Access the System', 'Authentication Expired');
              }
              // this._toaster.error
                // 👉 Handle Unauthorized 401
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    // Remove local session token
                    this._authService.signOutLocal();
                    // Reload the app
                    location.reload();

                   this._toaster.error('Re-login to Access the System', 'Authentication Expired');
                }

                return throwError(() => error);
            })
        );
    }
}
