import styled, { css } from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import { Position, TooltipProps } from './types';

interface IStyledHoverSpan {
    height: number;
    popoverHeight: number;
    popoverWidth: number;
    position: Position;
    width: number;
    minWidth: number;
}

// Left Position comps
const leftPositionPopover = css<IStyledHoverSpan>`
    right: ${(props) => props.width && `calc(${props.width}px + 10px)`};
    top: 0px;
    ${(props) => {
        return `transform: translateY(-${
            (props.popoverHeight - props.height) / 2
        }px)`;
    }}
`;

const leftPositionTriangle = css`
    border-bottom: 10px solid transparent;
    border-left: 10px solid ${color.blueDark2};
    border-top: 10px solid transparent;
    height: 0;
    position: absolute;
    right: -10px;
    top: calc(50% - 10px);
    width: 0;
`;

// Right position comps
const rightPositionPopover = css<IStyledHoverSpan>`
    left: ${(props) => props.width && `calc(${props.width}px + 10px)`};
    top: 0px;
    ${(props) => {
        return `transform: translateY(-${
            (props.popoverHeight - props.height) / 2
        }px)`;
    }}}
`;

const rightPositionTriangle = css`
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${color.blueDark2};
    border-top: 10px solid transparent;
    height: 0;
    left: -10px;
    position: absolute;
    top: calc(50% - 10px);
    width: 0;
`;

// Top Position Comps
const topPositionPopover = css<IStyledHoverSpan>`
    bottom: ${(props) => props.height && `calc(${props.height}px + 10px)`};
    left: 50%;
    transform: translateX(-50%);
`;

const topPositionTriangle = css`
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${color.blueDark2};
    height: 0;
    left: calc(50% - 10px);
    position: absolute;
    top: 100%;
    width: 0;
`;

// bottom Position Comps
const bottomPositionPopover = css<IStyledHoverSpan>`
    left: 50%;
    top: ${(props) => props.height && `calc(${props.height}px + 10px)`};
    transform: translateX(-50%);
`;

const bottomPositionTriangle = css`
    border-bottom: 10px solid ${color.blueDark2};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 0;
    left: calc(50% - 10px);
    position: absolute;
    top: -10px;
    width: 0;
`;

const getTriangleComp = {
    top: topPositionTriangle,
    bottom: bottomPositionTriangle,
    left: leftPositionTriangle,
    right: rightPositionTriangle,
};

const getPopoverComp = {
    top: topPositionPopover,
    bottom: bottomPositionPopover,
    left: leftPositionPopover,
    right: rightPositionPopover,
};

const DivStyledTooltipParent = styled.div`
    ${fonts.openSans}
    ${resetCSS}
    color: #252525;
    position: relative;
    &:hover > div:nth-child(2) {
        opacity: 1;
        transition: 0.5s;
        transition-delay: 0.1s;
    }
`;

const DivStyled = styled.div<IStyledHoverSpan>`
    opacity: 0;
    position: absolute;
    z-index: 1;
    min-width: ${(props) => props.minWidth}px;
    ${({ position }) => getPopoverComp[position]};
`;

const DivStyledTooltipText = styled.div<
    Pick<TooltipProps, 'maxWidth' | 'minWidth'>
>`
    background-color: ${color.blueDark2};
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: ${(props) => props.maxWidth && `${props.maxWidth}px`};
    min-width: fit-content;
    padding: 10px;
    transition: 0.5ms;
`;

export const DivStyledArrow = styled.div<
    Pick<TooltipProps, 'position'>
>`
    ${({ position }) => getTriangleComp[position]}
`;

export default {
    DivStyled,
    DivStyledArrow,
    DivStyledTooltipParent,
    DivStyledTooltipText,
};
