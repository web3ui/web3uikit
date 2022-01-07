import { css } from 'styled-components';

// if icon styles
export const iconLeading = css`
    flex-direction: row;

    svg {
        margin-right: 8px;
    }
`;
export const iconTrailing = css`
    flex-direction: row-reverse;

    svg {
        margin-left: 8px;
    }
`;
export const iconOnly = css`
    align-items: center;
    border-radius: 12px;
    border-width: 0;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 0;
    text-indent: -99999px;
    width: 32px;
`;

export const smallIconResize = () => css`
    height: 24px;
    width: 24px;
`;

export const largeIconResize = () => css`
    border-width: 4px;
    height: 40px;
    width: 40px;
`;
