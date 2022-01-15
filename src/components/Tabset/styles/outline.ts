import colors from '../../../styles/colors';
import { css } from 'styled-components';

export const outlineTab = css`
    margin-bottom: -1px;

    border: 1px solid ${colors.greyLight};
    background-color: white;

    transition: box-shadow 100ms ease-in;

    :active,
    &[aria-selected="true"] {
        z-index: 1;
        border-bottom: 1px solid transparent;
    }

    :first-child {
        border-top-left-radius: 4px;
    }

    :last-child {
        border-top-right-radius: 4px;
    }

    :not(:first-child) {
        border-left: none;
    }
`;

export const outlineTabList = css``;

export const outlineTabPanel = css`
    border-left: 1px solid ${colors.greyLight};
    border-right: 1px solid ${colors.greyLight};
    border-bottom: 1px solid ${colors.greyLight};
`;
