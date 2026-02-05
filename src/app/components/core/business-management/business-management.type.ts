export interface BusinessRequestDTO{
  businessId?: string;
  businessName: string;
  businessEmail: string;
  businessContact: string;
  isActive: boolean;
  fkUser: string;
}


export interface AddBusinessAndAdminRequestDTO{
  businessId?: string;
  businessName: string;
  businessEmail: string;
  businessContact: string;
  isActive: boolean;
  fkUser: string;
  userId?: string;
  name: string;
  // userCurrentStatus: string;
  username: string;
  userPassword?: string;
  userPhoneNo: string;
  fkSubUserType: string;
  BusinessisActive: boolean;
  fkGender: string;
  isImageChanged: boolean;
  imageBase64?: string;
  fkHandler?:string | null;
  fkBusiness?:string | null;
}


export interface BusinessResponseDTO{
  businessId: string;
  businessName: string;
  isActive: boolean;
  businessEmail: string;
  businessContact: string;
  userName: string;
  fkUser: string;
}