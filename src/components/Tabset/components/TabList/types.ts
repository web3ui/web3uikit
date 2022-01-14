import type { TabProps } from '../Tab';

export type TabListProps = {
    children: React.ReactElement<TabProps>[];
}

export type TabListContainerProps = {
    variant: string;
    vertical: boolean;
}