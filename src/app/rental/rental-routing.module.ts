import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RentalComponent} from './rental.component';
import {RentalDetailComponent} from './rental-detail/rental-detail.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  {path: 'rentals', component: RentalComponent, children: [
      {path: '', component: RentalListComponent},
      {path: ':id', component: RentalDetailComponent, canActivate: [AuthGuardService]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule {
}
