import { css } from "styled-components"
import { getColor } from "..";
import colors from '../../../../styles/colors';
import type { TabContainerProps } from "../../components"

const tab = css<TabContainerProps>`
    border-bottom: ${(props) => props.isActive
        ? `3px solid ${getColor(props.color)}`
        : '3px solid transparent'};

    &:active {
        color: ${(props) => getColor(props.color)};
    }

    &:not([aria-selected="true"]):not(:hover):focus,
    &:not([aria-selected="true"]):not(:disabled):hover {
        color: ${(props) => getColor(props.color)};
    }
`

const tabList = css`
    border-bottom: 1px solid ${colors.greyLight};
`

export const light = {
    tab,
    tabList,
    tabPanel: '',
}