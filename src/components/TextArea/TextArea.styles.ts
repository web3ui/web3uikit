import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled from 'styled-components';
import { TextAreaProps } from './types';

export const TextAreaWrapper = styled.div<Pick<TextAreaProps, 'state'>>`
    padding-top: 8px;
    position: relative;
    textarea {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
        }

        &:hover {
            ${(p) => p.state === 'error' && `border-color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
        }

        &:focus {
            ${(p) => p.state === 'error' && `border-color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
        & + label {
                ${(p) => p.state === 'error' && `color: ${color.red};`}
                ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
            }
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
    top: 24px;
    transition: all 0.1s ease-out;
`;

export const TextAreaStyled = styled.textarea`
    ${resetCSS}
    ${fonts.text}
    border: 1px solid ${color.greyLight};
    border-radius: 16px;
    padding: 16px;
    transition: all 0.3 linear;
    min-width: 320px;
    min-height: 128px;
    overflow: hidden;

    ::-webkit-resizer {
        display: none;
    }

    &::placeholder {
        color: ${color.grey};
        visibility: hidden;
    }

    &:hover {
        border-color: ${color.blue};
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

    &:focus,
    .filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: 0px;
        }
    }
`;

const TextAreaStyles = {
    TextAreaStyled,
    LabelStyled,
    TextAreaWrapper,
};

export default TextAreaStyles;
