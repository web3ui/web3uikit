import styled from 'styled-components';
import { color, resetCSS } from '@web3uikit/styles';
export const SpanStyled = styled.span`
  ${resetCSS};
  align-items: center;
  background-color: ${color.white};
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 5px;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 0;
`;
