import React, { useMemo } from 'react';
import { ITableNewProps } from '../types';
import styles from './styles';
import Loader from './Loader';
import NoData from './NoData';
import { TriangleUp, TriangleDown } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';

type TTableProps = Pick<
    ITableNewProps,
    | 'header'
    | 'noPagination'
    | 'pageSize'
    | 'customLoadingContent'
    | 'customNoDataComponent'
    | 'customNoDataText'
    | 'isLoading'
    | 'tableBackgroundColor'
    | 'isScrollableOnOverflow'
    | 'customTableBorder'
    | 'alignCellItems'
    | 'justifyCellItems'
    | 'cellPadding'
    | 'headerTextColor'
    | 'headerBgColor'
    | 'hoverBackgroundColor'
    | 'onRowClick'
    | 'rowsLineStyle'
>;

interface ITableProps extends TTableProps {
    pageNum: number;
    tableData: (React.ReactNode | string)[][];
    sortField: number;
    order: string;
    handleSortingChange: (key: number) => void;
}

const {
    TableStyled,
    TableContainer,
    DivTableCell,
    TableDataOrHeadStyled,
} = styles;

const TableBase: React.FC<ITableProps> = ({
    customLoadingContent,
    customNoDataComponent,
    customNoDataText,
    header,
    isLoading,
    noPagination,
    pageNum,
    pageSize,
    tableData,
    tableBackgroundColor,
    isScrollableOnOverflow,
    customTableBorder,
    alignCellItems,
    justifyCellItems,
    cellPadding,
    headerBgColor = color.white,
    headerTextColor = color.blue70,
    hoverBackgroundColor,
    sortField,
    order,
    handleSortingChange,
    onRowClick,
    rowsLineStyle,
}) => {
    const computeCurrentData = useMemo((): (string | React.ReactNode)[][] => {
        if (noPagination) {
            return tableData;
        }
        const from = (pageNum - 1) * pageSize;
        const to = from + pageSize;
        return tableData?.slice(from, to);
    }, [noPagination, pageNum, pageSize, tableData]);

    console.log(headerTextColor, headerBgColor);
    return (
        <TableContainer
            isScrollableOnOverflow={isScrollableOnOverflow}
            customTableBorder={customTableBorder}
            tableBackgroundColor={tableBackgroundColor}
        >
            <TableStyled
                tableBackgroundColor={tableBackgroundColor}
                alignCellItems={alignCellItems}
                headerTextColor={headerTextColor}
                headerBgColor={headerBgColor}
                hoverBackgroundColor={hoverBackgroundColor}
                rowsLineStyle={rowsLineStyle}
            >
                <thead>
                    <tr>
                        {header.map((head, key) => (
                            <TableDataOrHeadStyled
                                key={`tableHeader_${key}`}
                                as="th"
                                isLastRowCell={false}
                                rowsLineStyle={rowsLineStyle}
                                alignCellItems={alignCellItems}
                                flexBasis={(1 / header.length) * 100}
                            >
                                <DivTableCell
                                    justifyCellItems={justifyCellItems}
                                    cellPadding={cellPadding}
                                    onClick={() => handleSortingChange(key)}
                                    role="table-header"
                                    flexBasis={(1 / header.length) * 100}
                                >
                                    {head}
                                    {sortField === key &&
                                        (order === 'asc' ? (
                                            <TriangleUp
                                                title="triangle up icon"
                                                titleId="table triangle up icon"
                                                fill={color.blueGray50}
                                            />
                                        ) : (
                                            <TriangleDown
                                                title="triangle down icon"
                                                titleId="table triangle down icon"
                                                fill={color.blueGray50}
                                            />
                                        ))}
                                </DivTableCell>
                            </TableDataOrHeadStyled>
                        ))}
                    </tr>
                </thead>
                {!isLoading && (
                    <tbody data-testid={`test-tableBodyPage-${pageNum}`}>
                        {computeCurrentData.map((row, rowKey) => (
                            <tr key={`table-row-${rowKey}`}>
                                {row.map((element, colKey) => (
                                    <TableDataOrHeadStyled
                                        as="td"
                                        key={`tableBody_${colKey}`}
                                        rowsLineStyle={rowsLineStyle}
                                        alignCellItems={alignCellItems}
                                        flexBasis={(1 / row.length) * 100}
                                        isLastRowCell={
                                            computeCurrentData.length ===
                                            rowKey + 1
                                        }
                                    >
                                        <DivTableCell
                                            role="table-item"
                                            data-key={`tr_${rowKey}_${colKey}`}
                                            justifyCellItems={justifyCellItems}
                                            cellPadding={cellPadding}
                                            flexBasis={(1 / row.length) * 100}
                                            onClick={(e) => {
                                                if (
                                                    onRowClick &&
                                                    e.target === e.currentTarget
                                                ) {
                                                    onRowClick(
                                                        rowKey +
                                                            pageSize *
                                                                (pageNum - 1),
                                                    );
                                                }
                                            }}
                                        >
                                            {element}
                                        </DivTableCell>
                                    </TableDataOrHeadStyled>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                )}
            </TableStyled>
            {tableData && computeCurrentData.length == 0 && (
                <NoData
                    customNoDataComponent={customNoDataComponent}
                    customNoDataText={customNoDataText}
                />
            )}
            {isLoading && (
                <Loader customLoadingContent={customLoadingContent} />
            )}
        </TableContainer>
    );
};

export default TableBase;
