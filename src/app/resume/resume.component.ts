import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs/index';
import {map, share, take, tap} from 'rxjs/internal/operators';
import {enterIn, enterInWithDelay, enterInWithoutDelay, fadeOutTransition} from '../shared/animations/animations';
import {Dictionary} from '@ngrx/entity';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {TranslateService} from "@ngx-translate/core";
import {DataConstant} from "../shared/data.constant";

@Component({
  selector: 'cv-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [fadeOutTransition, enterIn, enterInWithDelay, enterInWithoutDelay]
})
export class ResumeComponent implements OnInit, AfterViewInit, OnDestroy {
  public isLoaded$: Observable<boolean>;
  private destroyed$ = new Subject();
  // @ViewChild('draggable', {static: false}) public draggable: ElementRef;
  public dataConstant = DataConstant;

  public swipperClientConfig: SwiperConfigInterface = {
    observer: true,
    roundLengths: true,
    autoHeight: true,
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false
    },
    speed: 1000,
    loop: true,
    autoplay: false
  };

  public swipperLogoConfig: SwiperConfigInterface = {
    observer: true,
    roundLengths: true,
    a11y: true,
    direction: 'horizontal',
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    height: 70
  };

  public slides = [
    {
      text: `C'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleur
      C'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleurC'est le meilleur`,
      thumbnail: 'assets/img/clients/petrucci_avatar.jpg',
      owner: 'John Petrucci'
    },
    {text: `C'est le meilleur`, thumbnail: 'assets/img/clients/petrucci_avatar.jpg', owner: 'John Petrucci'},
    {text: `C'est le meilleur`, thumbnail: 'assets/img/clients/petrucci_avatar.jpg', owner: 'John Petrucci'},
  ];

  public logos = ['assets/img/clients/logo/Orange-logo.png', 'assets/img/clients/logo/dga.png', 'assets/img/clients/logo/Logo-Airbus.png'];

  isAlreadyinViewport: Dictionary<boolean> = {
    'v-card-holder': false,
    'about-card': false,
    'education-title': false,
    'timeline-education-dot-1': false,
    'timeline-education-content-1': false,
    'timeline-education-dot-2': false,
    'timeline-education-content-2': false,
    'timeline-education-dot-3': false,
    'timeline-education-content-3': false,
    'timeline-education-dot-4': false,
    'timeline-education-content-4': false,
    'timeline-education-dot-5': false,
    'timeline-education-content-5': false,
    'timeline-education-dot-6': false,
    'timeline-education-content-6': false,
    'skills-title': false,
    'skills-card': false,
    'experience-title': false,
    'timeline-experience-dot-1': false,
    'timeline-experience-content-1': false,
    'timeline-experience-dot-2': false,
    'timeline-experience-content-2': false,
    'timeline-experience-dot-3': false,
    'timeline-experience-content-3': false,
    'timeline-experience-dot-4': false,
    'timeline-experience-content-4': false,
    'interest-title': false,
    'interest-card': false,
    'testimonials-title': false,
    'testimonials-card': false,
    clients: false,
    'price-title': false
  };

  constructor(private readonly translate: TranslateService) {
  }

  ngOnInit() {
    // this.isLoaded$ = timer(0, 3000).pipe(map(val => val % 2 !== 0), take(2),tap(console.log), share());
    this.isLoaded$ = timer(0, 1).pipe(map(val => val % 2 !== 0), take(2), share());

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }

  onInViewportChange(elementClass: string, isInViewport: boolean) {
    if (isInViewport) {
      this.isAlreadyinViewport[elementClass] = true;
    }
  }

  ngAfterViewInit(): void {
    /*this.isLoaded$.pipe(filter(loaded => loaded), delay(1), takeUntil(this.destroyed$)).subscribe(() => {
      const mouseDown$ = fromEvent<MouseEvent>(this.draggable.nativeElement, 'mousedown');
      const mouseMove$ = fromEvent<MouseEvent>(this.draggable.nativeElement, 'mousemove');
      const mouseUp$ = fromEvent<MouseEvent>(this.draggable.nativeElement, 'mouseup');

      mouseDown$.pipe(takeUntil(this.destroyed$)).subscribe(() => mouseMove$.pipe(map(event => {
          event.preventDefault();
          return {
            x: event.clientX,
            y: event.clientY,
          };
        }
        ),
        takeUntil(mouseUp$)
        ).subscribe(pos => {
          this.draggable.nativeElement.style.left = `${pos.x}px`;
          this.draggable.nativeElement.style.top = `${pos.y}px`;
        })
      );
    });*/
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
