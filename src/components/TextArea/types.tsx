import { ValidateInput } from '../Input/types';

export interface TextAreaProps {
    /**
     * toggle browsers ability to auto complete the input
     */
    autoComplete?: boolean;

    /**
     * it is best to set a unique ID for each input to verify change events
     */
    id?: string;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: string;

    /**
     * please give a descriptive name to the input, it help with accessibility
     */
    name?: string;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

    /**
     * a short piece of text to fill the input before the user interacts
     */
    placeholder?: string;

    /**
     * the input can use state to react to user interaction
     */
    state?: 'error' | 'confirmed' | 'disabled';

    /**
     * types of input available
     */
    type?: 'text' | 'number' | 'email' | 'tel' | 'password';

    /**
     * you can pass a default value so the input is pre-filled
     */
    value?: string;

    /**
     * you can pass a CSS value for the components width
     */
    width?: string;

    /**
     * You can validate your textarea
     * characterMaxLength, characterMinLength, numberMax, numberMin, regExp, regExpInvalidMessage & required
     */
    validation?: ValidateInput;
}
