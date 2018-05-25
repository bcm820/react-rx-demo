import styled, { keyframes } from 'styled-components';

const spinnerAnimation = ({
  positionX,
  positionY,
  resizeFrom,
  resizeTo
}) => keyframes`
0% {
  ${positionX}: 0%;
  ${positionY}: 0%;
  height: ${resizeFrom}px;
  transform: rotate(0deg);
}
50% {
  ${positionX}: 15%;
  ${positionY}: 15%;
  height: ${resizeTo}px;
}
100% {
  ${positionX}: 0%;
  ${positionY}: 0%;
  height: ${resizeFrom}px;
  transform: rotate(360deg);
}
`;

const SpinnerAnimation = styled.img`
  position: fixed;
  z-index: -1;
  opacity: ${props => (props.mirrored && !props.mirror ? 0 : 1)};
  animation-name: ${spinnerAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: ${props => props.timing};
  animation-play-state: ${props => props.playState};
  animation-direction: ${props => props.direction};
  animation-duration: ${props => props.duration}s;
`;

export default SpinnerAnimation;
