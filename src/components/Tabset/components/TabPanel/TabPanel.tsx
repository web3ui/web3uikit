import React from 'react';
import { useTabPanel } from './useTabPanel';
import { TabPanelContainer } from './TabPanel.styles';
import { TabPanelProps } from './types';

export const TabPanel: React.FC<TabPanelProps> = (props) => {
    const { children, index } = props;
    const { isActive, ...rest } = useTabPanel(index!);

    return !isActive ? null : (
        <TabPanelContainer {...rest}>{children}</TabPanelContainer>
    );
};
