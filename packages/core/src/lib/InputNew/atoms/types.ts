export type TInputStates = 'initial' | 'error' | 'confirmed' | 'disabled';

export type TValidateInput = {
    /**
     * validation, the maximum amount of characters allowed in an input
     */
    maxLength?: number;

    /**
     * validation, the minimum amount of characters allowed in an input
     */
    minLength?: number;

    /**
     * validation, the maximum number value allowed in a number type input
     */
    max?: number;

    /**
     * validation, the minimum number value allowed in a number type input
     */
    min?: number;

    /**
     * validation, give the input regex the user must match
     */
    pattern?: string;

    /**
     * user feedback text if the RegExp fails to pass
     */
    regExpInvalidMessage?: string;

    /**
     * validation, set the input as required
     */
    required?: boolean;
};

export interface IInputBaseProps extends TValidateInput {
    /**
     * allows autocomplete to work with browser saved values
     */
    autoComplete?: boolean;

    /**
     * puts the curser inside an input ready to type (should be used on first the input of a page only)
     */
    autoFocus?: boolean;

    /**
     * pass a value to be rendered in the input
     */
    defaultValue?: string | number;

    /**
     * disable the input so the user cannot interact with it
     */
    disabled?: boolean;

    /**
     * input needs an ID so it can relate to its label
     */
    id?: string;

    /**
     * name text for input accessibility
     */
    name?: string;

    /**
     * standard onBlur event
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * standard onChange event
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * standard onFocus event
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * placeholder text for a blank input
     */
    placeholder?: string;

    /**
     * test ID should be set for the input
     */
    testid: string;

    /**
     * the type of the HTML input: text | number | email | tel | password;
     */
    type?: 'text' | 'number' | 'email' | 'tel' | 'password';
}

export interface ILabelBaseProps {
    /**
     * label needs match ID to relate to its input
     */
    id: string;

    /**
     * this will show a star * to indicate the input below it is required
     */
    required?: boolean;

    /**
     * test id can be set to test the component in your app
     */
    testid?: string;

    /**
     * the text rendered in the label
     */
    text?: string;
}

export interface IVisibilityToggleProps {
    /**
     * shows if the eye icon should be open or shut
     */
    isInputHidden: boolean;

    /**
     * standard onClick event that returns nothing
     */
    onClick: () => void;
}
