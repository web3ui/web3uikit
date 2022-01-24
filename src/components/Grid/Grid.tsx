import React, { createContext, useContext } from 'react';
import { IGridProps } from '.';
import { ColDiv, RowDiv } from './Grid.styles';
import { CryptoCards } from '../CryptoCards';
import { IColProps } from './types';

const Context = createContext({
    lg: 0,
    md: 0,
    sm: 0,
    xs: 0,
    rowGap: 15,
    colGap: 15,
});

function Col({
    children,
    alignSelf,
    justifySelf,
    startCol,
    span,
    isFullWidth,
    breakpointsConfig,
}: IColProps): JSX.Element {
    const prov = useContext(Context);
    console.log(prov);
    return (
        <ColDiv
            alignSelf={alignSelf}
            justifySelf={justifySelf}
            startCol={startCol}
            isFullWidth={isFullWidth}
            span={span}
            lg={prov.lg}
            md={prov.md}
            sm={prov.sm}
            xs={prov.xs}
            rowGap={prov.rowGap}
            colGap={prov.colGap}
            breakpointsConfig={breakpointsConfig}
        >
            {JSON.stringify(prov)}
            {children}
        </ColDiv>
    );
}

function Grid({
    alignItems = 'start',
    justifyItems = 'start',
    colGap = 15,
    rowGap = 15,
    children,
    xs = 12,
    md = 18,
    sm = 14,
    lg = 24,
}: IGridProps): JSX.Element {
    return (
        <Context.Provider value={{ xs, md, sm, lg, rowGap, colGap }}>
            <RowDiv
                alignItems={alignItems}
                justifyItems={justifyItems}
                colGap={colGap}
                rowGap={rowGap}
            >
                {children}
            </RowDiv>
        </Context.Provider>
    );
}

Grid.Col = Col;

export default Grid;
