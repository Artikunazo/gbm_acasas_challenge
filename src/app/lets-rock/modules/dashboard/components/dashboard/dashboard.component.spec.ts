import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let routerSpy: Router;

  beforeEach( () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    component = new DashboardComponent(routerSpy); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should to redirect to login when user is logout', () => {
    component.logout();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/challenges/lets-rock/']);
    expect(sessionStorage.getItem('user')).toBeNull();
  });

  it('Should to redirect to login when user not exist', () => {
    component.ngOnInit();

    sessionStorage.removeItem('user');

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/challenges/lets-rock/']);
  });
});
