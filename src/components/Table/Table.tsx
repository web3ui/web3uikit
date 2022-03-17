import React, { useState, useEffect } from 'react';
import { TableProps } from '.';
import { paginate } from './Helper';
import getModuleAnimation from '../Card/Animations/animations';
import {
    Divider,
    PaginationTag,
    TableGrid,
    TableParent,
    Pagination,
    PaginationText,
    NoData,
    DivSpinnerLoaderParent,
    DivTableCell,
} from './Table.styles';
import Loading from '../Loading/Loading';
import { Typography } from '../Typography';

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
}) => {
    const [pageNum, setPageNum] = useState<number>(
        customPageNumber ? customPageNumber : 0,
    );

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
            return data;
        }
        const from = pageNum * pageSize;
        const to = from + pageSize;
        return data?.slice(from, to);
    };

    const handlePrev = (): void => {
        if (pageNum != 0) {
            handleSetPageNumber(pageNum - 1);
        }
    };

    const handleNext = (): void => {
        if (pageNum + 1 < Math.ceil(data?.length / pageSize)) {
            handleSetPageNumber(pageNum + 1);
        }
    };

    const RenderTableHeader = (): JSX.Element => {
        return (
            <>
                {header.map((col, key) => (
                    <DivTableCell
                        key={`header_${key}`}
                        role="table-header"
                        className="table_header"
                        alignCellItems={alignCellItems}
                        justifyCellItems={justifyCellItems}
                    >
                        {col}
                    </DivTableCell>
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
        if (computeCurrentData().length == 0) {
            return <RenderNoData />;
        }
        return (
            <>
                {computeCurrentData().map(
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
        if (noPagination || data?.length == 0) {
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
                    {paginate(data?.length, pageNum, pageSize, maxPages).map(
                        (key) => (
                            <PaginationTag
                                key={`pagination_${key}`}
                                active={key - 1 == pageNum}
                                onClick={() => handleSetPageNumber(key - 1)}
                                role="pagination-item"
                                data-testid={`pagination_${key - 1 == pageNum}`}
                            >
                                <span>{key}</span>
                            </PaginationTag>
                        ),
                    )}
                    <PaginationText
                        isActive={
                            pageNum + 1 < Math.ceil(data?.length / pageSize)
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
        <TableParent data-testid="test-table-parent">
            <TableGrid columns={columnsConfig}>
                <RenderTableHeader />
                {isLoading ? <Loader /> : <RenderTable />}
            </TableGrid>
            <RenderPagination />
        </TableParent>
    );
};

export default Table;
