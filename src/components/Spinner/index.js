import React from 'react';
import SpinnerAnimation from './SpinnerAnimation';
import logo from '../../assets/logo.svg';
import { control$, appState } from '../../subjects';

class Spinner extends React.Component {
  state = appState;

  componentDidMount() {
    this._subscription = control$.subscribe(controls =>
      this.setState(controls)
    );
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  render() {
    return <SpinnerAnimation src={logo} {...this.state} />;
  }
}

export default Spinner;
