export interface DeviceResponseDTO {
  deviceId: string;
  deviceName: string;
  deviceMacAddress: string;
  fkBusiness: string;
  fkOffice : string;
  officeName: string;
  businessName: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface DeviceRequestDTO {
  deviceId?: string;
  deviceName: string;
  fkOffice : string;
  deviceMacAddress: string;
  fkBusiness?: string;
  isActive: boolean;
}
