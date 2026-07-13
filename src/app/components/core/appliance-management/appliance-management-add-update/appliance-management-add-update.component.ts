import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';
import { ApplianceManagementService } from '../appliance-management.service';
import { ApplianceRequestDTO, ApplianceResponseDTO } from '../appliance-management.type';

@Component({
  selector: 'app-appliance-management-add-update',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './appliance-management-add-update.component.html',
  styleUrl: './appliance-management-add-update.component.scss'
})
export class ApplianceManagementAddUpdateComponent implements OnInit {

  isSaving = false;

  priorityOptions = [
    { label: 'Low', value: 'Low' },
    { label: 'Normal', value: 'Normal' },
    { label: 'High', value: 'High' },
    { label: 'Critical', value: 'Critical' }
  ];

  fieldErrors: {
    applianceName?: string;
  } = {};

  model: ApplianceRequestDTO = this.createDefaultModel();

  get isEditMode(): boolean {
    return this.data?.mode === 'edit';
  }

  constructor(
    private dialogRef: MatDialogRef<ApplianceManagementAddUpdateComponent>,
    private applianceService: ApplianceManagementService,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      mode: 'add' | 'edit';
      value?: ApplianceResponseDTO;
      fkUtility?: string;
      utilityName?: string;
      fkBusiness?: string;
    }
  ) {}

  ngOnInit(): void {
    if (this.isEditMode && this.data.value) {
      this.model = {
        applianceId: this.data.value.applianceId,
        applianceName: this.data.value.applianceName || '',
        companyName: this.data.value.companyName || '',
        modelNumber: this.data.value.modelNumber || '',
        fkBusiness: this.data.value.fkBusiness || this.data.fkBusiness || '',
        ratedVoltage: this.toNumber(this.data.value.ratedVoltage, 220),
        minCurrent: this.toNumber(this.data.value.minCurrent),
        maxCurrent: this.toNumber(this.data.value.maxCurrent),
        minPower: this.toNumber(this.data.value.minPower),
        maxPower: this.toNumber(this.data.value.maxPower),
        standbyPower: this.toNumber(this.data.value.standbyPower),
        normalPowerFactor: this.toNumber(this.data.value.normalPowerFactor),
        description: this.data.value.description || '',
        isCritical: this.data.value.isCritical ?? false,
        priorityLevel: this.data.value.priorityLevel || 'Normal',
        isDefault: this.data.value.isDefault ?? false,
        isCustom: this.data.value.isCustom ?? true,
        isActive: this.data.value.isActive ?? true,
        fkUtility: this.data.value.fkUtility || this.data.fkUtility || ''
      };
      return;
    }

    this.model = this.createDefaultModel();
    this.model.fkUtility = this.data?.fkUtility || '';
    this.model.fkBusiness = this.data?.fkBusiness || '';
  }

  onNameChange() {
    if (this.fieldErrors.applianceName) {
      this.fieldErrors.applianceName = '';
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.fieldErrors = {};

    if (!this.model.applianceName?.trim()) {
      this.fieldErrors.applianceName = 'Appliance Name is required';
    }

    if (Object.keys(this.fieldErrors).length > 0) return;

    const payload: ApplianceRequestDTO = {
      ...this.model,
      applianceName: this.model.applianceName.trim(),
      companyName: this.model.companyName.trim(),
      modelNumber: this.model.modelNumber.trim(),
      fkBusiness: this.model.fkBusiness || this.data.fkBusiness || '',
      description: this.model.description.trim(),
      ratedVoltage: this.toNumber(this.model.ratedVoltage, 220),
      minCurrent: this.toNumber(this.model.minCurrent),
      maxCurrent: this.toNumber(this.model.maxCurrent),
      minPower: this.toNumber(this.model.minPower),
      maxPower: this.toNumber(this.model.maxPower),
      standbyPower: this.toNumber(this.model.standbyPower),
      normalPowerFactor: this.toNumber(this.model.normalPowerFactor),
      isCritical: this.model.isCritical ?? false,
      priorityLevel: this.model.priorityLevel || 'Normal',
      fkUtility: this.model.fkUtility || this.data.fkUtility || '',
      isDefault: this.model.isDefault ?? false,
      isCustom: this.model.isCustom ?? true,
      isActive: this.model.isActive ?? true
    };

    this.isSaving = true;

    const api$ = this.isEditMode
      ? this.applianceService.updateBusinessAppliance(payload)
      : this.applianceService.addBusinessAppliance(payload);

    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success(
            this.isEditMode
              ? 'Appliance Updated Successfully'
              : 'Appliance Added Successfully'
          );

          setTimeout(() => this.dialogRef.close({ status: 'saved', id: res.data?.applianceId }), 400);
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

  private createDefaultModel(): ApplianceRequestDTO {
    return {
      applianceName: '',
      companyName: '',
      modelNumber: '',
      fkBusiness: '',
      ratedVoltage: 220,
      minCurrent: 0,
      maxCurrent: 0,
      minPower: 0,
      maxPower: 0,
      standbyPower: 0,
      normalPowerFactor: 0,
      description: '',
      isCritical: false,
      priorityLevel: 'Normal',
      isDefault: false,
      isCustom: true,
      isActive: true,
      fkUtility: ''
    };
  }

  private toNumber(value: number | string | null | undefined, fallback = 0): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
}
