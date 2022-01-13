import React from "react";
import { TabsProvider } from "../../app";
import { TabPanel } from "../TabPanel";
import { Tab } from "../Tab";
import { TabList } from "../TabList";
import { TabsContainer } from './Tabset.styles';
import { TabPanels } from '../TabPanels';
import type { TabsComposition, TabsProps } from './types';

export const Tabset: React.FC<TabsProps> & TabsComposition = (props) => {
  const { children, defaultIndex = 0 } = props;

  return (
    <TabsProvider initialActiveTab={defaultIndex}>
      <TabsContainer data-testing="tabs-container">
        {children}
      </TabsContainer>
    </TabsProvider>
  );
};

Tabset.Tab = Tab;
Tabset.Panel = TabPanel;
Tabset.TabList = TabList;
Tabset.Panels = TabPanels;
