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
  selector: 'app-sub-section',
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
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss'],
})
export class SubSectionComponent {
  // view state
  showForm = false;
  isLinear = true;
  isEditing = false;
  editingId: number | null = null;

  // search
  searchText = '';

  @ViewChild('stepper') stepper?: MatStepper;

  /** SECTIONS (source for assignment)
   * Replace with real service if you have one.
   * Minimal shape matches your Section table idea.
   */
  sections: SectionRow[] = [
    { id: 1, sectionName: 'Storage A1', unitName: 'Warehouse Block A', floorNumber: 0, usageType: 'storage', areaSqFt: 1200, status: 'Active' },
    { id: 2, sectionName: 'Office West', unitName: 'North Wing', floorNumber: 2, usageType: 'office', areaSqFt: 650, status: 'Maintenance' },
    { id: 3, sectionName: 'Retail Front', unitName: 'Tech Tower', floorNumber: 1, usageType: 'retail', areaSqFt: 900, status: 'Inactive' },
  ];

  /** SUB‑SECTIONS TABLE DATA (mock) */
  subSections: SubSectionRow[] = [
    {
      id: 1,
      subSectionName: 'A1‑Bay‑01',
      sectionId: 1,
      sectionName: 'Storage A1',
      spaceType: 'storage',
      occupiedAreaSqFt: 700,
      serviceAreaSqFt: 100,
      status: 'Active',
      statusClass: 'bg-success/10 text-success',
    },
    {
      id: 2,
      subSectionName: 'NW‑Ofc‑2B',
      sectionId: 2,
      sectionName: 'Office West',
      spaceType: 'office',
      occupiedAreaSqFt: 320,
      serviceAreaSqFt: 40,
      status: 'Maintenance',
      statusClass: 'bg-warning/10 text-warning',
    },
    {
      id: 3,
      subSectionName: 'TT‑Shop‑101',
      sectionId: 3,
      sectionName: 'Retail Front',
      spaceType: 'retail',
      occupiedAreaSqFt: 450,
      serviceAreaSqFt: 60,
      status: 'Inactive',
      statusClass: 'bg-danger/10 text-danger',
    },
  ];
  filteredSubSections: SubSectionRow[] = [...this.subSections];

  // FORMS
  infoForm: FormGroup = this.fb.group({
    subSectionName: ['', [Validators.required, Validators.minLength(2)]],
    spaceType: ['', Validators.required],           // office | shop | storage | room | production | other
    subSectionCode: [''],
    description: [''],
  });

  areaForm: FormGroup = this.fb.group({
    occupiedAreaSqFt: [0, [Validators.required, Validators.min(0)]],
    serviceAreaSqFt: [0, [Validators.required, Validators.min(0)]],
  });

  opsForm: FormGroup = this.fb.group({
    status: ['Active', Validators.required],        // 'Active' | 'Maintenance' | 'Inactive'
    occupancyStatus: ['vacant', Validators.required],
    assigneeType: ['none', Validators.required],    // 'none' | 'person' | 'tenant'
    personName: [''],
    tenantName: [''],
    contactNumber: ['', [Validators.pattern(/^[0-9+\-\s()]{7,20}$/)]],
    notes: [''],
  });

  assignForm: FormGroup = this.fb.group({
    sectionId: [null, Validators.required],
    subMeterId: [''],
  });

  constructor(private fb: FormBuilder, private snack: MatSnackBar, private dialog: MatDialog) {}

  trackById(_: number, row: SubSectionRow) { return row.id; }

  // toolbar
  addSubSectionClick() {
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

  // computed (display-only)
  get totalArea(): number {
    const o = Number(this.areaForm.value.occupiedAreaSqFt ?? 0);
    const s = Number(this.areaForm.value.serviceAreaSqFt ?? 0);
    return o + s;
  }

  // search
  onSearch(v: string) { this.searchText = v; }
  applySearch() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) { this.filteredSubSections = [...this.subSections]; return; }
    this.filteredSubSections = this.subSections.filter(r =>
      r.subSectionName.toLowerCase().includes(q) ||
      r.sectionName.toLowerCase().includes(q) ||
      r.spaceType.toLowerCase().includes(q) ||
      String(r.occupiedAreaSqFt).includes(q) ||
      String(r.serviceAreaSqFt).includes(q)
    );
  }

  getSectionName(id: number | null): string {
    const s = this.sections.find(x => x.id === id);
    return s ? `${s.sectionName} — ${s.unitName}` : '';
  }

  // submit (create or update)
  submit() {
    if (this.infoForm.invalid || this.areaForm.invalid || this.opsForm.invalid || this.assignForm.invalid) {
      this.infoForm.markAllAsTouched();
      this.areaForm.markAllAsTouched();
      this.opsForm.markAllAsTouched();
      this.assignForm.markAllAsTouched();
      return;
    }

    const sectionId = this.assignForm.value.sectionId as number;
    const section = this.sections.find(x => x.id === sectionId);

    const status = this.opsForm.value.status as SubSectionRow['status'];
    const statusClass =
      status === 'Active' ? 'bg-success/10 text-success'
      : status === 'Maintenance' ? 'bg-warning/10 text-warning'
      : 'bg-danger/10 text-danger';

    const rowCore = {
      subSectionName: this.infoForm.value.subSectionName!,
      sectionId,
      sectionName: section?.sectionName ?? '',
      spaceType: this.infoForm.value.spaceType!,
      occupiedAreaSqFt: this.areaForm.value.occupiedAreaSqFt ?? 0,
      serviceAreaSqFt: this.areaForm.value.serviceAreaSqFt ?? 0,
      status,
      statusClass,
    };

    const details: SubSectionDetails = {
      info: { ...this.infoForm.value },
      area: { ...this.areaForm.value, totalAreaSqFt: this.totalArea },
      operations: { ...this.opsForm.value },
      assignment: { ...this.assignForm.value, sectionName: section?.sectionName, unitName: section?.unitName },
    };

    if (this.isEditing && this.editingId != null) {
      this.subSections = this.subSections.map(r => r.id === this.editingId ? { ...r, ...rowCore, details } : r);
      this.filteredSubSections = [...this.subSections];
      this.snack.open(`Sub‑Section #${this.editingId} updated`, 'OK', { duration: 2000 });
    } else {
      const nextId = (this.subSections.at(-1)?.id ?? 0) + 1;
      const newRow: SubSectionRow = { id: nextId, ...rowCore, details };
      this.subSections = [...this.subSections, newRow];
      this.filteredSubSections = [...this.subSections];
      this.snack.open('Sub‑Section saved', 'OK', { duration: 2000 });
    }

    this.showForm = false;
    this.isEditing = false;
    this.editingId = null;
  }

  // actions
  editSubSection(r: SubSectionRow) {
    this.isEditing = true;
    this.editingId = r.id;
    this.showForm = true;

    this.infoForm.patchValue({
      subSectionName: r.subSectionName,
      spaceType: r.spaceType,
      subSectionCode: r.details?.info?.subSectionCode ?? '',
      description: r.details?.info?.description ?? '',
    });

    this.areaForm.patchValue({
      occupiedAreaSqFt: r.occupiedAreaSqFt,
      serviceAreaSqFt: r.serviceAreaSqFt,
    });

    this.opsForm.patchValue({
      status: r.status,
      occupancyStatus: r.details?.operations?.occupancyStatus ?? 'vacant',
      assigneeType: r.details?.operations?.assigneeType ?? 'none',
      personName: r.details?.operations?.personName ?? '',
      tenantName: r.details?.operations?.tenantName ?? '',
      contactNumber: r.details?.operations?.contactNumber ?? '',
      notes: r.details?.operations?.notes ?? '',
    });

    this.assignForm.patchValue({
      sectionId: r.sectionId,
      subMeterId: r.details?.assignment?.subMeterId ?? '',
    });

    queueMicrotask(() => this.stepper?.reset());
  }

  openView(row: SubSectionRow) {
    this.dialog.open(SubSectionViewDialogComponent, {
      width: '860px',
      data: row,
    });
  }

  deleteSubSection(id: number) {
    this.subSections = this.subSections.filter(x => x.id !== id);
    this.filteredSubSections = [...this.subSections];
    this.snack.open('Sub‑Section removed', 'OK', { duration: 1500 });
  }

  // helpers
  private resetForms() {
    this.infoForm.reset({ spaceType: '' } as any);
    this.areaForm.reset({ occupiedAreaSqFt: 0, serviceAreaSqFt: 0 } as any);
    this.opsForm.reset({ status: 'Active', occupancyStatus: 'vacant', assigneeType: 'none' } as any);
    this.assignForm.reset({ sectionId: null } as any);
  }
}

/** Dialog component for viewing a sub‑section */
@Component({
  selector: 'app-sub-section-view-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatDividerModule],
  templateUrl: './sub-section-view-dialog.component.html',
})
export class SubSectionViewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SubSectionViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubSectionRow
  ) {}
}

/** Models (minimal) */
interface SectionRow {
  id: number;
  sectionName: string;
  unitName: string;
  floorNumber: number;
  usageType: string;
  areaSqFt: number;
  status: 'Active' | 'Inactive' | 'Maintenance';
}

interface SubSectionDetails {
  info: any;
  area: any;        // includes totalAreaSqFt
  operations: any;  // includes assigneeType/personName/tenantName
  assignment: any;  // includes sectionName/unitName
}

interface SubSectionRow {
  id: number;
  subSectionName: string;
  sectionId: number;
  sectionName: string;
  spaceType: 'office' | 'shop' | 'storage' | 'room' | 'production' | 'other' | string;
  occupiedAreaSqFt: number;
  serviceAreaSqFt: number;
  status: 'Active' | 'Inactive' | 'Maintenance';
  statusClass: string;
  details?: SubSectionDetails;
}
