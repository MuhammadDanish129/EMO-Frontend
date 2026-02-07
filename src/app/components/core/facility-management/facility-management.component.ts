import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user/user.service';
import { FacilityResponseDTO } from './facility-management.type';
import { FacilityService } from './facility-management.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { FacilityManagementAddUpdateComponent } from './facility-management-add-update/facility-management-add-update.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink } from '@angular/router';
import { MaterialModuleModule } from '../../../material-module/material-module.module';

@Component({
  selector: 'app-facility-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule,  MaterialModuleModule],
  templateUrl: './facility-management.component.html',
  styleUrl: './facility-management.component.scss'
})
export class FacilityManagementComponent implements OnInit {
  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;
  currentUser: any

  Facilities: FacilityResponseDTO[] = [];
  filteredFacilities: FacilityResponseDTO[] = [];

  

  constructor(
    private _facilityService: FacilityService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService,
    private router: Router
  ) { }

  /* =============================
   * INIT
   * ============================= */
  async ngOnInit(): Promise<void> {
    this.currentUser = await this._userService.user$;
    this.loadFacilities(this.currentUser.fkFacilities);
    const nav = history.state;
    console.log('breadcrumb 1', nav)
  }

  /* =============================
   * LOAD
   * ============================= */
  loadFacilities(fkBusiness: string) {
    this.isLoading = true;
    fkBusiness = this.currentUser.fkBusiness;
    this._facilityService.getFacilityByBusinessId(fkBusiness).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load facilities');
          this.isLoading = false;
          return;
        }
        console.log(res.success)
        this.Facilities = res.data ?? [];
        this.filteredFacilities = [...this.Facilities];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Facilities = [];
        this.filteredFacilities = [];
        this.isLoading = false;
        this._toaster.error('Failed to load facilities');
      }
    });
  }

  /* =============================
   * PAGINATION
   * ============================= */
  get pagedFacilities(): FacilityResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredFacilities.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredFacilities.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredFacilities.length
    );
  }

  /* =============================
   * SEARCH
   * ============================= */
  searchFacilities() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredFacilities = !term
      ? [...this.Facilities]
      : this.filteredFacilities.filter(st =>
        st.facilityName.toLowerCase().includes(term)
      );

    this.pageIndex = 0;
  }

  /* =============================
   * ADD
   * ============================= */
  addFacility() {
    const dialogRef = this.dialog.open(FacilityManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadFacilities(this.currentUser.fkFacilities);
      }
    });
  }

  /* =============================
   * EDIT
   * ============================= */
  edit(st: FacilityResponseDTO) {
    const dialogRef = this.dialog.open(FacilityManagementAddUpdateComponent, {
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
        this.loadFacilities(this.currentUser.fkFacilities);
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
        title: 'Delete Facility',
        message:
          'Deleting this Facility will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this._facilityService.deleteFacility(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('Facility deleted');
            this.loadFacilities(this.currentUser.fkBusiness);
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
    if ((this.pageIndex + 1) * this.pageSize < this.filteredFacilities.length) {
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


  goToBuilding(id: string){
  this.router.navigate(
    ['/core/building-management'],
    {
      state: {
        fkBusiness: this.currentUser.fkBusiness,
        fkFacility: id
      }
    }
  )
}


  
}
