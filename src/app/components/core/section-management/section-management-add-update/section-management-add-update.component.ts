import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../shared/services/user/user.type';

import { SectionRequestDTO } from '../section-management.type';
import { SectionService } from '../section-management.service';

@Component({
  selector: 'app-section-management-add-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModuleModule
  ],
  templateUrl: './section-management-add-update.component.html',
  styleUrl: './section-management-add-update.component.scss'
})
export class SectionManagementAddUpdateComponent implements OnInit {

  /* ================= STATE ================= */
  isSaving = false;
  currentUser: User | null = null;

  fieldErrors: {
    sectionName?: string;
  } = {};

  /* ================= MODEL ================= */
  model: SectionRequestDTO = {
    sectionName: '',
    fkFloor: '',
    isActive: true
  };

  /* ================= MODE ================= */
  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  constructor(
    private dialogRef: MatDialogRef<SectionManagementAddUpdateComponent>,
    private sectionService: SectionService,
    private toaster: ToastrService,
    private _userService: UserService,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      mode: 'add' | 'edit';
      value?: SectionRequestDTO;
      floorId?: string;
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

    // FLOOR CONTEXT
    if (this.data?.floorId) {
      this.model.fkFloor = this.data.floorId;
    }

  }

  /* ================= VALIDATION ================= */
  onNameChange() {
    if (this.fieldErrors.sectionName) {
      this.fieldErrors.sectionName = '';
    }
  }

  /* ================= ACTIONS ================= */
  close() {
    this.dialogRef.close();
  }

  save() {

    this.fieldErrors = {};

    if (!this.model.sectionName?.trim()) {
      this.fieldErrors.sectionName = 'Section Name is required';
    }

    if (Object.keys(this.fieldErrors).length > 0) return;

    this.isSaving = true;

    const api$ = this.isEditMode
      ? this.sectionService.updateSection(this.model)
      : this.sectionService.addSection(this.model);

    api$.subscribe({
      next: (res) => {

        if (res.success) {
          this.toaster.success(
            this.isEditMode
              ? 'Section Updated Successfully'
              : 'Section Added Successfully'
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
