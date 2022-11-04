import styled from 'styled-components';
import { color, getShade, resetCSS, fonts } from '@web3uikit/styles';
import iconStyles from './styles/ButtonBaseIcon.styles';
import sizeStyles from './styles/ButtonBaseSize.styles';
import PropDisplayStyles from './styles/ButtonBaseTest.styles';
import { ButtonProps } from '../types';

const { getIconColor, getIconLayoutStyles, largeIconResize, smallIconResize } =
    iconStyles;
const { getSizeStyles } = sizeStyles;
const { linkStyles, textStyles, transparentStyles } = PropDisplayStyles;

const BaseButtonStyled = styled.button<ButtonProps>`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    background-origin: border-box;
    border-radius: ${({ radius }) => (radius ? `${radius}px;` : '12px')};
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: center;
    overflow: hidden;
    padding: 2px 4px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease;
    width: ${(p) => (p.isFullWidth ? '100%' : 'fit-content')};

    :hover {
        background-color: ${getShade('light', 10)};
    }

    :focus {
        border-color: ${color.navy40};
    }

    :disabled {
        opacity: 50%;
        pointer-events: none;
    }

    span {
        align-items: center;
        display: flex;
        pointer-events: none;
        z-index: 1;
    }

    svg {
        pointer-events: none;
        z-index: 1;
    }

    // minor theme and props style corrections
    ${({ isTransparent }) => isTransparent && transparentStyles}
    ${({ theme, size }) => theme !== 'link' && size && getSizeStyles(size)}
    ${({ theme }) => theme === 'link' && linkStyles}
    ${({ theme }) => theme === 'text' && textStyles}

    // if icon styles corrections
    ${({ icon, iconLayout }) =>
        icon && iconLayout && getIconLayoutStyles(iconLayout)}
    ${({ icon, iconLayout, size }) =>
        icon &&
        iconLayout === 'icon-only' &&
        size === 'small' &&
        smallIconResize()}
    ${({ icon, iconLayout, size }) =>
        icon &&
        iconLayout === 'icon-only' &&
        size === 'large' &&
        largeIconResize()}
    ${({ icon, iconColor }) => icon && iconColor && getIconColor(iconColor)}
`;

export default {
    BaseButtonStyled,
};
