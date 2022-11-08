import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Spacing = GridSize | 13 | 14 | 15 | 16;

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
     * display a ruler for testing purposes only
     */
    _isRulerVisible?: boolean;

    /**
     * flex grow property of a grid item
     */
    flexGrow?: CSSProperties['flexGrow'];

    /**
     * to justify content in a grid
     */
    justifyContent?: CSSProperties['justifyContent'];

    /**
     * size for screens from => 1025 - ...
     */
    lg?: GridSize;

    /**
     * size for screens from => 768px - 1025px
     */
    md?: GridSize;

    /**
     * size for screens from => 576px - 768px
     */
    sm?: GridSize;

    /**
     * spacing between grid items
     */
    spacing?: Spacing;

    /**
     * use container for a Grid and item to specify items inside a container
     */
    type: 'container' | 'item';

    /**
     * for size for screens from => 0px - 576px
     */
    xs?: GridSize;
}
