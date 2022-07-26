import { css } from 'styled-components';

const iconLeading = css`
    span {
        flex-direction: row-reverse;
    }
    svg {
        margin-right: 12px;
    }
`;
const iconTrailing = css`
    span {
        flex-direction: row;
    }
    svg {
        margin-left: 12px;
    }
`;
const iconOnly = css`
    align-items: center;
    border-width: 0;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 0;
    width: 32px;
    text-indent: -99999px;
`;

const smallIconResize = () => css`
    height: 24px;
    width: 24px;
`;

const largeIconResize = () => css`
    border-width: 4px;
    height: 40px;
    width: 40px;
`;

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

const getIconColor = (color: string) => {
    return css`
        svg {
            fill: ${color};
        }
    `;
};

export default {
    getIconColor,
    getIconLayoutStyles,
    largeIconResize,
    smallIconResize,
};
