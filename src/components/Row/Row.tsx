import React, { createContext, useContext } from 'react';
import { ColDiv, RowDiv } from './Row.styles';
import { IColProps, IRowProps } from './types';

const Context = createContext({
    lg: 0,
    md: 0,
    sm: 0,
    xs: 0,
    rowGap: 15,
    colGap: 15,
});

export function Col({
    children,
    span = 0,
    isFullWidth = false,
    breakpointsConfig = {},
    order = 0,
}: IColProps): JSX.Element {
    const prov = useContext(Context);
    return (
        <ColDiv
            isFullWidth={isFullWidth}
            order={order}
            span={span}
            lg={prov.lg}
            md={prov.md}
            sm={prov.sm}
            xs={prov.xs}
            rowGap={prov.rowGap}
            colGap={prov.colGap}
            breakpointsConfig={breakpointsConfig}
            role="col"
        >
            {children}
        </ColDiv>
    );
}

function Row({
    alignItems = 'start',
    justifyItems = 'flex-start',
    colGap = 15,
    rowGap = 15,
    children,
    xs = 8,
    sm = 16,
    md = 24,
    lg = 24,
    width,
}: IRowProps): JSX.Element {
    return (
        <Context.Provider value={{ xs, md, sm, lg, rowGap, colGap }}>
            <RowDiv
                alignItems={alignItems}
                justifyItems={justifyItems}
                colGap={colGap}
                rowGap={rowGap}
                data-testid="row"
                width={width}
            >
                {children}
            </RowDiv>
        </Context.Provider>
    );
}

Row.Col = Col;

export default Row;
