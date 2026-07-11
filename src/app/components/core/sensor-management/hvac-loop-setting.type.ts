export interface HvacLoopSettingRequestDTO {
  hvacLoopSettingId?: string;
  fkSensor: string;
  loopEnabled: boolean;
  loopOnSeconds: number;
  loopOffSeconds: number;
  isActive: boolean;
}

export interface HvacLoopSettingResponseDTO {
  hvacLoopSettingId: string;
  fkSensor: string;
  sensorName?: string;
  utilityName?: string;
  loopEnabled: boolean;
  loopOnSeconds: number;
  loopOffSeconds: number;
  loopStartedAt?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
