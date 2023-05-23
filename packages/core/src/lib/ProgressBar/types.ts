export interface IProgressBarProps {
    id?: string;
    title?: string | JSX.Element;
    titleColor?: string;
    progressBarBgColor?: string;
    progressBarLineColor?: string;
    value: number;
    total: number;
    showInfo?: boolean;
    name?: string;
    nameColor?: string;
}
