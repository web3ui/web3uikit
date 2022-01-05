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
import { IBreadcrumbs } from './types';

const BreadcrumbsStyled = styled.nav`
  ${navStyle};
  color: ${(p) => p?.color || color.grey};
`;

const BreadcrumbsOl = styled.ol`
  ${olStyle}
`;

interface IBreadcrumbProps {
  href: string;
}

export const BreadcrumbsLi = styled.li<IBreadcrumbProps>`
  ${liStyle}
`;

const BreadcrumbsSeparator = styled.li`
  ${separatorStyle}
`;

function renderList(
  items: React.ReactNode[] | React.ReactNode,
  separator?: React.ReactNode,
  className?: string
) {
  const childrenArray = React.Children.toArray(items);
  return childrenArray.reduce(
    (acc: Array<React.ReactNode>, current: React.ReactNode, i: number) => {
      if (i < childrenArray.length - 1) {
        acc = acc.concat(
          current,
          <BreadcrumbsSeparator key={`separator-${i}`} className={className}>
            {separator ?? (
              <Icon
                svg={iconTypes.chevron_right}
                fill="currentColor"
                size="1.3em"
              />
            )}
          </BreadcrumbsSeparator>
        );
      } else {
        acc.push(current);
      }
      return acc;
    },
    []
  );
}

const Breadcrumbs: IBreadcrumbs = ({
  color = '#B0B5BF',
  children,
  style,
  routes,
}) => {
  return (
    <BreadcrumbsStyled color={color}>
      <BreadcrumbsOl style={style}>
        {renderList(children, routes)}
      </BreadcrumbsOl>
    </BreadcrumbsStyled>
  );
};

Breadcrumbs.Item = BreadcrumbsLi;

export default Breadcrumbs;
