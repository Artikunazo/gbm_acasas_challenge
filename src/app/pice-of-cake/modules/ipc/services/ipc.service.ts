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
        // Clear duplicates data
        return Array.from(
          new Set(
            data.map((item: IIpc) => {
              return item.price;
            }))
          )
        .map(item => {
          return data.find((a: IIpc) => {
            return a.price === item;
          })
        });
      })
    )
  }

  getData(data: IIpc[], param: string): Array<any> {
    const result = data.map((item: IIpc) => {
      
      switch (param) {
        case 'categories':
          return format(parseISO(item.date), 'hh:mm:ss');

        case 'series':
          return item.price;
        
          default:
            return '';
      }
    });

    return result;
  }
}
