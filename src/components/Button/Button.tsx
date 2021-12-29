import React from "react";
import styled from "styled-components";
import buttonStyles from "./Button.styles";
import Icon from "../../components/Icon/Icon";
import { iconTypes } from "../../components/Icon/collection";

interface Props {
	/**
	 * The button ID will generated if not assigned
	 */
	id?: string;

	/**
	 * the function to be called on click
	 */
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

	/**
	 * set the button to be interactive, or not
	 */
	disabled?: boolean;

	/**
	 * What size should the button be
	 */
	size?: "small" | "regular" | "large";

	/**
	 * The text to display in the button
	 */
	text?: string;

	/**
	 * Set the color to show its importance to the user
	 */
	theme?: "primary" | "outline" | "secondary" | "colored";

	/**
	 * If 'theme' is set to 'colored', you can choose the color from these options
	 */
	color?: "blue" | "green" | "yellow" | "red";

	/**
	 * Set the HTML button type for form interaction
	 */
	type?: "button" | "submit" | "reset";

	/**
	 * set an icon to show inside the button
	 * import { iconTypes } from "../../components/Icon/collection"
	 */
	icon?: iconTypes;

	/**
	 * set an icon position, or maybe show only the icon
	 */
	iconLayout?: "leading" | "trailing" | "icon-only";
}

const getThemeStyles = (theme: string) => {
	switch (theme) {
		case "primary":
			return buttonStyles.primary;
		case "outline":
			return buttonStyles.outline;
		default:
			return buttonStyles.regular;
	}
};

const getIconLayoutStyles = (iconLayout: string) => {
	switch (iconLayout) {
		case "trailing":
			return buttonStyles.iconTrailing;
		case "icon-only":
			return buttonStyles.iconOnly;
		default:
			return buttonStyles.iconLeading;
	}
};

const getSizeStyles = (size: string) => {
	switch (size) {
		case "large":
			return buttonStyles.sizeLarge;
		case "small":
			return buttonStyles.sizeSmall;
		default:
			return buttonStyles.sizeRegular;
	}
};

const getColored = (color: string) => {
	switch (color) {
		case "red":
			return buttonStyles.coloredRed;
		case "green":
			return buttonStyles.coloredGreen;
		case "blue":
			return buttonStyles.coloredBlue;
		case "yellow":
			return buttonStyles.coloredYellow;
		default:
			return buttonStyles.regular;
	}
};

const smallIconResize = () => `
  height: 24px;
  width: 24px;
`;

const largeIconResize = () => `
  border-width: 4px;
  height: 40px;
  width: 40px;
`;

const iconOnlyBorderFix = (theme: string) => {
	switch (theme) {
		case "colored":
			return "border-width: 2px;";
		case "outline":
			return "border-width: 2px;";
		default:
			return;
	}
};

const ButtonStyled = styled.button<
	Pick<Props, "theme" | "iconLayout" | "size" | "color">
>`
	${buttonStyles.initialStyles}

	${(p) => p.theme && getThemeStyles(p.theme)}
  ${(p) => p.color && p.theme === "colored" && getColored(p.color)}
  ${(p) => p.size && getSizeStyles(p.size)}
  ${(p) => p.iconLayout && getIconLayoutStyles(p.iconLayout)}

  ${(p) =>
		p.iconLayout === "icon-only" && p.size === "small" && smallIconResize()}
  ${(p) =>
		p.iconLayout === "icon-only" && p.size === "large" && largeIconResize()}
  ${(p) => p.iconLayout === "icon-only" && iconOnlyBorderFix(p.theme)}
`;

const Button: React.FC<Props> = ({
	color,
	disabled = false,
	icon,
	iconLayout = "leading",
	id = String(Date.now()),
	onClick,
	size = "regular",
	text = "click",
	theme,
	type = "button",
}: Props) => {
	return (
		<ButtonStyled
			color={color}
			data-testid={id}
			disabled={disabled}
			iconLayout={iconLayout}
			id={id}
			onClick={onClick}
			size={size}
			theme={theme}
			type={type}
		>
			{icon && <Icon svg={icon} fill="inherit" size={20} />}
			<span>{text}</span>
		</ButtonStyled>
	);
};

export default Button;
