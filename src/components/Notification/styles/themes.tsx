import { css } from 'styled-components';
import color from '../../../styles/colors';
import { type } from '../types';

const error = css`
    background-color: ${color.red};

    & > div > svg {
        fill: ${color.red};
    }
`;
const info = css`
    background-color: ${color.blueDark2};

    & > div > svg {
        fill: ${color.blueDark2};
    }

    & > div > span {
        color: ${color.greyIcons};
    }
`;
const success = css`
    background-color: ${color.green};

    & > div > svg {
        fill: ${color.green};
    }
`;
const warning = css`
    background-color: ${color.yellow};

    & > div > svg {
        fill: ${color.yellow};
    }
`;

export const getNotificationTheme = (type: type) => {
    switch (type) {
        case 'error':
            return error;
        case 'success':
            return success;
        case 'warning':
            return warning;
        default:
            return info;
    }
};

export default getNotificationTheme;
