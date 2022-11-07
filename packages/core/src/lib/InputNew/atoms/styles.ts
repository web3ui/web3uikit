import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { IInputBaseProps, TInputStates, ILabelBaseProps } from './types';

type TInputProps = Pick<IInputBaseProps, 'state' | 'type'>;
type TLabelProps = Pick<
    ILabelBaseProps,
    'backgroundColor' | 'position' | 'state'
>;

const getColorByState = (state: TInputStates) => {
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
};

const inputFocusedOrFilled = css`
    background-color: transparent;
    border-radius: 4px;
    left: 14px;
    top: -14px;

    span {
        color: ${color.navy40};
        font-size: 12px;
        font-weight: 550;
        overflow: hidden;
        padding: 2px 4px;
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: calc(100% - (18px * 2));
        z-index: 1;

        &::before {
            background-color: ${color.white};
            content: '';
            display: block;
            height: 100%;
            left: 0%;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
        }
    }
`;

const InputStyled = styled.input<TInputProps>`
    ${resetCSS};
    ${fonts.text}
    background-color: ${color.white};
    border-radius: 16px;
    border: 1px solid ${color.gray30};
    display: block;
    padding: 18px;
    width: 100%;

    &:focus {
        border-color: ${color.navy30};
        box-shadow: 0px 0px 0px 3px ${color.navy30};
    }

    &:focus + label {
        ${inputFocusedOrFilled};
    }

    &::placeholder {
        color: ${color.gray40};
    }

    border-color: ${(p) => p.state && getColorByState(p.state)};
    padding-right: ${(p) => (p.type === 'password' ? '44px' : '18px')};
`;

const labelPositioned = css`
    height: 24px;
    left: 18px;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: calc(50% - (24px / 2));
    transition: all 0.1s ease-out;
    white-space: nowrap;
    width: calc(100% - (18px * 2));
    z-index: 1;
`;

const LabelStyled = styled.label<TLabelProps>`
    background-color: ${(p) => p.backgroundColor || color.white};
    box-sizing: border-box;
    display: block;

    ${(p) => p.position === 'absolute' && labelPositioned};

    span {
        color: ${(p) =>
            p.state && p.state !== 'initial' && getColorByState(p.state)};
    }
`;

export default {
    inputFocusedOrFilled,
    InputStyled,
    LabelStyled,
};
