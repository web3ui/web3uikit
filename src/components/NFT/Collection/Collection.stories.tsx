import { ComponentStory, ComponentMeta } from "@storybook/react";
import Collection from "./Collection";
import React from 'react'

export default {
	title: "UI/Card/NFT/Collection",
	component: Collection,
} as ComponentMeta<typeof Collection>;

const Template: ComponentStory<typeof Collection> = (args) => (
	<Collection {...args} />
);

export const List = Template.bind({});
List.args = {
	view: "Card",
};

export const Row = Template.bind({});
Row.args = {
	view: "Row",
};
