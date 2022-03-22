import styled from 'styled-components';
import type { ButtonProps } from './types';
import {
    initialStyles,
    isLoadingMode,
    transparent,
    hoverEffect,
} from './styles/inititalStyles';
import {
    outlineLarge,
    outlineRegular,
    outlineSmall,
    primary,
    secondary,
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

const getThemeStyles = (theme: string, size: string) => {
    switch (theme) {
        case 'primary':
            return primary;
        case 'outline':
            switch (size) {
                case 'large':
                    return outlineLarge;
                case 'small':
                    return outlineSmall;
                case 'regular':
                default:
                    return outlineRegular;
            }
        case 'translucent':
            return translucent;
        case 'secondary':
        default:
            return secondary;
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
            return secondary;
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
    ${(p) => p.theme && p.size && getThemeStyles(p.theme, p.size)}
    ${(p) => p.color && p.theme === 'colored' && getColored(p.color)}
    ${(p) => p.size && getSizeStyles(p.size)}
    ${(p) => p.iconLayout && getIconLayoutStyles(p.iconLayout)}

    ${(p) =>
        p.iconLayout === 'icon-only' && p.size === 'small' && smallIconResize()}
    ${(p) =>
        p.iconLayout === 'icon-only' && p.size === 'large' && largeIconResize()}
    ${(p) => p.iconLayout === 'icon-only' && iconOnlyBorderFix(p.theme)}

    ${(p) => p.isLoading && isLoadingMode}

    ${(p) => p.radius && `border-radius: ${p.radius}px;`}

    ${(p) => p.iconColor && getIconColor(p.iconColor)}

    ${(p) => (p.isTransparent ? transparent : hoverEffect)}
`;
