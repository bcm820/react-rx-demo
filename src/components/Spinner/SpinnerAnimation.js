import styled, { keyframes } from 'styled-components';

const spinnerAnimation = props => keyframes`
0% {
  ${props.positionX}: 0%;
  ${props.positionY}: 0%;
  height: ${props.resizeFrom}px;
  transform: rotate(0deg);
}
50% {
  ${props.positionX}: 15%;
  ${props.positionY}: 15%;
  height: ${props.resizeTo}px;
}
100% {
  ${props.positionX}: 0%;
  ${props.positionY}: 0%;
  height: ${props.resizeFrom}px;
  transform: rotate(360deg);
}
`;

const SpinnerAnimation = styled.img`
  position: fixed;
  z-index: -1;
  opacity: ${props => (props.copy && !props.mirror ? 0 : 1)};
  animation-name: ${spinnerAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: ${props => props.timing};
  animation-play-state: ${props => props.playState};
  animation-direction: ${props => props.direction};
  animation-duration: ${props => props.duration}s;
`;

export default SpinnerAnimation;
