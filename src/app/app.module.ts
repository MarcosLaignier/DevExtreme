import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import {AuthService, ScreenService, AppInfoService, EstadoCidadeService} from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { EstadoCidadeModule} from "./shared/components";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    EstadoCidadeModule,
    HttpClientModule,

  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    EstadoCidadeService
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
