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

export const NotVisible = Template.bind({});
NotVisible.args = {
};

export const Bottom = Template.bind({});
Bottom.args = {
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const BottomCustomText = Template.bind({});
BottomCustomText.args = {
	position: "bottom",
	text: 'Are in trouble? No Problem we will help out!',
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const Top = Template.bind({});
Top.args = {
	position: "top",
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const TopCustomText = Template.bind({});
TopCustomText.args = {
	position: "top",
	text: 'Are in trouble? No Problem we will help out!',
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const Left = Template.bind({});
Left.args = {
	position: "left",
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const LeftCustomText = Template.bind({});
LeftCustomText.args = {
	position: "left",
	text: 'Are in trouble? No Problem we will help out!',
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const Right = Template.bind({});
Right.args = {
	position: "right",
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};

export const RightCustomText = Template.bind({});
RightCustomText.args = {
	position: "right",
	text: 'Are in trouble? No Problem we will help out!',
	children: [ <Icon svg={iconTypes.helpCircle} fill="grey"/> ]
};
