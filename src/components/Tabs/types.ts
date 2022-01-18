export interface ITabList {
    /**
     * The default active key
     */
    defaultActiveKey?: number;
    /**
     * To switch cards into vertical mode
     */
    isVertical?: boolean;
    /**
     * All Tab Elements must be a child
     */
    children?: JSX.Element[] | JSX.Element;
    /**
     * The type of tab you want to render
     */
    tabStyle?: TableStyles;
    /**
     * On Card Change
     */
    onChange?(selectedKey: number): void;
}

export interface ITab {
    /**
     * Name of the Tab
     */
    tabName: string | JSX.Element;
    /**
     * Key of the Tab
     */
    tabKey: number;
    /**
     * Is the tab active, used to override normal logic
     */
    activeState?: boolean;
    /**
     * Content that will be rendered under this tab
     */
    children?: JSX.Element[] | JSX.Element;
    /**
     * To remove line height
     */
    lineHeight?: number;
    /**
     * Is tab disabled
     */
    isDisabled?: boolean;
}

export type TableStyles = 'bulbUnion' | 'bulbSeperate' | 'bar';
