export type TabsetContextValue = {
  theme: TabsetContextTheme;

  maxIndex: number;
  activeIndex: number;
  focusedIndex: number;

  setActiveIndex: SetIndexFunction;
  setFocusedIndex: SetIndexFunction;
};

export type TabsetProviderProps = {
  theme: TabsetContextTheme;
  defaultIndex: number;
  maxIndex: number;
};

export type TabsetContextTheme = {
  variant: TabsetVariant;
  color: TabsetColor;
  size: TabsetSize;
  vertical: boolean;
}

export type SetIndexFunction = (index: number) => void;

export type TabsetSize = 'medium' | 'small' | 'large';
export type TabsetColor = 'red' | 'green' | 'blue' | 'yellow';
export type TabsetVariant = 
  | 'unstyled'
  | 'outline'
  | 'solid'
  | 'pill'
  | 'light';

