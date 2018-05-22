import { BehaviorSubject } from 'rxjs';
import tween from 'xstream/extra/tween';

export const initialControls = {
  spin: {
    speed: 3,
    direction: 'normal'
  },
  resize: {
    from: 80,
    to: 80,
    duration: 1000
  }
};

export const control$ = new BehaviorSubject(initialControls);
export const movement$ = new BehaviorSubject(tween.exponential.easeInOut);
