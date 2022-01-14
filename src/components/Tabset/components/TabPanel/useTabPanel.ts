import { useTabsetContext } from '../../app';

export const useTabPanel = (index: number) => {
    const { activeIndex, variant } = useTabsetContext();

    const isActive = activeIndex === index;
    const panelId = 'w-tabpanel-' + index;
    const tabId = 'w-tab-' + index;

    return {
        isActive,
        variant,

        id: panelId,
        role: "tabpanel",
        tabIndex: 0,
        "aria-labelledby": tabId,
    }
}

