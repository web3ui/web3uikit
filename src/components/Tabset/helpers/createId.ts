export const TAB_ID_PREFIX = 'w-tab-';
export const TABPANEL_ID_PREFIX = 'w-tabpanel-';

export const createId = (index: number) => {
    return {
        tabId: TAB_ID_PREFIX + index,
        tabPanelId: TABPANEL_ID_PREFIX + index,
    }
}