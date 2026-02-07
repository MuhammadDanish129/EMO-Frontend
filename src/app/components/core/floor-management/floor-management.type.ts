export interface FloorResponseDTO{
    floorId: string;
    floorName: string;
    fkBuilding: string;
    buildingName: string;
    createdAt: string;
    floorNo : number;
    fkBusiness: string;
    businessName: string;
    updatedAt: string;
    isActive: boolean;
}

export interface FloorRequestDTO{
    floorId?: string;
    floorName: string;
    floorNo : number;
    fkBusiness?: string;
    fkBuilding?: string;
    isActive: boolean;
}