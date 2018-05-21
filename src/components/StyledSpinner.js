import styled from 'styled-components';

const StyledLogo = styled.img.attrs({
  style: ({ resize, speed }) => {
    const range = [null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    return {
      height: `${resize}px`,
      animationDuration: `${range[speed]}s`
    };
  }
})`
  position: fixed;
  bottom: 10%;
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
