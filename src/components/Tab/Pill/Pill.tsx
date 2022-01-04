import { PillProps } from "./types"
import React from "react"
import styled from "styled-components"
import { pillStyles } from "./Pill.styles"
import color from "../../../styles/colors"

const TabStyled = styled.div<Pick<PillProps, "disabled">>`
    ${pillStyles.initialStyles}

    ${(p) => p.disabled ? `background-color: ${color.blueLight}; bac` : null}
`

const Pill: React.FC<PillProps> = ({
id = String(Date.now()),
text = "Tab",
children,
disabled
}: PillProps) => {
    return (
        <TabStyled
        id={id}
        disabled={disabled}
        >
            {text}
        </TabStyled>
    )
}

export default Pill