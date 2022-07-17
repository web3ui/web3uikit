import { css } from 'styled-components';

const sizeSmall = css`
    border-radius: 20px;
    font-size: 14px;
    padding: 0 16px;
`;

const sizeRegular = css`
    font-size: 14px;
    padding: 2px 14px;
`;

const sizeLarge = css`
    padding: 6px 22px;
`;

const sizeXL = css`
    padding: 16px 24px;
`;

const getSizeStyles = (size: string) => {
    switch (size) {
        case 'large':
            return sizeLarge;
        case 'small':
            return sizeSmall;
        case 'xl':
            return sizeXL;
        default:
            return sizeRegular;
    }
};

export default {
    getSizeStyles,
};
