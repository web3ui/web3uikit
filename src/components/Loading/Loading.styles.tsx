import styled, { keyframes } from 'styled-components';
import { ILoadingProps } from './types';
import fonts from '../../styles/fonts';

const rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

interface IStyledSpinnerParentDiv {
    color: string;
    layout: 'column' | 'row';
}

export const StyledSpinnerParentDiv = styled.div<IStyledSpinnerParentDiv>`
    ${fonts.text}
    display: flex;
    flex-direction: ${(props) => props.layout};
    justify-content: center;
    align-items: center;
    > h4 {
        margin: 4px;
        font-weight: 400;
        color: ${(props) => props.color};
    }
`;
export const StyledSpinnerDiv = styled.div<Partial<ILoadingProps>>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border: 3px solid
        rgba(${(props) => props.ringColor && props.ringColor}, 0.5);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${rotate} 1.5s linear infinite;
    :before {
        content: '';
        position: absolute;
        top: -15%;
        left: 50%;
        background: rgb(${(props) => props.ballColor && props.ballColor});
        width: 25%;
        height: 25%;
        max-height: 40px;
        max-width: 40px;
        border-radius: 50%;
    }
`;
