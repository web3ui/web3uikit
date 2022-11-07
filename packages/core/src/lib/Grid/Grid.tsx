import React from 'react';
import { IGridProps, Spacing } from './types';
import styles from './Grid.styles';

const { DivStyled, DivStyledRuler } = styles;

export const Grid: React.FC<IGridProps &
    React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    type,
    xs,
    sm,
    md,
    lg,
    spacing,
    isRulerVisible = false,
    justifyContent,
    alignItems,
    ...props
}) => {
    let className = '';
    if (type) className += `grid-${type}`;
    console.log(children);
    if (isRulerVisible) {
        return (
            <div style={{ position: 'relative' }}>
                <GridRuler spacing={spacing}></GridRuler>
                <DivStyled
                    className={className}
                    data-testid="test-Grid"
                    type={type}
                    xs={xs}
                    md={md}
                    sm={sm}
                    lg={lg}
                    isRulerVisible={isRulerVisible}
                    spacing={spacing}
                    justifyContent={justifyContent}
                    alignItems={alignItems}
                    {...props}
                >
                    {children}
                </DivStyled>
            </div>
        );
    }

    return (
        <DivStyled
            className={className}
            data-testid="test-Grid"
            type={type}
            xs={xs}
            md={md}
            sm={sm}
            lg={lg}
            isRulerVisible={isRulerVisible}
            spacing={spacing}
            justifyContent={justifyContent}
            alignItems={alignItems}
            {...props}
        >
            {children}
        </DivStyled>
    );
};

export const GridRuler: React.FC<{ spacing?: Spacing }> = ({ spacing }) => {
    return (
        <DivStyledRuler spacing={spacing}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
                <div key={number} />
            ))}
        </DivStyledRuler>
    );
};

export default Grid;
