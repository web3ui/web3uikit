import React from 'react';
import type { TabProps } from '../Tab';
import type { TabListProps } from '../TabList';
import type { TabPanelProps } from '../TabPanel';
import type { TabsetVariant, TabsetSize, TabsetColor } from '../../app';

export type TabsetComponent = React.VFC<TabsetProps> & TabsetComposition;

export type TabsetProps = {
    /**
     * Index for default opened tab
     */
    defaultIndex?: number;
    /**
     * Style variant
     */
    variant?: TabsetVariant;
    /**
     * Vertical tablist orientation
     */
    vertical?: boolean;
    /**
     * List of disabled indexes
     */
    disabled?: number[];
    /**
     *
     */
    size?: TabsetSize;
    /**
     *
     */
    color?: TabsetColor;

    children: TabsetChildren;
};

export type TabsetComposition = {
    Tab: React.FC<TabProps>;
    Panel: React.FC<TabPanelProps>;
    TabList: React.FC<TabListProps>;
};

export type TabsetChildren = (
    | React.ReactElement<TabListProps>
    | React.ReactElement<TabPanelProps>
)[];

export type TabsetContainerProps = {
    vertical: boolean;
};
