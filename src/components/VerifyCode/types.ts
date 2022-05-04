export interface VerifyCodeProps {
    /**
     * On load first code input will be active.
     */
    autoFocus?: boolean;

    /**
     * Number of code inputs
     */
    length?: number;

    /**
     * onCompleted callback
     */
    onCompleted?: (data: string) => void;

    /**
     * if input is not filled then this will be shown. (First character of this string will be taken)
     */
    placeholder?: string;

    /**
     * Label for the component
     */
    label?: string;
}
