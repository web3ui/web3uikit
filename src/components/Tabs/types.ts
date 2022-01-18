import React from 'react';

export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];

// NOTE: the comment strings are very important
// Storybook pulls them to make our docs

export interface ITabList {
    defaultActiveKey?: number;
    isVertical?: boolean;
    children?: React.ReactNode;
    tabStyle?: TabeStyles;
    onChange?(selectedKey: number): void;
}

export interface ITab {
    tabName: string | React.ReactNode;
    tabKey: number;
    activeState?: boolean;
    children?: React.ReactNode;
    lineHeight?: number;
    isDisabled: boolean;
}

export type TabeStyles = 'bulbUnion' | 'bulbSeperate' | 'bar';
