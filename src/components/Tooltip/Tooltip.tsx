import React, { useRef, useEffect, useState } from 'react';
import { TooltipProps } from './types';
import {
    StyledHoverSpan,
    StyledTooltipParentDiv,
    StyledPopoverArrow,
    StyledTooltipTextDiv,
} from './Tooltip.styles';

const Tooltip: React.FC<TooltipProps> = ({
    position = 'bottom',
    content,
    children,
    maxWidth,
}: TooltipProps) => {
    const parretnRef = useRef(null);
    const popoverRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [popverWidth, setPopoverWidth] = useState(0);
    const [popoverHeight, setPopoverHeight] = useState(0);
    useEffect(() => {
        console.log(
            'width',
            parretnRef.current ? (parretnRef.current as any).offsetWidth : 0,
        );
        setWidth(
            parretnRef.current ? (parretnRef.current as any).offsetWidth : 0,
        );
        setHeight(
            parretnRef.current ? (parretnRef.current as any).offsetHeight : 0,
        );
        setPopoverWidth(
            popoverRef.current ? (popoverRef.current as any).offsetWidth : 0,
        );
        setPopoverHeight(
            popoverRef.current ? (popoverRef.current as any).offsetHeight : 0,
        );
    }, [parretnRef.current, popoverRef.current]);
    return (
        <StyledTooltipParentDiv
            ref={parretnRef}
            data-testid={'tooltip-container-test-id'}
        >
            <span> {children}</span>
            <StyledHoverSpan
                ref={popoverRef}
                popoverWidth={popverWidth}
                popoverHeight={popoverHeight}
                height={height}
                width={width}
                position={position}
                data-testid={'tooltip-children-test-id'}
            >
                <StyledTooltipTextDiv maxWidth={maxWidth}>
                    {content}
                </StyledTooltipTextDiv>
                <StyledPopoverArrow position={position} />
            </StyledHoverSpan>
        </StyledTooltipParentDiv>
    );
};

export default Tooltip;
