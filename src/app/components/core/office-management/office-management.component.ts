import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MaterialModuleModule } from '../../../material-module/material-module.module';

import { OfficeResponseDTO } from './office-management.type';
import { OfficeService } from './office-management.service';

import { UserService } from '../../../shared/services/user/user.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { OfficeManagementAddUpdateComponent } from './office-management-add-update/office-management-add-update.component';

@Component({
  selector: 'app-office-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MaterialModuleModule],
  templateUrl: './office-management.component.html',
  styleUrl: './office-management.component.scss'
})
export class OfficeManagementComponent implements OnInit {

  fkSection!: string;
   fkFloor!: string;
  fkBuilding!: string;
fkFacility!: string;
fkBusiness!: string; 

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  currentUser: any;

  Offices: OfficeResponseDTO[] = [];
  filteredOffices: OfficeResponseDTO[] = [];

  constructor(
    private _officeService: OfficeService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService,
    private router: Router
  ) {}

  /* ================= INIT ================= */
  async ngOnInit(): Promise<void> {

    const nav = history.state;
    this.fkSection = nav.fkSection;
  this.fkFloor = nav.fkFloor;
  this.fkBuilding = nav.fkBuilding;
  this.fkFacility = nav.fkFacility;
  this.fkBusiness = nav.fkBusiness;

    this.currentUser = await this._userService.user$;

    this.loadOffices(this.fkSection);
  }

  /* ================= LOAD ================= */
  loadOffices(fkSection: string) {

    this.isLoading = true;

    this._officeService.getOfficeBySectionId(fkSection).subscribe({

      next: (res) => {

        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load Offices');
          this.isLoading = false;
          return;
        }

        this.Offices = res.data ?? [];
        this.filteredOffices = [...this.Offices];
        this.pageIndex = 0;
        this.isLoading = false;
      },

      error: () => {
        this.Offices = [];
        this.filteredOffices = [];
        this.isLoading = false;
        this._toaster.error('Failed to load Offices');
      }

    });
  }

  /* ================= PAGINATION ================= */

  get pagedOffices(): OfficeResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredOffices.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredOffices.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredOffices.length
    );
  }

  /* ================= SEARCH ================= */

  searchOffices() {

    const term = this.searchText.toLowerCase().trim();

    this.filteredOffices = !term
      ? [...this.Offices]
      : this.Offices.filter(o =>
          o.officeName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= ADD ================= */

  addOffice() {

    const dialogRef = this.dialog.open(OfficeManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'add',
        sectionId: this.fkSection
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadOffices(this.fkSection);
      }
    });
  }

  /* ================= EDIT ================= */

  edit(st: OfficeResponseDTO) {

    const dialogRef = this.dialog.open(OfficeManagementAddUpdateComponent, {
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
        this.loadOffices(this.fkSection);
      }
    });
  }

  /* ================= DELETE ================= */

  delete(id: string) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete Office',
        message: 'Deleting this office is permanent.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {

      if (!confirmed) return;

      this._officeService.deleteOffice(id).subscribe({

        next: (res) => {

          if (res.success) {
            this._toaster.success('Office deleted');
            this.loadOffices(this.fkSection);
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
    if ((this.pageIndex + 1) * this.pageSize < this.filteredOffices.length) {
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


  goToSection() {
  this.router.navigate(
    ['/core/section-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor
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
goToBuilding() {
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


goToFacility() {
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
