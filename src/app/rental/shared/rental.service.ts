import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class RentalService {

  configURL = 'api/v1/rentals';

  constructor(private httpClient: HttpClient) {
  }

  getRentalById(rentalId: string): Observable<any> {
    return this.httpClient.get(this.configURL + `/${rentalId}`);
  }


  getRentals(): Observable<any> {
    return this.httpClient.get(this.configURL);
  }
}
