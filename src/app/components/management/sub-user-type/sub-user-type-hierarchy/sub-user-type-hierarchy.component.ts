import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray
} from '@angular/cdk/drag-drop';

import {
  SubUserTypeResponseDTO,
  SubUserTypeHierarchyRequestDTO
} from '../sub-user-type.type';
import { ConfirmDialogComponent } from '../../../../shared/confirmation-dialouge/confirmation-dialog.component';

@Component({
  selector: 'app-sub-user-type-hierarchy',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './sub-user-type-hierarchy.component.html'
})
export class SubUserTypeHierarchyComponent implements OnInit {

  subUserTypes: SubUserTypeResponseDTO[] = [];

  constructor(
    private dialogRef: MatDialogRef<SubUserTypeHierarchyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubUserTypeResponseDTO[],
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // clone list
    this.subUserTypes = [...this.data];

    // ✅ FORCE ROOT (LEVEL 0)
    const rootIndex = this.subUserTypes.findIndex(
      s => s.subUserTypeName === 'Root'
    );

    if (rootIndex > 0) {
      const [root] = this.subUserTypes.splice(rootIndex, 1);
      this.subUserTypes.unshift(root);
    }
  }

  drop(event: CdkDragDrop<SubUserTypeResponseDTO[]>) {
    // ❌ never allow touching ROOT
    if (event.previousIndex === 0 || event.currentIndex === 0) {
      return;
    }

    moveItemInArray(
      this.subUserTypes,
      event.previousIndex,
      event.currentIndex
    );
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Save Sub User Type Hierarchy',
        message:
          'You are about to update the sub user type hierarchy. Root will remain unchanged.',
        confirmText: 'Save Hierarchy',
        cancelText: 'Cancel',
        variant: 'warning',
        showActions: true
      }
    });

    confirmRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      // ✅ BUILD PAYLOAD
      const payload: SubUserTypeHierarchyRequestDTO[] =
        this.subUserTypes.map((st, index) => ({
          subUserTypeId: st.subUserTypeId,
          subUserTypeLevel: index
        }));

      this.dialogRef.close(payload);
    });
  }
}
