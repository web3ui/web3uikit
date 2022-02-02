import React from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import {
    Breadcrumb,
    BreadcrumbsSeparator,
    ListItemStyled,
    ListStyled,
    NavStyled,
} from './Breadcrumbs.styles';
import { IBreadcrumbs, Route } from './types';

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
                data-testid={
                    i == 0 ? 'breadcrumb-test-id' : `breadcrumb-test-id-${i}`
                }
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
                    data-testid={'breadcrumbs-separator-test-id'}
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
}) => {
    return (
        <NavStyled color={theme} data-testid={'breadcrumbs-nav-test-id'}>
            <ListStyled style={style} data-testid={'breadcrumbs-ol-test-id'}>
                {renderList(routes, separator, currentLocation)}
            </ListStyled>
        </NavStyled>
    );
};

Breadcrumbs.Item = ListItemStyled;

export default Breadcrumbs;
