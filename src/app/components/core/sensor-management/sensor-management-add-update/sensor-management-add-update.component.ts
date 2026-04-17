import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SensorService } from '../sensor-management.service';
import { SensorRequestDTO } from '../sensor-management.type';

import { OfficeService } from '../../office-management/office-management.service';
import { DeviceService } from '../../device-management/device-management.service';
import { UtilityService } from '../../../device/utility-management/utility-management.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';

@Component({
  selector: 'app-sensor-management-add-update',
  standalone: true,
  imports: [CommonModule, FormsModule,YxSelectComponent],
  templateUrl: './sensor-management-add-update.component.html',
})
export class SensorManagementAddUpdateComponent implements OnInit {

  isSaving = false;

  offices: any[] = [];
  devices: any[] = [];
  utilities: any[] = [];

  currentUser: any;

  model: SensorRequestDTO = {
    sensorName: '',
    modebusAddress: '',
    meterId: '',
    serialAddress: '',
    fkOffice: '',
    fkDevice: '',
    fkutility: ''
  };

  get isEditMode() { return this.data?.mode === 'edit'; }
  get isViewMode() { return this.data?.mode === 'view'; }

  constructor(
    private dialogRef: MatDialogRef<SensorManagementAddUpdateComponent>,
    private sensorService: SensorService,
    private officeService: OfficeService,
    private deviceService: DeviceService,
    private utilityService: UtilityService,
    private userService: UserService,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: 'add' | 'edit' | 'view'; value?: any }
  ) {}

  async ngOnInit() {

    this.currentUser = await this.userService.user$;

    await Promise.all([
      this.loadOffices(),
      this.loadDevices(),
      this.loadUtilities()
    ]);

    if (this.data?.value) {
      this.model = { ...this.data.value };
    }
  }

  loadOffices() {
    return new Promise(resolve => {
      this.officeService.getOfficeByBusinessId(this.currentUser.fkBusiness)
        .subscribe(res => {
          if (res.success) this.offices = res.data || [];
          resolve(true);
        });
    });
  }

  loadDevices() {
    return new Promise(resolve => {
      this.deviceService.getDeviceByBusinessId(this.currentUser.fkBusiness)
        .subscribe(res => {
          if (res.success) this.devices = res.data || [];
          resolve(true);
        });
    });
  }

  loadUtilities() {
    return new Promise(resolve => {
      this.utilityService.getUtilities()
        .subscribe(res => {
          if (res.success) this.utilities = res.data || [];
          resolve(true);
        });
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {

    if (!this.model.sensorName?.trim()) {
      this.toaster.error('Sensor Name required');
      return;
    }

    this.isSaving = true;
console.log(this.model);
    const api$ = this.isEditMode
      ? this.sensorService.updateSensor(this.model)
      : this.sensorService.addSensor(this.model);

    api$.subscribe({
      next: res => {
        if (res.success) {
          this.toaster.success('Saved Successfully');
          this.dialogRef.close('saved');
        }
        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
      }
    });

  }

  /* ================= LOOKUP NAME HELPERS ================= */

  get selectedOfficeName(): string {
    return this.offices.find(x => x.officeId === this.model.fkOffice)?.officeName || '-';
  }

  get selectedDeviceName(): string {
    return this.devices.find(x => x.deviceId === this.model.fkDevice)?.deviceName || '-';
  }

  get selectedUtilityName(): string {
    return this.utilities.find(x => x.utilityId === this.model.fkutility)?.utilityName || '-';
  }

}
