export type TabsContextValue = {
  activePanel: number;
  focusedTab: number;

  maxNumber: number;

  setActivePanel: (i: number) => void;
  setFocusedTab: (i: number) => void;
  setMaxNumber: (i: number) => void;
};

export type TabsProviderProps = {
  initialActiveTab: number;
};