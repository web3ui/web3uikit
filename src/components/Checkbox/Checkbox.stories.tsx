import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
	title: "Interaction/Checkbox & Switch",
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const testEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
	console.log(event.target);

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Box = Template.bind({});
Box.args = {
	label: "Can I tick it?",
	name: "Test checkbox input",
	onChange: testEvent,
	id: "test-checkbox",
};

export const BoxOnByDefault = Template.bind({});
BoxOnByDefault.args = {
	checked: true,
	label: "Can I tick it?",
	name: "Test checkbox input",
	onChange: testEvent,
	id: "test-checkbox",
};

export const BoxDisabled = Template.bind({});
BoxDisabled.args = {
	disabled: true,
	label: "You can't tick this",
	name: "Test checkbox input",
	onChange: testEvent,
	id: "test-checkbox",
};

export const Switch = Template.bind({});
Switch.args = {
	label: "Switch it up",
	name: "Test switch input",
	onChange: testEvent,
	id: "test-switch",
	layout: "switch",
};

export const SwitchOnByDefault = Template.bind({});
SwitchOnByDefault.args = {
	checked: true,
	label: "Switch it up",
	name: "Test switch input",
	onChange: testEvent,
	id: "test-switch",
	layout: "switch",
};

export const SwitchDisabled = Template.bind({});
SwitchDisabled.args = {
	disabled: true,
	label: "No switching for you",
	name: "Test switch input",
	onChange: testEvent,
	id: "test-switch",
	layout: "switch",
};
