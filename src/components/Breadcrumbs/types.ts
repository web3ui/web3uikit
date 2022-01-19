import { ListItemStyled } from './Breadcrumbs.styles';

// Route
export interface Route {
    icon?: React.ReactNode;
    path: string;
    breadcrumb: React.ReactNode;
}

export interface BreadcrumbsProps {
    /**
     * The color of text
     */
    theme?: string;

    /**
     * CSS style props
     */
    style?: React.CSSProperties;

    /**
     * Current location for displaying active breadcrumb
     */
    currentLocation?: string;

    /**
     * Routes
     */
    routes: Route[];

    /**
     * Separator for breadcrumbs
     */
    separator: React.ReactNode;
}

export interface IBreadcrumbs extends React.FC<BreadcrumbsProps> {
    /**
     * The element of links list
     */
    Item: typeof ListItemStyled;
    // Separator: typeof BreadcrumbSeparator;
}
