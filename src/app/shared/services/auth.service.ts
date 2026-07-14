// src/app/core/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { WebCryptoService } from '../crypto.service';
import { User } from './user/user.type';
import { NavService } from './nav.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.baseUrl;
  private readonly authUrl = this.baseUrl + '/auth';
  private readonly sessionKey = 'auth_user';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cryptoService: WebCryptoService,
    private navService: NavService
  ) { }

//   login(username: string, password: string): Observable<boolean> {
//   return this.http
//     .post<any>(this.authUrl, { username, password })
//     .pipe(
//       switchMap((response) => {

//         const securePayload = {
//           userId: response.data.userId,
//           name: response.data.name,
//           username: response.data.username,
//           userToken: response.data.userToken,
//           fkSubUserType: response.data.fkSubUserType,
//           subUserTypeLevel: response.data.subUserTypeLevel,
//           subUserTypeName: response.data.subUserTypeName,
//           fkUserType: response.data.fkUserType,
//           fkGender: response.data.fkGender,
//           genderName: response.data.genderName,
//           isActive: response.data.isActive,
//           fkBusiness: response.data.fkBusiness,
//           businessName:response.data.businessName,
//           userTypeLevel: response.data.userTypeLevel,
//           fkHandler:response.data.fkHandler,
//           handlerName:response.data.handlerName
//         };

//         // store avatar separately (NOT encrypted)
//         if (response.data.imageBase64) {
//           localStorage.setItem(
//             'userAvatar',
//             response.data.imageBase64
//           );
//         }

//         return from(this.cryptoService.encrypt(securePayload)).pipe(
//         tap((encryptedData) => {
//   this.accessToken = response.data.userToken;
//   localStorage.setItem(this.sessionKey, encryptedData);

//   setTimeout(() => {
//     this.navService.init();   // ⭐ FORCE NAV REFRESH
//   }, 50);
// }),

//           map(() => true)
//         );
//       }),
//       catchError((err) => {
//         console.error('Login failed', err);
//         return of(false);
//       })
//     );
// }

login(username: string, password: string): Observable<any> {
  this.clearLocalSession();
  return this.http
    .post<any>(this.authUrl, { username, password })
    .pipe(
      switchMap((response) => {

        // ❌ If backend failed → return immediately
        if (!response?.success) {
          this.clearLocalSession();
          return of(response);
        }

        const normalizedUsername = response.data.userName || response.data.username || username;
        const securePayload = {
          userId: response.data.userId,
          name: response.data.name,
          username: normalizedUsername,
          userToken: response.data.userToken,
          fkSubUserType: response.data.fkSubUserType,
          subUserTypeLevel: response.data.subUserTypeLevel,
          subUserTypeName: response.data.subUserTypeName,
          fkUserType: response.data.fkUserType,
          fkGender: response.data.fkGender,
          genderName: response.data.genderName,
          isActive: response.data.isActive,
          fkBusiness: response.data.fkBusiness,
          businessName: response.data.businessName,
          userTypeLevel: response.data.userTypeLevel,
          fkHandler: response.data.fkHandler,
          handlerName: response.data.handlerName
        };

        if (response.data.imageBase64) {
          localStorage.setItem('userAvatar', response.data.imageBase64);
        }

        return from(this.cryptoService.encrypt(securePayload)).pipe(
          tap((encryptedData) => {
            this.accessToken = response.data.userToken;
            localStorage.setItem('socket_username', normalizedUsername);
            localStorage.setItem(this.sessionKey, encryptedData);

            setTimeout(() => {
              this.navService.init();
            }, 50);
          }),
          map(() => response) // ✅ return full backend response
        );
      }),
      catchError((err) => {
        console.error('Login failed', err);
        this.clearLocalSession();

        return of({
          success: false,
          remarks: err?.error?.remarks || 'Server error occurred'
        });
      })
    );
}
  signOutLocal(): Observable<any> {
    this.clearLocalSession();
    this.router.navigate(['/sign-in']);
    this.navService.resetMenu();
    return of(true);
  }

  logout(): void {
    this.clearLocalSession();
    this.router.navigate(['/sign-in']);
  }

  private clearLocalSession(): void {
    localStorage.removeItem(this.sessionKey);
    localStorage.removeItem('otherInfo');
    localStorage.removeItem('socket_username');
    window.dispatchEvent(new Event('auth-session-cleared'));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.sessionKey);
  }

  async getUser(): Promise<any> {
    const encrypted = localStorage.getItem(this.sessionKey);
    if (!encrypted) return null;
    try {
      return await this.cryptoService.decrypt(encrypted) as User;
    } catch (e) {
      console.error('Decryption failed', e);
      return null;
    }
  }


  get accessToken(): string {
    return localStorage.getItem('otherInfo') ?? '';
  }

  set accessToken(token: string) {
    localStorage.setItem('otherInfo', token);
  }

  check(): Observable<boolean> {
    return of(this.isAuthenticated());
  }
}
