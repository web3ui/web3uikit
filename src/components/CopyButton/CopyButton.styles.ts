import styled from 'styled-components';
import color from '../../styles/colors';
import { resetButtonCSS } from '../../styles/reset';

export const CopyIconStyled = styled.button`
    ${resetButtonCSS}
    display: inline-block;
    margin-left: 0.1em;
    height: 1em;

    & :first-child {
        fill: ${color.grey};
        height: 100%;
        transition: fill 0.2s ease-out;
        width: 100%;
    }

    &:hover > svg {
        fill: ${color.blue};
    }
`;
