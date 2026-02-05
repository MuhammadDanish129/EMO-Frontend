import { Component, OnInit } from '@angular/core';
import { BusinessResponseDTO } from './business-management.type';
import { BusinessService } from './business-management.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user/user.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { BusinessManagementAddUpdateComponent } from './business-management-add-update/business-management-add-update.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { YxSelectComponent } from '../../../shared/yx-select/yx-select.component';
import { RouterLink } from '@angular/router';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
@Component({
  selector: 'app-business-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule, RouterLink, MaterialModuleModule],
  templateUrl: './business-management.component.html',
  styleUrl: './business-management.component.scss'
})
export class BusinessManagementComponent implements OnInit {
  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;
  currentUser: any

  businesses: BusinessResponseDTO[] = [];
  filteredBusinesses: BusinessResponseDTO[] = [];

  constructor(
    private _businessService: BusinessService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService
  ) { }

  /* =============================
   * INIT
   * ============================= */
  async ngOnInit(): Promise<void> {
    this.currentUser = await this._userService.user$;
    this.loadBusinesses(this.currentUser.userId);
  }

  /* =============================
   * LOAD
   * ============================= */
  loadBusinesses(userId: string) {
    this.isLoading = true;

    this._businessService.getBusinessByUserId(userId).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load Businesses');
          this.isLoading = false;
          return;
        }

        this.businesses = res.data ?? [];
        this.filteredBusinesses = [...this.businesses];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.businesses = [];
        this.filteredBusinesses = [];
        this.isLoading = false;
        this._toaster.error('Failed to load businesses');
      }
    });
  }

  /* =============================
   * PAGINATION
   * ============================= */
  get pagedBusinesses(): BusinessResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredBusinesses.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredBusinesses.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredBusinesses.length
    );
  }

  /* =============================
   * SEARCH
   * ============================= */
  searchBusinesses() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredBusinesses = !term
      ? [...this.businesses]
      : this.businesses.filter(st =>
        st.businessName.toLowerCase().includes(term)
      );

    this.pageIndex = 0;
  }

  /* =============================
   * ADD
   * ============================= */
  // addBusiness() {
  //   const dialogRef = this.dialog.open(BusinessManagementAddUpdateComponent, {
  //     width: '720px',
  //     maxWidth: '95vw',
  //     disableClose: true,
  //     autoFocus: false,
  //     panelClass: 'ynex-dialog',
  //     data: {
  //       mode: 'add'
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 'saved') {
  //       this.loadBusinesses(this.currentUser.userId);
  //     }
  //   });
  // }

  /* =============================
   * EDIT
   * ============================= */
  edit(st: BusinessResponseDTO) {
    const dialogRef = this.dialog.open(BusinessManagementAddUpdateComponent, {

      width: '720px',
      maxWidth: '95vw',
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
        this.loadBusinesses(this.currentUser.userId);
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
        title: 'Delete Business',
        message:
          'Deleting this Business will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this._businessService.deleteBusiness(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('Business deleted');
            this.loadBusinesses(this.currentUser.userId);
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
    if ((this.pageIndex + 1) * this.pageSize < this.filteredBusinesses.length) {
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
}
