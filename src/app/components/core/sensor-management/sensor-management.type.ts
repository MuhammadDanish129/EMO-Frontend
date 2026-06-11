export interface SensorResponseDTO{
    sensorId: string;
    sensorName: string;
    meterId: string;
    serialAddress: string;
    fkDevice: string;
    fkutility: string;
    deviceName: string;
    utilityName: string;
}

export interface SensorRequestDTO{
    sensorId?: string;
    sensorName: string;
    meterId: string;
    serialAddress: string;
    fkDevice: string;
    fkutility: string;
}
