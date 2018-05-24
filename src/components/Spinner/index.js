import React from 'react';
import { rxConnect } from '../../rxStore';
import SpinnerAnimation from './SpinnerAnimation';
import SpinnerLogo from '../../assets/logo.svg';

const Spinner = props => (
  <SpinnerAnimation src={SpinnerLogo} {...props.rxState} />
);

export default rxConnect(Spinner);
