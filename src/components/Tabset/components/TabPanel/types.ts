import type { TabsetVariant } from '../../app';

export type TabPanelProps = {
  index?: number;
  className?: string;
};

export type TabPanelContainerProps = {
  variant: TabsetVariant;
}