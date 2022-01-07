import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled from 'styled-components';
import { TextAreaProps } from './types';

export const TextAreaWrapper = styled.div<Pick<TextAreaProps, 'state'>>`
    position: relative;
    display: inline-block;
    border-radius: 16px;
    border: 1px solid ${color.greyLight};
    padding: 12px;
    transition: all 0.1s linear;

    &:hover {
        border-color: ${(p) =>
            p.state === 'disabled' ? color.greyLight : color.blue};
    }

    &:focus {
        border-color: ${color.blue};

        &::placeholder {
            visibility: visible;
        }
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

export const TextAreaStyled = styled.textarea`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    display: block;
    min-height: 128px;
    width: 294px;
    overflow: hidden;
    padding: 2px;

    ::-webkit-resizer {
        visibility: hidden;
    }

    &::placeholder {
        color: ${color.grey};
        visibility: hidden;
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
`;

const TextAreaStyles = {
    TextAreaStyled,
    LabelStyled,
    TextAreaWrapper,
};

export default TextAreaStyles;
