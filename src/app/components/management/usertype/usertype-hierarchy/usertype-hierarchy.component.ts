import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import { UserTypeHierarchyRequestDTO, UserTypeResponseDTO } from '../usertype.type';
import { ConfirmDialogComponent } from '../../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { UserTypeService } from '../usertype.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usertype-hierarchy',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './usertype-hierarchy.component.html'
})
export class UserTypeHierarchyComponent implements OnInit {

  userTypes: UserTypeResponseDTO[] = [];

  constructor(
    private dialogRef: MatDialogRef<UserTypeHierarchyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserTypeResponseDTO[],
    private dialog: MatDialog,
    private _userTypeService: UserTypeService,
    private _toaster: ToastrService,
  ) { }

  ngOnInit(): void {
    // Clone list to avoid mutating parent data
    this.userTypes = [...this.data];

    // Safety: force System Admin at top if exists
    const sysIndex = this.userTypes.findIndex(
      u => u.userTypeName === 'System Admin'
    );

    if (sysIndex > 0) {
      const [sysAdmin] = this.userTypes.splice(sysIndex, 1);
      this.userTypes.unshift(sysAdmin);
    }
  }

  drop(event: CdkDragDrop<UserTypeResponseDTO[]>) {

    // ❌ Never allow touching index 0 (System Admin)
    if (event.previousIndex === 0 || event.currentIndex === 0) {
      return;
    }

    moveItemInArray(
      this.userTypes,
      event.previousIndex,
      event.currentIndex
    );
  }

  close() {
    this.dialogRef.close();
  }
  private closeWithDelay(result?: any) {
    setTimeout(() => {
      this.dialogRef.close(result);
    }, 500);
  }

  save() {
    const confirmationDialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Save User Type Hierarchy',
        message:
          'You are about to update the user type hierarchy. This change will affect role relationships and access flow across the system.',
        confirmText: 'Save Hierarchy',
        cancelText: 'Cancel',
        variant: 'warning',
        showActions: true
      }
    });

    confirmationDialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      // ✅ BUILD ENTERPRISE PAYLOAD
      const hierarchyPayload: UserTypeHierarchyRequestDTO[] =
        this.userTypes.map((ut, index) => ({
          userTypeId: ut.userTypeId,
          userTypeLevel: index
        }));

      this._userTypeService.updateUserTypeHierarchy(hierarchyPayload).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('User Type hierarchy updated successfully');
            this.closeWithDelay('saved');
          } else {
            this._toaster.error(res.remarks || 'Failed to update user type hierarchy');
          }
        },
        error: (err) => {
          this._toaster.error('Something went wrong');
        }
      })

    });
  }

}
