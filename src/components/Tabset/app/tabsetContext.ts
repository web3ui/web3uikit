import { createContext, useContext } from "react";
import { TabsetContextValue } from './types';

export const TabsetContext = createContext<TabsetContextValue | null>(null);

export const useTabsetContext = () => {
    const context = useContext(TabsetContext);

    if (context === null) {
        throw new Error('Tabset context is null');
    }

    return context;
}
