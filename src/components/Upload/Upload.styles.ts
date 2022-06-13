import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';

const DivStyled = styled.div`
    ${resetCSS};
    text-align: center;
    cursor: pointer;
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 8px;
    border: 2px dashed ${color.blueSky};
    border-radius: 13px;
    user-select: none;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
`;

const InputStyled = styled.input`
    ${resetCSS};
    display: none;
`;
const DivUploadedStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 8px;
    gap: 8px;
    background: transparent;
    border: 2px dashed ${color.blueSky};
    border-radius: 13px;
    user-select: none;
`;
const ImageFrameStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 32px;
    gap: 8px;
    width: 90%;
    user-select: none;
`;
const ImageStyled = styled.img`
    width: 144px;
    height: 144px;
    border-radius: 8px;
`;
const IconDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
