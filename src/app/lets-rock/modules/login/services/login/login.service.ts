import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ConnectorService } from '@lets-rock-modules/core/services/connector/connector.service';
import { environment } from '@src/environments/environment';
import { IUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginApi = environment.letsRockApi;

  constructor(private _connectorService: ConnectorService) {}

  /**
   * Method to send request to API using connector service
   * @returns Observable with an Object as response
   */
  sendGetRequest(): Observable<Object> {
    return this._connectorService.mGet(this.loginApi).pipe(delay(1000));
  }

  /**
   * Method to make login request
   * @param username Username to login
   * @param password Password of the user to login
   * @returns Observable with user info if login is successful 
   * || an error message if login is not successful
   */
  login(username: string, password: string): Observable<IUser> {
    if (!username || !password) {
      return throwError(() => 'Username or password is empty');
    }

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

  /**
   * Method to save info about user in session storage
   * @param user User info to save in session storage
   */
  saveUser(user: IUser): void {
    const { username, role } = user || {};
    sessionStorage.setItem('user', JSON.stringify({ username, role }));
  }
}
