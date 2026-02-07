export interface TenantResponseDTO {
  tenantId: string;
  tenantName: string;
  tenantUserName: string;
  tenantEmail: string;
}


export interface AddTenenatDTO{

  name: string;
  userName: string;
  userPassword: string;
  userPhoneNo: string;
  isActive : boolean;
  fkGender: string;
  fkHandler?:string | null;
  fkBusiness?:string | null;
}
