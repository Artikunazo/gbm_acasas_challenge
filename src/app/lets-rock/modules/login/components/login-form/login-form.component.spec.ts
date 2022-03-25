import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@lets-rock-modules/login/services/login/login.service';
import { LoginFormComponent } from './login-form.component';
import { IUser } from '../../models/user.model';
import { Observable, of } from 'rxjs';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let routerSpy: jasmine.SpyObj<Router>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let formBuilderSpy: jasmine.SpyObj<FormBuilder>;
  let loginFormMock: FormGroup;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['saveUser', 'login']);
    formBuilderSpy = jasmine.createSpyObj('FormBuilder', ['group']);
    
    loginFormMock = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    formBuilderSpy.group.and.returnValue(loginFormMock);

    component = new LoginFormComponent(formBuilderSpy, loginServiceSpy, routerSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should loginFOrm to be defined', () => {
    expect(component.loginForm).toBeDefined();
  });

  it('Should not call send request login when form is invalid', () => {
    
    component.sendLogin(loginFormMock);

    expect(loginServiceSpy.login).not.toHaveBeenCalled();
  });

  it('Should not call send request login when form is invalid', () => {
    loginServiceSpy.login.and.callFake(() => of());
    loginFormMock.get('username')?.setValue('test');
    loginFormMock.get('password')?.setValue('1234');

    component.sendLogin(loginFormMock);

    expect(loginServiceSpy.login).toHaveBeenCalled();
  });

  it('Should redirect when user is logged', () => {
    loginServiceSpy.login.and.callFake(() => of({
        username: 'test',
        role: 'admin'
      } as unknown as IUser)
    );

    loginFormMock.get('username')?.setValue('test');
    loginFormMock.get('password')?.setValue('1234');

    component.sendLogin(loginFormMock);

    expect(loginServiceSpy.login).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/challenges/lets-rock/dashboard']);
  });
});
