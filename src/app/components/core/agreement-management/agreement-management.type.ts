export interface AgreementResponseDTO {
  agreementId: string;
  agreementName: string;
  agreementDescription: string;

  agreementStartDate: string;
  agreementEndDate: string;

  createdAt: string;
  updatedAt: string;
  isActive: boolean;

  fkTenant: string;
  tenantName: string;

  fkOffice: string;
  officeName: string;
}

export interface AgreementRequestDTO {
  agreementId?: string;
  agreementName: string;
  agreementDescription: string;
  agreementStartDate: string;
  agreementEndDate: string;
  fkTenant: string;
  fkOffice: string;
  isActive: boolean;
}
