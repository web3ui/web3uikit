import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';

const DivStyled = styled.div`
    ${resetCSS};
    align-items: center;
    background: transparent;
    border-radius: 13px;
    border: 2px dashed ${color.blueSky};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    padding: 40px;
    text-align: center;
    user-select: none;
    width: 100%;
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
    &:active {
        background: radial-gradient(
            102.8% 102.8% at 3.14% -9.06%,
            #d3fff8 0%,
            #d2fdf7 4.74%,
            #c8e9ef 50.11%,
            #c2dde9 83.07%,
            #c0d8e7 100%
        );
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
const DivUploadedStyled = styled.div`
    ${resetCSS};
    align-items: flex-start;
    background: transparent;
    border-radius: 13px;
    border: 2px dashed ${color.blueSky};
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 8px;
    user-select: none;
    width: 100%;
`;
const ImageFrameStyled = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;
    width: fit-content;
    /* padding: 0px 0px 0px 32px; */
    user-select: none;
`;
const ImageStyled = styled.img`
    height: 144px;
`;
const IconDivStyled = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export default {
    DivStyled,
    TextContentStyled,
    InputStyled,
    DivUploadedStyled,
    ImageStyled,
    ImageFrameStyled,
    IconDivStyled,
};
