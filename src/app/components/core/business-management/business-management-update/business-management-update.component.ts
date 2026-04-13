import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';

import { BusinessService } from '../business-management.service';
import { UserService } from '../../../../shared/services/user/user.service';

import { BusinessRequestDTO, BusinessResponseDTO } from '../business-management.type';

@Component({
  selector: 'app-business-management-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './business-management-update.component.html',
  styleUrl: './business-management-update.component.scss'
})
export class BusinessManagementUpdateComponent implements OnInit {

  isSaving = false;

  currentUser: any;

  model = {
    businessId: '',
    businessName: '',
    businessEmail: '',
    businessContact: '',
    isActive: true
  };

  fieldErrors: any = {};

  constructor(
    private dialogRef: MatDialogRef<BusinessManagementUpdateComponent>,
    private businessService: BusinessService,
    private userService: UserService,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: {
      mode: 'edit';
      value: BusinessResponseDTO;
    }
  ) {}

  async ngOnInit(): Promise<void> {

    this.currentUser = await this.userService.user$;

    // ✅ Populate data from dialog
    if (this.data?.mode === 'edit' && this.data?.value) {

      const st = this.data.value;

      this.model.businessId = st.businessId;
      this.model.businessName = st.businessName;
      this.model.businessEmail = st.businessEmail;
      this.model.businessContact = st.businessContact;
      this.model.isActive = st.isActive;
    }
  }

  /* ================= VALIDATION ================= */

  validate(): boolean {

    this.fieldErrors = {};

    if (!this.model.businessName.trim()) {
      this.fieldErrors.businessName = 'Business name is required';
    }

    if (!this.model.businessEmail.trim()) {
      this.fieldErrors.businessEmail = 'Business email is required';
    }
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.model.businessEmail)) {
      this.fieldErrors.businessEmail = 'Invalid email format';
    }

    if (!this.model.businessContact.trim()) {
      this.fieldErrors.businessContact = 'Business contact is required';
    }

    return Object.keys(this.fieldErrors).length === 0;
  }

  /* ================= UPDATE ================= */

  updateBusiness() {

    if (!this.validate()) return;

    this.isSaving = true;

    const payload: BusinessRequestDTO = {
      businessId: this.model.businessId,
      businessName: this.model.businessName,
      businessEmail: this.model.businessEmail,
      businessContact: this.model.businessContact,
      isActive: this.model.isActive,
      fkUser: this.currentUser?.userId
    };

    this.businessService.updateBusiness(payload).subscribe({

      next: () => {
        this.toaster.success('Business updated successfully');
        this.dialogRef.close('updated'); // 🔥 important
      },

      error: () => {
        this.toaster.error('Update failed');
        this.isSaving = false;
      }

    });
  }

  close() {
    this.dialogRef.close();
  }
}