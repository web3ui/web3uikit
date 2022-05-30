export interface IButtonProps {
  /**
   * useful to override button css
   */
  id?: string;

  /**
   * run onclick function
   */
  onClick?: () => void;

  /**
   * set icon
   */
  icon?: JSX.Element;

  /**
   * set button disabled
   */
  isDisabled?: boolean;

  /**
   * set size
   */
  size?: keyof typeof EButtonSize;

  /**
   * text
   */
  text?: string;

  /**
   * set theme
   */
  theme?: keyof typeof EButtonTheme;

  /**
   *
   */
  iconType?: keyof typeof EButtonIcon;
}

export enum EButtonTheme {
  primary,
  outline,
  secondary,
  avatar,
  editavatar,
  Status,
  source,
  point,
  ghost,
  text,
  link,
}

export enum EButtonIcon {
  none,
  leading,
  trailing,
  iconOnly,
}
export enum EButtonSize {
  small,
  regular,
  large,
}
