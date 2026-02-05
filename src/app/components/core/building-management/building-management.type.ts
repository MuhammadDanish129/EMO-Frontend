export interface BuildingResponseDTO{
    buildingId: string;
    buildingName: string;
    fkFacility: string;
    facilityName: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}

export interface BuildingRequestDTO{
    buildingId?: string;
    buildingName: string;
    fkFacility: string;
    isActive: boolean;
}