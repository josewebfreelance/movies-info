import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgHttpLoaderModule} from "ng-http-loader";
import {AppHttpInterceptor} from "./shared/services/app-http.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
