import styled from 'styled-components';
import color from '../../styles/colors';
import { resetButtonCSS } from '../../styles/reset';
import { CopyButtonProps } from './types';

type TCopyButtonProps = Pick<CopyButtonProps, 'iconSize'>;

export const ButtonStyled = styled.button<TCopyButtonProps>`
    ${resetButtonCSS};
    display: inline-block;
    height: 1em;
    margin-left: 0.1em;

    &:first-child {
        fill: ${color.grey};
        height: 100%;
        transition: fill 0.2s ease-out;
        width: 100%;
    }

    &:hover > svg {
        fill: ${color.blue};
    }
`;
