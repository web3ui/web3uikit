import React from "react";
import { useActiveTab } from "./hooks";
import { PanelContainer } from './TabPanel.styles';

export type TabPanelProps = {
  name: string;
};

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, name } = props;
  const isActive = useActiveTab(name);

  return !isActive ? null : (
    <PanelContainer role="tabpanel">
      {children}
    </PanelContainer>
  )
};

TabPanel.displayName = "TabPanel";