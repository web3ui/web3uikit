import type { TabsetSize, TabsetColor, TabsetVariant } from '../../app';

export type TabProps = {
    index?: number;
    disabled?: boolean;
    className?: string;
};

export type TabContainerProps = {
    size: TabsetSize;
    color: TabsetColor;
    variant: TabsetVariant;

    isActive: boolean;
    vertical: boolean;
};
