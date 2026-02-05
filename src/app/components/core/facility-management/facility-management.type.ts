export interface FacilityResponseDTO{
    facilityId: string;
    facilityName: string;
    fkBusiness: string;
    businessName: string;
    facilityaddress: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}

export interface FacilityRequestDTO{
    facilityId?: string;
    facilityName: string
    fkBusiness?: string;
    facilityaddress: string;
    isActive: boolean;
}