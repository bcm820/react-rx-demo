import { Subject } from 'rxjs';
import tween from 'xstream/extra/tween';
import concat from 'xstream/extra/concat';

export const text$ = new Subject();

export const spin$ = tween({
  from: 0,
  to: 20,
  ease: tween.exponential.easeIn,
  duration: 5000
});

export const size$ = concat(
  tween({
    from: 80,
    to: 120,
    ease: tween.power3.easeInOut,
    duration: 2500
  }),
  tween({
    from: 120,
    to: 80,
    ease: tween.power3.easeInOut,
    duration: 2500
  })
);
