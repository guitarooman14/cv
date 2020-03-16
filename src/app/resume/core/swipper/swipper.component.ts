import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'cv-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit {

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor() { }

  ngOnInit() {
  }

}
