import { useTabsetContext } from '../../app';

export const useTabList = () => {
    let {
        variant,
        vertical,
        maxIndex,
        activeIndex,
        focusedIndex,
        setFocusedIndex,
        setActiveIndex,
    } = useTabsetContext();

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (focusedIndex === -1) {
            focusedIndex = activeIndex;
        }

        switch (event.key) {
            case "ArrowLeft":
            case "ArrowUp": {
                return focusedIndex <= 0
                    ? null
                    : setFocusedIndex(focusedIndex - 1);
            };
            case "ArrowRight":
            case "ArrowDown": {
                return focusedIndex >= maxIndex
                    ? null
                    : setFocusedIndex(focusedIndex + 1);
            };

            case "Home": return setFocusedIndex(0);
            case "End": return setFocusedIndex(maxIndex);

            case "Enter": 
            case "Spacebar": return setActiveIndex(focusedIndex);
        }
    }

    return {
        onKeyDown,
        variant,
        vertical,
    }
}
