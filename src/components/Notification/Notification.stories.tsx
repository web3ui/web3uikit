import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from 'react';
import Notification from "../../components/Notification/Notification";
import { iconTypes } from "../Icon/collection";

export default {
	title: "UI/Notification",
	component: Notification,
} as ComponentMeta<typeof Notification>;


const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const Regular = Template.bind({});
Regular.args = {
	id: "test-Notification",
	message: "Somebody messaged you",
    title: "New Notification",
    active: true
};

export const Inactive = Template.bind({})
Inactive.args = {

}

export const Standard = Template.bind({});
Standard.args = {
    active: true
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
    active: true,
	icon: iconTypes.cloud,
	title: 'New Event Sync',
	message: 'TX: 0x2134...e82c5'
};