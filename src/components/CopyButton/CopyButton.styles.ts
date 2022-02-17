import styled from 'styled-components';
import color from '../../styles/colors';
import { resetButtonCSS } from '../../styles/reset';

export const CopyIconStyled = styled.button`
    ${resetButtonCSS}
    align-items: center;
    display: inline-flex;
    margin-left: 0.1em;
    position: absolute;

    & :first-child {
        height: 1em;
        transition: fill 0.2s ease-out;
        fill: ${color.blueSkyDark};
        width: 1em;
    }

    &:hover > svg {
        fill: ${color.blue};
    }
`;
