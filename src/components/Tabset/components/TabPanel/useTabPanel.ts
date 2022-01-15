import { useTabsetContext } from '../../app';

export const useTabPanel = (index: number) => {
    const { activeIndex, theme } = useTabsetContext();

    const isActive = activeIndex === index;
    const panelId = 'w-tabpanel-' + index;
    const tabId = 'w-tab-' + index;

    return {
        isActive,
        ...theme,

        id: panelId,
        role: "tabpanel",
        tabIndex: 0,
        "aria-labelledby": tabId,
    }
}

