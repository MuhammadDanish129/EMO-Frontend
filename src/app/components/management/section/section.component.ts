import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
  ],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  // view state
  showForm = false;
  isLinear = true;
  isEditing = false;
  editingId: number | null = null;

  // search
  searchText = '';

  @ViewChild('stepper') stepper?: MatStepper;

  /** UNITS (source for assignment)
   * Replace with your real source/service if needed.
   * Shape mirrors your UnitRow from unit.component.ts
   */
  units: UnitRow[] = [
    { id: 1, unitName: 'North Wing', facilityId: 1, facilityName: 'Alpha Traders', floorCount: 5, buildingNumber: 'B-101', status: 'Active', statusClass: 'bg-success/10 text-success', city: 'Karachi' },
    { id: 2, unitName: 'Tech Tower', facilityId: 2, facilityName: 'Beta Solutions', floorCount: 8, buildingNumber: 'TT-07', status: 'Inactive', statusClass: 'bg-danger/10 text-danger', city: 'Lahore' },
    { id: 3, unitName: 'Warehouse Block A', facilityId: 3, facilityName: 'Gamma Logistics', floorCount: 2, buildingNumber: 'WHA-3', status: 'Active', statusClass: 'bg-success/10 text-success', city: 'Islamabad' },
    { id: 4, unitName: 'Production Hall', facilityId: 4, facilityName: 'Delta Foods', floorCount: 1, buildingNumber: 'PH-02', status: 'Active', statusClass: 'bg-success/10 text-success', city: 'Faisalabad' },
    { id: 5, unitName: 'Innovation Lab', facilityId: 5, facilityName: 'Epsilon Tech', floorCount: 3, buildingNumber: 'IL-01', status: 'Inactive', statusClass: 'bg-danger/10 text-danger', city: 'Multan' },
  ];

  /** SECTIONS TABLE DATA (mock) */
  sections: SectionRow[] = [
    { id: 1, sectionName: 'Storage A1', unitId: 3, unitName: 'Warehouse Block A', usageType: 'storage', floorNumber: 0, areaSqFt: 1200, status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 2, sectionName: 'Office West', unitId: 1, unitName: 'North Wing', usageType: 'office', floorNumber: 2, areaSqFt: 650, status: 'Maintenance', statusClass: 'bg-warning/10 text-warning' },
    { id: 3, sectionName: 'Retail Front', unitId: 2, unitName: 'Tech Tower', usageType: 'retail', floorNumber: 1, areaSqFt: 900, status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
  ];
  filteredSections: SectionRow[] = [...this.sections];

  // FORMS
  sectionInfoForm: FormGroup = this.fb.group({
    sectionName: ['', [Validators.required, Validators.minLength(2)]],
    usageType: ['', Validators.required], // storage | office | retail | production | other
    sectionCode: [''],
    description: [''],
  });

  structureForm: FormGroup = this.fb.group({
    // allow basements: no min; if not, add Validators.min(0)
    floorNumber: [0, [Validators.required]],
    areaSqFt: [0, [Validators.required, Validators.min(0)]],
    capacity: [null, [Validators.min(0)]],
  });

  opsForm: FormGroup = this.fb.group({
    status: ['Active', Validators.required], // 'Active' | 'Maintenance' | 'Inactive'
    occupancyStatus: ['vacant', Validators.required],
    supervisorName: [''],
    contactNumber: ['', [Validators.pattern(/^[0-9+\-\s()]{7,20}$/)]],
    notes: [''],
  });

  assignForm: FormGroup = this.fb.group({
    unitId: [null, Validators.required],
    subMeterId: [''],
  });

  constructor(private fb: FormBuilder, private snack: MatSnackBar, private dialog: MatDialog) {}

  trackById(_: number, row: SectionRow) { return row.id; }

  // toolbar
  addSectionClick() {
    this.isEditing = false;
    this.editingId = null;
    this.resetForms();
    this.showForm = true;
    queueMicrotask(() => this.stepper?.reset());
  }
  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.editingId = null;
  }

  // search
  onSearch(v: string) { this.searchText = v; }
  applySearch() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) { this.filteredSections = [...this.sections]; return; }
    this.filteredSections = this.sections.filter(s =>
      s.sectionName.toLowerCase().includes(q) ||
      s.unitName.toLowerCase().includes(q) ||
      s.usageType.toLowerCase().includes(q) ||
      String(s.floorNumber).includes(q)
    );
  }

  getUnitName(id: number | null): string {
    const u = this.units.find(x => x.id === id);
    return u ? `${u.unitName} — ${u.facilityName}` : '';
  }

  // submit (create or update)
  submit() {
    if (this.sectionInfoForm.invalid || this.structureForm.invalid || this.opsForm.invalid || this.assignForm.invalid) {
      this.sectionInfoForm.markAllAsTouched();
      this.structureForm.markAllAsTouched();
      this.opsForm.markAllAsTouched();
      this.assignForm.markAllAsTouched();
      return;
    }

    const unitId = this.assignForm.value.unitId as number;
    const unit = this.units.find(x => x.id === unitId);

    const status = this.opsForm.value.status as SectionRow['status'];
    const statusClass =
      status === 'Active' ? 'bg-success/10 text-success'
      : status === 'Maintenance' ? 'bg-warning/10 text-warning'
      : 'bg-danger/10 text-danger';

    const rowCore = {
      sectionName: this.sectionInfoForm.value.sectionName!,
      unitId,
      unitName: unit?.unitName ?? '',
      usageType: this.sectionInfoForm.value.usageType!,
      floorNumber: this.structureForm.value.floorNumber ?? 0,
      areaSqFt: this.structureForm.value.areaSqFt ?? 0,
      status,
      statusClass,
    };

    const details: SectionDetails = {
      sectionInfo: { ...this.sectionInfoForm.value },
      structure: { ...this.structureForm.value },
      operations: { ...this.opsForm.value },
      assignment: { ...this.assignForm.value, unitName: unit?.unitName, facilityName: unit?.facilityName, unitCity: unit?.city },
    };

    if (this.isEditing && this.editingId != null) {
      this.sections = this.sections.map(s => s.id === this.editingId ? { ...s, ...rowCore, details } : s);
      this.filteredSections = [...this.sections];
      this.snack.open(`Section #${this.editingId} updated`, 'OK', { duration: 2000 });
    } else {
      const nextId = (this.sections.at(-1)?.id ?? 0) + 1;
      const newRow: SectionRow = { id: nextId, ...rowCore, details };
      this.sections = [...this.sections, newRow];
      this.filteredSections = [...this.sections];
      this.snack.open('Section saved', 'OK', { duration: 2000 });
    }

    this.showForm = false;
    this.isEditing = false;
    this.editingId = null;
  }

  // actions
  editSection(s: SectionRow) {
    this.isEditing = true;
    this.editingId = s.id;
    this.showForm = true;

    this.sectionInfoForm.patchValue({
      sectionName: s.sectionName,
      usageType: s.usageType,
      sectionCode: s.details?.sectionInfo?.sectionCode ?? '',
      description: s.details?.sectionInfo?.description ?? '',
    });

    this.structureForm.patchValue({
      floorNumber: s.floorNumber,
      areaSqFt: s.areaSqFt,
      capacity: s.details?.structure?.capacity ?? null,
    });

    this.opsForm.patchValue({
      status: s.status,
      occupancyStatus: s.details?.operations?.occupancyStatus ?? 'vacant',
      supervisorName: s.details?.operations?.supervisorName ?? '',
      contactNumber: s.details?.operations?.contactNumber ?? '',
      notes: s.details?.operations?.notes ?? '',
    });

    this.assignForm.patchValue({
      unitId: s.unitId,
      subMeterId: s.details?.assignment?.subMeterId ?? '',
    });

    queueMicrotask(() => this.stepper?.reset());
  }

  openView(row: SectionRow) {
    this.dialog.open(SectionViewDialogComponent, {
      width: '820px',
      data: row,
    });
  }

  deleteSection(id: number) {
    this.sections = this.sections.filter(x => x.id !== id);
    this.filteredSections = [...this.sections];
    this.snack.open('Section removed', 'OK', { duration: 1500 });
  }

  // helpers
  private resetForms() {
    this.sectionInfoForm.reset({ usageType: '' } as any);
    this.structureForm.reset({ floorNumber: 0, areaSqFt: 0 } as any);
    this.opsForm.reset({ status: 'Active', occupancyStatus: 'vacant' } as any);
    this.assignForm.reset({ unitId: null } as any);
  }
}

/** Dialog component for viewing a section */
@Component({
  selector: 'app-section-view-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatDividerModule],
  templateUrl: './section-view-dialog.component.html',
})
export class SectionViewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SectionViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SectionRow
  ) {}
}

/** Models */
interface UnitRow {
  id: number;
  unitName: string;
  facilityId: number;
  facilityName: string;
  floorCount: number;
  buildingNumber: string;
  status: 'Active' | 'Inactive' | 'Maintenance';
  statusClass: string;
  city: string;
}

interface SectionDetails {
  sectionInfo: any;
  structure: any;
  operations: any;
  assignment: any;
}

interface SectionRow {
  id: number;
  sectionName: string;
  unitId: number;
  unitName: string;
  usageType: 'storage' | 'office' | 'retail' | 'production' | 'other' | string;
  floorNumber: number;
  areaSqFt: number;
  status: 'Active' | 'Inactive' | 'Maintenance';
  statusClass: string;
  details?: SectionDetails;
}
