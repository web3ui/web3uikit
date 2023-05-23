import { IProgressBarProps } from './types';
import styled, { css } from 'styled-components';
import { color } from '@web3uikit/styles';

type TStyleProps = Pick<
    IProgressBarProps,
    'progressBarBgColor' | 'progressBarLineColor' | 'nameColor' | 'titleColor'
>;

const openSans = css`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', Tahoma, Verdana, sans-serif;
`;

const DivStyled = styled.div<TStyleProps>`
    display: block;
    width: 100%;
    .title {
        //align-items: center;
        //display: flex;
        //gap: 8px;
        //justify-content: left;
        margin-bottom: 12px;
        margin-top: 0;
        color: ${({ titleColor }) => (titleColor ? titleColor : color.aero10)};
    }
    label {
        color: ${({ nameColor }) => (nameColor ? nameColor : color.aero10)};
        display: block;
        font-size: 13px;
        font-weight: 400;
        margin-top: 8px;
        text-align: left;
        span.name {
            text-transform: capitalize;
        }
    }
`;

const DivStyledProgress = styled.div<TStyleProps>`
    background-color: ${({ progressBarBgColor }) =>
        progressBarBgColor ? progressBarBgColor : '#1A3656'};
    border-radius: 300px;
    height: 12px;
    overflow: hidden;
    position: relative;
    width: 100%;
    progress[value] {
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-name: sideIn;
        animation-timing-function: ease-out;
        appearance: none;
        background-color: ${({ progressBarBgColor }) =>
            progressBarBgColor ? progressBarBgColor : '#1A3656'};
        border: none;
        height: 12px;
        left: -100%;
        position: absolute;
        top: 0;
        width: 100%;
        &::-webkit-progress-bar {
            background: ${({ progressBarBgColor }) =>
                progressBarBgColor ? progressBarBgColor : '#1A3656'};
        }
        &::-moz-progress-bar {
            -moz-animation: PulsingGradient linear 1s infinite alternate-reverse;
            -o-animation: PulsingGradient linear 1s infinite alternate-reverse;
            -webkit-animation: PulsingGradient linear 1s infinite
                alternate-reverse;
            animation: PulsingGradient linear 1s infinite alternate-reverse;
            background-size: 350% 100%;
            background: ${({ progressBarLineColor }) =>
                progressBarLineColor
                    ? progressBarLineColor
                    : 'linear-gradient(88.37deg, #0F7FFF 1.38%, #57A5FF 98.62%)'};
            border-radius: 300px;
        }
        &::-webkit-progress-value {
            background: ${({ progressBarLineColor }) =>
                progressBarLineColor
                    ? progressBarLineColor
                    : 'linear-gradient(88.37deg, #0F7FFF 1.38%, #57A5FF 98.62%)'};
            border-radius: 300px;
        }
    }
    @keyframes sideIn {
        from {
            left: -100%;
        }
        to {
            left: 0%;
        }
    }
    @-webkit-keyframes PulsingGradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes PulsingGradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-o-keyframes PulsingGradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes PulsingGradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const ProgressBarStyles = {
    DivStyled,
    DivStyledProgress,
};
