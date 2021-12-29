const color = {
	blue: "#2E7DAF",
	blueDark: "#041836",
	blueLight: "#F2F6FF",
	blueSky: "#9ECCEA",
	green: "#21BF96",
	greenDark: "#0FA67F",
	greenLight: "#7AD9C0",
	grey: "#68738D",
	greyDark: "#333333",
	greyLight: "#C5CDD9",
	red: "#EB5757",
	white: "#FFFFFF",
	yellow: "#ECA609",
};

export const getShade = (shade: "light" | "dark", percent: number) =>
	`rgba(
    ${shade === "light" ? "255, 255, 255," : "0, 0, 0,"}
    ${String(percent / 100)}
  )`;

export default color;
