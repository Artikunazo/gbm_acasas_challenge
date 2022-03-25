import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogin } from '../../models/login.model';
import { IUser } from '../../models/user.model';
import { LoginService } from '@lets-rock-modules/login/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm!: FormGroup;
  public attemptsLogin: number = 0;
  public isLoading: boolean = false;
  public isLoginError: boolean = false;
  public isUserSaved: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
  ) {
    this.initForm();
  }

  /**
   * Initialize form with username and password fields
   * The username and password fields form are required
   */
  initForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');

    if(user.username) {
      this.redirect('/challenges/lets-rock/dashboard');
    }
  }

  /**
   * Method to validate form and get response login request
   * It will show a loading spinner while the request is being processed
   * If the request is successful, it will redirect to dashboard page
   * If the request is not successful, it will show an error message
   * After 3 attempts,  it will show another error message
   * @param form FormGroup with username and password fields
   */
  sendLogin(form: any): void {
    this.isLoading = true;

    if(!form.valid) {
     this.isLoading = false;
     return;
    }

    this.sendRequest(form.value).subscribe({
      next: (response:IUser) => {

        this._loginService.saveUser(response);
        this.isLoginError = true;
        this.isLoading = false;
        this.attemptsLogin++;
        this.redirect('/challenges/lets-rock/dashboard');
      },
      error: (error: any) => {
        
        this.isLoginError = true;
        this.isLoading = false;
        this.attemptsLogin++;
      }
    });

  }

  /**
   * Method to send login request to login service
   * @param data Data to send to the service
   * @returns Observable with the response of the request and IUser model
   */
  sendRequest(data: ILogin): Observable<IUser> {
    return this._loginService.login(data.username, data.password);
  }

  /**
   * Method to redirect to a specific route
   * @param url Url to redirect
   */
  redirect (url: string): void {
    this._router.navigate([url]);
  }

}
