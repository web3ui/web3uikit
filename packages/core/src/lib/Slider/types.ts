import React, { ReactNode } from 'react';

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
    handleTooltipLabel?: (val: number) => string | number;

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

    /**
     * provide value for left label
     */
    leftLabel?: string;

    /**
     * provide value for right label
     */
    rightLabel?: string;

    /**
     * markers - make sure to pass correct amount based on step size, min and max
     */
    markers?: ReactNode[];
}
