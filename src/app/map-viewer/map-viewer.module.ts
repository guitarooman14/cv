import {MapViewerRoutingModule} from './map-viewer-routing.module';
import {NgModule} from '@angular/core';
import {MapViewerComponent} from './map-viewer.component';
import { MapComponent } from './map/map.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';

@NgModule({
  declarations: [MapViewerComponent, MapComponent],
  imports: [MapViewerRoutingModule, AngularOpenlayersModule],
})
export class MapViewerModule {
}
