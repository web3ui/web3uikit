import React, { useState } from 'react';
import styled from 'styled-components';
import { tooltipStyles } from './Tooltip.styles';
import { TooltipProps } from './types';

const TooltipWrapper = styled.div`
    display: inline-block;
    position: relative;
`;

const TooltipContainer = styled.div<Pick<TooltipProps, 'position'>>`
    ${tooltipStyles.initialStyles}
    ${tooltipStyles.container}
  ${(p) => getContainerStyleByPosition(p.position)}
`;

const getContainerStyleByPosition = (
    position: 'top' | 'bottom' | 'left' | 'right' | undefined,
) => {
    switch (position) {
        case 'top':
            return tooltipStyles.top;
        case 'bottom':
            return tooltipStyles.bottom;
        case 'left':
            return tooltipStyles.left;
        case 'right':
            return tooltipStyles.right;
        default:
            return tooltipStyles.defaultContainer;
    }
};

const Tooltip: React.FC<TooltipProps> = ({
    id = String(Date.now()),
    position = 'bottom',
    text,
    children,
}: TooltipProps) => {
    const [showTooltip, setVisibility] = useState(false);

    return (
        <TooltipWrapper
            id={id}
            data-testid={'tooltip-wrapper-test-id'}
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
        >
            <div data-testid={'tooltip-children-test-id'}>{children}</div>
            {showTooltip && (
                <TooltipContainer
                    data-testid={'tooltip-box-test-id'}
                    position={position}
                >
                    {text}
                </TooltipContainer>
            )}
        </TooltipWrapper>
    );
};

export default Tooltip;
