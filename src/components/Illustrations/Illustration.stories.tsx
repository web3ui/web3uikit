import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Illustration from "./Illustration";
import colors from "../../styles/colors";
export default {
    title: "UI/Illustration",
    component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => <Illustration {...args}/>;

const ethColors = {
    fillOutline: `${colors.blueDark2}`,
    fillInlineLeft: `${colors.white}`,
    fillInlineRight: `´${colors.grey}`,
}

const bscColors = {
    fillOutline: `${colors.blueDark2}`,
    fillInlineLeft: `${colors.yellow}`,
    fillInlineRight: `${colors.yellow}`,
}

export const EthereumXS = Template.bind({});
EthereumXS.args = {
    logo: "ethereum",
    size: "xs",
    ...ethColors
}

export const EthereumS = Template.bind({});
EthereumS.args = {
    logo: "ethereum",
    size: "s",
    ...ethColors
}

export const EthereumM = Template.bind({});
EthereumM.args = {
    logo: "ethereum",
    size: "m",
    ...ethColors
}

export const EthereumL = Template.bind({});
EthereumL.args = {
    logo: "ethereum",
    size: "l",
    ...ethColors
}

export const EthereumXL = Template.bind({});
EthereumXL.args = {
    logo: "ethereum",
    size: "xl",
    ...ethColors
}

export const BinanceXS = Template.bind({});
BinanceXS.args = {
    logo: "binance",
    size: "xs",
    ...bscColors
}

export const BinanceS = Template.bind({});
BinanceS.args = {
    logo: "binance",
    size: "s",
    ...bscColors
}

export const BinanceM = Template.bind({});
BinanceM.args = {
    logo: "binance",
    size: "m",
    ...bscColors
}

export const BinanceL = Template.bind({});
BinanceL.args = {
    logo: "binance",
    size: "l",
    ...bscColors
}

export const BinanceXL = Template.bind({});
BinanceXL.args = {
    logo: "binance",
    size: "xl",
    ...bscColors
}