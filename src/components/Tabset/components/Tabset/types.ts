import React from "react";
import type { TabProps } from "../Tab";
import type { TabListProps } from "../TabList";
import type { TabPanelProps } from "../TabPanel";

export type TabsetComponent = React.VFC<TabsetProps> & TabsetComposition;

export type TabsetProps = {
  /**
   * Index for default opened tab
   */
  defaultIndex?: number;
  /**
   * Style variant
   */
  variant?: TabsetStyleVariant;
  /**
   * Vertical tablist orientation
   */
  vertical?: boolean;
  children: TabsetChildren;
};

export type TabsetComposition = {
  Tab: React.FC<TabProps>;
  Panel: React.FC<TabPanelProps>;
  TabList: React.FC<TabListProps>;
};

export type TabsetChildren = (
    React.ReactElement<TabListProps> |
    React.ReactElement<TabPanelProps>
)[];

export type TabsetStyleVariant = 
  | 'unstyled'
  | 'outline'
  | 'solid'
  | 'pill'
  | 'light';
