import styled from "styled-components";
import colors from '../../../../styles/colors';
import { outlineTabPanel } from '../../styles';
import type { TabPanelContainerProps} from './types';

export const TabPanelContainer = styled.div<TabPanelContainerProps>`
    padding: 1em;

    ${(props) => {
        switch (props.variant) {
            case 'outline': return outlineTabPanel;
            default: return '';
        }
    }}

    :focus {
        outline: none;
        box-shadow: 0 0 0 4px ${colors.blueSky};
    }
`;