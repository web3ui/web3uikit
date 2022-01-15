import React, { useState } from "react";
import { TabsetContext } from "./tabsetContext";
import type { TabsetContextValue, TabsetProviderProps } from './types';

export const TabsetProvider: React.FC<TabsetProviderProps> = ({
    defaultIndex,
    children,
    ...rest
}) => {

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const tabsetProviderValue: TabsetContextValue = {
    activeIndex,
    focusedIndex,
    setActiveIndex,
    setFocusedIndex,
    ...rest,
  }

  return (
    <TabsetContext.Provider value={tabsetProviderValue}>
      {children}
    </TabsetContext.Provider>
  );
};
