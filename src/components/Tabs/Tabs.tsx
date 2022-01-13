import React from "react";
import { TabsProvider } from "./app";
import { TabPanel } from "./TabPanel";
import type { TabPanelProps } from "./TabPanel";
import { Tab } from "./Tab";
import type { TabProps } from "./Tab";
import { TabList } from "./TabList";
import type { TabListProps } from "./TabList";
import { TabsContainer } from './Tabs.styles';

export type TabsComposition = {
  Tab: React.FC<TabProps>;
  Panel: React.FC<TabPanelProps>;
  TabList: React.FC<TabListProps>;
};

export type TabsProps = {
  initialActiveTab: string;
};

export const Tabs: React.FC<TabsProps> & TabsComposition = (props) => {
  const { children, initialActiveTab } = props;

  return (
    <TabsProvider initialActiveTab={initialActiveTab}>
      <TabsContainer data-testing="tabs-container">
        {children}
      </TabsContainer>
    </TabsProvider>
  );
};

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.TabList = TabList;
