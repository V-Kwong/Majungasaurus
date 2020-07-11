import styled from 'styled-components';

export const LogoButton = styled.a`
  cursor: pointer;
  transition: opacity 0.5s ease;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    opacity: 0.75;
  }
`
