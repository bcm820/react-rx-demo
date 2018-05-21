import { BehaviorSubject } from 'rxjs';
import tween from 'xstream/extra/tween';

export const initialConfig = {
  spin: {
    speed: 5
  },
  resize: {
    from: 80,
    to: 200,
    duration: 1000,
    ease: tween.exponential.easeInOut
  }
};

export const spinnerConfig$ = new BehaviorSubject(initialConfig);
