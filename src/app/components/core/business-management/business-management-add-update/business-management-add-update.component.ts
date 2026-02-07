import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';
import { SharedModule } from '../../../../shared/shared.module';

import { UserService } from '../../../../shared/services/user/user.service';
import { SubUserTypeService } from '../../../management/sub-user-type/sub-user-type.service';
import { ManagementService } from '../../../management/management.service';
import { BusinessService } from '../business-management.service';

import { User } from '../../../../shared/services/user/user.type';
import { GenderResponseDTO } from '../../../management/management.type';
import { SubUserTypeResponseDTO } from '../../../management/sub-user-type/sub-user-type.type';

import { AddBusinessAndAdminRequestDTO } from '../business-management.type';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-business-management-add-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatStepperModule,
    YxSelectComponent,
    SharedModule,
  ],
  templateUrl: './business-management-add-update.component.html',
  styleUrl: './business-management-add-update.component.scss'
})
export class BusinessManagementAddUpdateComponent implements OnInit {

  /* ================= ROUTE MODE ================= */
  mode: 'add' | 'edit' = 'add';

  /* ================= STEPPER ================= */
  currentStep = 0;

  /* ================= STATE ================= */
  isSaving = false;
  showPassword = false;
  showConfirmPassword = false;

 currentUser: any;
businessId: string = '';
  /* ================= DROPDOWNS ================= */
  genders: GenderResponseDTO[] = [];
  subUserTypes: SubUserTypeResponseDTO[] = [];

  /* ================= MAIN MODEL ================= */
  model = {
    // ===== USER =====
    id: '',
    name: '',
    userName: '',
    phone: '',
    fkGender: '',
    fkSubUserType: '',
    isActive: true,
    password: '',
    confirmPassword: '',

    // ===== IMAGE =====
    avatarFile: null as File | null,
    avatarPreview: '',

    // ===== BUSINESS =====
    businessName: '',
    businessEmail: '',
    businessContact: '',
    businessIsActive: true,

    // ===== UI =====
    isControlsDisabled: false
  };

  fieldErrors: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private subUserTypeService: SubUserTypeService,
    private managementService: ManagementService,
    private businessService: BusinessService,
    private toaster: ToastrService,
    
  ) {}

  get isEditMode(): boolean {
    return this.mode === 'edit';
  }

  async ngOnInit(): Promise<void> {

    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'] || 'add';
    });

    this.getGenders();

    this.currentUser = await this.userService.user$;

  this.businessId = this.currentUser?.fkBusiness;


    this.loadSubUserTypes(this.currentUser?.userId ?? '');
  }

  /* ================= PASSWORD ================= */

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  private isPasswordValid(password: string): boolean {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^*()_\-=+~`])[A-Za-z\d@#$%^*()_\-=+~`]{6,10}$/;
    return regex.test(password);
  }

  /* ================= DROPDOWNS ================= */

  getGenders() {
    this.managementService.getAll().subscribe({
      next: res => this.genders = res.data ?? [],
      error: () => this.toaster.error('Failed to load genders')
    });
  }

  loadSubUserTypes(userId: string) {
    this.subUserTypeService.getSubUserTypesOfBusinessAdmin(userId).subscribe({
      next: res => this.subUserTypes = res.data ?? [],
      error: () => this.toaster.error('Failed to load sub user types')
    });
  }


  
  /* ================= IMAGE ================= */

  onFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      this.processFile(input.files[0]);
    }
  }

  private processFile(file: File) {
    if (!file.type.startsWith('image/')) {
      this.toaster.error('Only image files are allowed');
      return;
    }

    this.model.avatarFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.model.avatarPreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  removeImage() {
    this.model.avatarFile = null;
    this.model.avatarPreview = '';
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) this.processFile(file);
  }

  /* ================= VALIDATION ================= */

  validateAdmin(): boolean {

    this.fieldErrors = {};

    if (!this.model.businessName.trim()) this.fieldErrors.businessName = true;
    if (!this.model.name.trim()) this.fieldErrors.name = true;
    if (!this.model.userName.trim()) this.fieldErrors.username = true;
    if (!this.model.fkGender) this.fieldErrors.gender = true;
    if (!this.model.fkSubUserType) this.fieldErrors.subUserType = true;

    if (!this.model.password) {
      this.fieldErrors.password = 'Password is required';
    } else if (!this.isPasswordValid(this.model.password)) {
      this.fieldErrors.password = 'Password complexity invalid';
    }

    if (this.model.password !== this.model.confirmPassword) {
      this.fieldErrors.confirmPassword = 'Passwords do not match';
    }

    return Object.keys(this.fieldErrors).length === 0;
  }

  private buildImagePayload() {

    let imageBase64: string | undefined = undefined;
    let isImageChanged = false;

    if (this.model.avatarPreview) {
      imageBase64 = this.model.avatarPreview;
      isImageChanged = true;
    }

    return { imageBase64, isImageChanged };
  }

  /* ================= SUBMIT ================= */

  submitAll() {

    if (!this.validateAdmin()) return;

    this.isSaving = true;

    const imagePayload = this.buildImagePayload();

    const payload: AddBusinessAndAdminRequestDTO = {

      // ===== BUSINESS =====
      businessName: this.model.businessName,
      businessEmail: this.model.businessEmail,
      businessContact: this.model.businessContact,
      isActive: this.model.businessIsActive,
      BusinessisActive: this.model.businessIsActive,

      // ===== USER =====
      name: this.model.name,
      username: this.model.userName,
      userPhoneNo: this.model.phone,
      fkGender: this.model.fkGender,
      fkSubUserType: this.model.fkSubUserType,
      userPassword: this.model.password,
      fkUser: this.currentUser?.userId ?? '',

      // ===== IMAGE =====
      imageBase64: imagePayload.imageBase64,
      isImageChanged: imagePayload.isImageChanged
    };
    console.log(payload);
    this.businessService.AddBusinessAndBusinessAdmin(payload).subscribe({

      next: () => {
        this.toaster.success('Business And Admin created successfully');
        this.router.navigate(['/core/business-management']);
      },

      error: () => {
        this.toaster.error('Creation failed');
        this.isSaving = false;
      }

    });

  }

  close() {
    this.router.navigate(['/core/business-management']);
  }

}
