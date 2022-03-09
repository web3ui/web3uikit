import styled from 'styled-components';
import { CopyButtonProps } from '.';
import color from '../../styles/colors';
import { resetButtonCSS } from '../../styles/reset';

export const ButtonStyled = styled.button<Pick<CopyButtonProps, 'iconSize'>>`
    ${resetButtonCSS}
    display: inline-block;
    margin-left: 0.1em;
    height: 1em;
    ${(props) => props.iconSize && `min-height: ${props.iconSize}px;`}

    &:first-child {
        fill: ${color.grey};
        height: 100%;
        transition: fill 0.2s ease-out;
        width: 100%;
        max-width: fit-content;
        min-width: fit-content;
    }

    &:hover > svg {
        fill: ${color.blue};
    }
`;
