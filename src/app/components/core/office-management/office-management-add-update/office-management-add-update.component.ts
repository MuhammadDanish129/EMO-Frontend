import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../shared/services/user/user.type';

import { OfficeRequestDTO } from '../office-management.type';
import { OfficeService } from '../office-management.service';

@Component({
  selector: 'app-office-management-add-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModuleModule
  ],
  templateUrl: './office-management-add-update.component.html',
  styleUrl: './office-management-add-update.component.scss'
})
export class OfficeManagementAddUpdateComponent implements OnInit {

  /* ================= STATE ================= */
  isSaving = false;
  currentUser: User | null = null;

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  fieldErrors: {
    officeName?: string;
    openingTime?: string;
    closingTime?: string;
    workingDays?: string;
  } = {};

  /* ================= MODEL ================= */
  model: OfficeRequestDTO = {
    officeName: '',
    fkSection: '',
    isActive: true,
    isOcuppied: false,
    openingTime: '09:00',
    closingTime: '18:00',
    workingDays: 'Monday,Tuesday,Wednesday,Thursday,Friday',
    is24Hours: false,
    afterHoursAlertEnabled: true
  };

  /* ================= MODE ================= */
  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  constructor(
    private dialogRef: MatDialogRef<OfficeManagementAddUpdateComponent>,
    private officeService: OfficeService,
    private toaster: ToastrService,
    private _userService: UserService,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      mode: 'add' | 'edit';
      value?: OfficeRequestDTO;
      sectionId?: string;
    }
  ) {}

  /* ================= INIT ================= */
  async ngOnInit(): Promise<void> {

    if (this.data?.mode === 'edit' && this.data.value) {
      this.model = {
        ...this.model,
        ...this.data.value,
        openingTime: this.data.value.openingTime || '09:00',
        closingTime: this.data.value.closingTime || '18:00',
        workingDays: this.data.value.workingDays || 'Monday,Tuesday,Wednesday,Thursday,Friday',
        is24Hours: this.data.value.is24Hours ?? false,
        afterHoursAlertEnabled: this.data.value.afterHoursAlertEnabled ?? true
      };

      this.selectedDays = this.model.workingDays
        ? this.model.workingDays.split(',').map(x => x.trim()).filter(Boolean)
        : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    }

    this.currentUser = await this._userService.user$;
    this.model.fkBusiness = this.currentUser?.fkBusiness;

    if (this.data?.sectionId) {
      this.model.fkSection = this.data.sectionId;
    }
  }

  /* ================= VALIDATION ================= */
  onNameChange() {
    if (this.fieldErrors.officeName) {
      this.fieldErrors.officeName = '';
    }
  }

  isDaySelected(day: string): boolean {
    return this.selectedDays.includes(day);
  }

  toggleDay(day: string, checked: boolean) {
    if (checked) {
      if (!this.selectedDays.includes(day)) {
        this.selectedDays.push(day);
      }
    } else {
      this.selectedDays = this.selectedDays.filter(x => x !== day);
    }

    this.model.workingDays = this.selectedDays.join(',');

    if (this.fieldErrors.workingDays) {
      this.fieldErrors.workingDays = '';
    }
  }

  on24HoursChange() {
    if (this.model.is24Hours) {
      this.model.openingTime = '00:00';
      this.model.closingTime = '23:59';
    } else {
      this.model.openingTime = '09:00';
      this.model.closingTime = '18:00';
    }
  }

  /* ================= ACTIONS ================= */
  close() {
    this.dialogRef.close();
  }

  save() {
    this.fieldErrors = {};

    if (!this.model.officeName?.trim()) {
      this.fieldErrors.officeName = 'Office Name is required';
    }

    if (!this.model.is24Hours) {
      if (!this.model.openingTime) {
        this.fieldErrors.openingTime = 'Opening time is required';
      }

      if (!this.model.closingTime) {
        this.fieldErrors.closingTime = 'Closing time is required';
      }
    }

    if (!this.selectedDays.length) {
      this.fieldErrors.workingDays = 'Select at least one working day';
    }

    if (Object.keys(this.fieldErrors).length > 0) return;

    this.model.workingDays = this.selectedDays.join(',');

    this.isSaving = true;

    const api$ = this.isEditMode
      ? this.officeService.updateOffice(this.model)
      : this.officeService.addOffice(this.model);

    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success(
            this.isEditMode
              ? 'Office Updated Successfully'
              : 'Office Added Successfully'
          );

          setTimeout(() => this.dialogRef.close('saved'), 400);
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
