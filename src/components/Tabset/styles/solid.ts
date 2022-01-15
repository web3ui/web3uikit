import { css } from 'styled-components';
import colors from '../../../styles/colors';
import type { TabContainerProps } from '../components';

export const solidTab = css<TabContainerProps>`
    z-index: ${(props) => props.isActive ? 1 : 0};
    background-color: ${(props) => props.isActive ? colors.blueSkyDark : colors.white};
    color: ${(props) => props.isActive ? colors.white : colors.black};

    transition: all 100ms ease-in;

    &:not([aria-selected="true"]):not(:hover):focus {
        z-index: 2;
    }
    
    &:not([aria-selected="true"]):not(:disabled):hover {
        background-color: ${colors.blueLight};
    }

    &:disabled {
        color: ${colors.grey};
        cursor: not-allowed;
    }
`;

export const solidTabList = css`
    border-bottom: 1px solid ${colors.blueSkyDark};
`;