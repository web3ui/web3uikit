import styled from 'styled-components';
import type { BadgeProps, colorState } from './types';
import {
    colorTheme,
    TThemeName,
    color,
    fonts,
    resetCSS,
} from '@web3uikit/styles';

type TStyleProps = Pick<
    BadgeProps,
    'state' | 'bgColor' | 'borderRadius' | 'theme'
>;

const getBackgroundColor = (
    type: colorState,
    bgColor: string,
    theme: TThemeName,
) => {
    switch (type) {
        case 'danger':
            return colorTheme[theme].destructive30;
        case 'success':
            return colorTheme[theme].positive40;
        case 'warning':
            return colorTheme[theme].warning40;
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
    background-color: ${({
        state = 'normal',
        bgColor = color.navy40,
        theme = 'light',
    }) => getBackgroundColor(state, bgColor, theme)};
    border-radius: ${({ borderRadius = 6 }) => borderRadius + 'px'};
    display: flex;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 4px 10px;
    width: min-content;
`;

export default { DivStyled };
