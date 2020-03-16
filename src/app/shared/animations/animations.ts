import {animate, animation, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';

export const fadeOutTransition = trigger('Fading', [
  transition(':enter', [style({ opacity: 0 }), animate('1s ease-in', style({ opacity: 1 }))]),
  transition(':leave', animate('800ms ease-in', style({ opacity: 0 }))),
]);

const enterInAnimationWithTranslation = animation([
  style({transform: 'scale(0)'}),
  animate(
    '{{ timings }}',
    keyframes([
      style({
        transform: 'translateY(200px) scale(0.6)',
        opacity: 0
      }),
      style({
        transform: 'translateY(150px) scale(0.7)',
        opacity: 0.4
      }),
      style({
        transform: 'translateY(100px) scale(0.8)',
        opacity: 0.5
      }),
      style({
        transform: 'translateY(50px) scale(0.9)',
        opacity: 0.8
      }),
      style({
        transform: 'translateY(0px) scale(1)',
        opacity: 1
      })
    ])
  )
]);

const enterInAnimation = animation([
  style({opacity: 0, transform: 'scale(0.5)'}),
  animate(
    '{{ timings }}', style({opacity: 1, transform: 'scale(1)'})
  )
]);

export const enterIn = trigger('enterIn', [
  state('false', style({opacity: 0})),
  state('true', style({opacity: 1})),
  transition('false => true', useAnimation(enterInAnimationWithTranslation, {params: {timings: '1400ms cubic-bezier(0.6, 0.2, 0.1, 1)'}}))
]);

export const enterInWithDelay = trigger('enterInWithDelay', [
  state('false', style({opacity: 0})),
  state('true', style({opacity: 1})),
  transition('false => true', useAnimation(enterInAnimation, {params: {timings: '1400ms 500ms cubic-bezier(0.6, 0.2, 0.1, 1)'}}))
]);

export const enterInWithoutDelay = trigger('enterInWithoutDelay', [
  state('false', style({opacity: 0})),
  state('true', style({opacity: 1})),
  transition('false => true', useAnimation(enterInAnimation, {params: {timings: '1400ms cubic-bezier(0.6, 0.2, 0.1, 1)'}}))
]);
