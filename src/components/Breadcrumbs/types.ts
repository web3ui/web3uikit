import { BreadcrumbsLi } from './Breadcrumbs';

export interface BreadcrumbsProps {
  /**
   * The color of text
   */
  color?: string;
  /**
   * The content of the component.
   */
  children: Array<React.ReactNode>;
  /**
   * CSS style props
   */
  style?: React.CSSProperties;
}

export interface IBreadcrumbs extends React.FC<BreadcrumbsProps> {
  /**
   * The element of links list
   */
  Item: typeof BreadcrumbsLi;
  // Separator: typeof BreadcrumbSeparator;
}
