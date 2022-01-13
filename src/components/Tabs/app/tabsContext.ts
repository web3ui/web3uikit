import { createContext } from "react";
import { TabsContextValue } from './types';

export const tabsContext = createContext<TabsContextValue>({
  activePanel: '',
  focusedTab: '',
  setActivePanel: () => {},
  setFocusedTab: () => {}
});
