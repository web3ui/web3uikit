import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';

interface IBreadcrumbProps {
    href?: string;
}

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

const liStyle = css`
    ${resetCSS};
    ${fonts.semiBold};
    align-items: center;
    background-color: ${color.white};
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    display: list-item;
    margin-bottom: 5px;
    padding: 3px;
    transition: all 0.2s ease;
    user-select: none;

    svg:first-child {
        margin-right: 5px;
    }

    &:last-child {
        pointer-events: none;
    }

    &:hover {
        color: ${color.blueDark};
    }
`;

export const separatorStyle = css`
    ${resetCSS};
    color: ${color.greyIcons};
    display: flex;
    margin: 0 2px;
    user-select: none;
`;

export const NavStyled = styled.nav`
    ${navStyle};
    color: ${(p) => p?.color || color.grey};
`;

export const ListStyled = styled.ol`
    ${olStyle};
`;

export const ListItemStyled = styled.li<IBreadcrumbProps>`
    ${liStyle};
`;

export const BreadcrumbsSeparator = styled.li`
    ${separatorStyle};
`;
