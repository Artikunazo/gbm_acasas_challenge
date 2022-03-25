import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetsRockRoutingModule } from './lets-rock-routing.module';
import { LoginModule } from './modules/login/login.module';
import { CoreModule } from './modules/core/core.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LetsRockRoutingModule,
    LoginModule,
    CoreModule,
    DashboardModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class LetsRockModule { }
