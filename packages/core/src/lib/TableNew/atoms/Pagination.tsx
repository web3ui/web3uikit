import React from 'react';
import { ITableNewProps } from '../types';
import styles from './styles';

const { PaginationStyled, PaginationTag, PaginationText} = styles;

type TTableProps = Pick<ITableNewProps, 'noPagination'|  'maxPages'|
    'customPageNumber'|
    'onPageNumberChanged' | 'pageSize'
>
interface IPaginationProps extends TTableProps{
    pageNum: number,
    setPageNum: ()=>void,
}

const Pagination:React.FC<IPaginationProps> = ({ noPagination,
    pageSize,
    maxPages,
    pageNum,
    setPageNum
    onPageNumberChanged}) => {
     
        const handleSetPageNumber = (state: number): void => {
        if (typeof customPageNumber == 'number') {
            setPageNum(customPageNumber);
        } else {
            setPageNum(state);
        }
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
  return (
     if (noPagination) {
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
                    {paginate(pageNum, pageSize, maxPages).map((key) => (
                        <PaginationTag
                            data-testid={`test-table-pagination-${
                                key - 1 == pageNum
                            }`}
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
  )
}

export default Pagination