import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { UtilityService } from './utility-management.service';
import { UtilityResponseDTO } from './utility-management.type';

import { UtilityManagementAddUpdateComponent } from './utility-management-add-update/utility-management-add-update.component';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';

@Component({
  selector: 'app-utility',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './utility-management.component.html',
  styleUrl: './utility-management.component.scss'
})
export class UtilityManagementComponent implements OnInit {

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  utilities: UtilityResponseDTO[] = [];
  filteredUtilities: UtilityResponseDTO[] = [];

  constructor(
    private _utilityService: UtilityService,
    private _toaster: ToastrService,
    private dialog: MatDialog
  ) {}

  /* ================= INIT ================= */
  ngOnInit(): void {
    this.loadUtilities();
  }

  /* ================= LOAD ================= */
  loadUtilities() {

    this.isLoading = true;

    this._utilityService.getUtilities().subscribe({

      next: (res) => {

        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load utilities');
          this.isLoading = false;
          return;
        }

        this.utilities = res.data ?? [];
        this.filteredUtilities = [...this.utilities];
        this.pageIndex = 0;
        this.isLoading = false;
      },

      error: () => {
        this.utilities = [];
        this.filteredUtilities = [];
        this.isLoading = false;
        this._toaster.error('Failed to load utilities');
      }

    });

  }

  /* ================= PAGINATION ================= */

  get pagedUtilities(): UtilityResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredUtilities.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredUtilities.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredUtilities.length
    );
  }

  /* ================= SEARCH ================= */

  searchUtilities() {

    const term = this.searchText.toLowerCase().trim();

    this.filteredUtilities = !term
      ? [...this.utilities]
      : this.utilities.filter(u =>
          u.utilityName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= ADD ================= */

  addUtility() {

    const dialogRef = this.dialog.open(UtilityManagementAddUpdateComponent, {
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
        this.loadUtilities();
      }
    });

  }

  /* ================= EDIT ================= */

  edit(ut: UtilityResponseDTO) {

    const dialogRef = this.dialog.open(UtilityManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      data: {
        mode: 'edit',
        value: ut
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadUtilities();
      }
    });

  }

  /* ================= DELETE ================= */

  delete(id: string) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete Utility',
        message: 'Deleting this utility will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {

      if (!confirmed) return;

      this._utilityService.deleteUtility(id).subscribe({

        next: (res) => {

          if (res.success) {
            this._toaster.success('Utility deleted');
            this.loadUtilities();
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

  /* ================= PAGE CONTROLS ================= */

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredUtilities.length) {
      this.pageIndex++;
    }
  }

  prevPage() {
    if (this.pageIndex > 0) this.pageIndex--;
  }

  goToPage(i: number) {
    this.pageIndex = i;
  }

}
