import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserTypeService } from './usertype.service';
import { UserTypeResponseDTO } from './usertype.type';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { UsertypeAddUpdateComponent } from './usertype-add-update/usertype-add-update.component';

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
  this._userTypeService.getUserTypes().subscribe({
    next: (res) => {
      this.userTypes = res.data ?? [];
      this.filteredUserTypes = [...this.userTypes];
      this.pageIndex = 0;
    },
    error: () => {
      this.userTypes = [];
      this.filteredUserTypes = [];
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
  this.dialog.open(UsertypeAddUpdateComponent, {
    width: '420px',
    disableClose: true,
    autoFocus: false,
    data: {
      mode: 'edit',
      value: ut
    }
  });
}


  delete(id: string) {
    this.userTypes = this.userTypes.filter(u => u.userTypeId !== id);
    this.searchUserTypes();
    // this.snack.open('User Type deleted', 'OK', { duration: 1500 });
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


