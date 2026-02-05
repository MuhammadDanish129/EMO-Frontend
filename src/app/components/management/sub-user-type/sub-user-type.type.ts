export interface SubUserTypeResponseDTO {
  subUserTypeId: string;   // GUID
  subUserTypeName: string;
  isActive: boolean;
  fkUserTypeId: string;
  subUserTypeLevel: number;
  userTypeName: string;

}
export interface SubUserTypeRequestDTO {
  subUserTypeId?: string;   // GUID,
  subUserTypeName: string;
  isActive: boolean;
  fkUserTypeId: string;
  // userId: string;

}
export interface SubUserTypeHierarchyRequestDTO {
  subUserTypeId: string;
  subUserTypeLevel: number;
}
