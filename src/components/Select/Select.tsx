import {OptionProps, SelectProps} from "./types";
import React from "react";
import styled from "styled-components";
import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";

const SelectWrapper = styled.div<Pick<SelectProps, "theme">>`
  ${resetCSS}
  ${fonts.text}
`

const LabelStyled = styled.label`
  
`

const OptionStyled = styled.div<Pick<OptionProps, "selected">>`
`

const Select: React.FC<SelectProps> = ({
    id=String(Date.now()),
    children,
    theme="regular",
    title="Select",
}: SelectProps) => {
    return (

        <SelectWrapper
        id={id}
        theme={theme}
        >
            <LabelStyled>
                {title}
            </LabelStyled>
            {children}
        </SelectWrapper>
    )
}

const Option: React.FC<OptionProps> = ({
    id=String(Date.now()),
    selected=false,
    value
}: OptionProps) => {
    return (
        <OptionStyled
            id={id}
            selected={selected}
        >
            {value}
        </OptionStyled>
    )
}

export default { Select, Option };