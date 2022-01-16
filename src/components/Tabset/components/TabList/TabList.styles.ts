import styled from 'styled-components';
import { getVariant } from '../../styles';
import type { TabListContainerProps } from './types';

export const TabListContainer = styled.div<TabListContainerProps>`
    position: relative;
    display: flex;
    flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};

    justify-content: left;
    align-items: stretch;

    ${(props) => getVariant(props.variant).tabList}
`;
