import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { OfficeResponseDTO } from '../../office-management/office-management.type';
import { AgreementService } from '../agreement-management.service';

@Component({
  selector: 'app-agreement-office-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agreement-office-management.component.html',
  styleUrl: './agreement-office-management.component.scss'
})
export class AgreementOfficeManagementComponent implements OnInit {

  agreementId!: string;

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  offices: OfficeResponseDTO[] = [];
  filteredOffices: OfficeResponseDTO[] = [];

  constructor(
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
      this.loadOffices();
    } else {
      console.error('AgreementId missing!');
    }
  }

  /* ================= LOAD ================= */
  loadOffices() {
    this.isLoading = true;

    this.service.getOfficesByAgreementId(this.agreementId).subscribe({
      next: res => {
        if (res.success) {
          this.offices = res.data ?? [];
          this.filteredOffices = [...this.offices];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error('Failed to load Offices');
      }
    });
  }

  /* ================= SEARCH ================= */
  searchOffices() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredOffices = !term
      ? [...this.offices]
      : this.offices.filter(o =>
          o.officeName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= PAGINATION ================= */
  get pagedOffices(): OfficeResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredOffices.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredOffices.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredOffices.length
    );
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredOffices.length) {
      this.pageIndex++;
    }
  }

  prevPage() {
    if (this.pageIndex > 0) this.pageIndex--;
  }

  goToPage(i: number) {
    this.pageIndex = i;
  }

  /* ================= NAV ================= */
  goToAgreement() {
    this.router.navigate(['/core/agreement-management']);
  }
}