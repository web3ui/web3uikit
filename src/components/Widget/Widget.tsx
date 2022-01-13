import {WidgetProps} from "./types";
import React from "react";
import { HintStyled, WidgetStyled, WidgetInfoBox, WidgetTitle, WidgetInfo } from "./Widget.style";
import colors from "../../styles/colors";
import {Icon} from "../Icon";
import {Tooltip} from "../Tooltip"
import {iconTypes} from "../Icon/collection";

const getHint = (hint: string) => {
    return (
        <HintStyled>
            <Tooltip text={hint} children={[<Icon fill={colors.blue} size={14} svg={iconTypes.helpCircle}/>]} />
        </HintStyled>
    )
}

const Widget: React.FC<WidgetProps> = ({
    id,
    description,
    hint,
    icon,
    title
}: WidgetProps) => {
    return (
        <WidgetStyled id={id}>
            {icon && <div style={{display: "grid", placeItems: "center", marginRight: '10px'}}><Icon size={30} fill={colors.blue} svg={icon}/></div>}
            <WidgetInfoBox>
                <WidgetTitle>{title}</WidgetTitle>
                <WidgetInfo>{description}</WidgetInfo>
            </WidgetInfoBox>
            {hint && getHint(hint)}
        </WidgetStyled>
    )
}

export default Widget