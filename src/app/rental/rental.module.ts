import {NgModule} from '@angular/core';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {RentalComponent} from './rental.component';
import {CommonModule} from '@angular/common';
import {RentalService} from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {RentalRoutingModule} from './rental-routing.module';

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
  ],
  imports: [
    CommonModule,
    RentalRoutingModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule {

}
