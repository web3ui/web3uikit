import { css } from 'styled-components';
import colors from '../../../styles/colors';
import type { TabContainerProps } from '../components';
import { getColor, getDarkColor, getLightColor } from './utils';

const tab = css<TabContainerProps>`
    background-color: ${(props) => props.isActive
        ? getColor(props.color)
        : 'transparent'};
    color: ${(props) => props.isActive ? colors.white : colors.grey};

    border-radius: 500px;

    &:active {
        background-color: ${(props) => getDarkColor(props.color)};
    }

    &:not([aria-selected="true"]):not(:hover):focus,
    &:not([aria-selected="true"]):not(:disabled):hover {
        background-color: ${(props) => getLightColor(props.color)};
    }
`;

const tabList = css`
    gap: 0.2em;
`;

export const pill = {
    tab,
    tabList,
    tabPanel: '',
}