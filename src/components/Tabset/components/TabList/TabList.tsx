import React from "react";
import { TabListContainer } from './TabList.styles';
import { useTabList } from "./useTabList";
import type { TabListProps } from './types';

export const TabList: React.FC<TabListProps> = (props) => {
    const { children } = props;
    const {
        onKeyDown,
        ...rest
    } = useTabList();

    return (
        <TabListContainer 
            onKeyDown={onKeyDown}
            {...rest}
        >
            {children}
        </TabListContainer>
    )
}
