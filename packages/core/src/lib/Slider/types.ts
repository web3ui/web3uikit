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
     * Pass for setting CurrentValue 
     */
    rangeValue?: number;
}
