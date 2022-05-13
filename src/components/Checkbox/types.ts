import React from 'react';

export type ValidateCheckbox = {
    required?: boolean;
};

export interface CheckboxProps {
    /**
     * The checkbox can be ticked by default
     */
    checked?: boolean;

    /**
     * Set as not interactive
     */
    disabled?: boolean;

    /**
     * you should assign an ID for your own validation
     */
    id?: string;

    /**
     * ref object
     */
    ref?: React.RefObject<HTMLInputElement>;

    /**
     * A label to show the boxes meaning
     */
    label: string | JSX.Element;

    /**
     * A label to show the boxes meaning
     */
    labelWhenChecked?: string;

    /**
     * How the user will see the checkbox element
     */
    layout?: 'box' | 'switch';

    /**
     * a name attribute to group checkboxes
     */
    name: string;

    /**
     * The normal onChange event
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * The normal onBlur event
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * You can validate your checkbox and switches
     */
    validation?: ValidateCheckbox;
}
