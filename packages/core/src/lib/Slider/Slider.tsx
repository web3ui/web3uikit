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
        <DivStyled>
            <LabelStyled htmlFor={rangeId}>
                {rangeLabel}
            </LabelStyled>
            <PStyled>
                {currentValue} of {rangeMax}
            </PStyled>
            <InputStyled
                id={rangeId}
                max={rangeMax}
                min={rangeMin}
                onChange={rangeChange}
                type="range"
                value={currentValue}
            />
        </DivStyled>
    );
};

export default Slider;
