import { BehaviorSubject } from 'rxjs';
import observe from './observe';
import data from '../data';

// initialState will be the initial value of our store
// for this app, we import one of three preset spinner configurations
export const initialState = data.basic;

// store$ is the observable that will emit each new iteration of state
// via an asynchronous event stream, multicast to all subscribers
const store$ = new BehaviorSubject(initialState);
export const connect = observe(store$);
