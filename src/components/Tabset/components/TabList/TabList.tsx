import React from "react";
import { TabListContainer } from './TabList.styles';
import { useTabList } from "./useTabList";
import type { TabListProps } from './types';

export const TabList: React.FC<TabListProps> = (props) => {
    const { children } = props;
    const { onKeyDown, variant, vertical } = useTabList();

    return (
        <TabListContainer 
            role="tablist"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
            vertical={vertical}
            variant={variant}
        >
            {children}
        </TabListContainer>
    )
}
