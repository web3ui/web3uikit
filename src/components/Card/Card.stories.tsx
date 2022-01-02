import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import React from 'react'

export default {
	title: "UI/Card",
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Module = Template.bind({});
Module.args = {
	tooltipText: "Lorem Ipsum Dole met sai souni lokomit anici trenicid"
}