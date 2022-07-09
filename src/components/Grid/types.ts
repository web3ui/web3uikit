// NOTE: the comment strings are very important
// Storybook pulls them to make our docs

import { ReactNode } from 'react';

export interface GridProps {
    /**
     * Number of Columns in the Grid used when Responsive is set to False
     */
    gridColumns: number;
    /**
     * Number of Columns in the Grid used when Responsive is set to False
     */
    gridRows: number;
    /**
     * Set the gap between each column
     */
    gridColumnGap?: number;
    /**
     * AutoFit the grid items without overflow
     */
    responsive: boolean;
    /**
     * Dimension for responsive grid items
     */
    responsiveProps: {
        minWidth: number;
        minHeight: number;
        maxWidth: number | '1fr';
        maxHeight: number | '1fr';
        responsiveType: 'auto-fit' | 'auto-fill';
        enableAuto: boolean;
    };
    /**
     * Set the gap between each row
     */
    gridRowGap?: number;
    /**
     * Enable to view GridItem child components
     */
    disableTestChildren: boolean;
    /**
     * Enable to generate children for testing
     */
    drawCustomChildrenForTesting?: boolean;
    /**
     * Set the position of custom childrens for testing
     */
    customChildPropsForTesting?: Array<
        [rowStart: number, colStart: number, rowEnd: number, colEnd: number]
    >;
    // customChildProps?: Array<{
    //     rowStart: number;
    //     colStart: number;
    //     rowEnd: number;
    //     colEnd: number;
    // }>;s
    children?: ReactNode | JSX.Element[];
}
