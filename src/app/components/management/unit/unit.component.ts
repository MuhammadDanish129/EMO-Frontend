import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-unit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
  ],
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent {
  // view state
  showForm = false;
  isLinear = true;
  isEditing = false;
  editingId: number | null = null;
  searchText: string = '';

  @ViewChild('stepper') stepper?: MatStepper;

  // FACILITIES (select list)
  facilities: FacilityRow[] = [
    { id: 1, businessName: 'Alpha Traders', ownerName: 'Awais Khan', startDate: '2019-04-12', employees: 18, city: 'Karachi', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 2, businessName: 'Beta Solutions', ownerName: 'Sara Ahmed', startDate: '2020-08-20', employees: 12, city: 'Lahore', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 3, businessName: 'Gamma Logistics', ownerName: 'Imran Malik', startDate: '2021-01-15', employees: 25, city: 'Islamabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 4, businessName: 'Delta Foods', ownerName: 'Kiran Shah', startDate: '2018-09-05', employees: 40, city: 'Faisalabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 5, businessName: 'Epsilon Tech', ownerName: 'Zeeshan Ali', startDate: '2022-03-30', employees: 8, city: 'Multan', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
  ];

  // UNITS TABLE DATA
  units: UnitRow[] = [
    { id: 1, unitName: 'North Wing', facilityId: 1, facilityName: 'Alpha Traders', floorCount: 5, buildingNumber: 'B-101', status: 'Active', statusClass: 'bg-success/10 text-success', city: 'Karachi', details: undefined },
    { id: 2, unitName: 'Tech Tower', facilityId: 2, facilityName: 'Beta Solutions', floorCount: 8, buildingNumber: 'TT-07', status: 'Inactive', statusClass: 'bg-danger/10 text-danger', city: 'Lahore', details: undefined },
    { id: 3, unitName: 'Warehouse Block A', facilityId: 3, facilityName: 'Gamma Logistics', floorCount: 2, buildingNumber: 'WHA-3', status: 'Active', statusClass: 'bg-success/10 text-success', city: 'Islamabad', details: undefined },
    { id: 4, unitName: 'Production Hall', facilityId: 4, facilityName: 'Delta Foods', floorCount: 1, buildingNumber: 'PH-02', status: 'Active', statusClass: 'bg-success/10 text-success', city: 'Faisalabad', details: undefined },
    { id: 5, unitName: 'Innovation Lab', facilityId: 5, facilityName: 'Epsilon Tech', floorCount: 3, buildingNumber: 'IL-01', status: 'Inactive', statusClass: 'bg-danger/10 text-danger', city: 'Multan', details: undefined },
  ];

  // FORMS
  unitInfoForm: FormGroup = this.fb.group({
    unitName: ['', [Validators.required, Validators.minLength(2)]],
    unitType: ['', Validators.required],
    description: [''],
  });

  structureForm: FormGroup = this.fb.group({
    buildingNumber: [''],
    floorCount: [0, [Validators.required, Validators.min(0)]],
    sectionCount: [0, [Validators.required, Validators.min(0)]],
    totalAreaSqFt: [null, [Validators.min(0)]],
    yearBuilt: [null, [Validators.min(1800)]],
  });

  locationForm: FormGroup = this.fb.group({
    addressLine1: ['', Validators.required],
    addressLine2: [''],
    city: ['', Validators.required],
    state: [''],
    postalCode: [''],
    country: ['Pakistan', Validators.required],
  });

  opsForm: FormGroup = this.fb.group({
    status: ['Active', Validators.required], // 'Active' | 'Maintenance' | 'Inactive'
    occupancyStatus: ['vacant', Validators.required],
    managerName: [''],
    contactNumber: ['', [Validators.pattern(/^[0-9+\-\s()]{7,20}$/)]],
    hasParking: [false],
    fireSafetyCertificateNumber: [''],
    notes: [''],
  });

  facilityForm: FormGroup = this.fb.group({
    facilityId: [null, Validators.required],
    energyMeterId: [''],
  });

  constructor(private fb: FormBuilder, private snack: MatSnackBar, private dialog: MatDialog) {}

  trackById(_: number, row: UnitRow) { return row.id; }

  getFacilityName(id: number | null): string {
    const f = this.facilities.find(x => x.id === id);
    return f ? f.businessName : '';
  }

  // toolbar
  addUnitClick() {
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

  // submit (create or update)
  submit() {
    if (this.unitInfoForm.invalid || this.structureForm.invalid || this.locationForm.invalid || this.opsForm.invalid || this.facilityForm.invalid) {
      this.unitInfoForm.markAllAsTouched();
      this.structureForm.markAllAsTouched();
      this.locationForm.markAllAsTouched();
      this.opsForm.markAllAsTouched();
      this.facilityForm.markAllAsTouched();
      return;
    }

    const facilityId = this.facilityForm.value.facilityId as number;
    const facilityName = this.getFacilityName(facilityId);

    const status = this.opsForm.value.status as UnitRow['status'];
    const statusClass =
      status === 'Active' ? 'bg-success/10 text-success'
      : status === 'Maintenance' ? 'bg-warning/10 text-warning'
      : 'bg-danger/10 text-danger';

    const rowCore = {
      unitName: this.unitInfoForm.value.unitName!,
      facilityId,
      facilityName,
      floorCount: this.structureForm.value.floorCount ?? 0,
      buildingNumber: this.structureForm.value.buildingNumber || '',
      status,
      statusClass,
      city: this.locationForm.value.city || '',
    };

    // snapshot details for modal
    const details: UnitDetails = {
      unitInfo: { ...this.unitInfoForm.value },
      structure: { ...this.structureForm.value },
      location: { ...this.locationForm.value },
      operations: { ...this.opsForm.value },
      facility: { ...this.facilityForm.value, facilityName },
    };

    if (this.isEditing && this.editingId != null) {
      this.units = this.units.map(u => u.id === this.editingId ? { ...u, ...rowCore, details } : u);
      this.snack.open(`Unit #${this.editingId} updated`, 'OK', { duration: 2000 });
    } else {
      const nextId = (this.units.at(-1)?.id ?? 0) + 1;
      const newRow: UnitRow = { id: nextId, ...rowCore, details };
      this.units = [...this.units, newRow];
      this.snack.open('Unit saved', 'OK', { duration: 2000 });
    }

    this.showForm = false;
    this.isEditing = false;
    this.editingId = null;
  }
 searchUnits() {
      if (this.searchText) {
        this.facilities = this.facilities.filter(f =>
          f.businessName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.ownerName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        // Reload original data
        // this.loadFacilities();
      }
    }
  // actions
  editUnit(u: UnitRow) {
    this.isEditing = true;
    this.editingId = u.id;
    this.showForm = true;

    // Patch forms from row + details
    this.unitInfoForm.patchValue({
      unitName: u.unitName,
      unitType: u.details?.unitInfo?.unitType ?? '',
      description: u.details?.unitInfo?.description ?? '',
    });

    this.structureForm.patchValue({
      buildingNumber: u.buildingNumber,
      floorCount: u.floorCount,
      sectionCount: u.details?.structure?.sectionCount ?? 0,
      totalAreaSqFt: u.details?.structure?.totalAreaSqFt ?? null,
      yearBuilt: u.details?.structure?.yearBuilt ?? null,
    });

    this.locationForm.patchValue({
      addressLine1: u.details?.location?.addressLine1 ?? '',
      addressLine2: u.details?.location?.addressLine2 ?? '',
      city: u.city,
      state: u.details?.location?.state ?? '',
      postalCode: u.details?.location?.postalCode ?? '',
      country: u.details?.location?.country ?? 'Pakistan',
    });

    this.opsForm.patchValue({
      status: u.status,
      occupancyStatus: u.details?.operations?.occupancyStatus ?? 'vacant',
      managerName: u.details?.operations?.managerName ?? '',
      contactNumber: u.details?.operations?.contactNumber ?? '',
      hasParking: u.details?.operations?.hasParking ?? false,
      fireSafetyCertificateNumber: u.details?.operations?.fireSafetyCertificateNumber ?? '',
      notes: u.details?.operations?.notes ?? '',
    });

    this.facilityForm.patchValue({
      facilityId: u.facilityId,
      energyMeterId: u.details?.facility?.energyMeterId ?? '',
    });

    queueMicrotask(() => this.stepper?.reset());
  }

  openView(row: UnitRow) {
    this.dialog.open(UnitViewDialogComponent, {
      width: '820px',
      data: row,
    });
  }

  deleteUnit(id: number) {
    this.units = this.units.filter(x => x.id !== id);
    this.snack.open('Unit removed', 'OK', { duration: 1500 });
  }

  // helpers
  private resetForms() {
    this.unitInfoForm.reset({ unitType: '' } as any);
    this.structureForm.reset({ floorCount: 0, sectionCount: 0 } as any);
    this.locationForm.reset({ country: 'Pakistan' } as any);
    this.opsForm.reset({ status: 'Active', occupancyStatus: 'vacant', hasParking: false } as any);
    this.facilityForm.reset({ facilityId: null } as any);
  }
}

/** Dialog component for viewing a unit */
@Component({
  selector: 'app-unit-view-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatDividerModule],
  templateUrl: './unit-view-dialog.component.html',
})
export class UnitViewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UnitViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UnitRow
  ) {}
}

/** Models */
interface FacilityRow {
  id: number;
  businessName: string;
  ownerName: string;
  startDate: string;
  employees: number;
  city: string;
  status: 'Active' | 'Inactive';
  statusClass: string;
}
interface UnitDetails {
  unitInfo: any;
  structure: any;
  location: any;
  operations: any;
  facility: any;
}
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
  details?: UnitDetails;
}
