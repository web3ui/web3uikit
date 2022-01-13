import { useContext } from 'react';
import { tabsContext } from '../tabsContext';
import { createTabPanelId, createTabId } from '../../utils';

export const useTabPanel = (index: number) => {
    const { activePanel } = useContext(tabsContext);

    const isActive = activePanel === index;
    const panelId = createTabPanelId(index);
    const tabId = createTabId(index);

    return {
        isActive,

        id: panelId,
        role: "tabpanel",
        tabIndex: 0,
        "aria-labelledby": tabId,
    }
}

