import React from 'react';
import reducer from './reducer';

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

    dispatch = action => {
      const { rxState } = this.state;
      store$.next(reducer(rxState, action));
    };

    render() {
      return (
        <Component
          {...this.props}
          rxState={this.state.rxState}
          dispatch={this.dispatch}
        />
      );
    }
  };
