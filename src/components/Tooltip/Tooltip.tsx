import React from "react"
import styled from "styled-components";
import { tooltipStyles } from "./Tooltip.styles";
import { TooltipProps } from "./types";

const TooltipStyled = styled.div<Pick<TooltipProps, "position">>`
    ${tooltipStyles.initialStyles}
    ${(p) => getStyleByPosition(p.position)}
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
text="Tooltip text"
}: TooltipProps) => {

    return (
        <TooltipStyled
        id={id}
        position={position}
        >
            {text}
        </TooltipStyled>   
    ) 
    
}

export default Tooltip;