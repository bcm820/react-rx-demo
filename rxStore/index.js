import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { observe } from './Observer';
import data from '../data';

// `initialState` is passed into our BehaviorSubject constructor
// as the initial state of our application's shared state.
// In this app, it is one of three preset spinner configurations.
const initialValue = data.basic;

// `rxStore$` stores and emits each new iteration of `rxState`
// via an asynchronous event stream, multicast to all its subscribers.
const rxStore$ = new BehaviorSubject(initialValue);

// For convenience, we can export a partially applied function
// that receives a component to wrap and pass rxState into.
export const rxConnect = observe(rxStore$);

// Rxjs uses many "pipeable" operators, pure functions that
// can be added as additional arguments to our `observe` function
// to modify the behavior of the rxStore$ subscription.
const mirrorAnimation = map(next => ({
  ...next,
  positionX: next.positionX === 'left' ? 'right' : 'left',
  positionY: next.positionY === 'bottom' ? 'top' : 'bottom'
}));
export const rxConnectMirror = observe(rxStore$, mirrorAnimation);
