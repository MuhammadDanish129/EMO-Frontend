
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
import { AgreementService } from '../agreement-management.service';


@Component({
  selector: 'app-business-admin-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
   templateUrl: './agreement-tenant-management.component.html',
  styleUrl: './agreement-tenant-management.component.scss'
})
export class AgreementTenantManagementComponent implements OnInit {

  agreementId!: string;

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  tenants: UserResponseDTO[] = [];
  filteredTenants: UserResponseDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: AgreementService,
    private dialog: MatDialog,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
     const nav = this.router.getCurrentNavigation();

    this.agreementId =
    nav?.extras?.state?.['agreementId'] ||
    history.state?.agreementId;

  console.log('Received AgreementId:', this.agreementId);

  if (this.agreementId) {
    this.loadTenant();
  } else {
    console.error('AgreementId missing!');
  }
  }

  /* ================= LOAD ================= */
  loadTenant() {
    this.isLoading = true;

    this.service.getTenants(this.agreementId).subscribe({
      next: res => {
        if (res.success) {
          this.tenants = res.data ?? [];
          this.filteredTenants = [...this.tenants];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error('Failed to load Tenants');
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

    this.filteredTenants = !term
      ? [...this.tenants]
      : this.tenants.filter(u =>
          u.name.toLowerCase().includes(term) ||
          u.username.toLowerCase().includes(term) ||
          u.subUserTypeName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= PAGINATION ================= */
  get pagedUsers(): UserResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredTenants.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredTenants.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredTenants.length
    );
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredTenants.length) {
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
      if (res) this.loadTenant();
    });
  }

}
