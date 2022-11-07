import { type } from 'os';

export interface IInputBaseProps {
    autoComplete?: boolean;
    autoFocus?: boolean;
    backgroundColor?: string;
    defaultValue?: string | number;
    disabled?: boolean;
    iconPosition?: 'front' | 'end';
    id: string;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    name?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    prefixIcon?: TPrefixIcon;
    regExp?: string;
    required?: boolean;
    state?: TInputStates;
    testid?: string;
    type?: 'text' | 'number' | 'email' | 'tel' | 'password';
    validation?: TValidateInput;
}

export interface ILabelBaseProps {
    backgroundColor?: string;
    id: string;
    position?: 'relative' | 'absolute';
    required?: boolean;
    state?: TInputStates;
    testid?: string;
    text?: string;
}

export type TInputStates = 'initial' | 'error' | 'confirmed' | 'disabled';

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

type TIconPosition = 'front' | 'end';
type TPrefixIcon = React.ReactElement;

export interface IVisibilityToggleProps {
    isInputHidden: boolean;
    onClick: () => void;
}

export interface IPrefixIconProps {
    icon: TPrefixIcon;
    isPasswordWithEndIcon: boolean;
    position: TIconPosition;
}
