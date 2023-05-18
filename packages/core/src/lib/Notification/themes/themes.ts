import { css, keyframes } from 'styled-components';
import { TThemeName, color, colorTheme } from '@web3uikit/styles';
import { IPosition, notifyType } from '../types';

const openRight = keyframes` 
    0% {
        left: 150%;
    }

    100% {
        left: 0;
    }
`;

const closeRight = keyframes` 
    0% {
        left: 0;
    }

    100% {
        left: 150%;
    }
`;

const openLeft = keyframes` 
    0% {
        left: -150%;
    }

    100% {
        left: 0;
    }
`;

const closeLeft = keyframes` 
    0% {
        left: 0;
    }

    100% {
        left: -150%;
    }
`;

export const getNotificationTheme = (type: notifyType, theme: TThemeName) => {
    switch (type) {
        case 'error':
            return css`
                border-color: ${colorTheme[theme].destructive30};
                & > svg {
                    fill: ${colorTheme[theme].destructive30};
                }
            `;
        case 'success':
            return css`
                border-color: ${colorTheme[theme].positive40};
                & > svg {
                    fill: ${colorTheme[theme].positive40};
                }
            `;
        case 'warning':
            return css`
                border-color: ${colorTheme[theme].warning50};
                & > svg {
                    fill: ${colorTheme[theme].warning50};
                }
            `;
        default:
            return css`
                border-color: ${colorTheme[theme].default30};
                & > svg {
                    fill: ${colorTheme[theme].default30};
                }
            `;
    }
};

export const getNotificationPosition = (position: IPosition) => {
    switch (position) {
        case 'bottomL':
            return css`
                left: 0;
                bottom: 0;
            `;
        case 'topL':
            return css`
                left: 0;
                top: 0;
            `;
        case 'bottomR':
            return css`
                right: 0;
                bottom: 0;
            `;
        case 'topR':
        default:
            return css`
                right: 0;
                top: 0;
            `;
    }
};

export const getNotificationColor = (type: notifyType, theme: TThemeName) => {
    switch (type) {
        case 'error':
            return colorTheme[theme].destructive30;
        case 'success':
            return colorTheme[theme].positive40;
        case 'warning':
            return colorTheme[theme].warning50;
        default:
            return colorTheme[theme].default30;
    }
};

export const getNotificationAnimation = (
    position: IPosition,
    isClosing?: boolean,
) => {
    switch (position) {
        case 'bottomL':
        case 'topL':
            return css`
                animation: ${isClosing ? closeLeft : openLeft} 1s;
            `;
        case 'bottomR':
        case 'topR':
            return css`
                animation: ${isClosing ? closeRight : openRight} 1s;
            `;
        default:
            throw new Error('Make sure you provided position');
    }
};
