export interface IProgressBarProps {
    id?: string;
    title?: JSX.Element;
    titleColor?: string;
    progressBarBgColor?: string;
    progressBarLineColor?: string;
    value: number;
    total: number;
    name?: string;
    nameColor?: string;
}
