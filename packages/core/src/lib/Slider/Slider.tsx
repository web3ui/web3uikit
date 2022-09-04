import React, { useState, useEffect } from 'react';
import { ISliderProps } from './types';
import styles from './Slider.styles';

const { DivStyled, LabelStyled, PStyled, InputStyled } = styles;

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
        <styles.DivStyled>
            <styles.LabelStyled htmlFor={rangeId}>
                {rangeLabel}
            </styles.LabelStyled>
            <styles.PStyled>
                {currentValue} of {rangeMax}
            </styles.PStyled>
            <styles.InputStyled
                id={rangeId}
                max={rangeMax}
                min={rangeMin}
                onChange={rangeChange}
                type="range"
                value={currentValue}
            />
        </styles.DivStyled>
    );
};

export default Slider;
