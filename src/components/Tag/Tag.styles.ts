import styled from 'styled-components';
import colorStyles from './styles/colors';
import themeStyles from './styles/themes';
import type { TagProps, Tone } from './types';

const {
    activeStatus,
    discount,
    inactiveStatus,
    initialStyles,
    regular,
    chips,
} =themeStyles;

const {
    coloredBlue,
    coloredBlueDark,
    coloredGrayDark,
    coloredGreen,
    coloredGreenDark,
    coloredGrey,
    coloredPink,
    coloredPinkDark,
    coloredPurple,
    coloredPurpleDark,
    coloredRed,
    coloredRedDark,
    coloredYellow,
    coloredYellowDark,
    coloredBlueLight,
} = colorStyles;

type TStyleProps = Pick<
    TagProps,
    'active' | 'fontSize' | 'theme' | 'tone' | 'width'
>;

const getTheme = (theme: string, active?: boolean) => {
    switch (theme) {
        case 'status':
            return active ? activeStatus : inactiveStatus;
        case 'discount':
            return discount;
        case 'chips':
            return chips;
        default:
            return regular;
    }
};

const getColors = (color?: string, tone?: Tone) => {
    switch (color) {
        case 'green':
            return tone === 'light' ? coloredGreen : coloredGreenDark;
        case 'red':
            return tone === 'light' ? coloredRed : coloredRedDark;
        case 'yellow':
            return tone === 'light' ? coloredYellow : coloredYellowDark;
        case 'blue':
            return tone === 'light' ? coloredBlue : coloredBlueDark;
        case 'blueLight':
            return coloredBlueLight;
        case 'purple':
            return tone === 'light' ? coloredPurple : coloredPurpleDark;
        case 'pink':
            return tone === 'light' ? coloredPink : coloredPinkDark;
        case 'grey':
            return tone === 'light' ? coloredGrey : coloredGrayDark;
        default:
            return coloredGrey;
    }
};

const SpanStyled = styled.div<TStyleProps>`
    cursor: pointer;
    margin-left: 8px;
`;

const TagStyled = styled.div<TStyleProps>`
    ${initialStyles}
    ${({ active, theme }) => getTheme(theme, active)}
    ${({ color, theme, tone }) =>
        theme !== 'status' && color && getColors(color, tone)}
    width: ${({ width }) => width};

    ${({ width, theme }) =>
        theme === 'discount' &&
        Boolean(width) &&
        `height: ${width}; width: ${width}; border-radius: 50%;`};

    ${({ theme, tone }) =>
        theme === 'chips' && tone === 'dark' && 'border: 0px;'};

    ${({ fontSize }) => Boolean(fontSize) && `font-size: ${fontSize}`};
`;

export default {
    SpanStyled,
    TagStyled,
};
