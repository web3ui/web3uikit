import {WidgetProps} from "./types";
import React from "react";
import { HintStyled, WidgetStyled, WidgetInfoBox, WidgetTitle, WidgetInfo } from "./Widget.style";
import colors from "../../styles/colors";
import {Icon} from "../Icon";
import {Tooltip} from "../Tooltip"
import {iconTypes} from "../Icon/collection";

const getHint = (iconLayout: "leading" | "trailing" | "none", hint: string) => {
    return (
        <HintStyled iconLayout={iconLayout}>
            <Tooltip text={hint} children={[<Icon fill={colors.blue} size={14} svg={iconTypes.helpCircle}/>]} />
        </HintStyled>
    )
}

const Widget: React.FC<WidgetProps> = ({
    id,
    description,
    hint,
    icon,
    iconLayout,
    title
}: WidgetProps) => {
    return (
        <WidgetStyled iconLayout={iconLayout} id={id}>
            <WidgetInfoBox>
                <WidgetTitle>{title}</WidgetTitle>
                <WidgetInfo>{description}</WidgetInfo>
            </WidgetInfoBox>
            {hint && getHint(iconLayout, hint)}
            {icon && <div style={{display: "grid", placeItems: "center", marginRight: '10px'}}><Icon size={30} fill={colors.blue} svg={icon}/></div>}
        </WidgetStyled>
    )
}

export default Widget