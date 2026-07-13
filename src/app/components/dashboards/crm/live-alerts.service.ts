import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketService } from '../live-consumption/socket.services';
import {
  LiveAlertsPayloadDTO,
  LiveOperationAlertDTO
} from './energy-deep-dive/optimization-insights/optimization-dashboard.type';

@Injectable({ providedIn: 'root' })
export class LiveAlertsService {
  private readonly seenAlertStorageKey = 'emo.seen-live-alerts';
  private readonly seenAlertKeys = new Set<string>(this.loadSeenAlertKeys());
  private readonly alertsSubject = new BehaviorSubject<LiveOperationAlertDTO[]>([]);
  private readonly sensorCardsSubject = new BehaviorSubject<any[]>([]);
  private readonly allSensorCardsSubject = new BehaviorSubject<any[]>([]);
  private readonly unreadAlertCountSubject = new BehaviorSubject<number>(0);

  readonly alerts$ = this.alertsSubject.asObservable();
  readonly idleAlerts$ = this.alerts$.pipe(
    map(alerts => alerts.filter(alert => alert.type === 'idle'))
  );
  readonly sensorCards$ = this.sensorCardsSubject.asObservable();
  readonly allSensorCards$ = this.allSensorCardsSubject.asObservable();
  readonly unreadAlertCount$ = this.unreadAlertCountSubject.asObservable();

  private businessId = '';

  constructor(private socketService: SocketService) {}

  get alerts(): LiveOperationAlertDTO[] {
    return this.alertsSubject.value;
  }

  get idleAlerts(): LiveOperationAlertDTO[] {
    return this.alerts.filter(alert => alert.type === 'idle');
  }

  get unreadAlertCount(): number {
    return this.unreadAlertCountSubject.value;
  }

  get isSocketConnected(): boolean {
    return this.socketService.isConnected();
  }

  start(businessId?: string | null): void {
    if (!businessId) {
      return;
    }

    if (this.businessId === businessId) {
      return;
    }

    this.stop();
    this.businessId = businessId;

    this.socketService.connect();
    this.socketService.subscribeBusiness(businessId);
    this.socketService.on('live-alerts', this.handleLiveAlerts);
    this.socketService.on('businessUpdate', this.handleLiveReading);
    this.socketService.on('sensorUpdate', this.handleLiveReading);
  }

  stop(clearAlerts = true): void {
    if (this.businessId) {
      this.socketService.unsubscribeBusiness(this.businessId);
    }

    this.socketService.off('live-alerts', this.handleLiveAlerts);
    this.socketService.off('businessUpdate', this.handleLiveReading);
    this.socketService.off('sensorUpdate', this.handleLiveReading);
    this.businessId = '';

    if (clearAlerts) {
      this.alertsSubject.next([]);
      this.sensorCardsSubject.next([]);
      this.allSensorCardsSubject.next([]);
      this.unreadAlertCountSubject.next(0);
    }
  }

  markCommandSent(alert: LiveOperationAlertDTO): void {
    const key = this.getAlertKey(alert);
    this.setAlerts(
      this.alerts.map(item =>
        this.getAlertKey(item) === key
          ? { ...item, commandSent: true, action: 'Command sent' }
          : item
      )
    );
  }

  resolveAlert(alert: LiveOperationAlertDTO): void {
    const key = this.getAlertKey(alert);
    if (!key) {
      return;
    }

    this.seenAlertKeys.add(key);
    this.persistSeenAlertKeys();
    this.setAlerts(this.alerts.filter(item => this.getAlertKey(item) !== key));
  }

  resolveIdleAlertForSensor(sensorId: string): void {
    const cleanSensorId = String(sensorId || '').trim();
    if (!cleanSensorId) {
      return;
    }

    const removedKeys: string[] = [];
    const nextAlerts = this.alerts.filter(alert => {
      const shouldResolve = alert.type === 'idle' && String(alert.sensorId || '').trim() === cleanSensorId;
      if (shouldResolve) {
        removedKeys.push(this.getAlertKey(alert));
      }
      return !shouldResolve;
    });

    if (nextAlerts.length === this.alerts.length) {
      return;
    }

    removedKeys.filter(Boolean).forEach(key => this.seenAlertKeys.add(key));
    this.persistSeenAlertKeys();
    this.setAlerts(nextAlerts);
  }

  markAlertsSeen(alerts: LiveOperationAlertDTO[] = this.alerts): void {
    alerts.forEach(alert => {
      const key = this.getAlertKey(alert);
      if (key) {
        this.seenAlertKeys.add(key);
      }
    });

    this.persistSeenAlertKeys();
    this.updateUnreadAlertCount();
  }

  getSeverityRank(severity: string): number {
    switch ((severity || '').toLowerCase()) {
      case 'critical':
        return 0;
      case 'warning':
        return 1;
      case 'info':
        return 2;
      default:
        return 3;
    }
  }

  getAlertIcon(type: string): string {
    switch ((type || '').toLowerCase()) {
      case 'idle':
        return 'ri-remote-control-2-line';
      case 'faulty':
        return 'ri-error-warning-line';
      case 'voltage-sag':
      case 'voltage-surge':
        return 'ri-flashlight-line';
      case 'low-power-factor':
        return 'ri-pulse-line';
      case 'high-live-consumption':
        return 'ri-fire-line';
      case 'hvac-loop':
        return 'ri-loop-right-line';
      case 'stale-sensor':
        return 'ri-wifi-off-line';
      default:
        return 'ri-alarm-warning-line';
    }
  }

  private handleLiveAlerts = (payload: LiveAlertsPayloadDTO): void => {
    const incoming = this.normalizeAlerts(payload?.alerts ?? []);
    const resolvedAlertIds = new Set((payload?.resolvedAlertIds ?? []).filter(Boolean));

    if (payload?.isSnapshot) {
      this.setAlerts(this.sortAlerts(incoming));
      return;
    }

    if (!incoming.length && !resolvedAlertIds.size) {
      return;
    }

    const map = new Map<string, LiveOperationAlertDTO>();
    this.alerts.forEach(alert => map.set(this.getAlertKey(alert), alert));

    resolvedAlertIds.forEach(key => {
      map.delete(key);
      this.seenAlertKeys.add(key);
    });

    if (resolvedAlertIds.size) {
      this.persistSeenAlertKeys();
    }

    incoming.forEach(alert => {
      const key = this.getAlertKey(alert);
      const previous = map.get(key);
      map.set(key, { ...previous, ...alert });
    });

    this.setAlerts(this.sortAlerts(Array.from(map.values())));
  };

  private handleLiveReading = (reading: any): void => {
    if (!reading?.sensorId) {
      return;
    }

    this.reconcileAlertsForReading(reading);

    const cards = [...this.allSensorCardsSubject.value];
    const index = cards.findIndex(item => item.sensorId === reading.sensorId);
    const card = {
      sensorId: reading.sensorId,
      sensorName: reading.sensorName || reading.chain?.sensorName || reading.sensor?.label || '',
      applianceName: reading.applianceName || reading.chain?.applianceName || '',
      utilityName: reading.utilityName || reading.chain?.utilityName || '',
      activePower: reading.activePower ?? reading.sensor?.activePower ?? 0,
      activeEnergy: reading.activeEnergy ?? reading.sensor?.energyKwh ?? reading.sensor?.activeEnergy ?? 0,
      voltage: reading.voltage ?? reading.sensor?.voltage ?? 0,
      current: reading.current ?? reading.sensor?.current ?? 0,
      powerFactor: reading.powerFactor ?? reading.sensor?.pf ?? 0,
      frequency: reading.frequency ?? reading.sensor?.frequency ?? 0,
      relayState: reading.relayState ?? reading.sensor?.relayState ?? '',
      relayEnabled: reading.relayEnabled ?? reading.sensor?.relayEnabled ?? false,
      hvacLoopEnabled: reading.hvacLoopEnabled ?? reading.chain?.hvacLoopEnabled ?? false,
      alerts: reading.alerts ?? [],
      receivedAt: reading.receivedAt || new Date().toISOString()
    };

    if (index >= 0) {
      cards[index] = card;
    } else {
      cards.unshift(card);
    }

    const sortedCards = cards
      .sort((first, second) => Number(second.activePower || 0) - Number(first.activePower || 0));

    this.allSensorCardsSubject.next(sortedCards);
    this.sensorCardsSubject.next(sortedCards.slice(0, 12));
  };

  private reconcileAlertsForReading(reading: any): void {
    const sensorId = String(reading.sensorId || '').trim();
    if (!sensorId || !Array.isArray(reading.alerts)) {
      return;
    }

    const activeKeys = new Set(
      this.normalizeAlerts(reading.alerts).map(alert => this.getAlertKey(alert))
    );

    const nextAlerts = this.alerts.filter(alert => {
      const alertSensorId = String(alert.sensorId || '').trim();
      return alertSensorId !== sensorId || activeKeys.has(this.getAlertKey(alert));
    });

    if (nextAlerts.length !== this.alerts.length) {
      this.setAlerts(this.sortAlerts(nextAlerts));
    }
  }

  private normalizeAlerts(alerts: LiveOperationAlertDTO[]): LiveOperationAlertDTO[] {
    return alerts
      .map(alert => this.normalizeAlert(alert))
      .filter((alert): alert is LiveOperationAlertDTO => Boolean(alert));
  }

  private normalizeAlert(alert: LiveOperationAlertDTO): LiveOperationAlertDTO | null {
    if (!alert) {
      return null;
    }

    const key = this.getAlertKey(alert);
    if (!key) {
      return null;
    }

    const now = new Date().toISOString();
    const generatedAtUtc = alert.generatedAtUtc || alert.lastSeenUtc || now;

    return {
      ...alert,
      id: alert.id || key,
      generatedAtUtc,
      lastSeenUtc: alert.lastSeenUtc || generatedAtUtc
    };
  }

  private sortAlerts(alerts: LiveOperationAlertDTO[]): LiveOperationAlertDTO[] {
    return [...alerts].sort((first, second) => {
      const severityDiff = this.getSeverityRank(first.severity) - this.getSeverityRank(second.severity);
      if (severityDiff !== 0) {
        return severityDiff;
      }

      return this.getAlertTime(second) - this.getAlertTime(first);
    });
  }

  private setAlerts(alerts: LiveOperationAlertDTO[]): void {
    this.alertsSubject.next(alerts);
    this.updateUnreadAlertCount(alerts);
  }

  private updateUnreadAlertCount(alerts: LiveOperationAlertDTO[] = this.alerts): void {
    const unreadCount = alerts.filter(alert => {
      const key = this.getAlertKey(alert);
      return key && !this.seenAlertKeys.has(key);
    }).length;

    this.unreadAlertCountSubject.next(unreadCount);
  }

  private getAlertTime(alert: LiveOperationAlertDTO): number {
    const time = new Date(alert.lastSeenUtc || alert.generatedAtUtc).getTime();
    return Number.isFinite(time) ? time : 0;
  }

  private getAlertKey(alert: LiveOperationAlertDTO): string {
    const id = String(alert.id || '').trim();
    if (id) {
      return id;
    }

    const sensorId = String(alert.sensorId || '').trim();
    const type = String(alert.type || '').trim();
    return sensorId && type ? `${sensorId}:${type}` : '';
  }

  private loadSeenAlertKeys(): string[] {
    try {
      const stored = window.sessionStorage.getItem(this.seenAlertStorageKey);
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : [];
    } catch {
      return [];
    }
  }

  private persistSeenAlertKeys(): void {
    try {
      window.sessionStorage.setItem(
        this.seenAlertStorageKey,
        JSON.stringify(Array.from(this.seenAlertKeys).slice(-500))
      );
    } catch {
      // Ignore storage failures; unread state still works in memory.
    }
  }
}
