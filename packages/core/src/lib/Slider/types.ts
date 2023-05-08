import { ReactNode } from 'react';

export interface ISliderProps {
    /**
     * background color of slider
     */
    bgColor?: string;

    /**
     * background color of slider background track
     */
    bgColorTrack?: string;

    /**
     * box-shadow to be applied to the thumb
     */
    boxShadowOfThumb?: string;

    /**
     * disables any interaction
     */
    disabled?: boolean;

    /**
     * change label value using current value
     */
    handleTooltipLabel?: (val: number) => string | number;

    /**
     * pass id for html input component
     */
    id: string;

    /**
     * label background color
     */
    labelBgColor?: string;

    /**
     * provide value for left label
     */
    leftLabel?: string;

    /**
     * markers - make sure to pass correct amount based on step size, min and max
     */
    markers?: ReactNode[];

    /**
     * pass maximum Range for Slider
     */
    max?: number;

    /**
     * min value of slider
     */
    min?: number;

    /**
     * onChange callback event
     */
    onChange: (value: string) => void;

    /**
     * a prefix for the form controller EG: $ or €
     */
    rangeControllerPrefix?: string;

    /**
     * a prefix for the form controller EG: units
     */
    rangeControllerSuffix?: string;

    /**
     * provide value for right label
     */
    rightLabel?: string;

    /**
     * set the discrete step size of the element
     */
    step?: number;

    /**
     * value of the slider
     */
    value: number;
}
