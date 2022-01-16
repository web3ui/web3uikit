import styled from 'styled-components';
import type { TabsetContainerProps } from './types';

export const TabsetContainer = styled.div<TabsetContainerProps>`
    ${(props) => props.vertical && `display: flex;`};
    position: relative;
    background-color: white;
`;
