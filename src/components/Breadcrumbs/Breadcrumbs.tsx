import React from 'react';
import styled from 'styled-components';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import {
  liStyle,
  navStyle,
  olStyle,
  separatorStyle,
} from './Breadcrumbs.styles';
import { IBreadcrumbs, Route } from './types';

const BreadcrumbsStyled = styled.nav`
  ${navStyle};
  color: ${(p) => p?.color || color.grey};
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

function renderList(routes: Route[], separator?: React.ReactNode) {
  let separatedRoutes: any[] = [];
  routes.forEach((route, i) => {
    const crumb = (
      <BreadcrumbsLi key={`breadcrumb-${i}`}>
        {route?.icon}
        {route.name}
      </BreadcrumbsLi>
    );
    if (i < routes.length - 1) {
      separatedRoutes = separatedRoutes.concat(
        crumb,
        <BreadcrumbsSeparator key={`separator-${i}`}>
          {separator ?? (
            <Icon
              svg={iconTypes.chevron_right}
              fill="currentColor"
              size="1.4em"
            />
          )}
        </BreadcrumbsSeparator>
      );
    } else {
      separatedRoutes.push(crumb);
    }
  });
  return separatedRoutes;
}

const Breadcrumbs: IBreadcrumbs = ({ color = '#B0B5BF', style, routes }) => {
  return (
    <BreadcrumbsStyled color={color}>
      <BreadcrumbsOl style={style}>{renderList(routes)}</BreadcrumbsOl>
    </BreadcrumbsStyled>
  );
};

Breadcrumbs.Item = BreadcrumbsLi;

export default Breadcrumbs;
