import type { TabsetColor, TabsetVariant, TabsetSize } from '../Tabset';

export type TabProps = {
  index?: number;
  className?: string;
  disabled?: boolean;
};

export type TabContainerProps = {
    isActive: boolean;
    vertical: boolean;
    variant: TabsetVariant;
    size: TabsetSize;
    color: TabsetColor;
}