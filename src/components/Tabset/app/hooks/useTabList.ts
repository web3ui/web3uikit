import { useContext } from 'react';
import { tabsContext } from '../tabsContext';

export const useTabList = () => {
    const {
        focusedTab,
        maxNumber,
        setFocusedTab,
        setActivePanel,
        setMaxNumber
    } = useContext(tabsContext);

    const onKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case "ArrowLeft":
            case "ArrowUp": {
                if (focusedTab <= 0) {
                    return;
                }

                return setFocusedTab(focusedTab - 1)
            };
            case "ArrowRight":
            case "ArrowDown": {
                if (focusedTab >= maxNumber - 1) {
                    return;
                }

                return setFocusedTab(focusedTab + 1)
            };

            case "Home": return setFocusedTab(0);
            case "End": return setFocusedTab(maxNumber - 1);

            case "Enter": 
            case "Spacebar": return setActivePanel(focusedTab);
        }
    }

    return {
        onKeyDown,
        setMaxNumber,
    }
}
