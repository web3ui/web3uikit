import React from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
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
        if (routes[i].path === currentLocation) return i;
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
                        <Icon
                            svg={iconTypes.chevronRight}
                            fill="currentColor"
                            size={24}
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
    theme = color.greyIcons,
    style,
    routes,
    separator,
    currentLocation,
    ...props
}) => {
    return (
        <NavStyled color={theme} data-testid="test-breadcrumbs" {...props}>
            <ListStyled style={style} data-testid="test-breadcrumbs-list">
                {renderList(routes, separator, currentLocation)}
            </ListStyled>
        </NavStyled>
    );
};

Breadcrumbs.Item = ListItemStyled;

export default Breadcrumbs;
