import styled from "styled-components";
import colors from '../../../../styles/colors';
import type { TabListContainerProps } from './types';

export const TabListContainer = styled.div<TabListContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.vertical ? 'column' : 'row'};

    align-items: stretch;

    border-bottom: ${(props) => {
        switch (props.variant) {
            case 'solid': {
                return '1px solid ' + colors.blueSkyDark;
            }
            case 'outline': {
                return '1px solid ' + colors.greyLight;
            }
            default: return 'none';
        }
    }};
`;