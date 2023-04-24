import { color } from '@web3uikit/styles';
import { TCustomize } from '../../interfaces/customize';

export interface IHideButtonProps {
  /**
   * The color of hide icon
   */
  iconColor?: string | typeof color;

  /**
   * The size of hide icon
   */
  iconSize?: number;

  /**
   * The hidden state info
   */
  isHidden?: boolean;

  /**
   * Callback on toggle
   */
  onToggle: () => void;

  /**
   * Show tooltip on icon
   */
  hasTooltip?: boolean

  /**
   * Customize the tooltip
   */
  customize?: TCustomize;
}

export interface IHideButtonIconProps {
    iconColor?: string | typeof color;
    iconSize?: number;
    isHidden?: boolean;
}