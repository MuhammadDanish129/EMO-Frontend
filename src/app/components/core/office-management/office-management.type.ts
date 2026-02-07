export interface OfficeResponseDTO{
    officeId: string;
    officeName: string;
    fkSection: string;
    sectionName: string;
    createdAt: string;
    isOcuppied : boolean;
    fkBusiness: string;
    businessName: string;
    updatedAt: string;
    isActive: boolean;
}

export interface OfficeRequestDTO{
    officeId?: string;
    officeName: string;
    fkSection?: string;
    fkBusiness?: string;
    isActive: boolean;
}

