import type { TabsetColor, TabsetSize, TabsetVariant } from '../components';

export type TabsetContextValue = {
  activeIndex: number;
  focusedIndex: number;
  maxIndex: number;
  vertical: boolean;
  variant: TabsetVariant;
  color: TabsetColor;
  size: TabsetSize;
  
  setActiveIndex: (index: number) => void;
  setFocusedIndex: (index: number) => void;
};

export type TabsetProviderProps = {
  size: TabsetSize;
  color: TabsetColor;
  variant: TabsetVariant;
  vertical: boolean;
  maxIndex: number;
  defaultIndex: number;
};
