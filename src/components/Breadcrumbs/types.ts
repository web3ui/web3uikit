import { BreadcrumbsLi } from './Breadcrumbs';

/**
 * Route
 */
export interface Route {
  icon?: React.ReactNode;
  path: string;
  name: string;
}

export interface BreadcrumbsProps {
  /**
   * The color of text
   */
  color?: string;
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
  routes: Route[];
}

export interface IBreadcrumbs extends React.FC<BreadcrumbsProps> {
  /**
   * The element of links list
   */
  Item: typeof BreadcrumbsLi;
  // Separator: typeof BreadcrumbSeparator;
}
