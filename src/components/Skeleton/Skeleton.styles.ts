import styled from 'styled-components';
import color, { gradientColors } from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { SkeletonProps } from './types';

type TStyleProps = Pick<SkeletonProps, 'borderRadius' | 'height' | 'width'>;

//Keep background style above background-image property for animations
const DivStyled = styled.div<TStyleProps>`
    ${resetCSS};
    animation: progress 1.5s linear infinite;
    background: ${color.white} no-repeat;
    background-image: ${gradientColors.lightGrey};
    background-size: 200px 100%;
    box-sizing: border-box;
    display: inline-block;
    flex-shrink: 0;
    outline: none;
    overflow: hidden;
    position: relative;
    border-radius: ${({ borderRadius }) => borderRadius};
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    &:after,
    &:before {
        box-sizing: border-box;
    }
    @keyframes progress {
        0% {
            background-position: -300px 0;
        }
        100% {
            background-position: calc(300px + 100%) 0;
        }
    }
`;

export { DivStyled };
