import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FakedataService} from './fakedata.service';
import {AuthService} from '../../auth/auth.service';
import {Rental} from './rental.model';
import {tap} from 'rxjs/operators';


@Injectable()
export class RentalService {

  configURL = 'https://bmw-rental.firebaseio.com/rental.json';
  rentals: Rental[] = [];

  constructor(private httpClient: HttpClient,
              private fakeDataService: FakedataService,
              private authService: AuthService) {
  }

  onSave() {
    this.storeServer(this.fakeDataService.getFakeData())
      .subscribe(
        (respond) => {
          console.log(respond);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getRenById(ID) {
    return this.rentals.find(x => x._id === ID);
  }

  storeServer(servers) {
    /*
        const token = this.authService.getToken();
    */
    /*return this.httpClient.put(this.configURL + '?auth=' + token, servers);*/
    return this.httpClient.put(this.configURL, servers);

  }


  getRentals(): Observable<Rental[]> {
    return this.httpClient.get<Rental[]>(this.configURL);
  }
}
