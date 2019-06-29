import {RouterModule, Routes} from '@angular/router';
import {MapViewerComponent} from './map-viewer.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'map-viewer', component: MapViewerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapViewerRoutingModule {}

