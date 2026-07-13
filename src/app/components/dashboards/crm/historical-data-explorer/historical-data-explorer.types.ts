import { DashboardLevel } from '../energy-deep-dive/energy-deep-dive.types';

export type HistoricalInterval = '15minute' | 'hour' | 'day' | 'month';

export interface HistoricalDataPoint {
  bucketStartUtc: string;
  bucketEndUtc: string;
  bucketStartLocal: string;
  bucketEndLocal: string;
  label: string;
  energyKwh: number;
  reactiveEnergyKvarh: number;
  averageActivePowerW: number;
  maximumActivePowerW: number;
  averageVoltageV: number;
  averageCurrentA: number;
  averagePowerFactor: number;
  averageFrequencyHz: number;
  sampleCount: number;
  resetCount: number;
  rejectedSpikeCount: number;
}

export interface HistoricalDataResponse {
  level: DashboardLevel;
  entityId: string;
  entityName: string;
  interval: HistoricalInterval;
  timeZone: string;
  fromUtc: string;
  toUtc: string;
  sensorCount: number;
  pointCount: number;
  points: HistoricalDataPoint[];
}
