import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ToastrService } from 'ngx-toastr';
import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';
import { ManagementService } from '../../../management/management.service';
import { TenantService } from '../tenant-office-assignment.service';
import { TenantResponseDTO } from '../tenant-office-assignment.type';
import { UserService } from '../../../../shared/services/user/user.service';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';

/* ⭐ DTO IMPORT */
import { AddTenenatDTO } from '../tenant-office-assignment.type';

@Component({
  selector: 'app-assign-tenant',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    YxSelectComponent,
    MaterialModuleModule
  ],
  templateUrl: './assign-tenant.component.html',
  styleUrl: './assign-tenant.component.scss'
})
export class AssignTenantComponent implements OnInit {

  /* ================= VIEW CHILD ================= */
  @ViewChild('startDateInput') startDateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('endDateInput') endDateInput!: ElementRef<HTMLInputElement>;

  /* ================= STEPPER ================= */
  currentStep = 0;
  showPassword = false;
  showConfirmPassword = false;

  /* ================= NAV STATE ================= */
  officeIds: string[] = [];

  /* ================= USER CONTEXT ================= */
  currentUser: any;
  businessId: string = '';

  /* ================= MODE ================= */
  tenantMode: 'existing' | 'new' = 'new';

  /* ================= DROPDOWNS ================= */
  genders: any[] = [];
  tenants: TenantResponseDTO[] = [];

  selectedTenantId = '';
  fieldErrors: any = {};

  /* ================= DATE RANGE ================= */
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  /* ================= TENANT MODEL (DTO DIRECT) ================= */
  tenantModel: AddTenenatDTO = {
    name: '',
    userName: '',
    userPassword: '',
    userPhoneNo: '',
    fkGender: '',
    isActive: true,
    fkHandler: null,
    fkBusiness: null
  };

  /* ⭐ CONFIRM PASSWORD GLOBAL (NO UI MODEL) */
  confirmPassword: string = '';

  /* ================= CONTACT PERSON ================= */
  contactPersons: any[] = [
    {
      contactPersonName: '',
      contactPersonPhone: '',
      contactPersonEmail: ''
    }
  ];

  /* ================= AGREEMENT ================= */
  agreementModel: any = {
    agreementName: '',
    agreementDescription: '',
    agreementStartDate: '',
    agreementEndDate: ''
  };

  /* ================= UI ================= */
  isSaving = false;
  isLoading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private tenantService: TenantService,
    private managementService: ManagementService,
    private toaster: ToastrService
  ) {}

  async ngOnInit(): Promise<void> {

    this.officeIds = history.state?.officeIds || [];

    if (!this.officeIds.length) {
      this.router.navigate(['/core/tenant-office-assignment']);
      return;
    }

    this.currentUser = await this.userService.user$;
    this.businessId = this.currentUser?.fkBusiness;

    this.loadGenders();
  }

  /* ================= LOADERS ================= */

  loadGenders() {
    this.managementService.getAll().subscribe({
      next: (res) => this.genders = res.data ?? [],
      error: () => {
        this.genders = [];
        this.toaster.error('Failed to load genders');
      }
    });
  }

  loadTenants() {
    this.isLoading = true;

    this.tenantService.getTenantsByBusiness(this.businessId).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.toaster.error(res.remarks || 'Failed to load tenants');
          this.isLoading = false;
          return;
        }

        this.tenants = res.data ?? [];
        this.isLoading = false;
      },
      error: () => {
        this.tenants = [];
        this.isLoading = false;
        this.toaster.error('Failed to load tenants');
      }
    });
  }

  onTenantModeChange() {
    if (this.tenantMode === 'existing') {
      if (!this.tenants || this.tenants.length === 0) {
        this.loadTenants();
      }
    }

    if (this.tenantMode === 'new') {
      this.selectedTenantId = '';
    }
  }

  /* ================= CONTACT ================= */

  addContact() {
    this.contactPersons.push({
      contactPersonName: '',
      contactPersonPhone: '',
      contactPersonEmail: ''
    });
  }

  removeContact(i: number) {
    this.contactPersons.splice(i, 1);
  }

  /* ================= PASSWORD VALIDATION ================= */

  private isPasswordValid(password: string): boolean {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^*()_\-=+~`])[A-Za-z\d@#$%^*()_\-=+~`]{6,10}$/;
    return regex.test(password);
  }

  /* ================= VALIDATION ================= */

  validateStep1(): boolean {

    if (this.tenantMode === 'existing') {
      if (!this.selectedTenantId) {
        this.toaster.error('Select tenant');
        return false;
      }
      return true;
    }

    this.fieldErrors = {};

    if (!this.tenantModel.name?.trim()) this.fieldErrors.name = true;
    if (!this.tenantModel.userName?.trim()) this.fieldErrors.username = true;

    if (!this.tenantModel.userPassword) {
      this.fieldErrors.password = 'Password is required';
    }

    if (this.tenantModel.userPassword !== this.confirmPassword) {
      this.fieldErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(this.fieldErrors).length > 0) return false;

    if (!this.isPasswordValid(this.tenantModel.userPassword || '')) {
      this.toaster.error(
        'Password must be 6-10 chars, include uppercase, number & special char'
      );
      return false;
    }

    return true;
  }

  validateStep2(): boolean {
    if (!this.contactPersons.length) return false;

    return this.contactPersons.every(x =>
      x.contactPersonName &&
      x.contactPersonPhone &&
      x.contactPersonEmail
    );
  }

  validateStep3(): boolean {
    return !!(
      this.agreementModel.agreementName &&
      this.range.controls.start.value &&
      this.range.controls.end.value
    );
  }

  /* ================= DATE CHANGE ================= */

  onStartDateChange(event: any) {
    const value = event.target.value;
    if (!value) return;
    this.range.controls.start.setValue(new Date(value));
  }

  onEndDateChange(event: any) {
    const value = event.target.value;
    if (!value) return;
    this.range.controls.end.setValue(new Date(value));
  }

  /* ================= OPEN PICKERS ================= */

  openStartPicker(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const input = this.startDateInput.nativeElement as any;
    if (input.showPicker) input.showPicker();
    else this.startDateInput.nativeElement.focus();
  }

  openEndPicker(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const input = this.endDateInput.nativeElement as any;
    if (input.showPicker) input.showPicker();
    else this.endDateInput.nativeElement.focus();
  }

  /* ================= DATE PREP ================= */

  prepareAgreementDates() {

    const startDate = this.range.controls.start.value;
    const endDate = this.range.controls.end.value;

    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    this.agreementModel.agreementStartDate = start.toISOString();
    this.agreementModel.agreementEndDate = end.toISOString();
  }

  /* ================= PASSWORD TOGGLES ================= */

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  /* ================= SUBMIT ================= */

  submitAll() {

    if (!this.validateStep1()) return;

    if (!this.validateStep2()) {
      this.toaster.error('Fill all contact persons');
      return;
    }

    if (!this.validateStep3()) {
      this.toaster.error('Fill agreement details');
      return;
    }

    this.prepareAgreementDates();
 /* ⭐ ENSURE FK BUSINESS ALWAYS SET */
  this.tenantModel.fkBusiness = this.businessId;
    this.isSaving = true;

    const payload: any = {
      fkOffices: this.officeIds,
      agreement: this.agreementModel,
      contactPerson: this.contactPersons
    };

    if (this.tenantMode === 'existing') {
      payload.fkTenant = this.selectedTenantId;
    } else {
      payload.tenant = this.tenantModel;
    }

    this.tenantService.assignTenant(payload).subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success('Tenant assigned successfully');
          this.router.navigate(['/core/tenant-office-assignment']);
        } else {
          this.toaster.error(res.remarks || 'Assignment failed');
          this.isSaving = false;
        }
      },
      error: () => {
        this.toaster.error('Assignment failed');
        this.isSaving = false;
      }
    });
  }
}
