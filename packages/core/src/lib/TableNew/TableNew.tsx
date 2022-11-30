import { useState, useEffect } from 'react';
import { color } from '@web3uikit/styles';
import { ITableNewProps } from './types';
import styles from './TableNew.styles';
import TableBase from './atoms/TableBase';
import Pagination from './atoms/Pagination';

const { TableParent } = styles;

const TableNew: React.FC<ITableNewProps> = ({
    alignCellItems = 'start',
    cellPadding,
    columnGapSize = 11,
    columnsConfig,
    customDataComponent,
    customLoadingContent,
    customNoDataComponent,
    customNoDataText = 'No Data',
    customPageNumber,
    customTableBorder,
    data,
    header,
    isColumnSortable = [],
    isLoading = false,
    isScrollableOnOverflow = true,
    justifyCellItems = 'start',
    maxPages,
    noPagination,
    onPageNumberChanged,
    onRowClick,
    pageSize,
    tableBackgroundColor = 'white',
    headerTextColor = '',
    headerBgColor = '',
    ...props
}) => {
    const [pageNum, setPageNum] = useState<number>(
        customPageNumber ? customPageNumber : 0,
    );
    const [tableData, setTableData] = useState(data);

    const handleSetPageNumber = (state: number): void => {
        if (typeof customPageNumber == 'number') {
            setPageNum(customPageNumber);
        } else {
            setPageNum(state);
        }
    };
    useEffect(() => {
        setTableData(data);
        setPageNum(0);
    }, [data]);

    useEffect(() => {
        handleSetPageNumber(customPageNumber ? customPageNumber : 0);
    }, [customPageNumber]);

    useEffect(() => {
        if (typeof onPageNumberChanged != 'undefined') {
            onPageNumberChanged(pageNum);
        }
    }, [pageNum]);

    return (
        <TableParent>
            <TableBase
                tableData={tableData}
                header={header}
                noPagination={noPagination}
                pageNum={pageNum}
                pageSize={pageSize}
            />
            <Pagination
                noPagination={noPagination}
                pageSize={pageSize}
                maxPages={maxPages}
                tableData={tableData}
                handleSetPageNumber={handleSetPageNumber}
                pageNum={pageNum}
            />
        </TableParent>
    );
};

export default TableNew;
