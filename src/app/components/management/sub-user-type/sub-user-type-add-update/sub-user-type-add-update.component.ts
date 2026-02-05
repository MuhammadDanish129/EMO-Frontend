import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';

import { SubUserTypeRequestDTO } from '../sub-user-type.type';
import { SubUserTypeService } from '../sub-user-type.service';
import { UserTypeResponseDTO } from '../../usertype/usertype.type';
import { UserTypeService } from '../../usertype/usertype.service';
import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';
import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-sub-usertype-add-update',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule, YxSelectComponent],
  templateUrl: './sub-user-type-add-update.component.html'
})
export class SubUserTypeAddUpdateComponent implements OnInit {

  isSaving = false;
  isLoadingUserTypes = false;
  currentUser:any;

  fieldErrors: {
    subUserTypeName?: string;
    fkUserTypeId?: string;
  } = {};

  userTypes: UserTypeResponseDTO[] = [];

  model: SubUserTypeRequestDTO = {
    subUserTypeName: '',
    isActive: true,
    fkUserTypeId: ''
  };

  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  constructor(
    private dialogRef: MatDialogRef<SubUserTypeAddUpdateComponent>,
    private subUserTypeService: SubUserTypeService,
    private userTypeService: UserTypeService,
    private toaster: ToastrService,
    private _userService: UserService,
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: 'add' | 'edit'; value?: SubUserTypeRequestDTO }
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.data?.mode === 'edit' && this.data.value) {
      this.model = { ...this.data.value };
    }

    this.currentUser = await this._userService.user$;
    this.loadUserTypes(this.currentUser.userId);
  }

  /* =============================
   * LOAD USER TYPES
   * ============================= */
  loadUserTypes(userId: string) {
    this.isLoadingUserTypes = true;
// this.userTypeService.GetByUserId(userId).subscribe({
    this.userTypeService.GetByUserId(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.userTypes = res.data ?? [];
        } else {
          this.toaster.error(res.remarks || 'Failed to load user types');
        }
        this.isLoadingUserTypes = false;
      },
      error: () => {
        this.isLoadingUserTypes = false;
        this.toaster.error('Failed to load user types');
      }
    });
  }

  onNameChange() {
    if (this.fieldErrors.subUserTypeName) {
      this.fieldErrors.subUserTypeName = '';
    }
  }

  onUserTypeChange() {
    if (this.fieldErrors.fkUserTypeId) {
      this.fieldErrors.fkUserTypeId = '';
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.fieldErrors = {};

    if (!this.model.subUserTypeName?.trim()) {
      this.fieldErrors.subUserTypeName = 'Sub User Type Name is required';
    }

    if (!this.model.fkUserTypeId) {
      this.fieldErrors.fkUserTypeId = 'User Type is required';
    }

    if (Object.keys(this.fieldErrors).length > 0) return;

    this.isSaving = true;

    const api$ = this.isEditMode
      ? this.subUserTypeService.updateSubUserType(this.model)
      : this.subUserTypeService.addSubUserType(this.model);

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
