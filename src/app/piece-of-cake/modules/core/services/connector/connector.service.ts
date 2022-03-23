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

  /**
   * Method to send request type GET
   * @param url to request
   * @returns Observable<Object> (response in json format)
   */
  mGet(url: string): Observable<Object> {
    if(!url){
      throw new Error('Url is required');
    }
    return this._http.get(url);
  }
}
