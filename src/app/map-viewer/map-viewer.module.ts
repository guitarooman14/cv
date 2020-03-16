import {MapViewerRoutingModule} from './map-viewer-routing.module';
import {NgModule} from '@angular/core';
import {MapViewerComponent} from './map-viewer.component';
import {MapComponent} from './core/map/map.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {ToolbarModule} from './core/toolbar/toolbar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {NavbarModule} from '../shared/navbar/navbar.module';

@NgModule({
  declarations: [MapViewerComponent, MapComponent],
  imports: [MapViewerRoutingModule, AngularOpenlayersModule, ToolbarModule, MatIconModule, MatListModule, NavbarModule]
})
export class MapViewerModule {
}
