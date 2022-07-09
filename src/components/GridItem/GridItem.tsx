// Importing React and its awesome hooks
// import { JSXElement } from '@babel/types';
import React from 'react';
// importing props from the components TypeScript interface
import { GridItemProps } from './types';
import styles from './GridItem.styles';

const { DivStyled } = styles;

// Normal boilerplate React functional component
const GridItem: React.FC<GridItemProps> = ({
    // deconstructing props and setting any default values, sorted alphabetically
    children,
    gridArea = [],
    ...props
}) => {
    return (
        <DivStyled
            style={{
                gridArea: `${gridArea[0] ? gridArea[0] : 0} / ${
                    gridArea[1] ? gridArea[1] : 0
                } / ${gridArea[2] ? gridArea[2] : 0} / ${
                    gridArea[3] ? gridArea[3] : 0
                }`,
            }}
            {...props}
        >
            {children}
        </DivStyled>
    );
};

export default GridItem;
