import React from "react";
import Card from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "UI/Card/NFT/Card",
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const NFT = Template.bind({});
NFT.args = {
	view: "Card",
};
