import { ConnectorService } from '@lets-rock-modules/core/services/connector/connector.service';
import { LoginService } from './login.service';
import { of, throwError } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  let connectorServiceSpy: jasmine.SpyObj<ConnectorService>;

  beforeEach(() => {
    connectorServiceSpy = jasmine.createSpyObj('ConnectorService', ['mGet']);
    service = new LoginService(connectorServiceSpy);

    connectorServiceSpy.mGet.and.callFake(() => of({}));
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be send request to API', () => {
    service.sendGetRequest();

    expect(connectorServiceSpy.mGet).toHaveBeenCalled();
  });

  it('Should be send request to API from login method', () => {
    service.login('username', 'password');
    expect(connectorServiceSpy.mGet).toHaveBeenCalled();
  });

  it('Should get response request to API from login method', () => {
    const response = service.login('username', 'password');

    expect(connectorServiceSpy.mGet).toHaveBeenCalled();
    expect(response).toBeTruthy();
  });

  it('Should not call to API when username and password is empty', () => {
    service.login('', '');

    expect(connectorServiceSpy.mGet).not.toHaveBeenCalled();
  });

  it('Should not call to API when username empty', () => {
    service.login('', 'password');

    expect(connectorServiceSpy.mGet).not.toHaveBeenCalled();
  });

  it('Should not call to API when password is empty', () => {
    service.login('username', '');

    expect(connectorServiceSpy.mGet).not.toHaveBeenCalled();
  });

  it('Should save user in session storage', () => {
    service.saveUser({ username: 'username', role: 'role' });
    expect(sessionStorage.getItem('user')).toBeTruthy();
  });
});
