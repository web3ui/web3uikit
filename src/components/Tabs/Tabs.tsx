import React from "react";
import { TabsProvider } from "./TabsProvider";
import { TabPanel, TabPanelProps } from "./TabPanel";
import { Tab, TabProps } from "./Tab";
import { TabList, TabListProps } from "./TabList";
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
      <TabsContainer>
        {children}
      </TabsContainer>
    </TabsProvider>
  );
};

Tabs.displayName = "Tabs";
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.TabList = TabList;