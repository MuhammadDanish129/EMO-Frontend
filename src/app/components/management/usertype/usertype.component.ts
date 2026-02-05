import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserTypeService } from './usertype.service';
import { UserTypeResponseDTO } from './usertype.type';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { UsertypeAddUpdateComponent } from './usertype-add-update/usertype-add-update.component';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { UserTypeHierarchyComponent } from './usertype-hierarchy/usertype-hierarchy.component';

@Component({
  selector: 'app-usertype',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usertype.component.html',
  styleUrl: './usertype.component.scss'
})
export class UsertypeComponent implements OnInit {

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  userTypes: UserTypeResponseDTO[] = [];

  filteredUserTypes: UserTypeResponseDTO[] = [];

  constructor(
    private _userTypeService: UserTypeService,
    private _toaster: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadUserTypes();
  }

  loadUserTypes() {
    this.isLoading = true;
    this._userTypeService.getUserTypes().subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load user types');
          this.isLoading = false;
          return;
        }
        this.userTypes = res.data ?? [];
        this.filteredUserTypes = [...this.userTypes];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.userTypes = [];
        this.isLoading = false;
        this.filteredUserTypes = [];
        this._toaster.error('Failed to load user types');
      }
    });
  }


  /* Pagination helpers */
  get pagedUserTypes(): UserTypeResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredUserTypes.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredUserTypes.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredUserTypes.length
    );
  }

  /* Search */
  searchUserTypes() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredUserTypes = !term
      ? [...this.userTypes]
      : this.userTypes.filter(u =>
        u.userTypeName.toLowerCase().includes(term)
      );

    this.pageIndex = 0;
  }

  /* Actions */
  addUserType() {
    const dialogRef = this.dialog.open(UsertypeAddUpdateComponent, {
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
        this.loadUserTypes();
      }
    });
  }


  edit(ut: UserTypeResponseDTO) {
    const dialogRef = this.dialog.open(UsertypeAddUpdateComponent, {
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
        this.loadUserTypes();
      }
    });
  }


  delete(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete User Type',
        message: 'Deleting this user type will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed) return;

      this._userTypeService.deleteUserType(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('User Type deleted');
            this.loadUserTypes();
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


  openHierarchy() {
    const dialogRef = this.dialog.open(UserTypeHierarchyComponent, {
      width: '720px',
      maxWidth: '90vw',
      disableClose: true,
      panelClass: 'yx-enterprise-dialog',
      data: this.userTypes
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadUserTypes();
      }
    });
  }


  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredUserTypes.length) {
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


