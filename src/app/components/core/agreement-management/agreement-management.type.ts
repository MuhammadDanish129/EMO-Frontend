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
export interface RemoveOfficeFromAgreementRequestDTO {
  agreementId: string;
  officeId: string;
}

export interface ContactPersonDTO
{
  contactPersonId: string;
  contactPersonName:  string;
  contactPersonPhone:  string;
  contactPersonEmail:  string;
  fkAgreement: string;
}

export interface UpdateContactPersonDTO
{
  contactPersonId: string;
  contactPersonName:  string;
  contactPersonPhone:  string;
  contactPersonEmail:  string;
  isActive: boolean;
  fkAgreement: string;
}

