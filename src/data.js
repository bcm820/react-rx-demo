export default {
  basic: {
    name: 'basic',
    duration: 5,
    direction: 'normal',
    timing: 'linear',
    resizeFrom: 50,
    resizeTo: 300,
    positionX: 'right',
    positionY: 'top',
    mirror: false,
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
    mirror: false,
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
    mirror: false,
    playState: 'running'
  }
};
