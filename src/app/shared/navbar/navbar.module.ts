import {NavbarComponent} from './navbar.component';
import {MatButtonModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MatButtonModule],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
