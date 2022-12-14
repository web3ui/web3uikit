import React from 'react';
import { OptionProps } from '../Select';

export interface IDropdown {
    /**
     * Index of selected option by default
     */
    defaultOptionIndex?: number;
    /**
     * Dropdown arrow type
     */
    dropdownArrowType?: 'normal' | 'filled';
    /**
     * If true will render border outline
     */
    hasOutline?: boolean;
    /**
     * To hide the currently selected option from the option menu
     */
    hideSelected?: boolean;
    /**
     * Name of the prefix Icon
     */
    icon?: React.ReactElement;
    /**
     * Whether or not the elements in the dropdown are centered
     */
    isContentCentered?: boolean;
    /**
     * To control the value of the selected item of the select
     */
    isDisabled?: boolean;
    /**
     * To remove the label if an option is picked
     */
    isLabelFixed?: boolean;
    /**
     * If true will render label
     */
    isLabelVisible?: boolean;
    /**
     * Picker Label
     */
    label?: string;
    /**
     * Callback for on change
     */
    onChange(selectedOption: OptionProps): void;
    /**
     * Option items for the picker
     */
    options: OptionProps[];
    /**
     * To control the value of the selected item of the select
     */
    selectedState?: number;
    /**
     * To show the current selected value in the main select
     */
    showSelected?: boolean;
    /**
     * Width of the picker
     */
    width?: string;
}