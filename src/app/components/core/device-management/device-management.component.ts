import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user/user.service';
import { DeviceResponseDTO } from './device-management.type';
import { DeviceService } from './device-management.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { DeviceManagementAddUpdateComponent } from './device-management-add-update/device-management-add-update.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { MaterialModuleModule } from '../../../material-module/material-module.module';

@Component({
  selector: 'app-device-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule, MaterialModuleModule],
  templateUrl: './device-management.component.html',
  styleUrl: './device-management.component.scss'
})
export class DeviceManagementComponent implements OnInit {

  fkFloor!: string;
  fkBuilding!: string;
fkFacility!: string;
fkBusiness!: string; 
fkSection!: string;
fkOffice!: string; 

  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;
  currentUser: any;

  Devices: DeviceResponseDTO[] = [];
  filteredDevices: DeviceResponseDTO[] = [];

  constructor(
    private _deviceService: DeviceService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService,
    private router: Router
  ) {}

  /* =============================
   * INIT
   * ============================= */
  async ngOnInit(): Promise<void> {
    const nav = history.state;
    this.fkFloor = nav.fkFloor || nav.fkFloor;
  this.fkBuilding = nav.fkBuilding;
  this.fkFacility = nav.fkFacility;
  this.fkBusiness = nav.fkBusiness;
  this.fkSection = nav.fkSection;
  this.fkOffice = nav.fkOffice;
    this.currentUser = await this._userService.user$;
    this.loadDevices(this.fkOffice);
  }

  /* =============================
   * LOAD
   * ============================= */
 loadDevices(fkOffice?: string) {

  this.isLoading = true;

  const OfficeId = fkOffice || this.currentUser?.fkBusiness;

  this._deviceService.getDeviceByOfficeId(OfficeId).subscribe({
    next: (res) => {

      if (!res.success) {
        this._toaster.error(res.remarks || 'Failed to load devices');
          this.filteredDevices = res.data ?? [];
        this.isLoading = false;
        return;
      }

      this.Devices = res.data ?? [];
      this.filteredDevices = [...this.Devices];
      this.pageIndex = 0;
      this.isLoading = false;

    },
    error: () => {
      this.Devices = [];
      this.filteredDevices = [];
      this.isLoading = false;
      this._toaster.error('Failed to load devices');
    }
  });
}

  /* =============================
   * PAGINATION
   * ============================= */
  get pagedDevices(): DeviceResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredDevices.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredDevices.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredDevices.length
    );
  }

  /* =============================
   * SEARCH
   * ============================= */
  searchDevices() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredDevices = !term
      ? [...this.Devices]
      : this.Devices.filter(d =>
          d.deviceName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  /* =============================
   * ADD
   * ============================= */
  addDevice() {
    const dialogRef = this.dialog.open(DeviceManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: { mode: 'add', fkOffice: this.fkOffice,
      fkBusiness: this.currentUser.fkBusiness }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadDevices(this.fkOffice);
      }
    });
  }

  /* =============================
   * EDIT
   * ============================= */
  edit(device: DeviceResponseDTO) {
    const dialogRef = this.dialog.open(DeviceManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: {
        mode: 'edit',
        value: device
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadDevices(this.currentUser.fkBusiness);
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
      title: 'Delete Device',
      message: 'Deleting this Device will remove it permanently. This action cannot be undone.',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      variant: 'danger',
      showActions: true
    }
  });

  dialogRef.afterClosed().subscribe((confirmed: boolean) => {

    if (!confirmed) return;

    this.isLoading = true;

    this._deviceService.deleteDevice(id).subscribe({

      next: (res) => {

        if (res.success) {

          this._toaster.success('Device deleted');

          // ⭐ HARD REFRESH LIST FROM SERVER
          this.loadDevices();

        } else {
          this._toaster.error(res.remarks || 'Delete failed');
          this.isLoading = false;
        }

      },

      error: () => {
        this._toaster.error('Delete failed');
        this.isLoading = false;
      }

    });

  });
}


  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredDevices.length) {
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


  
    goToSection() {
  this.router.navigate(
    ['/core/section-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor
      }
    }
  );
}

 goToOffice() {
  this.router.navigate(
    ['/core/office-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
      }
    }
  );
}

    goToFloor(id: string) {
  this.router.navigate(
    ['/core/floor-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding
      }
    }
  )
}
goToBuilding() {
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
goToSensors(id: string) {
  this.router.navigate(
    ['/core/sensor-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice: this.fkOffice,
        fkDevice: id
      }
    }
  );
}

goToFacility() {
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
