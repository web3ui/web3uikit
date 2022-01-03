import React from 'react';
import styled from 'styled-components';
import { BreadcrumbsProps } from '.';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import chevronRightIcon from '../Icon/icons/chevron-right';
import {
  liStyle,
  navStyle,
  olStyle,
  separatorStyle,
} from './Breadcrumbs.styles';

const BreadcrumbsStyled = styled.nav`
  ${navStyle};
  color: ${(p) => p?.color};
`;

const BreadcrumbsOl = styled.ol`
  ${olStyle}
`;

const BreadcrumbsLi = styled.li`
  ${liStyle}
`;

const BreadcrumbsSeparator = styled.li`
  ${separatorStyle}
`;

function renderList(
  items: Array<React.ReactNode>,
  separator?: React.ReactNode,
  className?: string
) {
  console.log(items);
  return items.reduce(
    (acc: Array<React.ReactNode>, current: React.ReactNode, i: number) => {
      if (i < items.length - 1) {
        acc = acc.concat(
          current,
          <BreadcrumbsSeparator
            aria-hidden
            key={`separator-${i}`}
            className={className}
          >
            {separator}
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

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  color = '#B0B5BF',
  children,
}: BreadcrumbsProps) => {
  return (
    <BreadcrumbsStyled color={color}>
      <BreadcrumbsOl>
        {/* <BreadcrumbsLi>
          <Icon svg={iconTypes.server} fill="currentColor" />
          <span>Application List</span>
        </BreadcrumbsLi>
        <BreadcrumbsSeparator>
          <Icon svg={iconTypes.chevron_right} fill={color} size="1em" />
        </BreadcrumbsSeparator>
        <BreadcrumbsLi>Hi</BreadcrumbsLi>
        <BreadcrumbsSeparator>
          <Icon svg={iconTypes.chevron_right} fill={color} size="1em" />
        </BreadcrumbsSeparator>
        <BreadcrumbsLi>Hi</BreadcrumbsLi> */}
        {renderList(children)}
      </BreadcrumbsOl>
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
