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
        isActive: true,
        timePeriods: [],
      },
      demandManagement: {
        fkBusiness: id,
        demandLimitKw: 15,
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
