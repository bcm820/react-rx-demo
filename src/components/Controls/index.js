import React from 'react';
import { Control } from './Control';
import { control$, appState } from '../../subjects';

class Controls extends React.Component {
  state = appState;

  componentDidMount() {
    this._subscription = control$.subscribe(
      next => this.setState(next),
      error => console.log(error)
    );
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  handleChange = (control, value) => {
    const intValue = parseInt(value, 10);
    control$.next({
      ...this.state,
      [control]: isNaN(intValue) ? value : intValue,
      name: 'custom'
    });
  };

  render() {
    return Object.keys(this.state).map(this.renderControl);
  }

  renderControl = key => (
    <Control
      key={key}
      control={key}
      value={this.state[key]}
      handleChange={this.handleChange}
    />
  );
}

export default Controls;
