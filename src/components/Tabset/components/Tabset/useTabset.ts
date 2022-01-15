import { cloneElement, ReactElement } from 'react';
import { isTab, isTabList, isTabPanel } from '../../helpers';
import type { TabProps } from '../Tab';
import type { TabListProps } from '../TabList';
import type { TabPanelProps } from '../TabPanel';
import type { TabsetChildren } from './types';

export const useTabset = (children: TabsetChildren, disabled: number[]) => {
    const tabList = children.find<ReactElement<TabListProps>>(isTabList);
    if (tabList === undefined) {
        throw new Error('The Tabset must contains a TabList component');
    }

    const tabs = tabList.props.children.filter<ReactElement<TabProps>>(isTab);
    const panels = children.filter<ReactElement<TabPanelProps>>(isTabPanel);

    if (tabs.length !== panels.length) {
        throw new Error('The number of tabs and panels should be equal');
    }

    let j = 0; 

    const indexedTabs = [];
    const indexedPanels = [];

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        const panel = panels[i];
        const isDisabled = tab.props.disabled || disabled.includes(i);
        const index = isDisabled ? -1 : j++;

        indexedTabs.push(cloneElement(tab, { index, key: "." + i, disabled: isDisabled }));
        indexedPanels.push(cloneElement(panel, { index, key: "." + i }));
    }

    const indexedTabList = cloneElement(tabList, { key: 'tabList' }, indexedTabs);

    return {
        maxIndex: j - 1,
        indexedChildren: [indexedTabList, ...indexedPanels] as const,
    }
}