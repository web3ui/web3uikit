import { TCustomize } from '../../interfaces/customize';

export type ValidateCheckbox = {
    required?: boolean;
};

export interface IToggleProps {
    /**
     * Customize the element
     */
    customize?: TCustomize;

    /**
     * Set as not interactive
     */
    disabled?: boolean;

    /**
     * you should assign an ID for your own validation
     */
    id?: string;

    /**
     * A label to show on the left / off side of the toggle
     */
    labelOff: string;

    /**
     * A label to show on the right / on side of the toggle
     */
    labelOn: string;

    /**
     * a name attribute to group checkboxes
     */
    name?: string;

    /**
     * The normal onChange event
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * The normal onBlur event
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * The normal onBlur event
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * When toggled to on it returns labelOn value, when off it returns labelOff value
     */
    onToggle?: (value: string) => void;

    /**
     * You can validate your checkbox and switches
     */
    validation?: ValidateCheckbox;
}
