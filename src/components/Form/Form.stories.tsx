import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "./Form";

export default {
	title: "Interaction/Form",
	component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const DemoForm = Template.bind({});
DemoForm.args = {
	title: "Test form",
	data: [
		{
			name: "first name",
			type: "text",
			value: "",
		},
		{
			name: "your email",
			type: "email",
			value: "",
		},
		{
			name: "your digits",
			type: "tel",
			value: "",
		},
		{
			name: "your password",
			type: "password",
			value: "",
		},
		{
			name: "age",
			type: "number",
			value: "",
		},
		{
			name: "pizza fav",
			type: "box",
			value: "what toppings do you like?",
			options: ["pineapple", "peppers", "chillies"],
		},
		{
			name: "Morning checklist",
			type: "switch",
			value: "Check list",
			options: ["say GM", "make coffee", "build killer web3uiKit"],
		},
		{
			name: "pokemon",
			type: "radios",
			value: "who's that pokemon?",
			options: ["charmander", "squirtle", "bulbasaur"],
		},
	],
};
