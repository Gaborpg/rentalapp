import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {RentalModule} from './rental/rental.module';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {RentalService} from './rental/shared/rental.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RentalModule
  ],
  providers: [RentalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
