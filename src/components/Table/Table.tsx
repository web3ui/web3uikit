import React, { Fragment, useEffect, useState } from 'react';
import { TableProps } from '.';
import color from '../../styles/colors';
import getModuleAnimation from '../Card/Animations/animations';
import { Icon } from '../Icon';
import Loading from '../Loading/Loading';
import { Typography } from '../Typography';
import { paginate, getInnerText } from './Helper';
import {
    Divider,
    DivSpinnerLoaderParent,
    DivTableCell,
    NoData,
    Pagination,
    PaginationTag,
    PaginationText,
    TableGrid,
    TableGridContainer,
    TableParent,
} from './Table.styles';

const Table: React.FC<TableProps> = ({
    alignCellItems = 'start',
    columnsConfig,
    customLoadingContent,
    customNoDataComponent,
    customNoDataText = 'No Data',
    customPageNumber,
    data,
    header,
    isColumnSortable = [],
    isLoading = false,
    justifyCellItems = 'start',
    maxPages,
    noPagination,
    onPageNumberChanged,
    onRowClick,
    pageSize,
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
                            alignCellItems={alignCellItems}
                            className="table_header"
                            data-testid="test-table-cell"
                            justifyCellItems={justifyCellItems}
                            key={`header_${key}`}
                            onClick={() => handleSortingChange(key)}
                            role="table-header"
                        >
                            {col}
                            {sortField === key && (
                                <Icon
                                    svg={
                                        order === 'asc'
                                            ? 'triangleUp'
                                            : 'triangleDown'
                                    }
                                    fill={color.grey}
                                />
                            )}
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
                        (row: (string | React.ReactNode)[], rowKey, arr) => (
                            <React.Fragment key={`fragment_${rowKey}`}>
                                {row.map(
                                    (
                                        item: string | React.ReactNode,
                                        colKey: number,
                                        rowData,
                                    ) => (
                                        <DivTableCell
                                            key={`tr_${rowKey}_${colKey}`}
                                            data-key={`tr_${rowKey}_${colKey}`}
                                            role="table-item"
                                            className={`${
                                                colKey == 0 && 'firstCol'
                                            } ${
                                                colKey == rowData.length - 1 &&
                                                'lastCol'
                                            }`}
                                            alignCellItems={alignCellItems}
                                            justifyCellItems={justifyCellItems}
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
                            </React.Fragment>
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
                            active={key - 1 == pageNum}
                            data-testid={`test-table-pagination-${
                                key - 1 == pageNum
                            }`}
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
            <TableGridContainer>
                <TableGrid columns={columnsConfig}>
                    <RenderTableHeader />
                    {isLoading ? <Loader /> : <RenderTable />}
                </TableGrid>
            </TableGridContainer>
            <RenderPagination />
        </TableParent>
    );
};

export default Table;
