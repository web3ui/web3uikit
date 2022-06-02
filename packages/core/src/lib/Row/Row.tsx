import React, { createContext, useContext } from 'react';
import styles from './Row.styles';
import { IColProps, IRowProps } from './types';

const { ColDiv, RowDiv } = styles;

const Context = createContext({
    lg: 0,
    md: 0,
    sm: 0,
    xs: 0,
    rowGap: 15,
    colGap: 15,
});

export function Col({
    breakpointsConfig = {},
    children,
    isFullWidth = false,
    order = 0,
    span = 0,
    ...props
}: IColProps): JSX.Element {
    const prov = useContext(Context);
    return (
        <ColDiv
            breakpointsConfig={breakpointsConfig}
            colGap={prov.colGap}
            isFullWidth={isFullWidth}
            lg={prov.lg}
            md={prov.md}
            order={order}
            role="col"
            rowGap={prov.rowGap}
            sm={prov.sm}
            span={span}
            xs={prov.xs}
            {...props}
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
    ...props
}: IRowProps): JSX.Element {
    return (
        <Context.Provider value={{ xs, md, sm, lg, rowGap, colGap }}>
            <RowDiv
                alignItems={alignItems}
                colGap={colGap}
                data-testid="row"
                justifyItems={justifyItems}
                rowGap={rowGap}
                width={width}
                {...props}
            >
                {children}
            </RowDiv>
        </Context.Provider>
    );
}

Row.Col = Col;

export default Row;
