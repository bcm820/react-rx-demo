import { BehaviorSubject } from 'rxjs';

export const initialState = {
  spin: {
    speed: 3
  },
  resize: {
    from: 80,
    to: 80
  }
};

export const observedState$ = new BehaviorSubject(initialState);
