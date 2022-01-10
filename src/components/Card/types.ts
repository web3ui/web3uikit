export interface CardProps {
    id?: string;
    children: Array<React.ReactNode>;
    description?: string;
    selected?: boolean;
    title?: string;
    tooltipText?: string;
}