import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';

import { DashboardRoutingModule } from './dashboard-routing.module'

@NgModule({
  declarations: [
    MainComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class DashboardModule { }
