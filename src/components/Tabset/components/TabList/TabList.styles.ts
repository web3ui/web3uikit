import styled from "styled-components";
import colors from '../../../../styles/colors';
import { outlineTabList, solidTabList } from '../../styles';
import type { TabListContainerProps } from './types';

export const TabListContainer = styled.div<TabListContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.vertical ? 'column' : 'row'};

    align-items: stretch;

    ${(props) => {
        switch (props.variant) {
            case 'solid': return solidTabList;
            case 'outline': return outlineTabList;
            default: return '';
        }
    }};
`;