import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from 'react';
import Notification from "../../components/Notification/Notification";

export default {
	title: "UI/Notification",
	component: Notification,
} as ComponentMeta<typeof Notification>;


const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const Regular = Template.bind({});
Regular.args = {
	id: "test-Notification-primary",
	message: "Primary Notification",
    title: "Notification",
    active: true
};