import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import type { StyledLabelProps, TextAreaWrapperProps } from './types';

export const TextAreaWrapper = styled.div<TextAreaWrapperProps>`
    display: inline-flex;
    position: relative;
`;

const getStyledLabel = (state: string) => {
    switch (state) {
        case 'mouseEntered':
            return `
                color: ${color.blue};
            `;
        case 'mouseLeaved':
            return `
                color: ${color.grey};
            `;
        case 'focused':
            return `
               
            `;
        case 'active':
            return `
                ${fonts.semiBold}
                font-size: 14px;
                z-index: 0;
                color: ${color.blue};
                background-color: white;
                top: -14px;
            `;
        default:
            return '';
    }
};

export const StyledLabel = styled.label<StyledLabelProps>`
    ${fonts.text}
    position: absolute;
    transition: all 0.1s ease;
    left: 13px;
    top: 17px;
    z-index: -1;
    max-width: 100%;
    padding: 0 4px;
    ${({ state }) => getStyledLabel(state)}
`;

// export const;

export const TextAreaStyled = styled.textarea`
    ${resetCSS}
    ${fonts.text}
    border: 1px solid ${color.greyLight};
    /* outline: none !important; */
    border-radius: 16px;
    padding: 16px;
    background: none;
    /* position: relative; */
    /* transition: all 0.2s ease; */
    /* outline: 4px solid rgba(158, 204, 234, 0.3); */
    &::-webkit-resizer {
        display: none;
    }

    &:hover {
        border-color: ${color.blueSky};
        /* color: ${color.blue}; */
    }
    &:focus {
        /* border-color: ${color.blueSky}; */
        /* color: ${color.blue}; */
        outline: 4px solid rgba(158, 204, 234, 0.3);
    }
`;

const TextAreaStyles = {
    TextAreaStyled,
    TextAreaWrapper,
};

export default TextAreaStyles;
