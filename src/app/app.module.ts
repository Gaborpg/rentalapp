import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {RentalModule} from './rental/rental.module';
import {RentalService} from './rental/shared/rental.service';
import {AuthModule} from './auth/auth.module';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    AuthModule
  ],
  providers: [RentalService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
