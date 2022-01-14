import styled from "styled-components";
import colors from "../../../../styles/colors";
import { resetButtonCSS } from '../../../../styles/reset';
import { solidTab, outlineTab } from '../../styles';
import type { TabContainerProps } from './types';

export const TabContainer = styled.button<TabContainerProps>`
    ${resetButtonCSS}
    box-sizing: border-box;

    margin: 0;
    padding: 0.5em 1em;

    background-color: transparent;

    font-size: 1rem;

    ${(props) => {
        switch (props.variant) {
            case 'solid': return solidTab;
            case 'outline': return outlineTab;
            default: return '';
        }
    }}

    :focus {
        outline: none;
        box-shadow: 0 0 0 4px ${colors.blueSky};
    }
`;
