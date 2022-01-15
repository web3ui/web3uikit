import type { TabProps } from '../Tab';
import type { TabsetVariant, TabsetColor } from '../Tabset';

export type TabListProps = {
    children: React.ReactElement<TabProps>[];
}

export type TabListContainerProps = {
    variant: TabsetVariant;
    color: TabsetColor;
    vertical: boolean;
}