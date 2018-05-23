import React from 'react';
import StyledSpinner from './StyledSpinner';
import logo from '../../assets/logo.svg';

import { movement$, control$ } from '../../subjects';
import { combineLatest } from 'rxjs';
import { debounceTime, take, repeat } from 'rxjs/operators';
import tween from 'xstream/extra/tween';
import concat from 'xstream/extra/concat';

class Spinner extends React.Component {
  state = {};

  componentDidMount() {
    this._subscription = combineLatest(movement$, control$)
      .pipe(debounceTime(3000), take(1), repeat())
      .subscribe(([movement, controls]) => {
        console.log('emit!');
        const { spin, resize } = controls;
        const { speed, direction } = spin;
        this.setState({ movement, speed, direction });
        this.animate(resize);
      });
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  animate = resizeConfig => {
    const animationConfig = { ...resizeConfig, ease: this.state.movement };
    const mirroredAnimConfig = this.mirror(animationConfig);
    const loopedAnimConfig = mirroredAnimConfig.map(obj => tween(obj));
    const resize$ = concat(...loopedAnimConfig);
    resize$.subscribe({ next: attr => this.setState({ resize: attr }) });
  };

  mirror = range => {
    const [from, to] = [range.to, range.from];
    const mirroredRange = { ...range, from, to };
    return [range, mirroredRange];
  };

  render() {
    return (
      <StyledSpinner
        src={logo}
        speed={this.state.speed || 3}
        resize={this.state.resize || 80}
        direction={this.state.direction || 'normal'}
      />
    );
  }
}

export default Spinner;
