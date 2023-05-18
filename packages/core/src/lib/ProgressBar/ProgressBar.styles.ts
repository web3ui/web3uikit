import { IProgressBarProps, variantType } from './types';
import styled, { css } from 'styled-components';
import { color, fontBreakpoint } from '@web3uikit/styles';

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
        span {
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

const text = css`
    ${openSans};
    color: ${color.blueGray50};
    fill: ${color.blueGray50};
    font-style: normal;
    letter-spacing: 0;
`;

const heading = css`
    ${openSans};
    color: ${color.blue70};
    fill: ${color.blue70};
    font-style: normal;
    letter-spacing: 0;
`;

const h1 = css`
    ${heading};
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.75px;
    ${fontBreakpoint.h1};
`;

const h2 = css`
    ${heading};
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
    ${fontBreakpoint.h2}
`;

const h3 = css`
    ${heading};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    ${fontBreakpoint.h3}
`;

const h4 = css`
    ${heading};
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    ${fontBreakpoint.h4}
`;

const subtitle1 = css`
    ${heading};
    font-weight: 600;
    color: ${color.blue70};
    fill: ${color.blue70};
    font-size: 18px;
    line-height: 24px;
`;

const subtitle2 = css`
    ${heading};
    font-weight: 600;
    color: ${color.blue70};
    fill: ${color.blue70};
    font-size: 16px;
    line-height: 24px;
`;

const caption14 = css`
    ${text};
    font-size: 14px;
    line-height: 24px;
`;

const caption12 = css`
    ${text};
    font-size: 12px;
    line-height: 1.5;
`;

const caption10 = css`
    ${text};
    font-size: 10px;
    line-height: 1.5;
`;

const body18 = css`
    ${text};
    font-size: 18px;
    line-height: 24px;
`;

const body16 = css`
    ${text};
    font-size: 16px;
    line-height: 24px;
`;

const italicFont = css`
    font-style: italic;
`;

const ibm = css`
    font-family: 'IBM Plex Mono', 'Lucida Console', monospace;
`;

export const getFontStyle = (variant: variantType) => {
    switch (variant) {
        case 'h1':
            return h1;
        case 'h2':
            return h2;
        case 'h3':
            return h3;
        case 'h4':
            return h4;
        case 'subtitle1':
            return subtitle1;
        case 'subtitle2':
            return subtitle2;
        case 'body18':
            return body18;
        case 'body16':
            return body16;
        case 'caption14':
            return caption14;
        case 'caption12':
            return caption12;
        case 'caption10':
            return caption10;
        default:
            return body16;
    }
};

export const ProgressBarStyles = {
    DivStyled,
    DivStyledProgress,
};
