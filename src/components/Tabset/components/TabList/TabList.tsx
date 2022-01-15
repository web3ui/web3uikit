import React from "react";
import { TabListContainer } from './TabList.styles';
import { useTabList } from "./useTabList";
import type { TabListProps } from './types';

export const TabList: React.FC<TabListProps> = (props) => {
    const { children } = props;
    const {
        variant,
        vertical,
        onKeyDown,
        ...attrs
    } = useTabList();

    return (
        <TabListContainer 
            onKeyDown={onKeyDown}
            vertical={vertical}
            variant={variant}

            {...attrs}
        >
            {children}
        </TabListContainer>
    )
}
