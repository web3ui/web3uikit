import React from 'react';
import styled from 'styled-components';
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
  color: ${(p) => p?.color};
`;

const BreadcrumbsOl = styled.ol`
  ${olStyle}
`;

export const BreadcrumbsLi = styled.li`
  ${liStyle}
`;

const BreadcrumbsSeparator = styled.li`
  ${separatorStyle}
`;

function renderList(
  items: React.ReactNode[],
  separator?: React.ReactNode,
  className?: string
) {
  return items.reduce(
    (acc: Array<React.ReactNode>, current: React.ReactNode, i: number) => {
      if (i < items.length - 1) {
        acc = acc.concat(
          current,
          <BreadcrumbsSeparator key={`separator-${i}`} className={className}>
            {separator ?? (
              <Icon
                svg={iconTypes.chevron_right}
                fill="currentColor"
                size="1em"
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

const Breadcrumbs: IBreadcrumbs = ({ color = '#B0B5BF', children, style }) => {
  return (
    <BreadcrumbsStyled color={color}>
      <BreadcrumbsOl style={style}>{renderList(children)}</BreadcrumbsOl>
    </BreadcrumbsStyled>
  );
};

Breadcrumbs.Item = BreadcrumbsLi;

export default Breadcrumbs;
