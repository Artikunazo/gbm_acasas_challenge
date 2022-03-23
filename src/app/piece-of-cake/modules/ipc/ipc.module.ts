import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShowChartComponent } from './components/show-chart/show-chart.component';
import { MainComponent } from './components/main/main.component';
import { IpcService } from './services/ipc.service';
import { HighchartsChartModule } from 'highcharts-angular';

import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ShowChartComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    IpcService,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})
export class IpcModule { }
