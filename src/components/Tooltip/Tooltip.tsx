import React from "react"
import styled from "styled-components";
import { tooltipStyles } from "./Tooltip.styles";
import { TooltipProps } from "./types";

const TooltipStyled = styled.div<Pick<TooltipProps, "position" | "active">>`
    ${tooltipStyles.initialStyles}
    ${(p) => getStyleByPosition(p.position)}
    ${(p) => !p.active ? "display: none;" : "display: inline-block;"}
`

const getStyleByPosition = (position: "top" | "bottom" | "left" | "right"  | undefined) => {
    switch (position) {
        case "top":
            return  tooltipStyles.top
        case "left":
            return tooltipStyles.left
        case "right":
            return tooltipStyles.right
        default:
            return tooltipStyles.bottom
    }
}

const Tooltip: React.FC<TooltipProps> = ({
id=String(Date.now()),
position="bottom",
active,
text="Tooltip text"
}: TooltipProps) => {

    return (
        <>
        {active && 
            <TooltipStyled
            id={id}
            position={position}
            active={active}
            data-testid="test-tooltip-id"
            >
                {text}
            </TooltipStyled>
        }
        </>
    ) 
    
}

export default Tooltip;