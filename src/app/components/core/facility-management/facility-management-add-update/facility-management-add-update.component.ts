import { Component, Inject, OnInit } from '@angular/core';
import { FacilityRequestDTO } from '../facility-management.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FacilityService } from '../facility-management.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../shared/services/user/user.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';

@Component({
  selector: 'app-facility-management-add-update',
  standalone: true,
    imports: [CommonModule, FormsModule, MatSlideToggleModule, YxSelectComponent],
  templateUrl: './facility-management-add-update.component.html',
  styleUrl: './facility-management-add-update.component.scss'
})
export class FacilityManagementAddUpdateComponent implements OnInit {

  
  
    isSaving = false;
    isLoadingUserTypes = false;
     currentUser: User | null = null;
  
    fieldErrors: {
      facilityName?: string;
      facilityAddress?: string;
    } = {};
  
    // userTypes: UserTypeResponseDTO[] = [];
  
    model: FacilityRequestDTO = {
    facilityName: '',
    fkBusiness: '',
    facilityaddress: '',
    isActive: true,
    };
  
    get isEditMode(): boolean {
      return this.data?.mode === 'edit';
    }
  
    constructor(
      private dialogRef: MatDialogRef<FacilityManagementAddUpdateComponent>,
      private facilityService: FacilityService,
      private toaster: ToastrService,
      private _userService: UserService,
      @Inject(MAT_DIALOG_DATA)
      public data: { mode: 'add' | 'edit'; value?: FacilityRequestDTO }
    ) {}
  
    async ngOnInit(): Promise<void> {
      if (this.data?.mode === 'edit' && this.data.value) {
        this.model = { ...this.data.value };
      }
  
      this.currentUser = await this._userService.user$;
       this.model.fkBusiness = this.currentUser?.fkBusiness;
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
      if (this.fieldErrors.facilityName) {
        this.fieldErrors.facilityAddress = '';
      }
    }
  
    
  
    close() {
      this.dialogRef.close();
    }
  
    save() {
      this.fieldErrors = {};
  
      if (!this.model.facilityName?.trim()) {
        this.fieldErrors.facilityName = 'Facility Name is required';
      }
  
      // if (!this.model.fkUserTypeId) {
      //   this.fieldErrors.fkUserTypeId = 'User Type is required';
      // }
  
      if (Object.keys(this.fieldErrors).length > 0) return;
      console.log(this.model)
      this.isSaving = true;
  
      const api$ = this.isEditMode
        ? this.facilityService.updateFacility(this.model)
        : this.facilityService.addFacility(this.model);
  
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
