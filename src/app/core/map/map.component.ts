import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MapService} from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() location: string;
  isPositionError = false;

  lat = 51.678418;
  lng = 7.809007;

  constructor(private mapService: MapService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  mapReadyHandler() {
    this.mapService.getGeoLocation(this.location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;

        this.ref.detectChanges();
      },
      () => {
        this.isPositionError = true;
      }
    );
  }

}
