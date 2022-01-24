type alignStyles = 'start' | 'end' | 'center' | 'stretch';

export interface IGridProps {
    alignItems?: alignStyles | 'baseline';
    justifyItems?: alignStyles;
    colGap?: number;
    rowGap?: number;
    children?: JSX.Element;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}

export interface IColProps {
    alignSelf?: alignStyles;
    justifySelf?: alignStyles;
    startCol?: number;
    span?: number;
    children?: JSX.Element;
    isFullWidth?: boolean;
    breakpointsConfig: IColBreakpointsConfig;
}

export interface IColBreakpointsConfig {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}
