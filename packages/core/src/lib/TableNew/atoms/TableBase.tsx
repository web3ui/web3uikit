import React from 'react';
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
    | 'rowsLineWidth'
    | 'rowsLineWidthColor'
>;

interface ITableProps extends TTableProps {
    pageNum: number;
    tableData: (React.ReactNode | string)[][];
    sortField: number;
    order: string;
    handleSortingChange: (key: number) => void;
}

const { TableStyled, TableContainer, DivTableCell } = styles;
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
    headerBgColor,
    headerTextColor,
    hoverBackgroundColor,
    sortField,
    order,
    handleSortingChange,
    onRowClick,
    rowsLineWidth,
    rowsLineWidthColor,
}) => {
    const computeCurrentData = (): (string | React.ReactNode)[][] => {
        if (noPagination) {
            return tableData;
        }
        const from = (pageNum - 1) * pageSize;
        const to = from + pageSize;
        return tableData?.slice(from, to);
    };

    return (
        <TableContainer
            isScrollableOnOverflow={isScrollableOnOverflow}
            customTableBorder={customTableBorder}
        >
            <TableStyled
                tableBackgroundColor={tableBackgroundColor}
                alignCellItems={alignCellItems}
                headerTextColor={headerTextColor}
                headerBgColor={headerBgColor}
                hoverBackgroundColor={hoverBackgroundColor}
                rowsLineWidth={rowsLineWidth}
                rowsLineWidthColor={rowsLineWidthColor}
            >
                <thead>
                    <tr>
                        {header.map((head, key) => (
                            <th key={`tableHeader_${key}`}>
                                <DivTableCell
                                    justifyCellItems={justifyCellItems}
                                    cellPadding={cellPadding}
                                    onClick={() => handleSortingChange(key)}
                                    role="table-header"
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
                            </th>
                        ))}
                    </tr>
                </thead>
                {!isLoading && (
                    <tbody>
                        {computeCurrentData().map((row, rowKey) => (
                            <tr
                                className={`${
                                    hoverBackgroundColor &&
                                    'web3uikit-table-row-hover'
                                }`}
                                key={rowKey}
                            >
                                {row.map((element, colKey) => (
                                    <td key={`tableBody_${colKey}`}>
                                        <DivTableCell
                                            role="table-item"
                                            data-key={`tr_${rowKey}_${colKey}`}
                                            justifyCellItems={justifyCellItems}
                                            cellPadding={cellPadding}
                                            onClick={(e) => {
                                                if (
                                                    onRowClick &&
                                                    e.target === e.currentTarget
                                                ) {
                                                    onRowClick(
                                                        rowKey +
                                                            pageSize * pageNum,
                                                    );
                                                }
                                            }}
                                        >
                                            {element}
                                        </DivTableCell>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                )}
            </TableStyled>
            {tableData && computeCurrentData().length == 0 && (
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
