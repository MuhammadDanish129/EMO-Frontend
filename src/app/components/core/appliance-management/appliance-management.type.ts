export interface ApplianceRequestDTO {
  applianceId?: string;
  applianceName: string;
  companyName: string;
  modelNumber: string;
  fkBusiness?: string;
  ratedVoltage: number;
  minCurrent: number;
  maxCurrent: number;
  minPower: number;
  maxPower: number;
  standbyPower: number;
  normalPowerFactor: number;
  description: string;

  // Optimization metadata used by dashboard suggestions.
  isShiftable: boolean;
  isCritical: boolean;
  priorityLevel: string;
  normalOperatingHours: string;
  canAutoControl: boolean;
  allowedShiftStartTime: string;
  allowedShiftEndTime: string;
  allowOptimizationSuggestions: boolean;
  minimumOnDurationMinutes: number;
  minimumOffDurationMinutes: number;

  isDefault: boolean;
  isCustom: boolean;
  isActive: boolean;
  fkUtility: string;
}

export interface ApplianceResponseDTO {
  applianceId: string;
  applianceName: string;
  companyName: string;
  modelNumber: string;
  fkBusiness?: string;
  businessName?: string;
  fkDefaultAppliance?: string;
  ratedVoltage: number;
  minCurrent: number;
  maxCurrent: number;
  minPower: number;
  maxPower: number;
  standbyPower: number;
  normalPowerFactor: number;
  description: string;

  isShiftable: boolean;
  isCritical: boolean;
  priorityLevel: string;
  normalOperatingHours: string;
  canAutoControl: boolean;
  allowedShiftStartTime: string;
  allowedShiftEndTime: string;
  allowOptimizationSuggestions: boolean;
  minimumOnDurationMinutes: number;
  minimumOffDurationMinutes: number;

  isDefault: boolean;
  isCustom: boolean;
  fkUtility: string;
  utilityName: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface AssignSensorApplianceDTO {
  fkSensor: string;
  fkAppliance: string;
  remarks: string;
  isActive: boolean;
}

export interface UpdateSensorApplianceDTO {
  sensorApplianceId: string;
  fkSensor: string;
  fkAppliance: string;
  remarks: string;
  isActive: boolean;
}

export interface SensorApplianceResponseDTO {
  sensorApplianceId: string;
  fkSensor: string;
  sensorName: string;
  fkAppliance: string;
  applianceName: string;
  applianceType: string;
  companyName: string;
  modelNumber: string;
  fkBusiness: string;
  fkUtility: string;
  utilityName: string;
  ratedVoltage: number;
  minCurrent: number;
  maxCurrent: number;
  minPower: number;
  maxPower: number;
  standbyPower: number;
  normalPowerFactor: number;
  isShiftable: boolean;
  isCritical: boolean;
  priorityLevel: string;
  normalOperatingHours: string;
  canAutoControl: boolean;
  allowedShiftStartTime: string;
  allowedShiftEndTime: string;
  allowOptimizationSuggestions: boolean;
  minimumOnDurationMinutes: number;
  minimumOffDurationMinutes: number;
  remarks: string;
  assignedAt: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface ApplianceStatusDTO {
  sensorId: string;
  sensorName: string;
  applianceId: string;
  applianceName: string;
  applianceType: string;
  companyName: string;
  modelNumber: string;
  utilityName: string;
  actualCurrent: number;
  actualPower: number;
  actualPowerFactor: number;
  minCurrent: number;
  maxCurrent: number;
  minPower: number;
  maxPower: number;
  standbyPower: number;
  normalPowerFactor: number;
  status: string;
  alertMessage: string;
  lastReadingAt: string;
}

export interface ApplianceSelectOption extends ApplianceResponseDTO {
  displayName: string;
}


export interface SensorAssignableAppliancesDTO {
  fkSensor: string;
  sensorName: string;
  fkBusiness: string;
  businessName: string;
  fkUtility: string;
  utilityName: string;
  appliances: ApplianceResponseDTO[];
}
