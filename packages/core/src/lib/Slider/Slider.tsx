import React, { useState, useEffect } from 'react';
import { ISliderProps } from './types';
import styles from './Slider.styles';

const { sliderDiv, sliderInput, sliderLabel, sliderP } = styles;

const Slider: React.FC<ISliderProps> = ({
    rangeId,
    rangeLabel,
    rangeMax,
    rangeMin,
    rangeValue,
}) => {
    const [currentValue, setCurrentValue] = useState(rangeValue);

    const rangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRangeValue = Number(event.currentTarget.value);
        setCurrentValue(newRangeValue);
    };

    return (
        <styles.sliderDiv>
            <styles.sliderLabel htmlFor={rangeId}>
                {rangeLabel}
            </styles.sliderLabel>
            <styles.sliderP>
                {currentValue} of {rangeMax}
            </styles.sliderP>
            <styles.sliderInput
                id={rangeId}
                max={rangeMax}
                min={rangeMin}
                onChange={rangeChange}
                type="range"
                value={currentValue}
            />
        </styles.sliderDiv>
    );
};

export default Slider;
