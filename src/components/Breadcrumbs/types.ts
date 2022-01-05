import { BreadcrumbsLi } from './Breadcrumbs';

/**
 * Route
 */
export interface Route {
  path: string;
  breadcrumbName: string;
  // children?: Omit<Route, 'children'>[];
}

export interface BreadcrumbsProps {
  /**
   * The color of text
   */
  color?: string;
  /**
   * The content of the component.
   */
  children: Array<React.ReactNode> | React.ReactNode;
  /**
   * CSS style props
   */
  style?: React.CSSProperties;
  /**
   * Current location for displaying active breadcrumb
   */
  currentLocation: string;
  /**
   * Routes
   */
  routes?: Route[];
}

export interface IBreadcrumbs extends React.FC<BreadcrumbsProps> {
  /**
   * The element of links list
   */
  Item: typeof BreadcrumbsLi;
  // Separator: typeof BreadcrumbSeparator;
}
