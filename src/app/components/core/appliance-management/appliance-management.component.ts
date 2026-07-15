import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { YxSelectComponent } from '../../../shared/yx-select/yx-select.component';
import { ApplianceManagementAddUpdateComponent } from './appliance-management-add-update/appliance-management-add-update.component';
import { ApplianceManagementService } from './appliance-management.service';
import { ApplianceResponseDTO, SensorApplianceResponseDTO } from './appliance-management.type';

type ApplianceSearchField = 'applianceName' | 'companyName' | 'modelNumber' | 'description';


import { readHierarchyContext, saveHierarchyContext } from '../../../shared/utils/hierarchy-context';


@Component({
  selector: 'app-appliance-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModuleModule, YxSelectComponent],
  templateUrl: './appliance-management.component.html',
  styleUrl: './appliance-management.component.scss'
})
export class ApplianceManagementComponent implements OnInit {

  fkFloor!: string;
  fkBuilding!: string;
  fkFacility!: string;
  fkBusiness!: string;
  fkSection!: string;
  fkOffice!: string;
  fkDevice!: string;
  fkSensor!: string;
  fkUtility!: string;

  sensorName = '';
  utilityName = '';
  searchText = '';
  selectedSearchField: ApplianceSearchField = 'applianceName';
  pageIndex = 0;
  pageSize = 5;

  isLoading = false;
  isAssignmentLoading = false;
  isAssigning = false;

  Appliances: ApplianceResponseDTO[] = [];
  filteredAppliances: ApplianceResponseDTO[] = [];
  currentAssignment: SensorApplianceResponseDTO | null = null;
  assignedApplianceId = '';
  selectedApplianceId = '';
  selectedApplianceDetails: ApplianceResponseDTO | null = null;
  pageError = '';

  searchFields: { label: string; value: ApplianceSearchField }[] = [
    { label: 'Appliance Name', value: 'applianceName' },
    { label: 'Company Name', value: 'companyName' },
    { label: 'Model Number', value: 'modelNumber' },
    { label: 'Description', value: 'description' }
  ];

  constructor(
    private applianceService: ApplianceManagementService,
    private toaster: ToastrService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const nav = readHierarchyContext();

    this.fkFloor = nav.fkFloor;
    this.fkBuilding = nav.fkBuilding;
    this.fkFacility = nav.fkFacility;
    this.fkBusiness = nav.fkBusiness;
    this.fkSection = nav.fkSection;
    this.fkOffice = nav.fkOffice;
    this.fkDevice = nav.fkDevice;
    this.fkSensor = nav.fkSensor || nav.sensorId;
    this.fkUtility = nav.fkUtility || nav.fkutility;
    this.sensorName = nav.sensorName || 'Selected Sensor';
    this.utilityName = nav.utilityName || '';

    saveHierarchyContext({
      fkBusiness: this.fkBusiness,
      fkFacility: this.fkFacility,
      fkBuilding: this.fkBuilding,
      fkFloor: this.fkFloor,
      fkSection: this.fkSection,
      fkOffice: this.fkOffice,
      fkDevice: this.fkDevice,
      fkSensor: this.fkSensor,
      fkUtility: this.fkUtility,
      sensorName: this.sensorName,
      utilityName: this.utilityName,
    });

    if (!this.fkSensor) {
      this.pageError = 'Sensor information was not provided. Please open appliance management from Sensor Management.';
      return;
    }

    this.loadAppliances();
    this.loadCurrentAssignment();
  }

  get pagedAppliances(): ApplianceResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredAppliances.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredAppliances.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredAppliances.length
    );
  }

  get canAssignAppliance(): boolean {
    return !!this.selectedApplianceId && this.selectedApplianceId !== this.assignedApplianceId;
  }

  loadAppliances(selectId?: string) {
    this.isLoading = true;

    this.applianceService.getAssignableAppliancesBySensorId(this.fkSensor).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.Appliances = [];
          this.filteredAppliances = [];
          this.toaster.error(res.remarks || 'Failed to load business appliances');
          this.isLoading = false;
          return;
        }

        const context = res.data;
        this.fkBusiness = context?.fkBusiness || this.fkBusiness;
        this.fkUtility = context?.fkUtility || this.fkUtility;
        this.sensorName = context?.sensorName || this.sensorName;
        this.utilityName = context?.utilityName || this.utilityName;
        this.Appliances = context?.appliances ?? [];

        if (selectId) {
          this.selectedApplianceId = selectId;
        }

        this.applySearch();
        this.isLoading = false;
      },
      error: () => {
        this.Appliances = [];
        this.filteredAppliances = [];
        this.isLoading = false;
        this.toaster.error('Failed to load business appliances');
      }
    });
  }

  loadCurrentAssignment() {
    this.isAssignmentLoading = true;

    this.applianceService.getSensorApplianceBySensorId(this.fkSensor).subscribe({
      next: (res) => {
        this.currentAssignment = res.success === false ? null : (res.data ?? null);
        this.assignedApplianceId = this.currentAssignment?.fkAppliance || '';

        if (this.assignedApplianceId) {
          this.selectedApplianceId = this.assignedApplianceId;
        }

        this.applySearch();
        this.isAssignmentLoading = false;
      },
      error: () => {
        this.currentAssignment = null;
        this.assignedApplianceId = '';
        this.applySearch();
        this.isAssignmentLoading = false;
      }
    });
  }

  searchAppliances() {
    this.applySearch();
  }

  applySearch() {
    const term = this.searchText.toLowerCase().trim();

    const searchedAppliances = !term
      ? [...this.Appliances]
      : this.Appliances.filter(appliance =>
          String(appliance[this.selectedSearchField] ?? '').toLowerCase().includes(term)
        );

    this.filteredAppliances = this.sortAssignedFirst(searchedAppliances);
    this.pageIndex = 0;
  }

  toggleApplianceSelection(appliance: ApplianceResponseDTO) {
    this.selectedApplianceId = this.selectedApplianceId === appliance.applianceId
      ? ''
      : appliance.applianceId;
  }

  isApplianceSelected(id: string): boolean {
    return this.selectedApplianceId === id;
  }

  isAssignedAppliance(id: string): boolean {
    return this.assignedApplianceId === id;
  }

  assignSelectedAppliance() {
    if (!this.selectedApplianceId) {
      this.toaster.error('Please select an appliance first');
      return;
    }

    if (this.selectedApplianceId === this.assignedApplianceId) {
      this.toaster.info('This appliance is already assigned to the sensor');
      return;
    }

    this.isAssigning = true;

    this.applianceService.assignApplianceToSensor({
      fkSensor: this.fkSensor,
      fkAppliance: this.selectedApplianceId,
      remarks: 'Assigned from Appliance Management',
      isActive: true
    }).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.toaster.error(res.remarks || 'Failed to assign appliance');
          this.isAssigning = false;
          return;
        }

        this.currentAssignment = res.data ?? this.currentAssignment;
        this.assignedApplianceId = this.currentAssignment?.fkAppliance || this.selectedApplianceId;
        this.toaster.success('Appliance assigned to sensor');
        this.applySearch();
        this.isAssigning = false;
      },
      error: () => {
        this.isAssigning = false;
        this.toaster.error('Failed to assign appliance');
      }
    });
  }

  addAppliance() {
    const dialogRef = this.dialog.open(ApplianceManagementAddUpdateComponent, {
      width: '720px',
      maxWidth: '95vw',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'add',
        fkUtility: this.fkUtility,
        utilityName: this.utilityName,
        fkBusiness: this.fkBusiness
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.status === 'saved' || result === 'saved') {
        this.loadAppliances(result?.id);
      }
    });
  }

  edit(appliance: ApplianceResponseDTO) {
    const dialogRef = this.dialog.open(ApplianceManagementAddUpdateComponent, {
      width: '720px',
      maxWidth: '95vw',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'edit',
        value: appliance,
        fkUtility: this.fkUtility,
        utilityName: this.utilityName,
        fkBusiness: this.fkBusiness
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.status === 'saved' || result === 'saved') {
        this.loadAppliances();
      }
    });
  }

  openApplianceDetails(appliance: ApplianceResponseDTO) {
    this.selectedApplianceDetails = appliance;
  }

  closeApplianceDetails() {
    this.selectedApplianceDetails = null;
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredAppliances.length) {
      this.pageIndex++;
    }
  }

  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
    }
  }

  goToPage(i: number) {
    this.pageIndex = i;
  }

  goToFacility() {
    this.router.navigate(['/core/facility-management'], {
      state: { fkBusiness: this.fkBusiness }
    });
  }

  goToBuilding() {
    this.router.navigate(['/core/building-management'], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility
      }
    });
  }

  goToFloor() {
    this.router.navigate(['/core/floor-management'], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding
      }
    });
  }

  goToSection() {
    this.router.navigate(['/core/section-management'], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor
      }
    });
  }

  goToOffice() {
    this.router.navigate(['/core/office-management'], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection
      }
    });
  }

  goToDevice() {
    this.router.navigate(['/core/device-management'], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: this.fkOffice
      }
    });
  }

  goToSensor() {
    this.router.navigate(['/core/sensor-management'], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: this.fkOffice,
        fkDevice: this.fkDevice
      }
    });
  }

  private sortAssignedFirst(appliances: ApplianceResponseDTO[]): ApplianceResponseDTO[] {
    if (!this.assignedApplianceId) return [...appliances];

    return [...appliances].sort((a, b) => {
      if (a.applianceId === this.assignedApplianceId) return -1;
      if (b.applianceId === this.assignedApplianceId) return 1;
      return 0;
    });
  }
}
