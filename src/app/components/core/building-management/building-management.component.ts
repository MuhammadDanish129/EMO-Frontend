import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { BuildingResponseDTO } from './building-management.type';
import { UserService } from '../../../shared/services/user/user.service';
import { BuildingService } from './building-management.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { BuildingManagementAddUpdateComponent } from './building-management-add-update/building-management-add-update.component';

@Component({
  selector: 'app-building-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MaterialModuleModule],
  templateUrl: './building-management.component.html',
  styleUrl: './building-management.component.scss'
})
export class BuildingManagementComponent implements OnInit {

  fkFacility!: string;
  fkBusiness!: string;


  // ngOnInit() {
  //   const nav = history.state;
  //   this.facilityId = nav.facilityId;

  //   console.log('Facility ID:', this.facilityId);

  // }

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;
  currentUser: any

  Buildings: BuildingResponseDTO[] = [];
  filteredBuildings: BuildingResponseDTO[] = [];

  constructor(
    private _buildingService: BuildingService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService,
    private router: Router
  ) { }

  /* =============================
   * INIT
   * ============================= */
  async ngOnInit(): Promise<void> {
    const nav = history.state;
    console.log('breadcrumb 2', nav)
    this.fkFacility = nav.fkFacility;
     this.fkBusiness = nav.fkBusiness;
    this.currentUser = await this._userService.user$;
    this.loadBuildings(this.fkFacility);
  }

  /* =============================
   * LOAD
   * ============================= */
  loadBuildings(fkFacility: string) {
    this.isLoading = true;
    fkFacility = this.fkFacility;
    this._buildingService.getBuildingByFacilityId(fkFacility).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load Buildings');
          this.isLoading = false;
          return;
        }
        console.log(res.success)
        this.Buildings = res.data ?? [];
        this.filteredBuildings = [...this.Buildings];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Buildings = [];
        this.filteredBuildings = [];
        this.isLoading = false;
        this._toaster.error('Failed to load Buildings');
      }
    });
  }

  /* =============================
   * PAGINATION
   * ============================= */
  get pagedBuildings(): BuildingResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredBuildings.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredBuildings.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredBuildings.length
    );
  }

  /* =============================
   * SEARCH
   * ============================= */
  searchBuildings() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredBuildings = !term
      ? [...this.Buildings]
      : this.filteredBuildings.filter(st =>
        st.buildingName.toLowerCase().includes(term)
      );

    this.pageIndex = 0;
  }

  /* =============================
   * ADD
   * ============================= */
  addBuilding() {
    const dialogRef = this.dialog.open(BuildingManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'add',
        facilityId: this.fkFacility
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadBuildings(this.fkFacility);
      }
    });
  }

  /* =============================
   * EDIT
   * ============================= */
  edit(st: BuildingResponseDTO) {
    const dialogRef = this.dialog.open(BuildingManagementAddUpdateComponent, {
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
        this.loadBuildings(this.fkFacility);
      }
    });
  }

  /* =============================
   * DELETE
   * ============================= */
  delete(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete Building',
        message:
          'Deleting this building will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this._buildingService.deletBuilding(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('Building deleted');
            this.loadBuildings(this.fkFacility);
          } else {
            this._toaster.error(res.remarks || 'Delete failed');
          }
        },
        error: () => {
          this._toaster.error('Delete failed');
        }
      });
    });
  }

  /* =============================
   * HIERARCHY
   * ============================= */
  // openHierarchy() {
  //   const dialogRef = this.dialog.open(SubUserTypeHierarchyComponent, {
  //     width: '720px',
  //     maxWidth: '90vw',
  //     disableClose: true,
  //     panelClass: 'yx-enterprise-dialog',
  //     data: this.subUserTypes
  //   });

  //   dialogRef.afterClosed().subscribe(payload => {
  //     if (!payload) return;

  //     this._subUserTypeService.updateSubUserTypeHierarchy(payload).subscribe({
  //       next: (res) => {
  //         if (res.success) {
  //           this._toaster.success('Hierarchy updated successfully');
  //           this.loadSubUserTypes(this.currentUser.userId);
  //         } else {
  //           this._toaster.error(res.remarks || 'Failed to update hierarchy');
  //         }
  //       },
  //       error: () => {
  //         this._toaster.error('Failed to update hierarchy');
  //       }
  //     });
  //   });
  // }

  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredBuildings.length) {
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


  goToFloor(id: string) {
  this.router.navigate(
    ['/core/floor-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: id
      }
    }
  )
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
