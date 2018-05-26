import React from 'react';

export const observe = (store$, ...operators) => Component =>
  class Observer extends React.PureComponent {
    state = { rxState: {} };

    componentDidMount() {
      this._subscription = store$
        .pipe(...operators)
        .subscribe(
          next => this.setState({ rxState: next }),
          error => console.log(error)
        );
    }

    componentWillUnmount() {
      this._subscription.unsubscribe();
    }

    setRxState(value) {
      store$.next(value);
    }

    render() {
      return (
        <Component
          {...this.props}
          rxState={this.state.rxState}
          setRxState={this.setRxState}
        />
      );
    }
  };
