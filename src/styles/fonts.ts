import color from './colors';

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

const h5 = `
    font-size: 16px;
    line-height: 25px;
`;

const ibm = `
  font-family: IBM Plex Mono;
  font-size: 16px;
  font-style: normal;
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

const textBold500 = `
  font-weight: 500;
`;

const textBold = `
  font-weight: 600;
`;

const textBold700 = `
  font-weight: 700;
`;

const textSmall = `
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24px;
`;

const semiBold = `
  ${text}
  font-weight: 600;
`;

const openSans = `
    font-family: Open Sans;
`;

const montserrat = `
    font-family: Montserrat;
`;

const fonts = {
    h1,
    h2,
    h3,
    h4,
    h5,
    heading,
    ibm,
    text,
    textBold,
    textBold700,
    textSmall,
    semiBold,
    textBold500,
    openSans,
    montserrat,
};

export default fonts;
