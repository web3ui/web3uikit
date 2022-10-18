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
    onChanges,
    currentLabel,
    disabled,
    Step
}) => {
    const [currentValue, setCurrentValue] = useState(rangeValue);

    const rangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRangeValue = Number(event.currentTarget.value);
        setCurrentValue(newRangeValue);
        onChanges && onChanges(event);
        console.log(currentValue);
    };

    return (
        <DivStyled data-testid="test-input">
            <LabelStyled data-testid="test-input-label" htmlFor={rangeId}>{rangeLabel}</LabelStyled>
            <PStyled>
                {currentValue} of {rangeMax}
            </PStyled>
            <InputStyled
                data-testid="test-input-input"
                id={rangeId}
                max={rangeMax}
                min={rangeMin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    rangeChange(e);
                }}
                type="range"
                value={currentValue}
                disabled={disabled}
                step={Step}
            />
        </DivStyled>
    );
};

export default Slider;
