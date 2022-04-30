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
     * onChange callback
     */
    onChange?: (data: string) => void;

    /**
     * onCompleted callback
     */
    onCompleted?: (data: string) => void;

    /**
     * if type is password then this character will be shown
     */
    passwordMask?: string;

    /**
     * if input is not filled then this will be shown
     */
    placeholder?: string;

    /**
     * Title for the component
     */
    title?: string;

    /**
     * Type of input
     */
    type?: 'text' | 'password';

    /**
     * value of the code input
     */
    value?: string;
}
