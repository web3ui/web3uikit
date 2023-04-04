import styled from 'styled-components';
import { color } from '@web3uikit/styles';
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

type TStyleProps = Pick<
    TagProps,
    'active' | 'fontSize' | 'padding' | 'theme' | 'tone' | 'width' | 'customize'
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

    ${({ theme, tone }) =>
        theme === 'chips' && tone === 'dark' && 'border: 0px;'};

    ${({ fontSize, customize }) => (Boolean(fontSize) || customize?.fontSize) && `font-size: ${fontSize ?? customize?.fontSize};`}
    ${({ padding, customize }) => (Boolean(padding) || customize?.padding) && `padding: ${padding ?? customize?.padding};`}

    background: ${(p) =>
        p.customize?.backgroundColor
            ? p.customize?.backgroundColor
            : ''};
    border: ${(p) =>
        p.customize?.border ? p.customize?.border : 'none'};

    border-radius: ${(p) =>
        p.customize?.borderRadius ? p.customize?.borderRadius : ''};

    font-weight: ${(p) =>
        p.customize?.fontWeight ? p.customize?.fontWeight : ''};

    margin: ${(p) =>
        p.customize?.margin ? p.customize?.margin : ''};
    
    color: ${(p) =>
        p.customize?.color ? p.customize?.color : ''};
`;

export default {
    SpanStyled,
    TagStyled,
};
