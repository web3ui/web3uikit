export type TabsContextValue = {
  activePanel: string;
  focusedTab: string;

  setActivePanel: (id: string) => void;
  setFocusedTab: (id: string) => void;
};

export type TabsProviderProps = {
  initialActiveTab: string;
};