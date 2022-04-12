import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';

import { Link } from 'react-router-dom';

const olStyle = css`
    ${resetCSS};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
`;
const navStyle = css`
    ${resetCSS};
`;

const separatorStyle = css`
    ${resetCSS};
    color: ${color.greyIcons};
    display: flex;
    margin: 0 2px;
    user-select: none;
`;

const NavStyled = styled.nav`
    ${navStyle};
    color: ${(p) => p?.color || color.grey};
`;

const ListStyled = styled.ol`
    ${olStyle};
`;

export const ListItemStyled = styled.li`
    align-items: center;
    display: flex;

    svg:first-child {
        margin-right: 5px;
    }

    &:last-child {
        pointer-events: none;
    }
`;

const Breadcrumb = styled(Link)`
    ${fonts.semiBold};
    align-items: center;
    display: flex;
    text-decoration: none;
    transition: all 0.2s ease;
    user-select: none;
    &:hover {
        color: ${color.blueDark};
    }
`;

const BreadcrumbsSeparator = styled.li`
    ${separatorStyle};
`;

export default {
    Breadcrumb,
    BreadcrumbsSeparator,
    ListItemStyled,
    ListStyled,
    NavStyled,
};
