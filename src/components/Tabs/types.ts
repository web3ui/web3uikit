export interface ITabList {
    defaultActiveKey?: number;
    isVertical?: boolean;
    children?: JSX.Element[] | JSX.Element;
    tabStyle?: TableStyles;
    onChange?(selectedKey: number): void;
}

export interface ITab {
    tabName: string | JSX.Element;
    tabKey: number;
    activeState?: boolean;
    children?: JSX.Element[] | JSX.Element;
    lineHeight?: number;
    isDisabled?: boolean;
}

export type TableStyles = 'bulbUnion' | 'bulbSeperate' | 'bar';
