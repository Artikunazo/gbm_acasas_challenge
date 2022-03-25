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

  /**
   * Get user info from session storage
   * If the sessionStorage is empty, redirect to login page
   */
  getUser(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');

    if(!user.username){
      this.logout();
    }

    this.user = user;
  }

  /**
   * Logout user removing user info from session storage
   * And redirecting to login page
   */
  logout (): void {
    sessionStorage.removeItem('user');
    this._router.navigate(['/challenges/lets-rock/']);
  }

}
