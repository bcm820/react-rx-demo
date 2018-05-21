import React from 'react';
import StyledSpinner from './StyledSpinner';
import logo from '../assets/logo.svg';

import { initialConfig, spinnerConfig$ } from '../streams';
import { debounceTime } from 'rxjs/operators';
import tween from 'xstream/extra/tween';
import concat from 'xstream/extra/concat';

class Spinner extends React.Component {
  state = {
    speed: initialConfig.spin.speed,
    resize: initialConfig.resize.from
  };

  componentDidMount() {
    this._config$ = spinnerConfig$.pipe(debounceTime(500)).subscribe(config => {
      this.setState({ speed: config.spin.speed });
      this.configureTween(config.resize, 'resize');
    });
  }

  componentWillUnmount() {
    this._config$.unsubscribe();
  }

  configureTween = (config, key) => {
    const tweens = this.mirrorTween(config);
    this.setTweenState(tweens, key);
  };

  mirrorTween = config => {
    const [from, to] = [config.to, config.from];
    const mirror = { ...config, from, to };
    return concat(...[config, mirror].map(obj => tween(obj)));
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
