export interface UtilityResponseDTO{
    utilityId: string;
    utilityName: string;
    isActive: boolean;
}

export interface UtilityRequestDTO{
    utilityId?: string;
    utilityName: string;
    isActive: boolean;
}
