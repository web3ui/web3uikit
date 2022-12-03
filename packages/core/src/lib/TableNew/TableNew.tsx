import { useState, useEffect } from 'react';
import { ITableNewProps } from './types';
import styles from './TableNew.styles';
import TableBase from './atoms/TableBase';
import { getInnerText } from './Helper';
import { Pagination } from '../Pagination';

const { TableParent, PaginationStyled } = styles;

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
    justifyCellItems = 'start',
    maxPages,
    noPagination,
    onPageNumberChanged,
    onRowClick,
    pageSize,
    tableBackgroundColor = 'white',
    headerTextColor = '',
    headerBgColor = '',
    hoverBackgroundColor,
    rowsLineWidth,
    rowsLineWidthColor,
    ...props
}) => {
    const [pageNum, setPageNum] = useState<number>(
        customPageNumber ? customPageNumber : 1,
    );
    const [tableData, setTableData] = useState(data);
    const [sortField, setSortField] = useState(-1);
    const [order, setOrder] = useState('asc');

    const handleSetPageNumber = (state: number): void => {
        console.log('state-number', state);
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
        setPageNum(1);
    }, [data]);

    useEffect(() => {
        handleSetPageNumber(customPageNumber ? customPageNumber : 1);
    }, [customPageNumber]);

    useEffect(() => {
        if (typeof onPageNumberChanged != 'undefined') {
            onPageNumberChanged(pageNum);
        }
    }, [pageNum]);

    const RenderPagination = (): JSX.Element => {
        if (noPagination || tableData?.length == 0) {
            return <></>;
        }
        return (
            <PaginationStyled data-testid="test-table-pagination">
                <Pagination
                    currentPage={pageNum}
                    pageSize={pageSize}
                    totalCount={tableData.length}
                    onPageChange={handleSetPageNumber}
                    siblingCount={1}
                    maxPages={maxPages}
                />
            </PaginationStyled>
        );
    };

    return (
        <TableParent data-testid="test-table" {...props}>
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
                hoverBackgroundColor={hoverBackgroundColor}
                customNoDataText={customNoDataText}
                isLoading={isLoading}
                customLoadingContent={customLoadingContent}
                sortField={sortField}
                order={order}
                handleSortingChange={handleSortingChange}
                onRowClick={onRowClick}
                rowsLineWidth={rowsLineWidth}
                rowsLineWidthColor={rowsLineWidthColor}
            />
            <RenderPagination />
        </TableParent>
    );
};

export default TableNew;
