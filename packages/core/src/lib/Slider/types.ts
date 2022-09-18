import React from "react";

export interface ISliderProps {
    /**
     * pass id for html input component
     */
    rangeId: string;
    /**
     * pass any Label for Slider
     */
    rangeLabel?: string;
    /**
     * pass maximum Range for Slider
     */
    rangeMax: number;
    /**
     * pass minimum Range for Slider
     */
    rangeMin: number;
    /**
     * Pass for setting current value 
     */
    rangeValue?: number;
    /**
     * Pass for setting Changed event 
     */
    onChanges?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * A label to show the top
     */
    currentLabel?: string | JSX.Element;
    /**
     * A boolean for working or not
     */
    disabled?: boolean;
    /**
     * Set the discrete step size of the element
     */
    Step?: number;
}
