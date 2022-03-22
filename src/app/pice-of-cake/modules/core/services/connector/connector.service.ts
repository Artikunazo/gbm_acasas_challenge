import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(
    private _http: HttpClient
  ) { }

  mGet(url: string): Observable<Object> {
    if(!url){
      throw new Error('Url is required');
    }
    return this._http.get(url);
  }
}
