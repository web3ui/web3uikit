import { createContext } from "react";
import { TabsContextValue } from './types';

export const tabsContext = createContext<TabsContextValue>({
  activePanel: 0,
  focusedTab: 0,
  maxNumber: 0,
  setActivePanel: () => {},
  setFocusedTab: () => {},
  setMaxNumber: () => {}
});
