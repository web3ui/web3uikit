import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../../components/Input/Input";

export default {
	title: "Interaction/Input",
	component: Input,
} as ComponentMeta<typeof Input>;

const testEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
	console.log(event.target);

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
	onChange: testEvent,
	type: "text",
	label: "add text",
	name: "Test text Input",
	state: undefined,
};

export const TextInputError = Template.bind({});
TextInputError.args = {
	onChange: testEvent,
	type: "text",
	label: "something went wrong",
	name: "Test text Input error",
	state: "error",
};

export const TextInputConfirmed = Template.bind({});
TextInputConfirmed.args = {
	onChange: testEvent,
	type: "text",
	label: "ok, nice",
	name: "Test text Input confirmed",
	state: "confirmed",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
	onChange: testEvent,
	type: "email",
	label: "add email",
	name: "Test email Input",
	state: undefined,
};

export const EmailInputError = Template.bind({});
EmailInputError.args = {
	onChange: testEvent,
	type: "email",
	label: "something went wrong",
	name: "Test email Input error",
	state: "error",
};

export const EmailInputConfirmed = Template.bind({});
EmailInputConfirmed.args = {
	onChange: testEvent,
	type: "email",
	label: "ok, nice",
	name: "Test email Input confirmed",
	state: "confirmed",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
	onChange: testEvent,
	type: "number",
	label: "how many?",
	name: "Test number Input",
};

export const NumberInputConfirmed = Template.bind({});
NumberInputConfirmed.args = {
	onChange: testEvent,
	type: "number",
	label: "a good amount",
	name: "Test number Input confirmed",
	state: "confirmed",
};

export const NumberInputError = Template.bind({});
NumberInputError.args = {
	onChange: testEvent,
	type: "number",
	label: "maybe too many?",
	name: "Test number Input error",
	state: "error",
};

export const TelInput = Template.bind({});
TelInput.args = {
	onChange: testEvent,
	type: "tel",
	label: "whats your number?",
	name: "Test tel Input",
};

export const TelInputConfirmed = Template.bind({});
TelInputConfirmed.args = {
	onChange: testEvent,
	type: "tel",
	label: "I like those digits",
	name: "Test tel Input confirmed",
	state: "confirmed",
};

export const TelInputError = Template.bind({});
TelInputError.args = {
	onChange: testEvent,
	type: "tel",
	label: "This telephone number doesn't add up",
	name: "Test tel Input error",
	state: "error",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
	onChange: testEvent,
	type: "password",
	label: "enter a password",
	name: "Test Password Input",
};

export const PasswordInputConfirmed = Template.bind({});
PasswordInputConfirmed.args = {
	onChange: testEvent,
	type: "password",
	label: "good password",
	name: "Test Password Input confirmed",
	state: "confirmed",
};

export const PasswordInputError = Template.bind({});
PasswordInputError.args = {
	onChange: testEvent,
	type: "password",
	label: "bad password",
	name: "Test Password Input error",
	state: "error",
};
