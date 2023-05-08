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
    bgColorTrack = color.navy10,
    boxShadowOfThumb = `0 1px 3px ${color.white};`,
    disabled = false,
    handleTooltipLabel,
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
                        {handleTooltipLabel?.(value) ?? value}
                        {rangeControllerSuffix}
                    </OutputStyled>
                </DivStyledTooltip>
            )}
            <InputStyled
                $bgColor={bgColor}
                $bgColorTrack={bgColorTrack}
                $boxShadowOfThumb={boxShadowOfThumb}
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
                    {markers.map((marker, i) => (
                        <p key={`marker-${i}`}>{marker}</p>
                    ))}
                </DivStyledMarker>
            )}
        </DivStyled>
    );
};

export default Slider;
