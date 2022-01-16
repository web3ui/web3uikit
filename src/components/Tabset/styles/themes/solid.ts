import { css } from 'styled-components';
import colors from '../../../../styles/colors';
import { getColor, getDarkColor } from '../utils';
import { TabContainerProps, TabListContainerProps } from '../../components';

const tab = css<TabContainerProps>`
    z-index: ${(props) => (props.isActive ? 1 : 0)};

    background-color: ${(props) =>
        props.isActive ? getColor(props.color) : 'transparent'};
    color: ${(props) => (props.isActive ? colors.white : colors.grey)};

    border-radius: ${(props) => (props.vertical ? '4px' : '4px 4px 0 0')};

    &:active {
        background-color: ${(props) => getDarkColor(props.color)};
    }

    &:not([aria-selected='true']):not(:hover):focus {
        z-index: 2;
    }

    &:not([aria-selected='true']):not(:disabled):hover {
        background-color: ${colors.blueLight};
    }
`;

const tabList = css<TabListContainerProps>`
    border-bottom: ${(props) =>
        props.vertical ? 'none' : `1px solid ${getColor(props.color)}`};
`;

export const solid = {
    tab,
    tabList,
    tabPanel: '',
};
