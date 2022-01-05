export interface PillProps {
  /**
   * ID of pill will be generated automatically if not set
   */
  id?: string;

  /**
   * Child of tab
   */
  children?: Array<React.ReactNode>;

  /**
   * Set if tab is disabled
   */
  disabled?: boolean;

  pressed?: boolean;

  active?: boolean;

  /**
   * set the position of the icon, or icon only
   */
  isBar?: boolean;

  /**
   * the function to be called on click
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * Set text inside tab
   */
  text?: string;
}
