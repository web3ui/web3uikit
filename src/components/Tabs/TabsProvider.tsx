import React, { useState, useMemo } from "react";
import { tabsContext, TabsContextValue } from "./tabsContext";

export type TabsProviderProps = {
  initialActiveTab: string;
};

export const TabsProvider: React.FC<TabsProviderProps> = (props) => {
  const { children, initialActiveTab } = props;
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const tabsProviderValue = useMemo<TabsContextValue>(
    () => ({
      activeTab,
      setActiveTab
    }),
    [activeTab]
  );

  return (
    <tabsContext.Provider value={tabsProviderValue}>
      {children}
    </tabsContext.Provider>
  );
};
