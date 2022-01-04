import React, { useState } from "react"
import styled from "styled-components";
import { tooltipStyles } from "./Tooltip.styles";
import { TooltipProps } from "./types";

const TooltipWrapper = styled.div`
    display: inline-flex;
    position: relative;
`

const TooltipChildren = styled.div`
    ${tooltipStyles.children}
    background-color: transparent;
`

const TooltipContainer = styled.div<Pick<TooltipProps, "position">>`
    ${tooltipStyles.initialStyles}
    ${tooltipStyles.container}
    ${(p) => getContainerStyleByPosition(p.position)}
`

const TooltipBox = styled.span<Pick<TooltipProps, "position">>`
    ${tooltipStyles.initialStyles}
    ${tooltipStyles.box}

    ${(p) => getBoxStyleByPosition(p.position)}
    color: white;
`

const getBoxStyleByPosition = (position: "top" | "bottom" | "left" | "right" | undefined) => {
    switch (position) {
        case "bottom":
            return `
            &:after {
                border-color: transparent transparent black transparent;
                top: unset;
                width: 1px;
                bottom: 100%;
                left: calc(50% - 5px);
            }
            `;
        case "left":
            return `
            &:after {
                border-color: transparent transparent transparent black;
                left: 100%;
                top: calc(50% - 5px);
            }
            `;
        case "right":
            return `
            &:after {
                border-color: transparent black transparent
                transparent;
                right: 100%;
                left: unset;
                top: calc(50% - 5px);
            }
            `;
        default:
            return `
            &:after {
                border-color: transparent black transparent transparent
                bottom: unset;
                color: #112F5C;
                width: 1px;
                top: 100%;
                left: calc(50% - 5px);
            }`;
    }
}


const getContainerStyleByPosition = (position: "top" | "bottom" | "left" | "right"  | undefined) => {
    switch (position) {
        case "bottom":
            return `
                bottom: unset !important;
                top: calc(100% + 5px);
            `;
        case "left":
            return `
                margin-right: 0;
                width: 100%;
                left: unset;
                top: 50%;
                right: calc(100% + 5px);
                width: max-content;
            `;
        case "right":
            return `
                margin-left: 0;
                width: 100%;
                top: 50%;
                left: calc(100% + 5px);
                width: max-content;
            `;
        default:
            return `
                bottom: calc(100% + 5px);
            `;
    }
}

const Tooltip: React.FC<TooltipProps> = ({
id=String(Date.now()),
position="bottom",
text="Tooltip text",
children
}: TooltipProps) => {

    const [showTooltip, setVisibility] = useState(false)

    if(!children || children?.length === 0) {
        return (
            <div
            style={{display: 'none'}}
            ></div>
        )
    }

    return (
    <TooltipWrapper
    id={id}
    data-testid={"tooltip-wrapper-test-id"}
    onMouseEnter={() => setVisibility(true)}
    onMouseLeave={() => setVisibility(false)}
    >
        <TooltipChildren
        data-testid={"tooltip-children-test-id"}
        >
            {children}
        </TooltipChildren>
        {showTooltip && (
            <TooltipContainer position={position}>
                <TooltipBox 
                position={position}  
                data-testid={"tooltip-box-test-id"}
                >
                    {text}
                </TooltipBox>
            </TooltipContainer>
        )}
    </TooltipWrapper>
    ) 
    
}

export default Tooltip;