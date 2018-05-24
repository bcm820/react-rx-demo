import React from 'react';

const observe = observable => Component =>
  class extends React.PureComponent {
    state = {};

    componentDidMount() {
      this._subscription = observable.subscribe(
        next => this.setState(next),
        error => console.log(error)
      );
    }

    componentWillUnmount() {
      this._subscription.unsubscribe();
    }

    setNextState(value) {
      observable.next(value);
    }

    render() {
      return (
        <Component
          {...this.props}
          nextState={this.state}
          setNextState={this.setNext}
        />
      );
    }
  };

export default observe;
