import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ConnectorService } from '../../core/services/connector/connector.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IIpc } from '../models/ipc';
import { format, parseISO } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor(
    private _connectorService: ConnectorService
  ) { }

  getIpcData(): Observable<any> {
    return this._connectorService.mGet(`${environment.apiUrl}`)
    .pipe(
      map((data: any) => {
        // Clear duplicates on the data array
        return this.clearData(data);
      })
    );
  }

  clearData(data: IIpc[]): IIpc[] {
    
    if(!data.length){
      return data;
    }

    const prices = data.map((ipc: IIpc) => {
      return ipc.price;
    }) as number[];

    const dataCleaned = Array.from(new Set(prices)).map(item => {
      return data.find((ipc: IIpc) => {
        return ipc.price === item;
      })
    }) as IIpc[];

    return dataCleaned;
  }

  getParamGroup(data: IIpc[], param: string): Array<number|string> {
    const result = data.map((item: IIpc) => {
      
      switch (param) {
        case 'categories':
          return format(parseISO(item.date), 'hh:mm:ss');

        case 'series':
          return item.price;
        
        default:
          return [''];
      }
    }) as Array<number|string>;

    return result;
  }
}
