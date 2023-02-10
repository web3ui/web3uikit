import React, { RefObject } from 'react';
import { TCustomize } from '../../interfaces/customize';
export interface ISelectProps {
    /**
     * Maximum number of items that can be selected when isMulti is set to true
     */
    max?: number;

    /**
     * For Multiple Selection of items
     */
    isMulti?: boolean;

    /**
     * Name of the component
     */
    name: string;

    /**
     * For showing a search box
     */
    isSearch?: boolean;

    /**
     * Placeholder value
     */
    placeholder?: string;

    /**
     * it is best to set a unique ID for each select component to verify change events
     */
    id?: string;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: string;

    /**
     * Id of the Option that you want the Select to have. Use to control the value of the option. (Should be a react state variable)
     */
    value?: string[] | string;

    /**
     * ref object for fancy select
     */
    ref?: RefObject<HTMLDivElement>;

    /**
     * ref object for traditional select
     */
    refTraditional?: RefObject<HTMLSelectElement>;

    /**
     * onChange that returns OptionProps typed data if not using traditional HTML5 mode. Remember to update value state in this function
     */
    onChange?: (option: string[] | OptionProps) => void;

    /**
     * standard onBlur that returns the entire event, as normal you can access event.target
     */
    onBlurTraditional?: (event: React.FocusEvent<HTMLSelectElement>) => void;

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
     * Icon name the should be displayed before the options
     */

    prefixIcon?: React.ReactElement; //Icon

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
    defaultOptionIndex?: number;

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

    /**
     * Optional description under select component
     */
    description?: string;

    /**
     * Beta version of select component - *Breaking changes*
     */
    tryBeta?: boolean;

    /**
     * Min Height of the select box
     */
    height?: string;

    /**
     * Max Height of the menu list.
     */
    menuHeight?: string;

    /**
     * style customizations
     */
    customize?: TCustomize;

    /**
     * style customizations for menu
     */
    menuCustomize?: Omit<TCustomize, 'onHover'> & {
        bgColorOnHover?: string;
        scrollbarColor?: string;
        height?: string;
        width?: string;
    };

    /**
     * add custom select component, clicking on which will open the menu,
     * Note: This hides the default select arrow and label
     */
    customSelect?: React.ReactNode;
}

export interface ISelectExtendedProps extends ISelectProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    elementId: (element: string) => string | undefined;
    addItem: (option: string | undefined) => void;
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

    /**
     * an option can be disabled / unselectable
     */
    disabled?: boolean;
}

export interface LabelProps {
    /**
     * true if there is a prefix icon before the label
     */
    hasPrefixIcon: boolean;

    /**
     * true if the default index is defined
     */
    hasSelectedIndex: boolean;
}

export interface SelectedItemProps {
    /**
     * true if there is a prefix icon before the label
     */
    hasPrefixIcon: boolean;

    /**
     * duplicate of state
     */
    state?: 'error' | 'confirmed' | 'disabled';
}

export enum KEY {
    DOWN = 'ArrowDown',
    END = 'End',
    ENTER = 'Enter',
    ESC = 'Escape',
    HOME = 'Home',
    TAB = 'Tab',
    UP = 'ArrowUp',
}
