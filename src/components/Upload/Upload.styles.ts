import styled, { css } from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { DivStyledProps } from './types';

const DivStyled = styled.div<DivStyledProps>`
    ${resetCSS};
    align-items: center;
    background: ${color.white};
    border-radius: 13px;
    border: 2px dashed ${color.blueSky};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    min-height: 160px;
    overflow: hidden;
    padding: 8px;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    ${(props) =>
        !props.isFileSelected &&
        css`
            &:hover {
                background: radial-gradient(
                    102.8% 102.8% at 3.14% -9.06%,
                    #e9fffc 0%,
                    #e8fefb 4.74%,
                    #e4f4f7 50.11%,
                    #e1eef4 83.07%,
                    #e0ecf3 100%
                );
            }
        `}

    ${(props) =>
        !props.isFileSelected &&
        css`&:active {
        background: radial-gradient(
            102.8% 102.8% at 3.14% -9.06%,
            #d3fff8 0%,
            #d2fdf7 4.74%,
            #c8e9ef 50.11%,
            #c2dde9 83.07%,
            #c0d8e7 100%
        );`}
    }
`;

const TextContentStyled = styled.div`
    ${resetCSS};
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
`;

const InputStyled = styled.input`
    display: none;
`;

const ImageStyled = styled.img`
    border-radius: 8px;
    height: 144px;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
`;

const IconDivStyled = styled.div`
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
`;
export default {
    DivStyled,
    TextContentStyled,
    InputStyled,
    ImageStyled,
    IconDivStyled,
};
