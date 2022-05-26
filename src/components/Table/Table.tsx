import React, { useEffect, useState } from 'react';
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
    columnsConfig,
    header,
    data,
    pageSize,
    maxPages,
    noPagination,
    customPageNumber,
    onPageNumberChanged,
    customNoDataComponent,
    customNoDataText = 'No Data',
    isLoading = false,
    customLoadingContent,
    alignCellItems = 'start',
    justifyCellItems = 'start',
    isColumnSortable = [],
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
                    <>
                        <DivTableCell
                            key={`header_${key}`}
                            role="table-header"
                            className="table_header"
                            alignCellItems={alignCellItems}
                            justifyCellItems={justifyCellItems}
                            onClick={() => handleSortingChange(key)}
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
                    </>
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
                                            role="table-item"
                                            className={`${
                                                colKey == 0 && 'firstCol'
                                            } ${
                                                colKey == rowData.length - 1 &&
                                                'lastCol'
                                            }`}
                                            alignCellItems={alignCellItems}
                                            justifyCellItems={justifyCellItems}
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
                        isActive={pageNum != 0}
                        onClick={handlePrev}
                        data-testid="pagination-prev"
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
                            key={`pagination_${key}`}
                            active={key - 1 == pageNum}
                            onClick={() => handleSetPageNumber(key - 1)}
                            role="pagination-item"
                            data-testid={`pagination_${key - 1 == pageNum}`}
                        >
                            <span>{key}</span>
                        </PaginationTag>
                    ))}
                    <PaginationText
                        isActive={
                            pageNum + 1 <
                            Math.ceil(tableData?.length / pageSize)
                        }
                        onClick={handleNext}
                        data-testid="pagination-next"
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
        <TableParent data-testid="test-table-parent" {...props}>
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
