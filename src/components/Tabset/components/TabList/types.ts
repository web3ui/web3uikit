import type { TabProps } from '../Tab';
import type { TabsetVariant, TabsetColor } from '../../app';

export type TabListProps = {
    children: React.ReactElement<TabProps>[];
};

export type TabListContainerProps = {
    color: TabsetColor;
    variant: TabsetVariant;
    vertical: boolean;
};
