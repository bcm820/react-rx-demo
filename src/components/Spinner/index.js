import React from 'react';
import { connect } from '../../rxstore';
import SpinnerAnimation from './SpinnerAnimation';
import SpinnerLogo from '../../assets/logo.svg';

const Spinner = props => (
  <SpinnerAnimation src={SpinnerLogo} {...props.nextState} />
);

export default connect(Spinner);
