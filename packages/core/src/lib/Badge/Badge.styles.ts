import styled from 'styled-components';
import type { BadgeProps, colorState } from './types';
import { TColorTheme, color, fonts, resetCSS } from '@web3uikit/styles';

type TStyleProps = Pick<
    BadgeProps,
    'state' | 'bgColor' | 'borderRadius' | 'theme'
>;

const getBackgroundColor = (
    type: colorState,
    bgColor: string,
    theme: TColorTheme,
) => {
    switch (type) {
        case 'danger':
            return theme.danger;
        case 'success':
            return theme.success;
        case 'warning':
            return theme.warning;
        case 'custom':
            return bgColor;
        default:
            return color.navy40;
    }
};

const DivStyled = styled.div<TStyleProps>`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    border-radius: ${({ borderRadius = 6 }) => borderRadius + 'px'};
    display: flex;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 4px 10px;
    width: min-content;
    background-color: ${({ state = 'normal', bgColor = color.navy40, theme }) =>
        getBackgroundColor(state, bgColor, theme)};
`;

export default { DivStyled };
