import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facility-management/facility-management.service';
import { BuildingService } from '../building-management/building-management.service';
import { FloorService } from '../floor-management/floor-management.service';
import { SectionService } from '../section-management/section-management.service';
import { OfficeService } from '../office-management/office-management.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { YxSelectComponent } from '../../../shared/yx-select/yx-select.component';

@Component({
  selector: 'app-tenant-office-assignment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    RouterLink,
    MaterialModuleModule,
    YxSelectComponent
  ],
  templateUrl: './tenant-office-assignment.component.html',
  styleUrl: './tenant-office-assignment.component.scss'
})
export class TenantOfficeAssignmentComponent implements OnInit {

  /* ================= DROPDOWN DATA ================= */
  facilities: any[] = [];
  buildings: any[] = [];
  floors: any[] = [];
  sections: any[] = [];

  /* ================= OFFICE DATA ================= */
  offices: any[] = [];
  filteredOffices: any[] = [];

  /* ================= SELECTION ================= */
  selectedFacilityId = '';
  selectedBuildingId = '';
  selectedFloorId = '';
  selectedSectionId = '';

  /* ================= UI STATE ================= */
  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  constructor(
    private facilityService: FacilityService,
    private buildingService: BuildingService,
    private floorService: FloorService,
    private sectionService: SectionService,
    private officeService: OfficeService
  ) {}

  /* ================= INIT ================= */

  ngOnInit() {
    this.loadFacilities();
  }

  /* ================= LOAD ================= */

  loadFacilities() {
    this.facilityService.getFacilities().subscribe(res => {
      this.facilities = res.data || [];
    });
  }

  onFacilityChange() {
    this.resetBelow('facility');

    if (!this.selectedFacilityId) return;

    this.buildingService
      .getBuildingByFacilityId(this.selectedFacilityId)
      .subscribe(res => {
        this.buildings = res.data || [];
      });
  }

  onBuildingChange() {
    this.resetBelow('building');

    if (!this.selectedBuildingId) return;

    this.floorService
      .getFloorByBuildingId(this.selectedBuildingId)
      .subscribe(res => {
        this.floors = res.data || [];
      });
  }

  onFloorChange() {
    this.resetBelow('floor');

    if (!this.selectedFloorId) return;

    this.sectionService
      .getSectionByFloorId(this.selectedFloorId)
      .subscribe(res => {
        this.sections = res.data || [];
      });
  }

  onSectionChange() {
    if (!this.selectedSectionId) return;

    this.isLoading = true;

    this.officeService
      .GetAvailableOfficesBySectionId(this.selectedSectionId)
      .subscribe(res => {
        this.offices = res.data || [];
        this.filteredOffices = [...this.offices];
        this.pageIndex = 0;
        this.isLoading = false;
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

  /* ================= ACTION ================= */

  assignTenant(office: any) {
    console.log('Assign tenant to office', office);
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
    this.pageIndex = 0;
  }

}
