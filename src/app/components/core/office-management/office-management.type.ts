export interface OfficeResponseDTO{
    officeId: string;
    officeName: string;
    fkSection: string;
    sectionName: string;
    createdAt: string;
    isOcuppied : boolean;
    updatedAt: string;
    isActive: boolean;
}

export interface OfficeRequestDTO{
    officeId?: string;
    officeName: string;
    fkSection?: string;
    isActive: boolean;
}

