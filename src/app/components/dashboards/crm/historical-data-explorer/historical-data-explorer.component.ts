import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { ReportingTimezoneService } from '../../../../shared/services/reporting-timezone/reporting-timezone.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { DashboardLevel } from '../energy-deep-dive/energy-deep-dive.types';
import { HistoricalDataExplorerService } from './historical-data-explorer.service';
import { HistoricalDataResponse, HistoricalInterval } from './historical-data-explorer.types';

@Component({
  selector: 'app-historical-data-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MaterialModuleModule],
  templateUrl: './historical-data-explorer.component.html',
  styleUrl: './historical-data-explorer.component.scss',
})
export class HistoricalDataExplorerComponent implements OnInit {
  level: DashboardLevel = 'business';
  entityId = '';
  entityName = 'Business';
  fromDate = '';
  toDate = '';
  interval: HistoricalInterval = 'day';
  timezone = 'UTC';
  detectedTimezone = 'UTC';
  timezoneConfirmed = false;
  timezones: string[] = [];
  loading = false;
  exporting = false;
  preview?: HistoricalDataResponse;

  readonly intervals: Array<{ value: HistoricalInterval; label: string; description: string }> = [
    { value: '15minute', label: 'Every 15 minutes', description: 'Maximum 31 days' },
    { value: 'hour', label: 'Hourly', description: 'Maximum 1 year' },
    { value: 'day', label: 'Daily', description: 'Maximum 3 years' },
    { value: 'month', label: 'Monthly', description: 'Maximum 3 years' },
  ];

  constructor(
    private readonly api: HistoricalDataExplorerService,
    private readonly users: UserService,
    private readonly route: ActivatedRoute,
    private readonly reportingTimezone: ReportingTimezoneService,
    private readonly toast: ToastrService,
  ) {}

  async ngOnInit(): Promise<void> {
    const user = await this.users.user$;
    const requestedLevel = this.route.snapshot.queryParamMap.get('level') as DashboardLevel | null;
    this.level = this.isLevel(requestedLevel) ? requestedLevel : 'business';
    this.entityId = this.route.snapshot.queryParamMap.get('id') || user?.fkBusiness || '';
    this.entityName = this.route.snapshot.queryParamMap.get('name') || this.level;
    this.detectedTimezone = this.reportingTimezone.detectedTimezone;
    this.timezone = this.reportingTimezone.appliedTimezone;
    this.timezoneConfirmed = this.reportingTimezone.isConfirmed;
    this.timezones = this.reportingTimezone.getSupportedTimezones();
    if (!this.timezones.includes(this.timezone)) this.timezones = [this.timezone, ...this.timezones];
    this.setDefaultRange();

    if (!this.entityId) {
      this.toast.error('A dashboard scope is required for historical export.');
      return;
    }
    if (this.timezoneConfirmed) this.loadPreview();
  }

  confirmTimezone(value = this.timezone): void {
    if (!this.reportingTimezone.confirm(value)) {
      this.toast.error('Select a valid reporting timezone.');
      return;
    }
    this.timezone = value;
    this.timezoneConfirmed = true;
    this.toast.success(`Reporting timezone confirmed as ${value}.`);
    this.loadPreview();
  }

  useDetectedTimezone(): void {
    this.timezone = this.detectedTimezone;
    this.confirmTimezone(this.detectedTimezone);
  }

  loadPreview(): void {
    if (!this.validate()) return;
    this.loading = true;
    const range = this.buildRange();
    this.api.preview(this.level, this.entityId, range.from, range.to, this.interval, this.timezone).subscribe({
      next: (response) => {
        this.preview = response;
        this.entityName = response.entityName || this.entityName;
        this.loading = false;
      },
      error: (error) => {
        this.preview = undefined;
        this.loading = false;
        this.toast.error(error?.error?.message || 'Historical preview could not be loaded.');
      },
    });
  }

  downloadCsv(): void {
    if (!this.validate()) return;
    this.exporting = true;
    const range = this.buildRange();
    this.api.exportCsv(this.level, this.entityId, range.from, range.to, this.interval, this.timezone).subscribe({
      next: (response) => {
        const blob = response.body;
        if (!blob) {
          this.exporting = false;
          this.toast.error('The CSV response was empty.');
          return;
        }
        const disposition = response.headers.get('content-disposition') || '';
        const match = /filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(disposition);
        const fileName = match ? decodeURIComponent(match[1]) : `energy-${this.interval}.csv`;
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = fileName;
        anchor.click();
        URL.revokeObjectURL(url);
        this.exporting = false;
      },
      error: (error) => {
        this.exporting = false;
        this.toast.error(error?.error?.message || 'CSV export could not be created.');
      },
    });
  }

  get totalEnergy(): number {
    return this.preview?.points.reduce((sum, point) => sum + point.energyKwh, 0) || 0;
  }

  get intervalLimitText(): string {
    return this.intervals.find((item) => item.value === this.interval)?.description || '';
  }

  private validate(): boolean {
    if (!this.entityId || !this.fromDate || !this.toDate) return false;
    const from = new Date(`${this.fromDate}T00:00:00`);
    const to = new Date(`${this.toDate}T00:00:00`);
    if (!Number.isFinite(from.getTime()) || !Number.isFinite(to.getTime()) || to < from) {
      this.toast.error('Choose a valid date range.');
      return false;
    }
    const days = (to.getTime() - from.getTime()) / 86400000 + 1;
    if (days > 1098) {
      this.toast.error('The maximum historical range is three years.');
      return false;
    }
    if (this.interval === '15minute' && days > 31) {
      this.toast.error('15-minute exports are limited to 31 days.');
      return false;
    }
    if (this.interval === 'hour' && days > 366) {
      this.toast.error('Hourly exports are limited to one year.');
      return false;
    }
    if (!this.timezoneConfirmed) {
      this.toast.warning('Confirm the reporting timezone before requesting historical data.');
      return false;
    }
    return true;
  }

  private buildRange(): { from: string; to: string } {
    const exclusiveEnd = new Date(`${this.toDate}T00:00:00`);
    exclusiveEnd.setDate(exclusiveEnd.getDate() + 1);
    return {
      from: `${this.fromDate}T00:00:00`,
      to: this.localDateTime(exclusiveEnd),
    };
  }

  private localDateTime(value: Date): string {
    const pad = (number: number) => String(number).padStart(2, '0');
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}T00:00:00`;
  }

  private setDefaultRange(): void {
    const today = new Date();
    const start = new Date(today);
    start.setFullYear(start.getFullYear() - 1);
    start.setDate(start.getDate() + 1);
    const date = (value: Date) => {
      const pad = (number: number) => String(number).padStart(2, '0');
      return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
    };
    this.fromDate = date(start);
    this.toDate = date(today);
  }

  private isLevel(value: DashboardLevel | null): value is DashboardLevel {
    return !!value && ['business', 'facility', 'building', 'floor', 'section', 'office', 'device', 'sensor'].includes(value);
  }
}
