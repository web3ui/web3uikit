import { useTabsetContext } from '../../app';

export const useTabList = () => {
    let {
        color,
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

            case " ":
            case "Enter": return setActiveIndex(focusedIndex);
        }
    }

    const orientation: "vertical" | "horizontal" = vertical
        ? "vertical"
        : "horizontal";

    return {
        onKeyDown,
        variant,
        vertical,
        color,

        role: "tablist",
        "aria-orientation": orientation,
    }
}
