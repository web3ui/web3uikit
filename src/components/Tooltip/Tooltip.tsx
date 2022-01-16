import React from 'react';
import { TooltipProps } from './types';
import TooltipContainer from './Tooltip.styles';

const Tooltip: React.FC<TooltipProps> = ({
    id = String(Date.now()),
    position = 'bottom',
    text,
    children,
}: TooltipProps) => {
    return (
        <TooltipContainer
            id={id}
            position={position}
            data-tooltip={text}
            data-testid={'tooltip-container-test-id'}
        >
            <div data-testid={'tooltip-children-test-id'}>{children}</div>
        </TooltipContainer>
    );
};

export default Tooltip;
