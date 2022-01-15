import styled from "styled-components";
import colors from '../../../../styles/colors';
import { getVariant } from '../../styles';
import type { TabPanelContainerProps} from './types';

export const TabPanelContainer = styled.div<TabPanelContainerProps>`
    position: relative;
    padding: 1em;

    ${(props) => getVariant(props.variant).tabPanel}

    :focus {
        z-index: 1;
        outline: none;
        box-shadow: 0 0 0 4px ${colors.blueSky};
    }
`;