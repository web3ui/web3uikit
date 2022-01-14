import React, { useState, useMemo } from "react";
import { TabsetContext } from "./tabsetContext";
import type { TabsetContextValue, TabsetProviderProps } from './types';

export const TabsetProvider: React.FC<TabsetProviderProps> = (props) => {
  const { defaultIndex, variant, children, vertical, maxIndex } = props;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const tabsetProviderValue = useMemo<TabsetContextValue>(
    () => ({
      variant,
      vertical,
      maxIndex,
      activeIndex,
      focusedIndex,
      setActiveIndex,
      setFocusedIndex,
    }),
    [activeIndex, focusedIndex, maxIndex]
  );

  return (
    <TabsetContext.Provider value={tabsetProviderValue}>
      {children}
    </TabsetContext.Provider>
  );
};
