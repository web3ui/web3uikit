import { Fragment, ReactNode, useEffect, useState } from 'react';
import { ITableProps } from '.';
import { color } from '@web3uikit/styles';
import getModuleAnimation from '../Card/Animations/animations';
import { TriangleUp, TriangleDown } from '@web3uikit/icons';
import Loading from '../Loading/Loading';
import { Typography } from '../Typography';
import { paginate, getInnerText } from './Helper';
import styles from './Table.styles';

const {
    DivSpinnerLoaderParent,
    DivStyledCustomData,
    DivTableCell,
    Divider,
    NoData,
    Pagination,
    PaginationTag,
    PaginationText,
    TableGrid,
    TableGridContainer,
    TableParent,
} = styles;

const Table: React.FC<ITableProps> = ({
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
    const [sortField, setSortField] = useState(-1);
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        if (typeof onPageNumberChanged != 'undefined') {
            onPageNumberChanged(pageNum);
        }
    }, [pageNum]);

    useEffect(() => {
        setTableData(data);
        setPageNum(0);
    }, [data]);

    useEffect(() => {
        handleSetPageNumber(customPageNumber ? customPageNumber : 0);
    }, [customPageNumber]);

    const handleSetPageNumber = (state: number): void => {
        if (typeof customPageNumber == 'number') {
            setPageNum(customPageNumber);
        } else {
            setPageNum(state);
        }
    };

    const computeCurrentData = (): (string | React.ReactNode)[][] => {
        if (noPagination) {
            return tableData;
        }
        const from = pageNum * pageSize;
        const to = from + pageSize;
        return tableData?.slice(from, to);
    };

    const handlePrev = (): void => {
        if (pageNum != 0) {
            handleSetPageNumber(pageNum - 1);
        }
    };

    const handleNext = (): void => {
        if (pageNum + 1 < Math.ceil(tableData?.length / pageSize)) {
            handleSetPageNumber(pageNum + 1);
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

    const RenderTableHeader = (): JSX.Element => {
        return (
            <>
                {header.map((col, key) => (
                    <Fragment key={`header-wrap-${key}`}>
                        <DivTableCell
                            key={`header_${key}`}
                            role="table-header"
                            className="table_header"
                            data-testid="test-table-cell"
                            alignCellItems={alignCellItems}
                            justifyCellItems={justifyCellItems}
                            onClick={() => handleSortingChange(key)}
                            cellPadding={cellPadding}
                        >
                            {col}
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
                    </Fragment>
                ))}
                <Divider />
            </>
        );
    };

    const RenderNoData = (): JSX.Element => {
        if (customNoDataComponent) {
            return <NoData>{customNoDataComponent}</NoData>;
        }
        return (
            <NoData>
                <div>
                    {getModuleAnimation(undefined)}
                    <p>{customNoDataText}</p>
                </div>
            </NoData>
        );
    };

    const RenderTable = (): JSX.Element => {
        if (tableData && computeCurrentData().length == 0) {
            return <RenderNoData />;
        }
        return (
            <>
                {tableData &&
                    computeCurrentData().map(
                        (row: (string | ReactNode)[], rowKey, arr) => (
                            <Fragment key={`fragment_${rowKey}`}>
                                {row.map(
                                    (
                                        item: string | ReactNode,
                                        colKey: number,
                                        rowData,
                                    ) => (
                                        <DivTableCell
                                            key={`tr_${rowKey}_${colKey}`}
                                            data-key={`tr_${rowKey}_${colKey}`}
                                            role="table-item"
                                            className={`${colKey == 0 &&
                                                'firstCol'} ${colKey ==
                                                rowData.length - 1 &&
                                                'lastCol'}`}
                                            alignCellItems={alignCellItems}
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
                                            {item}
                                        </DivTableCell>
                                    ),
                                )}
                                {rowKey != arr.length - 1 && (
                                    <Divider key={`divider_${rowKey}`} />
                                )}
                            </Fragment>
                        ),
                    )}
            </>
        );
    };

    const RenderPagination = (): JSX.Element => {
        if (noPagination || tableData?.length == 0) {
            return <></>;
        }
        return (
            <Pagination>
                <div>
                    <PaginationText
                        data-testid="test-table-pagination-prev"
                        isActive={pageNum != 0}
                        onClick={handlePrev}
                    >
                        Prev
                    </PaginationText>
                    {paginate(
                        tableData?.length,
                        pageNum,
                        pageSize,
                        maxPages,
                    ).map((key) => (
                        <PaginationTag
                            data-testid={`test-table-pagination-${key - 1 ==
                                pageNum}`}
                            active={key - 1 == pageNum}
                            key={`pagination_${key}`}
                            onClick={() => handleSetPageNumber(key - 1)}
                            role="pagination-item"
                        >
                            <span>{key}</span>
                        </PaginationTag>
                    ))}
                    <PaginationText
                        data-testid="test-table-pagination-next"
                        isActive={
                            pageNum + 1 <
                            Math.ceil(tableData?.length / pageSize)
                        }
                        onClick={handleNext}
                    >
                        Next
                    </PaginationText>
                </div>
            </Pagination>
        );
    };

    const Loader = () => (
        <DivSpinnerLoaderParent>
            {customLoadingContent ? (
                customLoadingContent
            ) : (
                <>
                    <Loading
                        spinnerType={'wave'}
                        spinnerColor={'#B0B5BF'}
                        size={6}
                    />

                    <Typography weight="400" variant="h3" color={'#B0B5BF'}>
                        Loading Content
                    </Typography>
                </>
            )}
        </DivSpinnerLoaderParent>
    );

    return (
        <TableParent data-testid="test-table" {...props}>
            <TableGridContainer
                isScrollableOnOverflow={isScrollableOnOverflow}
                customTableBorder={customTableBorder}
            >
                <TableGrid
                    columns={columnsConfig}
                    columnGapSize={columnGapSize}
                    tableBackgroundColor={tableBackgroundColor}
                    headerTextColor={headerTextColor}
                    headerBgColor={headerBgColor}
                    cellPadding={cellPadding}
                >
                    <RenderTableHeader />
                    {isLoading ? <Loader /> : <RenderTable />}
                    {customDataComponent && (
                        <DivStyledCustomData>
                            {customDataComponent}
                        </DivStyledCustomData>
                    )}
                </TableGrid>
            </TableGridContainer>
            <RenderPagination />
        </TableParent>
    );
};

export default Table;
