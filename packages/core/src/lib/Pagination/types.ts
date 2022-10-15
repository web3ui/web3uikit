export interface IPaginationProps extends TUsePaginationProps {
    /**
     * callback function on page change
     */
    onPageChange: (currPage: number) => void;
}

export type TUsePaginationProps = {
    /**
     * total length of data to be paginated
     */
    totalCount: number;

    /**
     * number of elements shown in a single page
     */
    pageSize: number;

    /**
     * number of elements shown on each side of active page
     */
    siblingCount: number;

    /**
     * current active page
     */
    currentPage: number;
};

export interface IPaginationStyleProps {
    isActive: boolean;
    isDot?: boolean;
}
