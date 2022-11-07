import styled, { css } from 'styled-components';
import { breakpoints, resetCSS } from '@web3uikit/styles';
import { IGridProps, Spacing } from './types';

const getSpacingStyles = (spacing?: Spacing) => {
    switch (spacing) {
        case 'sm':
            return 8;
        case 'md':
            return 16;
        case 'lg':
            return 24;
        default:
            return 0;
    }
};

type TStyleProps = Pick<
    IGridProps,
    | 'type'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'spacing'
    | 'isRulerVisible'
    | 'justifyContent'
    | 'alignItems'
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

        margin: -${getSpacingStyles(props.spacing)}px;
        ${props.justifyContent &&
            css`
                justify-content: ${props.justifyContent};
            `};
        ${props.alignItems &&
            css`
                align-items: ${props.alignItems};
            `};
        & > .grid-item {
            padding: ${getSpacingStyles(props.spacing)}px;
        }

        @media screen and (min-width: ${breakpoints.sm}) {
            ${props.sm &&
                css`
                    flex-basis: ${(props.sm / 12) * 100}%;
                `};
        }
        @media screen and (min-width: ${breakpoints.md}) {
            ${props.md &&
                css`
                    flex-basis: ${(props.md / 12) * 100}%;
                `};
        }
        @media screen and (min-width: ${breakpoints.lg}) {
            ${props.lg &&
                css`
                    flex-basis: ${(props.lg / 12) * 100}%;
                `};
        }
    `}
`;

DivStyled.displayName = 'Grid';

/**
 * HELPER STYLES
 */
const DivStyledBox = styled.div`
    ${resetCSS};
    background-color: red;
    border-radius: 4px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-weight: 700;
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
    ${(props) => css`
        gap: ${getSpacingStyles(props.spacing) * 2}px;
    `}
`;

export default {
    DivStyledBox,
    DivStyled,
    DivStyledRuler,
};
