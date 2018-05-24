import { BehaviorSubject } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';
import { observe } from './Observer';
import data from '../data';

// initialState will be the initial state of our observable
// for this app, the initial state is one of three preset spinner configurations
const initialValue = data.basic;

// rxStore$ is what stores and emits each new iteration of state
// via an asynchronous event stream, multicast to all its subscribers
const rxStore$ = new BehaviorSubject(initialValue);
export const rxConnect = observe(rxStore$, defaultIfEmpty(initialValue));
