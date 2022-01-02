export type Module =
  | 'NFT Collection'
  | 'Bundle'
  | 'Lazy NFT'
  | 'NFT Marketplace'
  | 'Token'
  | 'Pack';

export interface CardProps {
  id?: string;
  module?: Module;
  title?: string;
  description?: string;
  active?: boolean;
  tooltipText?: string;
}
