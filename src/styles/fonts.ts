import color from './colors';
import { css } from 'styled-components';

const heading = css`
    -webkit-font-smoothing: antialiased;
    color: ${color.grey};
    fill: ${color.grey};
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;
`;

const h1 = css`
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.75px;
`;

const h2 = css`
    font-size: 28px;
    line-height: 36px;
`;

const h3 = css`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
`;

const h4 = css`
    font-size: 20px;
    line-height: 28px;
`;

const h5 = css`
    font-size: 16px;
    line-height: 25px;
`;

const ibm = css`
    font-family: IBM Plex Mono, sans-serif;
    font-size: 16px;
    font-style: normal;
`;

const ibmMono = css`
    font-family: IBM Plex Mono, monospace;
    font-size: 14px;
`;

const text = css`
    -webkit-font-smoothing: antialiased;
    color: ${color.grey};
    fill: ${color.grey};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`;

const textBold500 = css`
    font-weight: 500;
`;

const textBold = css`
    font-weight: 600;
`;

const textBold700 = css`
    font-weight: 700;
`;

const textSmall = css`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`;

const semiBold = css`
    ${text};
    font-weight: 600;
`;

const argentumSans = css`
    @import url('//db.onlinewebfonts.com/c/203f1615b37d6fb2fcd85695bc4c4b00?family=Argentum+Sans');
    font-family: 'Argentum Sans', sans-serif;
`;

const openSans = css`
    @import url('//fonts.googleapis.com/css?family=Open+Sans');
    font-family: 'Open Sans', sans-serif;
`;

const montserrat = css`
    @import url('//fonts.googleapis.com/css2?family=Montserrat');
    font-family: 'Montserrat', sans-serif;
`;

const creepster = css`
    @import url('//fonts.googleapis.com/css2?family=Creepster&display=swap');
    font-family: 'Creepster', cursive;
`;

const fonts = {
    h1,
    h2,
    h3,
    h4,
    h5,
    heading,
    ibm,
    ibmMono,
    text,
    textBold,
    textBold700,
    textSmall,
    semiBold,
    textBold500,
    openSans,
    montserrat,
    argentumSans,
    creepster,
};

export default fonts;
