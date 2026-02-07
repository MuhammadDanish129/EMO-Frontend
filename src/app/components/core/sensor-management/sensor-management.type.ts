export interface SensorResponseDTO{
    sensorId: string;
    sensorName: string;
    modebusAddress: string;
    meterId: string;
    serialAddress: string;
    fkOffice: string;
    fkDevice: string;
    fkutility: string;
    
    officeName: string;
    deviceName: string;
    utilityName: string;
}

export interface SensorRequestDTO{
    sensorId?: string;
    sensorName: string;
    modebusAddress: string;
    meterId: string;
    serialAddress: string;

    fkOffice: string;
    fkDevice: string;
    fkutility: string;
}
