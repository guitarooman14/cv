import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapViewerModule} from './map-viewer/map-viewer.module';
import {RouterStateSerializer, StoreRouterConnectingModule, DefaultRouterStateSerializer} from '@ngrx/router-store';
import {CustomSerializer} from './shared/router-serializer';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {reducers, State} from './app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {NavbarModule} from './shared/navbar/navbar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ResumeModule} from './resume/resume.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export const metaReducers: MetaReducer<State>[] = environment.metaReducers;


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer }),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    MapViewerModule,
    ResumeModule,
    NavbarModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
