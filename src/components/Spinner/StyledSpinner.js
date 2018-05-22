import styled from 'styled-components';

const StyledLogo = styled.img.attrs({
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
  bottom: 5%;
  left: 5%;

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
      color: red;
    }
    25% {
      color: yellow;
    }
    50% {
      color: blue;
    }
    100% {
      color: green;
    }
  }
`;

export default StyledLogo;
