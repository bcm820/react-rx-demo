import React from 'react';
import { rxConnect, rxConnectCopies } from '../../rxStore';
import SpinnerAnimation from './SpinnerAnimation';
import SpinnerLogo from '../../assets/logo.svg';

export const Spinner = rxConnect(props => (
  <SpinnerAnimation src={SpinnerLogo} {...props.rxState} />
));

export const SpinnerCopies = rxConnectCopies(
  props =>
    !Array.isArray(props.rxState)
      ? null
      : props.rxState.map((config, key) => (
          <SpinnerAnimation
            src={SpinnerLogo}
            key={key}
            {...config}
            copy={true}
          />
        ))
);
