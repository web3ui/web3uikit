import React from "react";
import styled from "styled-components";
import resetCSS from "../../styles/reset";
import color from "../../styles/colors";
import fonts from "../../styles/fonts";
import Icon from "../Icon/Icon";
import { iconTypes } from "../Icon/collection";
import { LinkToProps } from "./types";

const LinkStyled = styled.a<Pick<LinkToProps, "iconLayout">>`
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

const LinkTo: React.FC<LinkToProps> = ({
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
