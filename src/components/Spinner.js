import React from 'react';
import StyledSpinner from './StyledSpinner';
import logo from '../assets/logo.svg';

import { initialState, observedState$ } from '../streams';
import { throttleTime } from 'rxjs/operators';
import tween from 'xstream/extra/tween';
import concat from 'xstream/extra/concat';

class Spinner extends React.Component {
  state = {
    speed: initialState.spin.speed,
    resize: initialState.resize.from
  };

  componentDidMount() {
    this._subscription$ = observedState$
      .pipe(throttleTime(1000))
      .subscribe(config => {
        this.setState({ speed: config.spin.speed });
        this.configureTween(config.resize, 'resize');
      });
  }

  componentWillUnmount() {
    this._subscription$.unsubscribe();
  }

  configureTween = (config, key) => {
    const tweenConfig = {
      ...config,
      duration: 1000,
      ease: tween.exponential.easeInOut
    };
    const mirroredTweenConfig = this.mirrorAnimation(tweenConfig);
    const tweenArray = mirroredTweenConfig.map(obj => tween(obj));
    const tween$ = concat(...tweenArray);
    this.setTweenState(tween$, key);
  };

  mirrorAnimation = animationRange => {
    const [from, to] = [animationRange.to, animationRange.from];
    const mirroredAnimationRange = { ...animationRange, from, to };
    return [animationRange, mirroredAnimationRange];
  };

  setTweenState = (tween$, key) =>
    tween$.subscribe({
      next: attr => this.setState({ [key]: attr })
    });

  render() {
    return (
      <StyledSpinner
        src={logo}
        speed={this.state.speed}
        resize={this.state.resize}
      />
    );
  }
}

export default Spinner;
