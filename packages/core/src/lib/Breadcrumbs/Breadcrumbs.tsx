import { color } from '@web3uikit/styles';
import { ChevronRight } from '@web3uikit/icons';
import styles from './Breadcrumbs.styles';
import { IBreadcrumbs, Route } from './types';

const {
    Breadcrumb,
    BreadcrumbsSeparator,
    ListItemStyled,
    ListStyled,
    NavStyled,
} = styles;

function getNumberOfRoutesToRender(routes: Route[], currentLocation?: string) {
    if (!currentLocation) return routes.length - 1;
    for (let i = 0; i < routes.length; i++) {
        if (routes[i]?.path === currentLocation) return i;
    }
    throw new Error('Routes list does not match currentLocation');
}

function renderList(
    routes: Route[],
    separator?: React.ReactNode,
    currentLocation?: string,
) {
    let separatedRoutes: any[] = [];
    routes.forEach((route, i) => {
        const crumb = (
            <ListItemStyled
                key={`breadcrumb-${i}`}
                data-testid={`test-breadcrumb-item-${i}`}
            >
                <Breadcrumb to={route.path}>
                    {route?.icon}
                    {route.breadcrumb}
                </Breadcrumb>
            </ListItemStyled>
        );
        const routesWithSeparator = getNumberOfRoutesToRender(
            routes,
            currentLocation,
        );
        if (i < routesWithSeparator) {
            separatedRoutes = separatedRoutes.concat(
                crumb,
                <BreadcrumbsSeparator
                    key={`separator-${i}`}
                    data-testid={'test-breadcrumbs-separator'}
                >
                    {separator ?? (
                        <ChevronRight
                            title="chevron right icon"
                            titleId="breadcrumbs chevron right icon"
                            fill="currentColor"
                            fontSize={24}
                        />
                    )}
                </BreadcrumbsSeparator>,
            );
        } else if (routesWithSeparator === i) {
            separatedRoutes.push(crumb);
        }
    });
    return separatedRoutes;
}

const Breadcrumbs: IBreadcrumbs = ({
    theme = color.gray40,
    style,
    routes,
    separator,
    currentLocation,
    ...props
}) => {
    return (
        <NavStyled color={theme} data-testid={'test-breadcrumbs'} {...props}>
            <ListStyled style={style} data-testid={'test-breadcrumbs-list'}>
                {renderList(routes, separator, currentLocation)}
            </ListStyled>
        </NavStyled>
    );
};

Breadcrumbs.Item = ListItemStyled;

export default Breadcrumbs;
