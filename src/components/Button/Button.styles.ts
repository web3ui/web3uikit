import styled from 'styled-components';
import {
    coloredBlue,
    coloredGreen,
    coloredRed,
    coloredYellow,
    statusDanger,
    statusSuccess,
} from './styles/coloredThemes';
import {
    iconLeading,
    iconOnly,
    iconTrailing,
    largeIconResize,
    smallIconResize,
} from './styles/iconStyles';
import {
    initialStyles,
    isLoadingMode,
    transparent,
} from './styles/inititalStyles';
import { sizeLarge, sizeRegular, sizeSmall } from './styles/sizeStyles';
import {
    ghost,
    link,
    outlineLarge,
    outlineRegular,
    outlineSmall,
    primary,
    secondary,
    status,
    text,
    translucent,
} from './styles/standardThemes';
import type { ButtonProps } from './types';

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
        case 'status':
            return status;
        case 'ghost':
            return ghost;
        case 'link':
            return link;
        case 'text':
            return text;
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

const getColored = (color: string, theme: string) => {
    console.table(coloredRed);
    switch (color) {
        case 'red':
            if (theme === 'status') return statusDanger;
            return coloredRed;
        case 'green':
            if (theme === 'status') return statusSuccess;
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

const ButtonStyled = styled.button<TStyleProps>`
    ${initialStyles}

    ${(p) => p.isFullWidth && 'width: 100%;'}
    ${(p) => p.theme && p.size && getThemeStyles(p.theme, p.size)}
    ${({ color, theme }) =>
        color &&
        (theme === 'colored' || theme === 'status') &&
        getColored(color, theme)}
    ${({ theme, size }) => theme !== 'link' && size && getSizeStyles(size)}
    ${(p) => p.iconLayout && getIconLayoutStyles(p.iconLayout)}

    ${(p) =>
        p.iconLayout === 'icon-only' && p.size === 'small' && smallIconResize()}
    ${(p) =>
        p.iconLayout === 'icon-only' && p.size === 'large' && largeIconResize()}
    ${(p) => p.iconLayout === 'icon-only' && iconOnlyBorderFix(p.theme)}

    ${(p) => p.isLoading && isLoadingMode}

    ${({ radius, theme }) =>
        theme === 'link'
            ? 'border-radius: 0px;'
            : radius && `border-radius: ${radius}px;`}

    ${(p) => p.iconColor && getIconColor(p.iconColor)}

    ${({ isTransparent }) => (isTransparent ? transparent : null)}
`;

export default {
    ButtonStyled,
};
