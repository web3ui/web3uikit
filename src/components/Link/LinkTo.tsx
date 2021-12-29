import React from "react";
import styled from "styled-components";
import resetCSS from "../../styles/reset";
import color from "../../styles/colors";
import fonts from "../../styles/fonts";
import Icon from "../../components/Icon/Icon";
import { iconTypes } from "../../components/Icon/collection";

interface Props {
	/**
	 * what is the address you are linking to
	 */
	address: string;

	/**
	 * You can set custom text to the link, or leave blank to see the address
	 */
	text?: string;

	/**
	 * set to an email link or a link to another website
	 */
	type: "email" | "external";

	/**
	 * set the position of the icon, or icon only
	 */
	iconLayout?: "leading" | "trailing";
}

const LinkStyled = styled.a<Pick<Props, "iconLayout">>`
	${resetCSS}
	${fonts.text}
  align-items: center;
	color: ${color.blue};
	display: inline-block;
	width: fit-content;

	.flex {
		align-items: baseline;
		display: flex;
		flex-direction: ${(p) =>
			p.iconLayout === "leading" ? "row" : "row-reverse"};
		margin: ${(p) =>
			p.iconLayout === "leading" ? "0 2px 0 4px" : "0 4px 0 2px"};
	}

	svg {
		margin: ${(p) => (p.iconLayout === "leading" ? "0 4px 0 0" : "0 0 0 4px")};
	}

	&:hover {
		color: ${color.blueDark};

		svg {
			fill: ${color.blueDark};
		}
	}
`;

const LinkTo: React.FC<Props> = ({
	address,
	text,
	type,
	iconLayout = "leading",
}) => (
	<LinkStyled
		data-testid="test-link-to"
		href={`${type === "email" ? "mailto:" : ""}${address}`}
		iconLayout={iconLayout}
		target={`${type === "email" ? "_self" : "_blank"}`}
	>
		<span className="flex">
			<Icon
				svg={type === "email" ? iconTypes.mail : iconTypes.link}
				fill={color.blue}
				size={14}
			/>

			<span data-testid="test-link-text">{text || address}</span>
		</span>
	</LinkStyled>
);

export default LinkTo;
