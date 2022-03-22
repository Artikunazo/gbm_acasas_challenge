import { IDate }  from './ipc-date.model';
import { IChange } from './ipc-change.model';
import { IPercentage } from './ipc-percentage.model';
import { IVolume } from './ipc-volume.model';

export interface IIpc {
  date: keyof IDate;
  price: number;
  percentageChange: keyof IPercentage;
  volume: keyof IVolume;
  change: keyof IChange;
}
