// Importing React and its awesome hooks
// import { JSXElement } from '@babel/types';
import React from 'react';
// importing props from the components TypeScript interface
import { GridProps } from './types';
import styles from './Grid.styles';

const { DivStyled, DivTestItem, CodeStyled } = styles;

// Normal boilerplate React functional component
const Grid: React.FC<GridProps> = ({
    // deconstructing props and setting any default values, sorted alphabetically
    children,
    customChildPropsForTesting = [],
    disableTestChildren = true,
    drawCustomChildrenForTesting = false,
    gridColumnGap,
    gridColumns,
    gridRowGap,
    gridRows,
    responsive = false,
    responsiveProps = {
        minWidth: 0,
        minHeight: 0,
        maxWidth: '1fr',
        maxHeight: '1fr',
        responsiveType: 'auto-fit',
        enableAuto: false,
    },
    ...props
}) => {
    // customList array store the elements generated form customChildProps array
    // Elements in customList are genreated using GenerateCustomChild function
    // customList is generated when drawChildren is false
    const customList: JSX.Element[] = [];
    const GenerateCustomChild = (): any => {
        let counter = 0;
        if (customChildPropsForTesting.length > 0) {
            for (
                let i: number = 0;
                i < customChildPropsForTesting.length;
                i++
            ) {
                counter++;
                if (customChildPropsForTesting[i]) {
                    customList.push(
                        <DivTestItem
                            key={counter}
                            style={{
                                gridArea: `${customChildPropsForTesting[i][0]} / ${customChildPropsForTesting[i][1]} / ${customChildPropsForTesting[i][2]} / ${customChildPropsForTesting[i][3]}`,
                            }}
                        >
                            <CodeStyled>
                                gridArea({counter}):
                                {customChildPropsForTesting[i][0]}/
                                {customChildPropsForTesting[i][1]}/
                                {customChildPropsForTesting[i][2]}/
                                {customChildPropsForTesting[i][3]}
                            </CodeStyled>
                        </DivTestItem>,
                    );
                }
            }
        }
    };
    // list array store the elements generated based on the grid size
    // Elements in list are genreated using GenerateChild function
    // list is generated when drawChildren is true
    const list: JSX.Element[] = [];
    const GenerateChild = ({
        col,
        row,
        children,
    }: {
        col: number;
        row: number;
        children?: any;
    }): any => {
        let counter = 0;
        for (let r: number = 1; r <= row; r++) {
            for (let c: number = 1; c <= col; c++) {
                counter++;
                list.push(
                    <DivTestItem
                        key={counter}
                        style={{
                            gridArea: `${responsive ? 0 : r} / ${
                                responsive ? 0 : c
                            } / ${responsive ? 0 : r + 1} / ${
                                responsive ? 0 : c + 1
                            }`,
                        }}
                    >
                        <CodeStyled>
                            gridArea({counter}): {responsive ? 0 : r}/
                            {responsive ? 0 : c}/{responsive ? 0 : r + 1}/
                            {responsive ? 0 : c + 1}
                        </CodeStyled>
                        {children}
                    </DivTestItem>,
                );
            }
        }
    };

    if (responsiveProps?.enableAuto) {
        return (
            <DivStyled
                {...() => {}}
                style={{
                    // Grid Auto area css
                    gridAutoColumns: `repeat(${
                        !responsive
                            ? gridColumns
                            : responsiveProps?.responsiveType
                    }, minmax(${
                        responsive ? responsiveProps?.minWidth + 'px' : '0px'
                    }, ${
                        responsiveProps
                            ? responsiveProps.maxWidth > 0
                                ? responsiveProps.maxWidth + 'px'
                                : '1fr'
                            : '1fr'
                    }))`,
                    gridAutoRows: `repeat(${
                        !responsive ? gridRows : responsiveProps?.responsiveType
                    }, minmax(${
                        responsive ? responsiveProps?.minHeight + 'px' : '0px'
                    }, ${
                        responsiveProps
                            ? responsiveProps.maxHeight > 0
                                ? responsiveProps.maxHeight + 'px'
                                : '1fr'
                            : '1fr'
                    }))`,
                    columnGap: gridColumnGap,
                    rowGap: gridRowGap,
                }}
                {...props}
            >
                <>
                    {!drawCustomChildrenForTesting ? (
                        <GenerateChild
                            col={gridColumns}
                            row={gridRows}
                        ></GenerateChild>
                    ) : (
                        <GenerateCustomChild></GenerateCustomChild>
                    )}
                </>
                <>
                    {disableTestChildren ? (
                        <>{children}</>
                    ) : (
                        <>
                            {list}
                            {customList}
                        </>
                    )}
                </>
            </DivStyled>
        );
    } else {
        return (
            <DivStyled
                {...() => {}}
                style={{
                    // Grid template area css
                    gridTemplateColumns: `repeat(${
                        !responsive
                            ? gridColumns
                            : responsiveProps?.responsiveType
                    }, minmax(${
                        responsive ? responsiveProps?.minWidth + 'px' : '0px'
                    }, ${
                        responsiveProps
                            ? responsiveProps.maxWidth > 0
                                ? responsiveProps.maxWidth + 'px'
                                : '1fr'
                            : '1fr'
                    }))`,
                    gridTemplateRows: `repeat(${
                        !responsive ? gridRows : responsiveProps?.responsiveType
                    }, minmax(${
                        responsive ? responsiveProps?.minHeight + 'px' : '0px'
                    }, ${
                        responsiveProps
                            ? responsiveProps.maxHeight > 0
                                ? responsiveProps.maxHeight + 'px'
                                : '1fr'
                            : '1fr'
                    }))`,
                    columnGap: gridColumnGap,
                    rowGap: gridRowGap,
                }}
                {...props}
            >
                <>
                    {!drawCustomChildrenForTesting ? (
                        <GenerateChild
                            col={gridColumns}
                            row={gridRows}
                        ></GenerateChild>
                    ) : (
                        <GenerateCustomChild></GenerateCustomChild>
                    )}
                </>
                <>
                    {disableTestChildren ? (
                        <>{children}</>
                    ) : (
                        <>
                            {list}
                            {customList}
                        </>
                    )}
                </>
            </DivStyled>
        );
    }
};

export default Grid;
