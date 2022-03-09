import { TIconType } from '../Icon/collection';
import { OptionProps } from '../Select';

export interface IDropdown {
    /**
     * Option items for the picker
     */
    options: OptionProps[];
    /**
     * Picker Label
     */
    label?: string;
    /**
     * To remove the label if an option is picked
     */
    isLabelFixed?: boolean;
    /**
     * To show the current selected value in the main select
     */
    showSelected?: boolean;
    /**
     * To hide the currently selected option from the option menu
     */
    hideSelected?: boolean;
    /**
     * To control the value of the selected item of the select
     */
    selectedState?: number;
    /**
     * Name of the prefix Icon
     */
    icon?: TIconType;
    /**
     * Name of the prefix Icon
     */
    isDisabled?: boolean;
    /**
     * Width of the picker
     */
    width?: string;
    /**
     * Callback for on change
     */
    onChange(selectedOption: OptionProps): void;

    /**
     * if true will render border outline
     */
    hasOutline?: boolean;

    /**
     * index of selected option by default
     */
    defaultOptionIndex?: number;

    /**
     * if true will render label
     */
    isLabelVisible?: boolean;
}
