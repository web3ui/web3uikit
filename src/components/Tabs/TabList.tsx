import React from "react";
import { StyledTabList } from './TabList.styles';
import type { TabProps } from './Tab';

export type TabListProps = {
    children: React.ReactElement<TabProps>[];
}

export const TabList: React.FC<TabListProps> = (props) => {
    const { children } = props;

    return (
        <StyledTabList role="tablist">
            {children}
        </StyledTabList>
    )
}

TabList.displayName = "TabList";