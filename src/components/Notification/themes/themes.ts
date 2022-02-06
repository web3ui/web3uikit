import { css } from 'styled-components';
import color from '../../../styles/colors';
import { IPosition, notifyType } from '../types';

const error = css`
    border-color: ${color.red};
    & > svg {
        fill: ${color.red};
    }
`;
const info = css`
    border-color: ${color.blue};
    & > svg {
        fill: ${color.blue};
    }
`;
const success = css`
    border-color: ${color.green};
    & > svg {
        fill: ${color.green};
    }
`;
const warning = css`
    border-color: ${color.yellow};
    & > svg {
        fill: ${color.yellow};
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
        case 'bottomR':
            return css`
                right: 0;
                bottom: 0;
            `;
        case 'topL':
            return css`
                left: 0;
                top: 0;
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
            return color.red;
        case 'success':
            return color.green;
        case 'warning':
            return color.yellow;
        case 'info':
        default:
            return color.blue;
    }
};
