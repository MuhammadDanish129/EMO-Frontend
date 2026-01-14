import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../shared/services/auth.service';
import { FacilityService } from './facility.service';

@Component({
  selector: 'app-facility',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facility.component.html',
})
export class FacilityComponent implements OnInit {

  showForm = false;
  searchText = '';

  pageIndex = 0;
  pageSize = 5;

  facilities: FacilityRow[] = [
    { id: 1, businessName: 'Alpha Traders', ownerName: 'Awais Khan', startDate: '2019-04-12', employees: 18, city: 'Karachi', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 2, businessName: 'Beta Solutions', ownerName: 'Sara Ahmed', startDate: '2020-08-20', employees: 12, city: 'Lahore', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 3, businessName: 'Gamma Logistics', ownerName: 'Imran Malik', startDate: '2021-01-15', employees: 25, city: 'Islamabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 4, businessName: 'Delta Foods', ownerName: 'Kiran Shah', startDate: '2018-09-05', employees: 40, city: 'Faisalabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 5, businessName: 'Epsilon Tech', ownerName: 'Zeeshan Ali', startDate: '2022-03-30', employees: 8, city: 'Multan', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 1, businessName: 'Alpha Traders', ownerName: 'Awais Khan', startDate: '2019-04-12', employees: 18, city: 'Karachi', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 2, businessName: 'Beta Solutions', ownerName: 'Sara Ahmed', startDate: '2020-08-20', employees: 12, city: 'Lahore', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 3, businessName: 'Gamma Logistics', ownerName: 'Imran Malik', startDate: '2021-01-15', employees: 25, city: 'Islamabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 4, businessName: 'Delta Foods', ownerName: 'Kiran Shah', startDate: '2018-09-05', employees: 40, city: 'Faisalabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 5, businessName: 'Epsilon Tech', ownerName: 'Zeeshan Ali', startDate: '2022-03-30', employees: 8, city: 'Multan', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 1, businessName: 'Alpha Traders', ownerName: 'Awais Khan', startDate: '2019-04-12', employees: 18, city: 'Karachi', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 2, businessName: 'Beta Solutions', ownerName: 'Sara Ahmed', startDate: '2020-08-20', employees: 12, city: 'Lahore', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 3, businessName: 'Gamma Logistics', ownerName: 'Imran Malik', startDate: '2021-01-15', employees: 25, city: 'Islamabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 4, businessName: 'Delta Foods', ownerName: 'Kiran Shah', startDate: '2018-09-05', employees: 40, city: 'Faisalabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 5, businessName: 'Epsilon Tech', ownerName: 'Zeeshan Ali', startDate: '2022-03-30', employees: 8, city: 'Multan', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 1, businessName: 'Alpha Traders', ownerName: 'Awais Khan', startDate: '2019-04-12', employees: 18, city: 'Karachi', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 2, businessName: 'Beta Solutions', ownerName: 'Sara Ahmed', startDate: '2020-08-20', employees: 12, city: 'Lahore', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
    { id: 3, businessName: 'Gamma Logistics', ownerName: 'Imran Malik', startDate: '2021-01-15', employees: 25, city: 'Islamabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 4, businessName: 'Delta Foods', ownerName: 'Kiran Shah', startDate: '2018-09-05', employees: 40, city: 'Faisalabad', status: 'Active', statusClass: 'bg-success/10 text-success' },
    { id: 5, businessName: 'Epsilon Tech', ownerName: 'Zeeshan Ali', startDate: '2022-03-30', employees: 8, city: 'Multan', status: 'Inactive', statusClass: 'bg-danger/10 text-danger' },
  ];

  filteredFacilities: FacilityRow[] = [];

  constructor(private snack: MatSnackBar, private dialog: MatDialog, private _facilityService: FacilityService) {
    this.filteredFacilities = [...this.facilities];
  }
  ngOnInit(): void {
    this._facilityService.getUsers().subscribe(data => {
      // console.log(data);
    });
  }

  get pagedFacilities(): FacilityRow[] {
    const start = this.pageIndex * this.pageSize;
    return this.filteredFacilities.slice(start, start + this.pageSize);
  }

  get pageEnd(): number {
    return Math.min(
      (this.pageIndex + 1) * this.pageSize,
      this.filteredFacilities.length
    );
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.filteredFacilities.length / this.pageSize) },
      (_, i) => i
    );
  }

  trackById(_: number, row: FacilityRow) {
    return row.id;
  }

  searchFacilities() {
    const term = this.searchText.toLowerCase().trim();

    this.filteredFacilities = !term
      ? [...this.facilities]
      : this.facilities.filter(f =>
        f.businessName.toLowerCase().includes(term) ||
        f.ownerName.toLowerCase().includes(term) ||
        f.city.toLowerCase().includes(term)
      );

    this.pageIndex = 0;
  }

  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredFacilities.length) {
      this.pageIndex++;
    }
  }

  prevPage() {
    if (this.pageIndex > 0) this.pageIndex--;
  }

  goToPage(i: number) {
    this.pageIndex = i;
  }

  addFacilityClick() {
    this.snack.open('Add Facility clicked', 'OK', { duration: 1500 });
  }

  edit(row: FacilityRow) {
    this.snack.open(`Edit Facility #${row.id}`, 'OK', { duration: 1500 });
  }

  openView(row: FacilityRow) {
    this.snack.open(`View Facility #${row.id}`, 'OK', { duration: 1500 });
  }

  deleteFacility(id: number) {
    this.facilities = this.facilities.filter(f => f.id !== id);
    this.searchFacilities();
    this.snack.open('Facility deleted', 'OK', { duration: 1500 });
  }
}

interface FacilityRow {
  id: number;
  businessName: string;
  ownerName: string;
  startDate: string;
  employees: number;
  city: string;
  status: 'Active' | 'Inactive';
  statusClass: string;
}
