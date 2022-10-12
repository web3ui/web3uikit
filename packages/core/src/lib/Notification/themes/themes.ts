import { css, keyframes } from 'styled-components';
import { color } from '@web3uikit/styles';
import { IPosition, notifyType } from '../types';

const error = css`
    border-color: ${color.red40};
    & > svg {
        fill: ${color.red40};
    }
`;
const info = css`
    border-color: ${color.navy40};
    & > svg {
        fill: ${color.navy40};
    }
`;
const success = css`
    border-color: ${color.mint40};
    & > svg {
        fill: ${color.mint40};
    }
`;
const warning = css`
    border-color: ${color.yellow50};
    & > svg {
        fill: ${color.yellow50};
    }
`;

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

export const getNotificationTheme = (type: notifyType) => {
    switch (type) {
        case 'error':
            return error;
        case 'success':
            return success;
        case 'warning':
            return warning;
        case 'info':
        default:
            return info;
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

export const getNotificationColor = (type: notifyType) => {
    switch (type) {
        case 'error':
            return color.red40;
        case 'success':
            return color.mint40;
        case 'warning':
            return color.yellow50;
        case 'info':
        default:
            return color.navy40;
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
