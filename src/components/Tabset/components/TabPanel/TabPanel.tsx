import React from "react";
import { useTabPanel } from "../../app";
import { PanelContainer } from './TabPanel.styles';
import { TabPanelProps } from './types';

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, index } = props;
  const { isActive, ...attrs} = useTabPanel(index!);

  return !isActive ? null : (
    <PanelContainer {...attrs}>
      {children}
    </PanelContainer>
  )
};
