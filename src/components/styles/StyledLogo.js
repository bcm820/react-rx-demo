import styled from 'styled-components';

const StyledLogo = styled.img.attrs({
  style: props => ({
    animation: `spin ${props.spin}s linear infinite`,
    height: `${props.size}px`,
    cursor: 'pointer'
  })
})`
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
