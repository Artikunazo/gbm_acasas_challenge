import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

import { ConnectorService } from './services/connector/connector.service';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ConnectorService
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
 }
