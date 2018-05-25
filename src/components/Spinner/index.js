import React from 'react';
import { rxConnect, rxConnectMirror } from '../../rxStore';
import SpinnerAnimation from './SpinnerAnimation';
import SpinnerLogo from '../../assets/logo.svg';

const Spinner = props => (
  <SpinnerAnimation src={SpinnerLogo} {...props.rxState} />
);

export default rxConnect(Spinner);

export const MirroredSpinner = rxConnectMirror(props => (
  <SpinnerAnimation src={SpinnerLogo} {...props.rxState} mirrored={true} />
));
