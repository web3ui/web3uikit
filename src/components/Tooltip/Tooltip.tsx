import React, { useRef, useEffect, useState } from 'react';
import { TooltipProps } from './types';
import {
    StyledHoverDiv,
    StyledTooltipParentDiv,
    StyledPopoverArrowDiv,
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
            <div>{children}</div>
            <StyledHoverDiv
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
                <StyledPopoverArrowDiv position={position} />
            </StyledHoverDiv>
        </StyledTooltipParentDiv>
    );
};

export default Tooltip;
