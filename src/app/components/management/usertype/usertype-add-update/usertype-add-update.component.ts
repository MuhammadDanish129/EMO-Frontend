import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserTypeService } from '../usertype.service';
import { UserTypeRequestDTO } from '../usertype.type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usertype-add-update',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule],

  templateUrl: './usertype-add-update.component.html'
})
export class UsertypeAddUpdateComponent {

  isSaving = false;
  fieldErrors: {
    userTypeName?: string;
    userTypeLevel?: number;
  } = {};
  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }
  private closeWithDelay(result?: any) {
    setTimeout(() => {
      this.dialogRef.close(result);
    }, 500);
  }


  model = {
    userTypeName: '',
    isActive: true,
    userTypeLevel:0
  };

  onUserTypeNameChange() {
    if (this.fieldErrors.userTypeName, this.fieldErrors.userTypeLevel) {
      this.fieldErrors.userTypeName = '';
      this.fieldErrors.userTypeLevel = 0;
    }
  }
  constructor(
    private dialogRef: MatDialogRef<UsertypeAddUpdateComponent>,
    private _userTypeService: UserTypeService,
    private _toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit'; value?: any }
  ) {
    if (data?.mode === 'edit' && data.value) {
      this.model = { ...data.value };
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.fieldErrors = {}; // reset errors

    if (!this.model.userTypeName?.trim()) {
      this.fieldErrors.userTypeName = 'User Type Name is required';
      return;
    }

    this.isSaving = true;

    if (this.isEditMode) {

      const updatePayload: UserTypeRequestDTO = {
        userTypeId: this.data.value.userTypeId,
        userTypeName: this.model.userTypeName,
        userTypeLevel: this.model.userTypeLevel,
        isActive: this.model.isActive
      };

      this._userTypeService.updateUserType(updatePayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('User Type updated successfully');
            this.closeWithDelay('saved');
          } else {
            this._toaster.error(res.remarks || 'Failed to update user type');
            this.fieldErrors.userTypeName =
              res.remarks || 'Invalid user type name';
          }
          this.isSaving = false;
        },
        error: (err) => {
          this._toaster.error('Something went wrong');
          this.fieldErrors.userTypeName =
            err?.error?.message || 'Something went wrong';
          this.isSaving = false;
        }
      });

    } else {

      const addUserPayload: UserTypeRequestDTO = {
        userTypeName: this.model.userTypeName,
        isActive: this.model.isActive,
        userTypeLevel: this.model.userTypeLevel
      };

      this._userTypeService.addUserType(addUserPayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('User Type added successfully');
            this.closeWithDelay('saved');
          } else {
            this._toaster.error(res.remarks || 'Failed to add user type');
            this.fieldErrors.userTypeName =
              res.remarks || 'Invalid user type name';
          }
          this.isSaving = false;
        },
        error: (err) => {
          this._toaster.error('Something went wrong');
          this.fieldErrors.userTypeName =
            err?.error?.message || 'Something went wrong';
          this.isSaving = false;
        }
      });
    }
  }



}
