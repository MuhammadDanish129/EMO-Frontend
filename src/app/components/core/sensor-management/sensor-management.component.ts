import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user/user.service';
import { SensorResponseDTO } from './sensor-management.type';
import { SensorService } from './sensor-management.service';
import { ConfirmDialogComponent } from '../../../shared/confirmation-dialouge/confirmation-dialog.component';
import { SensorManagementAddUpdateComponent } from './sensor-management-add-update/sensor-management-add-update.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { MaterialModuleModule } from '../../../material-module/material-module.module';

@Component({
  selector: 'app-sensor-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule, MaterialModuleModule],
  templateUrl: './sensor-management.component.html',
  styleUrl: './sensor-management.component.scss'
})
export class SensorManagementComponent implements OnInit {


  fkFloor!: string;
  fkBuilding!: string;
fkFacility!: string;
fkBusiness!: string; 
fkSection!: string;
fkOffice!: string; 
fkDevice!: string;
  searchText = '';
  pageIndex = 0;
  pageSize = 5;
  isLoading = false;
  currentUser: any

  Sensors: SensorResponseDTO[] = [];
  filteredSensors: SensorResponseDTO[] = [];

  constructor(
    private _sensorService: SensorService,
    private _toaster: ToastrService,
    private dialog: MatDialog,
    private _userService: UserService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
     const nav = history.state;
    this.fkFloor = nav.fkFloor || nav.fkFloor;
  this.fkBuilding = nav.fkBuilding;
  this.fkFacility = nav.fkFacility;
  this.fkBusiness = nav.fkBusiness;
  this.fkSection = nav.fkSection;
  this.fkOffice = nav.fkOffice;
  this.fkDevice = nav.fkDevice;

    this.currentUser = await this._userService.user$;
    this.loadSensors(this.currentUser.fkBusiness);
  }

  loadSensors(fkDevice: string) {
    this.isLoading = true;
    fkDevice = this.fkDevice;

    this._sensorService.getSensorByDeviceId(fkDevice).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || 'Failed to load sensors');
          this.isLoading = false;
          return;
        }

        this.Sensors = res.data ?? [];
        this.filteredSensors = [...this.Sensors];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Sensors = [];
        this.filteredSensors = [];
        this.isLoading = false;
        this._toaster.error('Failed to load sensors');
      }
    });
  }

  get pagedSensors(): SensorResponseDTO[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredSensors.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredSensors.length / this.pageSize) },
      (_, i) => i
    );
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredSensors.length
    );
  }

  searchSensors() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredSensors = !term
      ? [...this.Sensors]
      : this.filteredSensors.filter(st =>
          st.sensorName.toLowerCase().includes(term)
        );

    this.pageIndex = 0;
  }

  addSensor() {
    const dialogRef = this.dialog.open(SensorManagementAddUpdateComponent, {
      width: '420px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'ynex-dialog',
      data: { mode: 'add',fkDevice: this.fkDevice }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadSensors(this.currentUser.fkBusiness);
      }
    });
  }
viewDetails(sensor: SensorResponseDTO) {

  const dialogRef = this.dialog.open(SensorManagementAddUpdateComponent, {
    width: '420px',
    disableClose: true,
    autoFocus: false,
    panelClass: 'ynex-dialog',
    data: {
      mode: 'view',
      value: sensor
    }
  });

}
  edit(st: SensorResponseDTO) {
    const dialogRef = this.dialog.open(SensorManagementAddUpdateComponent, {
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
        this.loadSensors(this.currentUser.fkBusiness);
      }
    });
  }

  delete(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {
        title: 'Delete Sensor',
        message:
          'Deleting this Sensor will remove it permanently. This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        variant: 'danger',
        showActions: true
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this._sensorService.deleteSensor(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success('Sensor deleted');
            this.loadSensors(this.currentUser.fkBusiness);
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

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredSensors.length) {
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

 goToDevice() {
  this.router.navigate(
    ['/core/device-management'],
    {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: this.fkSection,
        fkOffice : this.fkOffice
      }
    }
  );
}

    goToFloor() {
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
