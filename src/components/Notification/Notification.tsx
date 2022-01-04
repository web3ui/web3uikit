import { NotificationProps } from "./types";
import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { iconTypes } from "../Icon/collection";
import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";
import color from "../../styles/colors";

const NotificationStyled = styled.div`
    ${resetCSS}
    ${fonts.text}
    background: #112F5C;
    border-radius: 20px;
    color: white;
    min-width: 270px;
    max-width: 25%;
    height: 5%;
    padding: 16px;
    display: flex;
    align-items: center;
`

const BoxStyled = styled.div`
    display: grid;
    width: 100%;
    margin-left: 0.5em;
`

const SpanStyled = styled.span`
    color: ${color.grey};
`

const Notification: React.FC<NotificationProps> = ({
id = String(Date.now()),
icon,
message,
title,
active,
}: NotificationProps) => {
    const [ visible, setVisible ] = useState(active)
    return (
        <>
        {visible && 
            <NotificationStyled
            id={id}
            >
                <Icon size={20} svg={icon || iconTypes.bell}/>
                <BoxStyled>
                    <div
                    style={{display: 'flex', justifyContent: 'space-between'}}
                    >
                        <p style={{margin: 0, fontWeight: 600}}>{title}</p>
                        <div onClick={() => setVisible(false)}>
                            <Icon size={20} svg={iconTypes.x}/>
                        </div>
                    </div>
                    <SpanStyled>{message}</SpanStyled>
                </BoxStyled>
            </NotificationStyled>
        }
        </>
    )
}

export default Notification;