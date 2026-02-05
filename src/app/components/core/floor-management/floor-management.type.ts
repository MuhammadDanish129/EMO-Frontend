export interface FloorResponseDTO{
    floorId: string;
    floorName: string;
    fkBuilding: string;
    buildingName: string;
    createdAt: string;
    floorNo : number;
    updatedAt: string;
    isActive: boolean;
}

export interface FloorRequestDTO{
    floorId?: string;
    floorName: string;
    floorNo : number;
    fkBuilding?: string;
    isActive: boolean;
}