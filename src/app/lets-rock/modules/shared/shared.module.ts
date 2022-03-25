import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ShowAlertComponent } from './components/show-alert/show-alert.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ShowAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
