export interface SensorResponseDTO{
    sensorId: string;
    sensorName: string;
    meterId: string;
    serialAddress: string;
    fkDevice: string;
    fkutility: string;
    deviceName: string;
    utilityName: string;
    standbyAutoOff: boolean;
}

export interface SensorRequestDTO{
    sensorId?: string;
    sensorName: string;
    meterId: string;
    serialAddress: string;
    fkDevice: string;
    fkutility: string;
    standbyAutoOff: boolean;
}
