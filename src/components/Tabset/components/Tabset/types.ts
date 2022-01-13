import React from "react";
import type { TabListProps } from "../TabList";
import type { TabProps } from "../Tab";
import type { TabPanelProps } from "../TabPanel";
import type { TabPanelsProps } from "../TabPanels";

export type TabsComposition = {
  Tab: React.FC<TabProps>;
  Panel: React.FC<TabPanelProps>;
  TabList: React.FC<TabListProps>;
  Panels: React.FC<TabPanelsProps>;
};

export type TabsProps = {
  defaultIndex?: number;
  children: [
      React.ReactElement<TabPanelProps>,
      React.ReactElement<TabListProps>
    ];
};

