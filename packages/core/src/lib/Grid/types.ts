import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Spacing = 'sm' | 'md' | 'lg';

export interface IGridProps {
    /**
     * to align items in a grid
     */
    alignItems?: CSSProperties['alignItems'];

    /**
     * children of a grid element
     */
    children: ReactNode;

    /**
     * display a ruler for testing purposes
     */
    isRulerVisible?: boolean;

    /**
     * to justify content in a grid
     */
    justifyContent?: CSSProperties['justifyContent'];

    /**
     * size from 1025 - ...
     */
    lg?: Cols;

    /**
     * size from 768px - 1025px
     */
    md?: Cols;

    /**
     * size from 576px - 768px
     */
    sm?: Cols;

    /**
     * spacing between grid items
     */
    spacing?: Spacing;

    /**
     * use container for a Grid and item to specify items inside a container
     */
    type: 'container' | 'item';

    /**
     * size from 0px - 576px
     */
    xs?: Cols;
}
