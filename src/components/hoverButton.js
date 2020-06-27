import styled from 'styled-components';

export const HoverButton = styled.a`
  text-decoration: none;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  ${props => (props.active) ?
    `
      transform: scale(1.1);
      font-weight: bold;
      padding-bottom: 2px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    `
    :
    `
      transform: translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      transition-duration: 0.3s;
      transition-property: transform;
      transform: scale(1.0);
    
      ::after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.6);
        content: '';
        opacity: 0;
        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
        -moz-transition: opacity 0.3s, -moz-transform 0.3s;
        transition: opacity 0.3s, transform 0.3s;
        -webkit-transform: translateY(10px);
        -moz-transform: translateY(10px);
        transform: translateY(10px);
      }
    
      :hover::after,
      :focus::after {
        opacity: 1;
        -webkit-transform: translateY(2px);
        -moz-transform: translateY(2px);
        transform: translateY(2px);
        font-weight: bold;
      }
    
      :hover,
      :focus {
        outline: none;
        text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      }
    `
  }
`

