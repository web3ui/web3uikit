import { useCallback, useContext } from 'react';
import { tabsContext } from '../tabsContext';
import { createTabId, createTabPanelId } from '../../utils';

export const useTab = (name: string) => {
    const { activePanel, setActivePanel } = useContext(tabsContext);

    const isActive = activePanel === name;
    const activate = useCallback(() => setActivePanel(name), [name])

    const panelId = createTabPanelId(name);
    const tabId = createTabId(name);

    return {
        isActive,
        activate,

        id: tabId,
        role: 'tab',
        "aria-selected": isActive,
        "aria-controls": panelId,
    }
}
