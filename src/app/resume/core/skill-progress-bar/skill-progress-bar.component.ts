import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {concatMap, delay, map} from 'rxjs/internal/operators';
import {Observable, of, range} from 'rxjs/index';

@Component({
  selector: 'cv-skill-progress-bar',
  templateUrl: './skill-progress-bar.component.html',
  styleUrls: ['./skill-progress-bar.component.scss']
})
export class SkillProgressBarComponent implements OnInit {
  public currentValue$: Observable<number>;
  @Input() title: string;
  @Input() percent = 0;
  @Input() set isVisible(visible: boolean) {
    if (visible) {
      this.currentValue$ = range(0, this.percent).pipe(
        concatMap(val => of(val).pipe(
          delay(20),
        )), map((a: number) => a));
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
