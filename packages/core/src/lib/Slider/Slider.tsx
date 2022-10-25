import React from 'react';
import { ISliderProps } from './types';
import styles from './Slider.styles';
import { color } from '@web3uikit/styles';

const { DivStyled, DivStyledTooltip, InputStyled, OutputStyled } = styles;

const Slider: React.FC<ISliderProps> = ({
    id,
    max = 100,
    min = 0,
    value,
    onChange,
    disabled = false,
    bgColor = color.mint40,
    labelBgColor = color.mint40,
    handleLabel,
    step = 1,
    ...props
}) => {
    return (
        <DivStyled data-testid="test-slider">
            {!disabled && (
                <DivStyledTooltip value={value} min={min} max={max}>
                    <OutputStyled
                        id="output"
                        htmlFor={id}
                        bgColor={labelBgColor}
                    >
                        {handleLabel?.(value) ?? value}
                    </OutputStyled>
                </DivStyledTooltip>
            )}
            <InputStyled
                $bgColor={bgColor}
                data-testid="test-slider-input"
                id={id}
                max={max}
                min={min}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange?.(e.target.value);
                }}
                type="range"
                value={value}
                disabled={disabled}
                step={step}
                {...props}
            />
        </DivStyled>
    );
};

export default Slider;
