// NOTE: the comment strings are very important
// Storybook pulls them to make our docs

export interface GridItemProps {
    /**
     * Set the position of grid items
     */
    gridArea?: [
        rowStart?: number,
        colStart?: number,
        rowEnd?: number,
        colEnd?: number,
    ];
    /**
     *
     */
    children?: JSX.Element | JSX.Element[];
}
