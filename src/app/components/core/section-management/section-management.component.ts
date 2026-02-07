import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MaterialModuleModule } from '../../../material-module/material-module.module';

import { SectionResponseDTO } from './section-management.type';
import { SectionService } from './section-management.service';

import { UserService } from '../../../shared/services/user/user.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { SectionManagementAddUpdateComponent } from './section-management-add-update/section-management-add-update.component';

@Component({
  selector: 'app-section-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModuleModule],
  templateUrl: './section-management.component.html',
  styleUrl: './section-management.component.scss'
})
export class SectionManagementComponent implements OnInit {

  fkFloor!: string;
  fkBuilding!: string;
fkFacility!: string;
fkBusiness!: string; 

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  currentUser: any;

  Sections: SectionResponseDTO[] = [];
  filteredSections: SectionResponseDTO[] = [];

  constructor(
    private _sectionService: SectionService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService,
    private router: Router
  ) {}

  /* ================= INIT ================= */
  async ngOnInit(): Promise<void> {

    const nav = history.state;
    console.log('breadcrumb 4', nav)
   this.fkFloor = nav.fkFloor || nav.fkFloor;
  this.fkBuilding = nav.fkBuilding;
  this.fkFacility = nav.fkFacility;
  this.fkBusiness = nav.fkBusiness;

    this.currentUser = await this._userService.user$;

    this.loadSections(this.fkFloor);
  }

  /* ================= LOAD ================= */
  loadSections(fkFloor: string) {

    this.isLoading = true;

    this._sectionService.getSectionByFloorId(fkFloor).subscribe({

      next: (res) => {

        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load Sections');
          this.isLoading = false;
          return;
        }

        this.Sections = res.data ?? [];
        this.filteredSections = [...this.Sections];
        this.pageIndex = 0;
        this.isLoading = false;
      },

      error: () => {
        this.Sections = [];
        this.filteredSections = [];
        this.isLoading = false;
        this._toaster.error('Failed to load Sections');
      }

    });
  }

  /* ================= PAGINATION ================= */

  get pagedSections(): SectionResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredSections.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredSections.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredSections.length
    );
  }

  /* ================= SEARCH ================= */

  searchSections() {

    const term = this.searchText.toLowerCase().trim();

    this.filteredSections = !term
      ? [...this.Sections]
      : this.Sections.filter(s =>
          s.sectionName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= ADD ================= */

  addSection() {

    const dialogRef = this.dialog.open(SectionManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'add',
        floorId: this.fkFloor
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadSections(this.fkFloor);
      }
    });
  }

  /* ================= EDIT ================= */

  edit(st: SectionResponseDTO) {

    const dialogRef = this.dialog.open(SectionManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'edit',
        value: st
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadSections(this.fkFloor);
      }
    });
  }

  /* ================= DELETE ================= */

  delete(id: string) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete Section',
        message: 'Deleting this section is permanent.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {

      if (!confirmed) return;

      this._sectionService.deleteSection(id).subscribe({

        next: (res) => {

          if (res.success) {
            this._toaster.success('Section deleted');
            this.loadSections(this.fkFloor);
          }
          else {
            this._toaster.error(res.remarks || 'Delete failed');
          }

        },

        error: () => {
          this._toaster.error('Delete failed');
        }

      });

    });
  }

  /* ================= PAGINATION CONTROLS ================= */

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredSections.length) {
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

  goToOffice(id: string) {
  this.router.navigate(
    ['/core/office-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: id
      }
    }
  );
}
  goToFloor(id: string) {
  this.router.navigate(
    ['/core/floor-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding
      }
    }
  )
}
goToBuilding(id: string) {
  this.router.navigate(
    ['/core/building-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility
      }
    }
  );
}

  goToFacility(id: string){
  this.router.navigate(
    ['/core/facility-management'],
    {
      state: {
        fkBusiness: this.fkBusiness
      }
    }
  )
}

}

