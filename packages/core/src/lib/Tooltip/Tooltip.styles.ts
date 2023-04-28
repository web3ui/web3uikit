import styled, { css } from 'styled-components';
import { color, colorPercentage, fonts, resetCSS } from '@web3uikit/styles';
import { Position, TooltipProps } from './types';

interface IStyledHoverSpan
    extends Pick<TooltipProps, 'customize' | 'arrowSize'> {
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

type TTooltipPositioningProps = Pick<
    TooltipProps,
    'move' | 'moveBody' | 'bgColor' | 'arrowSize'
>;

// Left Position comps
const leftPositionPopover = css<IStyledHoverSpan>`
    right: ${(props) =>
        props.height &&
        `calc(${props.height}px + ${props?.arrowSize ?? 10}px)`};
    top: 50%;
    transform: translateY(${(p) => `${p.moveBody}%`});
`;

const leftPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle};
    border-bottom: ${(props) =>
        `${props?.arrowSize ?? 10}px solid transparent`};
    border-left: ${(props) =>
        `${props?.arrowSize ?? 10}px solid ${props.bgColor ?? color.blue40}`};
    border-top: ${(props) => `${props?.arrowSize ?? 10}px solid transparent`};
    right: -${(props) => (props?.arrowSize ?? 10) + 'px'};
    top: calc(${(props) => `${props.move}% - ${props?.arrowSize ?? 10}px`});
`;

// Right position comps
const rightPositionPopover = css<IStyledHoverSpan>`
    left: ${(props) =>
        props.height &&
        `calc(${props.height}px + ${props?.arrowSize ?? 10}px)`};
    top: 50%;
    transform: translateY(${(p) => `${p.moveBody}%`});
`;

const rightPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle};
    border-bottom: ${(props) =>
        `${props?.arrowSize ?? 10}px solid transparent`};
    border-right: ${(props) =>
        `${props?.arrowSize ?? 10}px solid ${props.bgColor ?? color.blue40}`};
    border-top: ${(props) => `${props?.arrowSize ?? 10}px solid transparent`};
    left: -${(props) => (props?.arrowSize ?? 10) + 'px'};
    top: calc(${(props) => `${props.move}% - ${props?.arrowSize ?? 10}px`});
`;

// Top Position Comps
const topPositionPopover = css<IStyledHoverSpan>`
    bottom: ${(props) =>
        props.height &&
        `calc(${props.height}px + ${props?.arrowSize ?? 10}px)`};
    left: 50%;
    transform: translateX(${(p) => `${p.moveBody}%`});
`;

const topPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle};
    border-left: ${(props) => `${props?.arrowSize ?? 10}px solid transparent`};
    border-right: ${(props) => `${props?.arrowSize ?? 10}px solid transparent`};
    border-top: ${(props) =>
        `${props?.arrowSize ?? 10}px solid ${props.bgColor ?? color.blue40}`};
    left: calc(${(props) => `${props.move}% - ${props?.arrowSize ?? 10}px`});
    top: 100%;
`;

// bottom Position Comps
const bottomPositionPopover = css<IStyledHoverSpan>`
    left: 50%;
    top: ${(props) =>
        props.height &&
        `calc(${props.height}px + ${props?.arrowSize ?? 10}px)`};
    transform: translateX(${(p) => `${p.moveBody}%`});
`;

const bottomPositionTriangle = css<TTooltipPositioningProps>`
    ${defaultTriangleStyle}
    border-bottom: ${(props) =>
        `${props?.arrowSize ?? 10}px solid ${props.bgColor ?? color.blue40}`};
    border-left: ${(props) => `${props?.arrowSize ?? 10}px solid transparent`};
    border-right: ${(props) => `${props?.arrowSize ?? 10}px solid transparent`};
    left: calc(${(props) => `${props.move}% - ${props?.arrowSize ?? 10}px`});
    top: -${(props) => (props?.arrowSize ?? 10) + 'px'};
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
`;

const showOnHoverStyles = css`
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
    transition-delay: 0.1s;
`;

const DivStyled = styled.div<IStyledHoverSpan>`
    border: ${(props) => props.customize?.border ?? 'none'};
    min-width: ${(props) => props.minWidth}px;
    opacity: 0;
    position: absolute;
    visibility: hidden;
    z-index: 1;
    ${({ position }) => getPopoverComp[position]};

    &:hover {
        ${showOnHoverStyles}
    }
`;

const DivStyledTooltipContent = styled.div<Partial<TooltipProps>>`
    margin: ${(props) => props.customize?.margin ?? '0px'};
    &:hover {
        ${(p) =>
            p.customize?.onHover &&
            p.customize?.onHover === 'lighten' &&
            css`
                background-color: ${colorPercentage(
                    p.customize?.backgroundColor ?? color.blue40,
                    10,
                )};
                border-radius: ${p.customize?.borderRadius ?? '5px'};
            `}
        ${(p) =>
            p.customize?.onHover &&
            p.customize?.onHover === 'darken' &&
            css`
                background-color: ${colorPercentage(
                    p.customize?.backgroundColor ?? color.blue40,
                    40,
                )};
                border-radius: ${p.customize?.borderRadius ?? '5px'};
            `}
    }
    &:hover + ${DivStyled} {
        ${showOnHoverStyles}
    }
`;

const DivStyledTooltipText = styled.div<Partial<TooltipProps>>`
    background-color: ${(props) => props.bgColor ?? color.blue40};
    border-radius: ${(props) => props.customize?.borderRadius ?? '5px'};
    color: ${(props) => props.customize?.color ?? color.white};
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.customize?.fontSize ?? '16px'};
    font-weight: ${(props) => props.customize?.fontWeight ?? '16px'};
    justify-content: flex-start;
    max-width: ${(props) => props.maxWidth && `${props.maxWidth}px`};
    min-width: fit-content;
    padding: ${(props) => props.customize?.padding ?? '10px'};
    transition: 0.5ms;
`;

type popupPos = Pick<
    TooltipProps,
    'position' | 'move' | 'moveBody' | 'bgColor' | 'customize' | 'arrowSize'
>;
export const DivStyledArrow = styled.div<popupPos>`
    ${({ position }) => getTriangleComp[position]}

    // after is a buffer so the mouse does not need to be 100% accurate
    &:after {
        content: '';
        display: block;
        display: block;
        height: 10px;
        left: -25px;
        position: absolute;
        top: 0;
        width: 50px;
    }
`;

export default {
    DivStyled,
    DivStyledArrow,
    DivStyledTooltipParent,
    DivStyledTooltipContent,
    DivStyledTooltipText,
};
