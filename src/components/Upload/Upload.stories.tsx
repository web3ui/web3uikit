import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Upload from "./Upload";

export default {
	title: "UI/Form/Upload",
	component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Regular = Template.bind({});
Regular.args = {};