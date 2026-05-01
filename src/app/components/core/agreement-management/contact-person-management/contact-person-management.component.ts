import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPersonDTO, UpdateContactPersonDTO } from '../agreement-management.type';
import { AgreementService } from '../agreement-management.service';
import { ToastrService } from "ngx-toastr";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/confirmation-dialouge/confirmation-dialog.component';

@Component({
  selector: 'app-contact-person-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-person-management.component.html',
  styleUrls: ['./contact-person-management.component.scss']
})
export class ContactPersonManagementComponent implements OnInit {

  @Input() agreementId!: string;
  @Output() onClose = new EventEmitter<void>();

  contactPersons: any[] = [];
  isLoading = false;

  constructor(private agreementService: AgreementService,
     private toaster: ToastrService,
      private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  // ================= LOAD =================
  loadContacts() {
    this.isLoading = true;

    this.agreementService.getContactPersons(this.agreementId).subscribe({
      next: (res) => {
        this.contactPersons = res.data || [];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Failed to load contact persons');
      }
    });
  }

  // ================= EDIT =================
  enableEdit(cp: any) {
    cp.isEdit = true;

    cp._backup = { ...cp };
  }

  cancel(cp: any) {
    Object.assign(cp, cp._backup);
    cp.isEdit = false;
  }

  // ================= SAVE =================
  save(cp: any) {

    if (!cp.contactPersonName || !cp.contactPersonPhone) {
      alert('Name and Phone are required');
      return;
    }

    const payload: UpdateContactPersonDTO = {
      contactPersonId: cp.contactPersonId,
      contactPersonName: cp.contactPersonName,
      contactPersonPhone: cp.contactPersonPhone,
      contactPersonEmail: cp.contactPersonEmail,
      fkAgreement: this.agreementId,
      isActive: true
    };

    this.agreementService.updatecontactPerson(payload).subscribe({
      next: () => {
        cp.isEdit = false;
      },
      error: () => {
        alert('Update failed');
      }
    });
  }

  // ================= DELETE =================
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
  
        this.agreementService.deleteContactPerson(id).subscribe({
  
          next: (res: any) => {
            if (res.success) {
              this.toaster.success('Contact deleted');
              this.loadContacts();
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

  // ================= CLOSE =================
  close() {
    this.onClose.emit();
  }
}