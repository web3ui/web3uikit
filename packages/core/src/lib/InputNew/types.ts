import React from 'react';
import { IInputBaseProps, TValidateInput } from './atoms/types';

export type TInputStates = 'initial' | 'error' | 'confirmed' | 'disabled';

export type TResponse = {
    /**
     * a message that will be returned when validation is triggered
     */
    message: string;

    /**
     * the status of the validation check to set state
     */
    result: TInputStates;
};

export type TSlots = {
    /**
     * pass elements to be rendered after (right of) this element
     */
    slotAfter?: JSX.Element[];

    /**
     * pass elements to be rendered before (left of) this element
     */
    slotBefore?: JSX.Element[];
};

export interface IInputProps extends IInputBaseProps {
    /**
     * Will replace input div with a JSX element
     */
    customInput?: JSX.Element;

    /**
     * Description of input, Error state message overrides
     */
    description?: string;

    /**
     * error message
     */
    errorMessage?: string;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: string;

    /**
     * set the input label to be 'open' (label text above input)
     */
    openByDefault?: boolean;

    /**
     * if you use slots you'll need extra margin on your label
     */
    setLabelMargin?: { left?: string; right?: string };

    /**
     * size of input
     */
    size?: 'regular' | 'large';

    /**
     * slot content in before of after this element
     */
    slots?: TSlots;

    /**
     * the input can use state to react to user interaction
     */
    state?: TInputStates;

    /**
     * css style prop
     */
    style?: React.CSSProperties;

    /**
     * You can validate your inputs
     * required, characterMinLength, characterMaxLength, numberMin, numberMax, regExp , regExpInvalidMessage
     */
    validation?: TValidateInput;

    /**
     * standard HTML value prop
     */
    value?: string;

    /**
     * input width
     */
    width?: string;
}
