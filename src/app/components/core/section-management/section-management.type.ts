export interface SectionResponseDTO{
    sectionId: string;
    sectionName: string;
    fkFloor: string;
    buildingName: string;
    fkBusiness: string;
    businessName: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}

export interface SectionRequestDTO{
    sectionId?: string;
    sectionName: string;
    fkFloor?: string;
    fkBusiness?: string;
    isActive: boolean;
}