import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../shared/services/user/user.type';

import { FloorRequestDTO } from '../floor-management.type';
import { FloorService } from '../floor-management.service';

@Component({
  selector: 'app-floor-management-add-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModuleModule
  ],
  templateUrl: './floor-management-add-update.component.html',
  styleUrl: './floor-management-add-update.component.scss'
})
export class FloorManagementAddUpdateComponent implements OnInit {

  /* ================= STATE ================= */
  isSaving = false;
  currentUser: User | null = null;

fieldErrors: {
  floorName?: string;
  floorNo?: string;
} = {};

  /* ================= MODEL ================= */
  model: FloorRequestDTO = {
    floorName: '',
    fkBuilding: '',
    isActive: true,
    floorNo : 0
  };

  /* ================= MODE ================= */
  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  constructor(
    private dialogRef: MatDialogRef<FloorManagementAddUpdateComponent>,
    private floorService: FloorService,
    private toaster: ToastrService,
    private _userService: UserService,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      mode: 'add' | 'edit';
      value?: FloorRequestDTO;
      buildingId?: string;
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
    // BUILDING CONTEXT
    if (this.data?.buildingId) {
      this.model.fkBuilding = this.data.buildingId;
    }

  }

  /* ================= VALIDATION ================= */
  onNameChange() {
   if (this.fieldErrors.floorName) {
    this.fieldErrors.floorName = '';
  }

  if (this.fieldErrors.floorNo) {
    this.fieldErrors.floorNo = undefined;
  }
  }

  /* ================= ACTIONS ================= */
  close() {
    this.dialogRef.close();
  }

  save() {

    this.fieldErrors = {};

    if (!this.model.floorName?.trim()) {
      this.fieldErrors.floorName = 'Floor Name is required';
    }
    if (!this.model.floorNo || this.model.floorNo <= 0) {
  this.fieldErrors.floorNo = 'Floor Number is required';
}


    if (Object.keys(this.fieldErrors).length > 0) return;

    this.isSaving = true;
    console.log(this.model)
    const api$ = this.isEditMode
      ? this.floorService.updateFloor(this.model)
      : this.floorService.addFloor(this.model);

    api$.subscribe({
      next: (res) => {

        if (res.success) {
          this.toaster.success(
            this.isEditMode
              ? 'Floor Updated Successfully'
              : 'Floor Added Successfully'
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
