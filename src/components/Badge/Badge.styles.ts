import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import styled from 'styled-components';
import type { BadgeProps, colorState } from './types';

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

export const DivStyled = styled.div<TStyleProps>`
    ${resetCSS}
    ${fonts.text}
    width: min-content;
    height: min-content;
    padding: 4px 10px;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ state = 'normal' }) => getBackgroundColor(state)};
`;
