import styled, { css } from 'styled-components';
import { breakpoints, resetCSS, color } from '@web3uikit/styles';
import { IGridProps } from './types';

const getStylesAtBreakpoint = (breakpoint: string, size?: number) =>
    size
        ? css`
              @media screen and (min-width: ${breakpoint}) {
                  flex-basis: ${(size / 12) * 100}%;
              }
          `
        : null;

type TStyleProps = Pick<
    IGridProps,
    | 'alignItems'
    | 'flexGrow'
    | 'justifyContent'
    | 'lg'
    | 'md'
    | 'sm'
    | 'spacing'
    | 'type'
    | 'xs'
>;
const DivStyled = styled.div<TStyleProps>`
    ${resetCSS};
    ${(props) => css`
        ${props.type === 'container' &&
            css`
                display: flex;
                flex-wrap: wrap;
            `};
        ${props.type === 'item' &&
            css`
                display: block;
            `};
        ${props.xs &&
            css`
                flex-basis: ${(props.xs / 12) * 100}%;
            `};
        ${props.justifyContent &&
            css`
                justify-content: ${props.justifyContent};
            `};
        ${props.alignItems &&
            css`
                align-items: ${props.alignItems};
            `};
        ${props.flexGrow &&
            css`
                flex-grow: ${props.flexGrow};
            `}

        ${props.spacing &&
            css`
                // This removes extra spacing around the boxes
                margin: -${props.spacing}px;
                & > .grid-item {
                    padding: ${props.spacing}px;
                }
            `};
        ${getStylesAtBreakpoint(breakpoints.sm, props.sm)};
        ${getStylesAtBreakpoint(breakpoints.md, props.md)};
        ${getStylesAtBreakpoint(breakpoints.lg, props.lg)};
    `}
`;

DivStyled.displayName = 'Grid';

/**
 * HELPER STYLES
 */
const DivStyledBox = styled.div`
    ${resetCSS};
    background-color: cornflowerblue;
    border-radius: 4px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    color: ${color.white};
    font-weight: 700;
    height: 100%;
    width: 100%;
    padding: 16px;
    text-align: center;
`;

const DivStyledRuler = styled.div<Pick<IGridProps, 'spacing'>>`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: absolute;
    width: 100%;
    height: 100vh;
    & > div {
        background-color: rgba(0, 0, 0, 0.1);
    }
    ${(props) =>
        props.spacing &&
        css`
            gap: ${props.spacing * 2}px;
        `}
`;
//-------------

export default {
    DivStyledBox,
    DivStyled,
    DivStyledRuler,
};
