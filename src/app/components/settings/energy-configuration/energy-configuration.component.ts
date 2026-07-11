import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { UserService } from '../../../shared/services/user/user.service';
import { EnergyConfigurationService } from './energy-configuration.service';
import {
  EnergyConfiguration,
  TariffTimePeriod,
} from './energy-configuration.types';
@Component({
  selector: 'app-energy-configuration',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModuleModule],
  templateUrl: './energy-configuration.component.html',
  styleUrl: './energy-configuration.component.scss',
})
export class EnergyConfigurationComponent implements OnInit {
  activeTab: 'tariff' | 'schedule' | 'demand' | 'hvac' = 'tariff';
  loading = false;
  saving = false;
  businessId = '';
  model: EnergyConfiguration = this.emptyModel('');
  timezones = this.getSupportedTimezones();
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  constructor(
    private api: EnergyConfigurationService,
    private users: UserService,
    private route: ActivatedRoute,
    private toast: ToastrService,
  ) {}
  async ngOnInit() {
    const user = await this.users.get();
    this.businessId =
      this.route.snapshot.queryParamMap.get('businessId') ||
      history.state?.businessId ||
      user?.fkBusiness ||
      '';
    if (!this.businessId) {
      this.toast.error('Business id is required to manage energy settings.');
      return;
    }
    this.load();
  }
  load() {
    this.loading = true;
    this.api.getByBusinessId(this.businessId).subscribe({
      next: (r) => {
        if (r.success && r.data) {
          this.model = r.data;
          this.ensureCurrentTimezoneIsAvailable();
          this.model.tariffPlan.effectiveFrom = (
            this.model.tariffPlan.effectiveFrom || ''
          ).slice(0, 10);
          if (this.model.tariffPlan.effectiveTo)
            this.model.tariffPlan.effectiveTo =
              this.model.tariffPlan.effectiveTo.slice(0, 10);
        } else this.toast.error(r.remarks || 'Unable to load settings');
        this.loading = false;
      },
      error: () => {
        this.toast.error('Unable to load energy settings');
        this.loading = false;
      },
    });
  }
  save() {
    if (!this.validate()) return;
    this.saving = true;
    this.model.fkBusiness = this.businessId;
    this.model.tariffPlan.fkBusiness = this.businessId;
    this.model.demandManagement.fkBusiness = this.businessId;
    this.api.save(this.model).subscribe({
      next: (r) => {
        this.saving = false;
        if (r.success && r.data) {
          this.model = r.data;
          this.toast.success('Energy settings saved');
        } else this.toast.error(r.remarks || 'Unable to save');
      },
      error: () => {
        this.saving = false;
        this.toast.error('Unable to save energy settings');
      },
    });
  }
  addPeriod() {
    this.model.tariffPlan.timePeriods.push({
      periodName: 'Peak window',
      periodType: 'Peak',
      startTime: '18:00',
      endTime: '23:00',
      dayOfWeek: null,
      isActive: true,
    });
  }
  removePeriod(i: number) {
    this.model.tariffPlan.timePeriods.splice(i, 1);
  }
  validate() {
    const d = this.model.demandManagement;
    if (d.recoveryThresholdKw >= d.demandLimitKw) {
      this.toast.error('Recovery threshold must be below demand limit.');
      return false;
    }
    if (
      this.model.tariffPlan.timePeriods.some(
        (x) => x.isActive && (!x.startTime || !x.endTime),
      )
    ) {
      this.toast.error('Complete all active time periods.');
      return false;
    }
    return true;
  }
  private ensureCurrentTimezoneIsAvailable() {
    const timezone = this.model.tariffPlan.timezone;
    if (timezone && !this.timezones.includes(timezone)) {
      this.timezones = [timezone, ...this.timezones];
    }
  }
  private getSupportedTimezones(): string[] {
    const intl = Intl as typeof Intl & {
      supportedValuesOf?: (key: 'timeZone') => string[];
    };
    const supportedTimezones = intl.supportedValuesOf?.('timeZone');
    return supportedTimezones?.length
      ? supportedTimezones
      : [
          'Asia/Karachi',
          'Asia/Dubai',
          'Asia/Kolkata',
          'Asia/Dhaka',
          'Asia/Singapore',
          'Asia/Tokyo',
          'Europe/London',
          'Europe/Paris',
          'America/New_York',
          'America/Chicago',
          'America/Denver',
          'America/Los_Angeles',
          'Australia/Sydney',
          'Pacific/Auckland',
          'UTC',
        ];
  }
  private emptyModel(id: string): EnergyConfiguration {
    return {
      fkBusiness: id,
      tariffPlan: {
        fkBusiness: id,
        planName: 'Default Energy Tariff',
        currency: 'PKR',
        standardRatePerKwh: 0,
        peakRatePerKwh: 0,
        offPeakRatePerKwh: 0,
        demandChargePerKw: null,
        effectiveFrom: new Date().toISOString().slice(0, 10),
        effectiveTo: null,
        timezone: 'Asia/Karachi',
        isActive: true,
        timePeriods: [],
      },
      demandManagement: {
        fkBusiness: id,
        demandLimitKw: 15,
        monthlyEnergyTargetKwh: null,
        warningThresholdPercent: 90,
        recoveryThresholdKw: 13.5,
        demandIntervalMinutes: 15,
        stabilizationMinutes: 5,
        enablePeakHourControl: false,
        enableDemandThresholdControl: false,
        suggestionOnlyMode: true,
        isActive: true,
      },
    };
  }
}
