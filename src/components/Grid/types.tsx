type alignStyles = 'start' | 'end' | 'center' | 'stretch';

export interface IGridProps {
    alignItems?: alignStyles | 'baseline';
    justifyItems?: alignStyles;
    colGap?: number;
    rowGap?: number;
    xs?: number;
    s?: number;
    md?: number;
    lg?: number;
    children?: JSX.Element;
}

export interface IColProps {
    alignSelf?: alignStyles;
    justifySelf?: alignStyles;
    startCol?: number;
    span?: number;
    children?: JSX.Element;
}
