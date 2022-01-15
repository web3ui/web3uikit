import React, { useState, useEffect } from 'react';
import { TableProps } from '.';
import { paginate } from './Helper';
import {
    Divider,
    PaginationTag,
    TableGrid,
    TableParent,
    Pagination,
    PaginationText,
    NoData,
} from './Table.styles';

const Table: React.FC<TableProps> = ({
    columnsConfig,
    header,
    data,
    pageSize,
    maxPages,
    noPagination,
}) => {
    const [pageNumber, setPageNumber] = useState(1);

    const computeCurrentData = (): string[] | React.ReactNode[] => {
        if (noPagination) {
            return data;
        }
        const from = pageNumber * pageSize - 1;
        const to = from + pageSize;
        return data?.slice(from, to);
    };

    const handlePrev = (): void => {
        if (pageNumber != 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const handleNext = (): void => {
        if (pageSize * pageNumber + 1 <= data?.length) {
            setPageNumber(pageNumber + 1);
        }
    };

    const RenderTableHeader = (): JSX.Element => {
        return (
            <>
                {header.map((col, key) => (
                    <div key={`header_${key}`}>{col}</div>
                ))}
                <Divider />
            </>
        );
    };

    const RenderTable = (): JSX.Element => {
        if (data?.length == 0) {
            return <NoData>No Data</NoData>;
        }
        return (
            <>
                {computeCurrentData().map((row, rowKey) => (
                    <>
                        {row.map((item, colKey) => (
                            <div key={`tr_${rowKey}_${colKey}`}>{item}</div>
                        ))}
                        <Divider />
                    </>
                ))}
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
                        isActive={pageNumber != 1}
                        onClick={handlePrev}
                    >
                        Prev
                    </PaginationText>
                    {paginate(data?.length, pageNumber, pageSize, maxPages).map(
                        (key) => (
                            <PaginationTag
                                key={key}
                                pageNumber={key}
                                currentPageNumber={pageNumber}
                                onClick={() => setPageNumber(key)}
                            >
                                <span>{key}</span>
                            </PaginationTag>
                        ),
                    )}
                    <PaginationText
                        isActive={pageSize * pageNumber + 1 <= data?.length}
                        onClick={handleNext}
                    >
                        Next
                    </PaginationText>
                </div>
            </Pagination>
        );
    };

    return (
        <TableParent>
            <TableGrid columns={columnsConfig}>
                <RenderTableHeader />
                <RenderTable />
            </TableGrid>
            <RenderPagination />
        </TableParent>
    );
};

export default Table;
