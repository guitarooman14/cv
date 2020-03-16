import {MapViewerRoutingModule} from './map-viewer-routing.module';
import {NgModule} from '@angular/core';
import {MapViewerComponent} from './map-viewer.component';
import {MapComponent} from './core/map/map.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {ToolbarModule} from './core/toolbar/toolbar.module';
import {MatIconModule, MatListModule} from '@angular/material';
import {NavbarModule} from '../shared/navbar/navbar.module';

@NgModule({
  declarations: [MapViewerComponent, MapComponent],
  imports: [MapViewerRoutingModule, AngularOpenlayersModule, ToolbarModule, MatIconModule, MatListModule, NavbarModule]
})
export class MapViewerModule {
}
