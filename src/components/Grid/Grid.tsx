import React from 'react';
import { IGridProps } from '.';
import { GridDiv, ColDiv } from './Grid.styles';
import { CryptoCards } from '../CryptoCards';
import { IColProps } from './types';

function Col({
    children,
    alignSelf,
    justifySelf,
    startCol,
    span,
}: IColProps): JSX.Element {
    return (
        <ColDiv
            alignSelf={alignSelf}
            justifySelf={justifySelf}
            startCol={startCol}
            span={span}
        >
            <p>Col</p>
            {children}
        </ColDiv>
    );
}

function Grid({
    alignItems = 'start',
    justifyItems = 'start',
    colGap = 15,
    rowGap = 15,
    xs = 4,
    s = 6,
    md = 8,
    lg = 10,
    children,
}: IGridProps): JSX.Element {
    return (
        <GridDiv
            alignItems={alignItems}
            justifyItems={justifyItems}
            colGap={colGap}
            rowGap={rowGap}
            xs={xs}
            s={s}
            md={md}
            lg={lg}
        >
            {children}
        </GridDiv>
    );
}

Grid.Col = Col;

export default Grid;
