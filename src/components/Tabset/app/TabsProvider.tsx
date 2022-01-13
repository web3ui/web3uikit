import React, { useState, useMemo } from "react";
import { tabsContext } from "./tabsContext";
import type { TabsContextValue, TabsProviderProps } from './types';

export const TabsProvider: React.FC<TabsProviderProps> = (props) => {
  const { children, initialActiveTab } = props;

  const [activePanel, setActivePanel] = useState(initialActiveTab);
  const [focusedTab, setFocusedTab] = useState(initialActiveTab);
  const [maxNumber, setMaxNumber] = useState(0);

  const tabsProviderValue = useMemo<TabsContextValue>(
    () => ({
      activePanel,
      focusedTab,
      maxNumber,
      setActivePanel,
      setFocusedTab,
      setMaxNumber,
    }),
    [activePanel, focusedTab, maxNumber]
  );

  return (
    <tabsContext.Provider value={tabsProviderValue}>
      {children}
    </tabsContext.Provider>
  );
};
