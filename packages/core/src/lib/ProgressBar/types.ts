export interface IProgressBarProps {
    id?: string;
    name?: string;
    nameColor?: string;
    progressBarBgColor?: string;
    progressBarLineColor?: string;
    showInfo?: boolean;
    title?: string | JSX.Element;
    titleColor?: string;
    total: number;
    value: number;
}
