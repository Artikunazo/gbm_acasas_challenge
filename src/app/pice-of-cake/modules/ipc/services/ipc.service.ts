import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ConnectorService } from '../../core/services/connector/connector.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IIpc } from '../models/ipc.model';
import { format, parseISO } from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class IpcService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(
    private _connectorService: ConnectorService
  ) {}

  /**
   * Method to get the data from the API
   */
  getIpcData(): Observable<IIpc[]> {
    return this._connectorService.mGet(this.apiUrl)
    .pipe(
      map((data: any) => {
        // Call clearData to clean duplicates on the data array
        return this.clearData(data);
      })
    );
  }

  /**
   * Method to clear duplicates on the data array
   * @param data Data to clean
   * @returns Same data type but without duplicates
   */
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

  /**
   * Method to get the group of data from the chartData
   * @param data 
   * @param param the param to get the value
   * @returns Array of values
  */
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
