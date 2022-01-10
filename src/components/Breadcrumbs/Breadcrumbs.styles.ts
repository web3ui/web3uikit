import { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';

export const olStyle = css`
    ${resetCSS}
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
`;
export const navStyle = css`
    ${resetCSS}
`;

export const liStyle = css`
    ${resetCSS}
    ${fonts.semiBold}
  display: list-item;
    user-select: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;

    svg:first-child {
        margin-right: 5px;
    }

    &:last-child {
        pointer-events: none;
    }

    &:hover {
        color: ${color.blueDark};
    }
`;

export const separatorStyle = css`
    ${resetCSS}
    display: flex;
    user-select: none;
    color: ${color.greyIcons};
    margin: 0 2px;
`;
