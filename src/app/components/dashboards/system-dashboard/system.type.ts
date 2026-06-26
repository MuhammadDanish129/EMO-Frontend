export interface SuperAdminDashboardResponseDTO {
  counts: DashboardCountDTO;
  // officeStatus: OfficeStatusDTO;
  businessWiseSummary: BusinessWiseDashboardDTO[];
  // recentActivities: RecentActivityDTO[];
}

export interface DashboardCountDTO {
  totalBusinesses: number;
  totalFacilities: number;
  totalBuildings: number;
  totalFloors: number;
  totalSections: number;
  totalOffices: number;
}

// export interface OfficeStatusDTO {
//   activeOffices: number;
//   inactiveOffices: number;
//   occupiedOffices: number;
//   vacantOffices: number;
//   occupiedPercentage: number;
//   vacantPercentage: number;
// }

export interface BusinessWiseDashboardDTO {
  businessId: string;
  businessName: string;
  facilityCount: number;
  buildingCount: number;
  floorCount: number;
  sectionCount: number;
  officeCount: number;
  activeOfficeCount: number;
  occupiedOfficeCount: number;
  vacantOfficeCount: number;
  devicesCount: number;
  sensorsCount: number;
}

// export interface RecentActivityDTO {
//   type: string;
//   title: string;
//   businessName: string;
//   createdAt: string;
// }
