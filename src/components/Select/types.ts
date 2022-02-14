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
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange: (option: OptionProps) => void;

    /**
     * the select component can use state to react to user interaction
     */
    state?: 'error' | 'confirmed' | 'disabled';

    /**
     * css style prop
     */
    style?: React.CSSProperties;

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
