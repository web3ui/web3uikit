import React from "react";
import { TabsetProvider } from '../../app';
import { useTabset } from './useTabset';
import { Tab } from "../Tab";
import { TabList } from "../TabList";
import { TabPanel } from "../TabPanel";
import { TabsetContainer } from './Tabset.styles';
import type { TabsetComponent } from './types';

export const Tabset: TabsetComponent = ({
  defaultIndex = 0,
  variant = 'solid',
  vertical = false,
  children,
}) => {
  const {
    maxIndex,
    indexedChildren,
  } = useTabset(children);

  return (
    <TabsetProvider
      defaultIndex={defaultIndex}
      variant={variant}
      vertical={vertical}
      maxIndex={maxIndex}
    >
      <TabsetContainer>
        {indexedChildren}
      </TabsetContainer>
    </TabsetProvider>
  );
};

Tabset.Tab = Tab;
Tabset.Panel = TabPanel;
Tabset.TabList = TabList;
