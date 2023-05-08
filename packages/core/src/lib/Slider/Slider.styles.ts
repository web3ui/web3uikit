import styled, { css } from 'styled-components';
import { color, fonts, resetCSS, colorPercentage } from '@web3uikit/styles';

const tooltipHeight = '48px';

const calculateNewPositionStyleValue = (props: any) => {
    const newValue = Number(
        ((props.value - props.min) * 100) / (props.max - props.min),
    );
    const newPosition = 16 - newValue * 0.32;
    return `calc(${newValue}% + (${newPosition}px))`;
};

const DivStyled = styled.div`
    ${resetCSS};
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin-top: ${tooltipHeight};
    margin-bottom: ${tooltipHeight};
    isolation: isolate;
`;

const DivStyledTooltip = styled.div<{
    value: number;
    min: number;
    max: number;
}>`
    ${resetCSS};
    position: absolute;
    top: -${tooltipHeight};
    left: ${(props) => calculateNewPositionStyleValue(props)};
`;

const OutputStyled = styled.output<{ bgColor: string }>`
    ${resetCSS};
    ${fonts.text}
    position: absolute;
    text-align: center;
    display: block;
    max-height: ${tooltipHeight};
    line-height: 24px;
    padding: 5px 10px;
    color: ${color.white};
    display: flex;
    border-radius: 4px;
    background: ${(props) => props.bgColor};
    font-size: 16px;
    left: 50%;
    transform: translate(-50%, 0);
    white-space: nowrap;
    &::before {
        position: absolute;
        content: '';
        left: 50%;
        bottom: -8px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-top-color: ${(props) => props.bgColor};
    }
`;

const trackStyles = (props: any) => css`
    ${resetCSS};
    animation: 0.2s;
    background: linear-gradient(
        90deg,
        ${props.$bgColor} ${calculateNewPositionStyleValue(props)},
        ${props.$bgColorTrack} ${calculateNewPositionStyleValue(props)}
    );
    border-radius: 10px;
    cursor: pointer;
    height: 18px;
    width: 100%;
`;

const thumbStyles = (bgColor: string, boxShadowOfThumb: string) => css`
    ${resetCSS};
    -webkit-appearance: none;
    background: ${color.white};
    border-radius: 50%;
    border: 0.25rem solid ${colorPercentage(bgColor, 80)};
    box-shadow: ${boxShadowOfThumb || `0 1px 3px ${color.white}`};
    cursor: pointer;
    height: 29px;
    transform: translateY(calc(-50% + 8px));
    width: 29px;
`;

const InputStyled = styled.input<{
    $bgColor: string;
    $bgColorTrack: string;
    $boxShadowOfThumb: string;
    $leftLabel?: string;
    $rightLabel?: string;
}>`
    ${resetCSS};
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    &:focus {
        outline: none;
        &::-ms-fill-lower,
        &::-ms-fill-lower {
            background: ${(props) => props.$bgColor};
        }
    }
    // For webkit
    &::-webkit-slider-runnable-track {
        ${(props) => trackStyles(props)}
    }
    &::-webkit-slider-thumb {
        ${(props) => thumbStyles(props.$bgColor, props.$boxShadowOfThumb)}
    }
    //For mozilla
    &::-moz-range-track {
        ${(props) => trackStyles(props)}
    }
    &::-moz-range-thumb {
        ${(props) => thumbStyles(props.$bgColor, props.$boxShadowOfThumb)}
    }
    //For internet explorer
    &::-ms-track {
        width: 100%;
        height: 12px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }
    &::-ms-fill-lower,
    &::-ms-fill-upper {
        ${(props) => trackStyles(props)}
    }
    &::-ms-thumb {
        ${(props) => thumbStyles(props.$bgColor, props.$boxShadowOfThumb)}
    }
    &:disabled {
        opacity: 0.6;
    }

    // max and min Label styles
    &::before,
    &::after {
        border-radius: 4px;
        color: ${color.blueGray50};
        font-size: 16px;
        font-weight: 550;
        line-height: 24px;
        padding: 3px 5px;
        position: absolute;
        top: -35px;
        z-index: -1;
    }
    ${(props) =>
        props.$leftLabel &&
        css`
            &::before {
                left: 0;
                content: '${props.$leftLabel}';
            }
        `};
    ${(props) =>
        props.$rightLabel &&
        css`
            &::after {
                right: 0;
                content: '${props.$rightLabel}';
            }
        `};
`;

const DivStyledMarker = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    p {
        position: relative;
        display: flex;
        justify-content: center;
        text-align: center;
        max-width: 1px;
        height: 10px;
        line-height: 40px;
        margin: 0 0 20px 0;
    }
`;

export default {
    DivStyled,
    DivStyledTooltip,
    InputStyled,
    OutputStyled,
    DivStyledMarker,
};
