import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReportingTimezoneService {
  private readonly storageKey = 'emo.reporting-timezone.confirmed';

  get detectedTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  get confirmedTimezone(): string | null {
    const value = localStorage.getItem(this.storageKey);
    return value && this.isSupported(value) ? value : null;
  }

  get appliedTimezone(): string {
    return this.confirmedTimezone || 'UTC';
  }

  get isConfirmed(): boolean {
    return this.confirmedTimezone !== null;
  }

  confirm(timezone: string): boolean {
    const value = (timezone || '').trim();
    if (!this.isSupported(value)) return false;
    localStorage.setItem(this.storageKey, value);
    return true;
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
  }

  getSupportedTimezones(): string[] {
    const intl = Intl as typeof Intl & {
      supportedValuesOf?: (key: 'timeZone') => string[];
    };
    const supported = intl.supportedValuesOf?.('timeZone') || [];
    const values = supported.length
      ? supported
      : [
          'UTC',
          'Asia/Karachi',
          'Asia/Dubai',
          'Asia/Kolkata',
          'Europe/London',
          'America/New_York',
          'Australia/Sydney',
        ];
    return values.includes('UTC') ? values : ['UTC', ...values];
  }

  formatTimestamp(value: string | number | Date, options?: Intl.DateTimeFormatOptions): string {
    const date = value instanceof Date ? value : new Date(value);
    if (!Number.isFinite(date.getTime())) return '';
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: this.appliedTimezone,
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      ...options,
    }).format(date);
  }

  private isSupported(timezone: string): boolean {
    if (!timezone) return false;
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: timezone }).format();
      return true;
    } catch {
      return false;
    }
  }
}
