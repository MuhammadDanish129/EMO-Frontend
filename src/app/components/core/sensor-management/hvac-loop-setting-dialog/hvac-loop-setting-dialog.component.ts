import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';
import { HvacLoopSettingService } from '../hvac-loop-setting.service';
import {
  HvacLoopSettingRequestDTO,
  HvacLoopSettingResponseDTO
} from '../hvac-loop-setting.type';

export interface HvacLoopSettingDialogData {
  fkSensor: string;
  sensorName: string;
  utilityName: string;
}

@Component({
  selector: 'app-hvac-loop-setting-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './hvac-loop-setting-dialog.component.html',
  styleUrl: './hvac-loop-setting-dialog.component.scss'
})
export class HvacLoopSettingDialogComponent implements OnInit {

  isLoading = false;
  isSaving = false;
  hasExistingSetting = false;

  sensorName = '';
  utilityName = '';
  onMinutes: number | null = 15;
  offMinutes: number | null = 5;

  model: HvacLoopSettingRequestDTO = {
    fkSensor: '',
    loopEnabled: false,
    loopOnSeconds: 900,
    loopOffSeconds: 300,
    isActive: true
  };

  constructor(
    private dialogRef: MatDialogRef<HvacLoopSettingDialogComponent>,
    private hvacLoopSettingService: HvacLoopSettingService,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: HvacLoopSettingDialogData
  ) {}

  ngOnInit(): void {
    this.sensorName = this.data.sensorName || '-';
    this.utilityName = this.data.utilityName || '-';
    this.resetToDefaults();

    if (!this.isHvacUtility()) {
      this.toaster.error('Loop setting is only available for HVAC sensors');
      this.dialogRef.close();
      return;
    }

    this.loadSetting();
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (!this.isHvacUtility()) {
      this.toaster.error('Loop setting is only available for HVAC sensors');
      return;
    }

    const onMinutes = Number(this.onMinutes);
    const offMinutes = Number(this.offMinutes);

    if (this.model.loopEnabled && (!Number.isFinite(onMinutes) || onMinutes <= 0)) {
      this.toaster.error('ON duration must be greater than 0');
      return;
    }

    if (this.model.loopEnabled && (!Number.isFinite(offMinutes) || offMinutes <= 0)) {
      this.toaster.error('OFF duration must be greater than 0');
      return;
    }

    this.isSaving = true;

    const request = this.buildRequest();
    const api$ = this.hasExistingSetting
      ? this.hvacLoopSettingService.update(request)
      : this.hvacLoopSettingService.create(request);

    api$.subscribe({
      next: res => {
        if (res.success) {
          this.dialogRef.close('saved');
        } else {
          this.toaster.error(res.remarks || 'Failed to save HVAC loop setting');
        }

        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
        this.toaster.error('Failed to save HVAC loop setting');
      }
    });
  }

  private loadSetting(): void {
    this.isLoading = true;

    this.hvacLoopSettingService.getBySensorId(this.data.fkSensor).subscribe({
      next: res => {
        if (res.data) {
          this.applyExistingSetting(res.data);
        }

        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;

        if (error.status && error.status !== 404) {
          this.toaster.error('Failed to load HVAC loop setting');
        }
      }
    });
  }

  private resetToDefaults(): void {
    this.hasExistingSetting = false;
    this.onMinutes = 15;
    this.offMinutes = 5;
    this.model = {
      fkSensor: this.data.fkSensor,
      loopEnabled: false,
      loopOnSeconds: 900,
      loopOffSeconds: 300,
      isActive: true
    };
  }

  private applyExistingSetting(setting: HvacLoopSettingResponseDTO): void {
    this.hasExistingSetting = true;
    this.onMinutes = this.secondsToMinutes(setting.loopOnSeconds);
    this.offMinutes = this.secondsToMinutes(setting.loopOffSeconds);
    this.model = {
      hvacLoopSettingId: setting.hvacLoopSettingId,
      fkSensor: setting.fkSensor || this.data.fkSensor,
      loopEnabled: Boolean(setting.loopEnabled),
      loopOnSeconds: setting.loopOnSeconds || 0,
      loopOffSeconds: setting.loopOffSeconds || 0,
      isActive: setting.isActive !== false
    };
  }

  private buildRequest(): HvacLoopSettingRequestDTO {
    return {
      hvacLoopSettingId: this.model.hvacLoopSettingId,
      fkSensor: this.data.fkSensor,
      loopEnabled: this.model.loopEnabled,
      loopOnSeconds: this.minutesToSeconds(this.onMinutes),
      loopOffSeconds: this.minutesToSeconds(this.offMinutes),
      isActive: this.model.isActive
    };
  }

  private secondsToMinutes(seconds: number): number {
    return seconds ? seconds / 60 : 0;
  }

  private minutesToSeconds(minutes: number | null): number {
    const numericMinutes = Number(minutes);

    if (!Number.isFinite(numericMinutes) || numericMinutes <= 0) {
      return 0;
    }

    return Math.round(numericMinutes * 60);
  }

  private isHvacUtility(): boolean {
    return (this.data.utilityName || '').trim().toLowerCase() === 'hvac';
  }
}
