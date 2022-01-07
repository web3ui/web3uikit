import React from "react";
import {chain, IllustrationProps, logos, size} from "./types";
import ethereum from "./Chains/logos/ethereum";
import binance from "./Chains/logos/binance"
import colors from "../../styles/colors";

const getLogo = (logo: chain | logos, fillOutline: string, fillInlineLeft: string, fillInlineRight: string, size: size) => {
    switch (logo) {
        case "ethereum":
            return ethereum(fillOutline,fillInlineLeft,fillInlineRight,size);
        case "binance":
            return binance(fillOutline, fillInlineLeft, fillInlineRight, size);
        default:
            return ethereum(fillOutline,fillInlineLeft,fillInlineRight,size);
    }
}

const Illustration: React.FC<IllustrationProps> = ({
    id = String(Date.now()),
    logo,
    size = "xs",
    fillOutline = `${colors.blueDark2}`,
    fillInlineLeft = `${colors.grey}`,
    fillInlineRight = `${colors.grey}`,
}: IllustrationProps) => {
    return (
        <div
        id={id}
        >
            {getLogo(logo, fillOutline, fillInlineLeft, fillInlineRight, size)}
        </div>
    )
}

export default Illustration;