import styled from 'styled-components';
import { color, resetCSS } from '@web3uikit/styles';
import { SkeletonProps } from './types';

type TStyleProps = Pick<
    SkeletonProps,
    'animationColor' | 'backgroundColor' | 'borderRadius' | 'height' | 'width'
>;

//Keep background style above background-image property for animations
const DivStyled = styled.div<TStyleProps>`
    ${resetCSS};
    background: ${({ backgroundColor }) => backgroundColor || color.white};
    border-radius: ${({ borderRadius }) => borderRadius};
    box-sizing: border-box;
    display: inline-block;
    height: ${({ height }) => height};
    overflow: hidden;
    position: relative;
    width: ${({ width }) => width};

    &:before {
        animation: progress 1.5s ease-out infinite;
        background-color: ${({ animationColor }) =>
            animationColor || 'rgba(0, 0, 0, 0.3)'};
        box-shadow: 0 0 100px 100px
            ${({ animationColor }) => animationColor || 'rgba(0, 0, 0, 0.3)'};
        content: '';
        display: block;
        height: 100%;
        left: -250px;
        position: absolute;
        top: 0;
        transform: rotate(15deg);
        width: ${({ width }) => (width ? `calc(${width} / 2)` : '10px')};
    }

    @keyframes progress {
        0% {
            left: -250px;
        }
        100% {
            left: calc(100% + 250px);
        }
    }
`;

export { DivStyled };
