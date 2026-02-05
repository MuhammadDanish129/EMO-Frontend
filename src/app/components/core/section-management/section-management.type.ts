export interface SectionResponseDTO{
    sectionId: string;
    sectionName: string;
    fkFloor: string;
    buildingName: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}

export interface SectionRequestDTO{
    sectionId?: string;
    sectionName: string;
    fkFloor?: string;
    isActive: boolean;
}