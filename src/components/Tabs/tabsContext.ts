import { createContext } from "react";

export type TabsContextValue = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

export const tabsContext = createContext<TabsContextValue>(null!);
