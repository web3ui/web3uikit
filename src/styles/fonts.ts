import color from "./colors";

const heading = `
  -webkit-font-smoothing: antialiased;
  color: ${color.grey};
  fill: ${color.grey};
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0px;
`;

const h1 = `
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.75px;
`;

const h2 = `
  font-size: 28px;
  line-height: 36px;
`;

const h3 = `
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

const h4 = `
  font-size: 20px;
  line-height: 28px;
`;

const text = `
  -webkit-font-smoothing: antialiased;
  color: ${color.grey};
  fill: ${color.grey};
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 24px;
`;

const textBold = `
  font-weight: 600;
`;

const fonts = {
	h1,
	h2,
	h3,
	h4,
	heading,
	text,
	textBold,
};

export default fonts;
