import colors from '../../../../styles/colors';
import { css } from 'styled-components';
import { TabContainerProps, TabListContainerProps, TabPanelContainerProps } from '../../components';
import { getLightColor } from '../utils';

const outlineBorder = `1px solid ${colors.greyLight}`;

export const tab = css<TabContainerProps>`
    ${(props) => props.vertical
        ? `margin-right: -1px`
        : `margin-bottom: -1px`};

    border: 1px solid ${colors.greyLight};
    background-color: ${(props) =>
        props.isActive ? colors.white : getLightColor(props.color)};

    :active,
    &[aria-selected='true'] {
        z-index: 1;
        ${(props) => props.vertical
            ? 'border-right: 1px solid transparent'
            : 'border-bottom: 1px solid transparent'};
    }

    &:not([aria-selected='true']):not(:hover):focus {
        z-index: 2;
        border-left: ${outlineBorder};
    }

    :first-child {
        border-top-left-radius: 4px;
    }

    :last-child {
        ${(props) => props.vertical
            ? 'border-bottom-left-radius: 4px'
            : 'border-top-right-radius: 4px'};
    }

    ${(props) => props.vertical && `
        :not(:last-child) {
            border-bottom: 1px solid transparent;
        }
    `}

    :not(:first-child) {
        ${(props) => props.vertical
            ? `border-left: 1px solid ${colors.greyLight}`
            : 'border-left: 1px solid transparent'};
    }
`;

export const tabList = css<TabListContainerProps>`
    border-bottom: ${(props) => props.vertical ? 'none' : outlineBorder};
`;

export const tabPanel = css<TabPanelContainerProps>`
    ${(props) => props.vertical
        ? `border-top: ${outlineBorder}`
        : `border-left: ${outlineBorder}`};
    border-right: ${outlineBorder};
    border-bottom: ${outlineBorder};
`;

export const outline = {
    tab,
    tabList,
    tabPanel,
};
