import styled from 'styled-components';

const StyledSpinner = styled.img.attrs({
  style: ({ resize, speed, direction }) => {
    const range = [null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const duration = speed < 1 ? 10 : speed > 10 ? 1 : range[speed];
    return {
      height: `${resize}px`,
      animationDuration: `${duration}s`,
      animationDirection: `${direction}`
    };
  }
})`
  position: fixed;
  bottom: 0%;

  animation-name: spin;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    0% {
      left: 0%;
    }
    25% {
      left: 25%;
    }
    50% {
      left: 50%;
    }
    75% {
      left: 25%;
    }
    100% {
      left: 0%;
    }
  }
`;

export default StyledSpinner;
