export interface IWidgetProps {
    /**
     * title
     */
    title: string;

    /**
     * information
     */
    info: string;

    /**
     * children
     */
    children?: JSX.Element | JSX.Element[];

    /**
     * set if info is loading
     */
    isLoading?: boolean;
}
