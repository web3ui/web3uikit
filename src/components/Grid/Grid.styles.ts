import styled from 'styled-components';
import { IGridProps } from '.';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import { IColProps } from './types';

export const GridDiv = styled.div<IGridProps>`
    ${resetCSS}
    ${fonts.text}
    display: grid;
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
    justify-items: ${(props) =>
        props.justifyItems ? props.justifyItems : 'end'};
    row-gap: ${(props) => (props.rowGap ? `${props.rowGap}px` : '15px')};
    column-gap: ${(props) => (props.rowGap ? `${props.rowGap}px` : '15px')};

    // Query for extra small screens
    @media (max-width: 767px) {
        grid-template-columns: repeat(
            ${(props) => (props.xs ? props.xs : 4)},
            1fr
        );
    }

    // Query for small screens
    @media (max-width: 991px) and (min-width: 768px) {
        grid-template-columns: repeat(
            ${(props) => (props.s ? props.s : 6)},
            1fr
        );
    }

    // Query for medium screens
    @media (max-width: 1199px) and (min-width: 992px) {
        grid-template-columns: repeat(
            ${(props) => (props.md ? props.md : 8)},
            1fr
        );
    }

    // Query for large screens
    @media (min-width: 1200px) {
        grid-template-columns: repeat(
            ${(props) => (props.lg ? props.lg : 10)},
            1fr
        );
    }
`;

export const ColDiv = styled.div<IColProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.alignSelf ? props.alignSelf : 'stretch')};
    justify-items: ${(props) =>
        props.justifySelf ? props.justifySelf : 'stretch'};
    grid-column-start: ${(props) => (props.startCol ? props.startCol : 'auto')};
    grid-column-end: ${(props) => (props.span ? `span ${props.span}` : 'auto')};
`;
