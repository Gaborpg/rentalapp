import {NgModule} from '@angular/core';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {RentalComponent} from './rental.component';
import {CommonModule} from '@angular/common';
import {RentalService} from './shared/rental.service';
import {RentalDetailComponent} from './rental-detail/rental-detail.component';
import {RentalRoutingModule} from './rental-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {UppercasePipe} from '../core/pipes/uppercase.pipe';
import {MapModule} from '../core/map/map.module';
import {FakedataService} from './shared/fakedata.service';
import {Daterangepicker} from 'ng2-daterangepicker';
import { RentalBookingComponent } from './rental-detail/rental-booking/rental-booking.component';

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalBookingComponent

  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker

],
  providers: [
    FakedataService
  ]
})
export class RentalModule {

}
