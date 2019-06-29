import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import {MapViewerModule} from './map-viewer/map-viewer.module';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/router-serializer';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {reducers, State} from './app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../environments/environment';

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze]: [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers, {metaReducers: [storeFreeze]}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    MapViewerModule,
    AppRoutingModule,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
