export interface BuildingResponseDTO{
    buildingId: string;
    buildingName: string;
    fkFacility: string;
    facilityName: string;
    createdAt: string;
    updatedAt: string;
    fkBusiness: string;
    businessName: string;
    isActive: boolean;
}

export interface BuildingRequestDTO{
    buildingId?: string;
    buildingName: string;
    fkBusiness?: string;
    fkFacility: string;
    isActive: boolean;
}