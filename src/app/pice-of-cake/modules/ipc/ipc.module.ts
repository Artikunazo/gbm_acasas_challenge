import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowChartComponent } from './components/show-chart/show-chart.component';
import { MainComponent } from './components/main/main.component';
import { IpcService } from './services/ipc.service';
import { HighchartsChartModule } from 'highcharts-angular';
// import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ShowChartComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    // NgChartsModule
    HighchartsChartModule
  ],
  providers: [
    IpcService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})
export class IpcModule { }
