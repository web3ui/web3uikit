import React from 'react';
import styled from 'styled-components';
import colorPalette from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import {
    liStyle,
    navStyle,
    olStyle,
    separatorStyle,
} from './Breadcrumbs.styles';
import { IBreadcrumbs, Route } from './types';

const BreadcrumbsNav = styled.nav`
    ${navStyle};
    color: ${(p) => p?.color || colorPalette.grey};
`;

const BreadcrumbsOl = styled.ol`
    ${olStyle}
`;

interface IBreadcrumbProps {
    href?: string;
}

export const BreadcrumbsLi = styled.li<IBreadcrumbProps>`
    ${liStyle}
`;

const BreadcrumbsSeparator = styled.li`
    ${separatorStyle}
`;

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
            <BreadcrumbsLi
                key={`breadcrumb-${i}`}
                data-testid={
                    i == 0 ? 'breadcrumb-test-id' : `breadcrumb-test-id-${i}`
                }
            >
                {route?.icon}
                {route.breadcrumb}
            </BreadcrumbsLi>
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
                            svg={iconTypes.chevron_right}
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
    color = colorPalette.greyIcons,
    style,
    routes,
    separator,
    currentLocation,
}) => {
    return (
        <BreadcrumbsNav color={color} data-testid={'breadcrumbs-nav-test-id'}>
            <BreadcrumbsOl style={style} data-testid={'breadcrumbs-ol-test-id'}>
                {renderList(routes, separator, currentLocation)}
            </BreadcrumbsOl>
        </BreadcrumbsNav>
    );
};

Breadcrumbs.Item = BreadcrumbsLi;

export default Breadcrumbs;
