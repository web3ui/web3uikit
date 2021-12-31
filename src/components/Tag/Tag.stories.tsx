import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";

export default {
	title: "UI/Tag",
	component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Regular = Template.bind({});
Regular.args = {};

export const Discount = Template.bind({});
Discount.args = {
	text: "-35%",
	theme: "discount",
};

export const ActiveStatus = Template.bind({});
ActiveStatus.args = {
	text: "Active Tag",
	theme: "status",
	active: true,
};

export const InactiveStatus = Template.bind({});
InactiveStatus.args = {
	text: "Inactive Tag",
	theme: "status",
	active: false,
};

export const Green = Template.bind({});
Green.args = {
	text: "Green",
	color: "green",
};

export const Red = Template.bind({});
Red.args = {
	text: "Red",
	color: "red",
};

export const Gray = Template.bind({});
Gray.args = {
	text: "Gray",
	color: "gray",
};

export const Yellow = Template.bind({});
Yellow.args = {
	text: "Yellow",
	color: "yellow",
};

export const Blue = Template.bind({});
Blue.args = {
	text: "Blue",
	color: "blue",
};

export const Purple = Template.bind({});
Purple.args = {
	text: "Purple",
	color: "purple",
};

export const Pink = Template.bind({});
Pink.args = {
	text: "Pink",
	color: "pink",
};
