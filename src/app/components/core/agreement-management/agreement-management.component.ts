import { ToastrService } from "ngx-toastr";
import { AgreementService } from "./agreement-management.service";
import { AgreementResponseDTO } from "./agreement-management.type";
import { MatDialog } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MaterialModuleModule } from "../../../material-module/material-module.module";
import { Component, OnInit } from "@angular/core";
import { ConfirmDialogComponent } from "../../../shared/confirmation-dialouge/confirmation-dialog.component";

@Component({
  selector: 'app-agreement-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule, MaterialModuleModule],
  templateUrl: './agreement-management.component.html'
})
export class AgreementManagementComponent implements OnInit {

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;

  Agreements: AgreementResponseDTO[] = [];
  filteredAgreements: AgreementResponseDTO[] = [];

  constructor(
    private agreementService: AgreementService,
    private toaster: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadAgreements();
  }

  /* ================= LOAD ================= */

  loadAgreements() {
    this.isLoading = true;

    this.agreementService.getAgreements().subscribe({
      next: (res: any) => {

        if (res.success === false) {
          this.toaster.error(res.remarks || 'Failed to load agreements');
          this.isLoading = false;
          return;
        }

        this.Agreements = res.data ?? [];
        this.filteredAgreements = [...this.Agreements];
        this.pageIndex = 0;
        this.isLoading = false;
      },

      error: () => {
        this.isLoading = false;
        this.toaster.error('Failed to load agreements');
      }
    });
  }

  /* ================= DATE ================= */

  formatDate(date: string) {
    if (!date) return '-';

    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  /* ================= SEARCH ================= */

  searchAgreements() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredAgreements = !term
      ? [...this.Agreements]
      : this.Agreements.filter(x =>
          x.agreementName.toLowerCase().includes(term) ||
          x.tenantName.toLowerCase().includes(term) ||
          x.officeName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* ================= PAGINATION ================= */

  get pagedAgreements() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredAgreements.slice(start, start + this.pageSize);
  }

  get pages() {
    return Array.from(
      { length: Math.ceil(this.filteredAgreements.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredAgreements.length
    );
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredAgreements.length) {
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

  /* ================= ADD ================= */

  addAgreement() {
    console.log('Add Agreement Clicked');
    // later open dialog like facility
  }

  /* ================= EDIT ================= */

  edit(st: AgreementResponseDTO) {
    console.log('Edit Agreement', st);
    // later open dialog like facility
  }

  /* ================= DELETE ================= */

  delete(id: string) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete Agreement',
        message:
          'Deleting this Agreement will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {

      if (!confirmed) return;

      this.agreementService.deleteAgreement(id).subscribe({

        next: (res: any) => {
          if (res.success) {
            this.toaster.success('Agreement deleted');
            this.loadAgreements();
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
