import styled from 'styled-components';

export const DiscoverButton = styled.a`
  color: #fff;
  padding: 7px 15px;
  margin-bottom: 5px;
  display: inline-block;
  -webkit-transition-delay: .1s;
  transition-delay: .1s;
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  border: 2px solid #fff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;

  &:hover {
    // color: #000 !important;
    background-color: transparent;
    border: 2px solid #ffe001;
  }
`
