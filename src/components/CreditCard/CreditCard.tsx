import {CreditCardProps} from "./types";
import React, {useState} from "react";
import {CreditCardStyled, LastDigitsStyled, RemoveIcon, TextStyled} from "./CreditCard.styles";
import {Radios} from "../Radios";
import {Icon} from "../Icon";
import colors from "../../styles/colors";
import {iconTypes} from "../Icon/collection";
import mastercard from "./Icons/mastercard";
import visa from "./Icons/visa";

const getBrand = (brand: "mastercard" | "visa") => {
    switch (brand) {
        case "mastercard":
            return mastercard();
        case "visa":
            return visa();
    }
}

const CreditCard: React.FC<CreditCardProps> = ({
    id,
    expiresAt,
    isExpired,
    lastDigits,
    name,
    type,
}: CreditCardProps) => {
    const [pressed, setPressed] = useState<boolean>(false)
    return (
        <CreditCardStyled isExpired={isExpired} onClick={() => setPressed(!pressed)} pressed={pressed}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Radios id={id || "radio-credit-card"} items={[""]} onChange={() => {}} />
                <RemoveIcon onClick={() => {}}>
                    <Icon size={20} svg={iconTypes.bin} fill={colors.red}/>
                </RemoveIcon>
            </div>
            <LastDigitsStyled>{`•••• ${lastDigits}`}</LastDigitsStyled>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <div style={{display: "flex", gap: "15px", color: "white"}}>
                    <TextStyled>{name}</TextStyled>
                    <TextStyled>{expiresAt}</TextStyled>
                </div>
                {getBrand(type)}
            </div>
        </CreditCardStyled>
    )
}

export default CreditCard;