import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-usertype-add-update',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule],

  templateUrl: './usertype-add-update.component.html'
})
export class UsertypeAddUpdateComponent {

  get isEditMode(): boolean {
  return this.data?.mode === 'edit';
}

  model = {
    userTypeName: '',
    isActive: true
  };

  constructor(
    private dialogRef: MatDialogRef<UsertypeAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit'; value?: any }
  ) {
    if (data?.mode === 'edit' && data.value) {
      this.model = { ...data.value };
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    // call API here later
    this.dialogRef.close('saved');
  }
}
