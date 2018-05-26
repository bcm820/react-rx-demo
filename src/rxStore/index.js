import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { observe } from './Observer';
import data from '../data';

// `initialState` is passed into our BehaviorSubject constructor
// as the initial state of our application's shared state.
// In this app, it is one of three preset spinner configurations.
const initialState = data.basic;

// `store$` stores and emits each new iteration of `rxState`
// via an asynchronous event stream, multicast to all its subscribers.
const store$ = new BehaviorSubject(initialState);

// For convenience, we can export a partially applied function
// that receives a component to wrap and pass rxState into.
// i.e. rxConnect(WrappedComponent)
export const rxConnect = observe(store$);

// Additional Operators:
// Rxjs uses many "pipeable" operators, pure functions that
// can be added as additional arguments to our `observe` function
// to modify the behavior of the store$ subscription.
const copyAnimation = map(next => {
  const positionX = next.positionX === 'left' ? 'right' : 'left';
  const positionY = next.positionY === 'bottom' ? 'top' : 'bottom';
  return [
    { ...next, positionX },
    { ...next, positionY },
    { ...next, positionX, positionY }
  ];
});

// 'copyAnimation' is defined using the map operator to create
// three mvsodified copies of the spinner state, and then passed into
// a new partially applied function for a component that will
// receive the mapped rxState.
export const rxConnectCopies = observe(store$, copyAnimation);
