import React from "react";
import { StyledTabList } from './TabList.styles';
import { TabListProps } from './types';

export const TabList: React.FC<TabListProps> = (props) => {
    const { children } = props;

    return (
        <StyledTabList 
            role="tablist"
            aria-orientation="horizontal"
        >
            {children}
        </StyledTabList>
    )
}
