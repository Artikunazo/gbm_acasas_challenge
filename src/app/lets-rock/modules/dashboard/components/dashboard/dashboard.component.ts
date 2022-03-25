import { Component, OnInit } from '@angular/core';
import { IUser } from '@app/lets-rock/modules/login/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user!: IUser;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');

    if(!user.username){
      this._router.navigate(['/challenges/lets-rock/']);
    }

    this.user = user;
  }

  logout (): void {
    sessionStorage.removeItem('user');
    this._router.navigate(['/challenges/lets-rock/']);
  }

}
