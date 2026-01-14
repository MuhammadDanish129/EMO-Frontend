// src/app/core/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { WebCryptoService } from '../crypto.service';
import { User } from './user/user.type';

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
    private cryptoService: WebCryptoService
  ) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post<any>(this.authUrl, {
        username,
        password,
      })
      .pipe(
        switchMap((response) => {
          console.log(response.data)
          return from(this.cryptoService.encrypt(response.data)).pipe(
            tap((encryptedData) => {
              this.accessToken = response.data.userToken;
              localStorage.setItem(this.sessionKey, encryptedData);
            }),
            map(() => true)
          );
        }),
        catchError((err) => {
          console.error('Login failed', err);
          return of(false);
        })
      );
  }

  signOutLocal(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem(this.sessionKey);
    localStorage.removeItem('otherInfo');
    // Return the observable
    return of(true);
  }

  logout(): void {
    localStorage.removeItem(this.sessionKey);
    this.router.navigate(['/sign-in']);
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
