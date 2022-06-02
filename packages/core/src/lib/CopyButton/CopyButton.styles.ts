import styled from 'styled-components';
import { color, resetButtonCSS } from '@web3uikit/styles';
import { CopyButtonProps } from './types';

type TCopyButtonProps = Pick<CopyButtonProps, 'iconSize'>;

export const ButtonStyled = styled.button<TCopyButtonProps>`
  ${resetButtonCSS};
  display: inline-block;
  vertical-align: sub;

  &:first-child {
    fill: ${color.grey};
    transition: fill 0.2s ease-out;
  }

  &:hover > svg {
    fill: ${color.blue};
  }
`;
