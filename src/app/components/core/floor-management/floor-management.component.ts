import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { FloorResponseDTO } from './floor-management.type';
import { UserService } from '../../../shared/services/user/user.service';
import { FloorService } from './floor-management.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { FloorManagementAddUpdateComponent } from './floor-management-add-update/floor-management-add-update.component';

@Component({
  selector: 'app-floor-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MaterialModuleModule],
  templateUrl: './floor-management.component.html',
  styleUrl: './floor-management.component.scss'
})
export class FloorManagementComponent implements OnInit {

  fkBuilding!: string;
  fkFacility!: string;
  fkBusiness!: string;

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;
  currentUser: any;

  Floors: FloorResponseDTO[] = [];
  filteredFloors: FloorResponseDTO[] = [];

  constructor(
    private _floorService: FloorService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService,
    private router: Router
  ) { }

  /* =============================
   * INIT
   * ============================= */
  async ngOnInit(): Promise<void> {
    const nav = history.state;
    console.log('breadcrumb 3', nav)
   this.fkBuilding = nav.fkBuilding || nav.fkBuilding;
  this.fkFacility = nav.fkFacility;
  this.fkBusiness = nav.fkBusiness;
    this.currentUser = await this._userService.user$;
    this.loadFloors(this.fkBuilding);
  }

  /* =============================
   * LOAD
   * ============================= */
  loadFloors(fkBuilding: string) {
    this.isLoading = true;
    fkBuilding = this.fkBuilding;

    this._floorService.getFloorByBuildingId(fkBuilding).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load Floors');
          this.isLoading = false;
          return;
        }

        this.Floors = res.data ?? [];
        this.filteredFloors = [...this.Floors];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Floors = [];
        this.filteredFloors = [];
        this.isLoading = false;
        this._toaster.error('Failed to load Floors');
      }
    });
  }

  /* =============================
   * PAGINATION
   * ============================= */
  get pagedFloors(): FloorResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredFloors.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredFloors.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredFloors.length
    );
  }

  /* =============================
   * SEARCH
   * ============================= */
  searchFloors() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredFloors = !term
      ? [...this.Floors]
      : this.Floors.filter(st =>
        st.floorName.toLowerCase().includes(term)
      );

    this.pageIndex = 0;
  }

  /* =============================
   * ADD
   * ============================= */
  addFloor() {
    const dialogRef = this.dialog.open(FloorManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'add',
        buildingId: this.fkBuilding
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadFloors(this.fkBuilding);
      }
    });
  }

  /* =============================
   * EDIT
   * ============================= */
  edit(st: FloorResponseDTO) {
    const dialogRef = this.dialog.open(FloorManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'edit',
        value: st
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadFloors(this.fkBuilding);
      }
    });
  }

  /* =============================
   * DELETE
   * ============================= */
  delete(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete Floor',
        message:
          'Deleting this floor will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this._floorService.deleteFloor(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('Floor deleted');
            this.loadFloors(this.fkBuilding);
          } else {
            this._toaster.error(res.remarks || 'Delete failed');
          }
        },
        error: () => {
          this._toaster.error('Delete failed');
        }
      });
    });
  }

  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredFloors.length) {
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

goToSection(id: string) {
  this.router.navigate(
    ['/core/section-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: id
      }
    }
  );
}
 goToBuilding(id: string) {
  this.router.navigate(
    ['/core/building-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility
      }
    }
  );
}

  goToFacility(id: string){
  this.router.navigate(
    ['/core/facility-management'],
    {
      state: {
        fkBusiness: this.fkBusiness
      }
    }
  )
}

}
