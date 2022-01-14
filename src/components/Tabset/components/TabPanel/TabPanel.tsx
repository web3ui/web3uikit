import React from "react";
import { useTabPanel } from "./useTabPanel";
import { TabPanelContainer } from './TabPanel.styles';
import { TabPanelProps } from './types';

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, index } = props;
  const { isActive, ...attrs} = useTabPanel(index!);

  return !isActive ? null : (
    <TabPanelContainer {...attrs}>
      {children}
    </TabPanelContainer>
  )
};
