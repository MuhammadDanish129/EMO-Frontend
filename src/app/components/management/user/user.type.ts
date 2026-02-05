export interface UserRequestDTO {
  userId?: string;
  name: string;
  // userCurrentStatus: string;
  username: string;
  userPassword?: string;
  userPhoneNo: string;
  fkSubUserType: string;
  isActive: boolean;
  fkGender: string;
  isImageChanged: boolean;
  imageBase64?: string;
  fkHandler?:string | null;
  fkBusiness?:string | null;
}
export interface UserResponseDTO {
  userId: string;
  name: string;
  username: string;
  userPhone: string;
  fkSubUserType: string;
  subUserTypeName: string;
  subUserTypeLevel: number;
  genderName: string;
  isActive: boolean;
  imageBase64: string;
  fkHandler?:string;
  fkBusiness?:string;
  handlerName?:string;
  businessName?:string;
}
