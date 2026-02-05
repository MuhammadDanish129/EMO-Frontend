import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { User } from '../../../../shared/services/user/user.type';
import { BuildingRequestDTO } from '../building-management.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BuildingService } from '../building-management.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-building-management-add-update',
  standalone: true,
  imports: [CommonModule, FormsModule, YxSelectComponent, SharedModule, MaterialModuleModule],
  templateUrl: './building-management-add-update.component.html',
  styleUrl: './building-management-add-update.component.scss'
})
export class BuildingManagementAddUpdateComponent  implements OnInit {

  
  
    isSaving = false;
    isLoadingUserTypes = false;
     currentUser: User | null = null;
  
    fieldErrors: {
      buildingName?: string;
      // facilityAddress?: string;
    } = {};
  
    // userTypes: UserTypeResponseDTO[] = [];
  
    model: BuildingRequestDTO = {
    buildingName: '',
    fkFacility: '',
    isActive: true,
    };
  
    get isEditMode(): boolean {
      return this.data?.mode === 'edit';
    }
  
    constructor(
      private dialogRef: MatDialogRef<BuildingManagementAddUpdateComponent>,
      private buildingService: BuildingService,
      private toaster: ToastrService,
      private _userService: UserService,
      @Inject(MAT_DIALOG_DATA)
    public data: {
  mode: 'add' | 'edit';
  value?: BuildingRequestDTO;
  facilityId?: string;
}
    ) {}
  
    async ngOnInit(): Promise<void> {
      if (this.data?.mode === 'edit' && this.data.value) {
        this.model = { ...this.data.value };
      }
  
      this.currentUser = await this._userService.user$;
    if (this.data?.facilityId) {
  this.model.fkFacility = this.data.facilityId;
}
      // this.loadUserTypes(this.currentUser.userId);
    }
  
    /* =============================
     * LOAD USER TYPES
     * ============================= */
  //   loadUserTypes(userId: string) {
  //     this.isLoadingUserTypes = true;
  // // this.userTypeService.GetByUserId(userId).subscribe({
  //     this.facilityService.GetByUserId(userId).subscribe({
  //       next: (res) => {
  //         if (res.success) {
  //           this.userTypes = res.data ?? [];
  //         } else {
  //           this.toaster.error(res.remarks || 'Failed to load user types');
  //         }
  //         this.isLoadingUserTypes = false;
  //       },
  //       error: () => {
  //         this.isLoadingUserTypes = false;
  //         this.toaster.error('Failed to load user types');
  //       }
  //     });
  //   }
  
    onNameChange() {
      if (this.fieldErrors.buildingName) {
        this.fieldErrors.buildingName = '';
      }
    }
  
    
  
    close() {
      this.dialogRef.close();
    }
  
    save() {
      this.fieldErrors = {};
  
      if (!this.model.buildingName?.trim()) {
        this.fieldErrors.buildingName = 'Building Name is required';
      }
  
      // if (!this.model.fkUserTypeId) {
      //   this.fieldErrors.fkUserTypeId = 'User Type is required';
      // }
  
      if (Object.keys(this.fieldErrors).length > 0) return;
      console.log(this.model)
      this.isSaving = true;
  
      const api$ = this.isEditMode
        ? this.buildingService.updateBuilding(this.model)
        : this.buildingService.addBuilding(this.model);
  
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
