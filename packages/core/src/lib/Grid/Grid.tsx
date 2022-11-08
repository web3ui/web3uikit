import React from 'react';
import { IGridProps, Spacing } from './types';
import styles from './Grid.styles';

const { DivStyled, DivStyledRuler } = styles;

export const Grid: React.FC<IGridProps &
    React.HTMLAttributes<HTMLDivElement>> = ({
    _isRulerVisible = false,
    children,
    ...props
}) => {
    let className = '';
    if (props.type) className += `grid-${props.type}`;
    // This is for testing purposes only for user
    if (_isRulerVisible) {
        return (
            <div style={{ position: 'relative' }}>
                <GridRuler spacing={props.spacing}></GridRuler>
                <DivStyled
                    className={className}
                    data-testid="test-Grid"
                    {...props}
                >
                    {children}
                </DivStyled>
            </div>
        );
    }

    return (
        <DivStyled className={className} data-testid="test-Grid" {...props}>
            {children}
        </DivStyled>
    );
};

export const GridRuler: React.FC<{ spacing?: Spacing }> = ({ spacing }) => {
    return (
        <DivStyledRuler spacing={spacing} data-testid="test-GridRuler">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
                <div key={number} />
            ))}
        </DivStyledRuler>
    );
};

export default Grid;
