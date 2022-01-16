import React from 'react';
import { TabsetContextTheme, TabsetProvider } from '../../app';
import { useTabset } from './useTabset';
import { Tab } from '../Tab';
import { TabList } from '../TabList';
import { TabPanel } from '../TabPanel';
import { TabsetContainer } from './Tabset.styles';
import type { TabsetComponent } from './types';

export const Tabset: TabsetComponent = ({
    size = 'medium',
    color = 'blue',
    variant = 'solid',
    vertical = false,
    disabled = [],
    defaultIndex = 0,
    children,
}) => {
    const { maxIndex, indexedChildren } = useTabset(children, disabled);

    if (defaultIndex > maxIndex) {
        defaultIndex = 0;
    }

    const theme: TabsetContextTheme = {
        size,
        color,
        variant,
        vertical,
    };

    return (
        <TabsetProvider
            theme={theme}
            maxIndex={maxIndex}
            defaultIndex={defaultIndex}
        >
            <TabsetContainer vertical={vertical} data-testid="tabset">
                {indexedChildren}
            </TabsetContainer>
        </TabsetProvider>
    );
};

Tabset.Tab = Tab;
Tabset.Panel = TabPanel;
Tabset.TabList = TabList;
