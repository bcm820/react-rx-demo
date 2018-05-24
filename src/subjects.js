import { BehaviorSubject } from 'rxjs';

export const presets = {
  basic: {
    name: 'basic',
    duration: 5,
    direction: 'normal',
    timing: 'linear',
    resizeFrom: 50,
    resizeTo: 150,
    positionX: 'right',
    positionY: 'top',
    playState: 'running'
  },

  'big & slow': {
    name: 'big & slow',
    duration: 10,
    direction: 'reverse',
    timing: 'ease-in',
    resizeFrom: 100,
    resizeTo: 800,
    positionX: 'right',
    positionY: 'bottom',
    playState: 'running'
  },

  'fast & furious': {
    name: 'fast & furious',
    duration: 1,
    direction: 'alternate',
    timing: 'ease-out',
    resizeFrom: 10,
    resizeTo: 1000,
    positionX: 'left',
    positionY: 'top',
    playState: 'running'
  }
};

export const appState = presets.basic;
export const control$ = new BehaviorSubject(appState);
