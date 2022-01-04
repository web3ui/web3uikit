import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from 'react';
import Pill from "./Pill";

export default {
	title: "Tab/Pill",
	component: Pill,
} as ComponentMeta<typeof Pill>;


const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Tab = Template.bind({});
Tab.args = {
}