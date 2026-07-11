export interface OfficeResponseDTO {
  officeId: string;
  officeName: string;
  fkSection: string;
  sectionName: string;
  createdAt: string;
  isOcuppied: boolean;
  fkBusiness: string;
  businessName: string;
  updatedAt: string;
  isActive: boolean;

  openingTime: string;
  closingTime: string;
  workingDays: string;
  is24Hours: boolean;
  afterHoursAlertEnabled: boolean;
}

export interface OfficeRequestDTO {
  officeId?: string;
  officeName: string;
  fkSection?: string;
  fkBusiness?: string;
  isActive: boolean;
  isOcuppied?: boolean;

  openingTime?: string;
  closingTime?: string;
  workingDays?: string;
  is24Hours?: boolean;
  afterHoursAlertEnabled?: boolean;
}
