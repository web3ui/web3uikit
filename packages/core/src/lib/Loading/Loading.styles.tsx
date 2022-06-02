import styled, { keyframes } from 'styled-components';
import { ILoadingProps } from '.';
import { fonts } from '@web3uikit/styles';

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

// const DivStyledWaveLoader = styled.div<Pick<ILoadingProps, 'size' | 'spinnerColor'>>`

const waveAnim = keyframes`
    from {height: 2px; width: 2px;}
    to {height: 7px;width: 7px;}
`;

export const DivStyledWaveLoader = styled.div<ILoadingProps>`
    display: flex;
    justify-content: center;
    width: fit-content;

    span {
        align-items: center;
        display: flex;
        height: 10px;
        justify-content: center;
        width: 10px;

        &:before {
            animation-direction: alternate;
            animation-duration: 0.4s;
            animation-iteration-count: infinite;
            animation-name: ${waveAnim};
            background-color: ${(props) => props.spinnerColor};
            border-radius: 50%;
            content: '';
            display: block;
        }

        &#anim-delay1:before {
            animation-delay: 0s;
        }
        &#anim-delay2:before {
            animation-delay: 0.1s;
        }
        &#anim-delay3:before {
            animation-delay: 0.2s;
        }
        &#anim-delay4:before {
            animation-delay: 0.3s;
        }
        &#anim-delay5:before {
            animation-delay: 0.4s;
        }
    }
`;
