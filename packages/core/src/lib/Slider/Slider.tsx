import React from 'react';
import { ISliderProps } from './types';
import styles from './Slider.styles';
import { color } from '@web3uikit/styles';

const {
    DivStyled,
    DivStyledTooltip,
    InputStyled,
    OutputStyled,
    DivStyledMarker,
} = styles;

const Slider: React.FC<ISliderProps> = ({
    bgColor = color.mint40,
    disabled = false,
    id,
    labelBgColor = color.mint40,
    leftLabel,
    markers = [],
    max = 100,
    min = 0,
    onChange,
    rangeControllerPrefix,
    rangeControllerSuffix,
    rightLabel,
    step = 1,
    value,
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
                        {rangeControllerPrefix}
                        {value}
                        {rangeControllerSuffix}
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
                $leftLabel={leftLabel}
                $rightLabel={rightLabel}
                {...props}
            />
            {markers.length > 0 && (
                <DivStyledMarker>
                    {markers.map((marker) => (
                        <p>{marker}</p>
                    ))}
                </DivStyledMarker>
            )}
        </DivStyled>
    );
};

export default Slider;
