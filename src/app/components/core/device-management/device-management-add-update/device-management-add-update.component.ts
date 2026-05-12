import { Component, Inject, OnInit } from '@angular/core';
import { DeviceRequestDTO } from '../device-management.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeviceService } from '../device-management.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../shared/services/user/user.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';

@Component({
  selector: 'app-device-management-add-update',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule, YxSelectComponent],
  templateUrl: './device-management-add-update.component.html',
  styleUrl: './device-management-add-update.component.scss'
})
export class DeviceManagementAddUpdateComponent implements OnInit {

  isSaving = false;
  isLoadingUserTypes = false;
  currentUser: User | null = null;

  fieldErrors: {
    deviceName?: string;
    deviceMacAddress?: string;
  } = {};

  model: DeviceRequestDTO = {
    deviceName: '',
    deviceMacAddress: '',
    fkBusiness: '',
    isActive: true,
  };

  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  constructor(
    private dialogRef: MatDialogRef<DeviceManagementAddUpdateComponent>,
    private deviceService: DeviceService,
    private toaster: ToastrService,
    private _userService: UserService,
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: 'add' | 'edit'; value?: DeviceRequestDTO }
  ) {}

  async ngOnInit(): Promise<void> {

    if (this.data?.mode === 'edit' && this.data.value) {
      this.model = { ...this.data.value };
    }

    this.currentUser = await this._userService.user$;
    this.model.fkBusiness = this.currentUser?.fkBusiness;
  }

  onNameChange() {
    if (this.fieldErrors.deviceName) {
      this.fieldErrors.deviceName = '';
    }
  }
  onAddressChange() {
    if (this.fieldErrors.deviceMacAddress) {
      this.fieldErrors.deviceMacAddress = '';
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {

    this.fieldErrors = {};

    if (!this.model.deviceName?.trim()) {
      this.fieldErrors.deviceName = 'Device Name is required';
    }
    if (!this.model.deviceMacAddress?.trim()) {
      this.fieldErrors.deviceMacAddress = 'Mac Address is required';
    }
    if (Object.keys(this.fieldErrors).length > 0) return;

    this.isSaving = true;

    const api$ = this.isEditMode
      ? this.deviceService.updateDevice(this.model)
      : this.deviceService.addDevice(this.model);

    api$.subscribe({
      next: (res) => {
        if (res.success) {

          this.toaster.success(
            this.isEditMode
              ? 'Record Updated Successfully'
              : 'Record Added Successfully'
          );

          setTimeout(() => this.dialogRef.close('saved'), 500);

        } else {
          this.toaster.error(res.remarks || 'Operation failed');
        }

        this.isSaving = false;
      },
      error: () => {
        this.toaster.error('Something went wrong');
        this.isSaving = false;
      }
    });

  }

}
