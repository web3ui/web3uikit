import styled from 'styled-components';
import { color } from '@web3uikit/styles';
import colorStyles from './styles/colors';
import themeStyles from './styles/themes';
import borderStyles from './styles/borders';
import type { TagProps, Tone } from './types';

const {
    activeStatus,
    discount,
    inactiveStatus,
    initialStyles,
    regular,
    chips,
} = themeStyles;

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

const {
    coloredBorderBlue,
    coloredBorderBlueDark,
    coloredBorderGrayDark,
    coloredBorderGreen,
    coloredBorderGreenDark,
    coloredBorderGrey,
    coloredBorderPink,
    coloredBorderPinkDark,
    coloredBorderPurple,
    coloredBorderPurpleDark,
    coloredBorderRed,
    coloredBorderRedDark,
    coloredBorderYellow,
    coloredBorderYellowDark,
    coloredBorderBlueLight,
} = borderStyles;

type TStyleProps = Pick<
    TagProps,
    'active' | 'fontSize' | 'padding' | 'theme' | 'tone' | 'width'
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

const getBorderColor = (color?: string, tone?: Tone) => {
    switch (color) {
        case 'green':
            return tone === 'light' ? coloredBorderGreen : coloredBorderGreenDark;
        case 'red':
            return tone === 'light' ? coloredBorderRed : coloredBorderRedDark;
        case 'yellow':
            return tone === 'light' ? coloredBorderYellow : coloredBorderYellowDark;
        case 'blue':
            return tone === 'light' ? coloredBorderBlue : coloredBorderBlueDark;
        case 'blueLight':
            return coloredBorderBlueLight;
        case 'purple':
            return tone === 'light' ? coloredBorderPurple : coloredBorderPurpleDark;
        case 'pink':
            return tone === 'light' ? coloredBorderPink : coloredBorderPinkDark;
        case 'grey':
            return tone === 'light' ? coloredBorderGrey : coloredBorderGrayDark;
        default:
            return coloredGrey;
    }
};

const SpanStyled = styled.div<TStyleProps>`
    cursor: pointer;
    display: flex;
    margin-left: 8px;
    padding: auto;
    &:hover {
        svg {
            fill: ${color.navy40};
        }
    }
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
    
    ${({ theme, color, tone }) => theme =='bordered' ? getBorderColor(color, tone) : ''}

    ${({ theme, tone }) =>
        theme === 'chips' && tone === 'dark' && 'border: 0px;'};

    ${({ fontSize }) => Boolean(fontSize) && `font-size: ${fontSize}`};
    ${({ padding }) => Boolean(padding) && `padding: ${padding}`};
`;

export default {
    SpanStyled,
    TagStyled,
};
