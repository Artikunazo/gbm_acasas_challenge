import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    MainComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainComponent
  ],
})
export class LoginModule { }
