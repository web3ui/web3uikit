import { color, resetCSS, fonts } from '@web3uikit/styles';
import styled from 'styled-components';
import { TextAreaProps } from './types';

type TStyleProps = Pick<TextAreaProps, 'state' | 'width'>;

const TextAreaWrapper = styled.div<TStyleProps>`
    ${resetCSS};
    background-color: ${color.white};
    border-radius: 16px;
    border: 1px solid ${color.gray30};
    display: inline-block;
    max-width: 100%;
    padding: 12px;
    position: relative;
    transition: all 0.1s linear;
    width: ${(p) => (p.width ? p.width : '294px')};

    &:hover {
        border-color: ${(p) =>
            p.state === 'disabled' ? color.gray30 : color.navy40};
    }

    &:focus {
        border-color: ${color.navy40};

        + label {
            color: ${color.navy40};
        }
    }

    ${(p) => p.state === 'error' && `border-color: ${color.red40};`}
    ${(p) => p.state === 'confirmed' && `border-color: ${color.mint40};`}

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red40};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.mint40};`}

        label {
            ${(p) =>
                p.state !== 'error' &&
                p.state !== 'confirmed' &&
                p.state !== 'disabled' &&
                `color: ${color.navy40};`}
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

    textarea {
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red40};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.mint40};`}
        }
    }
`;

const LabelStyled = styled.label`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    height: 24px;
    left: 12px;
    padding: 0 4px;
    pointer-events: none;
    position: absolute;
    top: 14px;
    transition: all 0.1s ease-out;
`;

const TextAreaStyled = styled.textarea<TStyleProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    display: block;
    max-width: 100%;
    min-height: 128px;
    overflow: hidden;
    padding: 2px;
    width: 100%;

    &::placeholder {
        opacity: 0;
    }

    &:focus,
    .filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -10px;
        }
    }

    &:focus {
        &::placeholder {
            opacity: 1;
            color: ${color.blueGray50};
        }
    }
`;

export default {
    TextAreaStyled,
    LabelStyled,
    TextAreaWrapper,
};
