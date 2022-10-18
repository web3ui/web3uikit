import React from 'react';

export interface ISliderProps {
    /**
     * pass id for html input component
     */
    id: string;

    /**
     * background color of slider
     */
    bgColor?: string;

    /**
     * label background color
     */
    labelBgColor?: string;

    /**
     * change label value using current value
     */
    handleLabel?: (val: number) => string | number;

    /**
     * pass maximum Range for Slider
     */
    max?: number;

    /**
     * min value of slider
     */
    min?: number;

    /**
     * value of the slider
     */
    value: number;

    /**
     * onChange callback event
     */
    onChange: (value: string) => void;

    /**
     * disables any interaction
     */
    disabled?: boolean;

    /**
     * set the discrete step size of the element
     */
    step?: number;
}
