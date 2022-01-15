import type { TabsetVariant } from '../Tabset';

export type TabPanelProps = {
  index?: number;
  className?: string;
};

export type TabPanelContainerProps = {
  variant: TabsetVariant;
}