import React from 'react';
import StyledSpinner from './StyledSpinner';
import logo from '../../assets/logo.svg';

import { Control$, Movement$ } from '../../subjects';
import { combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import tween from 'xstream/extra/tween';
import concat from 'xstream/extra/concat';

class Spinner extends React.Component {
  state = {};

  componentDidMount() {
    this._subscription = combineLatest(Movement$, Control$)
      .pipe(debounceTime(500))
      .subscribe(([movement, controls]) => {
        const { speed, direction } = controls.spin;
        this.setState({ movement, speed, direction });
        this.setSizeRange(controls.resize);
      });
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  setSizeRange = controls => {
    controls = {
      ...controls,
      ease: this.state.movement
    };
    const mirroredControls = this.mirror(controls);
    const controlsArray = mirroredControls.map(obj => tween(obj));
    const size$ = concat(...controlsArray);
    this.setSizeAnimation(size$);
  };

  mirror = range => {
    const [from, to] = [range.to, range.from];
    const mirroredRange = { ...range, from, to };
    return [range, mirroredRange];
  };

  setSizeAnimation = size$ =>
    size$.subscribe({
      next: attr => this.setState({ resize: attr })
    });

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
