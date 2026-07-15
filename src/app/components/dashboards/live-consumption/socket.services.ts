// shared/services/socket.service.ts
// If this service is inside the same component folder, keep the filename as socket.services.ts.
// If it is in shared/services, name it socket.service.ts and update your imports accordingly.

import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

type SocketCallback = (...args: any[]) => void;

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket | null = null;
  private readonly SOCKET_URL = 'http://localhost:6455';

  private readonly listeners = new Map<string, Set<SocketCallback>>();
  private readonly activeSubscriptions = new Map<string, number>();

  constructor() {
    window.addEventListener('auth-session-cleared', () => this.disconnect());
  }

  connect(): void {
    const auth = this.getSocketAuth();
    if (!this.hasLocalSession() || !auth.username || !auth.token) {
      this.disconnect();
      console.warn('Socket connection skipped because the authenticated session is missing.');
      return;
    }

    if (this.socket?.connected) return;

    if (this.socket) {
      this.socket.auth = auth;
      this.socket.connect();
      return;
    }

    this.socket = io(this.SOCKET_URL, {
      transports: ['websocket'],
      auth,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      autoConnect: true
    });

    this.restoreListeners();
    this.socket.io.on('reconnect_attempt', () => {
      if (this.socket) this.socket.auth = this.getSocketAuth();
    });
    this.socket.on('connect', () => this.restoreSubscriptions());

    this.socket.on('connect', () => {
      console.log('✅ Socket connected:', this.socket?.id);
    });

    this.socket.on('disconnect', (reason) => {
      console.warn('🛑 Socket disconnected:', reason);
    });

    this.socket.on('connect_error', (err) => {
      console.error('❌ Socket connection error:', err.message);
      const message = String(err?.message || '').toLowerCase();
      const authenticationRejected = message.includes('unauthorized')
        || message.includes('token')
        || message.includes('inactive')
        || message.includes('agreement')
        || message.includes('access');

      if (authenticationRejected) {
        // Do not keep an old/stale socket alive or retry forever after the server
        // has rejected the current login credentials.
        if (this.socket) this.socket.io.opts.reconnection = false;
        this.disconnect();
      }
    });

    this.socket.on('access-revoked', (payload: { message?: string }) => {
      console.warn('Socket access revoked:', payload?.message || 'Agreement or user access is no longer active.');
      localStorage.removeItem('auth_user');
      localStorage.removeItem('otherInfo');
      localStorage.removeItem('socket_username');
      localStorage.removeItem('userAvatar');
      window.location.assign('/auth/login');
    });

   this.socket.on('access-scope-updated', (payload: { changed?: boolean }) => {
  if (payload?.changed) {
    console.log('Access scope updated; page reload skipped.');
  }
});
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }

  isConnected(): boolean {
    return this.socket?.connected ?? false;
  }

  getSocket(): Socket | null {
    return this.socket;
  }

  emit(event: string, data?: any): void {
    if (!this.socket) {
      console.warn(`Socket is not initialized. Cannot emit: ${event}`);
      return;
    }

    if (!this.socket.connected) {
      console.warn(`Socket is not connected yet. Emitting anyway: ${event}`, data);
    }

    this.socket.emit(event, data);
  }

  on(event: string, callback: SocketCallback): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set<SocketCallback>());
    }

    this.listeners.get(event)?.add(callback);

    if (this.socket) {
      this.socket.off(event, callback);
      this.socket.on(event, callback);
    }
  }

  off(event: string, callback?: SocketCallback): void {
    if (callback) {
      this.listeners.get(event)?.delete(callback);
      this.socket?.off(event, callback);
      return;
    }

    this.listeners.delete(event);
    this.socket?.off(event);
  }

  private hasLocalSession(): boolean {
    return Boolean(localStorage.getItem('auth_user') && localStorage.getItem('otherInfo'));
  }

  private getSocketAuth(): { username: string; token: string } {
    return {
      username: localStorage.getItem('socket_username') || '',
      token: localStorage.getItem('otherInfo') || ''
    };
  }

  private restoreListeners(): void {
    if (!this.socket) return;

    this.listeners.forEach((callbacks, event) => {
      callbacks.forEach(callback => {
        this.socket?.off(event, callback);
        this.socket?.on(event, callback);
      });
    });
  }

  private subscribe(scope: string, id: string): void {
    const cleanId = String(id || '').trim();
    if (!cleanId) return;

    const key = `${scope}:${cleanId}`;
    const count = this.activeSubscriptions.get(key) ?? 0;
    this.activeSubscriptions.set(key, count + 1);
    if (count === 0 && this.socket?.connected) {
      this.socket.emit(`subscribe-${scope}`, cleanId);
    }
  }

  private unsubscribe(scope: string, id: string): void {
    const cleanId = String(id || '').trim();
    if (!cleanId) return;

    const key = `${scope}:${cleanId}`;
    const count = this.activeSubscriptions.get(key) ?? 0;
    if (count > 1) {
      this.activeSubscriptions.set(key, count - 1);
      return;
    }

    this.activeSubscriptions.delete(key);
    if (count === 1 && this.socket?.connected) {
      this.socket.emit(`unsubscribe-${scope}`, cleanId);
    }
  }

  private restoreSubscriptions(): void {
    this.activeSubscriptions.forEach((_count, key) => {
      const separatorIndex = key.indexOf(':');
      const scope = key.slice(0, separatorIndex);
      const id = key.slice(separatorIndex + 1);
      this.socket?.emit(`subscribe-${scope}`, id);
    });
  }

  subscribeBusiness(id: string): void { this.subscribe('business', id); }
  unsubscribeBusiness(id: string): void { this.unsubscribe('business', id); }

  subscribeFacility(id: string): void { this.subscribe('facility', id); }
  unsubscribeFacility(id: string): void { this.unsubscribe('facility', id); }

  subscribeBuilding(id: string): void { this.subscribe('building', id); }
  unsubscribeBuilding(id: string): void { this.unsubscribe('building', id); }

  subscribeFloor(id: string): void { this.subscribe('floor', id); }
  unsubscribeFloor(id: string): void { this.unsubscribe('floor', id); }

  subscribeSection(id: string): void { this.subscribe('section', id); }
  unsubscribeSection(id: string): void { this.unsubscribe('section', id); }

  subscribeOffice(id: string): void { this.subscribe('office', id); }
  unsubscribeOffice(id: string): void { this.unsubscribe('office', id); }

  subscribeDevice(id: string): void { this.subscribe('device', id); }
  unsubscribeDevice(id: string): void { this.unsubscribe('device', id); }

  subscribeSensor(id: string): void { this.subscribe('sensor', id); }
  unsubscribeSensor(id: string): void { this.unsubscribe('sensor', id); }
}
