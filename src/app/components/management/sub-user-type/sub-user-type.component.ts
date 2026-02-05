import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { SubUserTypeResponseDTO } from './sub-user-type.type';
import { SubUserTypeService } from './sub-user-type.service';
import { SubUserTypeAddUpdateComponent } from './sub-user-type-add-update/sub-user-type-add-update.component';
import { SubUserTypeHierarchyComponent } from './sub-user-type-hierarchy/sub-user-type-hierarchy.component';
import { UserService } from '../../../shared/services/user/user.service';
import { User } from '../../../shared/services/user/user.type';

@Component({
  selector: 'app-sub-user-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-user-type.component.html',
  styleUrl: './sub-user-type.component.scss'
})
export class SubUserTypeComponent implements OnInit {

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;
  currentUser: any

  subUserTypes: SubUserTypeResponseDTO[] = [];
  filteredSubUserTypes: SubUserTypeResponseDTO[] = [];

  constructor(
    private _subUserTypeService: SubUserTypeService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService
  ) {}

  /* =============================
   * INIT
   * ============================= */
  async ngOnInit(): Promise<void> {
    this.currentUser = await this._userService.user$;
    this.loadSubUserTypes(this.currentUser.userId);
  }

  /* =============================
   * LOAD
   * ============================= */
  loadSubUserTypes(userId: string) {
    this.isLoading = true;

    this._subUserTypeService.getSubUserTypesByUserId(userId).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load sub user types');
          this.isLoading = false;
          return;
        }

        this.subUserTypes = res.data ?? [];
        this.filteredSubUserTypes = [...this.subUserTypes];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.subUserTypes = [];
        this.filteredSubUserTypes = [];
        this.isLoading = false;
        this._toaster.error('Failed to load sub user types');
      }
    });
  }

  /* =============================
   * PAGINATION
   * ============================= */
  get pagedSubUserTypes(): SubUserTypeResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredSubUserTypes.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredSubUserTypes.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredSubUserTypes.length
    );
  }

  /* =============================
   * SEARCH
   * ============================= */
  searchSubUserTypes() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredSubUserTypes = !term
      ? [...this.subUserTypes]
      : this.subUserTypes.filter(st =>
          st.subUserTypeName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* =============================
   * ADD
   * ============================= */
  addSubUserType() {
    const dialogRef = this.dialog.open(SubUserTypeAddUpdateComponent, {
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
        this.loadSubUserTypes(this.currentUser.userId);
      }
    });
  }

  /* =============================
   * EDIT
   * ============================= */
  edit(st: SubUserTypeResponseDTO) {
    const dialogRef = this.dialog.open(SubUserTypeAddUpdateComponent, {
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
        this.loadSubUserTypes(this.currentUser.userId);
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
        title: 'Delete Sub User Type',
        message:
          'Deleting this sub user type will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this._subUserTypeService.deleteSubUserType(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('Sub User Type deleted');
            this.loadSubUserTypes(this.currentUser.userId);
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
  openHierarchy() {
    const dialogRef = this.dialog.open(SubUserTypeHierarchyComponent, {
      width: '720px',
      maxWidth: '90vw',
      disableClose: true,
      panelClass: 'yx-enterprise-dialog',
      data: this.subUserTypes
    });

    dialogRef.afterClosed().subscribe(payload => {
      if (!payload) return;

      this._subUserTypeService.updateSubUserTypeHierarchy(payload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('Hierarchy updated successfully');
            this.loadSubUserTypes(this.currentUser.userId);
          } else {
            this._toaster.error(res.remarks || 'Failed to update hierarchy');
          }
        },
        error: () => {
          this._toaster.error('Failed to update hierarchy');
        }
      });
    });
  }

  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredSubUserTypes.length) {
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
