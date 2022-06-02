import styled from 'styled-components';
import type { BadgeProps, colorState } from './types';
import { color, fonts, resetCSS } from '@web3uikit/styles';

type TStyleProps = Pick<BadgeProps, 'state'>;

const getBackgroundColor = (type: colorState) => {
    switch (type) {
        case 'danger':
            return color.red;
        case 'success':
            return color.green;
        case 'warning':
            return color.yellow;
        default:
            return color.blue;
    }
};

const DivStyled = styled.div<TStyleProps>`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    border-radius: 6px;
    display: flex;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 4px 10px;
    width: min-content;
    background-color: ${({ state = 'normal' }) => getBackgroundColor(state)};
`;

export default { DivStyled };
