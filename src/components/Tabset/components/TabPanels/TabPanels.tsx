import React from 'react';
import { setIndexFor } from '../../utils';
import type { TabPanelsProps } from './types';

export const TabPanels = (props: TabPanelsProps) => {
    const { children } = props;

    const indexedChildren = setIndexFor(children);

    return <> {indexedChildren} </>;
}