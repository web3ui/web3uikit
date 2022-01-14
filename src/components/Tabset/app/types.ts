export type TabsetContextValue = {
  activeIndex: number;
  focusedIndex: number;
  maxIndex: number;
  variant: string;
  vertical: boolean;
  
  setActiveIndex: (index: number) => void;
  setFocusedIndex: (index: number) => void;
};

export type TabsetProviderProps = {
  variant: string;
  vertical: boolean;
  maxIndex: number;
  defaultIndex: number;
};
