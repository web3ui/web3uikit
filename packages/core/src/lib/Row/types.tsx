type alignStyles = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type justifyStyles =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
export interface IRowProps {
    /**
     * To Align items veritcaly
     */
    alignItems?: alignStyles;
    /**
     * To Align items Horozontially
     */
    justifyItems?: justifyStyles;
    /**
     * Width Of Row by default 100% of parent container size
     */
    width?: number;
    /**
     * To specify the gap between each row element
     */
    colGap?: number;
    /**
     * To specfiy that gap between each new row
     */
    rowGap?: number;
    /**
     * Children of the grid Ideally Col elements
     */
    children?: JSX.Element[] | JSX.Element;
    /**
     * Amount of grid breakpoints for xs
     */
    xs?: number;
    /**
     * Amount of grid breakpoints for sm
     */
    sm?: number;
    /**
     * Amount of grid breakpoints for medium
     */
    md?: number;
    /**
     * Amount of grid breakpoints for large
     */
    lg?: number;
}

export interface IColProps {
    /**
     * To Specify how many breakpoints Col will span
     */
    span?: number;
    /**
     * Elements to Render
     */
    children?: JSX.Element;
    /**
     * To take full width of screen
     */
    isFullWidth?: boolean;
    /**
     * To Specify the amount of colunms, the Col will take per each screen size
     */
    breakpointsConfig?: IColBreakpointsConfig;
    /**
     * To overwrite the order of which the columns render
     */
    order?: number;
}

export interface IColBreakpointsConfig {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}
