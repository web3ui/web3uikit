import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import { Icon } from "../Icon";
import { iconTypes } from "../Icon/collection";

export default {
	title: "Popup/Tooltip",
	component: Tooltip,
} as ComponentMeta<typeof Tooltip>;


const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const RegularNoChildren = Template.bind({});
RegularNoChildren.args = {
	
};

export const ChildrenNoText = Template.bind({});
ChildrenNoText.args = {
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const ChildrenText = Template.bind({});
ChildrenText.args = {
	position: "bottom",
	text: 'Are in trouble? No Problem we will help out!'
,	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};
