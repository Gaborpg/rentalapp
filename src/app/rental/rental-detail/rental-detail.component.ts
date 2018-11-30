import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental: Rental;

  constructor(private activatedRoute: ActivatedRoute,
              private rentalService: RentalService) {
  }

  ngOnInit() {
    this.getCurrentId();
  }

  getCurrentId() {
    /*
        const id = this.activatedRoute.snapshot.paramMap.get('id');
    */
    this.activatedRoute.params.subscribe(
      (params) => {
        this.getRentalById(params['id']);
      }
    );

  }

  getRentalById(ID: string): void {
    this.rental = this.rentalService.getRenById(ID);
  }


}

