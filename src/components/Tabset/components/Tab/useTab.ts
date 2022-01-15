import { useCallback } from 'react';
import { useTabsetContext } from '../../app';

export const useTab = (index: number) => {
    const {
        size,
        color,
        variant,
        vertical,
        activeIndex,
        focusedIndex,
        setActiveIndex,
        setFocusedIndex,
    } = useTabsetContext();

    const isActive = activeIndex === index;
    const isFocused = focusedIndex === index;

    const onMouseDown = useCallback(() => {
        setActiveIndex(index);
        setFocusedIndex(index);
    }, [index])

    const onFocus = () => {
        setFocusedIndex(index);
    }

    const panelId = 'w-tabpanel-' + index;
    const tabId = 'w-tab-' + index;

    return {
        isActive,
        isFocused,

        vertical,
        variant,
        color,
        size,

        onMouseDown,
        onFocus,
        id: tabId,
        role: 'tab',
        tabIndex: isActive ? 0 : -1,
        
        "aria-selected": isActive,
        "aria-controls": panelId,
    }
}
