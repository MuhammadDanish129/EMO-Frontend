import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserResponseDTO } from '../../../management/user/user.type';
import { UserService } from '../../../../shared/services/user/user.service';
import { UserManagementService } from '../../../management/user/user.service';
import { UserAddUpdateComponent } from '../../../management/user/user-add-update/user-add-update.component';


@Component({
  selector: 'app-business-admin-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './business-admin-management.component.html',
  styleUrl: './business-admin-management.component.scss'
})
export class BusinessAdminManagementComponent implements OnInit {

  businessId!: string;

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  admins: UserResponseDTO[] = [];
  filteredAdmins: UserResponseDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: UserManagementService,
    private dialog: MatDialog,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
     const nav = this.router.getCurrentNavigation();

    this.businessId =
    nav?.extras?.state?.['businessId'] ||
    history.state?.businessId;

  console.log('Received BusinessId:', this.businessId);

  if (this.businessId) {
    this.loadAdmins();
  } else {
    console.error('BusinessId missing!');
  }
  }

  /* ================= LOAD ================= */
  loadAdmins() {
    this.isLoading = true;

    this.service.getBusinessAdmins(this.businessId).subscribe({
      next: res => {
        if (res.success) {
          this.admins = res.data ?? [];
          this.filteredAdmins = [...this.admins];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error('Failed to load admins');
      }
    });
  }
getUserAvatar(u: any): string {

  // If backend sends base64 image
  if (u?.imageBase64) return u.imageBase64;

  // Otherwise fallback avatar
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

    this.filteredAdmins = !term
      ? [...this.admins]
      : this.admins.filter(u =>
          u.name.toLowerCase().includes(term) ||
          u.username.toLowerCase().includes(term) ||
          u.subUserTypeName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= PAGINATION ================= */
  get pagedUsers(): UserResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredAdmins.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredAdmins.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredAdmins.length
    );
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredAdmins.length) {
      this.pageIndex++;
    }
  }

  prevPage() {
    if (this.pageIndex > 0) this.pageIndex--;
  }

  goToPage(i: number) {
    this.pageIndex = i;
  }

  /* ================= ACTION ================= */

  editUser(user: UserResponseDTO) {
    this.dialog.open(UserAddUpdateComponent, {
      width: '720px',
      maxWidth: '95vw',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: { mode: 'edit', value: user }
    }).afterClosed().subscribe(res => {
      if (res) this.loadAdmins();
    });
  }

}
