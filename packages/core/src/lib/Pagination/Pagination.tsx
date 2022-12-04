import React from 'react';
import { IPaginationProps } from './types';
import styles from './Pagination.styles';
import { DOTS, usePagination } from './Helper';

const { DivStyledPagination, DivStyledPaginationTag, DivStyledPaginationText } =
    styles;

export const Pagination: React.FC<IPaginationProps> = ({
    currentPage,
    onPageChange,
    pageSize,
    siblingCount = 2,
    totalCount,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || !paginationRange || paginationRange?.length < 2) {
        return null;
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    const onNextClick = () => {
        if (currentPage !== lastPage) onPageChange(currentPage + 1);
    };

    const onPreviousClick = () => {
        if (currentPage !== 1) onPageChange(currentPage - 1);
    };

    return (
        <DivStyledPagination
            className="web3uikit-pagination"
            data-testid="test-Pagination"
        >
            <DivStyledPaginationText
                isActive={currentPage !== 1}
                onClick={onPreviousClick}
                data-testid="test-Pagination-Prev"
            >
                Previous
            </DivStyledPaginationText>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return (
                        <DivStyledPaginationTag
                            isActive={false}
                            isDot={true}
                            role="pagination-item"
                            key={`pagination-${index}`}
                            data-testid={`test-Pagination-Item-${index}`}
                        >
                            {/* HTML code for 3 dots */}
                            <div>&#8230;</div>
                        </DivStyledPaginationTag>
                    );
                }
                return (
                    <DivStyledPaginationTag
                        key={`pagination-${index}`}
                        data-testid={`test-Pagination-Item-${index}`}
                        isActive={pageNumber === currentPage}
                        role="pagination-item"
                        onClick={() => onPageChange(Number(pageNumber))}
                    >
                        <div>{pageNumber}</div>
                    </DivStyledPaginationTag>
                );
            })}
            <DivStyledPaginationText
                isActive={currentPage !== lastPage}
                onClick={onNextClick}
                data-testid="test-Pagination-Next"
            >
                Next
            </DivStyledPaginationText>
        </DivStyledPagination>
    );
};

export default Pagination;
