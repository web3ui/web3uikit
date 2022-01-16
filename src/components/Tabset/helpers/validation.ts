import { isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { TabListProps, TabPanelProps, TabProps } from '../components';

const createValidator =
    <T>(name: string) =>
    (element: ReactNode): element is T => {
        return (
            isValidElement(element) &&
            typeof element.type !== 'string' &&
            element.type.name === name
        );
    };

export const isTab = createValidator<ReactElement<TabProps>>('Tab');
export const isTabList = createValidator<ReactElement<TabListProps>>('TabList');
export const isTabPanel =
    createValidator<ReactElement<TabPanelProps>>('TabPanel');
