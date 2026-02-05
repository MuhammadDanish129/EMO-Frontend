import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ToastrService } from 'ngx-toastr';

import { UtilityService } from '../utility-management.service';
import { UtilityRequestDTO } from '../utility-management.type';

@Component({
  selector: 'app-utility-add-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './utility-management-add-update.component.html'
})
export class UtilityManagementAddUpdateComponent {

  /* ================= STATE ================= */
  isSaving = false;

  fieldErrors: {
    utilityName?: string;
  } = {};

  /* ================= MODE ================= */
  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  /* ================= MODEL ================= */
  model: UtilityRequestDTO = {
    utilityName: '',
    isActive: true
  };

  /* ================= CONSTRUCTOR ================= */
  constructor(
    private dialogRef: MatDialogRef<UtilityManagementAddUpdateComponent>,
    private _utilityService: UtilityService,
    private _toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      mode: 'add' | 'edit';
      value?: any;
    }
  ) {

    if (data?.mode === 'edit' && data.value) {
      this.model = { ...data.value };
    }

  }

  /* ================= HELPERS ================= */
  private closeWithDelay(result?: any) {
    setTimeout(() => {
      this.dialogRef.close(result);
    }, 500);
  }

  onUtilityNameChange() {
    if (this.fieldErrors.utilityName) {
      this.fieldErrors.utilityName = '';
    }
  }

  close() {
    this.dialogRef.close();
  }

  /* ================= SAVE ================= */
  save() {

    this.fieldErrors = {};

    if (!this.model.utilityName?.trim()) {
      this.fieldErrors.utilityName = 'Utility Name is required';
      return;
    }

    this.isSaving = true;

    /* ================= EDIT ================= */
    if (this.isEditMode) {

      const updatePayload: UtilityRequestDTO = {
        utilityId: this.data.value.utilityId,
        utilityName: this.model.utilityName,
        isActive: this.model.isActive
      };

      this._utilityService.updateUtility(updatePayload).subscribe({

        next: (res) => {

          if (res.success) {
            this._toaster.success('Utility updated successfully');
            this.closeWithDelay('saved');
          } else {
            this._toaster.error(res.remarks || 'Failed to update utility');
            this.fieldErrors.utilityName =
              res.remarks || 'Invalid utility name';
          }

          this.isSaving = false;
        },

        error: (err) => {
          this._toaster.error('Something went wrong');
          this.fieldErrors.utilityName =
            err?.error?.message || 'Something went wrong';
          this.isSaving = false;
        }

      });

    }

    /* ================= ADD ================= */
    else {

      const addPayload: UtilityRequestDTO = {
        utilityName: this.model.utilityName,
        isActive: this.model.isActive
      };

      this._utilityService.addUtility(addPayload).subscribe({

        next: (res) => {

          if (res.success) {
            this._toaster.success('Utility added successfully');
            this.closeWithDelay('saved');
          } else {
            this._toaster.error(res.remarks || 'Failed to add utility');
            this.fieldErrors.utilityName =
              res.remarks || 'Invalid utility name';
          }

          this.isSaving = false;
        },

        error: (err) => {
          this._toaster.error('Something went wrong');
          this.fieldErrors.utilityName =
            err?.error?.message || 'Something went wrong';
          this.isSaving = false;
        }

      });

    }

  }

}
