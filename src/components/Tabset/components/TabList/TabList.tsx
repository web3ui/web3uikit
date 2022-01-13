import React, { useMemo, useEffect } from "react";
import { StyledTabList } from './TabList.styles';
import { useTabList } from '../../app';
import { setIndexFor } from '../../utils';
import type { TabListProps } from './types';

export const TabList: React.FC<TabListProps> = (props) => {
    const { children } = props;
    const { onKeyDown, setMaxNumber } = useTabList();

    const indexedChildren = useMemo(() => setIndexFor(children), [children])

    useEffect(() => {
        setMaxNumber(React.Children.count(children));
    }, [])

    return (
        <StyledTabList 
            role="tablist"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
        >
            {indexedChildren}
        </StyledTabList>
    )
}
