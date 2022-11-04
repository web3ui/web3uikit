import { LabelProps, SelectedItemProps, ISelectProps } from '../types';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import styled, { css } from 'styled-components';

const DivStyledWrapper = styled.div<Pick<ISelectProps, 'state'>>`
    ${resetCSS};
    display: inline-block;
    position: relative;
`;

const LabelStyled = styled.label<LabelProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    height: 24px;
    left: ${({ hasPrefixIcon, hasSelectedIndex }) =>
        hasPrefixIcon && !hasSelectedIndex ? 50 : 12}px;
    line-height: 1;
    pointer-events: none;
    position: absolute;
    padding: 0 4px;
    transition: all 0.1s ease-out;
    ${({ hasSelectedIndex }) =>
        hasSelectedIndex ? 'top: -9px; font-size: 14px;' : 'top: 20px;'};
`;

const PrefixSpan = styled.span`
    margin-right: px;
`;

const SelectedItem = styled.div<SelectedItemProps>`
    ${resetCSS};
    ${fonts.text};
    background-color: ${color.white};
    border-radius: 16px;
    border: 2px solid;
    cursor: pointer;
    display: flex;
    height: 56px;
    overflow: hidden;
    padding: 14px 50px 14px 16px;
    transition: all 0.1s linear;

    border-color: ${({ state }) => {
        switch (state) {
            case 'error':
                return color.red40;
            case 'confirmed':
                return color.mint40;
            case 'disabled':
                return color.gray30;
            default:
                return color.gray30;
        }
    }};

    ${({ hasPrefixIcon }) => hasPrefixIcon && 'gap: 13px'};

    ${({ state }) =>
        state === 'disabled' &&
        `& * {fill: ${color.gray30};} color: ${color.gray30} !important;`};

    &:hover {
        border-color: ${(p) => p.state !== 'disabled' && color.navy30};
    }

    &:focus {
        border-color: ${color.navy40};

        & + label {
            color: ${color.navy40};
        }
    }

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red40};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.mint40};`}

        & + label {
            ${(p) => !p?.state && `color: ${color.navy40};`}
        }
    }

    &:focus {
        ${(p) => p.state === 'error' && `border-color: ${color.red40};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.mint40};`}
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red40};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.mint40};`}
        }
    }

    & + label {
        color: ${({ state }) => {
            switch (state) {
                case 'error':
                    return color.red40;
                case 'confirmed':
                    return color.mint40;
                case 'disabled':
                    return color.gray30;
                default:
                    return color.blueGray50;
            }
        }};
    }
`;

const iconStyle = css`
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 24px;
    max-width: 24px;
    width: 100%;
`;

const PrefixIcon = styled.div`
    ${resetCSS}
    ${iconStyle}
    margin-right: 13px;
    & :first-child {
        width: 100%;
        height: 100%;
    }
`;

const DropDownIcon = styled.div`
    ${iconStyle};
    position: absolute;
    right: 16px;
`;

const ErrorLabel = styled.label`
    ${resetCSS}
    ${fonts.text}
    bottom: -23px;
    color: ${color.red40};
    font-size: 12px;
    height: 24px;
    left: 16px;
    pointer-events: none;
    position: absolute;
`;

const Options = styled.div`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.aero10};
    border-radius: 16px;
    border: 2px solid ${color.navy30};
    left: 0;
    margin-top: 10px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 10;
    max-height: 265px;
    overflow: auto;

    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${color.gray40};
        border-radius: 30px;
        border: 8px solid transparent;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`;

const Option = styled.div`
    ${resetCSS};
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 14px 50px 14px 16px;
    &:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }
    &:first-child {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }
    &:last-child {
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }
`;

const NoDataTextStyled = styled.p`
    text-align: center;
    margin-top: -12px;
    margin-bottom: 5px;
`;

const DivStyledDescription = styled.div`
    ${resetCSS};
    ${fonts.text};
    bottom: -23px;
    color: ${color.blueGray50};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`;

export default {
    DivStyledDescription,
    DivStyledWrapper,
    DropDownIcon,
    ErrorLabel,
    LabelStyled,
    NoDataTextStyled,
    Option,
    Options,
    PrefixIcon,
    PrefixSpan,
    SelectedItem,
};
