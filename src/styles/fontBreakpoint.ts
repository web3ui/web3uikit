import breakpoints from './breakpoints';
import { css } from 'styled-components';

export const fontSize = {
    h1: 36,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 16,
};

const h1 = css`
    @media screen and (max-width: ${breakpoints.xl}) {
        font-size: ${fontSize.h1 - 2}px;
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        font-size: ${fontSize.h1 - 4}px;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.h1 - 6}px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        font-size: ${fontSize.h1 - 8}px;
    }
`;

const h2 = css`
    @media screen and (max-width: ${breakpoints.xl}) {
        font-size: ${fontSize.h2 - 2}px;
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        font-size: ${fontSize.h2 - 4}px;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.h2 - 6}px;
    }
`;

const h3 = css`
    @media screen and (max-width: ${breakpoints.xl}) {
        font-size: ${fontSize.h3 - 2}px;
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        font-size: ${fontSize.h3 - 4}px;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.h3 - 6}px;
    }
`;

const h4 = css`
    @media screen and (max-width: ${breakpoints.lg}) {
        font-size: ${fontSize.h4 - 2}px;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.h4 - 4}px;
    }
`;

const h5 = css`
    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.h5 - 2}px;
    }
`;

export default { h1, h2, h3, h4, h5 };
