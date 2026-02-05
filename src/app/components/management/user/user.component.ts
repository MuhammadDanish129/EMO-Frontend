import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { UserAddUpdateComponent } from './user-add-update/user-add-update.component';
import { UserManagementService } from './user.service';
import { UserResponseDTO } from './user.type';
import { UserService } from '../../../shared/services/user/user.service';
import { User } from '../../../shared/services/user/user.type';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  /* ================= STATE ================= */
  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  currentUser: User | null = null;

  users: UserResponseDTO[] = [];
  filteredUsers: UserResponseDTO[] = [];

  constructor(
    private dialog: MatDialog,
    private userManagementService: UserManagementService,
    private userService: UserService,
    private toaster: ToastrService
  ) {}

  /* ================= INIT ================= */
  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;
    this.loadUsers(this.currentUser?.userId ?? '');
  }

  /* ================= LOAD ================= */
  loadUsers(userId: string) {
    this.isLoading = true;

    this.userManagementService.getUsers(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.users = res.data ?? [];
          this.filteredUsers = [...this.users];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error('Something went wrong');
      }
    });
  }

  /* ================= CURRENT USER SEPARATION ================= */

  get myUser(): UserResponseDTO | null {
    if (!this.currentUser) return null;
    return this.filteredUsers.find(
      u => u.userId === this.currentUser?.userId
    ) ?? null;
  }

  get pagedUsers(): UserResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }

  get otherUsers(): UserResponseDTO[] {
    if (!this.currentUser) return this.pagedUsers;
    return this.pagedUsers.filter(
      u => u.userId !== this.currentUser?.userId
    );
  }

  /* ================= AVATAR ================= */
  getUserAvatar(u: any): string {
    if (u?.imageBase64) return u.imageBase64;

    switch ((u?.genderName || '').toLowerCase()) {
      case 'male':
        return 'assets/images/avatars/male.jpg';
      case 'female':
        return 'assets/images/avatars/female.jpg';
      default:
        return 'assets/images/avatars/other.jpg';
    }
  }

  /* ================= SEARCH ================= */
  searchUsers() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredUsers = !term
      ? [...this.users]
      : this.users.filter(u =>
          u.name.toLowerCase().includes(term) ||
          u.username.toLowerCase().includes(term) ||
          u.subUserTypeName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= PAGINATION ================= */
  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredUsers.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredUsers.length
    );
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredUsers.length) {
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

  /* ================= ACTIONS ================= */
  addUser() {
    this.dialog.open(UserAddUpdateComponent, {
      width: '720px',
      maxWidth: '95vw',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: { mode: 'add' }
    }).afterClosed().subscribe(res => {
      if (res) this.loadUsers(this.currentUser?.userId ?? '');
    });
  }

  editUser(user: UserResponseDTO) {
    this.dialog.open(UserAddUpdateComponent, {
      width: '720px',
      maxWidth: '95vw',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: { mode: 'edit', value: user }
    }).afterClosed().subscribe(res => {
      if (res) this.loadUsers(this.currentUser?.userId ?? '');
    });
  }

  deleteUser(id: string) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '420px',
        disableClose: true,
        data: {
          title: 'Delete User',
          message:
            'Deleting this user will remove it permanently. This action cannot be undone.',
          confirmText: 'Delete',
          cancelText: 'Cancel',
          variant: 'danger',
          showActions: true
        }
      });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this.userManagementService.deleteUser(id).subscribe({
        next: (res) => {
          if (res.success) {
            this.toaster.success('User deleted');
            this.loadUsers(this.currentUser?.userId ?? '');
          } else {
            this.toaster.error(res.remarks || 'Delete failed');
          }
        },
        error: () => {
          this.toaster.error('Delete failed');
        }
      });
    });
  }
}
