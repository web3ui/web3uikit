import color from './colors';
import fontBreakpoints from './fontBreakpoint';
import { fontSize } from './breakpoints';
import { css } from 'styled-components';

const heading = css`
    -webkit-font-smoothing: antialiased;
    color: ${color.grey};
    fill: ${color.grey};
    font-family: 'open-sans', sans-serif;
    font-size: ${fontSize.h1}px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;

    ${fontBreakpoints.h1};
`;

const h1 = css`
    font-size: ${fontSize.h1}px;
    line-height: 40px;
    letter-spacing: -0.75px;

    ${fontBreakpoints.h1};
`;

const h2 = css`
    font-size: ${fontSize.h2}px;
    line-height: 36px;

    ${fontBreakpoints.h2}
`;

const h3 = css`
    font-size: ${fontSize.h3}px;
    font-weight: 700;
    line-height: 32px;

    ${fontBreakpoints.h3}
`;

const h4 = css`
    font-size: ${fontSize.h4}px;
    line-height: 28px;

    ${fontBreakpoints.h4}
`;

const h5 = css`
    font-size: ${fontSize.h5}px;
    line-height: 25px;

    ${fontBreakpoints.h5}
`;

const ibm = css`
    font-family: IBM Plex Mono, 'Lucida Console', sans-serif;
    font-size: 16px;
    font-style: normal;
`;

const ibmMono = css`
    font-family: IBM Plex Mono, 'Lucida Console', monospace;
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

const openSans = css`
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', Tahoma, sans-serif;
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
};

export default fonts;
