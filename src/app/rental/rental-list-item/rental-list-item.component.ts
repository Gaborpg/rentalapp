import {Component, Input, OnInit} from '@angular/core';
import {Rental} from '../shared/rental.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {
  @Input() currentRental: Observable<Rental[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
