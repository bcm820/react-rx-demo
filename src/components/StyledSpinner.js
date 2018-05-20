import styled from 'styled-components';

const StyledLogo = styled.img.attrs({
  style: ({ size, speed }) => {
    const range = [null, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    return {
      height: `${size}px`,
      animationDuration: `${range[speed]}s`
    };
  }
})`
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
  }
`;

export default StyledLogo;
