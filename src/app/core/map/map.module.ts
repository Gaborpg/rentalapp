import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import { AgmCoreModule } from '@agm/core';
import {MapService} from './map.service';
import {CamelizePipe} from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0iuPHFq7AVZOnNp_NalNxWZulWjMN9AM'
    }),
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule {
}
