import styled from 'styled-components';
import type { TagProps, Tone } from './types';
import {
    activeStatus,
    discount,
    inactiveStatus,
    initialStyles,
    regular,
} from './styles/themes';
import {
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
} from './styles/colors';

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

export const TagStyled = styled.div<TStyleProps>`
    ${initialStyles}
    ${({ active, theme }) => getTheme(theme, active)}
    ${({ color, theme, tone }) =>
        theme !== 'status' && color && getColors(color, tone)}
    width: ${({ width }) => width};

    ${({ width, theme }) =>
        theme === 'discount' &&
        Boolean(width) &&
        `height: ${width}; width: ${width}; border-radius: 50%;`};

    ${({ fontSize }) => Boolean(fontSize) && `font-size: ${fontSize}`};
`;
