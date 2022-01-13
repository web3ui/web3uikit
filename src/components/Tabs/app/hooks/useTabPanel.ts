import { useContext } from 'react';
import { tabsContext } from '../tabsContext';
import { createTabPanelId, createTabId } from '../../utils';

export const useTabPanel = (name: string) => {
    const { activePanel } = useContext(tabsContext);

    const isActive = activePanel === name;
    const panelId = createTabPanelId(name);
    const tabId = createTabId(name);

    return {
        isActive,

        id: panelId,
        role: "tabpanel",
        "aria-labelledby": tabId,
    }
}

