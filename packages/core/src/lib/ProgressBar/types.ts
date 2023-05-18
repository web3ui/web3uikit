export interface IProgressBarProps {
    id?: string;
    title?: string | JSX.Element;
    variant?: variantType;
    titleColor?: string;
    progressBarBgColor?: string;
    progressBarLineColor?: string;
    value: number;
    total: number;
    name?: string;
    nameColor?: string;
}

export type variantType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'subtitle1'
    | 'subtitle2'
    | 'body16'
    | 'body18'
    | 'caption14'
    | 'caption12'
    | 'caption10';
