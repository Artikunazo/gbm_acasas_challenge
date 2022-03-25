import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { delay, map, } from 'rxjs/operators';
import { ConnectorService } from '@lets-rock-modules/core/services/connector/connector.service';
import { environment } from '@src/environments/environment';
import { IUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginApi = environment.letsRockApi;

  constructor(private _connectorService: ConnectorService) {}

  sendGetRequest(): Observable<any> {
    return this._connectorService.mGet(this.loginApi).pipe(delay(1000));
  }

  login(username: string, password: string): Observable<any> {
    return this.sendGetRequest().pipe(
      map((response: any) => {
        const user = response.filter((user: IUser) => {
          return user.username === username && user.password === password;
        });

        if (!user.length) {
          throw throwError(() => 'User not found');
        }

        return user[0];
      })
    );
  }

  saveUser(user: IUser): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
