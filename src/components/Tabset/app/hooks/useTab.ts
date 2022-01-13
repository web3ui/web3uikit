import { useCallback, useContext } from 'react';
import { tabsContext } from '../tabsContext';
import { createTabId, createTabPanelId } from '../../utils';

export const useTab = (index: number) => {
    const {
        activePanel,
        focusedTab,
        setActivePanel,
        setFocusedTab
    } = useContext(tabsContext);

    const isActive = activePanel === index;
    const isFocused = focusedTab === index;
    const onClick = useCallback(() => {
        setActivePanel(index);
        setFocusedTab(index);
    }, [index])

    const panelId = createTabPanelId(index);
    const tabId = createTabId(index);

    return {
        isActive,
        isFocused,

        onClick,
        id: tabId,
        role: 'tab',
        tabIndex: isActive ? 0 : -1,
        "aria-selected": isActive,
        "aria-controls": panelId,
    }
}
