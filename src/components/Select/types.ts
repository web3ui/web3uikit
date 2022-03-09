import React from 'react';

export interface SelectProps {
    /**
     * it is best to set a unique ID for each select component to verify change events
     */
    id?: string;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: string;

    /**
     * Id of the Option that you want the Select to have. Use to control the value of the option
     */
    value?: string;

    /**
     * onChange that returns OptionProps typed data if not using traditional HTML5 mode
     */
    onChange?: (option: OptionProps) => void;

    /**
     * traditional onChange that returns the entire event, as normal you can access event.target
     */
    onChangeTraditional?: (event: React.ChangeEvent<HTMLSelectElement>) => void;

    /**
     * the select component can use state to react to user interaction
     */
    state?: 'error' | 'confirmed' | 'disabled';

    /**
     * css style prop
     */
    style?: React.CSSProperties;

    /**
     * String that you want to display before the selected option
     */
    prefixText?: string;

    /**
     * select component width
     */

    width?: string;

    /**
     * error message
     */
    errorMessage?: string;

    /**
     * disables any interaction
     */
    disabled?: boolean;

    /**
     * array of options for select component
     */
    options?: OptionProps[];

    /**
     * index of selected option by default
     */
    defaultOptionIndex?: number | undefined;

    /**
     * To replace no data text with a different text, but still keep image
     */
    customNoDataText?: string;

    /**
     * you just want to kick it old school with a fully device & browser safe HTML5 select, we got you
     */
    traditionalHTML5?: boolean;

    /**
     * You can validate your inputs
     */
    validation?: { required: boolean };
}

export interface OptionProps {
    /**
     * prefix for option text. cane be icon, picture, text etc.
     */

    prefix?: React.ReactNode;
    /**
     * label
     */

    label: string | number;

    /**
     * id of option. should be unique
     */
    id: string | number;
}

export interface LabelProps {
    /**
     * true if the default index is defined
     */
    hasSelectedIndex: boolean;
}

export interface SelectedItemProps {
    /**
     * duplicate of state
     */
    state?: 'error' | 'confirmed' | 'disabled';
}
