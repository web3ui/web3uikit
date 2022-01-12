import { useContext } from "react";
import { tabsContext } from "./tabsContext";

export const useActiveTab = (tabName: string) => {
  const { activeTab } = useContext(tabsContext);

  return activeTab === tabName;
};

export const useSetActiveTab = (tabName: string) => {
  const { setActiveTab } = useContext(tabsContext);

  return () => {
    setActiveTab(tabName);
  };
};
