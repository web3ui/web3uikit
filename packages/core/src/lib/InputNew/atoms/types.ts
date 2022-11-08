export type TInputStates = 'initial' | 'error' | 'confirmed' | 'disabled';
export type TIconPosition = 'front' | 'end';
export type TPrefixIcon = React.ReactElement;

export interface IInputBaseProps {
    /**
     * allows autocomplete to work with browser saved values
     */
    autoComplete?: boolean;

    /**
     * puts the curser inside an input ready to type (should be used on first the input of a page only)
     */
    autoFocus?: boolean;

    /**
     * set a background color for the input
     */
    backgroundColor?: string;

    /**
     * pass a value to be rendered in the input
     */
    defaultValue?: string | number;

    /**
     * disable the input so the user cannot interact with it
     */
    disabled?: boolean;

    /**
     * if prefixIcon is used you can set it to the front or end of the input
     */
    iconPosition?: 'front' | 'end';

    /**
     * input needs an ID so it can relate to its label
     */
    id: string;

    /**
     * validation, the maximum number value allowed in a number type input
     */
    max?: number;

    /**
     * validation, the maximum amount of characters allowed in an input
     */
    maxLength?: number;

    /**
     * validation, the minimum number value allowed in a number type input
     */
    min?: number;

    /**
     * validation, the minimum amount of characters allowed in an input
     */
    minLength?: number;

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
     * placeholder text for a blank input
     */
    placeholder?: string;

    /**
     * icon, pass an icon component from @web3uikit/icons
     */
    prefixIcon?: TPrefixIcon;

    /**
     * validation, give the input regex the user must match
     */
    regExp?: string;

    /**
     * validation, set the input as required
     */
    required?: boolean;

    /**
     * state sets color of the UI: initial | error | confirmed | disabled
     */
    state?: TInputStates;

    /**
     * test ID should be set for the input
     */
    testid?: string;

    /**
     * the type of the HTML input: text | number | email | tel | password;
     */
    type?: 'text' | 'number' | 'email' | 'tel' | 'password';

    /**
     * set a custom width for your input
     */
    width?: string;
}

export interface ILabelBaseProps {
    /**
     * set a background color for the label
     */
    backgroundColor?: string;

    /**
     * label needs match ID to relate to its input
     */
    id: string;

    /**
     * use position relative if you want to use label as a stand alone component
     */
    position?: 'relative' | 'absolute';

    /**
     * this will show a star * to indicate the input below it is required
     */
    required?: boolean;

    /**
     * set the color of the input text: initial | error | confirmed | disabled;
     */
    state?: TInputStates;

    /**
     * test id can be set to test the component in your app
     */
    testid?: string;

    /**
     * the text rendered in the label
     */
    text?: string;
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

export interface IPrefixIconProps {
    /**
     * pass an icon component from @web3uikit/icons
     */
    icon: TPrefixIcon;

    /**
     * more CSS is needed if you want input type of password and an icon set to show at the end
     */
    isPasswordWithEndIcon: boolean;

    /**
     * position of the icon: front | end
     */
    position: TIconPosition;
}
