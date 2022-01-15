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
  vertical = false,
  variant = 'solid',
  color = 'blue',
  size = 'medium',
  disabled = [],
  children,
}) => {
  const {
    maxIndex,
    indexedChildren,
  } = useTabset(children, disabled);

  return (
    <TabsetProvider
      defaultIndex={defaultIndex}
      variant={variant}
      vertical={vertical}
      maxIndex={maxIndex}
      color={color}
      size={size}
    >
      <TabsetContainer vertical={vertical}>
        {indexedChildren}
      </TabsetContainer>
    </TabsetProvider>
  );
};

Tabset.Tab = Tab;
Tabset.Panel = TabPanel;
Tabset.TabList = TabList;
