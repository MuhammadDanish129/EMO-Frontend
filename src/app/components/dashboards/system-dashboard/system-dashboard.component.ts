import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../management/user/user.service';
import { UserResponseDTO } from '../../management/user/user.type';
import { SuperAdminDashboardService } from './system.services';

import {
  SuperAdminDashboardResponseDTO,
  BusinessWiseDashboardDTO,
  // RecentActivityDTO
} from './system.type';

@Component({
  selector: 'app-system-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-dashboard.component.html',
  styleUrls: ['./system-dashboard.component.scss']
})
export class SystemDashboardComponent implements OnInit {

  dashboardData: SuperAdminDashboardResponseDTO | null = null;

  businessWiseSummary: BusinessWiseDashboardDTO[] = [];
  businessSearchTerm: string = '';
  selectedBusiness: BusinessWiseDashboardDTO | null = null;
  businessAdmins: UserResponseDTO[] = [];
  // recentActivities: RecentActivityDTO[] = [];

  isLoading: boolean = false;
  isAdminLoading: boolean = false;
  errorMessage: string = '';
  adminErrorMessage: string = '';

  constructor(
    private dashboardService: SuperAdminDashboardService,
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {
    this.getDashboard();
  }

  get filteredBusinessWiseSummary(): BusinessWiseDashboardDTO[] {
    const searchTerm = this.businessSearchTerm.trim().toLowerCase();

    if (!searchTerm) {
      return this.businessWiseSummary;
    }

    return this.businessWiseSummary.filter((item) =>
      (item.businessName || '').toLowerCase().includes(searchTerm)
    );
  }

  get hasBusinessSearch(): boolean {
    return this.businessSearchTerm.trim().length > 0;
  }

  onBusinessSearch(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.businessSearchTerm = target?.value || '';
  }

  openBusinessDetails(item: BusinessWiseDashboardDTO): void {
    this.selectedBusiness = item;
    this.businessAdmins = [];
    this.adminErrorMessage = '';
    this.loadBusinessAdmins(item.businessId);
  }

  closeBusinessDetails(): void {
    this.selectedBusiness = null;
    this.businessAdmins = [];
    this.adminErrorMessage = '';
    this.isAdminLoading = false;
  }

  loadBusinessAdmins(businessId: string): void {
    if (!businessId) {
      this.adminErrorMessage = 'Business id is missing.';
      return;
    }

    this.isAdminLoading = true;

    this.userManagementService.getBusinessAdmins(businessId).subscribe({
      next: (response) => {
        this.isAdminLoading = false;

        if (response.success) {
          this.businessAdmins = response.data || [];
        } else {
          this.businessAdmins = [];
          this.adminErrorMessage = response.remarks || 'No admin details found for this business.';
        }
      },
      error: () => {
        this.isAdminLoading = false;
        this.businessAdmins = [];
        this.adminErrorMessage = 'Failed to load business admins.';
      }
    });
  }

  getUserAvatar(user: UserResponseDTO): string {
    if (user?.imageBase64) {
      return user.imageBase64;
    }

    switch ((user?.genderName || '').toLowerCase()) {
      case 'male':
        return 'assets/images/avatars/male.jpg';
      case 'female':
        return 'assets/images/avatars/female.jpg';
      default:
        return 'assets/images/avatars/other.jpg';
    }
  }

  /* ===============================
   * GET DASHBOARD DATA
   * =============================== */
  getDashboard(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.dashboardService.getDashboard().subscribe({
      next: (response) => {
        this.isLoading = false;

        if (response.success && response.data) {
          this.dashboardData = response.data;
          this.businessWiseSummary = response.data.businessWiseSummary || [];
          // this.recentActivities = response.data.recentActivities || [];
        } else {
          this.dashboardData = null;
          this.businessWiseSummary = [];
          // this.recentActivities = [];
          this.errorMessage = response.remarks || 'No dashboard data found.';
        }
      },
      error: () => {
        this.isLoading = false;
        this.dashboardData = null;
        this.businessWiseSummary = [];
        // this.recentActivities = [];
        this.errorMessage = 'Something went wrong while loading dashboard.';
      }
    });
  }

}
