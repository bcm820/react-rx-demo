import React from 'react';
import StyledLogo from './styles/StyledLogo';
import logo from '../assets/logo.svg';
import { spin$, size$ } from '../streams';

class Logo extends React.Component {
  state = {
    spin: 20,
    size: 80
  };

  handleClick = () => {
    this._spin$ = spin$.subscribe({
      next: spin => this.setState({ spin })
    });
    this._size$ = size$.subscribe({
      next: size => this.setState({ size })
    });
  };

  componentWillUnmount() {
    this._spin$.unsubscribe();
    this._size$.unsubscribe();
  }

  render() {
    return (
      <StyledLogo
        src={logo}
        onClick={this.handleClick}
        spin={this.state.spin}
        size={this.state.size}
      />
    );
  }
}

export default Logo;
