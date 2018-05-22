import { BehaviorSubject } from 'rxjs';
import { take, repeatWhen } from 'rxjs/operators';
import { interval } from 'rxjs';
import tween from 'xstream/extra/tween';

export const initialControls = {
  spin: {
    speed: 5,
    direction: 'normal'
  },
  resize: {
    from: 80,
    to: 800,
    duration: 1000
  }
};

// The control observable will multicast its current value roughly every 2 seconds.
// TODO: Subscribe to control$ to get the user-defined duration... have it be consistent
// across all event streaming... duration === push interval
const complete = () => interval(2000);
export const control$ = new BehaviorSubject(initialControls).pipe(
  take(1),
  repeatWhen(complete)
);

export const movement$ = new BehaviorSubject(tween.exponential.easeInOut);
