import { BehaviorSubject } from 'rxjs';
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

export const control$ = new BehaviorSubject(initialControls);
export const movement$ = new BehaviorSubject(tween.exponential.easeInOut);

// TODO:
// - Replace tween with CSS animation percentages (for resize)
// - Have "duration" and "movement" be a part of the initialControls
// - Make Controls component more declarative (add 'type' onto each attribute to determine which control)
// - Check subscriptions... unsubscribe as needed
// - Add pause feature
