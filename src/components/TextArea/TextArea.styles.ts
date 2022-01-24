import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled from 'styled-components';
import { TextAreaProps } from './types';

type TStyleProps = Pick<TextAreaProps, 'state' | 'width'>;

export const TextAreaWrapper = styled.div<TStyleProps>`
    ${resetCSS};
    background-color: ${color.white};
    border-radius: 16px;
    border: 1px solid ${color.greyLight};
    display: inline-block;
    max-width: 100%;
    padding: 12px;
    position: relative;
    transition: all 0.1s linear;
    width: ${(p) => (p.width ? p.width : '294px')};

    &:hover {
        border-color: ${(p) =>
            p.state === 'disabled' ? color.greyLight : color.blue};
    }

    &:focus {
        border-color: ${color.blue};

        + label {
            color: ${color.blue};
        }
    }

    ${(p) => p.state === 'error' && `border-color: ${color.red};`}
    ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

        label {
            ${(p) =>
                p.state !== 'error' &&
                p.state !== 'confirmed' &&
                p.state !== 'disabled' &&
                `color: ${color.blue};`}
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

    textarea {
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
        }
    }
`;

export const LabelStyled = styled.label`
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

export const TextAreaStyled = styled.textarea<TStyleProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    display: block;
    max-width: 100%;
    min-height: 128px;
    overflow: hidden;
    padding: 2px;
    width: 100%;

    ::-webkit-resizer {
        visibility: hidden;
    }

    &::placeholder {
        visibility: hidden;
        display: none;
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
            display: none;
            visibility: visible;
            color: ${color.grey};
        }
    }
`;

const TextAreaStyles = {
    TextAreaStyled,
    LabelStyled,
    TextAreaWrapper,
};

export default TextAreaStyles;
