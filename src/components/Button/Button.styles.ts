import styled from 'styled-components';
import type { ButtonProps } from './types';
import {
    hoverEffect,
    initialStyles,
    isLoadingMode,
    transparent,
} from './styles/inititalStyles';
import {
    primary,
    regular,
    outline,
    translucent,
} from './styles/standardThemes';
import { sizeSmall, sizeRegular, sizeLarge } from './styles/sizeStyles';
import {
    coloredRed,
    coloredGreen,
    coloredBlue,
    coloredYellow,
} from './styles/coloredThemes';
import {
    iconLeading,
    iconOnly,
    iconTrailing,
    largeIconResize,
    smallIconResize,
} from './styles/iconStyles';

type TStyleProps = Pick<
    ButtonProps,
    | 'theme'
    | 'iconLayout'
    | 'size'
    | 'color'
    | 'isFullWidth'
    | 'isLoading'
    | 'radius'
    | 'isTransparent'
    | 'iconColor'
>;

const getThemeStyles = (theme: string) => {
    switch (theme) {
        case 'primary':
            return primary;
        case 'outline':
            return outline;
        case 'translucent':
            return translucent;
        default:
            return regular;
    }
};

const getIconLayoutStyles = (iconLayout: string) => {
    switch (iconLayout) {
        case 'trailing':
            return iconTrailing;
        case 'icon-only':
            return iconOnly;
        default:
            return iconLeading;
    }
};

const getSizeStyles = (size: string) => {
    switch (size) {
        case 'large':
            return sizeLarge;
        case 'small':
            return sizeSmall;
        default:
            return sizeRegular;
    }
};

const getColored = (color: string) => {
    switch (color) {
        case 'red':
            return coloredRed;
        case 'green':
            return coloredGreen;
        case 'blue':
            return coloredBlue;
        case 'yellow':
            return coloredYellow;
        default:
            return regular;
    }
};

const iconOnlyBorderFix = (theme: string) => {
    switch (theme) {
        case 'colored':
            return 'border-width: 2px;';
        case 'outline':
            return 'border-width: 2px;';
        default:
            return;
    }
};

const getIconColor = (color: string) => {
    return `
    svg 
        {
            fill: ${color};
        }
    `;
};

export const ButtonStyled = styled.button<TStyleProps>`
    ${initialStyles}

    ${(p) => p.isFullWidth && 'width: 100%;'}
    ${(p) => p.theme && getThemeStyles(p.theme)}
    ${(p) => p.color && p.theme === 'colored' && getColored(p.color)}
    ${(p) => p.size && getSizeStyles(p.size)}
    ${(p) => p.iconLayout && getIconLayoutStyles(p.iconLayout)}

    ${(p) =>
        p.iconLayout === 'icon-only' && p.size === 'small' && smallIconResize()}
    ${(p) =>
        p.iconLayout === 'icon-only' && p.size === 'large' && largeIconResize()}
    ${(p) => p.iconLayout === 'icon-only' && iconOnlyBorderFix(p.theme)}

    ${(p) => p.isLoading && isLoadingMode}

    ${(p) => p.radius && `border-radius: ${p.radius}px`}

    ${(p) => (p.isTransparent ? transparent : hoverEffect)}

    ${(p) => p.iconColor && getIconColor(p.iconColor)}
`;
