import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from 'react';
import Button from "../../components/Button/Button";
import { iconTypes } from "../Icon/collection";

export default {
	title: "Interaction/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const testEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
	console.log(event.target);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	onClick: testEvent,
	id: "test-button-primary",
	text: "Primary Button",
	theme: "primary",
	type: "button",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
	onClick: testEvent,
	id: "test-button-primary-large",
	text: "Large Primary",
	theme: "primary",
	type: "button",
	size: "large",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
	onClick: testEvent,
	id: "test-button-primary-small",
	text: "Small Primary",
	theme: "primary",
	type: "button",
	size: "small",
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
	onClick: testEvent,
	id: "test-button-primary-icon",
	text: "Primary with icon",
	theme: "primary",
	type: "button",
	icon: iconTypes.plus,
};

export const PrimaryWithIconAfter = Template.bind({});
PrimaryWithIconAfter.args = {
	onClick: testEvent,
	id: "test-button-primary-icon-after",
	text: "Primary with icon",
	theme: "primary",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "trailing",
};

export const PrimaryWithIconOnly = Template.bind({});
PrimaryWithIconOnly.args = {
	onClick: testEvent,
	id: "test-button-primary-icon-only",
	text: "Primary icon only",
	theme: "primary",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
};

export const PrimaryWithIconOnlyLarge = Template.bind({});
PrimaryWithIconOnlyLarge.args = {
	onClick: testEvent,
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	id: "test-button-primary-icon-only",
	size: "large",
	text: "Primary icon only",
	theme: "primary",
	type: "button",
};

export const PrimaryWithIconOnlySmall = Template.bind({});
PrimaryWithIconOnlySmall.args = {
	onClick: testEvent,
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	id: "test-button-primary-icon-only",
	size: "small",
	text: "Primary icon only",
	theme: "primary",
	type: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
	onClick: testEvent,
	id: "test-button",
	text: "Secondary Button",
	theme: "secondary",
	type: "button",
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
	onClick: testEvent,
	id: "test-button-secondary-icon",
	text: "Secondary with icon",
	theme: "secondary",
	type: "button",
	icon: iconTypes.plus,
};

export const SecondaryWithIconAfter = Template.bind({});
SecondaryWithIconAfter.args = {
	onClick: testEvent,
	id: "test-button-secondary-icon-after",
	text: "Secondary with icon",
	theme: "secondary",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "trailing",
};

export const SecondaryIconOnly = Template.bind({});
SecondaryIconOnly.args = {
	onClick: testEvent,
	id: "test-button-secondary-icon-only",
	text: "Secondary icon only",
	theme: "secondary",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
};

export const SecondaryIconOnlyLarge = Template.bind({});
SecondaryIconOnlyLarge.args = {
	onClick: testEvent,
	id: "test-button-secondary-icon-large",
	text: "Secondary icon large",
	theme: "secondary",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	size: "large",
};

export const SecondaryIconOnlySmall = Template.bind({});
SecondaryIconOnlySmall.args = {
	onClick: testEvent,
	id: "test-button-secondary-icon-small",
	text: "Secondary icon small",
	theme: "secondary",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	size: "small",
};

export const Outline = Template.bind({});
Outline.args = {
	onClick: testEvent,
	id: "test-button-outline",
	text: "Outline Button",
	theme: "outline",
	type: "button",
};

export const OutlineWithIcon = Template.bind({});
OutlineWithIcon.args = {
	onClick: testEvent,
	id: "test-button-outline-icon",
	text: "Outline with icon",
	theme: "outline",
	type: "button",
	icon: iconTypes.plus,
};

export const OutlineWithIconAfter = Template.bind({});
OutlineWithIconAfter.args = {
	onClick: testEvent,
	id: "test-button-outline-icon-after",
	text: "Outline with icon",
	theme: "outline",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "trailing",
};

export const OutlineIconOnly = Template.bind({});
OutlineIconOnly.args = {
	onClick: testEvent,
	id: "test-button-outline-icon-only",
	text: "Outline icon only",
	theme: "outline",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
};

export const OutlineIconOnlyLarge = Template.bind({});
OutlineIconOnlyLarge.args = {
	onClick: testEvent,
	id: "test-button-outline-icon-only",
	text: "Outline icon only",
	theme: "outline",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	size: "large",
};

export const OutlineIconOnlySmall = Template.bind({});
OutlineIconOnlySmall.args = {
	onClick: testEvent,
	id: "test-button-outline-icon-only",
	text: "Outline icon only",
	theme: "outline",
	type: "button",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	size: "small",
};

export const ColoredGreen = Template.bind({});
ColoredGreen.args = {
	onClick: testEvent,
	id: "test-button-colored-green",
	text: "Colored Green",
	theme: "colored",
	type: "button",
	color: "green",
};

export const ColoredRed = Template.bind({});
ColoredRed.args = {
	onClick: testEvent,
	id: "test-button-colored-red",
	text: "Colored Red",
	theme: "colored",
	type: "button",
	color: "red",
};

export const ColoredYellow = Template.bind({});
ColoredYellow.args = {
	onClick: testEvent,
	id: "test-button-colored-yellow",
	text: "Colored Yellow",
	theme: "colored",
	type: "button",
	color: "yellow",
};

export const ColoredBlue = Template.bind({});
ColoredBlue.args = {
	onClick: testEvent,
	id: "test-button-colored-blue",
	text: "Colored Blue",
	theme: "colored",
	type: "button",
	color: "blue",
};

export const ColoredLarge = Template.bind({});
ColoredLarge.args = {
	onClick: testEvent,
	id: "test-button-colored-large",
	text: "Colored Large",
	theme: "colored",
	type: "button",
	color: "blue",
	size: "large",
};

export const ColoredSmall = Template.bind({});
ColoredSmall.args = {
	onClick: testEvent,
	id: "test-button-colored-small",
	text: "Colored Small",
	theme: "colored",
	type: "button",
	color: "blue",
	size: "small",
};

export const ColoredIcon = Template.bind({});
ColoredIcon.args = {
	onClick: testEvent,
	id: "test-button-colored-icon",
	text: "Colored Icon",
	theme: "colored",
	type: "button",
	color: "blue",
	icon: iconTypes.plus,
};

export const ColoredIconAfter = Template.bind({});
ColoredIconAfter.args = {
	onClick: testEvent,
	id: "test-button-colored-icon-after",
	text: "Colored Icon",
	theme: "colored",
	type: "button",
	color: "blue",
	icon: iconTypes.plus,
	iconLayout: "trailing",
};

export const ColoredIconOnly = Template.bind({});
ColoredIconOnly.args = {
	onClick: testEvent,
	id: "test-button-colored-icon-only",
	text: "Colored Icon",
	theme: "colored",
	type: "button",
	color: "blue",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-primary",
	text: "Disabled Button",
	theme: "primary",
	type: "button",
};

export const DisabledSecondary = Template.bind({});
DisabledSecondary.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-secondary",
	text: "Disabled Button",
	theme: "secondary",
	type: "button",
};

export const DisabledOutline = Template.bind({});
DisabledOutline.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-outline",
	text: "Disabled Button",
	theme: "outline",
	type: "button",
};

export const DisabledColored = Template.bind({});
DisabledColored.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-colored",
	text: "Disabled Button",
	theme: "colored",
	type: "button",
	color: "red",
};

export const DisabledIcon = Template.bind({});
DisabledIcon.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-icon",
	text: "Disabled Button",
	theme: "colored",
	type: "button",
	color: "yellow",
	icon: iconTypes.plus,
};

export const DisabledIconAfter = Template.bind({});
DisabledIconAfter.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-icon-after",
	text: "Disabled Button",
	theme: "colored",
	type: "button",
	color: "green",
	icon: iconTypes.plus,
	iconLayout: "trailing",
};

export const DisabledIconOnly = Template.bind({});
DisabledIconOnly.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-icon-only",
	text: "Disabled Button",
	theme: "colored",
	type: "button",
	color: "blue",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
};

export const DisabledIconOnlyLarge = Template.bind({});
DisabledIconOnlyLarge.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-icon-only-large",
	text: "Disabled Button",
	theme: "colored",
	type: "button",
	color: "red",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	size: "large",
};

export const DisabledIconOnlySmall = Template.bind({});
DisabledIconOnlySmall.args = {
	onClick: testEvent,
	disabled: true,
	id: "test-button-disabled-icon-only-small",
	text: "Disabled Button",
	theme: "colored",
	type: "button",
	color: "yellow",
	icon: iconTypes.plus,
	iconLayout: "icon-only",
	size: "small",
};
