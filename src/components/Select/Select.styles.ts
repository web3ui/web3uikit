import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled from 'styled-components';
import { SelectProps, LabelProps, SelectedItemProps } from './types';

export const SelectWrapper = styled.div<Pick<SelectProps, 'state'>>`
    ${resetCSS}
    position: relative;
`;

export const LabelStyled = styled.label<LabelProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    font-size: 14px;
    /* height: 18px; */
    height: 24px;
    /* left: ${({ hasPrefix }) => (hasPrefix ? '48px' : '16px')}; */
    left: 12px;
    line-height: 1;
    /* padding: 0 4px; */
    padding: 2px 4px;
    pointer-events: none;
    position: absolute;
    top: -12px;
    /* top: 15px; */
    transition: all 0.1s ease-out;
`;

export const SelectStyled = styled.div`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
    width: 100%;
`;

export const SelectedItem = styled.div<SelectedItemProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    display: flex;
    border-radius: 16px;
    height: 56px;
    padding: 14px 16px;
    transition: all 0.2s linear;

    border: 2px solid;
    border-color: ${({ state }) => {
        switch (state) {
            case 'error':
                return color.red;
            case 'confirmed':
                return color.green;
            case 'disabled':
                return color.greyDisabled;
            default:
                return color.blueSky;
        }
    }};

    & > * > * > * {
        ${(p) => p.state === 'disabled' && ` fill: ${color.greyDisabled};`};
    }

    &:hover {
        border-color: ${(p) => p.state !== 'disabled' && color.blue};
    }

    &:hover > .input_prefix > svg {
        fill: ${(p) => !p?.state && color.blue};
    }

    &:focus {
        border-color: ${color.blue};

        + label {
            color: ${color.blue};
        }
    }

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

        label {
            ${(p) => !p?.state && `color: ${color.blue};`}
        }
    }

    &:focus {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
        }
    }

    input {
        & + label {
            color: ${({ state }) => {
                switch (state) {
                    case 'error':
                        return color.red;
                    case 'confirmed':
                        return color.green;
                    case 'disabled':
                        return color.greyDisabled;
                    default:
                        return color.grey;
                }
            }};
        }
    }
`;

const inputIconStyle = `
    ${resetCSS}
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 24px;
    width: 100%;
    & :first-child {
        fill: ${color.grey};
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }
`;

export const ErrorLabel = styled.label`
    ${resetCSS}
    ${fonts.text}
    bottom: -23px;
    color: ${color.red};
    font-size: 12px;
    height: 24px;
    left: 16px;
    pointer-events: none;
    position: absolute;
`;

export const Options = styled.div`
    background-color: ${color.blueLight};
    border-radius: 16px;
    border: 2px solid ${color.blueSky};
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: space-around;
    margin-top: 10px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 10;
    left: 0;
`;

export const Option = styled.div`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 12px 0;
    padding-left: 20px;
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

const SelectStyles = {
    ErrorLabel,
    LabelStyled,
    Option,
    Options,
    SelectStyled,
    SelectWrapper,
    SelectedItem,
};

export default SelectStyles;
