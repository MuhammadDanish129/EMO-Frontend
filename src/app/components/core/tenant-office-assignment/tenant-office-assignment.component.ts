import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facility-management/facility-management.service';
import { BuildingService } from '../building-management/building-management.service';
import { FloorService } from '../floor-management/floor-management.service';
import { SectionService } from '../section-management/section-management.service';
import { OfficeService } from '../office-management/office-management.service';

import { UserService } from '../../../shared/services/user/user.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink } from '@angular/router';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { YxSelectComponent } from '../../../shared/yx-select/yx-select.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tenant-office-assignment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    
    MaterialModuleModule,
    YxSelectComponent
  ],
  templateUrl: './tenant-office-assignment.component.html',
  styleUrl: './tenant-office-assignment.component.scss'
})
export class TenantOfficeAssignmentComponent implements OnInit {

  /* ================= STATE ================= */
  currentUser: any;

  facilities: any[] = [];
  buildings: any[] = [];
  floors: any[] = [];
  sections: any[] = [];

  offices: any[] = [];
  filteredOffices: any[] = [];

  selectedOfficeIds: string[] = [];

  selectedFacilityId = '';
  selectedBuildingId = '';
  selectedFloorId = '';
  selectedSectionId = '';

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  selectionEnabled = true;

  constructor(
    private facilityService: FacilityService,
    private buildingService: BuildingService,
    private floorService: FloorService,
    private sectionService: SectionService,
    private officeService: OfficeService,
    private router: Router,
    private userService: UserService,
    private toaster: ToastrService
  ) {}

  /* ================= INIT ================= */
  async ngOnInit(): Promise<void> {

    this.currentUser = await this.userService.user$;

    this.loadFacilities();

  }

  /* ================= LOAD ================= */

  loadFacilities() {

    this.isLoading = true;

    this.facilityService.getFacilities().subscribe({

      next: (res) => {

        if (res.success === false) {
          this.toaster.error(res.remarks || 'Failed to load facilities');
          this.isLoading = false;
          return;
        }

        this.facilities = res.data ?? [];
        this.isLoading = false;

      },

      error: () => {

        this.facilities = [];
        this.isLoading = false;
        this.toaster.error('Failed to load facilities');

      }

    });

  }

  /* ================= HIERARCHY ================= */

  onFacilityChange() {

    this.resetBelow('facility');

    if (!this.selectedFacilityId) return;

    this.buildingService
      .getBuildingByFacilityId(this.selectedFacilityId)
      .subscribe(res => this.buildings = res.data || []);

  }

  onBuildingChange() {

    this.resetBelow('building');

    if (!this.selectedBuildingId) return;

    this.floorService
      .getFloorByBuildingId(this.selectedBuildingId)
      .subscribe(res => this.floors = res.data || []);

  }

  onFloorChange() {

    this.resetBelow('floor');

    if (!this.selectedFloorId) return;

    this.sectionService
      .getSectionByFloorId(this.selectedFloorId)
      .subscribe(res => this.sections = res.data || []);

  }

  onSectionChange() {

    if (!this.selectedSectionId) return;

    this.isLoading = true;

    this.officeService
      .GetAvailableOfficesBySectionId(this.selectedSectionId)
      .subscribe({

        next: (res) => {

          if (res.success === false) {
            this.toaster.error(res.remarks || 'Failed to load offices');
            this.isLoading = false;
            return;
          }

          this.offices = res.data ?? [];
          this.filteredOffices = [...this.offices];
          this.pageIndex = 0;
          this.selectedOfficeIds = [];
          this.isLoading = false;

        },

        error: () => {

          this.offices = [];
          this.filteredOffices = [];
          this.isLoading = false;
          this.toaster.error('Failed to load offices');

        }

      });

  }

  /* ================= SEARCH ================= */

  searchOffices() {

    const term = this.searchText.toLowerCase().trim();

    this.filteredOffices = !term
      ? [...this.offices]
      : this.offices.filter(o =>
          o.officeName?.toLowerCase().includes(term)
        );

    this.pageIndex = 0;

  }

  /* ================= PAGINATION ================= */

  get pagedOffices() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredOffices.slice(start, start + this.pageSize);
  }

  get pages() {
    return Array.from(
      { length: Math.ceil(this.filteredOffices.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd() {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredOffices.length
    );
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredOffices.length) {
      this.pageIndex++;
    }
  }

  prevPage() {
    if (this.pageIndex > 0) this.pageIndex--;
  }

  goToPage(i: number) {
    this.pageIndex = i;
  }

  /* ================= SELECTION ================= */

 
toggleOfficeSelection(office: any) {

  const exists = this.selectedOfficeIds.includes(office.officeId);

  if (exists) {
    this.selectedOfficeIds =
      this.selectedOfficeIds.filter(x => x !== office.officeId);
  } else {
    this.selectedOfficeIds = [...this.selectedOfficeIds, office.officeId];
  }

}

  isOfficeSelected(id: string): boolean {
    return this.selectedOfficeIds.includes(id);
  }

  get canAssignTenant(): boolean {
    return this.selectedOfficeIds.length > 0;
  }

  /* ================= NAVIGATION ================= */

  goToAssignTenant() {

    if (!this.canAssignTenant) return;

    this.router.navigate(
      ['/core/assign-tenant'],
      { state: { officeIds: this.selectedOfficeIds } }
    );

  }
  assignTenantForOffice(office: any) {

  this.selectedOfficeIds = [office.officeId];

  this.router.navigate(
    ['/core/assign-tenant'],
    { state: { officeIds: this.selectedOfficeIds } }
  );

}

  /* ================= HELPERS ================= */

  resetBelow(level: string) {

    if (level === 'facility') {
      this.buildings = [];
      this.floors = [];
      this.sections = [];
      this.clearOffices();
    }

    if (level === 'building') {
      this.floors = [];
      this.sections = [];
      this.clearOffices();
    }

    if (level === 'floor') {
      this.sections = [];
      this.clearOffices();
    }

  }

  

  clearOffices() {

    this.offices = [];
    this.filteredOffices = [];
    this.selectedOfficeIds = [];
    this.pageIndex = 0;

  }

}
