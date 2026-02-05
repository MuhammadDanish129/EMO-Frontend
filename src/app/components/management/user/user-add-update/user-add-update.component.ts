import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';

import { YxSelectComponent } from '../../../../shared/yx-select/yx-select.component';
import { UserService } from '../../../../shared/services/user/user.service';
import { SubUserTypeService } from '../../sub-user-type/sub-user-type.service';
import { ManagementService } from '../../management.service';
import { UserManagementService } from '../user.service';

import { GenderResponseDTO } from '../../management.type';
import { SubUserTypeResponseDTO } from '../../sub-user-type/sub-user-type.type';
import { UserRequestDTO } from '../user.type';
import { User } from '../../../../shared/services/user/user.type';

@Component({
  selector: 'app-user-add-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    YxSelectComponent
  ],
  templateUrl: './user-add-update.component.html'
})
export class UserAddUpdateComponent implements OnInit {

  /* ================= STATE ================= */
  isSaving = false;
  showPassword = false;
  showConfirmPassword = false;

  currentUser: User | null = null;

  /* ================= DROPDOWNS ================= */
  genders: GenderResponseDTO[] = [];
  subUserTypes: SubUserTypeResponseDTO[] = [];

  /* ================= MODEL ================= */
  model = {
    id: '',
    name: '',
    userName: '',
    phone: '',
    fkGender: '',
    fkSubUserType: '',
    isActive: true,
    fkHandler: this.currentUser?.userId,
    password: '',
    confirmPassword: '',
    avatarFile: null as File | null,   // NEW image only
    avatarPreview: '',               // base64 OR existing image
    fkBusiness: ''
  };

  fieldErrors: any = {};

  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  get isControlsDisabled(): boolean {
    return this.isEditMode && this.model.id === this.currentUser?.userId;
  }

  constructor(
    private dialogRef: MatDialogRef<UserAddUpdateComponent>,
    private userService: UserService,
    private subUserTypeService: SubUserTypeService,
    private managementService: ManagementService,
    private userManagementService: UserManagementService,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: 'add' | 'edit'; value?: any }
  ) {
    if (this.isEditMode && data?.value) {
      this.model = {
        ...this.model,
        ...data.value,
        id: data.value.userId,
        avatarPreview: data.value.imageBase64 ?? '',
        avatarFile: null,        // IMPORTANT: unchanged image
        password: '',
        confirmPassword: ''
      };
    }
  }

  async ngOnInit(): Promise<void> {
    this.getGenders();
    this.currentUser = await this.userService.user$;
    this.loadSubUserTypes(this.currentUser?.userId ?? '');
  }

  /* ================= IMAGE UPLOADER ================= */

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) this.processFile(file);
  }

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

  /* ================= DATA LOAD ================= */

  getGenders() {
    this.managementService.getAll().subscribe({
      next: res => this.genders = res.data ?? [],
      error: () => this.toaster.error('Failed to load genders')
    });
  }

  loadSubUserTypes(userId: string) {
    this.subUserTypeService.getSubUserTypesByUserId(userId).subscribe({
      next: res => this.subUserTypes = res.data ?? [],
      error: () => this.toaster.error('Failed to load sub user types')
    });
  }

  /* ================= VALIDATION ================= */

  validate(): boolean {
    this.fieldErrors = {};

    if (!this.model.name.trim()) this.fieldErrors.name = true;
    if (!this.model.userName.trim()) this.fieldErrors.username = true;
    if (!this.model.fkGender) this.fieldErrors.gender = true;
    if (!this.model.fkSubUserType) this.fieldErrors.subUserType = true;

    if (!this.isEditMode) {
      if (!this.model.password) {
        this.fieldErrors.password = 'Password is required';
      } else if (!this.isPasswordValid(this.model.password)) {
        this.fieldErrors.password =
          'Password does not meet the required complexity';
      }

      if (this.model.password !== this.model.confirmPassword) {
        this.fieldErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return Object.keys(this.fieldErrors).length === 0;
  }

  /* ================= DEFAULT AVATAR HELPERS ================= */

  private getDefaultAvatarPath(genderName: string): string {
    switch ((genderName || '').toLowerCase()) {
      case 'male':
        return 'assets/images/avatars/male.jpg';
      case 'female':
        return 'assets/images/avatars/female.jpg';
      default:
        return 'assets/images/avatars/other.jpg';
    }
  }

  private async convertImageToBase64(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();

    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /* ================= SAVE ================= */

  async save() {
    if (!this.validate()) return;

    const selectedSubUserType = this.subUserTypes.find(
      x => x.subUserTypeId === this.model.fkSubUserType
    );

    const currentUserLevel = this.currentUser?.subUserTypeLevel ?? 1000;

    if (selectedSubUserType &&
        selectedSubUserType.subUserTypeLevel >= currentUserLevel) {
      this.toaster.warning(
        'You are not authorized to assign this sub user type.'
      );
      return;
    }

    /* ================= IMAGE LOGIC ================= */

    let imageBase64: string | undefined = undefined;
    let isImageChanged = false;

    if (!this.isEditMode) {
      // ADD MODE → image required
      if (this.model.avatarPreview) {
        imageBase64 = this.model.avatarPreview;
      } else {
        const gender = this.genders.find(
          g => g.genderId === this.model.fkGender
        );
        if (gender) {
          imageBase64 = await this.convertImageToBase64(
            this.getDefaultAvatarPath(gender.genderName)
          );
        }
      }
      isImageChanged = true;
    } else {
      // EDIT MODE → only if user uploaded new image
      if (this.model.avatarFile) {
        imageBase64 = this.model.avatarPreview;
        isImageChanged = true;
      }
    }

    const payload: UserRequestDTO = {
      userId: this.isEditMode ? this.model.id : undefined,
      name: this.model.name,
      username: this.model.userName,
      userPhoneNo: this.model.phone,
      fkGender: this.model.fkGender,
      fkSubUserType: this.model.fkSubUserType,
      isActive: this.model.isActive,
      fkBusiness : this.model.fkBusiness ? this.model.fkBusiness  : null,
      fkHandler : this.currentUser?.userId,
      userPassword: this.isEditMode ? undefined : this.model.password,
      imageBase64: imageBase64,
      isImageChanged: isImageChanged
    };

    /* ================= API ================= */

    if (this.isEditMode) {
      // update API here if needed
      // console.log(payload);
      this.userManagementService.updateUser(payload).subscribe({
        next: res => {
          if (res.success) {
            this.toaster.success('User updated successfully');
            this.dialogRef.close(true);
          } else {
            this.toaster.warning(res.remarks);
          }
        },
        error: () => this.toaster.error('Something went wrong')
      });
    } else {
      this.userManagementService.addUser(payload).subscribe({
        next: res => {
          if (res.success) {
            this.toaster.success('User added successfully');
            this.dialogRef.close(true);
          } else {
            this.toaster.warning(res.remarks);
          }
        },
        error: () => this.toaster.error('Something went wrong')
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
