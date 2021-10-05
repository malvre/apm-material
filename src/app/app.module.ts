import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './core/auth/auth.interceptor';

const maskConfig: Partial<IConfig> = {
  validation: false,
  showMaskTyped: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
