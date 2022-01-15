import colors from '../../../../styles/colors';
import { css } from 'styled-components';
import type { TabContainerProps } from '../../components';
import { getLightColor } from '../utils';

const outlineBorder = `1px solid ${colors.greyLight}`

export const tab = css<TabContainerProps>`
    margin-bottom: -1px;

    border: 1px solid ${colors.greyLight};
    background-color: ${(props) => props.isActive 
        ? colors.white
        : getLightColor(props.color)};

    :active,
    &[aria-selected="true"] {
        z-index: 1;
        border-bottom: 1px solid transparent;
    }

    &:not([aria-selected="true"]):not(:hover):focus {
        z-index: 2;
        border-left: ${outlineBorder}
    }

    :first-child {
        border-top-left-radius: 4px;
    }

    :last-child {
        border-top-right-radius: 4px;
    }

    :not(:first-child) {
        border-left: 1px solid transparent;
    }
`;

export const tabList = css`
    border-bottom: ${outlineBorder};
`;

export const tabPanel = css`
    border-left: ${outlineBorder};
    border-right: ${outlineBorder};
    border-bottom: ${outlineBorder};
`;

export const outline = {
    tab,
    tabList,
    tabPanel,
}
