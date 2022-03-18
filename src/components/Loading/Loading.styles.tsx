import styled, { keyframes } from 'styled-components';
import { ILoadingProps } from '.';
import fonts from '../../styles/fonts';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const StyledSpinnerParent = styled.div<
    Pick<ILoadingProps, 'direction' | 'spinnerColor' | 'size' | 'fontSize'>
>`
    ${fonts.text}
    display: flex;
    flex-direction: ${(props) =>
        props.direction == 'bottom' ? 'column' : 'row'};
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    text-align: center;
    & > span {
        color: ${(props) => props.spinnerColor};
        font-weight: 500;
        font-size: ${(props) =>
            `${
                props.fontSize ? props.fontSize : props.size && props.size / 2
            }px`};
        line-height: 5px;
        margin: 8px;
    }
`;

export const StyledSpinnerDiv = styled.div<
    Pick<ILoadingProps, 'spinnerColor' | 'size'>
>`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    box-sizing: border-box;
    border: 2px solid ${(props) => props.spinnerColor};
    border-bottom: transparent;
    border-right: transparent;
    border-radius: 50%;
    animation: 1s ${rotate} infinite;
`;

export const DivStyledWaveLoader = styled.div<
    Pick<ILoadingProps, 'size' | 'spinnerColor'>
>`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    & > span {
        width: ${(props) => props.size && props.size / 2}px;
        height: ${(props) => props.size && props.size / 2}px;
        transition: all 1000ms;
        background-color: ${(props) =>
            props.spinnerColor && props.spinnerColor};
        border-radius: 50%;
    }
    & > .active {
        width: ${(props) => props.size && props.size}px;
        height: ${(props) => props.size && props.size}px;
    }
`;
