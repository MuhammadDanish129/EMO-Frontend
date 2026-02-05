export interface UserTypeResponseDTO {
  userTypeId: string;   // GUID
  userTypeName: string;
  userTypeLevel : number;
  isActive: boolean;
}
export interface UserTypeRequestDTO {
  userTypeId?: string;   // GUID,
  userTypeName: string;
  userTypeLevel : number;
  isActive: boolean
}
export interface UserTypeHierarchyRequestDTO{
  userTypeId: string;
  userTypeLevel: number;
}
