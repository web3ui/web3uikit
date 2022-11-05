export interface IInputBaseProps {
    autoComplete?: boolean;
    autoFocus?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    id: string;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    name?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    regExp?: string;
    required?: boolean;
    testId: string;
    type?: 'text' | 'number' | 'email' | 'tel' | 'password';
    validation?: TValidateInput;
}

export interface ILabelBaseProps {
    id: string;
    text?: string;
    required?: boolean;
    testId: string;
}

export type TValidateInput = {
    /**
     * is the input required
     */
    required?: boolean;

    /**
     * min length of characters that can be entered
     */
    characterMinLength?: number;

    /**
     * max length of characters that can be entered
     */
    characterMaxLength?: number;

    /**
     * min number validation is only for number inputs
     */
    numberMin?: number;

    /**
     * max number validation is only for number inputs
     */
    numberMax?: number;

    /**
     * a RegExp for this input passed as a string
     * EG: [A-Za-z] to only allow letters
     */
    regExp?: string;

    /**
     * user feedback text if the RegExp fails to pass
     */
    regExpInvalidMessage?: string;
};
