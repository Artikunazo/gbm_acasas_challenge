import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ConnectorService } from '../../core/services/connector/connector.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IOhlc } from '../models/ohlc';
import { IIpc } from '../models/ipc';
import { parseISO } from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor(
    private _connectorService: ConnectorService
  ) { }

  getIpcData(): Observable<Object> {
    return this._connectorService.mGet(`${environment.apiUrl}`)
    .pipe(
      map(
        (data: any) => {
          return {
            initialDate: data[0].date,
            collection: data.map((item: IIpc) => {
              return {
                x: +parseISO(item.date),
                c: item.change,
                h: item.volume,
                l: item.price,
                o: item.percentageChange
              }
            })
          }

        }
      )
    );
  }
}
