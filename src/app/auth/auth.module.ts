import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RentalService} from '../rental/shared/rental.service';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [RentalService]
})
export class AuthModule {
}
