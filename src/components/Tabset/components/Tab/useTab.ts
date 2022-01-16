import { useTabsetContext } from '../../app';
import { createId } from '../../helpers';

export const useTab = (index: number) => {
    const {
        theme,
        activeIndex,
        focusedIndex,
        setActiveIndex,
        setFocusedIndex,
    } = useTabsetContext();

    const isActive = activeIndex === index;
    const isFocused = focusedIndex === index;

    const onMouseDown = () => {
        setActiveIndex(index);
        setFocusedIndex(index);
    };

    const onFocus = () => {
        setFocusedIndex(index);
    };

    const { tabId, tabPanelId } = createId(index);

    return {
        isActive,
        isFocused,

        ...theme,

        onMouseDown,
        onFocus,
        id: tabId,
        role: 'tab',
        tabIndex: isActive ? 0 : -1,

        'aria-selected': isActive,
        'aria-controls': tabPanelId,
    };
};
