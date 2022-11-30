import React from 'react';
import { ITableNewProps } from '../types';
import styles from './styles';
import Loader from './Loader';
import NoData from './NoData';

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
    | 'hover'
    | 'hoverBackgroundColor'
>;

interface ITableProps extends TTableProps {
    pageNum: number;
    tableData: (React.ReactNode | string)[][];
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
    hover,
    hoverBackgroundColor,
}) => {
    const computeCurrentData = (): (string | React.ReactNode)[][] => {
        if (noPagination) {
            return tableData;
        }
        const from = pageNum * pageSize;
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
            >
                <thead>
                    <tr>
                        {header.map((head) => (
                            <th>
                                <DivTableCell
                                    justifyCellItems={justifyCellItems}
                                    cellPadding={cellPadding}
                                >
                                    {head}
                                </DivTableCell>
                            </th>
                        ))}
                    </tr>
                </thead>
                {!isLoading && (
                    <tbody>
                        {computeCurrentData().map((row) => (
                            <tr className={`${hover && 'hover'}`}>
                                {row.map((element) => (
                                    <td>
                                        <DivTableCell
                                            justifyCellItems={justifyCellItems}
                                            cellPadding={cellPadding}
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
