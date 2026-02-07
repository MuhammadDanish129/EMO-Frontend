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

  fieldErrors: {
    officeName?: string;
  } = {};

  /* ================= MODEL ================= */
  model: OfficeRequestDTO = {
    officeName: '',
    fkSection: '',
    isActive: true
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

    // EDIT MODE
    if (this.data?.mode === 'edit' && this.data.value) {
      this.model = { ...this.data.value };
    }

    // USER
    this.currentUser = await this._userService.user$;
    this.model.fkBusiness = this.currentUser?.fkBusiness;  
    // SECTION CONTEXT
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

  /* ================= ACTIONS ================= */
  close() {
    this.dialogRef.close();
  }

  save() {

    this.fieldErrors = {};

    if (!this.model.officeName?.trim()) {
      this.fieldErrors.officeName = 'Office Name is required';
    }

    if (Object.keys(this.fieldErrors).length > 0) return;

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
        }
        else {
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
