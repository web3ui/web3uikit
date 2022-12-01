import { useState, useEffect } from 'react';
import { ITableNewProps } from './types';
import styles from './TableNew.styles';
import TableBase from './atoms/TableBase';
import Pagination from './atoms/Pagination';
import { getInnerText } from './Helper';

const { TableParent } = styles;

const TableNew: React.FC<ITableNewProps> = ({
    alignCellItems = 'center',
    cellPadding,
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
    justifyCellItems = 'center',
    maxPages,
    noPagination,
    onPageNumberChanged,
    onRowClick,
    pageSize,
    tableBackgroundColor = 'white',
    headerTextColor = '',
    headerBgColor = '',
    hover = false,
    hoverBackgroundColor,
    ...props
}) => {
    const [pageNum, setPageNum] = useState<number>(
        customPageNumber ? customPageNumber : 0,
    );
    const [tableData, setTableData] = useState(data);
    const [sortField, setSortField] = useState(-1);
    const [order, setOrder] = useState('asc');

    const handleSetPageNumber = (state: number): void => {
        if (typeof customPageNumber == 'number') {
            setPageNum(customPageNumber);
        } else {
            setPageNum(state);
        }
    };

    const handleSortingChange = (fieldId: number) => {
        if (
            isColumnSortable.length !== 0 &&
            isColumnSortable.length > fieldId &&
            !isLoading &&
            isColumnSortable[fieldId]
        ) {
            const sortOrder =
                fieldId === sortField && order === 'asc' ? 'desc' : 'asc';
            setSortField(fieldId);
            setOrder(sortOrder);
            handleSorting(fieldId, sortOrder);
        }
    };

    const handleSorting = (fieldId: number, sortOrder: string) => {
        const sorted = [...data].sort((a, b) => {
            let x = getInnerText(a[fieldId]);
            let y = getInnerText(b[fieldId]);
            if (!x && !y) return 0;
            if (!x) return 1;
            if (!y) return -1;
            const pattern = /(\d{2})\/(\d{2})\/(\d{4})(.*)/g;
            // To handle date sort convert to YYYY-MM-DD format
            if (pattern.test(x)) {
                x = x.replace(pattern, '$3-$2-$1 $4');
            }
            if (pattern.test(y)) {
                y = y.replace(pattern, '$3-$2-$1 $4');
            }
            return (
                x.localeCompare(y, 'en', {
                    numeric: true,
                    sensitivity: 'base',
                }) * (sortOrder === 'asc' ? 1 : -1)
            );
        });
        setTableData(sorted);
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
                alignCellItems={alignCellItems}
                justifyCellItems={justifyCellItems}
                cellPadding={cellPadding}
                headerTextColor={headerTextColor}
                headerBgColor={headerBgColor}
                isScrollableOnOverflow={isScrollableOnOverflow}
                customTableBorder={customTableBorder}
                tableBackgroundColor={tableBackgroundColor}
                hover={hover}
                hoverBackgroundColor={hoverBackgroundColor}
                customNoDataText={customNoDataText}
                isLoading={isLoading}
                customLoadingContent={customLoadingContent}
                sortField={sortField}
                order={order}
                handleSortingChange={handleSortingChange}
                {...props}
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
