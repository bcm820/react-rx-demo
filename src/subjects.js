import { BehaviorSubject } from 'rxjs';
import data from './data';

// Here is a simple pattern for defining app state

// Data represents several defined states of our application
// For this app, they are 'presets' -- spinner config defaults
export const presets = data;

// appState is the initial state of our application
// It will be shared across components as initial state
export const appState = presets.basic;

// control$ is the observable that will emit each new value
// via an asynchronous event stream, multicast to all subscribers
export const control$ = new BehaviorSubject(appState);
