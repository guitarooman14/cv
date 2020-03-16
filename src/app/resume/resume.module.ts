import {ResumeComponent} from './resume.component';
import {NgModule} from '@angular/core';
import {ResumeRoutingModule} from './resume.routing.module';
import {LoaderComponent} from './core/loader/loader.component';
import {CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {InViewportModule} from '@thisissoon/angular-inviewport';
import {SkillProgressBarComponent} from './core/skill-progress-bar/skill-progress-bar.component';
import { SwipperComponent } from './core/swipper/swipper.component';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSwitcherModule} from "./core/language-switcher/language-switcher.module";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [ResumeComponent, LoaderComponent, SkillProgressBarComponent, SwipperComponent],
  imports: [CommonModule, ResumeRoutingModule, MatIconModule, InViewportModule, MatProgressBarModule, SwiperModule, FlexLayoutModule, TranslateModule, LanguageSwitcherModule],
  providers: [ {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }]
})
export class ResumeModule {
}
