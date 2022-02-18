import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled, { css } from 'styled-components';
import { SelectProps, LabelProps, SelectedItemProps } from './types';

const DivStyledWrapper = styled.div<Pick<SelectProps, 'width'>>`
    ${resetCSS};
    display: inline-block;
    position: relative;
    width: ${(p) => p.width || 'max-content'};
    min-width: 100px;
`;

const LabelStyled = styled.label<LabelProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    height: 22px;
    left: 12px;
    line-height: 1;
    pointer-events: none;
    position: absolute;
    padding: 0 4px;
    transition: all 0.1s ease-out;
    ${({ hasSelectedIndex }) =>
        hasSelectedIndex ? 'top: -12px; font-size: 14px;' : 'top: 20px;'};
`;

const PrefixSpan = styled.span`
    margin-right: px;
`;

const SelectStyled = styled.div`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
`;

const SelectedItem = styled.div<SelectedItemProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    border-radius: 16px;
    border: 2px solid;
    cursor: pointer;
    display: flex;
    height: 56px;
    overflow: hidden;
    transition: all 0.1s linear;

    border-color: ${({ state }) => {
        switch (state) {
            case 'error':
                return color.red;
            case 'confirmed':
                return color.green;
            case 'disabled':
                return color.greyDisabled;
            default:
                return color.greyLight;
        }
    }};

    ${({ state }) =>
        state === 'disabled' &&
        `& * {fill: ${color.greyDisabled};} color: ${color.greyDisabled} !important;`};

    &:hover {
        border-color: ${(p) => p.state !== 'disabled' && color.blueSky};
    }

    &:focus {
        border-color: ${color.blue};

        & + label {
            color: ${color.blue};
        }
    }

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

        & + label {
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

    ${({ size }) => {
        switch (size) {
            case 'large':
                return css`
                    height: 56px;
                    padding: 14px 16px;
                    & > label {
                        top: 15px;
                    }
                `;
            case 'regular':
            default:
                return css`
                    height: 40px;
                    padding: 6px 8px;
                    & > label {
                        top: 8px;
                    }
                `;
        }
    }}

    padding-right: 32px;
`;

const iconStyle = css`
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 24px;
    max-width: 24px;
    height: 100%;
    width: 100%;
`;

const PrefixIcon = styled.div`
    ${resetCSS}
    ${iconStyle}
    margin-right: 8px;
    & :first-child {
        width: 100%;
        height: 100%;
    }
`;

const DropDownIcon = styled.div`
    ${iconStyle};
    position: absolute;
    right: 8px;
`;

const ErrorLabel = styled.label`
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

const Options = styled.div`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.blueLight};
    border-radius: 16px;
    border: 2px solid ${color.blueSky};
    left: 0;
    margin-top: 10px;
    max-height: 265px;
    min-width: max-content;
    overflow: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 10;

    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${color.greyIcons};
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

const Option = styled.div<Pick<SelectProps, 'size'>>`
    ${resetCSS};
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: ${(p) => (p.size === 'large' ? '13px 20px' : '10px')};
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

const SelectStyles = {
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
    SelectStyled,
};

export default SelectStyles;
