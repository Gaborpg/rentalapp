import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Route, Router} from '@angular/router';
import {RentalService} from '../../rental/shared/rental.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private rentalService: RentalService) {
  }

  ngOnInit() {
  }

  onSignIN(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    /*
        this.rentalService.onSave();
    */

    this.authService.signInUser(email, password);

    this.router.navigate(['/rentals']);
  }

  test() {
    this.authService.signInUser('test2@test.com', 'testtest');

    this.router.navigate(['/rentals']);
  }
}
