import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
import { resetButtonCSS } from '../../../../styles/reset';
import { getVariant, getFontSize } from '../../styles';
import type { TabContainerProps } from './types';

export const TabContainer = styled.button<TabContainerProps>`
    ${resetButtonCSS}
    box-sizing: border-box;

    padding: 0.5em 1em;
    background-color: transparent;

    ${fonts.openSans}
    ${fonts.semiBold}
    ${(props) => getFontSize(props.size)}

    transition: all 100ms ease-in;

    ${(props) => getVariant(props.variant).tab}

    &:disabled {
        color: ${colors.greyLight};
        cursor: not-allowed;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 4px ${colors.blueSky};
    }
`;
