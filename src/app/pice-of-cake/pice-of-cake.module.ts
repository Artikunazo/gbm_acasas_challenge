import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PiceOfCakeRoutingModule } from './pice-of-cake-routing.module';
import { IpcModule } from './modules/ipc/ipc.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IpcModule,
    CoreModule,
    PiceOfCakeRoutingModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PiceOfCakeModule { }
