import React, { useState, useMemo } from "react";
import { TabsetContext } from "./tabsetContext";
import type { TabsetContextValue, TabsetProviderProps } from './types';

export const TabsetProvider: React.FC<TabsetProviderProps> = ({
    theme,
    maxIndex,
    defaultIndex,
    children,
}) => {

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const tabsetProviderValue: TabsetContextValue = useMemo(() => ({
    theme,
    maxIndex,
    activeIndex,
    focusedIndex,
    setActiveIndex,
    setFocusedIndex,
  }), [
    theme.color,
    theme.size,
    theme.variant,
    theme.vertical,
    activeIndex,
    focusedIndex,
    maxIndex,
  ]);

  return (
    <TabsetContext.Provider value={tabsetProviderValue}>
      {children}
    </TabsetContext.Provider>
  );
};
