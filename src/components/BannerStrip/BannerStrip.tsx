import React from "react";
import styled from "styled-components";
import bannerStripStyles from "./BannerStrip.styles";
import color from "../../styles/colors";
import fonts from "../../styles/fonts";

interface Props {
	/**
	 * please add the text you want to show in the banner
	 */
	text: string;

	/**
	 * you can set the type of banner which changes its color
	 */
	type?: "error" | "standard" | "success" | "warning";

	/**
	 * do you want to display a button
	 */
	buttonDisplayed?: boolean;

	/**
	 * a function that will be called if the button is clicked
	 */
	buttonClickEvent?: () => void;

	/**
	 * if you are showing a button, you can set the text of the button in the banner
	 */
	buttonText?: string;
}

const getBackgroundColor = (type: string) => {
	switch (type) {
		case "success":
			return color.green;
		case "warning":
			return color.yellow;
		case "error":
			return color.red;
		default:
			return color.blue;
	}
};

const Section = styled.section<Pick<Props, "type">>`
	${fonts.text}
	${bannerStripStyles.section}
  background-color: ${(p) => p.type && getBackgroundColor(p.type)};
`;

const Button = styled.button`
	${fonts.textBold}
	${bannerStripStyles.button}
`;

const BannerStrip: React.FC<Props> = ({
	buttonClickEvent,
	buttonDisplayed = false,
	buttonText = "ok",
	text,
	type = "standard",
}) => (
	<Section type={type} data-testid="banner-strip">
		<strong>{text}</strong>
		{buttonDisplayed && (
			<Button onClick={() => buttonClickEvent && buttonClickEvent()}>
				{buttonText}
			</Button>
		)}
	</Section>
);

export default BannerStrip;
