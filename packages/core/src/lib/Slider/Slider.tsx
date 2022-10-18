import React from 'react';
import { ISliderProps } from './types';
import styles from './Slider.styles';
import { color } from '@web3uikit/styles';

const { DivStyled, DivStyledTooltip, InputStyled, SpanStyled } = styles;

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
                <DivStyledTooltip
                    value={Number(((value - min) * 100) / (max - min))}
                >
                    <SpanStyled bgColor={labelBgColor}>
                        {handleLabel?.(value) ?? value}
                    </SpanStyled>
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
