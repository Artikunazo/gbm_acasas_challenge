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

  sendLogin(form: any): void {
    this.isLoading = true;

    if(!form.valid) {
     this.isLoading = false;
     return;
    }

    this.sendRequest(form.value).subscribe({
      next: (response: IUser) => {
        this._loginService.saveUser(response);
        this.redirect('/challenges/lets-rock/dashboard');
        
      },
      error: (error: any) => {
        this.isLoginError = true;
        this.isLoading = false;
        this.attemptsLogin++;
      }
    });

  }

  sendRequest(data: ILogin): Observable<IUser> {
    return this._loginService.login(data.username, data.password);
  }

  redirect (url: string): void {
    this._router.navigate([url]);
  }

}
