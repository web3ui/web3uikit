export interface ITableProps {
    /**
     * A String Template that defines the table layout.
     * For more information please check https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
     */
    columnsConfig: string;

    /**
     * The header row of the table
     * For no header pass []
     */
    header: (React.ReactNode | string)[];

    /**
     * The data, the table will present
     */

    data: (React.ReactNode | string)[][];

    /**
     * The number of rows per table page
     */
    pageSize: number;

    /**
     * To align the content within each table cell
     */
    alignCellItems?: 'center' | 'start' | 'end';

    /**
     * To Justify the content withing each table cell
     */
    justifyCellItems?: 'center' | 'start' | 'end';

    /**
     *  Is loading
     */

    isLoading?: boolean;

    /**
     *  What you want to show if table is in loading state
     */
    customLoadingContent?: JSX.Element;

    /**
     * Max number of pagination tags that can be shown
     */
    maxPages?: number;

    /**
     * Will render all data elements
     */
    noPagination?: boolean;

    /**
     * To set table page number
     *  If Out of Range, No Data will be shown
     */
    customPageNumber?: number;

    /**
     * To Have a custom no data component render
     */
    customNoDataComponent?: React.ReactNode;

    /**
     * To replace no data text with a different text, but still keep image
     */
    customNoDataText?: string;

    /**
     * A function that will be called if the page number is changed
     */
    onPageNumberChanged?(pageNum: number): void;

    /**
     * On Table Row Click
     */
    onRowClick?(index: number): void;

    /**
     * Give true if column needs to be sortable
     * For Date Value, format should be DD-MM-YYYY
     */
    isColumnSortable?: boolean[];

    /**
     * This stops table from overflow on small screen and make it scrollable
     */
    isScrollableOnOverflow?: boolean;

    /**
     * gap between each column
     */
    columnGapSize?: number;

    /**
     * background color of the table; remember to use 0px gap size for proper effect
     */
    tableBackgroundColor?: string;

    /**
     * Show a custom component on all pages
     */
    customDataComponent?: React.ReactNode;
}
