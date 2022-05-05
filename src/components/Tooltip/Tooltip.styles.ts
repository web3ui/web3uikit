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
    moveBody: number;
}

const defaultTriangleStyle = css`
    position: absolute;
    height: 0;
    width: 0;
`;

type TTooltipPositioningProps = Pick<TooltipProps, 'move' | 'moveBody'>;

// Left Position comps
const leftPositionPopover = css<IStyledHoverSpan>`
    right: ${(props) => props.width && `calc(${props.width}px + 10px)`};
    top: 50%;
    transform: translateY(${(p) => `${p.moveBody}%`});
`;

const leftPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle};
    border-bottom: 10px solid transparent;
    border-left: 10px solid ${color.blueDark2};
    border-top: 10px solid transparent;
    right: -10px;
    top: calc(${(p) => `${p.move}%`} - 10px);
`;

// Right position comps
const rightPositionPopover = css<IStyledHoverSpan>`
    left: ${(props) => props.width && `calc(${props.width}px + 10px)`};
    top: 50%;
    transform: translateY(${(p) => `${p.moveBody}%`});
`;

const rightPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle};
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${color.blueDark2};
    border-top: 10px solid transparent;
    left: -10px;
    top: calc(${(p) => `${p.move}%`} - 10px);
`;

// Top Position Comps
const topPositionPopover = css<IStyledHoverSpan>`
    bottom: ${(props) => props.height && `calc(${props.height}px + 10px)`};
    left: 50%;
    transform: translateX(${(p) => `${p.moveBody}%`});
`;

const topPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${color.blueDark2};
    left: calc(${(p) => `${p.move}%`} - 10px);
    top: 100%;
`;

// bottom Position Comps
const bottomPositionPopover = css<IStyledHoverSpan>`
    left: 50%;
    top: ${(props) => props.height && `calc(${props.height}px + 10px)`};
    transform: translateX(${(p) => `${p.moveBody}%`});
`;

const bottomPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle}
    border-bottom: 10px solid ${color.blueDark2};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    left: calc(${(p) => `${p.move}%`} - 10px);
    top: -10px;
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
    Pick<TooltipProps, 'position' | 'move' | 'moveBody'>
>`
    ${({ position }) => getTriangleComp[position]}
`;

export default {
    DivStyled,
    DivStyledArrow,
    DivStyledTooltipParent,
    DivStyledTooltipText,
};
